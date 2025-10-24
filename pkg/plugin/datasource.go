package plugin

import (
	"context"
	"encoding/json"
	"fmt"
	"math"
	"net/http"
	neturl "net/url"
	"strconv"
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
	Endpoint string `json:"endpoint"`
	Metric   string `json:"metric"`
	Group    string `json:"group"`
}

type DiskInfo struct {
	Name       string  `json:"name"`
	MountPoint string  `json:"mount_point"`
	Filesystem string  `json:"filesystem"`
	TotalGB    float64 `json:"total_gb"`
	UsedGB     float64 `json:"used_gb"`
	UsedPct    float64 `json:"used_pct"`
}

type Metric struct {
	Timestamp         int64      `json:"timestamp"`
	Hostname          *string    `json:"hostname"`
	UptimeSeconds     uint64     `json:"uptime_seconds"`
	CpuUsagePct       float64    `json:"cpu_usage_pct"`
	LoadAvgOne        *float64   `json:"load_avg_one"`
	LoadAvgFive       *float64   `json:"load_avg_five"`
	LoadAvgFifteen    *float64   `json:"load_avg_fifteen"`
	MemUsedMB         uint64     `json:"mem_used_mb"`
	MemTotalMB        uint64     `json:"mem_total_mb"`
	MemAvailableMB    uint64     `json:"mem_available_mb"`
	Disks             []DiskInfo `json:"disks"`
	GpuUsagePct       *float64   `json:"gpu_usage_pct"`
	GpuMemoryUsagePct *float64   `json:"gpu_memory_usage_pct"`
	Gpus              []GpuInfo  `json:"gpus"`
}

type AppsResponse struct {
	Timestamp       int64                   `json:"timestamp"`
	Hostname        *string                 `json:"hostname"`
	IntervalSeconds uint64                  `json:"interval_seconds"`
	Cpu             *AppsCpu                `json:"cpu"`
	Memory          AppsMemory              `json:"memory"`
	Disk            []DiskInfo              `json:"disk"`
	Network         []NetworkInterfaceUsage `json:"network"`
	Processes       []ProcessEntry          `json:"processes"`
	Gpu             *AppsGpu                `json:"gpu"`
}

type AppsMemory struct {
	TotalMB     uint64 `json:"total_mb"`
	UsedMB      uint64 `json:"used_mb"`
	AvailableMB uint64 `json:"available_mb"`
	SwapTotalMB uint64 `json:"swap_total_mb"`
	SwapUsedMB  uint64 `json:"swap_used_mb"`
	SwapFreeMB  uint64 `json:"swap_free_mb"`
}

type AppsCpu struct {
	UsagePct       float64   `json:"usage_pct"`
	PerCorePct     []float64 `json:"per_core_pct"`
	LogicalCores   int       `json:"logical_cores"`
	PhysicalCores  *int      `json:"physical_cores"`
	LoadAvgOne     *float64  `json:"load_avg_one"`
	LoadAvgFive    *float64  `json:"load_avg_five"`
	LoadAvgFifteen *float64  `json:"load_avg_fifteen"`
}

type AppsGpu struct {
	UsagePct       *float64  `json:"usage_pct"`
	MemoryUsagePct *float64  `json:"memory_usage_pct"`
	Gpus           []GpuInfo `json:"gpus"`
}

type ProcessEntry struct {
	PID                 int64   `json:"pid"`
	Name                string  `json:"name"`
	CpuPct              float64 `json:"cpu_pct"`
	MemoryMB            uint64  `json:"memory_mb"`
	MemoryPct           float64 `json:"memory_pct"`
	VirtualMemoryMB     uint64  `json:"virtual_memory_mb"`
	Status              *string `json:"status"`
	DiskReadBytesTotal  uint64  `json:"disk_read_bytes_total"`
	DiskWriteBytesTotal uint64  `json:"disk_write_bytes_total"`
	DiskReadKbps        float64 `json:"disk_read_kbps"`
	DiskWriteKbps       float64 `json:"disk_write_kbps"`
	ThreadCount         *int    `json:"thread_count"`
}

