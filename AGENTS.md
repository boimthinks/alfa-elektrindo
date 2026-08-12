# AGENTS.md — Alfa Elektrindo (Astro SSG)

## Aturan Komunikasi
- **Bahasa**: Selalu gunakan Bahasa Indonesia dalam semua respon, pesan, dan percakapan tanpa terkecuali.
- Nama teknis, istilah, dan kode tetap dalam bahasa Inggris (wajar).

## Akses Data
- **SUMBER-PENGETAHUAN.md** (di root project) wajib dibaca untuk data fakta brand, layanan, produk, aturan menulis, dan daftar konten.
- **Seluruh data berasal dari file markdown** (Content Collections Astro). Tidak ada lagi fetch API/Google Sheets pada runtime.
- **Data produk (part)**: `src/content/parts/*.md` → diakses via collection `parts`.
- **Data blog**: `src/content/blog/*.md` → collection `blogs`.
- **Data area**: `src/content/areas/*.md` → collection `areas`.
- **Data jual**: `src/content/jual/*.md` → collection `jual`.
- **Kategori & Manufacturer**: Diturunkan otomatis dari `part` di `src/lib/data.ts` (`getAllData()`). Halaman `/products` (kategori), `/manufacturers` (brand), `/ca/[slug]` (arsip kategori), `/ma/[slug]` (arsip produsen).
- **Struktur permalink**: Wajib dipertahankan supaya Google tidak kehilangan peringkat (lihat tabel di bawah). Jangan mengubah path file `.astro` maupun slug di frontmatter.
- **Update data**: Ubah-edit file MD di `src/content/` lalu `npm run build`. Untuk migrasi massal dari Google Sheets, gunakan `node src/lib/export-to-md.js` (ambil data dari Google Apps Script lama, default di dalam file tersebut).

## Skill Penulisan
- Gunakan skill **`penulis-ahli`** untuk menulis/mengedit artikel blog atau konten SEO. Skill ini menangani humanisasi (hapus pola AI), SEO/GEO (Google AI 2026), dan konten non-komoditas dalam satu pass, lalu otomatis membaca SUMBER-PENGETAHUAN.md.

## Mekanisme Saran Judul Artikel (WAJIB)
Saat pengguna meminta saran judul artikel blog, WAJIB mengikuti alur ini sebelum memberi saran:

1. **Baca `CONTENT_INDEX.md`** di root project untuk melihat daftar kategori, brand, dan judul artikel yang sudah terbit.
2. **Jangan menyarankan judul duplikat** — selalu cek `## 3. Indeks Artikel Terbit` dan gunakan kata kunci/topik yang belum ditulis.
3. **Dasarkan saran pada data nyata**: kategori produk & brand dari `## 1. Kategori Produk` dan `## 2. Brand / Manufacturer` (bersumber dari `src/content/parts/`), serta topik relevan di SUMBER-PENGETAHUAN.md.
4. **Tawarkan draft judul** (problem-centric, non-komoditas, ber-GEO), dan sebelum menulis tunggu persetujuan pengguna.

**Setelah artikel selesai ditulis**, jalankan `node scripts/gen-content-index.js` agar `CONTENT_INDEX.md` diperbarui (artikel baru masuk ke indeks; kategori/brand ikut tersinkron dari katalog). Jangan lupa update `SUMBER-PENGETAHUAN.md` (section Insight) sebagaimana konvensi project.

## Stack (verified)
- **Astro 7.x** static output, Tailwind CSS v4 (warna aksen `#007aff` untuk button/link).
- TypeScript strict (lihat `tsconfig.json`). Site URL: `https://alfa.elektrindo.co.id` (set di `astro.config.mjs`).
- **Data source of truth**: Content Collections markdown (`src/content/`), schema Zod di `src/content.config.ts`.
- **Data helper**: `src/lib/data.ts` — `getAllData()` (membaca semua collection, menurunkan kategori/manufacturer) + `shuffle()`.
- **Migrasi GS → MD**: `src/lib/export-to-md.js` — export semua tab Google Apps Script (`part`, `blog`, `area`, `jual`) menjadi file MD.
- Rendering konten dinamis (tabel HTML dari sumber data lama) memakai direktif **`set:html`** — jangan rebuild HTML di Astro.
- Font global: Plus Jakarta Sans (via Google Fonts). Ikon: Material Icons Round (`material-icons-round`).
- Styling tabel konten: disesuaikan via `.prose table/th/td` di `src/pages/part/[slug].astro` dan `src/pages/blog/[slug].astro`.

## Commands

