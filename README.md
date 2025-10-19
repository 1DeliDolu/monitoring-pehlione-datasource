# Grafana Data Source Plugin# Pehlione Monitoring - Grafana Data Source Plugin

> **⚠️ WARNUNG: Dieses Projekt befindet sich in aktiver Entwicklung.** > **⚠️ UYARI: Bu proje aktif geliştirme aşamasındadır.** Rust ile yazılmış monitoring sisteminden veri alarak Grafana üzerinde görselleştirme sağlayan bir data source plugin'i.Rust ile yazılmış monitoring sisteminden veri alarak Grafana üzerinde görselleştirme sağlayan bir data source plugin'i.

> Das Plugin ist noch nicht für den Produktionseinsatz bereit. APIs können sich ändern und einige Funktionen fehlen möglicherweise.

> Plugin henüz production kullanımı için hazır değildir. API'ler değişebilir ve bazı özellikler eksik olabilir.

Ein Data Source Plugin zur Visualisierung von Monitoring-Daten aus Rust-basierten Backends in Grafana.

## Genel Bakış## Genel Bakış

## Überblick

Rust ile yazılmış monitoring sisteminden veri alarak Grafana üzerinde görselleştirme sağlayan bir data source plugin'i.

Dieses Plugin ermöglicht die Visualisierung von Monitoring-Daten aus Rust-Backends in Grafana-Dashboards. Verfolgen Sie Metriken, Logs und Performance-Daten Ihrer Rust-Anwendungen in Echtzeit.

Bu plugin, Rust backend'inden gelen monitoring verilerini Grafana panellerinde görselleştirmenizi sağlar. Rust uygulamanızdan gelen metrik, log ve performans verilerini gerçek zamanlı olarak takip edebilirsiniz.Bu plugin, Rust backend'inden gelen monitoring verilerini Grafana panellerinde görselleştirmenizi sağlar. Rust uygulamanızdan gelen metrik, log ve performans verilerini gerçek zamanlı olarak takip edebilirsiniz.

## Features

## Genel Bakış

- ✅ Verbindung zu Rust Backend-APIs

- ✅ Sichere Authentifizierung per API Key## Özellikler## Özellikler

- ✅ Anpassbare Endpoint-Pfade

- ✅ Echtzeit-DatenabfrageBu plugin, Rust backend'inden gelen monitoring verilerini Grafana panellerinde görselleştirmenizi sağlar. Rust uygulamanızdan gelen metrik, log ve performans verilerini gerçek zamanlı olarak takip edebilirsiniz.

- ✅ Zeitbereich-Filterung

- ✅ Unterstützung für Grafana Template-Variablen- ✅ Rust backend API'sine bağlanma- ✅ Rust backend API'sine bağlanma

## Anforderungen an das Rust Backend## Özellikler

Ihr Rust-Backend muss folgende Anforderungen erfüllen:- ✅ API Key tabanlı güvenli kimlik doğrulama- ✅ API Key tabanlı güvenli kimlik doğrulama

### API Endpoint-Struktur- ✅ Rust backend API'sine bağlanma

Ihre Rust-Anwendung sollte einen API-Endpoint in diesem Format bereitstellen:- ✅ API Key tabanlı güvenli kimlik doğrulama- ✅ Özelleştirilebilir endpoint path desteği- ✅ Özelleştirilebilir endpoint path desteği

```rust- ✅ Özelleştirilebilir endpoint path desteği

// Beispiel Rust API Endpoint

// GET /api/v1/metrics?from=<timestamp>&to=<timestamp>- ✅ Gerçek zamanlı veri sorgulama- ✅ Gerçek zamanlı veri sorgulama- ✅ Gerçek zamanlı veri sorgulama

// Header: Authorization: Bearer <API_KEY>

- ✅ Zaman aralığı filtreleme

#[derive(Serialize)]

struct MetricResponse {- ✅ Grafana template değişken desteği- ✅ Zaman aralığı filtreleme- ✅ Zaman aralığı filtreleme

    datapoints: Vec<DataPoint>,

}## Rust Backend Gereksinimleri- ✅ Grafana template değişken desteği- ✅ Grafana template değişken desteği



#[derive(Serialize)]Plugin'in düzgün çalışması için Rust backend'inizin aşağıdaki özellikleri sağlaması gerekir:## Rust Backend Gereksinimleri## Rust Backend Gereksinimleri

struct DataPoint {

    time: i64,      // Unix Timestamp (Millisekunden)### API Endpoint YapısıPlugin'in düzgün çalışması için Rust backend'inizin aşağıdaki özellikleri sağlaması gerekir:Plugin'in düzgün çalışması için Rust backend'inizin aşağıdaki özellikleri sağlaması gerekir:

    value: f64,     // Metrik-Wert

}Rust uygulamanız şu formatta bir API endpoint sunmalıdır:### API Endpoint Yapısı### API Endpoint Yapısı

```

```rustRust uygulamanız şu formatta bir API endpoint sunmalıdır:Rust uygulamanız şu formatta bir API endpoint sunmalıdır:

### Erforderliche HTTP-Header

// Örnek Rust API endpoint

```

Authorization: Bearer YOUR_API_KEY// GET /api/v1/metrics?from=<timestamp>&to=<timestamp>`rust`rust

Content-Type: application/json

````// Header: Authorization: Bearer <API_KEY>



### Beispiel-Response// Örnek Rust API endpoint// Örnek Rust API endpoint



```json#[derive(Serialize)]

{

  "datapoints": [struct MetricResponse {// GET /api/v1/metrics?from=<timestamp>&to=<timestamp>// GET /api/v1/metrics?from=<timestamp>&to=<timestamp>

    {

      "time": 1697712000000,    datapoints: Vec<DataPoint>,

      "value": 42.5

    },}// Header: Authorization: Bearer <API_KEY>// Header: Authorization: Bearer <API_KEY>

    {

      "time": 1697712060000,

      "value": 45.2

    }#[derive(Serialize)]#[derive(Serialize)]#[derive(Serialize)]

  ]

}struct DataPoint {

````

    time: i64,      // Unix timestamp (milliseconds)struct MetricResponse {struct MetricResponse {

## Installation und Konfiguration

    value: f64,     // Metric değeri

### 1. Plugin-Installation

} datapoints: Vec<DataPoint>, datapoints: Vec<DataPoint>,

#### Backend kompilieren

````

```bash

# Go-Abhängigkeiten aktualisieren}}

go get -u github.com/grafana/grafana-plugin-sdk-go

go mod tidy### Gerekli HTTP Headers



# Backend-Binaries kompilieren (Linux, Windows, Darwin)#[derive(Serialize)]#[derive(Serialize)]

mage -v

````

#### Frontend BuildAuthorization: Bearer YOUR_API_KEYstruct DataPoint {struct DataPoint {

````bashContent-Type: application/json

# Abhängigkeiten installieren

npm install```    time: i64,      // Unix timestamp (milliseconds)    time: i64,      // Unix timestamp (milliseconds)



# Production Build

npm run build

### Örnek Response    value: f64,     // Metric değeri    value: f64,     // Metric değeri

# Development Mode (Watch Mode)

npm run dev

````

``````json}}

### 2. Datenquelle in Grafana hinzufügen

{

1. Melden Sie sich in Grafana an

2. Navigieren Sie zu **Configuration** → **Data Sources** → **Add data source**  "datapoints": [```

3. Suchen und wählen Sie "Pehlione Monitoring"

4. Konfigurieren Sie folgende Einstellungen:    {

   - **Path**: Endpoint-URL Ihrer Rust-API (z.B. `http://localhost:8080/api/v1/metrics`)

   - **API Key**: Der API-Schlüssel für Ihr Rust-Backend      "time": 1697712000000,

5. Klicken Sie auf **Save & Test**

      "value": 42.5

### 3. Dashboard und Panel erstellen

    },### Gerekli HTTP Headers### Gerekli HTTP Headers

1. Erstellen Sie ein neues Dashboard oder fügen Sie einem vorhandenen Dashboard ein Panel hinzu