type GpuInfo struct {
	Index              uint32   `json:"index"`
	Name               string   `json:"name"`
	UUID               *string  `json:"uuid"`
	GpuUsagePct        *float64 `json:"gpu_usage_pct"`
	MemoryUsedMB       *uint64  `json:"memory_used_mb"`
	MemoryTotalMB      *uint64  `json:"memory_total_mb"`
	MemoryUsagePct     *float64 `json:"memory_usage_pct"`
	TemperatureCelsius *float64 `json:"temperature_celsius"`
}

type NetworkInterfaceUsage struct {
	Name                  string  `json:"name"`
	ReceivedTotalBytes    uint64  `json:"received_total_bytes"`
	TransmittedTotalBytes uint64  `json:"transmitted_total_bytes"`
	ReceivedKbps          float64 `json:"received_kbps"`
	TransmittedKbps       float64 `json:"transmitted_kbps"`
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
	// Replace localhost with 127.0.0.1 to avoid IPv6 issues
	baseURL = strings.ReplaceAll(baseURL, "localhost", "127.0.0.1")
	apiToken := config.Secrets.ApiKey

	// Default endpoint to 'history' if not specified
	endpoint := qm.Endpoint
	if endpoint == "" {
		endpoint = "history"
	}

	switch endpoint {
	case "apps":
		appsData, fetchErr := fetchAppsMetrics(baseURL, apiToken)
		if fetchErr != nil {
			return backend.ErrDataResponse(backend.StatusBadGateway, fmt.Sprintf("fetch apps: %v", fetchErr.Error()))
		}
		frame := createAppsFrame(appsData, qm.Metric)
		response.Frames = append(response.Frames, frame)
	default:
		metrics, fetchErr := fetchMetrics(baseURL, apiToken, endpoint, query.TimeRange.From, query.TimeRange.To)
		if fetchErr != nil {
			return backend.ErrDataResponse(backend.StatusBadGateway, fmt.Sprintf("fetch metrics: %v", fetchErr.Error()))
		}

		frame := createDataFrame(metrics, qm.Metric)
		response.Frames = append(response.Frames, frame)
	}
	return response
}

