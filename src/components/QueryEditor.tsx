import React from 'react';
import { InlineField, Combobox, Stack } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
import { DataSource } from '../datasource';
import { MyDataSourceOptions, MyQuery } from '../types';

type Props = QueryEditorProps<DataSource, MyQuery, MyDataSourceOptions>;

export function QueryEditor({ query, onChange, onRunQuery }: Props) {
  const metric = query.metric || 'cpu_usage_pct';

  const metricOptions = [
    { label: 'CPU Usage (%)', value: 'cpu_usage_pct' },
    { label: 'Memory Usage (%)', value: 'mem_pct' },
    { label: 'Load Average (1m)', value: 'load_avg_one' },
    { label: 'Disk Usage (%)', value: 'disk' },
  ];

  return (
    <Stack gap={0}>
      <InlineField label="Metric" labelWidth={14} tooltip="Gösterilecek metriği seçin">
        <Combobox
          options={metricOptions}
          value={metricOptions.find((o) => o.value === metric) || metricOptions[0]}
          onChange={(v) => {
            onChange({ ...query, metric: v.value ?? 'cpu_usage_pct' });
            onRunQuery();
          }}
          width={32}
        />
      </InlineField>
    </Stack>
  );
}