```bash
npm run dev        # astro dev → http://localhost:4321
npm run build      # static output → dist/
npm run preview    # serve dist/ untuk sanity check
npm run astro      # CLI astro (mis. astro add)
```

Tidak ada lint terpisah. Format mengikuti konvensi saja.

## Layout (source of truth)

```
src/
├── content/
│   ├── parts/*.md          # 548 produk (collection "parts")
│   ├── blog/*.md           # 59 artikel (collection "blogs")
│   ├── areas/*.md          # 49 area layanan (collection "areas")
│   └── jual/*.md           # 5 penawaran jual (collection "jual")
├── content.config.ts       # Zod schema semua collection
├── lib/
│   ├── data.ts             # getAllData(): baca collection + kategori/manufacturer + shuffle()
│   └── export-to-md.js     # Script migrasi Google Apps Script → MD (dijalankan manual)
├── components/
│   ├── ContactPopup.astro  # Popup kontak (delay + batas tampil)
│   ├── MobileNav.astro     # Tab bar navigasi bawah untuk mobile
│   ├── Footer.astro        # Footer global (3 kolom + copyright)
│   ├── layout/Footer.astro # Duplikat footer (nama file sama di folder beda)
│   ├── seo/JsonLd.astro
│   └── Welcome.astro
├── layouts/
│   └── Layout.astro        # <head> + header + mobile menu + slot + Footer
├── pages/
│   ├── index.astro         # Homepage (hero, kategori, brand, produk, artikel, CTA)
│   ├── blog.astro          # Listing blog (sort date desc)
│   ├── blog/[slug].astro   # Detail blog
│   ├── latest-products.astro # Listing semua produk
│   ├── products.astro      # Listing kategori
│   ├── manufacturers.astro # Listing brand
│   ├── part/[slug].astro   # Detail produk + related parts
│   ├── area/[slug].astro   # Detail area
│   ├── jual/[slug].astro   # Detail jual
│   ├── jual-komponen.astro # Listing jual
│   ├── ca/[slug].astro     # Arsip kategori (filter part)
│   ├── ma/[slug].astro     # Arsip produsen (filter part)
│   └── sitemap.xml.js      # Auto-generate sitemap
└── styles/
    └── global.css          # Tailwind v4 + CSS vars + utilitas premium
```

## Struktur Permalink (KRITIS — jangan diubah)

| Tipe Halaman | URL | Path File Astro | Sumber Data |
| :--- | :--- | :--- | :--- |
| Homepage | `/` | `src/pages/index.astro` | collection parts + blogs |
| Arsip Blog | `/blog/` | `src/pages/blog.astro` | collection blogs |
| Single Blog | `/blog/[slug]/` | `src/pages/blog/[slug].astro` | collection blogs |
| Manufacturers | `/manufacturers/` | `src/pages/manufacturers.astro` | turunan dari parts |
| Categories | `/products/` | `src/pages/products.astro` | turunan dari parts |
| Single Product | `/part/[slug]/` | `src/pages/part/[slug].astro` | collection parts |
| Single Area | `/area/[slug]/` | `src/pages/area/[slug].astro` | collection areas |
| Single Jual | `/jual/[slug]/` | `src/pages/jual/[slug].astro` | collection jual |
| Arsip Kategori | `/ca/[slug]/` | `src/pages/ca/[slug].astro` | filter parts |
| Arsip Produsen | `/ma/[slug]/` | `src/pages/ma/[slug].astro` | filter parts |

Menjaga struktur ini menjadi prioritas utama: mengubah path/slug = 404 = penurunan peringkat Google.

## Frontmatter Schema (lihat `src/content.config.ts`)

**Parts** (`src/content/parts/*.md`):
```yaml
---
title: "Part Number"
slug: "slug-url"
category: "Kategori"
manufacturer: "Produsen"
fifu_image_url: "https://...gambar"
pendahuluan: |-
  <p>tulisan pembuka</p>
spesifikasi: |-
  <h2>Spesifikasi Produk</h2><table>...</table>
penjelasan_spesifikasi: |-
  <p>...</p>
aplikasi_dalam_industri: |-
  <p>...</p>
penutup: |-
  <p>...</p>
published: true
---
```

**Blogs** (`src/content/blog/*.md`): `title`, `slug`, `long_title`, `date` (ISO string), `kategori`, `fifu_image_url`, `pendahuluan` (teks polos pembuka, dirender di atas CTA), dengan isi artikel dalam format Markdown murni di body file.

**Areas** (`src/content/areas/*.md`): `title`, `slug` (nama area/kota), `date`, `kategori`, dan field konten kosong (belum diisi di sumber lama).