func fetchMetrics(baseURL, token, endpoint string, from, to time.Time) ([]Metric, error) {
	// Force replace localhost with 127.0.0.1 to avoid IPv6 issues
	baseURL = strings.ReplaceAll(baseURL, "localhost", "127.0.0.1")
	baseURL = strings.ReplaceAll(baseURL, "http://[::1]", "http://127.0.0.1")

	base := strings.TrimRight(baseURL, "/") + "/api/" + endpoint
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

	// For "system" endpoint, response is a single object, not an array
	if endpoint == "system" {
		var singleMetric Metric
		if err := dec.Decode(&singleMetric); err != nil {
			return nil, err
		}
		return []Metric{singleMetric}, nil
	}

	// For "history" and other endpoints, response is an array
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
	memUsed := make([]float64, len(metrics))
	load1 := make([]float64, len(metrics))
	load5 := make([]float64, len(metrics))
	load15 := make([]float64, len(metrics))
	gpuUsage := make([]float64, len(metrics))
	gpuMemory := make([]float64, len(metrics))

	diskSeries := map[string][]float64{}
	gpuUsageSeries := map[string][]float64{}
	gpuMemorySeries := map[string][]float64{}
	gpuKeys := make([]string, 0)

	for i, m := range metrics {
		times[i] = time.UnixMilli(m.Timestamp)
		cpu[i] = m.CpuUsagePct
		memUsed[i] = float64(m.MemUsedMB)
		if m.MemTotalMB > 0 {
			memPct[i] = (float64(m.MemUsedMB) / float64(m.MemTotalMB)) * 100
		}
		if m.LoadAvgOne != nil {
			load1[i] = *m.LoadAvgOne
		}
		if m.LoadAvgFive != nil {
			load5[i] = *m.LoadAvgFive
		}
		if m.LoadAvgFifteen != nil {
			load15[i] = *m.LoadAvgFifteen
		}

		gpuUsage[i] = 0.0
		if m.GpuUsagePct != nil {
			gpuUsage[i] = *m.GpuUsagePct
		}

		gpuMemory[i] = 0.0
		if m.GpuMemoryUsagePct != nil {
			gpuMemory[i] = *m.GpuMemoryUsagePct
		}

		for _, d := range m.Disks {
			if _, ok := diskSeries[d.MountPoint]; !ok {
				diskSeries[d.MountPoint] = make([]float64, len(metrics))
			}
			diskSeries[d.MountPoint][i] = d.UsedPct
		}

		currentGpuKeys := make(map[string]struct{})
		for _, g := range m.Gpus {
			key := fmt.Sprintf("GPU%d %s", g.Index, g.Name)
			if _, ok := gpuUsageSeries[key]; !ok {
				gpuUsageSeries[key] = make([]float64, len(metrics))
				gpuMemorySeries[key] = make([]float64, len(metrics))
				gpuKeys = append(gpuKeys, key)
			}

			usageValue := 0.0
			if g.GpuUsagePct != nil {
				usageValue = *g.GpuUsagePct
			}
			gpuUsageSeries[key][i] = usageValue

			memValue := 0.0
			if g.MemoryUsagePct != nil {
				memValue = *g.MemoryUsagePct
			}
			gpuMemorySeries[key][i] = memValue
			currentGpuKeys[key] = struct{}{}
		}

		for _, key := range gpuKeys {
			if _, ok := currentGpuKeys[key]; !ok {
				gpuUsageSeries[key][i] = 0.0
				gpuMemorySeries[key][i] = 0.0
			}
		}
	}

	frame := data.NewFrame("system_metrics",
		data.NewField("time", nil, times),
	)

	// Decide which fields to include, based on metricFilter
	switch metricFilter {
	case "gpu_usage_pct":
		frame.Fields = append(frame.Fields, data.NewField("GPU Usage (%)", nil, gpuUsage))
	case "gpu_memory_pct":
		frame.Fields = append(frame.Fields, data.NewField("GPU Memory (%)", nil, gpuMemory))
	case "cpu_usage_pct", "cpu", "CPU":
		frame.Fields = append(frame.Fields, data.NewField("CPU (%)", nil, cpu))
	case "mem_pct", "mem", "memory":
		frame.Fields = append(frame.Fields, data.NewField("Memory (%)", nil, memPct))
	case "mem_used_mb":
		frame.Fields = append(frame.Fields, data.NewField("Memory Used (MB)", nil, memUsed))
	case "load_avg_one", "load":
		frame.Fields = append(frame.Fields, data.NewField("Load Avg (1m)", nil, load1))
	case "load_avg_five":
		frame.Fields = append(frame.Fields, data.NewField("Load Avg (5m)", nil, load5))
	case "load_avg_fifteen":
		frame.Fields = append(frame.Fields, data.NewField("Load Avg (15m)", nil, load15))
	case "disk":
		for mount, values := range diskSeries {
			name := fmt.Sprintf("Disk %s (%%)", mount)
			frame.Fields = append(frame.Fields, data.NewField(name, nil, values))
		}
	case "gpu":
		if len(gpuKeys) == 0 {
			frame.Fields = append(frame.Fields, data.NewField("GPU Util (%%)", nil, []float64{0}))
			break
		}
		for _, key := range gpuKeys {
			usageFieldName := fmt.Sprintf("%s Util (%%)", key)
			frame.Fields = append(frame.Fields, data.NewField(usageFieldName, nil, gpuUsageSeries[key]))
			memoryFieldName := fmt.Sprintf("%s Mem (%%)", key)
			frame.Fields = append(frame.Fields, data.NewField(memoryFieldName, nil, gpuMemorySeries[key]))
		}
	case "all":
		// Include all metrics
		frame.Fields = append(frame.Fields,
			data.NewField("CPU (%)", nil, cpu),
			data.NewField("Memory (%)", nil, memPct),
			data.NewField("Memory Used (MB)", nil, memUsed),
			data.NewField("Load Avg (1m)", nil, load1),
			data.NewField("Load Avg (5m)", nil, load5),
			data.NewField("Load Avg (15m)", nil, load15),
		)
		for mount, values := range diskSeries {
			name := fmt.Sprintf("Disk %s (%%)", mount)
			frame.Fields = append(frame.Fields, data.NewField(name, nil, values))
		}
		for _, key := range gpuKeys {
			usageFieldName := fmt.Sprintf("%s Util (%%)", key)
			frame.Fields = append(frame.Fields, data.NewField(usageFieldName, nil, gpuUsageSeries[key]))
			memoryFieldName := fmt.Sprintf("%s Mem (%%)", key)
			frame.Fields = append(frame.Fields, data.NewField(memoryFieldName, nil, gpuMemorySeries[key]))
		}
	default:
		// If no filter provided, include a sensible default set
		frame.Fields = append(frame.Fields,
			data.NewField("CPU (%)", nil, cpu),
			data.NewField("Memory (%)", nil, memPct),
			data.NewField("Load Avg (1m)", nil, load1),
		)
	}

	return frame
}

