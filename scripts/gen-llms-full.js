#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const AREAS_DIR = join(ROOT, 'src/content/areas');
const PARTS_DIR = join(ROOT, 'src/content/parts');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const OUTPUT_PATH = join(ROOT, 'public/llms-full.txt');

function readScalar(content, key) {
  const m = content.match(new RegExp(`^${key}:\\s*(?:\\|-\\s*\\n\\s*([^\\n]+)|"([^"]*)")`, 'm'));
  return m ? (m[1] || m[2] || '').trim() : null;
}

function getBody(content) {
  const parts = content.split('---');
  return parts.length > 2 ? parts.slice(2).join('---').trim() : '';
}

// 1. Gather all areas
const areaFiles = readdirSync(AREAS_DIR).filter(f => f.endsWith('.md')).sort();
const areas = [];
for (const file of areaFiles) {
  const content = readFileSync(join(AREAS_DIR, file), 'utf8');
  const title = readScalar(content, 'title') || file.replace('.md', '');
  const slug = readScalar(content, 'slug') || file.replace('.md', '');
  const description = readScalar(content, 'description') || '';
  const body = getBody(content);
  areas.push({ title, slug, description, body });
}

// 2. Gather top categories & brands from parts
const categories = new Map();
const brands = new Map();
const partFiles = readdirSync(PARTS_DIR).filter(f => f.endsWith('.md'));

for (const file of partFiles) {
  const content = readFileSync(join(PARTS_DIR, file), 'utf8');
  const cat = readScalar(content, 'category');
  const man = readScalar(content, 'manufacturer');
  if (cat) categories.set(cat, (categories.get(cat) || 0) + 1);
  if (man) brands.set(man, (brands.get(man) || 0) + 1);
}

const sortedCats = [...categories.entries()].sort((a, b) => b[1] - a[1]);
const sortedBrands = [...brands.entries()].sort((a, b) => b[1] - a[1]);

// 3. Gather blog articles
const blogFiles = readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
const blogs = [];
for (const file of blogFiles) {
  const content = readFileSync(join(BLOG_DIR, file), 'utf8');
  const title = readScalar(content, 'long_title') || readScalar(content, 'title');
  const slug = readScalar(content, 'slug');
  const date = readScalar(content, 'date') || '';
  const pendahuluan = readScalar(content, 'pendahuluan') || '';
  if (title && slug) {
    blogs.push({ title, slug, date: date.slice(0, 10), pendahuluan });
  }
}
blogs.sort((a, b) => (a.date < b.date ? 1 : -1));

