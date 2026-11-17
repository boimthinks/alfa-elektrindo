# PRIORITAS-OPTIMASI-KATALOG.md — Rencana Pengoptimalan Trafik & Penjualan

Dokumen ini adalah **panduan kerja prioritas utama** di Alfa Elektrindo untuk mengoptimalkan trafik mesin pencari (Google SEO/GEO) dan konversi penjualan B2B terhadap brand serta series/part number kunci.

> **Catatan Pengerjaan**: Dokumen ini dikerjakan dan dilengkapi **secara bertahap**, bukan sekaligus. Setiap kali ada penambahan data katalog baru atau artikel pilar yang terbit, update status pada tabel di bawah ini.

---

## 1. Latar Belakang & Masalah
- **Kebutuhan**: Mengoptimalkan penjualan komponen spesifik untuk brand manufaktur industri terkemuka.
- **Karakteristik Pencarian Industri (B2B)**: 70% konversi berasal dari pencarian exact part number (`/part/[slug]`), 20% dari brand/kategori (`/ma/[slug]`, `/ca/[slug]`), dan 10% dari artikel edukasi teknis / troubleshooting (`/blog/[slug]`).
- **Strategi Utama**:
  1. **Lengkapi Database Katalog**: Part number yang dicari pembeli wajib ada di `src/content/parts/` agar memiliki URL transaksional dan schema `Product`.
  2. **Topic Cluster / Artikel Pilar**: Menulis artikel teknis non-komoditas per brand cluster untuk menangkap teknisi/purchasing yang mencari solusi kegagalan komponen, lalu mengarahkan link ke halaman part terkait.
  3. **Internal Linking**: Memanfaatkan autolink ke arsip brand dan rekomendasi produk terkait.

---

## 2. Matriks Audit Brand & Series Target

Total katalog awal saat audit: **548 part**. Kondisi akhir **2026-11-17**: **616 part**, **78 artikel blog**, **74 kategori**, **74 brand** (setelah konsolidasi taksonomi kategori & manufacturer, batch MTL, Fuji Electric, dan KP Thyristor).

| No | Brand | Target Series / Prefix | Status di Website | Part yang Tersedia Saat Ini | Rencana Aksi Bertahap |
|:---|:---|:---|:---|:---|:---|
| 1 | **Semikron** | `SKN` (Stud Diode Anoda) | **Ada (3)** | `SKN 100/16`, `SKN 240-16`, `SKN 71/12 UNF` | Artikel pilar Klaster 2 terbit (`perbedaan-stud-diode-semikron-skn-dan-skr-pada-heatsink`) |
| | | `SKR` (Stud Diode Katoda) | **Ada (3)** | `SKR 100/16`, `SKR 26/16`, `SKR 71/16` | Artikel pilar Klaster 2 terbit (`perbedaan-stud-diode-semikron-skn-dan-skr-pada-heatsink`) |
| | | `SKM` (IGBT Module) | **Ada (6)** | `SKM195GB066D`, `SKM200GB125D`, `SKM400GAL12E4`, `SKM400GB066D`, `SKM400GB125D`, `SKM75GB12T4` | Tambah varian dual/single pack |
| | | `SKKT` (Thyristor Module) | **Ada (5)** | `SKKT 132/16 E`, `SKKT 57/16 E`, `SKKT 106/16 E`, `SKKT 162/16 E`, `SKKT 250/16 E` | Lengkap varian SEMIPACK 1, 2, 3 |
| | | `SKKH` (Thyristor/Diode) | **Ada (4)** | `SKKH 107/16 E`, `SKKH 72/16 E`, `SKKH 162/16 E`, `SKKH 250/16 E` | Lengkap varian SEMIPACK 1, 2, 3 |
| | | `SKKD` (Diode Module) | **Ada (3)** | `SKKD 46/16`, `SKKD 100/16`, `SKKD 162/16` | Lengkap varian SEMIPACK 1 & 2 |
| | | `SKIIP` (IPM / Intelligent) | **Ada (1)** | `SKiiP 37AC12T4V1` | Input varian MiniSKiiP / SKiiP |
| | | `SKKE` (Diode Module) | **Ada (4)** | `SKKE 81/16`, `SKKE 162/16`, `SKKE 380/16`, `SKKE 600/16` | Selesai di-input (SEMIPACK 1, 2, 3, 4) |
| | | `SKVC` (Varistor Module) | **Ada (1)** | `SKVC 20A-460` | Selesai di-input (Modul proteksi MOV) |
| | | `SKKQ` (Thyristor Module) | **Ada (2)** | `SKKQ 430/14 E`, `SKKQ 560/14 E` | Selesai di-input (SEMIPACK 5 arus besar) |
| 2 | **IXYS** | `MCC` (Thyristor Module) | **Ada (8)** | `MCC 26`, `MCC 44 (16 & 18)`, `MCC 95`, `MCC 162`, `MCC 255`, `MCC 310`, `MCC 501` | Lengkap varian 26A s.d. 500A |
| | | `MDD` (Diode Module) | **Ada (5)** | `MDD 26`, `MDD 44`, `MDD 95`, `MDD 162`, `MDD 312` | Lengkap varian 26A s.d. 310A |
| | | `DSEI` (Fast Recovery) | **Ada (4)** | `DSEI2X31-06C`, `DSEI2X61-12B`, `DSEI2X101-06A`, `DSEI2X101-12A` | Lengkap varian FRED miniBLOC |
| | | `MCD` (Thyristor/Diode) | **Ada (5)** | `MCD 26-16IO1B`, `MCD 44-16IO1B`, `MCD 95-16IO1B`, `MCD 162-16IO1B`, `MCD 312-16IO1` | Selesai di-input (27A s.d. 320A) |
| | | `VVZ` (Bridge Rectifier) | **Ada (3)** | `VVZ 40-16IO1`, `VVZ 70-16IO7`, `VVZ 110-16IO7` | Selesai di-input (3-phase half-controlled) |
| 3 | **Infineon** | `FF` (Dual IGBT Module) | **Ada (15)** | `FF150R12KS4`, `FF200R12KT4`, `FF300R12KT4`, `FF450R12KE4`, dll. | Artikel pilar terbit |
| | | `FP` (Dual IGBT Module) | **Ada (9)** | `FP25R12W2T4`, `FP40R12KE3`, `FP50R12KT4`, `FP75R12KT4-B15`, dll. | Tambah varian FP |
| | | `TT` (Thyristor Module) | **Ada (4)** | `TT120N16SOF`, `TT142N16KOF`, `TT285N16KOF`, `TT500N16KOF` | Tambah varian TT |
| | | `FS` (Sixpack IGBT) | **Ada (5)** | `FS150R17KE3FG-S1`, `FS225R12KE3`, `FS300R12KE3`, `FS450R12KE3-S1`, `FS30R06XE3` | Artikel pilar terbit |
| | | `DDB` (Diode Bridge) | **Ada (5)** | `DDB6U84N16RR`, `DDB6U104N16RR`, `DDB6U134N16RR`, `DDB6U145N16L`, `DDB6U205N16L` | Batch 1 selesai di-input (EconoBRIDGE™ + IsoPACK™); lanjut varian `DDB6U50N16W1R`, `DDB6U75N16W1R`, `DDB6U30N08VR` |
| 4 | **SanRex** | `PK` (Thyristor Module) | **Ada (1)** | `PK55FG120` | Input varian PK90, PK110, PK160 |
| | | `DF` (Diode Module) | **Ada (3)** | `DF50AA160`, `DF100AA160`, `DF150AA160` | Selesai di-input |
| | | `PWB` (Thyristor Bridge) | **Ada (1)** | `PWB130A40` | Selesai di-input |
| 5 | **Thyristor** | `KP` (Disc / Hockey Puk) | **Ada (5)** | `KP300-16`, `KP500-16`, `KP800-16`, `KP1000-16`, `KP1500-16` | Batch 1 selesai di-input (capsule/press-pack 300 A s.d. 1500 A, VRRM 1600 V). Lanjut kode tegangan tinggi (KP500A kelas 2500-6500 V) dan varian `KK` fast switching |
| 6 | **LEM** | `LF` (Current Transducer) | **Ada (7)** | `LF 205-S`, `LF 305-S`, `LF 505-S`, `LF 1005-S`, `LF 2005-S`, `LF 310-S`, `LF 510-S` | Batch 1 selesai di-input (200A - 2000A) |
| 7 | **Telemecanique** | `XS` (Inductive Sensor) | **Ada (10)** | `XS1N18PA349D`, `XS618B1MAL2`, `XS7C1A1PBM8`, `XS8E1A1PAL01M12`, dll. | Artikel pilar troubleshooting terbit (`troubleshooting-sensor-proximity-telemecanique-osisense-xs`) |
| 8 | **MTL** | `TP` (Field Transmitter SPD) | **Ada (1)** | `MTL TP48` | Batch 1 selesai di-input (field-mounted SPD 2/3/4 kawat, 20 kA) |
| | | `SD` (Signal & I/O SPD) | **Ada (4)** | `MTL SD07`, `MTL SD16`, `MTL SD32`, `MTL SD55` | Batch 1 selesai di-input (rail DIN, 7 mm, 20 kA). Lanjut varian `SD32X`, `SD55X`, `SD32T3`, `SDRTD` |
| 9 | **Starpower** | `GD` (IGBT Module) | **Ada (8)** | `GD100PIY120C6SN`, `GD300HFY120C6S`, `GD600HFY120C2S`, dll. | Optimasi konten substitusi ekonomis IGBT |
| 10 | **Fuji Electric** | `6MBP` (IPM Module) | **Ada (7)** | `6MBP15RH060`, `6MBP20RH060`, `6MBP30RH060`, `6MBP50RA060`, `6MBP75RA060`, `6MBP100RA060`, `6MBP20RH-060` | Batch 1 selesai di-input (seri RH 15/20/30 A paket P617 + seri RA 50/75/100 A paket P610/P611). **Artikel pilar `panduan-memilih-modul-igbt-fuji-electric-6mbp-rh-vs-ra` terbit (perbandingan RH vs RA, link ke 10 part Fuji).** Lanjut varian `6MBP50RTA060`, `6MBP50RTB060`, `7MBP50RA060`, `7MBP100RA060` |
| | | `6DI` / `2MBI` (IGBT Module) | **Ada (3)** | `6DI50A-050`, `6DI75A-050`, `2MBI150VA-060-50` | Optimasi konten |
| | | `A50L` (Spare IGBT Module) | **Ada (3)** | `A50L-0001-0175`, `A50L-0001-0175/M`, `A50L-0001-0338` | Selesai di-input |
| 11 | **Bussmann** | `170M` (High Speed Fuse) | **Ada (13)** | `170M6462`, `170M6148`, `170M4467`, `170M3813D`, `170M5015`, dll. | Artikel pilar Klaster 1 terbit. Brand `Bussmann` (6 part) sudah digabung ke `Eaton Bussmann` (total 37 part) |
| 12 | **Mitsubishi** | `CM` (Dual/Sixpack IGBT) | **Ada (8)** | `CM1000DX-24T`, `CM100DU-12F`, `CM300DY-24T`, `CM400DY-24NF`, `CM600DU-24NF`, dll. | Artikel pilar terbit |
| | | `PM` (IPM Intellimod) | **Ada (5)** | `PM100CG1B120`, `PM100RSA060`, `PM200CG1C065`, `PM75CG1B120` | Artikel pilar terbit |
| 13 | **Ferraz** | `PC` (Protistor Fuse) | **Ada (3)** | `PC33UD69V450TF`, `PC33UD69V500TF`, `PCMXP02-11AC` | Artikel pilar Klaster 1 terbit; input varian PC30, PC32 |

