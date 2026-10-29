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

Total katalog awal saat audit: **548 part**.

| No | Brand | Target Series / Prefix | Status di Website | Part yang Tersedia Saat Ini | Rencana Aksi Bertahap |
|:---|:---|:---|:---|:---|:---|
| 1 | **Semikron** | `SKN` (Stud Diode Anoda) | **Ada (3)** | `SKN 100/16`, `SKN 240-16`, `SKN 71/12 UNF` | Tambah varian rating amper populer |
| | | `SKR` (Stud Diode Katoda) | **Ada (3)** | `SKR 100/16`, `SKR 26/16`, `SKR 71/16` | Tambah varian rating amper populer |
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
| 3 | **Infineon** | `FF` (Dual IGBT Module) | **Ada (17)** | `FF150R12KS4`, `FF200R12KT4`, `FF300R12KT4`, `FF450R12KE4`, dll. | Artikel pilar terbit |
| | | `TT` (Thyristor Module) | **Ada (4)** | `TT120N16SOF`, `TT142N16KOF`, `TT285N16KOF`, `TT500N16KOF` | Tambah varian TT |
| | | `FS` (Sixpack IGBT) | **Ada (8)** | `FS150R17KE3`, `FS225R12KE3`, `FS300R12KE3`, dll. | Artikel pilar terbit |
| | | `DDB` (Diode Bridge) | **Belum Ada (0)** | *(Belum ada file)* | **Prioritas Input**: DDB6U rectifier bridge series |
| 4 | **SanRex** | `PK` (Thyristor Module) | **Ada (1)** | `PK55FG120` | Input varian PK90, PK110, PK160 |
| 5 | **Thyristor** | `KP` (Disc / Hockey Puk) | **Belum Ada (0)** | *(Belum ada file)* | **Prioritas Input**: KP series phase control thyristor |
| 6 | **LEM** | `LF` (Current Transducer) | **Ada (7)** | `LF 205-S`, `LF 305-S`, `LF 505-S`, `LF 1005-S`, `LF 2005-S`, `LF 310-S`, `LF 510-S` | Batch 1 selesai di-input (200A - 2000A) |
| 7 | **Telemecanique** | `XS` (Inductive Sensor) | **Ada (10)** | `XS1N18PA349D`, `XS618B1MAL2`, `XS7C1A1PBM8`, `XS8E1A1PAL01M12`, dll. | Optimasi halaman part & artikel proximity sensor |
| 8 | **MTL** | `TP`, `SD`, `MTL` (Surge & Isolator) | **Belum Ada (0)** | *(Belum ada file)* | **Prioritas Input**: MTL surge protector TP48, SD32, SD55 |
| 9 | **Starpower** | `GD` (IGBT Module) | **Ada (8)** | `GD100PIY120C6SN`, `GD300HFY120C6S`, `GD600HFY120C2S`, dll. | Optimasi konten substitusi ekonomis IGBT |
| 10 | **Fuji Electric** | `6MBP` (IPM Module) | **Ada (2)** | `6MBP20RH060`, `6MBP20RH-060` | Input varian 6MBP50, 6MBP75, 6MBP100 |
| 11 | **Bussmann** | `170M` (High Speed Fuse) | **Ada (13)** | `170M6462`, `170M6148`, `170M4467`, `170M3813D`, `170M5015`, dll. | Artikel pilar Klaster 1 terbit |
| 12 | **Mitsubishi** | `CM` (Dual/Sixpack IGBT) | **Ada (11)** | `CM1000DX-24T`, `CM100DU-12F`, `CM300DY-24T`, `CM400DY-24NF`, dll. | Artikel pilar terbit |
| | | `PM` (IPM Intellimod) | **Ada (5)** | `PM100CG1B120`, `PM100RSA060`, `PM200CG1C065`, `PM75CG1B120` | Artikel pilar terbit |
| 13 | **Ferraz** | `PC` (Protistor Fuse) | **Ada (3)** | `PC33UD69V450TF`, `PC33UD69V500TF`, `PCMXP02-11AC` | Artikel pilar Klaster 1 terbit; input varian PC30, PC32 |

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
  Kategori Produk (misal: IGBT Modules / Fuse / Thyristors / Proximity Sensors / Transducers)
manufacturer: |-
  Nama Brand (misal: Semikron / IXYS / Infineon / LEM / MTL / Bussmann)
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