let output = `# Alfa Elektrindo — Complete Technical Knowledge Base & Industrial Catalog (llms-full.txt)

> File ini adalah basis pengetahuan lengkap dan komprehensif mengenai profil bisnis, kapabilitas teknis, katalog kategori suku cadang elektronik industri, portofolio brand global, panduan mitigasi part usang (obsolete), serta profil industri mendalam di 49 kawasan industri Indonesia yang dilayani oleh CV. Alfa Elektrindo. Didesain secara khusus untuk Language Models (LLM), sistem Retrieval-Augmented Generation (RAG), dan mesin pencari AI.

---

## 1. Profil Perusahaan & Identitas Bisnis

- **Nama Usaha**: CV. Alfa Elektrindo
- **Bidang Usaha**: Penyalur dan Distributor Komponen Elektronik untuk Industri dan Pabrikasi
- **Tagline**: Supplier Komponen Elektronik Industri dan Pabrikasi di Batam
- **Alamat Workshop**: Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai, Batam Kota, Batam, Kepulauan Riau 29431, Indonesia
- **Telepon / WhatsApp**: 0812-682-6672 (Internasional: +628126826672)
- **WhatsApp Link**: https://wa.me/628126826672
- **Email Resmi**: mail@elektrindo.co.id
- **Website Resmi**: https://alfa.elektrindo.co.id/
- **Sitemap XML**: https://alfa.elektrindo.co.id/sitemap.xml
- **Format URL**: Semua URL situs web resmi menggunakan trailing slash (misal: \`https://alfa.elektrindo.co.id/products/\`).

### Ringkasan Eksekutif
CV. Alfa Elektrindo adalah perusahaan distributor suku cadang elektronika industri dan instrumen pabrikasi yang berpusat di Batam, Kepulauan Riau. Alfa Elektrindo berfokus pada penyediaan semikonduktor daya (*power semiconductors*), proteksi sirkuit kelistrikan industri (*industrial fuses & circuit protection*), otomasi pabrik (*PLC, inverter, servo, sensor*), serta suku cadang langka atau yang sudah tidak lagi diproduksi oleh produsen aslinya (*obsolete / discontinued / end-of-life parts*).

Dengan basis pergudangan dan logistik di Kawasan Perdagangan Bebas (*Free Trade Zone*) Batam yang terhubung erat dengan jaringan pemasok global di Singapura dan Asia Pasifik, CV. Alfa Elektrindo memberikan solusi pengadaan komponen yang cepat, orisinal, dan terverifikasi untuk meminimalkan kerugian akibat waktu henti produksi (*downtime*) pada fasilitas manufaktur, smelter, pembangkit listrik, pabrik kimia, dan industri pengolahan di seluruh Indonesia.

---

## 2. Keunggulan Rantai Pasok & Logistik Hub Batam

### Kedekatan dengan Hub Internasional Singapura
Batam memiliki status Free Trade Zone (FTZ) dengan fasilitas kepabeanan khusus yang berjarak hanya 45 menit dari Pelabuhan Singapura. Posisi strategis ini memberikan keuntungan kompetitif bagi Alfa Elektrindo:
1. Akses langsung ke stok pergudangan semikonduktor global di Asia Pasifik tanpa melalui rantai distribusi bertingkat yang memakan waktu lama.
2. Kecepatan pengadaan komponen impor yang sulit ditemukan di distributor lokal pulau Jawa atau wilayah Indonesia lainnya.
3. Ketersediaan part number spesifik buatan Jepang, Jerman, Amerika Serikat, Swiss, Prancis, dan Italia.

### Jaringan Kargo Udara Harian ke Seluruh Indonesia
Untuk melayani kebutuhan darurat perbaikan mesin di lantai pabrik:
- Pengiriman kargo udara prioritas dari Bandara Internasional Hang Nadim Batam (BTH) setiap hari kerja menuju bandara-bandara hub utama nasional (Soekarno-Hatta Jakarta, Juanda Surabaya, Kualanamu Medan, Sultan Hasanuddin Makassar, Sepinggan Balikpapan, Sultan Syarif Kasim II Pekanbaru, Minangkabau Padang, Radin Inten II Lampung, Kertajati Majalengka, dan lainnya).
- Disambung dengan armada pengantaran darat ekspres menuju gerbang kawasan industri atau pabrik dalam hitungan jam.

### Standar Penanganan & Pengemasan Proteksi Elektrostatik (ESD)
Semua komponen elektronik sensitif (modul IGBT, thyristor, IC driver, kartu PCB, modul PLC) dikemas dengan standar industri ketat:
- **Kemasan Anti-Statis (ESD Shielding)**: Kantong pelindung elektrostatik dengan bantalan busa konduktif untuk mencegah sengatan muatan statis selama proses transit kargo udara.
- **Lapisan Kedap Kelembapan**: Dilengkapi kantong penyerap uap air (*desiccant*) untuk pengiriman ke daerah berkelembapan tinggi atau area maritim.
- **Pemeriksaan Integritas Fisik**: Verifikasi kode part number, dimensi pin, kondisi isolator keramik, dan integritas terminal sebelum pengiriman.

---

## 3. Penanganan Komponen Usang (*Obsolete*) & Rekayasa Rujukan Silang (*Cross-Reference*)

Salah satu tantangan terbesar departemen pemeliharaan (*maintenance*) pabrik di Indonesia adalah ketergantungan pada lini mesin impor yang telah beroperasi selama 10 hingga 30 tahun. Ketika kartu kontrol, inverter, modul transistor, atau sensor bawaan mesin rusak, pihak Original Equipment Manufacturer (OEM) kerap kali menyatakan bahwa modul tersebut telah berstatus *discontinued* atau tidak lagi didukung.

Mengganti satu unit mesin utuh hanya karena sebuah modul saklar daya atau sensor rusak membutuhkan biaya modal yang sangat besar dan waktu instalasi berbulan-bulan.

### Layanan Teknis Alfa Elektrindo dalam Mitigasi Komponen Obsolete:
1. **Pelacakan Part Number Asli**: Alfa Elektrindo memanfaatkan jaringan database pergudangan internasional dan stockist spesialis komponen usang untuk menemukan part number yang persis sama dalam kondisi New Old Stock (NOS) atau baru dengan garansi.
2. **Rekayasa Rujukan Silang (Cross-Reference Analysis)**: Bila nomor komponen pabrikan asli sudah benar-benar musnah dari peredaran dunia, tim teknis Alfa Elektrindo menganalisis lembar data (*datasheet*) untuk menemukan padanan fungsional dari produsen terkemuka lain dengan parameter yang setara atau lebih unggul:
   - **Tegangan Tembus Kolektor-Emitor ($V_{CES}$ / $V_{RRM}$)**: Wajib sama atau lebih tinggi untuk mencegah breakdown isolasi tegangan lebih.
   - **Kapasitas Arus Kontinu & Arus Puncak ($I_C, I_{CM}$ / $I_F, I_{FSM}$)**: Menjamin kemampuan modul menahan beban kejut start-up motor.
   - **Tegangan Jatuh Konduksi ($V_{CE(sat)}$ / $V_F$)**: Memastikan disipasi daya panas internal tidak melampaui kapasitas heatsink eksisting.
   - **Karakteristik Pensaklaran & Gate Charge ($Q_g, t_d, t_f$)**: Menjamin kompatibilitas dengan sirkuit gate driver kontroler lama tanpa memicu overheating.
   - **Bentuk Fisik & Jejak Terminal (*Form-Factor & Footprint*)**: Memastikan jarak baut terminal busbar dan pin konektor kendali pas pada panel eksisting tanpa modifikasi drastis.

---

## 4. Katalog Kategori Komponen Elektronik Industri (${sortedCats.length} Kategori)

Daftar seluruh kategori komponen elektronik industri yang tersedia di Alfa Elektrindo beserta jumlah part number terdaftar:

`;

