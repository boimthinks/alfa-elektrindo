# MASTER INSTRUCTIONS: Astro SSG Migration for Alfa Elektrindo

## 1. Konteks Proyek & Identitas Visual
- **Domain:** https://alfa.elektrindo.co.id/
- **Brand:** CV. Alfa Elektrindo (Supplier Komponen Elektronik)
- **Tujuan:** Migrasi penuh dari WordPress ke Astro Static Site Generator (SSG).
- **Tema Visual:** Dominan Putih (#FFFFFF) dengan aksen Biru Elektrik (#007aff).
- **Integritas SEO:** Wajib mempertahankan struktur permalink asli untuk mencegah penurunan peringkat Google.

## 2. Struktur Folder & Pemetaan Permalink (Kritis)
Pastikan file `.astro` berada pada path berikut untuk menjaga URL:

| Tipe Halaman | URL Asli | Path File Astro |
| :--- | :--- | :--- |
| **Homepage** | `/` | `src/pages/index.astro` |
| **Arsip Blog** | `/blog/` | `src/pages/blog.astro` |
| **Manufacturers** | `/manufacturers/` | `src/pages/manufacturers.astro` |
| **Categories** | `/products/` | `src/pages/products.astro` |
| **Single Product** | `/part/[slug]/` | `src/pages/part/[slug].astro` |
| **Single Blog** | `/blog/[slug]/` | `src/pages/blog/[slug].astro` |
| **Single Area** | `/area/[slug]/` | `src/pages/area/[slug].astro` |
| **Single Jual** | `/jual/[slug]/` | `src/pages/jual/[slug].astro` |
| **Arsip Kategori** | `/ca/[slug]/` | `src/pages/ca/[slug].astro` |
| **Arsip Produsen** | `/ma/[slug]/` | `src/pages/ma/[slug].astro` |


## 3. Detail Konten Homepage (`index.astro`)
Replikasi struktur dan teks berikut secara tepat:

- **Hero Section:**
  - **H1:** Supplier Komponen Elektronik
  - **Paragraph:** "Cari Dan Temukan Produk Komponen Elektronik Industri Dan Pabrikasi, Bahkan Komponen Usang Ataupun Komponen Elektronik Yang Sulit Ditemukan."
- **Section Kategori (H2):** "Popular Categories" -> Tampilkan 10 list kategori populer.
- **Section Brand (H2):** "Popular Manufacturers" -> Tampilkan 8 list brand populer.
- **Section Produk (H2):** "Product Komponen Elektronik"
  - **Deskripsi:** "Kami memiliki berbagai produk komponen elektronika dan spare part elektronik untuk memenuhi berbagai kebutuhan. Produk-produk kami mencakup, namun tidak terbatas pada: Komponen Elektronika Industri, Pabrikasi Elektronik, dan Komponen Usang..."
  - **Grid:** Tampilkan 30 produk secara acak (shuffle) dari database saat build.
- **Section Artikel (H2):** "Artikel" -> Tampilkan 10 daftar blog terbaru.
- **Call to Action (CTA):** "Jika Komponen Elektronik yang sedang Anda butuhkan tidak dapat Anda temukan pada halaman ini, pertimbangkan untuk langsung menghubungi kami. melalui Telpon, WhatsApp ataupun Email."

## 4. Struktur Footer Global
Wajib ada di setiap halaman dengan layout:
- **CUSTOMER SERVICE:**
  - Telp: 0812-682-6672
  - Link: WhatsApp, mail@elektrindo.co.id
  - Alamat: Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai - Batam Kota Batam - Kepri 29431
- **COMPANY:** About Us, Contact Us, Privacy Policy, Terms, Cookie Policy.
- **RESOURCES:** Products, Manufacturers, Latest Products, Blog, Jual Komponen.
- **Copyright:** "Copyright ©2026 CV. Alfa Elektrindo. Alfa Elektrindo adalah Penyalur komponen elektronik untuk Industri dan Pabrikasi yang berkantor di Batam, Indonesia."

## 5. Standar Teknis & SEO
- **Framework:** Astro (SSG Mode).
- **CSS:** Tailwind CSS (Gunakan warna aksen `#007aff` untuk button dan link).
- **JSON-LD Schema:** - Home: WebSite, Organization, LocalBusiness (Batam), Sitelinks Searchbox.
  - Product: Product, BreadcrumbList.
  - Blog: Article, BreadcrumbList.
- **Data Fetching:** Gunakan `getStaticPaths()` untuk menarik data dari Google Sheets API (tab: part, blog, area, jual).
- **Rendering:** Gunakan direktif `set:html` untuk konten yang mengandung tabel HTML dari database.
- **Optimasi:** Gambar wajib `loading="lazy"` dan teks `alt` dinamis sesuai judul produk/artikel.