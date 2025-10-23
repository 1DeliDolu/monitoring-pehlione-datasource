import React from 'react';
import { InlineField, Combobox, Stack } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyDataSourceOptions, MyQuery } from '../types';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, onRunQuery }: Props) {
  const endpoint = query.endpoint || 'history';
  const appsGroupOptions = [
    { label: 'Processes', value: 'process' },
    { label: 'CPU', value: 'cpu' },
    { label: 'Memory', value: 'memory' },
    { label: 'Disk', value: 'disk' },
    { label: 'Network', value: 'network' },
    { label: 'GPU', value: 'gpu' },
  ];
  const endpointOptions = [
    { label: 'System (Current)', value: 'system', description: 'Anlık sistem durumu' },
    { label: 'History (Time Series)', value: 'history', description: 'Geçmiş veri grafikleri' },
    { label: 'Apps', value: 'apps', description: 'Uygulama metrikleri' },
    { label: 'Tasks', value: 'tasks', description: 'Görev metrikleri' },
    { label: 'Alerts', value: 'alerts', description: 'Uyarılar' },
  ];

  const metricOptionsMap: Record<string, Array<{ label: string; value: string }>> = {
    system: [
      { label: 'CPU Usage (%)', value: 'cpu_usage_pct' },
      { label: 'Memory Usage (%)', value: 'mem_pct' },
      { label: 'Memory Used (MB)', value: 'mem_used_mb' },
      { label: 'Load Average (1m)', value: 'load_avg_one' },
      { label: 'Load Average (5m)', value: 'load_avg_five' },
      { label: 'Load Average (15m)', value: 'load_avg_fifteen' },
      { label: 'Disk Usage (%)', value: 'disk' },
      { label: 'GPU Usage (%)', value: 'gpu_usage_pct' },
      { label: 'GPU Memory Usage (%)', value: 'gpu_memory_pct' },
      { label: 'GPU Details', value: 'gpu' },
      { label: 'Network RX (kbps)', value: 'network_rx' },
      { label: 'Network TX (kbps)', value: 'network_tx' },
      { label: 'Process Count', value: 'process_count' },
      { label: 'All Metrics', value: 'all' },
    ],
    history: [
      { label: 'CPU Usage (%)', value: 'cpu_usage_pct' },
      { label: 'Memory Usage (%)', value: 'mem_pct' },
      { label: 'Memory Used (MB)', value: 'mem_used_mb' },
      { label: 'Load Average (1m)', value: 'load_avg_one' },
      { label: 'Load Average (5m)', value: 'load_avg_five' },
      { label: 'Load Average (15m)', value: 'load_avg_fifteen' },
      { label: 'Disk Usage (%)', value: 'disk' },
      { label: 'GPU Usage (%)', value: 'gpu_usage_pct' },
      { label: 'GPU Memory Usage (%)', value: 'gpu_memory_pct' },
      { label: 'GPU Details', value: 'gpu' },
      { label: 'Network RX (kbps)', value: 'network_rx' },
      { label: 'Network TX (kbps)', value: 'network_tx' },
      { label: 'Process Count', value: 'process_count' },
      { label: 'All Metrics', value: 'all' },
    ],
    tasks: [{ label: 'Not Implemented', value: 'not_supported' }],
    alerts: [{ label: 'Not Implemented', value: 'not_supported' }],
  };

  const appsMetricGroups: Record<string, Array<{ label: string; value: string }>> = {
    process: [
      { label: 'Process Table', value: 'table' },
      { label: 'CPU Usage (%)', value: 'cpu_pct' },
      { label: 'Memory Used (MB)', value: 'memory_mb' },
      { label: 'Memory Usage (%)', value: 'memory_pct' },
      { label: 'Virtual Memory (MB)', value: 'virtual_memory_mb' },
      { label: 'Disk Read (kbps)', value: 'disk_read_kbps' },
      { label: 'Disk Write (kbps)', value: 'disk_write_kbps' },
      { label: 'Disk Read Total (MB)', value: 'disk_read_total_mb' },
      { label: 'Disk Write Total (MB)', value: 'disk_write_total_mb' },
      { label: 'Thread Count', value: 'thread_count' },
    ],
    cpu: [
      { label: 'CPU Total (%)', value: 'cpu_total_pct' },
      { label: 'CPU Per Core (%)', value: 'cpu_per_core_pct' },
      { label: 'Load Average (1m)', value: 'cpu_load_avg_one' },
      { label: 'Load Average (5m)', value: 'cpu_load_avg_five' },
      { label: 'Load Average (15m)', value: 'cpu_load_avg_fifteen' },
      { label: 'Logical Cores', value: 'cpu_logical_cores' },
      { label: 'Physical Cores', value: 'cpu_physical_cores' },
    ],
    memory: [
      { label: 'Memory Used (MB)', value: 'memory_used_mb' },
      { label: 'Memory Available (MB)', value: 'memory_available_mb' },
      { label: 'Memory Total (MB)', value: 'memory_total_mb' },
      { label: 'Memory Usage (%)', value: 'memory_usage_pct' },
      { label: 'Swap Used (MB)', value: 'memory_swap_used_mb' },
      { label: 'Swap Free (MB)', value: 'memory_swap_free_mb' },
      { label: 'Swap Total (MB)', value: 'memory_swap_total_mb' },
    ],
    disk: [
      { label: 'Disk Usage (%)', value: 'disk_usage_pct' },
      { label: 'Disk Used (GB)', value: 'disk_used_gb' },
      { label: 'Disk Free (GB)', value: 'disk_free_gb' },
      { label: 'Disk Total (GB)', value: 'disk_total_gb' },
    ],
    network: [
      { label: 'Network RX (kbps)', value: 'network_rx_kbps' },
      { label: 'Network TX (kbps)', value: 'network_tx_kbps' },
      { label: 'Network Total RX (MB)', value: 'network_total_received_mb' },
      { label: 'Network Total TX (MB)', value: 'network_total_transmitted_mb' },
    ],
    gpu: [
      { label: 'GPU Usage (%)', value: 'gpu_usage_pct' },
      { label: 'GPU Memory Usage (%)', value: 'gpu_memory_pct' },
      { label: 'GPU Temperature (°C)', value: 'gpu_temperature_c' },
      { label: 'GPU Details', value: 'gpu' },
    ],
  };

  const selectedGroup = endpoint === 'apps' ? query.group || 'process' : undefined;
  const metricOptions =
    endpoint === 'apps'
      ? appsMetricGroups[selectedGroup ?? 'process'] ?? appsMetricGroups.process
      : metricOptionsMap[endpoint] ?? metricOptionsMap.history;
  const fallbackMetric = metricOptions[0]?.value ?? 'cpu_usage_pct';
  const metric = metricOptions.find((option) => option.value === query.metric)?.value ?? fallbackMetric;

  return (
    <Stack gap={0}>
      <InlineField label="Endpoint" labelWidth={14} tooltip="Veri kaynağı endpoint'i seçin">
        <Combobox
          options={endpointOptions}
          value={endpointOptions.find((o) => o.value === endpoint) || endpointOptions[1]}
          onChange={(v) => {
            const nextEndpoint = v.value ?? 'history';
            if (nextEndpoint === 'apps') {
              const nextGroup = query.group || 'process';
              const nextMetricOptions = appsMetricGroups[nextGroup] ?? appsMetricGroups.process;
              const nextMetric = nextMetricOptions[0]?.value ?? 'table';
              onChange({ ...query, endpoint: nextEndpoint, group: nextGroup, metric: nextMetric });
            } else {
              const nextMetricOptions = metricOptionsMap[nextEndpoint] ?? metricOptionsMap.history;
              const nextMetric = nextMetricOptions[0]?.value ?? 'cpu_usage_pct';
              onChange({ ...query, endpoint: nextEndpoint, group: undefined, metric: nextMetric });
            }
            onRunQuery();
          }}
          width={32}
        />
      </InlineField>
      {endpoint === 'apps' && (
        <InlineField label="Group" labelWidth={14} tooltip="Gösterilecek kategori">
          <Combobox
            options={appsGroupOptions}
            value={appsGroupOptions.find((o) => o.value === selectedGroup) || appsGroupOptions[0]}
            onChange={(v) => {
              const nextGroup = v.value ?? 'process';
              const nextMetricOptions = appsMetricGroups[nextGroup] ?? appsMetricGroups.process;
              const nextMetric = nextMetricOptions[0]?.value ?? 'table';
              onChange({ ...query, group: nextGroup, metric: nextMetric });
              onRunQuery();
            }}
            width={32}
          />
        </InlineField>
      )}
      <InlineField label="Metric" labelWidth={14} tooltip="Gösterilecek metriği seçin">
        <Combobox
          options={metricOptions}
          value={metricOptions.find((o) => o.value === metric) || metricOptions[0]}
          onChange={(v) => {
            onChange({ ...query, metric: v.value ?? fallbackMetric });
            onRunQuery();
          }}
          width={32}
        />
      </InlineField>
    </Stack>
  );
}