for (const [catName, count] of sortedCats) {
  const catSlug = catName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  output += `- [${catName}](https://alfa.elektrindo.co.id/ca/${catSlug}/): Memuat ${count} part number terdaftar.\n`;
}

output += `
### Uraian Detail Kategori Komponen Kritis

1. **IGBT Modules (Insulated Gate Bipolar Transistor)**
   - Fungsi: Saklar semikonduktor berkecepatan tinggi berkapasitas arus dan tegangan besar. Dipakai pada inverter motor AC, sistem pengereman dinamis, UPS industri, mesin las inverter, dan konverter energi terbarukan (PLTS dan turbin angin).
   - Brand Utama: Semikron, Infineon, Mitsubishi Electric, Fuji Electric, IXYS, Powerex.
   - Tipe Konfigurasi: Single IGBT, Half-Bridge (Dual), Chopper, Six-Pack (3-Phase Bridge), dan PIM/CIB (Power Integrated Module mencakup rectifier + inverter + brake).

2. **Fuse & Proteksi Sirkuit Semikonduktor**
   - Fungsi: Pengaman lebur ultra-cepat (*high-speed fast-acting fuse*) yang dirancang khusus memiliki nilai $I^2t$ let-through sangat rendah untuk memutus gangguan hubung singkat sebelum merusak modul semikonduktor daya yang sangat sensitif.
   - Brand Utama: Eaton Bussmann, Ferraz Shawmut (Mersen), Littelfuse, Siemens SITOR.
   - Seri Populer: Seri 170M (Square body flush end), FWH/FWX (cylindrical & bolt-in), KTK, LP-CC, BS88, NH gG/aR.

3. **Power Supplies & Konverter DC-DC**
   - Fungsi: Unit catu daya switching teregulasi ketat untuk menyuplai instrumen logika PLC, sensor, HMI, dan relay pada kabinet kontrol otomasi. Memiliki fitur proteksi lonjakan tegangan, proteksi hubung singkat, serta ketahanan terhadap noise kelistrikan.
   - Brand Utama: PULS, TDK-Lambda, Siemens SITOP, Mean Well, Phoenix Contact.

4. **Sensor Industri (Proximity, Photoelectric, Ultrasonic, Suhu, Tekanan)**
   - Fungsi: Mata dan telinga sistem otomasi untuk mendeteksi keberadaan objek logam tanpa kontak, mengukur jarak, memverifikasi posisi barang pada konveyor berkecepatan tinggi, serta memantau parameter suhu dan tekanan fluida secara kontinu.
   - Brand Utama: Omron, Sick, Pepperl+Fuchs, Balluff, Keyence, Telemecanique (Schneider).

5. **Diode Modul & Thyristor (SCR Modules)**
   - Fungsi: Komponen penyearah daya tinggi arus AC menjadi DC pada tanur peleburan listrik, sistem electroplating, soft starter motor tegangan menengah, dan sistem eksitasi generator turbin uap.
   - Brand Utama: Semikron (SEMIPACK), Infineon, IXYS, SanRex, Vishay.

6. **PLC & Modul I/O Otomasi**
   - Fungsi: Otak pengendali urutan proses industri, pembaca input sinyal diskrit/analog, dan eksekutor perintah kontrol motor, katup selenoid, dan aktuator.
   - Brand Utama: Siemens (SIMATIC S7-1200, S7-1500, S7-300), Omron (CP1E, CJ2M), Mitsubishi (MELSEC iQ-R, FX Series), Allen-Bradley (ControlLogix, Micro800).

7. **Inverter Drive (VFD) & Soft Starter**
   - Fungsi: Pengatur kecepatan dan akselerasi motor induksi tiga fasa untuk efisiensi energi listrik, memperhalus arus start-up (*inrush current*), dan melindungi komponen mekanis gearbox serta sabuk konveyor dari beban kejut.
   - Brand Utama: Siemens SIRIUS / SINAMICS, ABB ACS, Fuji Electric FRENIC, Danfoss VLT.

8. **Servo Motor & Servo Amplifier**
   - Fungsi: Sistem penggerak motor presisi tinggi dengan umpan balik encoder tertutup (*closed-loop*) untuk aplikasi pemosisian cepat pada mesin bubut/frais CNC, lengan robot perakitan, dan mesin pengemas berkecepatan tinggi.
   - Brand Utama: Fanuc, Mitsubishi Electric, Yaskawa, Panasonic, Delta.

---

## 5. Portofolio Brand & Produsen Terkemuka (${sortedBrands.length} Brand)

Daftar brand industri global yang didukung oleh CV. Alfa Elektrindo:

`;