---

## 2A. Standar Taksonomi Kategori & Brand (WAJIB DIPATUHI)

Sejak **2026-11-11** kategori dan brand dikonsolidasi agar setiap halaman arsip `/ca/[slug]` dan `/ma/[slug]` cukup berbobot. **Saat menambah part baru, gunakan HANYA nama kanonik di bawah ini.** Jangan membuat nama varian baru (mis. "Diode Modul", "Cartridge Fuses", "Soft Starter" tanpa "s").

### Kategori kanonik (yang dipakai berulang)

| Kelompok | Nama kanonik | Cakupan |
| :--- | :--- | :--- |
| Semikonduktor daya | `IGBT Modules` | Modul IGBT, IPM, sixpack, chopper, brake, PIM |
| | `IGBT Transistors` | IGBT diskrit (TO-247/TO-220 dsb.) |
| | `Thyristor Modules` | Modul thyristor & thyristor/diode (SKKT, SKKH, SKKQ, MCC, MCD, MCMA, TT, PWB) |
| | `Thyristors` | Thyristor/SCR bentuk stud, disc, dan diskrit (SKN/SKR, SKT, T-series, QJ/QV, TZ) |
| | `Diodes` | Dioda modul maupun stud/disc/diskrit (MDD, DD, SKKD, SKKE, DSEI, DLA, VS-, SS14) |
| | `Bridge Rectifiers` | Penyearah jembatan (DDB6U, VVZ, DF, SKB, 160MT) |
| Proteksi | `Fuses` | Semua sekring: high speed, cartridge, blade, NH, Protistor, semiconductor |
| | `Fuse Holders` | Dudukan sekring, fuse base, microswitch |
| Sensor & instrumentasi | `Sensors` | Sensor umum, kapasitif, magnetostriktif, flow, getaran |
| | `Proximity Sensors` / `Photoelectric Sensors` / `Distance Sensors` | Tetap dipisah karena niat pencarian berbeda |
| | `Temperature Sensors` | Sensor suhu (LM34, MLX90614) |
| | `Pressure Sensors` / `Pressure Switches` | Sensor dan saklar tekanan |
| | `Transducers` | Transduser arus/tegangan (LEM LF, Carlo Gavazzi) |
| | `Surge Protection Devices` | SPD jalur sinyal & instrumen (MTL TP48, SD07/SD16/SD32/SD55) |
| Otomasi | `PLC`, `Drives`, `Soft Starters`, `Contactors`, `Limit Switches`, `Solid State Relays`, `Industrial Relays`, `Servo Motor`, `Servo Module` | — |

### Brand kanonik

- `Eaton Bussmann` (bukan `Bussmann`) — arsip `/ma/eaton-bussmann/`.
- `Semikron` (bukan `Semikron Danfoss`).
- `Epcos` (bukan `EPCOS`, `EPCOS TDK`).
- `Wago` (bukan `WAGO Corporation`).
- `Starpower` (bukan `STARPOWER`).
- `Ferraz Shawmut` (brand Protistor) dan `Mersen` (NH/gG) tetap dipisah karena lini produk berbeda.
- `Thyristor` — penanda generik untuk thyristor KP tipe kapsul/press-pack yang dijual tanpa pabrikan tunggal. Arsipnya `/ma/thyristor/`. Kata generik `thyristor` sengaja dimasukkan ke `skipList` autolink agar tidak menaut otomatis ke arsip brand ini di dalam artikel.

### Redirect URL lama

Konsolidasi ini mengubah slug arsip. Semua URL lama dialihkan **301** melalui `public/.htaccess` (ikut terpasang saat deploy). Jangan menghapus blok redirect tersebut tanpa menggantinya, karena URL itu sudah terindeks Google.

---

## 3. Alur Kerja Eksekusi Bertahap

### Tahap A: Melengkapi Part Number di Katalog (File `.md`)
Untuk setiap part number yang akan ditambahkan, buat file di `src/content/parts/<slug>.md` dengan format frontmatter:
```yaml
---
title: |-
  PART_NUMBER_EXACT
slug: |-
  slug-part-number
category: |-
  Kategori Kanonik (lihat bagian 2A: misal IGBT Modules / Fuses / Thyristor Modules / Diodes / Proximity Sensors / Transducers)
manufacturer: |-
  Nama Brand Kanonik (lihat bagian 2A: misal Semikron / IXYS / Infineon / LEM / MTL / Eaton Bussmann)
fifu_image_url: |-
  URL_GAMBAR (atau gunakan gambar placeholder jika belum ada)
pendahuluan: |-
  Deskripsi ringkas 1 paragraf tentang tipe komponen, voltase, arus, dan fungsi utamanya.
spesifikasi: |-
  <table>
  <thead><tr><th>Spesifikasi</th><th>Nilai</th></tr></thead>
  <tbody>
  <tr><td>Tegangan Nominal (VRRM/VCES)</td><td>... V</td></tr>
  <tr><td>Arus Nominal (ITAV/IC)</td><td>... A</td></tr>
  <tr><td>Tipe Paket / Case</td><td>...</td></tr>
  </tbody>
  </table>
penjelasan_spesifikasi: |-
  <p>Penjelasan keunggulan teknis, ketahanan panas, dan karakteristik switching/proteksi.</p>
aplikasi_dalam_industri: |-
  <p>Penerapan pada sistem industri (inverter, UPS, las industri, solar inverter, panel kontrol motor).</p>
penutup: |-
  <p>Ketersediaan dan layanan pemesanan melalui Alfa Elektrindo Batam dengan pengiriman ke seluruh Indonesia.</p>
published: true
---
```

### Tahap B: Penulisan Artikel Blog Pilar (Klaster Topik)
Gunakan skill `pakar-entity-seo` untuk riset semantik, lalu `penulis-ahli` untuk menulis artikel non-komoditas:
1. **Cluster 1**: *High Speed Fuse Inverter & Drive* (Bussmann 170M series & Ferraz Protistor PC series).
2. **Cluster 2**: *Panduan Seleksi & Fault Finding Modul Thyristor / Dioda Industri* (Semikron SKKT/SKKH/SKN/SKR vs IXYS MCC/MDD).
3. **Cluster 3**: *Strategi Penggantian & Pencegahan Kerusakan Modul IGBT Pabrik* (Infineon FF/FS series & Mitsubishi CM/PM series).
4. **Cluster 4**: *Transduser Arus & Proteksi Sinyal Instrumentasi* (LEM LF series & MTL Surge Protector TP/SD).