2. Im Query Editor:    {

   - **Data Source**: Wählen Sie Pehlione Monitoring

   - **Query Text**: Geben Sie den gewünschten Metrik-Namen oder Filter ein      "time": 1697712060000,

   - **Time Range**: Verwenden Sie die Zeitauswahl von Grafana

3. Wählen Sie den Visualisierungstyp (Time Series, Gauge, Table, etc.)      "value": 45.2



## Rust Backend Beispiel-Implementierungen    }```



### Beispiel mit Actix-web  ]



```rust}Authorization: Bearer YOUR_API_KEYAuthorization: Bearer YOUR_API_KEY

use actix_web::{web, App, HttpServer, HttpResponse, HttpRequest};

use serde::{Deserialize, Serialize};````

use chrono::Utc;

Content-Type: application/jsonContent-Type: application/json

#[derive(Serialize)]

struct MetricResponse {## Kurulum ve Yapılandırma

    datapoints: Vec<DataPoint>,

}`````



#[derive(Serialize)]### 1. Plugin Kurulumu

struct DataPoint {

    time: i64,

    value: f64,

}#### Backend Derleme



#[derive(Deserialize)]### Örnek Response### Örnek Response

struct QueryParams {

    from: Option<i64>,```bash

    to: Option<i64>,

}# Go bağımlılıklarını güncelle



async fn get_metrics(go get -u github.com/grafana/grafana-plugin-sdk-go

    req: HttpRequest,

    query: web::Query<QueryParams>,go mod tidy```json```json

) -> HttpResponse {

    // API Key Prüfung

    let auth_header = req.headers().get("Authorization");

    if let Some(auth) = auth_header {# Backend binary'lerini derle (Linux, Windows, Darwin){{

        if let Ok(auth_str) = auth.to_str() {

            if !auth_str.starts_with("Bearer ") {mage -v

                return HttpResponse::Unauthorized().json("Invalid authorization");

            }```  "datapoints": [  "datapoints": [

            // Ihre API-Key-Validierungslogik

            let api_key = auth_str.trim_start_matches("Bearer ");

            // Validieren Sie hier den API-Key

        }#### Frontend Build    {    {

    } else {

        return HttpResponse::Unauthorized().json("Missing authorization");

    }

```bash      "time": 1697712000000,      "time": 1697712000000,

    // Beispieldaten generieren (verwenden Sie in Ihrer Anwendung echte Daten)

    let mut datapoints = Vec::new();# Bağımlılıkları yükle

    let start = query.from.unwrap_or(Utc::now().timestamp_millis() - 3600000);

    let end = query.to.unwrap_or(Utc::now().timestamp_millis());npm install      "value": 42.5      "value": 42.5



    let mut current = start;

    while current <= end {

        datapoints.push(DataPoint {# Production build    },    },

            time: current,

            value: (current % 100) as f64,npm run build

        });

        current += 60000; // Jede Minute    {    {

    }

# Development mode (watch mode)

    HttpResponse::Ok().json(MetricResponse { datapoints })

}npm run dev      "time": 1697712060000,      "time": 1697712060000,



#[actix_web::main]```

async fn main() -> std::io::Result<()> {

    HttpServer::new(|| {      "value": 45.2      "value": 45.2

        App::new()

            .route("/api/v1/metrics", web::get().to(get_metrics))### 2. Grafana'da Veri Kaynağı Ekleme

    })

    .bind(("127.0.0.1", 8080))?    }    }

    .run()

    .await1. Grafana'ya giriş yapın

}

```2. **Configuration** → **Data Sources** → **Add data source** yolunu izleyin  ]  ]



### Beispiel mit Axum3. "Pehlione Monitoring" data source'u arayın ve seçin



```rust4. Aşağıdaki ayarları yapın:}}

use axum::{

    extract::Query,   - **Path**: Rust API'nizin endpoint path'i (örn: `http://localhost:8080/api/v1/metrics`)

    http::{HeaderMap, StatusCode},

    response::Json,   - **API Key**: Rust backend'iniz için oluşturduğunuz API anahtarı````

    routing::get,

    Router,5. **Save & Test** butonuna tıklayın

};

use serde::{Deserialize, Serialize};## Kurulum ve Yapılandırma## Kurulum ve Yapılandırma

use std::net::SocketAddr;

use chrono::Utc;### 3. Dashboard ve Panel Oluşturma



#[derive(Serialize)]### 1. Plugin Kurulumu### 1. Plugin Kurulumu

struct MetricResponse {

    datapoints: Vec<DataPoint>,1. Yeni bir dashboard oluşturun veya mevcut bir dashboard'a panel ekleyin

}

2. Query editor'de:#### Backend Derleme### 2. Grafana'da Veri Kaynağı Ekleme

#[derive(Serialize)]

struct DataPoint {   - **Data Source**: Pehlione Monitoring seçin

    time: i64,

    value: f64,   - **Query Text**: İstediğiniz metric adını veya filtreyi girin```bash1. Grafana'ya giriş yapın

}

   - **Time Range**: Grafana'nın zaman seçicisini kullanın

#[derive(Deserialize)]

struct QueryParams {3. Visualization type'ı seçin (Time series, Gauge, Table, vb.)# Go bağımlılıklarını güncelle2. **Configuration** → **Data Sources** → **Add data source** yolunu izleyin

    from: Option<i64>,

    to: Option<i64>,

}

## Rust Backend Örnek Implementasyongo get -u github.com/grafana/grafana-plugin-sdk-go3. "Pehlione Monitoring" data source'u arayın ve seçin

async fn get_metrics(

    headers: HeaderMap,

    Query(params): Query<QueryParams>,

) -> Result<Json<MetricResponse>, StatusCode> {### Actix-web ile Örnekgo mod tidy4. Aşağıdaki ayarları yapın:

    // API Key Prüfung

    let auth_header = headers.get("Authorization");

    if let Some(auth) = auth_header {

        if let Ok(auth_str) = auth.to_str() {```rust   - **Path**: Rust API'nizin endpoint path'i (örn: `/api/v1/metrics`)

            if !auth_str.starts_with("Bearer ") {

                return Err(StatusCode::UNAUTHORIZED);use actix_web::{web, App, HttpServer, HttpResponse, HttpRequest};

            }

            // Ihre API-Key-Validierungslogikuse serde::{Deserialize, Serialize};# Backend binary'lerini derle (Linux, Windows, Darwin)   - **API Key**: Rust backend'iniz için oluşturduğunuz API anahtarı

        }

    } else {use chrono::Utc;

        return Err(StatusCode::UNAUTHORIZED);

    }mage -v5. **Save & Test** butonuna tıklayın



    // Beispieldaten zurückgeben#[derive(Serialize)]

    let start = params.from.unwrap_or(Utc::now().timestamp_millis() - 3600000);

    let end = params.to.unwrap_or(Utc::now().timestamp_millis());struct MetricResponse {```



    let mut datapoints = Vec::new();    datapoints: Vec<DataPoint>,

    let mut current = start;

    while current <= end {}### 3. Dashboard ve Panel Oluşturma

        datapoints.push(DataPoint {

            time: current,

            value: (current % 100) as f64,

        });#[derive(Serialize)]#### Frontend Build

        current += 60000;

    }struct DataPoint {



    Ok(Json(MetricResponse { datapoints }))    time: i64,1. Yeni bir dashboard oluşturun veya mevcut bir dashboard'a panel ekleyin

}

    value: f64,

#[tokio::main]

async fn main() {}```bash2. Query editor'de:

    let app = Router::new().route("/api/v1/metrics", get(get_metrics));



    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));

    println!("Server läuft auf http://{}", addr);#[derive(Deserialize)]# Bağımlılıkları yükle   - **Data Source**: Pehlione Monitoring seçin



    axum::Server::bind(&addr)struct QueryParams {

        .serve(app.into_make_service())

        .await    from: Option<i64>,npm install   - **Query Text**: İstediğiniz metric adını veya filtreyi girin

        .unwrap();

}    to: Option<i64>,