func fetchAppsMetrics(baseURL, token string) (*AppsResponse, error) {
	baseURL = strings.ReplaceAll(baseURL, "localhost", "127.0.0.1")
	baseURL = strings.ReplaceAll(baseURL, "http://[::1]", "http://127.0.0.1")

	base := strings.TrimRight(baseURL, "/") + "/api/apps"
	u, err := neturl.Parse(base)
	if err != nil {
		return nil, fmt.Errorf("invalid base url: %w", err)
	}
	q := u.Query()
	if token != "" {
		q.Set("api_token", token)
	}
	u.RawQuery = q.Encode()

	req, err := http.NewRequest(http.MethodGet, u.String(), nil)
	if err != nil {
		return nil, err
	}

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return nil, fmt.Errorf("http status %d", resp.StatusCode)
	}

	var payload AppsResponse
	if err := json.NewDecoder(resp.Body).Decode(&payload); err != nil {
		return nil, err
	}
	return &payload, nil
}

func createAppsFrame(apps *AppsResponse, metricFilter string) *data.Frame {
	rowCount := len(apps.Processes)
	timestamp := time.UnixMilli(apps.Timestamp)

	if metricFilter == "" {
		metricFilter = "table"
	}

	meta := &data.FrameMeta{
		Custom: map[string]any{
			"interval_seconds": apps.IntervalSeconds,
			"memory_total_mb":  apps.Memory.TotalMB,
			"memory_used_mb":   apps.Memory.UsedMB,
			"memory_available": apps.Memory.AvailableMB,
			"process_count":    len(apps.Processes),
			"hostname":         apps.Hostname,
			"timestamp":        apps.Timestamp,
		},
	}

	if metricFilter == "table" {
		times := make([]time.Time, rowCount)
		pids := make([]int64, rowCount)
		names := make([]string, rowCount)
		cpu := make([]float64, rowCount)
		memMB := make([]float64, rowCount)
		memPct := make([]float64, rowCount)
		virtualMemMB := make([]float64, rowCount)
		statuses := make([]string, rowCount)
		diskReadKbps := make([]float64, rowCount)
		diskWriteKbps := make([]float64, rowCount)
		diskReadTotalMB := make([]float64, rowCount)
		diskWriteTotalMB := make([]float64, rowCount)
		threadCounts := make([]float64, rowCount)

		for i, proc := range apps.Processes {
			times[i] = timestamp
			pids[i] = proc.PID
			names[i] = proc.Name
			cpu[i] = proc.CpuPct
			memMB[i] = float64(proc.MemoryMB)
			memPct[i] = proc.MemoryPct
			virtualMemMB[i] = float64(proc.VirtualMemoryMB)
			if proc.Status != nil {
				statuses[i] = *proc.Status
			} else {
				statuses[i] = ""
			}
			diskReadKbps[i] = proc.DiskReadKbps
			diskWriteKbps[i] = proc.DiskWriteKbps
			diskReadTotalMB[i] = bytesToMegabytes(proc.DiskReadBytesTotal)
			diskWriteTotalMB[i] = bytesToMegabytes(proc.DiskWriteBytesTotal)
			if proc.ThreadCount != nil {
				threadCounts[i] = float64(*proc.ThreadCount)
			} else {
				threadCounts[i] = math.NaN()
			}
		}

		frame := data.NewFrame("process_metrics_table")
		frame.Meta = meta
		frame.Meta.PreferredVisualization = data.VisTypeTable

		frame.Fields = append(frame.Fields,
			data.NewField("time", nil, times),
			data.NewField("pid", nil, pids),
			data.NewField("name", nil, names),
			data.NewField("cpu_pct", nil, cpu),
			data.NewField("memory_mb", nil, memMB),
			data.NewField("memory_pct", nil, memPct),
			data.NewField("virtual_memory_mb", nil, virtualMemMB),
			data.NewField("status", nil, statuses),
			data.NewField("disk_read_kbps", nil, diskReadKbps),
			data.NewField("disk_write_kbps", nil, diskWriteKbps),
			data.NewField("disk_read_total_mb", nil, diskReadTotalMB),
			data.NewField("disk_write_total_mb", nil, diskWriteTotalMB),
			data.NewField("thread_count", nil, threadCounts),
		)

		return frame
	}

	if strings.HasPrefix(metricFilter, "cpu_") {
		return createAppsCpuFrame(apps.Cpu, metricFilter, meta, timestamp)
	}

	if strings.HasPrefix(metricFilter, "memory_") {
		return createAppsMemoryFrame(apps.Memory, metricFilter, meta, timestamp)
	}

	if strings.HasPrefix(metricFilter, "disk_") || metricFilter == "disk" {
		return createAppsDiskFrame(apps.Disk, metricFilter, meta, timestamp)
	}

	if strings.HasPrefix(metricFilter, "network_") {
		return createAppsNetworkFrame(apps.Network, metricFilter, meta, timestamp)
	}

	if strings.HasPrefix(metricFilter, "gpu") {
		return createAppsGpuFrame(apps, metricFilter, meta, timestamp)
	}

	frame := data.NewFrame("process_metric_series",
		data.NewField("time", nil, []time.Time{timestamp}),
	)
	frame.Meta = meta
	frame.Meta.PreferredVisualization = data.VisTypeGraph

	for _, proc := range apps.Processes {
		value := selectProcessMetric(proc, metricFilter)
		fieldName := fmt.Sprintf("%s (pid %d)", proc.Name, proc.PID)
		field := data.NewField(fieldName, data.Labels{
			"process": proc.Name,
			"pid":     strconv.FormatInt(proc.PID, 10),
		}, []float64{value})
		frame.Fields = append(frame.Fields, field)
	}

	return frame
}

