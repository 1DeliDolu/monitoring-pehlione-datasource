# Pehlione Monitoring Data Source Plugin

![Grafana Version](https://img.shields.io/badge/Grafana-%3E%3D10.4.0-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-in%20development-yellow)

> **⚠️ WARNING: This project is under active development.**  
> The plugin is not yet ready for production use. APIs may change and some features may be missing.

Visualize Rust backend monitoring data in Grafana.

## Overview

Pehlione Monitoring is a data source plugin that lets you visualize monitoring data from your Rust backend applications in Grafana panels.

### Features

- ✅ **Rust API Integration**: Pull data directly from your Rust backend
- ✅ **Secure Authentication**: API Key-based secure connection
- ✅ **Flexible Configuration**: Customizable endpoint support
- ✅ **Real-Time**: Live monitoring and alerting
- ✅ **Time Series**: Time-based metric visualization
- ✅ **Template Variables**: Grafana variable support

## Requirements

- Grafana 10.4.0 or later
- Rust backend API (Actix-web, Axum, Rocket, etc.)
- API endpoint format:
  ```json
  {
    "datapoints": [{ "time": 1697712000000, "value": 42.5 }]
  }
  ```

## Installation

### Grafana Cloud

1. Go to **Configuration** → **Plugins** in your Grafana instance
2. Search for "Pehlione Monitoring"
3. Click **Install**

### Self-Hosted Grafana

```bash
# Install to the Grafana plugin directory
grafana-cli plugins install pehlione-monitoring-datasource

# Restart Grafana
systemctl restart grafana-server
```

## Configuration

1. Go to **Configuration** → **Data Sources** → **Add data source**
2. Select "Pehlione Monitoring"
3. Enter the following details:
   - **Path**: Your Rust API endpoint URL (e.g. `http://localhost:8080/api/v1/metrics`)
   - **API Key**: Your API key for authentication
4. Click **Save & Test** to verify the connection

## Rust Backend Example

### Actix-web

```rust
use actix_web::{web, App, HttpServer, HttpResponse};
use serde::Serialize;

#[derive(Serialize)]
struct MetricResponse {
    datapoints: Vec<DataPoint>,
}

#[derive(Serialize)]
struct DataPoint {
    time: i64,
    value: f64,
}

async fn get_metrics() -> HttpResponse {
    let datapoints = vec![
        DataPoint { time: 1697712000000, value: 42.5 },
    ];
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

## Usage

1. Add a new panel to your dashboard
2. Select "Pehlione Monitoring" as the data source
3. Enter the metric name in the query editor
4. Choose a visualization type (Time series, Gauge, etc.)

## Supported Visualizations

- Time Series
- Gauge
- Stat
- Table
- Bar Chart
- And other Grafana panel types

## Troubleshooting

### Connection Error

- Make sure your Rust API is running
- Check your CORS settings
- Verify that the API Key is correct

### No Data Visible

- Check that the response format is correct
- Check the time range settings
- Inspect errors in the browser console

## Documentation

Visit our GitHub repository for detailed documentation:
[https://github.com/1DeliDolu/monitoring-pehlione-datasource](https://github.com/1DeliDolu/monitoring-pehlione-datasource)

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

**Development Stage Warning**: This plugin is under active development. It is recommended to perform thorough testing before using it in a production environment.