``````

} - **Time Range**: Grafana'nın zaman seçicisini kullanın

## Anwendungsfälle

### 1. System-Metriken Monitoring (CPU, Speicher)

async fn get_metrics(# Production build3. Visualization type'ı seçin (Time series, Gauge, Table, vb.)

`````rust

use sysinfo::{System, SystemExt, ProcessorExt};    req: HttpRequest,

use std::sync::{Arc, Mutex};

use chrono::Utc;    query: web::Query<QueryParams>,npm run build



struct SystemMonitor {) -> HttpResponse {

    system: Arc<Mutex<System>>,

}    // API Key kontrolü## Geliştirme



impl SystemMonitor {    let auth_header = req.headers().get("Authorization");

    fn new() -> Self {

        Self {    if let Some(auth) = auth_header {# Development mode (watch mode)

            system: Arc::new(Mutex::new(System::new_all())),

        }        if let Ok(auth_str) = auth.to_str() {

    }

                if !auth_str.starts_with("Bearer ") {npm run dev1. Update [Grafana plugin SDK for Go](https://grafana.com/developers/plugin-tools/key-concepts/backend-plugins/grafana-plugin-sdk-for-go) dependency to the latest minor version:

    fn get_cpu_metrics(&self) -> Vec<DataPoint> {

        let mut sys = self.system.lock().unwrap();                return HttpResponse::Unauthorized().json("Invalid authorization");

        sys.refresh_cpu();

                    }```

        vec![DataPoint {

            time: Utc::now().timestamp_millis(),            // API key doğrulama mantığınız

            value: sys.global_processor_info().cpu_usage() as f64,

        }]            let api_key = auth_str.trim_start_matches("Bearer ");````bash

    }

                // Burada api_key'i doğrulayın

    fn get_memory_metrics(&self) -> Vec<DataPoint> {

        let mut sys = self.system.lock().unwrap();        }### 2. Grafana'da Veri Kaynağı Ekleme   go get -u github.com/grafana/grafana-plugin-sdk-go

        sys.refresh_memory();

            } else {

        vec![DataPoint {

            time: Utc::now().timestamp_millis(),        return HttpResponse::Unauthorized().json("Missing authorization");go mod tidy

            value: sys.used_memory() as f64,

        }]    }

    }

}1. Grafana'ya giriş yapın   ```

`````

    // Örnek veri oluşturma (gerçek uygulamanızda kendi verilerinizi kullanın)

### 2. Benutzerdefinierte Anwendungsmetriken

    let mut datapoints = Vec::new();2. **Configuration** → **Data Sources** → **Add data source** yolunu izleyin

````rust

use std::sync::Arc;    let start = query.from.unwrap_or(Utc::now().timestamp_millis() - 3600000);

use std::sync::atomic::{AtomicU64, Ordering};

    let end = query.to.unwrap_or(Utc::now().timestamp_millis());3. "Pehlione Monitoring" data source'u arayın ve seçin2. Build plugin backend binaries for Linux, Windows and Darwin:

struct AppMetrics {

    request_count: Arc<AtomicU64>,

    error_count: Arc<AtomicU64>,

    response_time_ms: Arc<AtomicU64>,    let mut current = start;4. Aşağıdaki ayarları yapın:

}

    while current <= end {

impl AppMetrics {

    fn new() -> Self {        datapoints.push(DataPoint {- **Path**: Rust API'nizin endpoint path'i (örn: `http://localhost:8080/api/v1/metrics`)   ```bash

        Self {

            request_count: Arc::new(AtomicU64::new(0)),            time: current,

            error_count: Arc::new(AtomicU64::new(0)),

            response_time_ms: Arc::new(AtomicU64::new(0)),            value: (current % 100) as f64,- **API Key**: Rust backend'iniz için oluşturduğunuz API anahtarı   mage -v

        }

    }        });



    fn increment_requests(&self) {        current += 60000; // Her dakika5. **Save & Test** butonuna tıklayın   ```

        self.request_count.fetch_add(1, Ordering::Relaxed);

    }    }



    fn increment_errors(&self) {

        self.error_count.fetch_add(1, Ordering::Relaxed);

    }    HttpResponse::Ok().json(MetricResponse { datapoints })



    fn to_datapoints(&self, timestamp: i64) -> Vec<DataPoint> {}### 3. Dashboard ve Panel Oluşturma### Backend (Go)

        vec![

            DataPoint {

                time: timestamp,

                value: self.request_count.load(Ordering::Relaxed) as f64,#[actix_web::main]

            },

            DataPoint {async fn main() -> std::io::Result<()> {

                time: timestamp,

                value: self.error_count.load(Ordering::Relaxed) as f64,    HttpServer::new(|| {1. Yeni bir dashboard oluşturun veya mevcut bir dashboard'a panel ekleyinPlugin backend'i Go ile yazılmıştır ve Rust API'nize HTTP istekleri yapar.

            },

        ]        App::new()

    }

}            .route("/api/v1/metrics", web::get().to(get_metrics))2. Query editor'de:

````

    })

### 3. Datenbank-Performance-Monitoring

    .bind(("127.0.0.1", 8080))?- **Data Source**: Pehlione Monitoring seçin1. Go dependency'lerini güncelleyin:

````rust

use sqlx::{Pool, Postgres};    .run()

use std::time::Instant;

    .await- **Query Text**: İstediğiniz metric adını veya filtreyi girin

struct DbMonitor {

    pool: Pool<Postgres>,}

}

```- **Time Range**: Grafana'nın zaman seçicisini kullanın   ```bash

impl DbMonitor {

    async fn get_query_performance(&self) -> Vec<DataPoint> {

        let start = Instant::now();

        ### Axum ile Örnek3. Visualization type'ı seçin (Time series, Gauge, Table, vb.)   go get -u github.com/grafana/grafana-plugin-sdk-go

        // Beispiel-Query

        let _ = sqlx::query!("SELECT 1")

            .fetch_one(&self.pool)

            .await;```rustgo mod tidy



        let duration = start.elapsed().as_millis() as f64;use axum::{



        vec![DataPoint {    extract::Query,## Rust Backend Örnek Implementasyon   ```

            time: Utc::now().timestamp_millis(),

            value: duration,    http::{HeaderMap, StatusCode},

        }]

    }    response::Json,



    async fn get_connection_count(&self) -> Vec<DataPoint> {    routing::get,

        vec![DataPoint {

            time: Utc::now().timestamp_millis(),    Router,### Actix-web ile Örnek2. Backend binary'lerini derleyin (Linux, Windows ve Darwin için):

            value: self.pool.size() as f64,

        }]};

    }

}use serde::{Deserialize, Serialize};

````

use std::net::SocketAddr;

## CORS-Konfiguration

use chrono::Utc;`rust   `bash

Aktivieren Sie CORS in Ihrem Rust-Backend:

### Für Actix-web:

#[derive(Serialize)]use actix_web::{web, App, HttpServer, HttpResponse, HttpRequest}; mage -v

````rust

use actix_cors::Cors;struct MetricResponse {

use actix_web::{web, App, HttpServer};

    datapoints: Vec<DataPoint>,use serde::{Deserialize, Serialize};   ```

#[actix_web::main]

async fn main() -> std::io::Result<()> {}

    HttpServer::new(|| {

        let cors = Cors::default()use chrono::Utc;

            .allow_any_origin()

            .allow_any_method()#[derive(Serialize)]

            .allow_any_header()

            .max_age(3600);struct DataPoint {3. Tüm mevcut Mage komutlarını listeleyin:



        App::new()    time: i64,

            .wrap(cors)

            .route("/api/v1/metrics", web::get().to(get_metrics))    value: f64,#[derive(Serialize)]

    })

    .bind(("127.0.0.1", 8080))?}

    .run()

    .awaitstruct MetricResponse {   ```bash

}

```#[derive(Deserialize)]



### Für Axum:struct QueryParams { datapoints: Vec<DataPoint>,   mage -l



```rust    from: Option<i64>,

use tower_http::cors::{CorsLayer, Any};