func createAppsCpuFrame(cpu *AppsCpu, metricFilter string, meta *data.FrameMeta, timestamp time.Time) *data.Frame {
	frame := data.NewFrame("apps_cpu_metrics",
		data.NewField("time", nil, []time.Time{timestamp}),
	)
	frame.Meta = meta
	frame.Meta.PreferredVisualization = data.VisTypeGraph

	if cpu == nil {
		frame.Fields = append(frame.Fields, data.NewField("value", nil, []float64{math.NaN()}))
		return frame
	}

	switch metricFilter {
	case "cpu_total_pct":
		frame.Fields = append(frame.Fields, data.NewField("CPU Usage (%)", nil, []float64{cpu.UsagePct}))
	case "cpu_per_core_pct":
		if len(cpu.PerCorePct) == 0 {
			frame.Fields[0] = data.NewField("time", nil, []time.Time{timestamp})
			frame.Fields = append(frame.Fields,
				data.NewField("core", nil, []string{"n/a"}),
				data.NewField("value", nil, []float64{math.NaN()}),
			)
			frame.Meta.PreferredVisualization = data.VisTypeTable
			break
		}

		rowCount := len(cpu.PerCorePct)
		times := make([]time.Time, rowCount)
		cores := make([]string, rowCount)
		values := make([]float64, rowCount)

		for idx, value := range cpu.PerCorePct {
			times[idx] = timestamp
			cores[idx] = fmt.Sprintf("Core %d", idx)
			values[idx] = value
		}

		frame.Fields[0] = data.NewField("time", nil, times)
		frame.Fields = append(frame.Fields,
			data.NewField("core", nil, cores),
			data.NewField("value", nil, values),
		)
		frame.Meta.PreferredVisualization = data.VisTypeTable
	case "cpu_load_avg_one":
		value := math.NaN()
		if cpu.LoadAvgOne != nil {
			value = *cpu.LoadAvgOne
		}
		frame.Fields = append(frame.Fields, data.NewField("Load Avg (1m)", nil, []float64{value}))
	case "cpu_load_avg_five":
		value := math.NaN()
		if cpu.LoadAvgFive != nil {
			value = *cpu.LoadAvgFive
		}
		frame.Fields = append(frame.Fields, data.NewField("Load Avg (5m)", nil, []float64{value}))
	case "cpu_load_avg_fifteen":
		value := math.NaN()
		if cpu.LoadAvgFifteen != nil {
			value = *cpu.LoadAvgFifteen
		}
		frame.Fields = append(frame.Fields, data.NewField("Load Avg (15m)", nil, []float64{value}))
	case "cpu_logical_cores":
		frame.Fields = append(frame.Fields, data.NewField("Logical Cores", nil, []float64{float64(cpu.LogicalCores)}))
	case "cpu_physical_cores":
		value := math.NaN()
		if cpu.PhysicalCores != nil {
			value = float64(*cpu.PhysicalCores)
		}
		frame.Fields = append(frame.Fields, data.NewField("Physical Cores", nil, []float64{value}))
	default:
		frame.Fields = append(frame.Fields, data.NewField("value", nil, []float64{math.NaN()}))
	}

	return frame
}

