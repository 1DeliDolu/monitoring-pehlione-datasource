package plugin

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	neturl "net/url"
	"strings"
	"time"

	"github.com/grafana/grafana-plugin-sdk-go/backend"
	"github.com/grafana/grafana-plugin-sdk-go/backend/instancemgmt"
	"github.com/grafana/grafana-plugin-sdk-go/data"
	"github.com/pehlione/monitoring/pkg/models"
)

// Make sure Datasource implements required interfaces. This is important to do
// since otherwise we will only get a not implemented error response from plugin in
// runtime. In this example datasource instance implements backend.QueryDataHandler,
// backend.CheckHealthHandler interfaces. Plugin should not implement all these
// interfaces - only those which are required for a particular task.
var (
	_ backend.QueryDataHandler      = (*Datasource)(nil)
	_ backend.CheckHealthHandler    = (*Datasource)(nil)
	_ instancemgmt.InstanceDisposer = (*Datasource)(nil)
)

// NewDatasource creates a new datasource instance.
func NewDatasource(_ context.Context, _ backend.DataSourceInstanceSettings) (instancemgmt.Instance, error) {
	return &Datasource{}, nil
}

// Datasource is an example datasource which can respond to data queries, reports
// its health and has streaming skills.
type Datasource struct{}

// Dispose here tells plugin SDK that plugin wants to clean up resources when a new instance
// created. As soon as datasource settings change detected by SDK old datasource instance will
// be disposed and a new one will be created using NewSampleDatasource factory function.
func (d *Datasource) Dispose() {
	// Clean up datasource instance resources.
}

// QueryData handles multiple queries and returns multiple responses.
// req contains the queries []DataQuery (where each query contains RefID as a unique identifier).
// The QueryDataResponse contains a map of RefID to the response for each query, and each response
// contains Frames ([]*Frame).
func (d *Datasource) QueryData(ctx context.Context, req *backend.QueryDataRequest) (*backend.QueryDataResponse, error) {
	// create response struct
	response := backend.NewQueryDataResponse()

	// loop over queries and execute them individually.
	for _, q := range req.Queries {
		res := d.query(ctx, req.PluginContext, q)

		// save the response in a hashmap
		// based on with RefID as identifier
		response.Responses[q.RefID] = res
	}

	return response, nil
}

type queryModel struct {
	Metric string `json:"metric"`
}

type DiskInfo struct {
	Name       string  `json:"name"`
	MountPoint string  `json:"mount_point"`
	UsedPct    float64 `json:"used_pct"`
}

type Metric struct {
	Timestamp      int64      `json:"timestamp"`
	Hostname       string     `json:"hostname"`
	CpuUsagePct    float64    `json:"cpu_usage_pct"`
	LoadAvgOne     float64    `json:"load_avg_one"`
	LoadAvgFive    float64    `json:"load_avg_five"`
	LoadAvgFifteen float64    `json:"load_avg_fifteen"`
	MemUsedMB      float64    `json:"mem_used_mb"`
	MemTotalMB     float64    `json:"mem_total_mb"`
	Disks          []DiskInfo `json:"disks"`
}

func (d *Datasource) query(_ context.Context, pCtx backend.PluginContext, query backend.DataQuery) backend.DataResponse {
	var response backend.DataResponse

	// Unmarshal the JSON into our queryModel.
	var qm queryModel

	err := json.Unmarshal(query.JSON, &qm)
	if err != nil {
		return backend.ErrDataResponse(backend.StatusBadRequest, fmt.Sprintf("json unmarshal: %v", err.Error()))
	}

	// Load datasource settings
	if pCtx.DataSourceInstanceSettings == nil {
		return backend.ErrDataResponse(backend.StatusBadRequest, "missing data source settings")
	}
	config, cfgErr := models.LoadPluginSettings(*pCtx.DataSourceInstanceSettings)
	if cfgErr != nil {
		return backend.ErrDataResponse(backend.StatusBadRequest, fmt.Sprintf("load settings: %v", cfgErr.Error()))
	}

	baseURL := config.Path
	if baseURL == "" {
		baseURL = "http://127.0.0.1:7000"
	}
	apiToken := config.Secrets.ApiKey

	metrics, fetchErr := fetchMetrics(baseURL, apiToken, query.TimeRange.From, query.TimeRange.To)
	if fetchErr != nil {
		return backend.ErrDataResponse(backend.StatusBadGateway, fmt.Sprintf("fetch metrics: %v", fetchErr.Error()))
	}

	frame := createDataFrame(metrics, qm.Metric)
	response.Frames = append(response.Frames, frame)
	return response
}