use axum::{Router, routing::get};    to: Option<i64>,}   ```



#[tokio::main]}

async fn main() {

    let app = Router::new()

        .route("/api/v1/metrics", get(get_metrics))

        .layer(async fn get_metrics(

            CorsLayer::new()

                .allow_origin(Any)    headers: HeaderMap,#[derive(Serialize)]### Frontend (TypeScript/React)

                .allow_methods(Any)

                .allow_headers(Any)    Query(params): Query<QueryParams>,

        );

    ) -> Result<Json<MetricResponse>, StatusCode> {struct DataPoint {

    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));

    axum::Server::bind(&addr)    // API Key kontrolü

        .serve(app.into_make_service())

        .await    let auth_header = headers.get("Authorization"); time: i64,1. Install dependencies

        .unwrap();

}    if let Some(auth) = auth_header {

````

        if let Ok(auth_str) = auth.to_str() { value: f64,

## Entwicklung

            if !auth_str.starts_with("Bearer ") {

### Backend (Go)

                return Err(StatusCode::UNAUTHORIZED);}   ```bash

````bash

# Abhängigkeiten aktualisieren            }

go get -u github.com/grafana/grafana-plugin-sdk-go

go mod tidy            // API key doğrulama mantığınıznpm install



# Build        }

mage -v

    } else {#[derive(Deserialize)]   ```

# Alle Mage-Befehle auflisten

mage -l        return Err(StatusCode::UNAUTHORIZED);



# Tests ausführen    }struct QueryParams {

go test ./pkg/...

````

### Frontend (TypeScript/React) // Örnek veri döndürme from: Option<i64>,2. Build plugin in development mode and run in watch mode

````bash let start = params.from.unwrap_or(Utc::now().timestamp_millis() - 3600000);

# Abhängigkeiten installieren

npm install    let end = params.to.unwrap_or(Utc::now().timestamp_millis()); to: Option<i64>,



# Development Mode

npm run dev

    let mut datapoints = Vec::new();}   ```bash

# Production Build

npm run build    let mut current = start;



# Tests ausführen    while current <= end {npm run dev

npm run test

        datapoints.push(DataPoint {

# E2E Tests

npm run server  # Zuerst Grafana-Instanz starten            time: current,async fn get_metrics(   ```

npm run e2e     # Dann Tests ausführen

            value: (current % 100) as f64,

# Linting

npm run lint        }); req: HttpRequest,

npm run lint:fix

```        current += 60000;



### Lokale Tests mit Docker    } query: web::Query<QueryParams>,3. Build plugin in production mode



```bash

# Grafana-Instanz starten

npm run server    Ok(Json(MetricResponse { datapoints }))) -> HttpResponse {



# Mit einer bestimmten Grafana-Version}

GRAFANA_VERSION=11.3.0 npm run server

``` // API Key kontrolü   ```bash



## Fehlerbehebung#[tokio::main]



### Plugin erscheint nicht in Grafanaasync fn main() { let auth_header = req.headers().get("Authorization");   npm run build



1. Stellen Sie sicher, dass das Plugin-Binary korrekt kompiliert wurde:    let app = Router::new().route("/api/v1/metrics", get(get_metrics));

   ```bash

   mage build if let Some(auth) = auth_header {   ```

````

    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));

2.  Überprüfen Sie das Grafana-Plugin-Verzeichnis:

    ```bash println!("Server running on http://{}", addr);     if let Ok(auth_str) = auth.to_str() {

    ls -la /var/lib/grafana/plugins/

    ```

3.  Prüfen Sie die Grafana-Logs: axum::Server::bind(&addr) if !auth_str.starts_with("Bearer ") {4. Run the tests (using Jest)

    ```bash

    tail -f /var/log/grafana/grafana.log        .serve(app.into_make_service())

    ```

         .await             return HttpResponse::Unauthorized().json("Invalid authorization");

4.  Überprüfen Sie die Plugin-Signatur-Einstellungen (für Development):

    ````ini .unwrap();

    # grafana.ini

    [plugins]}         }   ```bash

    allow_loading_unsigned_plugins = pehlione-monitoring-datasource

    ````

### "Connection Refused" Fehler // API key doğrulama mantığınız # Runs the tests and watches for changes, requires git init first

1. Stellen Sie sicher, dass Ihr Rust-Backend läuft:## Kullanım Senaryoları

   ```bash

   curl http://localhost:8080/api/v1/metrics         let api_key = auth_str.trim_start_matches("Bearer ");   npm run test

   ```

### 1. Sistem Metrik Monitoring (CPU, Memory)

2.  Überprüfen Sie die Path-Einstellung (vollständige URL eingeben)

         // Burada api_key'i doğrulayın

3.  Validieren Sie den API-Key:

    `bash`rust

    curl -H "Authorization: Bearer YOUR_API_KEY" \

         http://localhost:8080/api/v1/metricsuse sysinfo::{System, SystemExt, ProcessorExt};     }   # Exits after running all the tests

    ```

    ```

use std::sync::{Arc, Mutex};

4. Überprüfen Sie die CORS-Einstellungen

use chrono::Utc; } else { npm run test:ci

### Keine Daten sichtbar

1. Stellen Sie sicher, dass Ihre Rust-API das richtige Response-Format zurückgibt

2. Überprüfen Sie den Time Rangestruct SystemMonitor { return HttpResponse::Unauthorized().json("Missing authorization"); ```

3. Öffnen Sie die Browser-Konsole (F12) und prüfen Sie den Netzwerk-Traffic

4. Verwenden Sie den Grafana Query Inspector (Panel → Inspect → Query) system: Arc<Mutex<System>>,

### API Key Fehler} }

1. Stellen Sie sicher, dass der API Key im ConfigEditor korrekt eingegeben wurde

2. Überprüfen Sie, dass die API-Key-Validierung im Backend funktioniert