func createAppsMemoryFrame(memory AppsMemory, metricFilter string, meta *data.FrameMeta, timestamp time.Time) *data.Frame {
	frame := data.NewFrame("apps_memory_metrics",
		data.NewField("time", nil, []time.Time{timestamp}),
	)
	frame.Meta = meta
	frame.Meta.PreferredVisualization = data.VisTypeGraph

	switch metricFilter {
	case "memory_total_mb":
		frame.Fields = append(frame.Fields, data.NewField("Memory Total (MB)", nil, []float64{float64(memory.TotalMB)}))
	case "memory_used_mb":
		frame.Fields = append(frame.Fields, data.NewField("Memory Used (MB)", nil, []float64{float64(memory.UsedMB)}))
	case "memory_available_mb":
		frame.Fields = append(frame.Fields, data.NewField("Memory Available (MB)", nil, []float64{float64(memory.AvailableMB)}))
	case "memory_usage_pct":
		frame.Fields = append(frame.Fields, data.NewField("Memory Usage (%)", nil, []float64{calcMemoryUsagePct(memory)}))
	case "memory_swap_total_mb":
		frame.Fields = append(frame.Fields, data.NewField("Swap Total (MB)", nil, []float64{float64(memory.SwapTotalMB)}))
	case "memory_swap_used_mb":
		frame.Fields = append(frame.Fields, data.NewField("Swap Used (MB)", nil, []float64{float64(memory.SwapUsedMB)}))
	case "memory_swap_free_mb":
		frame.Fields = append(frame.Fields, data.NewField("Swap Free (MB)", nil, []float64{float64(memory.SwapFreeMB)}))
	default:
		frame.Fields = append(frame.Fields, data.NewField("value", nil, []float64{math.NaN()}))
	}

	return frame
}

func createAppsDiskFrame(disks []DiskInfo, metricFilter string, meta *data.FrameMeta, timestamp time.Time) *data.Frame {
	frame := data.NewFrame("apps_disk_metrics",
		data.NewField("time", nil, []time.Time{timestamp}),
	)
	frame.Meta = meta
	frame.Meta.PreferredVisualization = data.VisTypeGraph

	if len(disks) == 0 {
		frame.Fields = append(frame.Fields, data.NewField("value", nil, []float64{math.NaN()}))
		return frame
	}

	for _, disk := range disks {
		switch metricFilter {
		case "disk_usage_pct", "disk":
			name := fmt.Sprintf("%s Used (%%)", disk.MountPoint)
			frame.Fields = append(frame.Fields, data.NewField(name, data.Labels{"disk": disk.Name, "mount": disk.MountPoint}, []float64{disk.UsedPct}))
		case "disk_used_gb":
			name := fmt.Sprintf("%s Used (GB)", disk.MountPoint)
			frame.Fields = append(frame.Fields, data.NewField(name, data.Labels{"disk": disk.Name, "mount": disk.MountPoint}, []float64{disk.UsedGB}))
		case "disk_free_gb":
			free := (disk.TotalGB - disk.UsedGB)
			if free < 0 {
				free = 0
			}
			name := fmt.Sprintf("%s Free (GB)", disk.MountPoint)
			frame.Fields = append(frame.Fields, data.NewField(name, data.Labels{"disk": disk.Name, "mount": disk.MountPoint}, []float64{free}))
		case "disk_total_gb":
			name := fmt.Sprintf("%s Total (GB)", disk.MountPoint)
			frame.Fields = append(frame.Fields, data.NewField(name, data.Labels{"disk": disk.Name, "mount": disk.MountPoint}, []float64{disk.TotalGB}))
		default:
			// unknown disk metric, add NaN
			frame.Fields = append(frame.Fields, data.NewField("value", nil, []float64{math.NaN()}))
			return frame
		}
	}

	return frame
}

