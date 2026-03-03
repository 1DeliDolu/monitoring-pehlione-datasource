# Pehlione Monitoring — Grafana Data Source Plugin

A Grafana Data Source plugin for visualizing monitoring data from Rust-based backends.

WARNING: This project is under active development. APIs and features may change and it is not yet ready for production use.

## Overview

This plugin fetches metrics and time-series datapoints from a Rust HTTP backend and exposes them to Grafana dashboards. It supports API key authentication, customizable endpoint paths, time-range filtering, and Grafana template variables.

## Features

- Connect to Rust backend APIs
- API key authentication (Bearer token)
- Configurable endpoint path
- Time range filtering (from/to timestamps)
- Support for Grafana template variables
- Basic error handling and CORS guidance for backend

## Required Backend API

Your Rust backend must expose an HTTP endpoint that returns JSON in the following shape:

```json
{
  "datapoints": [
    { "time": 1697712000000, "value": 42.5 },
    { "time": 1697712060000, "value": 45.2 }
  ]
}
```

- `time`: Unix timestamp in milliseconds
- `value`: numeric metric value

The request should accept `from` and `to` query parameters (timestamps in ms) and require an `Authorization: Bearer <API_KEY>` header.

## Installation & Build

Backend (Go):

```bash
go get -u github.com/grafana/grafana-plugin-sdk-go
go mod tidy
mage -v        # build helpers (if using mage)
mage build     # build plugin backend binary
```

Frontend (TypeScript/React):

```bash
npm install
npm run build       # production build
npm run dev         # development (watch) mode
```

Run a Grafana instance for development:

```bash
GRAFANA_VERSION=11.3.0 npm run server
```

## Add the Data Source in Grafana

1. Sign in to Grafana
2. Go to Configuration → Data Sources → Add data source
3. Search for and choose "Pehlione Monitoring"
4. Configure:
   - Path: your Rust API endpoint (e.g. `http://localhost:8080/api/v1/metrics`)
   - API Key: the backend API key
5. Click Save & Test

## Querying

In the Query Editor, set the data source to Pehlione Monitoring and provide metric filters or names as required by your backend. Grafana's time range and template variables will be forwarded to the backend via `from`/`to` and query parameters.

## Example Rust Backend (concept)

The following demonstrates the minimal behavior your Rust server should provide. This is simplified pseudo-code using common frameworks.

Actix-web / Axum (conceptual):

```rust
// Endpoint: GET /api/v1/metrics?from=<ms>&to=<ms>
// Header: Authorization: Bearer <API_KEY>

#[derive(Serialize)]
struct DataPoint { time: i64, value: f64 }

#[derive(Serialize)]
struct MetricResponse { datapoints: Vec<DataPoint> }

// Validate Authorization header contains Bearer token
// Parse `from` and `to` query params
// Return MetricResponse as JSON
```

Enable CORS if Grafana UI directly calls your endpoint during development.

## Development

- Run unit tests for the backend: `go test ./pkg/...`
- Frontend dev: `npm run dev`
- E2E tests (Playwright): start Grafana test server `npm run server` then `npm run e2e`

## Troubleshooting

- Plugin not visible in Grafana: ensure the plugin binary is built and `allow_loading_unsigned_plugins` includes the plugin ID in your `grafana.ini` during development.
- Connection refused: confirm your Rust backend is running and the Path in the data source matches the full URL.
- API key errors: verify the API key is entered in the ConfigEditor and the backend validates the key correctly.
- No data: verify the backend returns the expected JSON format and that Grafana time range matches the datapoints.

## Contributing

Contributions are welcome. Typical workflow:

1. Fork the repository
2. Create a feature branch
3. Commit changes using Conventional Commits
4. Push and open a Pull Request

Please run linter and tests before submitting changes:

```bash
npm run lint
npm run test
go test ./pkg/...
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Resources

- Grafana plugin docs: https://grafana.com/developers/plugin-tools
- Backend plugin guide: https://grafana.com/developers/plugin-tools/key-concepts/backend-plugins
- Data source example repo: https://github.com/grafana/grafana-plugin-examples/tree/master/examples/datasource-basic

---

If you want, I can:

- refine specific sections (examples, API details),
- produce a minimal example Rust server implementation,
- or translate other repository docs to English.