3. Bei "API key is missing" Fehler in den Grafana-Logs, speichern Sie die Konfiguration erneutimpl SystemMonitor {5. Spin up a Grafana instance and run the plugin inside it (using Docker)

## Entwicklungsstatus fn new() -> Self {

Dieses Projekt befindet sich in aktiver Entwicklung. An folgenden Features wird gearbeitet: Self { // Örnek veri oluşturma (gerçek uygulamanızda kendi verilerinizi kullanın)

### ✅ Abgeschlossen system: Arc::new(Mutex::new(System::new_all())),

- [x] Grundlegende Plugin-Struktur

- [x] API Key Authentifizierung } let mut datapoints = Vec::new(); ```bash

- [x] Rust Backend-Integration

- [x] Basis-Datenabfrage-Unterstützung }

### 🚧 In Arbeit let start = query.from.unwrap_or(Utc::now().timestamp_millis() - 3600000); npm run server

- [ ] Erweiterte Query-Funktionen

- [ ] Multi-Metrik-Unterstützung fn get_cpu_metrics(&self) -> Vec<DataPoint> {

- [ ] Caching-Mechanismus

- [ ] Unit- und Integrationstests let mut sys = self.system.lock().unwrap(); let end = query.to.unwrap_or(Utc::now().timestamp_millis()); ```

- [ ] Verbesserte Fehlerbehandlung

        sys.refresh_cpu();

### 📋 Geplant

- [ ] Streaming-Daten-Unterstützung

- [ ] Alert-Unterstützung

- [ ] Dashboard-Vorlagen vec![DataPoint {

- [ ] Metrik-Aggregation

- [ ] Veröffentlichung im Plugin-Marketplace time: Utc::now().timestamp_millis(), let mut current = start;6. Run the E2E tests (using Playwright)

## Mitwirken value: sys.global_processor_info().cpu_usage() as f64,

Dieses Projekt ist Open Source und wir freuen uns über Ihre Beiträge! }] while current <= end {

### Wie Sie beitragen können }

1. Forken Sie dieses Repository datapoints.push(DataPoint { ```bash

2. Erstellen Sie einen neuen Branch (`git checkout -b feature/amazing-feature`)

3. Committen Sie Ihre Änderungen (`git commit -m 'feat: Add amazing feature'`) fn get_memory_metrics(&self) -> Vec<DataPoint> {

4. Pushen Sie den Branch (`git push origin feature/amazing-feature`)

5. Erstellen Sie einen Pull Request let mut sys = self.system.lock().unwrap(); time: current, # Spins up a Grafana instance first that we tests against

### Entwicklungsrichtlinien sys.refresh_memory();

- Halten Sie sich an Code-Standards (eslint, prettier) value: (current % 100) as f64, npm run server

- Fügen Sie Tests für neue Features hinzu

- Verwenden Sie [Conventional Commits](https://www.conventionalcommits.org/) für Commit-Nachrichten vec![DataPoint {

- Beschreiben Sie Ihre Änderungen detailliert im Pull Request

            time: Utc::now().timestamp_millis(),     });

## Plugin-Verteilung

            value: sys.used_memory() as f64,

Für die Verteilung des Plugins an die Grafana-Community oder privat muss das Plugin signiert werden.

        }]     current += 60000; // Her dakika   # If you wish to start a certain Grafana version. If not specified will use latest by default

_Hinweis: Während der Entwicklung ist keine Signierung erforderlich._

    }

### Erste Schritte

} } GRAFANA_VERSION=11.3.0 npm run server

1. Erstellen Sie ein [Grafana Cloud Konto](https://grafana.com/signup)

2. Stellen Sie sicher, dass der erste Teil der Plugin-ID mit Ihrem Grafana Cloud Account-Slug übereinstimmt```

3. Erstellen Sie einen Grafana Cloud API Key mit der Rolle `PluginPublisher`

4. Bewahren Sie diesen API Key sicher auf

### Signierung mit Github Actions### 2. Custom Application Metrics

1. Gehen Sie in Ihrem Github-Repo zu "Settings > Secrets > Actions" HttpResponse::Ok().json(MetricResponse { datapoints }) # Starts the tests

2. Klicken Sie auf "New repository secret"

3. Benennen Sie das Secret "GRAFANA_API_KEY"```rust

4. Fügen Sie Ihren Grafana Cloud API Key ein

5. Klicken Sie auf "Add secret"use std::sync::Arc;} npm run e2e

### Version Releaseuse std::sync::atomic::{AtomicU64, Ordering};

```bash`````

# Version hochsetzen

npm version <major|minor|patch>struct AppMetrics {

# Tag pushen request_count: Arc<AtomicU64>,#[actix_web::main]

git push origin main --follow-tags

`````error_count: Arc<AtomicU64>,



## Ressourcen    response_time_ms: Arc<AtomicU64>,async fn main() -> std::io::Result<()> {7. Run the E2E tests (using Playwright)



- [Grafana Plugin Dokumentation](https://grafana.com/developers/plugin-tools)}

- [Backend Plugin Entwicklung](https://grafana.com/developers/plugin-tools/key-concepts/backend-plugins)

- [Data Source Plugin Beispiel](https://github.com/grafana/grafana-plugin-examples/tree/master/examples/datasource-basic)    HttpServer::new(|| {

- [`plugin.json` Dokumentation](https://grafana.com/developers/plugin-tools/reference/plugin-json)

- [Plugin Signierung](https://grafana.com/developers/plugin-tools/publish-a-plugin/sign-a-plugin)impl AppMetrics {



## Lizenz    fn new() -> Self {        App::new()   ```bash



Dieses Projekt ist unter der MIT-Lizenz lizenziert. Details finden Sie in der [LICENSE](LICENSE) Datei.        Self {



## Kontakt            request_count: Arc::new(AtomicU64::new(0)),            .route("/api/v1/metrics", web::get().to(get_metrics))   # Spins up a Grafana instance first that we tests against



- **GitHub Issues**: [https://github.com/1DeliDolu/monitoring-pehlione-datasource/issues](https://github.com/1DeliDolu/monitoring-pehlione-datasource/issues)            error_count: Arc::new(AtomicU64::new(0)),

- **Discussions**: Nutzen Sie GitHub Discussions für Fragen

- **E-Mail**: support@pehlione.com            response_time_ms: Arc::new(AtomicU64::new(0)),    })   npm run server



---        }



**Hinweis**: Dieses Plugin funktioniert mit jedem in Rust geschriebenen Monitoring-Backend. Die obigen Beispiele sind für Actix-web und Axum, funktionieren aber auch mit Rocket, Warp oder anderen Rust-Web-Frameworks.    }    .bind(("127.0.0.1", 8080))?



**Entwicklungsstadium**: Dieses Projekt befindet sich in aktiver Entwicklung. Es wird empfohlen, umfassende Tests durchzuführen, bevor Sie es in einer Produktionsumgebung einsetzen.


    fn increment_requests(&self) {    .run()   # If you wish to start a certain Grafana version. If not specified will use latest by default

        self.request_count.fetch_add(1, Ordering::Relaxed);

    }    .await   GRAFANA_VERSION=11.3.0 npm run server



    fn increment_errors(&self) {}

        self.error_count.fetch_add(1, Ordering::Relaxed);

    }````# Starts the tests



    fn to_datapoints(&self, timestamp: i64) -> Vec<DataPoint> {   npm run e2e

        vec![

            DataPoint {### Axum ile Örnek   ```

                time: timestamp,

                value: self.request_count.load(Ordering::Relaxed) as f64,

            },

            DataPoint {```rust8. Run the linter

                time: timestamp,

                value: self.error_count.load(Ordering::Relaxed) as f64,use axum::{

            },

        ]    extract::Query,   ```bash

    }

} http::{HeaderMap, StatusCode}, npm run lint

`````

    response::Json,

### 3. Database Query Performance Monitoring

    routing::get,   # or

````rust

use sqlx::{Pool, Postgres};    Router,

use std::time::Instant;

};   npm run lint:fix

struct DbMonitor {

    pool: Pool<Postgres>,use serde::{Deserialize, Serialize};   ```

}

use std::net::SocketAddr;

impl DbMonitor {

    async fn get_query_performance(&self) -> Vec<DataPoint> {use chrono::Utc;## Rust Backend Örnek Implementasyon

        let start = Instant::now();



        // Örnek query

        let _ = sqlx::query!("SELECT 1")#[derive(Serialize)]### Actix-web ile Örnek

            .fetch_one(&self.pool)

            .await;struct MetricResponse {



        let duration = start.elapsed().as_millis() as f64;    datapoints: Vec<DataPoint>,```rust



        vec![DataPoint {}use actix_web::{web, App, HttpServer, HttpResponse, HttpRequest};

            time: Utc::now().timestamp_millis(),

            value: duration,use serde::{Deserialize, Serialize};

        }]

    }#[derive(Serialize)]use chrono::Utc;



    async fn get_connection_count(&self) -> Vec<DataPoint> {struct DataPoint {

        vec![DataPoint {

            time: Utc::now().timestamp_millis(),    time: i64,#[derive(Serialize)]

            value: self.pool.size() as f64,

        }]    value: f64,struct MetricResponse {

    }

}}    datapoints: Vec<DataPoint>,

````

}

## CORS Ayarları

#[derive(Deserialize)]

Rust backend'inizde CORS'u etkinleştirin:

struct QueryParams {#[derive(Serialize)]

### Actix-web için:

    from: Option<i64>,struct DataPoint {

````rust

use actix_cors::Cors;    to: Option<i64>,    time: i64,

use actix_web::{web, App, HttpServer};

}    value: f64,

#[actix_web::main]

async fn main() -> std::io::Result<()> {}

    HttpServer::new(|| {

        let cors = Cors::default()async fn get_metrics(

            .allow_any_origin()

            .allow_any_method()    headers: HeaderMap,#[derive(Deserialize)]

            .allow_any_header()

            .max_age(3600);    Query(params): Query<QueryParams>,struct QueryParams {



        App::new()) -> Result<Json<MetricResponse>, StatusCode> {    from: Option<i64>,

            .wrap(cors)

            .route("/api/v1/metrics", web::get().to(get_metrics))    // API Key kontrolü    to: Option<i64>,

    })

    .bind(("127.0.0.1", 8080))?    let auth_header = headers.get("Authorization");}

    .run()

    .await    if let Some(auth) = auth_header {

}

```        if let Ok(auth_str) = auth.to_str() {async fn get_metrics(



### Axum için:            if !auth_str.starts_with("Bearer ") {    req: HttpRequest,



```rust                return Err(StatusCode::UNAUTHORIZED);    query: web::Query<QueryParams>,

use tower_http::cors::{CorsLayer, Any};

use axum::{Router, routing::get};            }) -> HttpResponse {



#[tokio::main]            // API key doğrulama mantığınız    // API Key kontrolü

async fn main() {

    let app = Router::new()        }    let auth_header = req.headers().get("Authorization");

        .route("/api/v1/metrics", get(get_metrics))

        .layer(    } else {    if let Some(auth) = auth_header {

            CorsLayer::new()

                .allow_origin(Any)        return Err(StatusCode::UNAUTHORIZED);        if let Ok(auth_str) = auth.to_str() {

                .allow_methods(Any)

                .allow_headers(Any)    }            if !auth_str.starts_with("Bearer ") {

        );

                    return HttpResponse::Unauthorized().json("Invalid authorization");

    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));

    axum::Server::bind(&addr)    // Örnek veri döndürme            }

        .serve(app.into_make_service())

        .await    let start = params.from.unwrap_or(Utc::now().timestamp_millis() - 3600000);            // API key doğrulama mantığınız

        .unwrap();

}    let end = params.to.unwrap_or(Utc::now().timestamp_millis());        }

````

        } else {

## Geliştirme

    let mut datapoints = Vec::new();        return HttpResponse::Unauthorized().json("Missing authorization");

### Backend (Go)

    let mut current = start;    }

```````bash

# Bağımlılıkları güncelle    while current <= end {

go get -u github.com/grafana/grafana-plugin-sdk-go

go mod tidy        datapoints.push(DataPoint {    // Örnek veri oluşturma (gerçek uygulamanızda kendi verilerinizi kullanın)



# Build            time: current,    let mut datapoints = Vec::new();

mage -v

            value: (current % 100) as f64,    let start = query.from.unwrap_or(Utc::now().timestamp_millis() - 3600000);

# Tüm mage komutlarını listele

mage -l        });    let end = query.to.unwrap_or(Utc::now().timestamp_millis());



# Test        current += 60000;

go test ./pkg/...

```    }    let mut current = start;



### Frontend (TypeScript/React)    while current <= end {



```bash    Ok(Json(MetricResponse { datapoints }))        datapoints.push(DataPoint {

# Bağımlılıkları yükle

npm install}            time: current,



# Development mode            value: (current % 100) as f64,

npm run dev

#[tokio::main]        });

# Production build

npm run buildasync fn main() {        current += 60000; // Her dakika



# Test    let app = Router::new().route("/api/v1/metrics", get(get_metrics));    }

npm run test



# E2E test

npm run server  # Önce Grafana instance başlat    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));    HttpResponse::Ok().json(MetricResponse { datapoints })

npm run e2e     # Sonra testleri çalıştır

    println!("Server running on http://{}", addr);}

# Lint

npm run lint

npm run lint:fix

```    axum::Server::bind(&addr)#[actix_web::main]



### Docker ile Local Test        .serve(app.into_make_service())async fn main() -> std::io::Result<()> {



```bash        .await    HttpServer::new(|| {

# Grafana instance başlat

npm run server        .unwrap();        App::new()



# Belirli bir Grafana versiyonu ile}            .route("/api/v1/metrics", web::get().to(get_metrics))

GRAFANA_VERSION=11.3.0 npm run server

``````    })



## Troubleshooting    .bind(("127.0.0.1", 8080))?



### Plugin Grafana'da Görünmüyor## Kullanım Senaryoları    .run()



1. Plugin binary'sinin doğru derlendiğinden emin olun:    .await

   ```bash

   mage build### 1. Sistem Metrik Monitoring (CPU, Memory)}

```````

`````

2. Grafana'nın plugin dizinini kontrol edin:

   ```bash````rust

   ls -la /var/lib/grafana/plugins/

   ```use sysinfo::{System, SystemExt, ProcessorExt};### Axum ile Örnek



3. Grafana loglarını inceleyin:use std::sync::{Arc, Mutex};

   ```bash

   tail -f /var/log/grafana/grafana.loguse chrono::Utc;```rust

   ```

use axum::{

4. Plugin imza ayarlarını kontrol edin (development için):

   ```inistruct SystemMonitor {    extract::Query,

   # grafana.ini

   [plugins]    system: Arc<Mutex<System>>,    http::{HeaderMap, StatusCode},

   allow_loading_unsigned_plugins = pehlione-monitoring-datasource

   ```}    response::Json,



### "Connection Refused" Hatası    routing::get,



1. Rust backend'inizin çalıştığından emin olun:impl SystemMonitor {    Router,

   ```bash

   curl http://localhost:8080/api/v1/metrics    fn new() -> Self {};

   ```

        Self {use serde::{Deserialize, Serialize};

2. Path ayarının doğru olduğunu kontrol edin (tam URL girin)

            system: Arc::new(Mutex::new(System::new_all())),use std::net::SocketAddr;

3. API Key'in geçerli olduğunu doğrulayın:

   ```bash        }

   curl -H "Authorization: Bearer YOUR_API_KEY" \

        http://localhost:8080/api/v1/metrics    }#[derive(Serialize)]

   ```

    struct MetricResponse {

4. CORS ayarlarını kontrol edin

    fn get_cpu_metrics(&self) -> Vec<DataPoint> {    datapoints: Vec<DataPoint>,

### Veri Görünmüyor

        let mut sys = self.system.lock().unwrap();}

1. Rust API'nizin doğru formatta response döndürdüğünden emin olun

2. Time range'in uygun olduğunu kontrol edin        sys.refresh_cpu();

3. Browser console'u açın (F12) ve network trafiğini inceleyin

4. Grafana query inspector'ı kullanın (panel → Inspect → Query)        #[derive(Serialize)]



### API Key Hatası        vec![DataPoint {struct DataPoint {



1. ConfigEditor'de API Key'in doğru girildiğinden emin olun            time: Utc::now().timestamp_millis(),    time: i64,

2. Backend'de API key doğrulamasının çalıştığını kontrol edin

3. Grafana loglarında "API key is missing" hatası varsa, config'i tekrar kaydedin            value: sys.global_processor_info().cpu_usage() as f64,    value: f64,



## Geliştirme Durumu        }]}



Bu proje aktif geliştirme aşamasındadır. Aşağıdaki özellikler üzerinde çalışılmaktadır:    }



### ✅ Tamamlanmış    #[derive(Deserialize)]

- [x] Temel plugin yapısı

- [x] API Key authentication    fn get_memory_metrics(&self) -> Vec<DataPoint> {struct QueryParams {

- [x] Rust backend entegrasyonu

- [x] Temel data query desteği        let mut sys = self.system.lock().unwrap();    from: Option<i64>,



### 🚧 Devam Eden        sys.refresh_memory();    to: Option<i64>,

- [ ] Gelişmiş query özellikleri

- [ ] Çoklu metrik desteği        }

- [ ] Önbellekleme mekanizması

- [ ] Unit ve entegrasyon testleri        vec![DataPoint {

- [ ] Hata yönetimi iyileştirmeleri

            time: Utc::now().timestamp_millis(),async fn get_metrics(

### 📋 Planlanmış

- [ ] Streaming data desteği            value: sys.used_memory() as f64,    headers: HeaderMap,

- [ ] Alert desteği

- [ ] Dashboard şablonları        }]    Query(params): Query<QueryParams>,

- [ ] Metrik aggregation

- [ ] Plugin marketplace'e yayın    }) -> Result<Json<MetricResponse>, StatusCode> {



## Katkıda Bulunma}    // API Key kontrolü



Bu proje açık kaynaklıdır ve katkılarınızı bekliyoruz! ```    let auth_header = headers.get("Authorization");



### Nasıl Katkıda Bulunabilirsiniz?    if let Some(auth) = auth_header {



1. Bu repository'yi fork edin### 2. Custom Application Metrics        if let Ok(auth_str) = auth.to_str() {

2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)

3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)            if !auth_str.starts_with("Bearer ") {

4. Branch'inizi push edin (`git push origin feature/amazing-feature`)

5. Pull Request oluşturun```rust                return Err(StatusCode::UNAUTHORIZED);



### Geliştirme Rehberiuse std::sync::Arc;            }



- Kod standartlarına uyun (eslint, prettier)use std::sync::atomic::{AtomicU64, Ordering};            // API key doğrulama mantığınız

- Yeni özellikler için testler ekleyin

- Commit mesajlarında [Conventional Commits](https://www.conventionalcommits.org/) kullanın        }

- Pull Request'inizde değişiklikleri detaylı açıklayın

struct AppMetrics {    } else {

## Plugin Dağıtımı

    request_count: Arc<AtomicU64>,        return Err(StatusCode::UNAUTHORIZED);

Plugin'i Grafana topluluğuna veya özel olarak dağıtırken imzalanması gerekir.

    error_count: Arc<AtomicU64>,    }

_Not: Geliştirme sırasında plugin'i imzalamak gerekli değildir._

    response_time_ms: Arc<AtomicU64>,

### İlk Adımlar

}    // Örnek veri döndürme

1. [Grafana Cloud hesabı](https://grafana.com/signup) oluşturun

2. Plugin ID'nin ilk kısmının Grafana Cloud hesap slug'ınızla eşleştiğinden emin olun    let datapoints = vec![

3. `PluginPublisher` rolüne sahip bir Grafana Cloud API key oluşturun

4. Bu API key'i kaydedinimpl AppMetrics {        DataPoint { time: 1697712000000, value: 42.5 },



### Github Actions ile İmzalama    fn new() -> Self {        DataPoint { time: 1697712060000, value: 45.2 },



1. Github repo'nuzda "Settings > Secrets > Actions" bölümüne gidin        Self {    ];

2. "New repository secret" tıklayın

3. Secret adını "GRAFANA_API_KEY" olarak ayarlayın            request_count: Arc::new(AtomicU64::new(0)),

4. Grafana Cloud API key'inizi yapıştırın

5. "Add secret" tıklayın            error_count: Arc::new(AtomicU64::new(0)),    Ok(Json(MetricResponse { datapoints }))



### Version Release            response_time_ms: Arc::new(AtomicU64::new(0)),}



```bash        }

# Version bump

npm version <major|minor|patch>    }#[tokio::main]



# Tag'i push et    async fn main() {

git push origin main --follow-tags

```    fn increment_requests(&self) {    let app = Router::new().route("/api/v1/metrics", get(get_metrics));



## Kaynaklar        self.request_count.fetch_add(1, Ordering::Relaxed);



- [Grafana Plugin Dokümantasyonu](https://grafana.com/developers/plugin-tools)    }    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));

- [Backend Plugin Geliştirme](https://grafana.com/developers/plugin-tools/key-concepts/backend-plugins)

- [Data Source Plugin Örneği](https://github.com/grafana/grafana-plugin-examples/tree/master/examples/datasource-basic)        axum::Server::bind(&addr)

- [`plugin.json` Dokümantasyonu](https://grafana.com/developers/plugin-tools/reference/plugin-json)

- [Plugin İmzalama](https://grafana.com/developers/plugin-tools/publish-a-plugin/sign-a-plugin)    fn increment_errors(&self) {        .serve(app.into_make_service())



## Lisans        self.error_count.fetch_add(1, Ordering::Relaxed);        .await



Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.    }        .unwrap();



## İletişim    }



- **GitHub Issues**: [https://github.com/1DeliDolu/monitoring-pehlione-datasource/issues](https://github.com/1DeliDolu/monitoring-pehlione-datasource/issues)    fn to_datapoints(&self, timestamp: i64) -> Vec<DataPoint> {```

- **Discussions**: Sorularınız için GitHub Discussions kullanın

- **Email**: support@pehlione.com        vec![



---            DataPoint {## Kullanım Senaryoları



**Not**: Bu plugin, Rust ile yazılmış herhangi bir monitoring backend'i ile çalışabilir. Yukarıdaki örnekler Actix-web ve Axum için verilmiştir, ancak Rocket, Warp veya diğer Rust web framework'leri ile de uyumlu çalışır.                time: timestamp,



**Geliştirme Aşaması**: Bu proje aktif geliştirme aşamasındadır. Production ortamında kullanmadan önce kapsamlı testler yapmanız önerilir.                value: self.request_count.load(Ordering::Relaxed) as f64,### 1. CPU ve Memory Monitoring


            },

            DataPoint {```rust

                time: timestamp,// Rust backend'de sistem metriklerini topla

                value: self.error_count.load(Ordering::Relaxed) as f64,use sysinfo::{System, SystemExt, ProcessorExt};

            },

        ]fn get_system_metrics() -> Vec<DataPoint> {

    }    let mut sys = System::new_all();

}    sys.refresh_all();

`````

    vec![

### 3. Database Query Performance Monitoring DataPoint {

            time: Utc::now().timestamp_millis(),

````rust value: sys.global_processor_info().cpu_usage() as f64,

use sqlx::{Pool, Postgres};        }

use std::time::Instant;    ]

}

struct DbMonitor {```

    pool: Pool<Postgres>,

}### 2. Custom Application Metrics



impl DbMonitor {```rust

    async fn get_query_performance(&self) -> Vec<DataPoint> {// Uygulama metriklerini kaydet ve serve et

        let start = Instant::now();struct AppMetrics {

            request_count: Arc<AtomicU64>,

        // Örnek query    error_count: Arc<AtomicU64>,

        let _ = sqlx::query!("SELECT 1")}

            .fetch_one(&self.pool)

            .await;impl AppMetrics {

            fn to_datapoints(&self, timestamp: i64) -> Vec<DataPoint> {

        let duration = start.elapsed().as_millis() as f64;        vec![

                    DataPoint {

        vec![DataPoint {                time: timestamp,

            time: Utc::now().timestamp_millis(),                value: self.request_count.load(Ordering::Relaxed) as f64,

            value: duration,            },

        }]            DataPoint {

    }                time: timestamp,

                    value: self.error_count.load(Ordering::Relaxed) as f64,

    async fn get_connection_count(&self) -> Vec<DataPoint> {            },

        vec![DataPoint {        ]

            time: Utc::now().timestamp_millis(),    }

            value: self.pool.size() as f64,}

        }]```

    }

}## Troubleshooting

````

### Plugin Grafana'da Görünmüyor

## CORS Ayarları

1. Plugin binary'sinin doğru derlendiğinden emin olun: `mage build`

Rust backend'inizde CORS'u etkinleştirin:2. Grafana'nın plugin dizinini kontrol edin

3. Grafana loglarını inceleyin: `tail -f /var/log/grafana/grafana.log`

### Actix-web için:

### "Connection Refused" Hatası

````rust

use actix_cors::Cors;1. Rust backend'inizin çalıştığından emin olun

use actix_web::{web, App, HttpServer};2. Path ayarının doğru olduğunu kontrol edin

3. API Key'in geçerli olduğunu doğrulayın

#[actix_web::main]4. CORS ayarlarını kontrol edin

async fn main() -> std::io::Result<()> {

    HttpServer::new(|| {### Veri Görünmüyor

        let cors = Cors::default()

            .allow_any_origin()1. Rust API'nizin doğru formatta response döndürdüğünden emin olun

            .allow_any_method()2. Time range'in uygun olduğunu kontrol edin

            .allow_any_header()3. Browser console ve Grafana loglarını inceleyin

            .max_age(3600);

        ## CORS Ayarları

        App::new()

            .wrap(cors)Rust backend'inizde CORS'u etkinleştirin:

            .route("/api/v1/metrics", web::get().to(get_metrics))

    })### Actix-web için:

    .bind(("127.0.0.1", 8080))?

    .run()```rust

    .awaituse actix_cors::Cors;

}

```HttpServer::new(|| {

    let cors = Cors::default()

### Axum için:        .allow_any_origin()

        .allow_any_method()

```rust        .allow_any_header();

use tower_http::cors::{CorsLayer, Any};

use axum::{Router, routing::get};    App::new()

        .wrap(cors)

#[tokio::main]        .route("/api/v1/metrics", web::get().to(get_metrics))

async fn main() {})

    let app = Router::new()```

        .route("/api/v1/metrics", get(get_metrics))

        .layer(### Axum için:

            CorsLayer::new()

                .allow_origin(Any)```rust

                .allow_methods(Any)use tower_http::cors::{CorsLayer, Any};

                .allow_headers(Any)

        );let app = Router::new()

        .route("/api/v1/metrics", get(get_metrics))

    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));    .layer(

    axum::Server::bind(&addr)        CorsLayer::new()

        .serve(app.into_make_service())            .allow_origin(Any)

        .await            .allow_methods(Any)

        .unwrap();            .allow_headers(Any)

}    );

````

## Geliştirme# Plugin Dağıtımı

### Backend (Go)# Plugin Dağıtımı

```bashPlugin'i Grafana topluluğuna veya özel olarak dağıtırken imzalanması gerekir. Bu işlem `@grafana/sign-plugin` paketi ile yapılabilir.

# Bağımlılıkları güncelle

go get -u github.com/grafana/grafana-plugin-sdk-go*Not: Geliştirme sırasında plugin'i imzalamak gerekli değildir.*

go mod tidy

## İlk Adımlar

# Build

mage -vBefore signing a plugin please read the Grafana [plugin publishing and signing criteria](https://grafana.com/legal/plugins/#plugin-publishing-and-signing-criteria) documentation carefully.

# Tüm mage komutlarını listele`@grafana/create-plugin` has added the necessary commands and workflows to make signing and distributing a plugin via the grafana plugins catalog as straightforward as possible.

mage -l

Before signing a plugin for the first time please consult the Grafana [plugin signature levels](https://grafana.com/legal/plugins/#what-are-the-different-classifications-of-plugins) documentation to understand the differences between the types of signature level.

# Test

go test ./pkg/...1. Create a [Grafana Cloud account](https://grafana.com/signup).

````2. Make sure that the first part of the plugin ID matches the slug of your Grafana Cloud account.

   - _You can find the plugin ID in the `plugin.json` file inside your plugin directory. For example, if your account slug is `acmecorp`, you need to prefix the plugin ID with `acmecorp-`._

### Frontend (TypeScript/React)3. Create a Grafana Cloud API key with the `PluginPublisher` role.

4. Keep a record of this API key as it will be required for signing a plugin

```bash

# Bağımlılıkları yükle## Signing a plugin

npm install

### Using Github actions release workflow

# Development mode

npm run devIf the plugin is using the github actions supplied with `@grafana/create-plugin` signing a plugin is included out of the box. The [release workflow](./.github/workflows/release.yml) can prepare everything to make submitting your plugin to Grafana as easy as possible. Before being able to sign the plugin however a secret needs adding to the Github repository.



# Production build1. Please navigate to "settings > secrets > actions" within your repo to create secrets.

npm run build2. Click "New repository secret"

3. Name the secret "GRAFANA_API_KEY"

# Test4. Paste your Grafana Cloud API key in the Secret field

npm run test5. Click "Add secret"



# E2E test#### Push a version tag

npm run server  # Önce Grafana instance başlat

npm run e2e     # Sonra testleri çalıştırTo trigger the workflow we need to push a version tag to github. This can be achieved with the following steps:



# Lint1. Run `npm version <major|minor|patch>`

npm run lint2. Run `git push origin main --follow-tags`

npm run lint:fix

```## Learn more



### Docker ile Local TestBelow you can find source code for existing app plugins and other related documentation.



```bash- [Basic data source plugin example](https://github.com/grafana/grafana-plugin-examples/tree/master/examples/datasource-basic#readme)

# Grafana instance başlat- [`plugin.json` documentation](https://grafana.com/developers/plugin-tools/reference/plugin-json)

npm run server- [How to sign a plugin?](https://grafana.com/developers/plugin-tools/publish-a-plugin/sign-a-plugin)


# Belirli bir Grafana versiyonu ile
GRAFANA_VERSION=11.3.0 npm run server
````

## Troubleshooting

### Plugin Grafana'da Görünmüyor

1. Plugin binary'sinin doğru derlendiğinden emin olun:

   ```bash
   mage build
   ```

2. Grafana'nın plugin dizinini kontrol edin:

   ```bash
   ls -la /var/lib/grafana/plugins/
   ```

3. Grafana loglarını inceleyin:

   ```bash
   tail -f /var/log/grafana/grafana.log
   ```

4. Plugin imza ayarlarını kontrol edin (development için):
   ```ini
   # grafana.ini
   [plugins]
   allow_loading_unsigned_plugins = pehlione-monitoring-datasource
   ```

### "Connection Refused" Hatası

1. Rust backend'inizin çalıştığından emin olun:

   ```bash
   curl http://localhost:8080/api/v1/metrics
   ```

2. Path ayarının doğru olduğunu kontrol edin (tam URL girin)

3. API Key'in geçerli olduğunu doğrulayın:

   ```bash
   curl -H "Authorization: Bearer YOUR_API_KEY" \
        http://localhost:8080/api/v1/metrics
   ```

4. CORS ayarlarını kontrol edin

### Veri Görünmüyor

1. Rust API'nizin doğru formatta response döndürdüğünden emin olun
2. Time range'in uygun olduğunu kontrol edin
3. Browser console'u açın (F12) ve network trafiğini inceleyin
4. Grafana query inspector'ı kullanın (panel → Inspect → Query)

### API Key Hatası

1. ConfigEditor'de API Key'in doğru girildiğinden emin olun
2. Backend'de API key doğrulamasının çalıştığını kontrol edin
3. Grafana loglarında "API key is missing" hatası varsa, config'i tekrar kaydedin

## Plugin Dağıtımı

Plugin'i Grafana topluluğuna veya özel olarak dağıtırken imzalanması gerekir.

_Not: Geliştirme sırasında plugin'i imzalamak gerekli değildir._

### İlk Adımlar

1. [Grafana Cloud hesabı](https://grafana.com/signup) oluşturun
2. Plugin ID'nin ilk kısmının Grafana Cloud hesap slug'ınızla eşleştiğinden emin olun
3. `PluginPublisher` rolüne sahip bir Grafana Cloud API key oluşturun
4. Bu API key'i kaydedin

### Github Actions ile İmzalama

1. Github repo'nuzda "Settings > Secrets > Actions" bölümüne gidin
2. "New repository secret" tıklayın
3. Secret adını "GRAFANA_API_KEY" olarak ayarlayın
4. Grafana Cloud API key'inizi yapıştırın
5. "Add secret" tıklayın

### Version Release

```bash
# Version bump
npm version <major|minor|patch>

# Tag'i push et
git push origin main --follow-tags
```

## Kaynaklar

- [Grafana Plugin Dokümantasyonu](https://grafana.com/developers/plugin-tools)
- [Backend Plugin Geliştirme](https://grafana.com/developers/plugin-tools/key-concepts/backend-plugins)
- [Data Source Plugin Örneği](https://github.com/grafana/grafana-plugin-examples/tree/master/examples/datasource-basic)
- [`plugin.json` Dokümantasyonu](https://grafana.com/developers/plugin-tools/reference/plugin-json)
- [Plugin İmzalama](https://grafana.com/developers/plugin-tools/publish-a-plugin/sign-a-plugin)

## Lisans

Bu proje Pehlione tarafından geliştirilmiştir.

---

**Not**: Bu plugin, Rust ile yazılmış herhangi bir monitoring backend'i ile çalışabilir. Yukarıdaki örnekler Actix-web ve Axum için verilmiştir, ancak Rocket, Warp veya diğer Rust web framework'leri ile de uyumlu çalışır.
