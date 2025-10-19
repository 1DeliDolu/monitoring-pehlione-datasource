# Pehlione Monitoring Data Source Plugin

![Grafana Version](https://img.shields.io/badge/Grafana-%3E%3D10.4.0-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-in%20development-yellow)

> **⚠️ UYARI: Bu proje aktif geliştirme aşamasındadır.**  
> Plugin henüz production kullanımı için hazır değildir. API'ler değişebilir ve bazı özellikler eksik olabilir.

Rust backend monitoring verilerini Grafana'da görselleştirin.

## Genel Bakış

Pehlione Monitoring, Rust ile yazılmış backend uygulamalarınızdan gelen monitoring verilerini Grafana panellerinde görselleştirmenizi sağlayan bir data source plugin'idir.

### Özellikler

- ✅ **Rust API Entegrasyonu**: Rust backend'inizden doğrudan veri çekin
- ✅ **Güvenli Kimlik Doğrulama**: API Key tabanlı güvenli bağlantı
- ✅ **Esnek Yapılandırma**: Özelleştirilebilir endpoint desteği
- ✅ **Gerçek Zamanlı**: Canlı monitoring ve alerting
- ✅ **Zaman Serisi**: Time-based metrik görselleştirme
- ✅ **Template Variables**: Grafana değişken desteği

## Gereksinimler

- Grafana 10.4.0 veya üzeri
- Rust backend API'si (Actix-web, Axum, Rocket, vs.)
- API endpoint formatı:
  ```json
  {
    "datapoints": [{ "time": 1697712000000, "value": 42.5 }]
  }
  ```

## Kurulum

### Grafana Cloud

1. Grafana instance'ınızda **Configuration** → **Plugins** bölümüne gidin
2. "Pehlione Monitoring" araması yapın
3. **Install** butonuna tıklayın

### Self-Hosted Grafana

```bash
# Grafana plugin dizinine yükleyin
grafana-cli plugins install pehlione-monitoring-datasource

# Grafana'yı restart edin
systemctl restart grafana-server
```

## Yapılandırma

1. **Configuration** → **Data Sources** → **Add data source**
2. "Pehlione Monitoring" seçin
3. Aşağıdaki bilgileri girin:
   - **Path**: Rust API endpoint URL'i (örn: `http://localhost:8080/api/v1/metrics`)
   - **API Key**: Kimlik doğrulama için API anahtarınız
4. **Save & Test** ile bağlantıyı test edin

## Rust Backend Örneği

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

## Kullanım

1. Dashboard'a yeni panel ekleyin
2. Data source olarak "Pehlione Monitoring" seçin
3. Query editor'de metric adını girin
4. Visualization type'ı seçin (Time series, Gauge, vs.)

## Desteklenen Visualizations

- Time Series (zaman serisi grafikleri)
- Gauge (göstergeler)
- Stat (tek değer)
- Table (tablo)
- Bar Chart (çubuk grafik)
- ve diğer Grafana panel tipleri

## Troubleshooting

### Bağlantı Hatası

- Rust API'nizin çalıştığından emin olun
- CORS ayarlarını kontrol edin
- API Key'in doğru olduğunu kontrol edin

### Veri Görünmüyor

- Response formatının doğru olduğunu kontrol edin
- Time range ayarlarını kontrol edin
- Browser console'da hataları inceleyin

## Dokümantasyon

Detaylı dokümantasyon için GitHub repository'mizi ziyaret edin:
[https://github.com/1DeliDolu/monitoring-pehlione-datasource](https://github.com/1DeliDolu/monitoring-pehlione-datasource)

## Geliştirme Durumu

**⚠️ Bu proje aktif geliştirme aşamasındadır.**

### ✅ Tamamlanmış

- [x] Temel plugin yapısı
- [x] API Key authentication
- [x] Rust backend entegrasyonu
- [x] Temel data query desteği

### 🚧 Devam Eden

- [ ] Gelişmiş query özellikleri
- [ ] Çoklu metrik desteği
- [ ] Önbellekleme mekanizması
- [ ] Kapsamlı testler

### 📋 Planlanmış

- [ ] Streaming data desteği
- [ ] Alert desteği
- [ ] Dashboard şablonları
- [ ] Plugin marketplace'e yayın

## Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen GitHub'da issue açın veya pull request gönderin.

**Not**: Production kullanımı için plugin henüz hazır değildir. Geliştirme ve test amaçlı kullanabilirsiniz.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## Destek

- GitHub Issues: [https://github.com/1DeliDolu/monitoring-pehlione-datasource/issues](https://github.com/1DeliDolu/monitoring-pehlione-datasource/issues)
- Email: support@pehlione.com

---

**Geliştirme Aşaması Uyarısı**: Bu plugin aktif geliştirme aşamasındadır. Production ortamında kullanmadan önce kapsamlı testler yapmanız önerilir.