func createAppsNetworkFrame(network []NetworkInterfaceUsage, metricFilter string, meta *data.FrameMeta, timestamp time.Time) *data.Frame {
	frame := data.NewFrame("apps_network_metrics",
		data.NewField("time", nil, []time.Time{timestamp}),
	)
	frame.Meta = meta
	frame.Meta.PreferredVisualization = data.VisTypeGraph

	if len(network) == 0 {
		frame.Fields = append(frame.Fields, data.NewField("value", nil, []float64{math.NaN()}))
		return frame
	}

	for _, iface := range network {
		switch metricFilter {
		case "network_rx_kbps":
			name := fmt.Sprintf("%s RX (kbps)", iface.Name)
			frame.Fields = append(frame.Fields, data.NewField(name, data.Labels{"interface": iface.Name}, []float64{iface.ReceivedKbps}))
		case "network_tx_kbps":
			name := fmt.Sprintf("%s TX (kbps)", iface.Name)
			frame.Fields = append(frame.Fields, data.NewField(name, data.Labels{"interface": iface.Name}, []float64{iface.TransmittedKbps}))
		case "network_total_received_mb":
			value := bytesToMegabytes(iface.ReceivedTotalBytes)
			name := fmt.Sprintf("%s Total RX (MB)", iface.Name)
			frame.Fields = append(frame.Fields, data.NewField(name, data.Labels{"interface": iface.Name}, []float64{value}))
		case "network_total_transmitted_mb":
			value := bytesToMegabytes(iface.TransmittedTotalBytes)
			name := fmt.Sprintf("%s Total TX (MB)", iface.Name)
			frame.Fields = append(frame.Fields, data.NewField(name, data.Labels{"interface": iface.Name}, []float64{value}))
		default:
			frame.Fields = append(frame.Fields, data.NewField("value", nil, []float64{math.NaN()}))
			return frame
		}
	}

	return frame
}

func createAppsGpuFrame(apps *AppsResponse, metricFilter string, meta *data.FrameMeta, timestamp time.Time) *data.Frame {
	frame := data.NewFrame("apps_gpu_metrics",
		data.NewField("time", nil, []time.Time{timestamp}),
	)
	frame.Meta = meta
	frame.Meta.PreferredVisualization = data.VisTypeGraph

	summary := apps.Gpu

	switch metricFilter {
	case "gpu_3d_pct":
		value := 0.0
		if summary != nil && summary.UsagePct != nil {
			value = *summary.UsagePct
		}
		frame.Fields = append(frame.Fields, data.NewField("GPU 3D (%)", nil, []float64{value}))
	case "gpu_usage_pct":
		value := 0.0
		if summary != nil && summary.UsagePct != nil {
			value = *summary.UsagePct
		}
		frame.Fields = append(frame.Fields, data.NewField("GPU Usage (%)", nil, []float64{value}))
	case "gpu_memory_pct":
		value := 0.0
		if summary != nil && summary.MemoryUsagePct != nil {
			value = *summary.MemoryUsagePct
		}
		frame.Fields = append(frame.Fields, data.NewField("GPU Memory (%)", nil, []float64{value}))
	case "gpu_temperature_c":
		value := 0.0
		if summary != nil {
			var total float64
			var count float64
			for _, gpu := range summary.Gpus {
				if gpu.TemperatureCelsius != nil {
					total += *gpu.TemperatureCelsius
					count++
				}
			}
			if count > 0 {
				value = total / count
			}
		}
		frame.Fields = append(frame.Fields, data.NewField("GPU Temperature (°C)", nil, []float64{value}))
	case "gpu":
		if summary != nil {
			for _, gpu := range summary.Gpus {
				usageValue := 0.0
				if gpu.GpuUsagePct != nil {
					usageValue = *gpu.GpuUsagePct
				}
				usageField := data.NewField(
					fmt.Sprintf("GPU%d %s Util (%%)", gpu.Index, gpu.Name),
					data.Labels{"gpu": gpu.Name, "index": fmt.Sprintf("%d", gpu.Index)},
					[]float64{usageValue},
				)
				frame.Fields = append(frame.Fields, usageField)

				memValue := 0.0
				if gpu.MemoryUsagePct != nil {
					memValue = *gpu.MemoryUsagePct
				}
				memField := data.NewField(
					fmt.Sprintf("GPU%d %s Mem (%%)", gpu.Index, gpu.Name),
					data.Labels{"gpu": gpu.Name, "index": fmt.Sprintf("%d", gpu.Index)},
					[]float64{memValue},
				)
				frame.Fields = append(frame.Fields, memField)
			}
		}
	default:
		// Unknown GPU metric request; return empty field to prevent Grafana errors.
		frame.Fields = append(frame.Fields, data.NewField("value", nil, []float64{0}))
	}

	if len(frame.Fields) == 1 { // only time field present
		frame.Fields = append(frame.Fields, data.NewField("value", nil, []float64{0}))
	}

	return frame
}