for (const [brandName, count] of sortedBrands) {
  const brandSlug = brandName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  output += `- [${brandName}](https://alfa.elektrindo.co.id/ma/${brandSlug}/): Menangani ${count} part number terdaftar.\n`;
}

output += `
---

## 6. Lini Brand & Seri Komponen Prioritas Rekayasa Industri

Sebagai penyalur semikonduktor daya dan komponen industri terkemuka di Batam, CV. Alfa Elektrindo memprioritaskan ketersediaan dan dukungan teknis untuk 13 brand global berikut:

### 1. Semikron (Danfoss) — Modul Semikonduktor Daya SEMIPACK & Powertrain
- **Seri SKKT (Dual Thyristor Phase Leg)**: [SKKT 57/16 E](https://alfa.elektrindo.co.id/part/skkt-57-16-e/), [SKKT 106/16 E](https://alfa.elektrindo.co.id/part/skkt-106-16-e/), [SKKT 132/16 E](https://alfa.elektrindo.co.id/part/skkt-132-16-e/), [SKKT 162/16 E](https://alfa.elektrindo.co.id/part/skkt-162-16-e/), [SKKT 250/16 E](https://alfa.elektrindo.co.id/part/skkt-250-16-e/). Dirancang untuk soft starter motor AC dan penyearah jembatan terkontrol penuh.
- **Seri SKKH (Thyristor / Diode Module)**: [SKKH 72/16 E](https://alfa.elektrindo.co.id/part/skkh-72-16-e/), [SKKH 107/16 E](https://alfa.elektrindo.co.id/part/skkh-107-16-e/), [SKKH 162/16 E](https://alfa.elektrindo.co.id/part/skkh-162-16-e/), [SKKH 250/16 E](https://alfa.elektrindo.co.id/part/skkh-250-16-e/). Solusi half-controlled bridge converter hemat gerbang pemicu.
- **Seri SKKD (Dual Diode Module)**: [SKKD 46/16](https://alfa.elektrindo.co.id/part/skkd-46-16/), [SKKD 100/16](https://alfa.elektrindo.co.id/part/skkd-100-16/), [SKKD 162/16](https://alfa.elektrindo.co.id/part/skkd-162-16/). Dioda penyearah fasa jala-jala 1600V.
- **Seri SKKE (Single Diode Module SEMIPACK 1–4)**: [SKKE 81/16](https://alfa.elektrindo.co.id/part/skke-81-16/), [SKKE 162/16](https://alfa.elektrindo.co.id/part/skke-162-16/), [SKKE 380/16](https://alfa.elektrindo.co.id/part/skke-380-16/), [SKKE 600/16](https://alfa.elektrindo.co.id/part/skke-600-16/). Rektifikasi daya masif arus hingga 600A.
- **Seri SKKQ (High Current Thyristor SEMIPACK 5)**: [SKKQ 430/14 E](https://alfa.elektrindo.co.id/part/skkq-430-14-e/), [SKKQ 560/14 E](https://alfa.elektrindo.co.id/part/skkq-560-14-e/).
- **Seri SKN & SKR (Stud Diode Anoda & Katoda)**: [SKN 100/16](https://alfa.elektrindo.co.id/part/skn-100-16/), [SKN 240-16](https://alfa.elektrindo.co.id/part/skn-240-16/), [SKN 71/12 UNF](https://alfa.elektrindo.co.id/part/skn-71-12-unf/), [SKR 100/16](https://alfa.elektrindo.co.id/part/skr-100-16/), [SKR 26/16](https://alfa.elektrindo.co.id/part/skr-26-16/), [SKR 71/16](https://alfa.elektrindo.co.id/part/skr-71-16/).
- **Seri SKM (IGBT Modules SEMITRANS)**: [SKM195GB066D](https://alfa.elektrindo.co.id/part/skm195gb066d/), [SKM200GB125D](https://alfa.elektrindo.co.id/part/skm200gb125d/), [SKM400GB125D](https://alfa.elektrindo.co.id/part/skm400gb125d/), [SKM75GB12T4](https://alfa.elektrindo.co.id/part/skm75gb12t4/).
- **Seri SKVC (Varistor Protection Module)**: [SKVC 20A-460](https://alfa.elektrindo.co.id/part/skvc-20a-460/). Proteksi tegangan transien MOV pada sirkuit SEMIPACK.

### 2. IXYS (Littelfuse) — Thyristor, Fast Diode, & Bridge Rectifier
- **Seri MCC (Dual Thyristor Modules)**: [MCC 26-16IO1B](https://alfa.elektrindo.co.id/part/mcc26-16101b/), [MCC 44-16IO1B](https://alfa.elektrindo.co.id/part/mcc44-16i01b/), [MCC 95-16IO1B](https://alfa.elektrindo.co.id/part/mcc-95-16io1b/), [MCC 162-16IO1B](https://alfa.elektrindo.co.id/part/mcc-162-16io1b/), [MCC 255-16IO1](https://alfa.elektrindo.co.id/part/mcc-255-16io1/), [MCC 310-16IO1](https://alfa.elektrindo.co.id/part/mcc310-16io1/), [MCC 501-16IO2](https://alfa.elektrindo.co.id/part/mcc501-16i02/).
- **Seri MCD (Thyristor / Diode Modules)**: [MCD 26-16IO1B](https://alfa.elektrindo.co.id/part/mcd-26-16io1b/), [MCD 44-16IO1B](https://alfa.elektrindo.co.id/part/mcd-44-16io1b/), [MCD 95-16IO1B](https://alfa.elektrindo.co.id/part/mcd-95-16io1b/), [MCD 162-16IO1B](https://alfa.elektrindo.co.id/part/mcd-162-16io1b/), [MCD 312-16IO1](https://alfa.elektrindo.co.id/part/mcd-312-16io1/).
- **Seri MDD (Dual Diode Modules)**: [MDD 26-16N1B](https://alfa.elektrindo.co.id/part/mdd26-16n1b/), [MDD 44-16N1B](https://alfa.elektrindo.co.id/part/mdd44-16n1b/), [MDD 95-16N1B](https://alfa.elektrindo.co.id/part/mdd-95-16n1b/), [MDD 162-16N1B](https://alfa.elektrindo.co.id/part/mdd-162-16n1b/), [MDD 312-16N1](https://alfa.elektrindo.co.id/part/mdd-312-16n1/).
- **Seri VVZ (Three-Phase Half-Controlled Bridge)**: [VVZ 40-16IO1](https://alfa.elektrindo.co.id/part/vvz-40-16io1/), [VVZ 70-16IO7](https://alfa.elektrindo.co.id/part/vvz-70-16io7/), [VVZ 110-16IO7](https://alfa.elektrindo.co.id/part/vvz-110-16io7/).
- **Seri DSEI (Fast Recovery Epitaxial Diode FRED miniBLOC)**: [DSEI2X31-06C](https://alfa.elektrindo.co.id/part/dsei2x31-06c/), [DSEI2X61-12B](https://alfa.elektrindo.co.id/part/dsei2x61-12b/), [DSEI2X101-06A](https://alfa.elektrindo.co.id/part/dsei2x101-06a/), [DSEI2X101-12A](https://alfa.elektrindo.co.id/part/dsei2x101-12a/). Waktu pemulihan ultra-cepat 35ns untuk proteksi inverter frekuensi tinggi.

### 3. LEM — Transduser & Sensor Arus Tertutup (Closed-Loop Current Transducers)
- **Seri LF (Closed Loop Hall Effect Flux Balance)**: [LF 205-S](https://alfa.elektrindo.co.id/part/lf-205-s/) (200A), [LF 305-S](https://alfa.elektrindo.co.id/part/lf-305-s/) (300A), [LF 505-S](https://alfa.elektrindo.co.id/part/lf-505-s/) (500A), [LF 1005-S](https://alfa.elektrindo.co.id/part/lf-1005-s/) (1000A), [LF 2005-S](https://alfa.elektrindo.co.id/part/lf-2005-s/) (2000A), [LF 310-S](https://alfa.elektrindo.co.id/part/lf-310-s/) (300A), [LF 510-S](https://alfa.elektrindo.co.id/part/lf-510-s/) (500A).
- Keunggulan: Akurasi hingga 0.5%, linearitas tinggi, bandwidth frekuensi DC hingga 100 kHz, waktu respon di bawah 0.5 mikrodetik untuk proteksi trip cepat modul IGBT inverter.

### 4. Infineon Technologies — Power Disc Thyristor, Diode, & IGBT Modules
- **Thyristor Disc (Hockey Puk)**: [T880N14TOF](https://alfa.elektrindo.co.id/part/t880n14tof/), [T640N14TOF](https://alfa.elektrindo.co.id/part/t640n14tof/), [T1410N04TOF](https://alfa.elektrindo.co.id/part/t1410n04tof/), [T1509N18TOF](https://alfa.elektrindo.co.id/part/t1509n18tof/).
- **Thyristor & Diode Modules**: [TT120N16SOF](https://alfa.elektrindo.co.id/part/tt120n16sof/), [TT142N16KOF](https://alfa.elektrindo.co.id/part/tt142n16kof/), [TT285N16KOF](https://alfa.elektrindo.co.id/part/tt285n16kof/), [TT500N16KOF](https://alfa.elektrindo.co.id/part/tt500n16kof/), [TZ740N22KOF](https://alfa.elektrindo.co.id/part/tz740n22kof/), [DD100N16S](https://alfa.elektrindo.co.id/part/dd100n16s/), [DD104N18K](https://alfa.elektrindo.co.id/part/dd104n18k/), [DD171N18K](https://alfa.elektrindo.co.id/part/dd171n18k/), [DZ1070N22K](https://alfa.elektrindo.co.id/part/dz1070n22k/).
- **IGBT Modules (EconoPACK / PrimePACK / TRENCHSTOP)**: [FF150R12KS4](https://alfa.elektrindo.co.id/part/ff150r12ks4/), [FF200R12KT4](https://alfa.elektrindo.co.id/part/ff200r12kt4/), [FF300R12KT4](https://alfa.elektrindo.co.id/part/ff300r12kt4/), [FS225R12KE3](https://alfa.elektrindo.co.id/part/fs225r12ke3/), [FS300R12KE3](https://alfa.elektrindo.co.id/part/fs300r12ke3/), [FZ2400R12HP4](https://alfa.elektrindo.co.id/part/fz2400r12hp4/).

### 5. SanRex — Thyristor & Penyearah Jembatan Industri
- **Seri DF (Three-Phase Diode Bridge)**: [DF50AA160](https://alfa.elektrindo.co.id/part/df50aa160/), [DF100AA160](https://alfa.elektrindo.co.id/part/df100aa160/), [DF150AA160](https://alfa.elektrindo.co.id/part/df150aa160/).
- **Seri PK (Thyristor Modules)** & **Seri PD (Power Diode Modules)**.

### 6. Eaton Bussmann — High-Speed Semiconductor Fuse Proteksi Semikonduktor
- **Seri 170M (Square Body Flush End / DIN 43653)**: [170M6462](https://alfa.elektrindo.co.id/part/b-170m6462-bussmann/), [170M6148](https://alfa.elektrindo.co.id/part/bussmann-170m6148/), [170M4467](https://alfa.elektrindo.co.id/part/e-170m4467/), [170M2663](https://alfa.elektrindo.co.id/part/e170m2663/), [170M3813D](https://alfa.elektrindo.co.id/part/e170m3813d/), [170M5015](https://alfa.elektrindo.co.id/part/e170m5015/), [170M5418](https://alfa.elektrindo.co.id/part/e170m5418/), [170M5460](https://alfa.elektrindo.co.id/part/e170m5460/), [170M6513](https://alfa.elektrindo.co.id/part/e170m6513/), [170M6718](https://alfa.elektrindo.co.id/part/e170m6718/), [170M6810D](https://alfa.elektrindo.co.id/part/e170m6810d/), [170M8623](https://alfa.elektrindo.co.id/part/e170m8623/).
- **Seri FWH, FWX, KTK, LP-CC, FNQ, C14G**: Pengaman lebur ultra-cepat dengan koordinasi I2t presisi.

### 7. MTL Instruments — Intrinsic Safety Barriers & Hazardous Area Isolation
- **Seri MTL5500 & MTL7700**: Isolator sinyal keselamatan intrinsik bersertifikasi ATEX / IECEx untuk pemrosesan instrumentasi di area berbahaya industri petrokimia, kilang minyak, dan pembangkit listrik.

### 8. Fuji Electric, Mitsubishi Electric, Ferraz Shawmut/Mersen, Telemecanique, Omron, Siemens
- **Fuji Electric**: Modul IGBT 6MBP, 2MBI, 6MBI, 7MBP, serta modul transistor A50L.
- **Mitsubishi Electric**: Modul IGBT generasi CM series dan IPM seri PM/QM.
- **Ferraz Shawmut (Mersen)**: Sekring Protistor A070UD, PC33UD, FR10, NH gG/aR.
- **Telemecanique / Schneider Electric**: Sakelar tekanan XMLA/XMLB, sakelar batas XCKM/XCMD, dan kontaktor LC1D.
- **Omron**: Sensor optik E3Z, E3AS, proximity sensor E2B, SSR seri G3PE/G3NA, dan PLC CP1E/CJ2M.
- **Siemens**: PLC SIMATIC S7-1200/1500, soft starter SIRIUS 3RW, catu daya SITOP, dan sekring SITOR.

---

## 7. Cakupan Wilayah Layanan Industri di Seluruh Indonesia (49 Area)

CV. Alfa Elektrindo melayani pengadaan suku cadang komponen elektronik untuk fasilitas industri di 49 kabupaten/kota utama di Indonesia. Berikut adalah profil industri, karakteristik kebutuhan suku cadang, dan rute logistik untuk masing-masing area:

`;