func fetchMetrics(baseURL, token string, from, to time.Time) ([]Metric, error) {
	base := strings.TrimRight(baseURL, "/") + "/history"
	u, err := neturl.Parse(base)
	if err != nil {
		return nil, fmt.Errorf("invalid base url: %w", err)
	}
	q := u.Query()
	if token != "" {
		q.Set("api_token", token)
	}
	if !from.IsZero() {
		q.Set("from", fmt.Sprintf("%d", from.UnixMilli()))
	}
	if !to.IsZero() {
		q.Set("to", fmt.Sprintf("%d", to.UnixMilli()))
	}
	u.RawQuery = q.Encode()

	req, err := http.NewRequest(http.MethodGet, u.String(), nil)
	if err != nil {
		return nil, err
	}
	// Optional: header-based auth if backend supports it in addition to query param
	// if token != "" {
	//     req.Header.Set("Authorization", "Bearer "+token)
	// }
	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()
	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return nil, fmt.Errorf("http status %d", resp.StatusCode)
	}
	dec := json.NewDecoder(resp.Body)
	var metrics []Metric
	if err := dec.Decode(&metrics); err != nil {
		return nil, err
	}
	return metrics, nil
}

func createDataFrame(metrics []Metric, metricFilter string) *data.Frame {
	times := make([]time.Time, len(metrics))
	cpu := make([]float64, len(metrics))
	memPct := make([]float64, len(metrics))
	load1 := make([]float64, len(metrics))

	diskSeries := map[string][]float64{}

	for i, m := range metrics {
		times[i] = time.UnixMilli(m.Timestamp)
		cpu[i] = m.CpuUsagePct
		if m.MemTotalMB > 0 {
			memPct[i] = (m.MemUsedMB / m.MemTotalMB) * 100
		}
		load1[i] = m.LoadAvgOne

		for _, d := range m.Disks {
			if _, ok := diskSeries[d.MountPoint]; !ok {
				diskSeries[d.MountPoint] = make([]float64, len(metrics))
			}
			diskSeries[d.MountPoint][i] = d.UsedPct
		}
	}

	frame := data.NewFrame("system_metrics",
		data.NewField("time", nil, times),
	)

	// Decide which fields to include, based on metricFilter
	switch metricFilter {
	case "cpu_usage_pct", "cpu", "CPU":
		frame.Fields = append(frame.Fields, data.NewField("CPU (%)", nil, cpu))
	case "mem_pct", "mem", "memory":
		frame.Fields = append(frame.Fields, data.NewField("Memory (%)", nil, memPct))
	case "load_avg_one", "load":
		frame.Fields = append(frame.Fields, data.NewField("Load Avg (1m)", nil, load1))
	case "disk":
		for mount, values := range diskSeries {
			name := fmt.Sprintf("Disk %s Used (%%)", mount)
			frame.Fields = append(frame.Fields, data.NewField(name, nil, values))
		}
	default:
		// If no filter provided, include a sensible default set
		frame.Fields = append(frame.Fields,
			data.NewField("CPU (%)", nil, cpu),
			data.NewField("Memory (%)", nil, memPct),
			data.NewField("Load Avg (1m)", nil, load1),
		)
		for mount, values := range diskSeries {
			name := fmt.Sprintf("Disk %s Used (%%)", mount)
			frame.Fields = append(frame.Fields, data.NewField(name, nil, values))
		}
	}

	return frame
}

// CheckHealth handles health checks sent from Grafana to the plugin.
// The main use case for these health checks is the test button on the
// datasource configuration page which allows users to verify that
// a datasource is working as expected.
func (d *Datasource) CheckHealth(_ context.Context, req *backend.CheckHealthRequest) (*backend.CheckHealthResult, error) {
	res := &backend.CheckHealthResult{}
	config, err := models.LoadPluginSettings(*req.PluginContext.DataSourceInstanceSettings)

	if err != nil {
		res.Status = backend.HealthStatusError
		res.Message = "Unable to load settings"
		return res, nil
	}

	if config.Secrets.ApiKey == "" {
		res.Status = backend.HealthStatusError
		res.Message = "API key is missing"
		return res, nil
	}

	return &backend.CheckHealthResult{
		Status:  backend.HealthStatusOk,
		Message: "Data source is working",
	}, nil
}