### Tahap C: Sinkronisasi & Verifikasi
Setelah menambah part atau artikel baru:
1. Jalankan `node scripts/gen-content-index.js` (untuk auto-generate indeks & terms autolink).
2. Jalankan `npm run build` untuk memverifikasi tidak ada error sintaks/schema.
3. Update log progres pada dokumen ini.

---

## 4. Log Progres Kerja

- **[2026-10-22]**: Dokumen perencanaan dibuat. Audit 548 part selesai dipetakan ke 13 brand target.
- **[2026-10-22]**: Batch 1 untuk brand **LEM (LF Series)** selesai di-input sebanyak 7 part number (`LF 205-S`, `LF 305-S`, `LF 505-S`, `LF 1005-S`, `LF 2005-S`, `LF 310-S`, `LF 510-S`). Brand LEM sekarang otomatis aktif di halaman `/ma/lem/` dan katalog terindeks.
- **[2026-10-22]**: Integrasi gambar lokal LEM LF series: 7 aset `.webp` di `public/img/` dihubungkan ke file part. File `src/pages/part/[slug].astro` dioptimasi untuk menghasilkan URL gambar absolut pada schema JSON-LD `Product`.
- **[2026-10-22]**: Batch 2 untuk brand **Semikron** selesai di-input sebanyak 15 part number baru:
  - Seri `SKKE` (Diode Module SEMIPACK 1–4): `SKKE 81/16`, `SKKE 162/16`, `SKKE 380/16`, `SKKE 600/16`
  - Seri `SKKT` (Dual Thyristor SEMIPACK 1–3): `SKKT 57/16 E`, `SKKT 106/16 E`, `SKKT 162/16 E`, `SKKT 250/16 E`
  - Seri `SKKH` (Thyristor/Diode SEMIPACK 2–3): `SKKH 162/16 E`, `SKKH 250/16 E`
  - Seri `SKKD` (Dual Diode SEMIPACK 1–2): `SKKD 100/16`, `SKKD 162/16`
  - Seri `SKKQ` (Thyristor SEMIPACK 5 Arus Besar): `SKKQ 430/14 E`, `SKKQ 560/14 E`
  - Seri `SKVC` (Varistor Module): `SKVC 20A-460`
  - Total part Semikron di katalog melonjak dari **17 part** menjadi **32 part**.
  - Integrasi gambar lokal Semikron: 15 aset gambar (`.webp` dan `.png`) di `public/img/` telah terhubung ke masing-masing part.
  - `CONTENT_INDEX.md` dan `autolink-terms.ts` disinkronkan, static build 860 halaman lulus verifikasi.
- **[2026-10-22]**: Produksi 2 artikel blog pilar teknis pendukung (via `pakar-entity-seo` dan `penulis-ahli`):
  1. `sensor-arus-closed-loop-lem-lf-series-proteksi-inverter` — Mengangkat teknologi transduser LEM LF Series (`LF 205-S` s.d. `LF 2005-S`), kompensasi fluks nol, dan proteksi modul IGBT inverter.
  2. `panduan-modul-semikron-semipack-skkt-skkh-skkd-skke` — Membedah arsitektur internal modul Semikron SEMIPACK (`SKKT`, `SKKH`, `SKKD`, `SKKE`, `SKKQ`) serta modul proteksi varistor `SKVC 20A-460`.
  - Indeks diperbarui (`CONTENT_INDEX.md` kini mencatat 67 artikel), autolink term disinkronkan, dan build sukses untuk total 862 halaman.
- **[2026-10-22]**: Pembaruan gambar lokal untuk part number thyristor disc Infineon `T880N14TOF` (`/part/t880n14tof/`) menggunakan aset `public/img/t880n14tof.png`. Schema JSON-LD `Product` otomatis merender URL gambar absolut.
- **[2026-10-23]**: Optimasi gambar brand **IXYS**:
  - Ditemukan seluruh part lama IXYS menggunakan URL Blogger yang mengalami HTTP 404.
  - Dihubungkan 17 gambar lokal `.webp` di `public/img/` ke file part IXYS terkait (`MCC`, `MCMA`, `MCO`, `MDD`, `MDNA`, `MEO`, `VGO`, `DSEI`, `DLA`, `IXFK`).
  - Pembuatan aset fallback `/public/placeholder-product.png` (icon sirkuit Alfa Elektrindo). Part `f0900vc450`, `ixgn400n60a3`, dan `ixxn110n65b4h1` diarahkan ke placeholder sembari menunggu foto spesifik. Halaman `/ma/ixys/` kini 100% bebas dari broken image.
- **[2026-10-23]**: Input 17 part number baru brand **IXYS** untuk 5 series kunci:
  - Seri `MCD` (Thyristor/Diode Modules): `MCD 26-16IO1B`, `MCD 44-16IO1B`, `MCD 95-16IO1B`, `MCD 162-16IO1B`, `MCD 312-16IO1`
  - Seri `MDD` (Dual Diode Modules): `MDD 95-16N1B`, `MDD 162-16N1B`, `MDD 312-16N1`
  - Seri `MCC` (Dual Thyristor Modules): `MCC 95-16IO1B`, `MCC 162-16IO1B`, `MCC 255-16IO1`
  - Seri `DSEI` (Fast Recovery Epitaxial Diode FRED): `DSEI2X31-06C`, `DSEI2X101-06A`, `DSEI2X101-12A`
  - Seri `VVZ` (Three-Phase Half-Controlled Bridge Rectifier): `VVZ 40-16IO1`, `VVZ 70-16IO7`, `VVZ 110-16IO7`
  - Total part IXYS di katalog meningkat dari **20 part** menjadi **37 part**.
  - `CONTENT_INDEX.md` dan `autolink-terms.ts` disinkronkan, build statis 879 halaman sukses.
- **[2026-10-23]**: Produksi artikel blog pilar teknis pendukung brand IXYS (via `pakar-entity-seo` dan `penulis-ahli`):
  - Judul: `panduan-modul-daya-ixys-mcc-mcd-mdd-penyearah-vvz` (*Panduan Modul Daya IXYS MCC MCD MDD dan Penyearah VVZ*).
  - Mengupas arsitektur Direct Copper Bonding (DCB), pembedaan fungsional seri `MCC`, `MCD`, `MDD`, dan penyearah terintegrasi 3 fasa `VVZ`, komplementer FRED `DSEI` untuk proteksi freewheeling IGBT, koordinasi sekring semikonduktor berkecepatan tinggi berbasis batas $I^2t$, serta panduan troubleshooting multimeter di lapangan.
  - Gambar cover di-generate ke `public/img/panduan-modul-daya-ixys-mcc-mcd-mdd-penyearah-vvz_poco.webp`.
  - Indeks artikel terbit diperbarui (`CONTENT_INDEX.md` mencatat 68 artikel), build statis sukses merender 880 halaman.
- **[2026-10-24]**: Produksi artikel blog pilar teknis Klaster 3 (Modul IGBT Inverter & Drive) untuk brand **Infineon** dan **Mitsubishi Electric** (via `pakar-entity-seo` dan `penulis-ahli`):
  - Judul: `penyebab-modul-igbt-inverter-meledak-dan-solusi-penggantian` (*Penyebab Modul IGBT Inverter Meledak dan Solusi Penggantian*).
  - Mengulas tuntas 5 akar penyebab peledakan modul IGBT di industri: lonjakan arus desaturasi hubung singkat, tegangan transien induktansi parasitik busbar ($L_{\sigma} \cdot di/dt$), fenomena shoot-through lengan fasa, kegagalan gate driver optocoupler & ketiadaan bias negatif off-state, serta keruntuhan termal degradasi pasta pendingin.
  - Memetakan karakteristik modul: Infineon dual half-bridge (`FF200R12KT4`, `FF300R12KT4`, `FF450R12KE4`), sixpack 3 fasa (`FS225R12KE3`, `FS300R12KE3`), serta modul Mitsubishi Electric (`CM300DY-24T`, `CM400DY-24NF`, `CM1000DX-24T`, dan Intelligent Power Module `PM75CG1B120`, `PM100CG1B120`, `PM200CG1C065`).
  - Menyajikan SOP lapangan: pelepasan muatan DC bus, pembersihan & batas ketebalan thermal paste 50–100 µm, uji pasif/aktif gate driver, megger test belitan motor > 5 MΩ, dan pengujian tegangan bertahap dengan beban pembatas seri.
  - Gambar cover disiapkan di `public/img/penyebab-modul-igbt-inverter-meledak-dan-solusi-penggantian_poco.webp`.
  - `CONTENT_INDEX.md` disinkronkan (kini mencatat 69 artikel), autolink model diregenerasi, dan build statis SSG 881 halaman lulus verifikasi tanpa error.
