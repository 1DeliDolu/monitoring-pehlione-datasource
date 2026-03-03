# Pehlione Monitoring - Grafana Data Source Plugin

> **⚠️ WARNING: This project is under active development.**
> The plugin is not yet ready for production use. APIs may change and some features may be missing.

A data source plugin that collects monitoring data from a Rust-based backend and visualizes it in Grafana.

## Overview

This plugin lets you visualize monitoring data from your Rust backend in Grafana dashboards. Track metrics, logs, and performance data from your Rust applications in real time.

## Features

- ✅ Connect to Rust backend APIs
- ✅ Secure authentication via API Key
- ✅ Customizable endpoint paths
- ✅ Real-time data queries
- ✅ Time range filtering
- ✅ Grafana template variable support

## Rust Backend Requirements

Your Rust backend must meet the following requirements:

### API Endpoint Structure

Your Rust application should expose an API endpoint in this format:

```rust
// Example Rust API endpoint
// GET /api/v1/metrics?from=<timestamp>&to=<timestamp>
// Header: Authorization: Bearer <API_KEY>

#[derive(Serialize)]
struct MetricResponse {
    datapoints: Vec<DataPoint>,
}

#[derive(Serialize)]
struct DataPoint {
    time: i64,   // Unix timestamp (milliseconds)
    value: f64,  // Metric value
}
```

### Required HTTP Headers

```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

### Example Response

```json
{
  "datapoints": [
    {
      "time": 1697712000000,
      "value": 42.5
    },
    {
      "time": 1697712060000,
      "value": 45.2
    }
  ]
}
```

## Installation and Configuration

### 1. Plugin Installation

#### Build the Backend

```bash
# Update Go dependencies
go get -u github.com/grafana/grafana-plugin-sdk-go
go mod tidy

# Compile backend binaries (Linux, Windows, Darwin)
mage -v
```

#### Frontend Build

```bash
# Install dependencies
npm install

# Production build
npm run build

# Development mode (watch mode)
npm run dev
```

### 2. Add the Data Source in Grafana

1. Log in to Grafana
2. Navigate to **Configuration** → **Data Sources** → **Add data source**
3. Search for and select "Pehlione Monitoring"
4. Configure the following settings:
   - **Path**: Your Rust API endpoint URL (e.g. `http://localhost:8080/api/v1/metrics`)
   - **API Key**: The API key for your Rust backend
5. Click **Save & Test**

### 3. Create a Dashboard and Panel

1. Create a new dashboard or add a panel to an existing one
2. In the Query Editor:
   - **Data Source**: Select Pehlione Monitoring
   - **Query Text**: Enter the desired metric name or filter
   - **Time Range**: Use Grafana's time picker
3. Choose the visualization type (Time Series, Gauge, Table, etc.)

## Rust Backend Example Implementations

### Actix-web Example

```rust
use actix_web::{web, App, HttpServer, HttpResponse, HttpRequest};
use serde::{Deserialize, Serialize};
use chrono::Utc;

#[derive(Serialize)]
struct MetricResponse {
    datapoints: Vec<DataPoint>,
}

#[derive(Serialize)]
struct DataPoint {
    time: i64,
    value: f64,
}

#[derive(Deserialize)]
struct QueryParams {
    from: Option<i64>,
    to: Option<i64>,
}

async fn get_metrics(
    req: HttpRequest,
    query: web::Query<QueryParams>,
) -> HttpResponse {
    // API Key validation
    let auth_header = req.headers().get("Authorization");
    if let Some(auth) = auth_header {
        if let Ok(auth_str) = auth.to_str() {
            if !auth_str.starts_with("Bearer ") {
                return HttpResponse::Unauthorized().json("Invalid authorization");
            }
            let api_key = auth_str.trim_start_matches("Bearer ");
            // Validate the API key here
        }
    } else {
        return HttpResponse::Unauthorized().json("Missing authorization header");
    }

    let now = Utc::now().timestamp_millis();
    let from = query.from.unwrap_or(now - 3600000);
    let to = query.to.unwrap_or(now);

    // Generate sample data
    let mut datapoints = Vec::new();
    let mut t = from;
    while t <= to {
        datapoints.push(DataPoint {
            time: t,
            value: (t % 100) as f64,
        });
        t += 60000;
    }

    HttpResponse::Ok().json(MetricResponse { datapoints })
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/api/v1/metrics", web::get().to(get_metrics))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
```

## Development Status

**⚠️ This project is under active development.**

### ✅ Completed

- [x] Basic plugin structure
- [x] API Key authentication
- [x] Rust backend integration
- [x] Basic data query support

### 🚧 In Progress

- [ ] Advanced query features
- [ ] Multiple metric support
- [ ] Caching mechanism
- [ ] Comprehensive tests

### 📋 Planned

- [ ] Streaming data support
- [ ] Alert support
- [ ] Dashboard templates
- [ ] Plugin marketplace release

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

**Note**: The plugin is not yet ready for production use. You can use it for development and testing purposes.

## License

This project is licensed under the MIT License.

## Support

- GitHub Issues: [https://github.com/1DeliDolu/monitoring-pehlione-datasource/issues](https://github.com/1DeliDolu/monitoring-pehlione-datasource/issues)
- Email: support@pehlione.com

---

**Development Stage Warning**: This plugin is under active development. Thorough testing is recommended before using it in a production environment.
