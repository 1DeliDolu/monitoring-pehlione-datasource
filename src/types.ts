import { DataSourceJsonData } from '@grafana/data';
import { DataQuery } from '@grafana/schema';

export interface MyQuery extends DataQuery {
  endpoint?: string; // 'system' | 'history' | 'apps' | 'tasks' | 'alerts'
  metric?: string; // system/history: 'cpu_usage_pct' | 'gpu_usage_pct' | ... apps: 'table' | 'cpu_pct' | 'gpu' | etc.
  group?: string; // apps endpoint: 'process' | 'cpu' | 'memory' | 'disk' | 'network' | 'gpu'
}

export const DEFAULT_QUERY: Partial<MyQuery> = {
  endpoint: 'history',
  metric: 'cpu_usage_pct',
};

export interface DataPoint {
  Time: number;
  Value: number;
}

export interface DataSourceResponse {
  datapoints: DataPoint[];
}

/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  path?: string;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface MySecureJsonData {
  apiKey?: string;
}