- **[2026-10-26]**: Produksi artikel blog pilar teknis Klaster 1 (High Speed Fuse Semikonduktor Inverter & Drive) untuk brand **Eaton Bussmann** dan **Ferraz Shawmut / Mersen** (via `pakar-entity-seo` dan `penulis-ahli`):
  - Judul: `panduan-fuse-high-speed-bussmann-170m-ferraz-shawmut` (*Panduan Fuse High Speed Bussmann 170M dan Ferraz Shawmut*).
  - Membedah urgensi proteksi sub-milidetik untuk semikonduktor daya dan mengapa pemutus mekanis MCB (10-30 ms) maupun sekring gG/NH lambat gagal melindungi silikon IGBT/SCR yang hanya memiliki batas tahan hubung singkat $t_{sc} \le 10\,\mu\text{s}$.
  - Menguraikan standar IEC 60269-4 kelas aR, struktur square body pita perak bertakik murni, pemadaman busur oleh pasir silika kuarsa endotermik menjadi kaca fulgurit, parameter integral Joule ($I^2t$ lebur vs $I^2t$ clearing total sekring $< I^2t$ semikonduktor), serta batasan tegangan busur puncak $U_L$.
  - Mengaitkan part number katalog riil: Bussmann 170M (`170M6462`, `170M6148`, `170M4467`, `170M3813D`, `170M5015`) dan Ferraz Shawmut Protistor (`PC33UD69V500TF`, `PC33UD69V450TF`, kontak microswitch `PCMXP02-11AC`).
  - Mengulas akar penyebab sekring putus berulang (kelelahan beban denyut siklik, hotspot baut kendor, harmonik DC link), SOP penggantian aman dengan kunci torsi, dan checklist verifikasi purchasing.
  - Gambar cover dihubungkan ke `public/img/panduan-fuse-high-speed-bussmann-170m-ferraz-shawmut_poco.webp`.
  - `CONTENT_INDEX.md` disinkronkan (kini mencatat 70 artikel), autolink model diregenerasi, dan build statis SSG 882 halaman lulus verifikasi tanpa error.
- **[2026-11-02]**: Produksi artikel blog pilar teknis brand **Telemecanique Sensors** (via `pakar-entity-seo` dan `penulis-ahli`):
  - Judul: `troubleshooting-sensor-proximity-telemecanique-osisense-xs` (*Troubleshooting Sensor Proximity Telemecanique OsiSense XS*).
  - Mengupas tuntas akar pemicu sinyal semu (false triggering) dan kegagalan deteksi sensor induktif industri: pelanggaran zona bebas logam (metal-free zone) bodi flush vs non-flush ($3 \times Sn$), aturan spasi antar sensor ($2 \times D$) pencegah interferensi frekuensi osilator (crosstalk), kontaminasi kerak gram besi dan coolant pada kubah aktif PBT/PPS, induksi tegangan transien $dV/dt$ dari kabel motor inverter (VFD), penanganan arus bocor off-state sensor 2-kawat (`XS618B1MAL2`) ke kartu masukan digital PLC berimpedansi tinggi via resistor bleeder paralel, serta formula kalkulasi jarak deteksi efektif ($Sr$) terhadap faktor reduksi material logam target ($Km$).
  - Memetakan seri katalog part nyata: `XS618B1MAL2`, `XS1N18PA349D`, format balok rectangular `XS7C1A1PBM8` dan `XS8E1A1PAL01M12`, serta sensor pemantau putaran poros `XSAV11801`.
  - `CONTENT_INDEX.md` disinkronkan (kini mencatat 74 artikel), autolink model diregenerasi, dan build statis 899 halaman sukses diverifikasi.
- **[2026-11-05]**: Produksi artikel blog pilar teknis Klaster 2 (Stud Diode Rectifier Industri) untuk brand **Semikron** (via `pakar-entity-seo` dan `penulis-ahli`):
  - Judul: `perbedaan-stud-diode-semikron-skn-dan-skr-pada-heatsink` (*Perbedaan Stud Diode Semikron SKN dan SKR pada Heatsink*).
  - Mengupas tuntas perbedaan polaritas stud diode bodi ulir tembaga: seri `SKN` (Normal Polarity: baut anoda, kabel fleksibel atas katoda) versus seri `SKR` (Reverse Polarity: baut katoda, kabel fleksibel atas anoda), serta risiko fatal hubung singkat fasa ke fasa jika tertukar pada pelat heatsink pendingin bersama.
  - Memetakan spesifikasi part number katalog riil: `SKN 100/16`, `SKN 240-16`, `SKN 71/12 UNF`, `SKR 100/16`, `SKR 26/16`, `SKR 71/16`, dan proteksi varistor surja tegangan `SKVC 20A-460`.
  - Menyajikan panduan uji multimeter digital lapangan (forward bias 0,4–0,7 V vs reverse open loop), batas toleransi torsi mekanis pengencangan kunci torsi M8 (4 Nm), M12 / UNF (12 Nm), M16 (30 Nm), bahaya keretakan wafer silikon akibat over-torque, bahaya thermal runaway akibat under-torque, aplikasi pasta termal 50 µm, dan koordinasi batas integral lebur $I^2t$ sekring semikonduktor.
  - Gambar cover dihubungkan ke `public/img/perbedaan-stud-diode-semikron-skn-dan-skr-pada-heatsink_poco.webp`.
  - `CONTENT_INDEX.md` disinkronkan (kini mencatat 75 artikel), autolink terms diregenerasi, dan build statis SSG diverifikasi.
- **[2026-11-09]**: Input 5 part number baru brand **Infineon** untuk series rectifier bridge 3 fasa `DDB6U`:
  - `DDB6U84N16RR` (1600 V / 85 A, EconoBRIDGE™ 2 terintegrasi Chopper IGBT 1200 V & sensor NTC)
  - `DDB6U104N16RR` (1600 V / 105 A, EconoBRIDGE™ 2 terintegrasi Chopper IGBT 1200 V & sensor NTC)
  - `DDB6U134N16RR` (1600 V / 134 A, EconoBRIDGE™ 2 terintegrasi Chopper IGBT 1200 V & sensor NTC)
  - `DDB6U145N16L` (1600 V / 145 A, IsoPACK™ screw terminals, lonjakan arus 1200 A)
  - `DDB6U205N16L` (1600 V / 205 A, AG-ISOPACK-1 screw terminals M5, lonjakan arus 1500 A)
  - Total part Infineon di katalog naik menjadi **62 part**. Kategori `Bridge Rectifiers` kini mencatat **14 part**.
  - `CONTENT_INDEX.md` disinkronkan, autolink terms diregenerasi, dan build statis SSG 905 halaman sukses diverifikasi tanpa error.
- **[2026-11-09]**: Produksi artikel blog pilar pendukung brand **Infineon** untuk Klaster 3 (Modul IGBT & Front-End Inverter) via `pakar-entity-seo` dan `penulis-ahli`:
  - Judul: `fungsi-brake-chopper-modul-rectifier-infineon-ddb6u` (*Fungsi Brake Chopper Modul Rectifier Infineon DDB6U*).
  - Menjelaskan arsitektur terpadu EconoBRIDGE: enam dioda penyearah 1600 V, IGBT brake chopper 1200 V dengan fast recovery diode, dan NTC thermistor 5 kΩ pada satu substrat keramik Al2O3 berisolasi 2,5 kV.
  - Mengupas mekanisme regenerasi motor induksi inersia tinggi yang memicu tegangan DC bus melonjak dari 540 V menembus 800 V, serta peran pensaklaran PWM chopper dalam membuang energi ke braking resistor eksternal.
  - Menyajikan tabel komparasi lima part katalog (`DDB6U84N16RR`, `DDB6U104N16RR`, `DDB6U134N16RR`, `DDB6U145N16L`, `DDB6U205N16L`) mencakup arus output DC, VRRM, tipe casing, keberadaan chopper, dan batas IFSM.
  - Memuat SOP uji multimeter mode dioda untuk enam junction penyearah (drop 0,400 hingga 0,550 V) dan jalur kolektor-emiter chopper, verifikasi NTC 5 kΩ pada 25 °C, aplikasi pasta termal 50 hingga 100 µm, serta batas torsi EconoBRIDGE 2 (3,0 hingga 4,0 Nm) dan IsoPACK M5 (4,0 hingga 5,0 Nm).
  - `CONTENT_INDEX.md` disinkronkan (kini mencatat 76 artikel), autolink terms diregenerasi, build statis SSG 906 halaman diverifikasi, dan seluruh tautan internal part serta arsip brand/kategori terverifikasi aktif di HTML hasil build.