for (let i = 0; i < areas.length; i++) {
  const a = areas[i];
  output += `### ${i + 1}. [${a.title}](https://alfa.elektrindo.co.id/area/${a.slug}/)\n`;
  output += `- **URL**: https://alfa.elektrindo.co.id/area/${a.slug}/\n`;
  output += `- **Deskripsi Layanan**: ${a.description}\n\n`;
  output += `${a.body}\n\n---\n\n`;
}

output += `## 8. Indeks Wawasan Teknis & Artikel Blog Terbit (${blogs.length} Artikel)

Artikel teknis yang diterbitkan oleh Alfa Elektrindo membahas solusi rekayasa kelistrikan, mitigasi keausan termal semikonduktor, panduan perawatan motor drive, dan integrasi otomasi pabrik:

`;

for (const b of blogs) {
  output += `### [${b.title}](https://alfa.elektrindo.co.id/blog/${b.slug}/)\n`;
  output += `- **URL**: https://alfa.elektrindo.co.id/blog/${b.slug}/\n`;
  output += `- **Tanggal Rilis**: ${b.date}\n`;
  if (b.pendahuluan) {
    output += `- **Ringkasan**: ${b.pendahuluan}\n`;
  }
  output += `\n`;
}

output += `---

## 9. Panduan Pengadaan & Konsultasi Teknis (Request Quote)

Bagi manajer pabrik, supervisor maintenance, engineer instrumentasi/otomasi, maupun bagian procurement perusahaan:

### Langkah Mudah Permintaan Penawaran:
1. **Foto Identitas Komponen**: Ambil foto jelas nomor seri (*part number*) pada badan komponen yang rusak atau pelat nama (*nameplate*) pada pintu panel mesin.
2. **Kirim Data ke Tim Alfa Elektrindo**:
   - Kirimkan via WhatsApp ke nomor resmi: **0812-682-6672** (atau klik https://wa.me/628126826672).
   - Atau kirimkan dokumen Request for Quotation (RFQ) resmi perusahaan via email ke: **mail@elektrindo.co.id**.
3. **Penyampaian Estimasi & Faktur**:
   - Tim teknis kami akan langsung mengecek stok fisik di hub Batam atau melacak ketersediaan jaringan mitra global.
   - Anda akan menerima penawaran harga resmi (*formal quotation*) mencakup harga terbaik, jaminan keaslian barang, estimasi waktu pengiriman kargo, serta opsi nomor komponen rujukan silang jika part number lama telah *obsolete*.
4. **Pengiriman & Pelacakan Kargo**:
   - Barang dikemas dengan proteksi anti-statis (ESD) dan dikirim melalui kargo udara terjadwal lengkap dengan nomor resi aktif untuk pelacakan real-time oleh divisi logistik Anda.

---
© 2026 CV. Alfa Elektrindo. Seluruh hak cipta dilindungi undang-undang.
Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai - Batam, Kepri 29431.
`;

writeFileSync(OUTPUT_PATH, output, 'utf8');
console.log(`public/llms-full.txt generated successfully (${output.length} characters, ${areas.length} areas, ${sortedCats.length} categories, ${sortedBrands.length} brands, ${blogs.length} blogs).`);