**Jual** (`src/content/jual/*.md`): `title`, `slug`, `long_title`, `date`, `kategori`, `fifu_image_url`, `pendahuluan`, `content` (HTML), `kesimpulan`.

Semua nilai string dalam frontmatter menggunakan block scalar `|-` (aman untuk HTML/kutip/baris baru).

## Navbar Global (di `layouts/Layout.astro`)

Menu desktop: `Products` (`/products`), `Manufacturers` (`/manufacturers`), `Blog` (`/blog`), `Request Quote` → WhatsApp.
Menu mobile: sidebar slide-in (tombol hamburger) dengan item yang sama.

## JSON-LD Schema per halaman

- **Homepage** (`index.astro`): `@graph` berisi `WebSite` + `LocalBusiness` (Batam). Lokasi: Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai, Batam, Kepulauan Riau 29431, telp +628126826672.
- **Part Detail** (`part/[slug].astro`): `Product` + brand + `Offer` (price "0" placeholder, InStock).
- **Blog Detail**: `Article` (author "Ressiana", publisher Alfa Elektrindo) + datePublished.
- **Area Detail**: `LocalBusiness` dengan `areaServed` nama kota.
- **Jual**: `Article`/`Product`.

## Konvensi Konten

- **Homepage**: hero + CTA "Eksplorasi Produk" + "Konsultasi Gratis"; Kategori Terpopuler (10), Brand Terkemuka (8), Produk Unggulan (30 acak via `shuffle`), Wawasan Industri (10 blog terbaru), CTA WhatsApp/telpon.
- **Semua user-facing copy** dalam Bahasa Indonesia. Field schema/JSON-LD tetap bahasa Inggris.
- **Tidak ada emoji** di kode maupun konten.
- **Brand colors**: primary putih `#FFFFFF`, aksen biru elektrik `#007aff`.
- **Gambar**: `fifu_image_url` adalah URL absolut (dari sumber lama) — pertahankan. `loading="lazy"` + alt dinamis dari judul.

## Footer Global

3 kolom:
- **Customer Service**: Telp 0812-682-6672, WA + mail@elektrindo.co.id, alamat Batam.
- **Company**: About Us, Contact Us, Privacy Policy, Terms, Cookie Policy.
- **Resources**: Products, Manufacturers, Latest Products, Blog, Jual Komponen.
- Copyright: `Copyright ©2026 CV. Alfa Elektrindo. Alfa Elektrindo adalah Penyalur komponen elektronik untuk Industri dan Pabrikasi yang berkantor di Batam, Indonesia.`

## Gotchas

- **Dua footer**: `src/components/Footer.astro` (dipakai Layout) dan `src/components/layout/Footer.astro` (duplikat). Default gunakan yang di `components/`.
- **Empty fields**: Frontmatter boleh kosong (block scalar hanya untuk field terisi). Komponen harus handle fallback (mis. `fifu_image_url` → `/placeholder-product.png`, `spesifikasi` → `content`).
- **Konten HTML**: selalu embed lewat `set:html`. Jangan rebuild ulang HTML di Astro.
- **String angka**: parser YAML membaca `title: 1058165` sebagai number — schema Zod pakai `z.coerce.string()` supaya aman. Jangan mengubahnya.
- **`getAllData()` di `data.ts`** dipanggil beberapa kali dalam satu build (tiap halaman). Aman karena koleksi di-cache oleh Astro.
- **Kategori/manufacturer kosong**: guard `(value || '').toLowerCase()` tersedia di komponen untuk menghindari TypeError.
- **`dist/` dan `node_modules/`** adalah output build — jangan diedit.
- **Migrasi ulang dari GS**: `node src/lib/export-to-md.js` menimpa file MD. Pastikan tidak ada perubahan manual yang terbuang sebelum menjalankan ulang.

## Menambah / Mengubah Konten

1. **Produk baru**: copy file MD di `src/content/parts/`, ubah `title`/`slug`/isi, sesuaikan nama file = slug.
2. **Artikel blog**: buat `src/content/blog/<slug>.md` mengikuti frontmatter schema, tulis isi artikel sebagai Markdown murni di body file (body dirender via `render()` → `<Content />` di `blog/[slug].astro`).
3. **Area baru**: buat `src/content/areas/<slug>.md`.
4. **Jual**: buat `src/content/jual/<slug>.md`.
5. Build & verifikasi: `npm run build`.
6. Update `SUMBER-PENGETAHUAN.md` (bagian Insight) sesuai konvensi.

## Deployment

Static-only. Build = `npm run build` → `dist/`. Host apa pun yang serve `dist/`. Sitemap auto-generate via `src/pages/sitemap.xml.js`.