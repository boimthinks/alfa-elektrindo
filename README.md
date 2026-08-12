# Alfa Elektrindo

Situs resmi **CV. Alfa Elektrindo**, penyalur komponen elektronik industri dan pabrikasi yang berkantor di Batam, Kepulauan Riau.

Website: https://alfa.elektrindo.co.id

## Tentang

CV. Alfa Elektrindo membantu industri dan pabrikasi menemukan komponen elektronik yang tepat, termasuk komponen usang (obsolete) dan sulit ditemukan di pasaran. Fokus utama kami adalah komponen untuk lini produksi: microcontroller I/O, sensor industri, modul daya (IGBT, thyristor, dioda), fuse, relay, hingga motor drive dan servo.

Katalog kami mencakup lebih dari 500 produk dengan berbagai merek ternama seperti Infineon, Eaton Bussmann, Semikron, Siemens, Omron, Mitsubishi Electric, dan lainnya.

### Layanan

- Penyaluran komponen elektronik industri dan pabrikasi
- Pengadaan komponen usang dan sulit ditemukan
- Konsultasi pemilihan komponen sesuai spesifikasi teknis
- Layanan pengiriman ke seluruh Kepulauan Riau dan sekitarnya

### Kontak

- WhatsApp / Telepon: 0812-682-6672
- Email: mail@elektrindo.co.id
- Alamat: Jln. Jend Sudirman Komp. Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai, Batam Kota, Batam, Kepulauan Riau 29431

## Teknologi

- [Astro](https://astro.build) static site generator
- Tailwind CSS v4
- TypeScript strict
- Content Collections (Markdown) sebagai sumber data
- JSON-LD structured data untuk SEO

## Fitur Situs

- Katalog produk lengkap dengan detail spesifikasi
- Arsip kategori dan produsen
- Blog industri dengan artikel teknik dan SEO
- Halaman area layanan
- Auto-generated sitemap
- Tautan Request Quote via WhatsApp

## Struktur Proyek

```text
/
├── public/
├── scripts/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── parts/       # Katalog produk (Markdown)
│   │   ├── blog/        # Artikel blog (Markdown)
│   │   ├── areas/       # Area layanan (Markdown)
│   │   └── jual/        # Penawaran jual (Markdown)
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
└── package.json
```

## Perintah

```bash
npm install        # Instal dependensi
npm run dev        # Jalankan dev server di localhost:4321
npm run build      # Build produksi ke ./dist/
npm run preview    # Preview hasil build secara lokal
npm run astro      # CLI Astro (mis. astro add)
```

## Lisensi

Seluruh konten dan aset merupakan milik CV. Alfa Elektrindo.