- **[2026-11-11]**: Konsolidasi taksonomi kategori & brand (Tahap A pendukung SEO arsip) — memperkuat halaman `/ca/[slug]` dan `/ma/[slug]` yang sebelumnya terpecah menjadi arsip tipis:
  - **Kategori**: 88 menjadi 74. Penggabungan utama: `Diode Modul` + `Diode` + `Rectifiers` menjadi `Diodes` (44 part); `Fuse` + `Cartridge Fuses` + `Blade Fuse` + `Specialty Fuses` + `High Speed Fuse` + `Semiconductor Fuse` + `Fuse Link Protistor` menjadi `Fuses` (64 part); `SCR Modules` + `SCRs` menjadi `Thyristors`; `IGBT` + `Transistors Module` menjadi `IGBT Modules` (91 part); `Sensor` + `Sensor Modules` menjadi `Sensors`; `Sensor Suhu` menjadi `Temperature Sensors`; normalisasi bentuk jamak (`Solid State Relays`, `Pressure Switches`, `Soft Starters`, `Distance Sensors`, `Industrial Relays`, `Limit Switches`, `Fuse Holders`).
  - **Reklasifikasi 18 part modul thyristor** yang sebelumnya nyasar di kategori `Thyristors`/`SCR Modules` (SKKT 5, SKKH 4, SKKQ 2, TT 4, MCC501-16I02, MCMA 65P 1600TA, MDNA380P2200KC) ke `Thyristor Modules`, sehingga arsip modul thyristor kini **37 part** dan `Thyristors` (disc/stud/SCR) **19 part**.
  - **Brand**: 77 menjadi 72. `Bussmann` (6 part) digabung ke `Eaton Bussmann` (**37 part**, brand target Klaster 1 kini satu arsip utuh); `Semikron Danfoss` menjadi `Semikron` (38 part); `STARPOWER` menjadi `Starpower`; `EPCOS TDK` menjadi `Epcos`; `WAGO Corporation` menjadi `Wago`.
  - Dibuat `public/.htaccess` berisi **28 aturan redirect 301** untuk seluruh slug arsip lama yang berubah, agar tidak menghasilkan 404 dan peringkat tidak hilang. Blok ini ikut terunggah saat deploy cPanel (dotfile disertakan `os.walk`).
  - Standar taksonomi kanonik didokumentasikan di bagian **2A** dokumen ini agar batch part berikutnya tidak lagi membuat nama kategori varian baru.
  - `CONTENT_INDEX.md` (74 kategori, 72 brand, 76 artikel), `autolink-terms.ts`, dan `llms-full.txt` diregenerasi; build statis SSG 888 halaman sukses diverifikasi tanpa error.
