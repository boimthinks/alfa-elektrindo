#!/usr/bin/env node
/**
 * Generator public/llms.txt
 *
 * llms.txt adalah ringkasan terstruktur untuk Language Model. Berbeda dengan
 * llms-full.txt yang memuat seluruh isi technical knowledge base, file ini
 * hanya berisi peta situs: profil bisnis, daftar halaman utama, kategori
 * terpopuler, brand yang didukung, artikel pilar, dan wilayah layanan.
 *
 * Semua angka (jumlah kategori, brand, area, artikel) dihitung langsung dari
 * sumber data sehingga file tidak pernah lagi basi.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PARTS_DIR = join(ROOT, 'src/content/parts');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const AREAS_DIR = join(ROOT, 'src/content/areas');
const OUTPUT_PATH = join(ROOT, 'public/llms.txt');

const BASE = 'https://alfa.elektrindo.co.id';

function readScalar(content, key) {
  const m = content.match(new RegExp(`^${key}:\\s*(?:\\|-\\s*\\n\\s*([^\\n]+)|"([^"]*)")`, 'm'));
  return m ? (m[1] || m[2] || '').trim() : null;
}

function slugify(value) {
  return (value || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// 1. Kumpulkan statistik katalog
const partFiles = readdirSync(PARTS_DIR).filter(f => f.endsWith('.md'));
const categories = new Map();
const brands = new Map();

for (const file of partFiles) {
  const content = readFileSync(join(PARTS_DIR, file), 'utf8');
  const cat = readScalar(content, 'category');
  const man = readScalar(content, 'manufacturer');
  if (cat) categories.set(cat, (categories.get(cat) || 0) + 1);
  if (man) brands.set(man, (brands.get(man) || 0) + 1);
}

const sortedCats = [...categories.entries()].sort((a, b) => b[1] - a[1]);
const sortedBrands = [...brands.entries()].sort((a, b) => b[1] - a[1]);

// 2. Kumpulkan artikel blog
const blogFiles = readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
const blogs = [];
for (const file of blogFiles) {
  const content = readFileSync(join(BLOG_DIR, file), 'utf8');
  const title = readScalar(content, 'long_title') || readScalar(content, 'title');
  const slug = readScalar(content, 'slug');
  const date = readScalar(content, 'date') || '';
  const intro = readScalar(content, 'pendahuluan') || '';
  if (title && slug) blogs.push({ title, slug, date: date.slice(0, 10), intro });
}
blogs.sort((a, b) => (a.date < b.date ? 1 : -1));

// 3. Kumpulkan area layanan
const areaFiles = readdirSync(AREAS_DIR).filter(f => f.endsWith('.md'));
const areas = areaFiles.map(file => {
  const content = readFileSync(join(AREAS_DIR, file), 'utf8');
  return {
    title: readScalar(content, 'title') || file.replace('.md', ''),
    slug: readScalar(content, 'slug') || file.replace('.md', ''),
  };
});

const partCount = partFiles.length;
const catCount = categories.size;
const brandCount = brands.size;

// Kategori yang ditampilkan di ringkasan. Dipilih ulang dari data, bukan
// ditulis manual, supaya deskripsinya selalu sesuai katalog terkini.
const FEATURED_CATEGORIES = [
  ['IGBT Modules', 'Modul saklar daya berkecepatan tinggi untuk inverter motor AC, VFD, UPS sentral, dan konverter turbin angin (Fuji Electric 6MBP dan 2MBI, Infineon PrimePACK dan EconoPACK, Semikron SKM, Mitsubishi CM).'],
  ['Fuses', 'Sekring pelebur kecepatan tinggi dengan nilai I2t ultra-rendah untuk proteksi modul daya (Eaton Bussmann 170M, FWH, FWX, Ferraz Shawmut Protistor, Littelfuse).'],
  ['Thyristor Modules', 'Modul SCR dan thyristor industri terkontrol sudut fasa untuk soft starter motor AC dan penyearah terkontrol (Semikron SKKT, IXYS MCC, Infineon TT dan TZ, SanRex PK).'],
  ['Diodes', 'Modul dioda penyearah daya arus tinggi terisolasi DCB untuk bus DC inverter, tanur listrik, dan generator (Semikron SKKD dan SKKE, IXYS MDD, Infineon DD).'],
  ['Power Supplies', 'Catu daya switching presisi DIN-rail untuk kabinet kontrol industri (PULS, TDK-Lambda, Siemens SITOP, Weidmuller).'],
  ['Proximity Sensors', 'Sensor induktif dan kapasitif untuk deteksi objek tanpa kontak, tersedia dalam versi flush dan non-flush (Balluff, Omron, Sick, Telemecanique).'],
  ['Transducers', 'Sensor arus closed-loop presisi tinggi dengan kompensasi fluks nol untuk proteksi trip cepat inverter IGBT (LEM LF Series 200 A sampai 2000 A).'],
  ['Drives', 'Pengatur kecepatan dan akselerasi motor induksi tiga fasa untuk efisiensi energi dan pengurangan arus start-up (Siemens, ABB, Fuji Electric FRENIC, Danfoss).'],
  ['Soft Starters', 'Pengatur arus start-up motor tanpa gangguan pada jaringan, cocok untuk pompa, kipas, dan kompresor (Siemens SIRIUS, Schneider, ABB).'],
  ['Servo Motor', 'Sistem penggerak motor presisi tinggi dengan umpan balik encoder tertutup untuk mesin CNC, robot perakitan, dan mesin pengemas (Mitsubishi, Yaskawa, Panasonic, Fanuc).'],
];

const FEATURED_BRANDS = [
  ['Semikron', 'Modul SEMIPACK thyristor ganda (SKKT), kombinasi thyristor-dioda (SKKH), dual diode (SKKD), single diode (SKKE), thyristor arus besar (SKKQ), stud diode (SKN dan SKR), IGBT (SKM), dan modul varistor proteksi MOV (SKVC 20A-460).'],
  ['Infineon', 'Modul thyristor disc hockey puk (T880N, T640N, T1410N, T1509N), modul fasa TT, TZ, DD, dan DZ, modul rectifier DDB6U, serta modul IGBT EconoPACK, PrimePACK, dan TRENCHSTOP (FF, FS, FP, FZ).'],
  ['IXYS', 'Modul thyristor ganda (MCC 26 s.d. 501), modul phase leg thyristor-dioda (MCD 26 s.d. 312), modul dual diode (MDD 26 s.d. 312), three-phase half-controlled bridge (VVZ 40, 70, 110), dan ultra-fast recovery FRED (DSEI2X31, DSEI2X61, DSEI2X101).'],
  ['Fuji Electric', 'Intelligent Power Module 6 in 1 seri 6MBP (RH dan RA), IGBT 2 in 1 seri 2MBI, modul dioda 6-pack seri 6DI, transistor daya A50L, dan inverter FRENIC.'],
  ['Mitsubishi Electric', 'Modul IGBT CM series, Intelligent Power Module seri PM dan QM, PLC MELSEC, dan servo drive.'],
  ['LEM', 'Sensor arus closed-loop dengan kompensasi fluks nol seri LF (LF 205-S, LF 305-S, LF 505-S, LF 1005-S, LF 2005-S) untuk proteksi inverter.'],
  ['Eaton Bussmann', 'Sekring proteksi semikonduktor kecepatan tinggi seri 170M (square body flush end dan DIN 43653), FWH, FWX, KTK, LP-CC, FNQ, dan C14G.'],
  ['SanRex', 'Modul thyristor PK series, three-phase diode bridge rectifier DF series (DF50AA160, DF100AA160, DF150AA160), dan diode module PD series.'],
  ['MTL', 'Surge protection device untuk loop instrumen 4-20 mA (field-mounted TP48 dan rail DIN seri SD), serta barrier intrinsik safety ATEX.'],
  ['Telemecanique', 'Sakelar tekanan fluida XMLA dan XMLB, limit switch XCKM dan XCMD, dan kontaktor daya Schneider Electric.'],
  ['Omron', 'Sensor optik E3Z dan E3AS, proximity sensor E2B, Solid State Relay G3PE dan G3NA, dan PLC CP1E dan CJ2M.'],
  ['Siemens', 'PLC SIMATIC S7-1200 dan S7-1500, soft starter SIRIUS 3RW, catu daya SITOP, dan sekring SITOR.'],
  ['Ferraz Shawmut', 'Sekring Protistor cepat lebur dari Mersen (A070UD, PC33UD, FR10, NH gG dan aR) untuk transformator dan rectifier industri berat.'],
  ['Bussmann', 'Dihapus. Brand ini digabung ke Eaton Bussmann. Gunakan tautan ke /ma/eaton-bussmann/.'],
];

let output = `# Alfa Elektrindo

> CV. Alfa Elektrindo adalah supplier komponen elektronik industri dan pabrikasi yang berkantor di Batam, Kepulauan Riau, Indonesia. Kami spesialis dalam penyediaan komponen semikonduktor daya, proteksi sirkuit, otomasi industri, serta komponen usang (*obsolete*) dan sulit ditemukan (*hard-to-find parts*) dengan jangkauan pengiriman ke seluruh kawasan industri di Indonesia.

Kami membantu tim pemeliharaan (*maintenance*), engineer otomasi dan instrumentasi, serta divisi pengadaan (*purchasing*) pabrik dalam meminimalkan waktu henti mesin (*downtime*) dengan memasok komponen orisinal berstandar industri internasional, rujukan silang suku cadang pengganti (*cross-reference*), dan pengiriman kargo udara prioritas dari kawasan perdagangan bebas Batam.

Kontak dan Konsultasi:
- WhatsApp: https://wa.me/628126826672
- Email: mail@elektrindo.co.id
- Telepon: 0812-682-6672
- Alamat: Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai, Batam Kota, Batam, Kepulauan Riau 29431, Indonesia
- Website: ${BASE}/

## Data Badan Usaha

- **Bentuk badan usaha**: Perseroan Komanditer (CV), CV Alfa Elektrindo
- **Tanggal pendirian**: 10 Februari 2018, Akta Pendirian Nomor 1 Notaris Krisnanti Soesilowati, S.H., M.Kn. Kota Batam
- **NPWP**: 84.157.615.0-225.000, KPP Pratama Batam Selatan
- **Tanda Daftar Perusahaan**: 33.10.3.46.11617, KBLI 46591
- **SIUP Kecil**: 00334/DPMPTSP-BTM/PK/III/2018, KBLI 46591 dan 46521
- **Alamat terdaftar**: Perum. Puri Agung 4 Blok C No. 29, Kelurahan Mangsang, Kecamatan Sungai Beduk, Kota Batam
- **Sejarah singkat**: bisnis bermula sekitar Juli 2017 dari blog Blogspot dengan custom domain arjunaputrastore.com, CV Alfa Elektrindo didaftarkan pada 10 Februari 2018, domain elektrindo.co.id dan platform WordPress pada sekitar 20 September 2018, dan website dibangun ulang dengan Astro pada sekitar September 2026.

## File Lengkap untuk LLM

- [llms-full.txt](${BASE}/llms-full.txt): Berkas teks lengkap berisi profil perusahaan, katalog ${catCount} kategori produk, daftar ${brandCount} brand produsen utama, lini komponen prioritas rekayasa industri, panduan teknis part obsolete, dan profil ${areas.length} kawasan industri layanan di seluruh Indonesia.

## Halaman Utama

- [Beranda](${BASE}/): Informasi umum profil perusahaan, kategori terpopuler, merek terkemuka, dan komponen pilihan.
- [Katalog Kategori](${BASE}/products/): Indeks ${catCount} kategori komponen elektronik industri (IGBT, sekring semikonduktor, PLC, inverter, sensor, kontaktor).
- [Daftar Produsen](${BASE}/manufacturers/): Direktori ${brandCount} merek industri global terkemuka (Semikron, IXYS, Infineon, SanRex, LEM, Eaton Bussmann, Siemens, Mitsubishi, Fuji Electric, Omron, MTL).
- [Produk Terbaru](${BASE}/latest-products/): Katalog seluruh part number komponen industri yang terdaftar, total ${partCount} part.
- [Blog Industri](${BASE}/blog/): Artikel teknis seputar semikonduktor daya, proteksi surge, kalibrasi sensor industri, panduan VFD, dan troubleshooting mesin, total ${blogs.length} artikel.
- [Jual Komponen](${BASE}/jual-komponen/): Informasi penawaran pengadaan suku cadang khusus dan komponen surplus pabrik.
- [Tentang Kami](${BASE}/about-us/): Profil badan usaha CV. Alfa Elektrindo, data legalitas, perjalanan brand, dan kapabilitas rantai pasok.
- [Hubungi Kami](${BASE}/contact-us/): Informasi alamat fisik, nomor kontak teknis, email penawaran harga, dan peta lokasi.

## Kategori Komponen Utama

`;

for (const [name, desc] of FEATURED_CATEGORIES) {
  const count = categories.get(name);
  if (!count) continue;
  output += `- [${name}](${BASE}/ca/${slugify(name)}/): ${desc} Total ${count} part terdaftar.\n`;
}

output += `\n## Brand Global dan Seri Prioritas yang Didukung\n\n`;

for (const [name, desc] of FEATURED_BRANDS) {
  const count = brands.get(name);
  if (!count) continue;
  output += `- [${name}](${BASE}/ma/${slugify(name)}/): ${desc} Total ${count} part terdaftar.\n`;
}

output += `\n## Panduan Rekayasa Teknis dan Artikel Pilar\n\n`;

for (const b of blogs.slice(0, 12)) {
  const desc = b.intro ? b.intro.replace(/\s+/g, ' ') : '';
  output += `- [${b.title}](${BASE}/blog/${b.slug}/): ${desc}\n`;
}

output += `\n## Cakupan ${areas.length} Wilayah Layanan Industri di Indonesia\n\n`;
output += `Alfa Elektrindo melayani pengiriman suku cadang ke seluruh kawasan industri di Indonesia melalui jaringan kargo udara prioritas dari hub Batam:\n\n`;
output += areas.map(a => `- [${a.title}](${BASE}/area/${a.slug}/)`).join(', ');
output += `\n\n## Informasi Tambahan\n\n`;
output += `- [Kebijakan Privasi](${BASE}/privacy-policy/): Kebijakan penanganan data pelanggan dan pengunjung situs web.\n`;
output += `- [Syarat dan Ketentuan](${BASE}/terms/): Ketentuan layanan transaksi dan pengadaan suku cadang.\n`;
output += `- [Kebijakan Cookie](${BASE}/cookie-policy/): Informasi penggunaan cookie di situs web.\n`;

writeFileSync(OUTPUT_PATH, output, 'utf8');
console.log(`public/llms.txt generated successfully (${output.length} characters, ${partCount} parts, ${catCount} categories, ${brandCount} brands, ${blogs.length} blogs, ${areas.length} areas).`);