func bytesToMegabytes(value uint64) float64 {
	return float64(value) / (1024.0 * 1024.0)
}

func calcMemoryUsagePct(memory AppsMemory) float64 {
	if memory.TotalMB == 0 {
		return math.NaN()
	}
	return (float64(memory.UsedMB) / float64(memory.TotalMB)) * 100.0
}

func selectProcessMetric(proc ProcessEntry, metric string) float64 {
	switch metric {
	case "cpu_pct":
		return proc.CpuPct
	case "memory_mb":
		return float64(proc.MemoryMB)
	case "memory_pct":
		return proc.MemoryPct
	case "virtual_memory_mb":
		return float64(proc.VirtualMemoryMB)
	case "disk_read_kbps":
		return proc.DiskReadKbps
	case "disk_write_kbps":
		return proc.DiskWriteKbps
	case "disk_read_total_mb":
		return bytesToMegabytes(proc.DiskReadBytesTotal)
	case "disk_write_total_mb":
		return bytesToMegabytes(proc.DiskWriteBytesTotal)
	case "thread_count":
		if proc.ThreadCount != nil {
			return float64(*proc.ThreadCount)
		}
		return math.NaN()
	default:
		return proc.CpuPct
	}
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

	// Test actual connection to backend
	baseURL := config.Path
	if baseURL == "" {
		baseURL = "http://127.0.0.1:7000"
	}
	// Force replace localhost with 127.0.0.1 to avoid IPv6 issues
	baseURL = strings.ReplaceAll(baseURL, "localhost", "127.0.0.1")
	baseURL = strings.ReplaceAll(baseURL, "http://[::1]", "http://127.0.0.1")

	testURL := strings.TrimRight(baseURL, "/") + "/api/system"
	u, err := neturl.Parse(testURL)
	if err != nil {
		res.Status = backend.HealthStatusError
		res.Message = fmt.Sprintf("Invalid URL: %v", err)
		return res, nil
	}

	q := u.Query()
	q.Set("api_token", config.Secrets.ApiKey)
	u.RawQuery = q.Encode()

	httpReq, err := http.NewRequest(http.MethodGet, u.String(), nil)
	if err != nil {
		res.Status = backend.HealthStatusError
		res.Message = fmt.Sprintf("Failed to create request: %v", err)
		return res, nil
	}

	client := &http.Client{Timeout: 5 * time.Second}
	resp, err := client.Do(httpReq)
	if err != nil {
		res.Status = backend.HealthStatusError
		res.Message = fmt.Sprintf("Connection failed: %v. Please use 127.0.0.1 instead of localhost", err)
		return res, nil
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		res.Status = backend.HealthStatusError
		res.Message = fmt.Sprintf("Backend returned status %d", resp.StatusCode)
		return res, nil
	}

	return &backend.CheckHealthResult{
		Status:  backend.HealthStatusOk,
		Message: fmt.Sprintf("Successfully connected to %s", baseURL),
	}, nil
}