- **[2026-11-11]**: Input 5 part number baru brand **MTL** (brand target #8, sebelumnya 0 part) dengan data dari datasheet resmi `EPS 901-100 Rev S` (TP48 series) dan `EPS 901-107 Rev V` (SD range):
  - `MTL TP48` (Surge Protection Devices) — SPD field-mounted 2/3/4 kawat, bodi stainless ANSI 316 IP66, Un 35 V DC, Uc 58 V, Imax 20 kA (8/20 us), Iimp 2,5 kA (10/350 us), Up < 76 V pada 1 kV/us, bandwidth 1 MHz, kapasitansi 100 pF, tanpa resistansi seri, ATEX Ex ia IIC T4/T5/T6 dan Ex d IIC.
  - `MTL SD32` (32 V DC / 22 V AC, Uc 36 V, Up < 45 V, residual 60 V, arus bocor 5 uA).
  - `MTL SD55` (55 V DC / 38 V AC, Uc 62 V, Up < 90 V, residual 100 V, arus bocor 5 uA).
  - `MTL SD16` (16 V DC / 11 V AC, Uc 17 V, Up < 25 V, residual 40 V) untuk RS232, termokopel, dan sinyal low-level.
  - `MTL SD07` (7 V DC / 5 V AC, Uc 7,7 V, Up < 12 V, residual 30 V, arus bocor 500 uA) untuk milivolt, RTD, dan tranduser tekanan 3 kawat.
  - Seluruh seri SD memakai data bersama: In 250 mA, resistansi seri 4,2 ohm per line, Imax 20 kA (8/20 us), isn 3 kA, Iimp 2,8 kA (10/350 us), respons < 1 ns, bandwidth 25 kHz, lebar modul 7,0 mm, tinggi 99 mm, rentang suhu -40 sampai +80 C, sertifikasi ATEX Ex ia IIC T4 Ga, IECEx, UL 497B, CSA, IEC 61643-21, serta fitur loop disconnect dan sekring 250 mA replaceable (SD-F25).
  - Kategori baru `Surge Protection Devices` ditambahkan ke standar taksonomi bagian 2A. Arsip `/ma/mtl/` kini aktif dengan 5 part, sementara gambar produk memakai `/placeholder-product.png` sampai foto asli tersedia.
  - `CONTENT_INDEX.md` disinkronkan (75 kategori, 73 brand, 76 artikel saat batch ini masuk) dan build statis SSG 895 halaman sukses diverifikasi.
- **[2026-11-11]**: Produksi artikel blog pilar Klaster 4 (Transduser Arus & Proteksi Sinyal Instrumentasi) untuk brand **MTL** via `pakar-entity-seo` dan `penulis-ahli`:
  - Judul: `surge-protector-mtl-loop-instrumen-4-20-ma` (*Surge Protector MTL dan Cara Memilihnya untuk Loop 4-20 mA*), panjang judul 58 karakter dan meta description 144 karakter.
  - Membedah dua pendekatan pemasangan MTL, yaitu field-mounted `MTL TP48` di port conduit transmitter versus modul rail DIN `SD07/SD16/SD32/SD55` berlebar 7 mm, serta alasan pemilihan ditentukan oleh lokasi risiko surja, bukan oleh harga satuan.
  - Menguraikan metode pemilihan rating tegangan berbasis tegangan kerja maksimum sistem (Uc 7,7 V sampai 62 V) agar pengkleman tidak terlambat, jebakan arus bocor 500 uA pada SD07 terhadap sumber milivolt berimpedansi tinggi, dan arti akhiran varian X, R, T3, serta SDRTD.
  - Menyajikan tiga kegagalan pemasangan yang berulang di lapangan: rail DIN tidak terhubung ke earth bar panel, sekring 250 mA putus tanpa terdeteksi, dan screen kabel dibumikan ganda sehingga memicu loop arus tanah.
  - Memuat dua tabel, yaitu tabel rating tegangan empat model SD dan tabel komparasi TP48 versus SD series, serta checklist tujuh butir sebelum memesan SPD.
  - `CONTENT_INDEX.md` disinkronkan (77 artikel), autolink terms diregenerasi (tautan internal ke `/ma/mtl/`, `/ca/surge-protection-devices/`, lima part MTL, dan artikel LEM LF terverifikasi aktif di HTML hasil build), build statis SSG 896 halaman sukses tanpa error.
- **[2026-11-11]**: Integrasi gambar produk lokal untuk seluruh part MTL dan cover artikel Klaster 4:
  - `public/img/mtl-tp48.webp` (8 KB), `mtl-sd32.webp` (55 KB), `mtl-sd55.webp` (10 KB), `mtl-sd16.webp` (11 KB), dan `mtl-sd07.webp` (31 KB) dihubungkan ke masing-masing file part. Tidak ada lagi part MTL yang memakai `/placeholder-product.png`.
  - Cover artikel `surge-protector-mtl-loop-instrumen-4-20-ma` dihubungkan ke `public/img/surge-protector-mtl-loop-instrumen-4-20-ma_poco.webp` (62 KB).
  - Schema JSON-LD `Product.image` dan `Article.image` otomatis merender URL absolut `https://alfa.elektrindo.co.id/img/...` sehingga lolos validasi Google Images dan AI Overviews. Thumbnail ikut tampil pada listing `/blog/`, homepage, `/ma/mtl/`, dan `/ca/surge-protection-devices/`.
- **[2026-11-11]**: Canonicalisasi domain pada `public/.htaccess` dan deploy produksi:
  - Ditambahkan aturan paksa HTTPS (`%{HTTPS} off` → 301) dan www ke non-www (`^www\.alfa\.elektrindo\.co\.id$` → 301) di atas blok redirect taksonomi. Directive `Options` sengaja tidak dipakai karena dapat memicu HTTP 500 pada shared hosting DomaiNesia.
  - Sebelum perubahan, domain melayani empat varian (`http`, `https`, `www`, non-www) dengan status 200 sehingga berpotensi duplikasi konten. Setelah perubahan, seluruh varian bermuara ke `https://alfa.elektrindo.co.id/`.
  - Deploy ke `/home/apitowpc/alfa.elektrindo.co.id` sukses (1.020 file, 20,9 MB, 896 halaman). Percobaan pertama gagal pada verifikasi upload zip dan berhasil pada percobaan kedua dengan `--skip-build`.
  - Verifikasi live: homepage, `/ma/mtl/`, `/ca/surge-protection-devices/`, lima halaman part MTL, artikel Klaster 4, `/ca/fuses/`, dan `sitemap.xml` seluruhnya 200. Sitemap memuat 885 URL termasuk 7 URL baru MTL. Redirect taksonomi lama tetap berjalan dari HTTP maupun HTTPS.
- **[2026-11-13]**: Input 5 part number baru brand **Fuji Electric** untuk lini IPM `6MBP` kelas 600 V, berdasarkan datasheet resmi Fuji Electric (R-IPM series) dan Application Manual `REH983a`:
  - `6MBP15RH060` (600 V / 15 A, paket P617, 50 gram) — seri RH generasi keempat, 6 in 1 IPM dengan proteksi overcurrent 21/27/33 A, tDOC 5,0 µs, Rth j-c 1,47 °C/W, alarm hanya di lengan bawah.
  - `6MBP30RH060` (600 V / 30 A, paket P617, 50 gram) — sama seperti di atas dengan proteksi overcurrent 44/54/64 A dan Rth j-c 1,47 °C/W.
  - `6MBP50RA060` (600 V / 50 A, paket P610, 440 gram) — seri RA dengan proteksi lengkap di kedua lengan, TcOH 110-125 °C, IOC 75 A minimum, fSW 1-20 kHz.
  - `6MBP75RA060` (600 V / 75 A, paket P610, 440 gram) — varian RA 75 A, IOC 113 A minimum, PC 320 W per elemen.
  - `6MBP100RA060` (600 V / 100 A, paket P611, 440 gram) — varian RA 100 A, IOC 150 A minimum, PC 400 W per elemen.
  - Semua part memakai kategori kanonik `IGBT Modules` dan brand kanonik `Fuji Electric`. Gambar produk sementara memakai `/placeholder-product.png` sampai foto asli tersedia.
  - Total part Fuji Electric di katalog naik dari **8 part** menjadi **13 part**; kategori `IGBT Modules` kini **96 part**.
  - `CONTENT_INDEX.md` disinkronkan (75 kategori, 73 brand, 77 artikel), autolink terms diregenerasi, `llms-full.txt` diperbarui, dan build statis SSG **901 halaman** sukses diverifikasi tanpa error (naik dari 896).
- **[2026-11-13]**: Integrasi gambar produk lokal untuk part **Fuji Electric**:
  - `public/img/a50l-0001-0338.webp` (label terbaca `2MBI300TA-060 / 300A 600V JAPAN`) dihubungkan ke `src/content/parts/a50l-0001-0338.md` (sebelumnya `/placeholder-product.png`).
  - Isi part `a50l-0001-0338` ditulis ulang berdasarkan datasheet resmi Fuji Electric **2MBI300TA-060** (Spesifikasi MS5F 5292): 2 in 1 package (IGBT + FWD), VCES 600 V, Ic 300 A kontinu / 600 A puls 1 ms, IF 300 A (duty 75 %) / 600 A puls, Pc 860 W per device, Tj 150 °C, Viso AC 2500 V 1 menit, torsi M5 2,5–3,5 Nm (rekomendasi 3,5 Nm), VGE(th) 6,2/6,7/7,7 V, VCE(sat) chip 1,85 V / terminal 2,1 V (maks 2,4 V), VF chip 1,8 V / terminal 2,1 V (maks 2,5 V), trr maks 0,3 µs, PAV 170 mJ, Rth(j-c) IGBT 0,145 °C/W dan FWD 0,32 °C/W, Rth(c-f) 0,025 °C/W, pengakuan UL E82988. Judul diubah menjadi `A50L-0001-0338 (2MBI300TA-060)` dan klaim lama yang tidak terbukti (dimensi 120x90x30 mm, berat 0,8 kg, efisiensi >95 %) dihapus.
  - Gambar part Fuji lain (`a50l-0001-0175-m-fuji`, `6mbp15rh060`, `6mbp30rh060`, `6mbp50ra060`, `6mbp75ra060`, `6mbp100ra060`) kini memakai path lokal `/img/<slug>.webp`. Part `a6di75a-050` dan `i2mbi150va-060-50` masih memakai placeholder.
  - `CONTENT_INDEX.md` diregenerasi dan build SSG sukses; `dist/part/a50l-0001-0338/index.html` terverifikasi merender gambar lokal dan JSON-LD `Product.image` absolut `https://alfa.elektrindo.co.id/img/a50l-0001-0338.webp`.
- **[2026-11-13]**: Perbaikan gambar & isi part **Fuji Electric `6DI75A-050`**:
  - `public/img/a6di75a-050.webp` (label terbaca `6DI75A-050 / 6x75A 500V JAPAN`, case M603) dihubungkan ke `src/content/parts/a6di75a-050.md` (sebelumnya `/placeholder-product.png`).
  - Isi part ditulis ulang berdasarkan datasheet resmi Fuji Electric (katalog B-170, seri 6DI, 3 IGBT + 3 FWD dalam satu case M603, insulated type): VCBO/VCEO 600 V, VCE(sus) 450 V, VEBO 7 V, IC 75 A DC / 150 A puls 1 ms, -IC 75 A, IB 45 A / 90 A puls, Pc 350 W per transistor, Tj +150 °C, Tstg −40…+125 °C, massa 450 g, Viso AC 2500 V 1 menit, torsi mounting 3,5 N·m dan terminal 1,7 N·m (rekomendasi 2,5–3,0 N·m M5 dan 1,4–1,6 N·m M4), ICES maks 10 mA, −VCE maks 1,5 V, hFE min 100, VCE(sat) maks 2,0 V, VEC(sat) maks 2,5 V, ton maks 1,5 µs, tr 120 µs / tf 30 µs, trr maks 0,6 µs, Rth(j-c) transistor 0,35 °C/W dan dioda 0,85 °C/W, Rth(c-f) tipikal 0,05 °C/W, UL E82988 (M).
  - Aplikasi mengikuti daftar pabrikan (AC Motor Controls, Air Conditioners) plus penerapan industri; klaim lama "frekuensi switching hingga 20 kHz", "pendingin terintegrasi", dan "gate drive isolated" yang tidak ada di datasheet resmi dihapus/diperbaiki menjadi "tipe terisolasi (insulated type)".
  - `CONTENT_INDEX.md` diregenerasi (74 kategori, 73 brand, 77 artikel) dan build SSG sukses **900 halaman**; `dist/part/a6di75a-050/index.html` terverifikasi merender gambar lokal dan JSON-LD `Product.image` absolut `https://alfa.elektrindo.co.id/img/a6di75a-050.webp`.
- **[2026-11-13]**: Perbaikan gambar & isi part **Fuji Electric `2MBI300U2B-060-50`** (slug URL tetap `i2mbi150va-060-50`):
  - `public/img/i2mbi150va-060-50.webp` dihubungkan ke `src/content/parts/i2mbi150va-060-50.md` (sebelumnya `/placeholder-product.png`).
  - **Koreksi identitas part**: penandaan label pada foto dibaca `2MBI300U2B-060-50 / 300A 600V`, bukan 2MBI150VA-060-50 seperti tertuang pada konten lama. Judul dan isi part disesuaikan ke **2MBI300U2B-060-50** (V series, 2 in 1 package IGBT + FWD, case M233).
  - Isi ditulis ulang berdasarkan spesifikasi resmi Fuji Electric **MS5F 5617**: VCES 600 V, VGES ±20 V, IC 300 A kontinu / Icp 600 A (1 ms), -IC 300 A / 600 A, Pc 1000 W per device, Tj 150 °C, Tstg −40…+125 °C, Viso AC 2500 V 1 menit, torsi mounting & terminal 3,5 N·m (rekomendasi 2,5–3,5 N·m M5), ICES maks 2,0 mA, IGES maks 400 nA, VGE(th) 6,2/6,7/7,7 V, VCE(sat) terminal tip 2,10 V (Tj 25 °C) / 2,35 V (Tj 125 °C), maks 2,45 V, chip tip 1,80 V / 2,05 V, Cies tip 23,0 nF, VF terminal tip 1,90 V maks 2,30 V, VF chip tip 1,60 V, trr maks 0,35 µs, Rlead tip 0,97 mΩ, Rth(j-c) IGBT 0,125 °C/W dan FWD 0,23 °C/W, Rth(c-f) tip 0,025 °C/W, dimensi 92±1 × 45±1 mm.
  - Klaim lama yang tidak terbukti (arus 150 A, disipasi 500 W, Rth 0,125 °C/W sebagai Rth total, "frekuensi switching hingga 20 kHz") dihapus atau diganti data resmi.
  - `CONTENT_INDEX.md` diregenerasi dan build SSG sukses **900 halaman**; `dist/part/i2mbi150va-060-50/index.html` terverifikasi merender gambar lokal dan JSON-LD `Product.image` absolut `https://alfa.elektrindo.co.id/img/i2mbi150va-060-50.webp`.
- **[2026-11-13]**: Perbaikan tautan internal footer agar konsisten dengan `trailingSlash: 'always'`:
  - `src/components/Footer.astro` (footer aktif, dipakai `src/layouts/Layout.astro`): tautan `/about-us`, `/contact-us`, `/privacy-policy`, `/terms` diubah menjadi `/about-us/`, `/contact-us/`, `/privacy-policy/`, `/terms/`. Tautan `/products/`, `/manufacturers/`, `/blog/` sudah benar.
  - `src/components/layout/Footer.astro` (footer lama, **tidak dipakai** di mana pun — dibersihkan agar konsisten bila dipakai lagi): `/about` → `/about-us/`, `/contact` → `/contact-us/`, serta `/privacy-policy/`, `/terms/`, `/cookie-policy/`, `/products/`, `/manufacturers/`, `/latest-products/`, `/blog/`, `/jual-komponen/`. Perbaikan `/about` dan `/contact` sekaligus menutup celah 404 karena halaman `/about` dan `/contact` memang tidak pernah ada di build.
  - Verifikasi: scan `dist/**/*.html` memastikan tidak ada lagi `href` internal tanpa trailing slash (sisa hanya `/favicon.png` dan `/favicon.ico` yang memang aset). Seluruh 10 target terverifikasi ada di `dist/`: `/about-us/`, `/contact-us/`, `/privacy-policy/`, `/terms/`, `/cookie-policy/`, `/products/`, `/manufacturers/`, `/latest-products/`, `/blog/`, `/jual-komponen/`. Build SSG sukses **900 halaman**; `sitemap.xml`, `canonical`, dan `og:url` sudah konsisten memakai trailing slash.

- **[2026-11-14]**: Audit ulang artikel Fuji Electric terhadap aturan skill `penulis-ahli`, perbaikan berikut dilakukan:
  - **Judul**: `long_title` diubah dari "Panduan Memilih Modul IGBT Fuji Electric 6MBP: Seri RH vs RA untuk Inverter Motor Industri" (90 karakter, ada titik dua) menjadi **"Panduan Memilih Modul IGBT Fuji Electric 6MBP RH dan RA"** (55 karakter, tanpa titik dua, sesuai rentang wajib 50-60 karakter). `title` disederhanakan menjadi "Panduan Modul IGBT Fuji 6MBP".
  - **Meta description**: ditambahkan field baru `meta_description` (159 karakter, rentang wajib 110-160). Field ini baru dipakai artikel ini; `src/content.config.ts` skema collection `blogs` sudah ditambah properti `meta_description` (opsional) dan `src/pages/blog/[slug].astro` sekarang memakai `post.meta_description || post.pendahuluan || post.long_title` untuk meta tag. Artikel lama tetap aman karena fall-through-nya `pendahuluan`.
  - **Struktur heading**: H2 dikurangi dari 10 menjadi 7 (rekomendasi skill 4-7). Section "Angka Proteksi yang Menentukan Perilaku Modul" turun menjadi H3 di bawah "Perbedaan Teknis Seri RH dan Seri RA", dan dua section pemasangan digabung menjadi satu H2 "Panduan Pemasangan Modul 6MBP pada Inverter" dengan dua H3 (RH dan RA). Section "Penutup" dihapus sebagai heading dan dijadikan paragraf penutup.
  - **Pemeriksaan humanizer**: tanpa em dash, en dash, ` -- `, emoji, kutip melengkung, dan tanpa pemakaian huruf tebal. Semua paragraf kini maksimal 4 kalimat. Keyword utama "6MBP" dan "Fuji Electric" muncul natural dalam 100 kata pertama.
  - Verifikasi ulang: `node scripts/gen-content-index.js` lalu `npm run build` sukses **901 halaman**; `<h1>`, `<title>`, dan meta description ter-render sesuai frontmatter baru.

- **[2026-11-14]**: Terbit artikel pilar pertama brand **Fuji Electric** (skill `pakar-entity-seo` untuk riset TAHAP 0-3, skill `penulis-ahli` untuk penulisan akhir):
  - Slug: `panduan-memilih-modul-igbt-fuji-electric-6mbp-rh-vs-ra`, file `src/content/blog/panduan-memilih-modul-igbt-fuji-electric-6mbp-rh-vs-ra.md` (sekitar 2.200 kata).
  - Judul: "Panduan Memilih Modul IGBT Fuji Electric 6MBP: Seri RH vs RA untuk Inverter Motor Industri".
  - Fokus keyword "6MBP" yang sebelumnya tidak memiliki halaman dedicated sama sekali. Struktur: pembuka kasus alarm overcurrent, definisi dan Advantages IPM, cara membaca kode 6MBP, tabel perbandingan RH vs RA, angka proteksi IOC/tDOC/tSC/TcOH, panduan pemasangan seri RH (P617, 50 g, M4 2,0 N·m) dan seri RA (P610/P611, 440 g, M5 2,5-3,0 N·m, fSW 1-20 kHz), tabel pemilihan 6MBP vs 2MBI vs 6DI, kesalahan umum lapangan, checklist pemesanan, dan CTA WhatsApp 0812-682-6672.
  - Semua angka spesifikasi diambil dari datasheet resmi Fuji Electric (`6MBP30RH060` dan `6MBP50RA060`), bukan estimasi.
  - Cover artikel: `public/img/panduan-memilih-modul-igbt-fuji-electric-6mbp-rh-vs-ra_poco.webp` (800x600). Generation AI via 9Router ditolak HTTP 403 (layanan gambar sedang disables), sehingga cover memakai foto produk Fuji Electric asli yang sudah ada di `public/img/6mbp15rh060.webp`.
  - Internal link: 10 part Fuji Electric ditautkan manual (`/part/6mbp15rh060/` s.d. `/part/6mbp100ra060/`, `/part/a50l-0001-0338/`, `/part/i2mbi150va-060-50/`, `/part/a6di75a-050/`, `/part/a50l-0001-0175-m-fuji/`), plus autolink otomatis ke `/ma/fuji-electric/` dan `/ca/igbt-modules/`.
  - Verifikasi: `node scripts/gen-content-index.js` (78 artikel) lalu `npm run build` sukses **901 halaman**; JSON-LD `Article.image` ter-render absolut (`https://alfa.elektrindo.co.id/img/...`), `datePublished` 2026-11-14, dan seluruh link part terverifikasi resolve ke halaman `dist/part/`.
  - `SUMBER-PENGETAHUAN.md` section 10.1 diperbarui dengan entri artikel Fuji Electric.

- **[2026-11-14]**: Penulisan ulang total halaman **About Us** (`/about-us/`) memakai skill `penulis-about-us`, sumber data `legalitas_cv_alfa_elektrindo.md`:
  - Halaman lama berada di dalam `src/pages/[slug].astro` sebagai blok data `about-us` (struktur generik lima section). Blok tersebut dihapus dan diganti file tersendiri `src/pages/about-us.astro` agar bisa punya layout, tabel, dan schema khusus.
  - **Pemetaan 10 fungsi E-E-A-T**: identitas badan usaha dan data legal (Fungsi 1), profil direktur dan pesero komanditer (Fungsi 2), bidang keahlian per klaster komponen (Fungsi 3), pengalaman operasional sejak 2018 (Fungsi 4), rekam jejak lewat angka katalog 611 part, 74 kategori, 73 brand (Fungsi 5), tujuan dan cara kerja layanan (Fungsi 6), standar pemetaan part dan transparansi harga (Fungsi 7), bukti legalitas-pypsi sebagai kapabilitas fisik (Fungsi 8), kebijakan redaksi konten (Fungsi 9), transparansi alamat, jam kerja, dan kanal kontak (Fungsi 10).
  - **Data legalitas yang ditambahkan** (dari Akta Pendirian Notaris Krisnanti Soesilowati, S.H., M.Kn. Kota Batam Nomor 1 tanggal 10 Februari 2018): Akta Pendirian, pengesahan Pengadilan Negeri Batam 120/2018/PN BTM tanggal 27 Februari 2018, NPWP 84.157.615.0-225.000, TDP 33.10.3.46.11617, SIUP Kecil 00334/DPMPTSP-BTM/PK/III/2018, SKDU 40/CSB/II/2018, modal awal Rp 260.000.000, pesero Richa Anggraini Putri (Direktur) dan Arni Sutarni, alamat terdaftar Perum. Puri Agung 4 Blok C No. 29 Kel. Mangsang Kec. Sungai Beduk, telepon resmi 0778-385407.
  - **Schema JSON-LD** `@graph` berisi `AboutPage` dan `LocalBusiness` dengan `foundingDate`, `founder` (Richa Anggraini Putri, Direktur), `employee` (Arni Sutarni, Pesero Komanditer), `openingHoursSpecification`, `sameAs` (YouTube dan Instagram), `knowsAbout`, dan `identifier` berupa NPWP, TDP, SIUP, serta akta pendirian.
  - Copy sudah mengikuti aturan humanizer skill: tanpa em dash, tanpa emoji, tanpa aksara non-Latin, tanpa superlatif kosong.
  - Verifikasi: `npm run build` sukses **901 halaman**; `<title>`, meta description, JSON-LD, dan seluruh section ter-render benar. Scan `dist/**/*.html` memastikan tidak ada link internal tanpa trailing slash.
  - `SUMBER-PENGETAHUAN.md` section 1 ditambah tabel "Data Legalitas Badan Usaha" agar artikel dan halaman lain bisa merujuk angka legal yang sama.
  - **Revisi lanjutan**: detail modal awal (Rp 260.000.000) dihapus dari halaman karena tidak relevan bagi pembeli. Diganti dengan section baru **"Perjalanan Kami"** (timeline 4 titik): sekitar Juli 2017 mulai dari blog Blogspot dengan custom domain `arjunaputrastore.com` tanpa emphasis pada branding dan legalitas, 10 Februari 2018 pendaftaran CV Alfa Elektrindo sementara website masih di domain lama, sekitar 20 September 2018 pendaftaran domain `elektrindo.co.id` dan pindah ke WordPress, sekitar September 2026 rebuild ke Astro dengan static site generation. Narasi ditulis jujur tanpa membesar-besarkan tahap awal.
  - `src/pages/sitemap.xml.js` ditambah 7 URL halaman statis (`/about-us/`, `/contact-us/`, `/privacy-policy/`, `/terms/`, `/cookie-policy/`, `/jual-komponen/`) yang sebelumnya tidak pernah masuk sitemap. Jumlah `<loc>` naik dari 890 menjadi 896.

- **[2026-11-14]**: Commit dan deploy produksi. Commit `4dd9142` ("feat: catalogue expansion Fuji Electric & MTL, artikel pilar 6MBP, rewrite About Us"), 257 file berubah. Deploy cPanel DomaiNesia sukses upload `_deploy_1794552884.zip` dan ekstraksi ke `/home/apitowpc/alfa.elektrindo.co.id`.
  - Verifikasi produksi: `/about-us/`, `/blog/panduan-memilih-modul-igbt-fuji-electric-6mbp-rh-vs-ra/`, `/part/6mbp30rh060/`, `/part/mtl-sd32/`, `/part/mtl-tp48/`, `/part/ddb6u84n16rr/`, `/part/a50l-0001-0338/`, `/ma/fuji-electric/`, `/ca/igbt-modules/`, `/contact-us/`, `/terms/`, dan `/sitemap.xml` semuanya HTTP 200.
  - Konten produksi terverifikasi: section "Perjalanan Kami" beserta ketiga domain historis tampil, modal awal tidak lagi muncul, JSON-LD `AboutPage` + `LocalBusiness` valid, artikel Fuji Electric memuat 10 link part plus autolink brand/kategori, `Article.image` absolut, dan seluruh gambar produk lokal merespons 200.
  - `sitemap.xml` produksi berisi 896 URL termasuk `/about-us/`.

- **[2026-11-14]**: Sinkronisasi `llms.txt` dan `llms-full.txt` dengan data katalog. Commit `d064e89`.
  - `scripts/gen-llms.js` dibuat baru: `public/llms.txt` dihitung otomatis dari sumber data (16.453 karakter, 611 part, 74 kategori, 73 brand, 78 artikel, 49 area). Isinya mencakup data badan usaha, sejarah singkat brand, statistik katalog, artikel pilar terbaru, dan cakupan area layanan.
  - `scripts/gen-llms-full.js` diperbaiki: parser frontmatter block scalar (`|-`) kini membaca nilai multi-baris utuh, dan seksi baru **"Daftar Part Tergressor per Brand"** (sic: "Terdaftar") dibangkitkan otomatis dari `src/content/parts`. Part baru Fuji Electric (6MBP seri RH/RA, 2MBI, 6DI, A50L), MTL (TP48, SD07-SD55), dan Infineon DDB6U otomatis masuk. Ukuran file naik dari 411 KB ke 600 KB.
  - `package.json` menambah script `gen:index`, `gen:llms`, `gen:llms-full`, `gen:all`.
  - Deploy produksi sukses (`_deploy_1794553222.zip`). Verifikasi: `llms.txt` 200 (16.453 b), `llms-full.txt` 200 (600.139 b), part baru terdeteksi, section "Data Badan Usaha" dan domain historis `arjunaputrastore.com` terbaca.

- **[2026-11-17]**: Input 5 part number pertama brand **Thyristor** (brand target #5, sebelumnya 0 part) untuk seri `KP` phase control thyristor tipe kapsul/press-pack:
  - `KP300-16` (300 A / 1600 V, IFSM 3,8 kA, I²t 72,2 kA²s, RTH 0,055 °C/W, klem 5,3-10 kN, outline F3/E2/E4).
  - `KP500-16` (500 A / 1600 V, IFSM 6,4 kA, I²t 204,8 kA²s, RTH 0,035 °C/W, klem 15-20 kN, outline F4/E4).
  - `KP800-16` (800 A / 1600 V, IFSM 10 kA, I²t 500 kA²s, RTH 0,032 °C/W, klem 15-20 kN, outline F5/E6).
  - `KP1000-16` (1000 A / 1600 V, IFSM 13 kA, I²t 845 kA²s, RTH 0,022 °C/W, klem 21-30 kN, outline F6/E7).
  - `KP1500-16` (1500 A / 1600 V, IFSM 20 kA, I²t 2000 kA²s, RTH 0,017 °C/W, klem 27-34 kN, outline E8/E9).
  - Semua angka diambil dari tabel "Chinese Type Phase Control Thyristors (Capsule Version)" pada **LJ-MD Catalog 2025** (diodethyristor.com), bukan estimasi. Kode tegangan 16 setara VRRM 1600 V sesuai aturan `code x 100 = VRRM`; I²t dihitung dengan `0,005 x IFSM²` pada 50 Hz. Fitur bersama: proses difusi penuh, gerbang pusat, pendinginan dua sisi, Tjm 125 °C, IGT 35-300 mA, VGT 0,8-3,0 V, dan dV/dt minimal 500-800 V/µs.
  - Kategori kanonik `Thyristors` bertambah dari 19 menjadi **24 part**, brand baru `Thyristor` aktif di `/ma/thyristor/` dengan 5 produk. Total katalog naik dari 611 menjadi **616 part**.
  - Gambar produk memakai `/placeholder-product.png` sampai foto kapsul KP asli tersedia.
  - Kata generik `thyristor` ditambahkan ke `skipList` di `scripts/gen-autolink-terms.js` supaya autolink tidak mengubah setiap kata "Thyristor" di artikel menjadi tautan ke arsip brand. Tautan kategori `Thyristors` tetap berfungsi.
  - `CONTENT_INDEX.md` disinkronkan (74 kategori, 74 brand, 78 artikel), `autolink-terms.ts` dan `llms.txt` diregenerasi (616 part), build statis SSG **907 halaman** sukses diverifikasi. Kelima URL part, `/ma/thyristor/`, `/ca/thyristors/`, dan sitemap (902 URL) terverifikasi ada di `dist/`.
  - Catatan lanjutan: varian kode tegangan tinggi (2500-6500 V) dan seri `KK` fast switching belum di-input. Artikel pilar pendukung untuk KP belum ditulis.

- **[2026-11-17]**: Integrasi gambar lokal untuk kelima part KP Thyristor dan terbit artikel pilar pendukungnya.
  - `public/img/kp300-16.webp`, `kp500-16.webp`, `kp800-16.webp`, `kp1000-16.webp`, dan `kp1500-16.webp` dihubungkan ke masing-masing file part. Tidak ada lagi part KP yang memakai `/placeholder-product.png`. Label tiap foto diperiksa terhadap part number: `KP300A-16` cocok, `KP800A1600` cocok, `KP500A1600V` cocok, sementara `kp1500-16` memakai foto berlabel `KP1500A1800` sehingga keterangan kode tegangan pada bodi kapsul ditambahkan di bagian penjelasan spesifikasi.
  - Koreksi tabel `KP500-16`: outline diubah dari `F4, E4` menjadi `F5` mengikuti kode `F5*1*` yang tercetak pada kapsul di foto, dan ditambah paragraf dimensi F5 (diameter luar 66 mm, tinggi 17 mm) agar pembeli mencocokkan klem sebelum memesan.
  - Artikel pilar terbit: `cara-membaca-kode-thyristor-kp-dan-memilih-kapsul` (*Cara Membaca Kode Thyristor KP dan Memilih Kapsul yang Tepat*), 1.539 kata, judul 60 karakter, meta description 157 karakter, 7 H2, seluruh paragraf maksimal 4 kalimat, tanpa em dash dan tanpa huruf tebal. Membahas arti kode KP (angka arus pada heatsink 55 °C dan kode tegangan ×100), penentuan kelas arus dari daya buang nyata, tabel kecocokan outline F3/F4/F5/F6 dengan tekanan klem, pemaralelan thyristor, dan koordinasi sekring aR memakai batas I²t 72,2 hingga 2000 kA²s. Menautkan kelima part KP plus `/ca/thyristors/` dan `/ca/thyristor-capsules/` tidak dipakai karena kategorinya `Thyristors`.
  - Cover artikel memakai foto produk `public/img/kp1000-16.webp` karena pembuatan gambar AI tidak tersedia di sesi ini.
  - Perbaikan template `src/pages/blog/[slug].astro`: variabel `randomProducts` sebelumnya dihitung dan dioper ke props tetapi tidak pernah dirender, sehingga tidak ada satu pun artikel yang menaut ke halaman part. Ditambahkan blok **"Produk yang Tersedia"** berisi 6 kartu produk acak tepat di atas blok artikel terkait. Verifikasi: 79 dari 79 artikel kini memuat blok tersebut, menambah jalur internal link dari blog ke katalog part.
  - `CONTENT_INDEX.md` disinkronkan (74 kategori, 74 brand, 79 artikel), autolink terms `thyristor` tetap di-skip, build statis SSG **908 halaman** sukses diverifikasi. Artikel masuk sitemap, listing `/blog/`, dan seluruh tautan part serta arsip terverifikasi resolve di HTML hasil build.
  - Catatan: kategori `Thyristors` pada bagian 2A sudah mencakup thyristor stud, disc, dan diskrit, sehingga part KP tidak memerlukan kategori baru.
