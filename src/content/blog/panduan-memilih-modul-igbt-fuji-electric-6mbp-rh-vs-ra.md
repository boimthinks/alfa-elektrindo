---
title: "Panduan Modul IGBT Fuji 6MBP"
slug: "panduan-memilih-modul-igbt-fuji-electric-6mbp-rh-vs-ra"
long_title: "Panduan Memilih Modul IGBT Fuji Electric 6MBP RH dan RA"
date: "2026-11-14T08:00:00.000Z"
kategori: "Blog"
fifu_image_url: "/img/panduan-memilih-modul-igbt-fuji-electric-6mbp-rh-vs-ra_poco.webp"
pendahuluan: "Panduan teknis memilih modul IGBT Fuji Electric 6MBP seri RH dan RA, mulai dari rating arus, proteksi overcurrent, paket P617 dan P610, torsi mounting, sampai pilihan seri."
meta_description: "Panduan teknis modul IGBT Fuji Electric 6MBP seri RH dan RA, dari rating arus dan proteksi overcurrent sampai torsi mounting, agar memilih seri untuk inverter."
img_prompt: "Close-up industrial photograph of a Fuji Electric 6MBP intelligent power module with white ceramic housing and copper terminals mounted on an aluminium heatsink inside an open industrial inverter panel, warm workshop lighting, realistic photography."
---

Pompa proses di sebuah terminal batam biasanya hanya berhenti sebentar sebelum kembali normal, tiba-tiba berubah menjadi penghentian produksi dua shift penuh. Panel inverter di ruang kendali menampilkan kode alarm overcurrent pada lengan atas modul, sementara motor penggerak pompa sedang berada pada fase start-up. Modul baru yang diambil dari gudang tidak menyelesaikan masalah, karena alarm muncul lagi di minggu kedua.

Kasus seperti ini sering berakar pada satu hal yang dianggap sepele: memilih modul yang salah untuk kondisi kerja yang ada. Di pasar, kode 6MBP Fuji Electric terbaca sebagai satu keluarga produk, padahal di balik kode tersebut ada dua platform dengan karakter proteksi, dimensi, dan kebutuhan heatsink yang sangat berbeda. Seri RH dan seri RA sama-sama disebut R-IPM dan sama-sama berada di kelas tegangan 600 V, tetapi keduanya tidak bisa diperlakukan sebagai pengganti satu sama lain.

Artikel ini membandingkan kedua seri berdasarkan datasheet resmi Fuji Electric, lalu memetakan pilihan tersebut ke part yang tersedia di katalog Alfa Elektrindo. Tujuannya agar teknisi dapat memutuskan seri mana yang layak dibeli sebelum barang diterima, bukan setelah.

## Mengapa IPM Menggantikan Susunan Diskret pada Inverter Modern

Sebelum R-IPM populer, inverter motor industri disusun dari komponen diskret: enam IGBT terpisah, enam dioda freewheeling, satu driver gate eksternal, dan rangkaian deteksi overcurrent yang biasanya dibuat dari resistor shunt ditambah komparator. Rangkaian seperti itu bekerja, tetapi setiap titik sambungan menjadi calon titik gagal. Kabel driver yang panjang memperbesar tunda propagasi gate, dan heatsink harus dirancang untuk enam chip terpisah sekaligus.

Intelligent Power Module memindahkan enam sakelar IGBT, enam dioda, driver terisolasi, dan logika proteksi ke dalam satu paket. Rangkaian driver diletakkan sedekat mungkin dengan chip, sehingga tunda propagasi gate hanya beberapa mikrodetik dan tidak lagi bergantung pada panjang kabel PCB. Yang lebih penting, proteksi overcurrent bekerja di dalam modul, bukan di luar, sehingga waktu deteksi terukur dalam mikrodetik dan tidak melemah oleh derau kabel.

Konsekuensi praktisnya, satu modul 6 in 1 menggantikan satu blok dari tiga puluh sampai empat puluh komponen diskret. Bagi teknisi yang sebelumnya sibuk menghadapi dua board gate driver, kondisi ini berubah menjadi satu modul dengan dua konektor sinyal dan beberapa terminal daya. Daftar lengkap kategori [IGBT Modules](/ca/igbt-modules/) di katalog menunjukkan seberapa banyak pilihan yang harus ditapis ketika mengganti unit.

## Membaca Kode 6MBP Fuji Electric

Kode part Fuji Electric dibaca dari belakang. Prefix 6MBP menandai paket 6 in 1, tiga huruf di tengah menandai platform, tiga digit terakhir menyatakan rating arus, dan dua digit terakhir menyatakan kelas tegangan. Jadi 6MBP30RH060 berarti paket 6 in 1, platform RH, arus 30 A, dan kelas 600 V.

Platform RH adalah generasi keempat R-IPM dengan badan modul kecil. Platform RA adalah platform yang lebih besar dan lebih berat, dengan satu fitur proteksi tambahan yang tidak dimiliki seri RH, yaitu deteksi overheat pada case modul.

Kelas 600 V di sini perlu dibaca dengan hati-hati. Angka 600 V adalah tegangan kolektor-emitter, bukan tegangan kerja bus DC. Untuk platform RH, datasheet menetapkan tegangan bus DC maksimum 450 V dengan lonjakan 500 V dan kondisi short operating 400 V.

Platform RA punya angka yang sama, yaitu bus DC maksimum 450 V dengan lonjakan 500 V dan rentang short operating 200 sampai 400 V. Artinya keduanya tidak bisa dipasang pada bus DC 500 V.

## Perbedaan Teknis Seri RH dan Seri RA

| Aspek | Seri RH | Seri RA |
| :--- | :--- | :--- |
| Kapasitas arus | 15 A, 20 A, 30 A | 50 A, 75 A, 100 A |
| Paket | P617 | P610 dan P611 |
| Massa modul | 50 gram | 440 gram |
| Output alarm | Lengan bawah saja | Lengan atas dan lengan bawah |
| Proteksi overheat case | Tidak ada | TcOH 110 °C sampai 125 °C |
| Tegangan bus DC | 450 V, surge 500 V | 450 V, surge 500 V |
| Torsi baut mounting | M4, 2,0 N·m | M5, 2,5 N·m sampai 3,0 N·m |
| Frekuensi switching | Tipikal 1 kHz sampai 20 kHz | 1 kHz sampai 20 kHz |
| Daya dissipasi per elemen | 40 W sampai 85 W | 198 W sampai 400 W |
| Resistansi termal j-c IGBT | 1,47 °C/W pada varian 30 A | 0,63 °C/W pada varian 50 A |
| Part di katalog | 6MBP15RH060, 6MBP30RH060 | 6MBP50RA060, 6MBP75RA060, 6MBP100RA060 |

Selisih paling menentukan ada pada baris alarm. Platform RA menyalakan output alarm pada kedua lengan, sehingga teknisi bisa membedakan apakah hubung singkat terjadi pada sisi atas atau sisi bawah modul saat membaca log drive. Platform RH hanya menyediakan alarm pada lengan bawah, sehingga informasi lokasi gangguan lebih terbatas.

Perbedaan kedua adalah termal. Daya dissipasi platform RA jauh lebih tinggi, dari 198 W per elemen pada varian 50 A sampai 400 W per elemen pada varian 100 A. Pada 100 A dengan enam elemen aktif, total panas yang dibuang modul mendekati 2,4 kW. Heatsink yang memadai untuk seri RH berbobot 50 gram tidak akan pernah cukup untuk seri RA berbobot 440 gram.

### Angka Proteksi yang Menentukan Perilaku Modul

Proteksi overcurrent pada platform RH bekerja dengan ambang tetap. Untuk [6MBP15RH060](/part/6mbp15rh060/), ambangnya adalah 21 A minimum, 27 A tipikal, dan 33 A maksimum dengan waktu deteksi tDOC 5,0 µs tipikal dan 7,0 µs maksimum. Untuk [6MBP30RH060](/part/6mbp30rh060/), ambangnya naik menjadi 44 A minimum, 54 A tipikal, dan 64 A maksimum dengan tDOC 5,0 µs tipikal. Resistansi deteksi overcurrent pada varian 30 A tercatat 3,7 mΩ.

Platform RA bekerja dengan prinsip berbeda. Pada [6MBP50RA060](/part/6mbp50ra060/), ambang overcurrent 75 A minimum pada Tj 125 °C, dengan tDOC tipikal 10 µs dan tSC maksimum 12 µs. Varian [6MBP75RA060](/part/6mbp75ra060/) memakai ambang 113 A minimum, sedangkan [6MBP100RA060](/part/6mbp100ra060/) memakai 150 A minimum dengan daya dissipasi 400 W per elemen. Rasio ambang terhadap arus nominal di seri RA ini mendekati 1,5 kali, sehingga margin terhadap inrush motor besar jauh lebih longgar.

Dua konsekuensi praktis. Pertama, seri RH lebih cepat dan lebih sensitif, sehingga cocok untuk motor kecil dengan inrush rendah seperti spindle CNC dan kompresor. Kedua, seri RA lebih reluctant untuk trip, sehingga cocok untuk motor besar dengan arus start tinggi seperti crusher, mixer, dan hoist.

Proteksi undervoltage juga hadir di kedua platform pada rentang 11,0 V sampai 12,5 V. Proteksi overheat chip IGBT ada di keduanya dengan batas 150 °C dan histeresis 20 °C. Bedanya hanya seri RA yang juga memantau suhu case modul melalui TcOH pada 110 °C minimum sampai 125 °C maksimum dengan histeresis 20 °C.

## Panduan Pemasangan Modul 6MBP pada Inverter

### Memasang Seri RH pada Inverter Kelas Kecil

Paket P617 berukuran mungil, hanya 50 gram, dengan baut mounting M4 dan torsi 2,0 N·m. Terminal sinyal cukup dikencangkan 1,3 N·m sampai 1,7 N·m. Karena ringan, modul ini bisa dipasang pada heatsink dengan sirip relatif sederhana dan mudah dirakit di workshop.

Heatsink harus menyentuh seluruh permukaan dasar modul. Ketidakrataan permukaan atau pasta termal yang terlalu tebal akan membuat sebagian chip tidak tersentuh pasta, dan titik panas lokal seperti itu cepat menua lalu memicu alarm overcurrent meskipun suhu rata-rata terlihat normal.

Untuk [6MBP20RH060](/part/6mbp20rh060/), daya dissipasi 40 W per elemen berarti total pelepasan panas modul sekitar 240 W pada beban penuh. Pada varian 30 A, daya per elemen 85 W membuat total panas modul mendekati 510 W, sehingga heatsink wajib jauh lebih besar dibanding varian 15 A meski badannya identik.

### Memasang Seri RA pada Inverter Kelas Besar

Seri RA memakai paket P610 pada varian 50 A dan 75 A, serta P611 pada varian 100 A. Bobot 440 gram per modul mengubah perhitungan secara fundamental, karena titik mounting bukan lagi sekadar dudukan melainkan struktur yang ikut memikul beban dan getaran.

Torsi baut M5 adalah 2,5 N·m sampai 3,0 N·m dengan nilai acuan datasheet 3,5 N·m. Baut yang dikencangkan berlebihan pada modul-modul heatsink besar bisa menekan case dan memicu retak kecil pada jalur keramik, sedangkan baut yang kendur memicu getaran dan kegagalan terminal. Setiap baut sebaiknya dikencangkan dengan torque wrench, bukan obeng.

Frekuensi switching yang diperbolehkan 1 kHz sampai 20 kHz. Ini bukan angka pemasaran, melainkan batas yang harus dipenuhi saat mengatur parameter PWM di inverter. Bila setting carrier frequency keluar dari rentang ini, losses switching naik tajam, heatsink cepat jenuh, dan umur modul memendek.

Proteksi TcOH seri RA bekerja pada ambang 110 °C minimum sampai 125 °C maksimum dengan histeresis 20 °C. Artinya modul harus didinginkan sampai turun 20 °C di bawah ambang sebelum alarm dilepas. Kalau sistem hanya bereaksi dengan mematikan inverter begitu alarm berbunyi, setiap overheat menjadi penghentian mesin penuh. Integrasi TcOH ke logika drive membuat sistem bisa menurunkan beban lebih dulu dan baru menghentikan mesin bila suhu tidak turun.

## Kapan Memilih 6MBP, 2MBI, atau 6DI

Fuji Electric punya beberapa keluarga modul daya, dan memilih keluarga yang keliru berarti boros biaya atau sebaliknya kapasitas tidak tercapai. Perbandingan singkat berikut membantu memutuskan.

| Kebutuhan | Modul yang tepat | Alasan |
| :--- | :--- | :--- |
| Inverter 600 V 5 kW sampai 15 kW dengan proteksi onboard | Seri 6MBP RH | IPM 6 in 1, ringan, proteksi cepat |
| Inverter 600 V 20 kW sampai 110 kW dengan alarm ganda | Seri 6MBP RA | TcOH, IOC longgar, daya besar |
| Penggerak motor besar dengan heatsink sendiri dan proteksi eksternal | Seri 2MBI | [2MBI300U2B-060-50](/part/i2mbi150va-060-50/) IGBT 2 in 1, 300 A kontinu |
| Rectifier bridge daya besar | Seri 6DI | [6DI75A-050](/part/a6di75a-050/) 6-pack 500 V, hFE min 100, case M603 |
| Modul IGBT kelas 300 A pada inverter besar | Seri 2MBI | [A50L-0001-0338](/part/a50l-0001-0338/) setara 2MBI300TA-060, 300 A kontinu |

Kelompok 2MBI adalah IGBT 2 in 1, artinya satu modul berisi dua sakelar IGBT dan dua dioda freewheeling. Modul [A50L-0001-0338](/part/a50l-0001-0338/) yang setara 2MBI300TA-060 memiliki daya dissipasi 860 W per device dan resistansi termal j-c IGBT 0,145 °C/W, dengan tegangan jenuh terminal 2,45 V maksimum pada arus 300 A. Varian [2MBI300U2B-060-50](/part/i2mbi150va-060-50/) sedikit lebih ringan secara termal, dengan dissipasi 1000 W per device dan Rth(j-c) IGBT 0,125 °C/W.

Kelompok 6DI adalah modul dioda tiga fasa enam pack, bukan IGBT sama sekali. [6DI75A-050](/part/a6di75a-050/) menjadi pilihan untuk rectifier bridge di sisi DC-link, sedangkan [6DI120A-060](/part/a50l-0001-0175-m-fuji/) menjadi versi 600 V untuk kebutuhan daya lebih besar. Mengganti IPM dengan diode module atau sebaliknya adalah kesalahan fatal karena fungsi topologinya tidak sama.

## Kesalahan Umum yang Terjadi di Lapangan

Kesalahan pertama adalah menyamakan seri RH dan RA karena keduanya bertulis 6MBP. Modul 100 A tidak muat di soket heatsink seri RH, dan driver yang terpasang di board lama kemungkinan tidak kompatibel dengan pinout dan level alarm kedua platform.

Kesalahan kedua adalah mengabaikan berat modul saat merancang dudukan. Modul RA 440 gram yang digantung tanpa dudukan heatsink yang benar akan bergoyang lama-lama, dan pada akhirnya terminal pecah.

Kesalahan ketiga adalah menyamakan alarm overcurrent dengan kerusakan modul. Alarm pada lengan atas menandakan hubung singkat sisi output, sedangkan pada lengan bawah menandakan hubung singkat sisi DC. Keduanya sering berakar dari motor atau kabel, bukan dari modul itu sendiri. Mengganti modul berulang tanpa memeriksa kabel motor hanya menghasilkan unit baru yang akan trip lagi.

Kesalahan keempat adalah mengabaikan setting PWM. Batas 1 kHz sampai 20 kHz pada seri RA sering terlanggar saat teknisi menaikkan carrier frequency untuk mengurangi derau motor tanpa mengecek konsekuensi termal.

## Checklist Sebelum Memesan Modul 6MBP

- Catat arus motor, bukan arus inverter. Motor 7,5 kW dengan faktor daya 0,85 dan efisiensi 0,9 berada di kisaran arus line 12 sampai 13 A, sehingga modul 15 A RH sudah cukup dengan margin yang wajar.
- Tentukan posisi alarm yang dibutuhkan. Bila sistem drive hanya punya satu input fault, seri RH masih cukup. Bila perlu membedakan sisi atas dan sisi bawah, seri RA wajib.
- Periksa bus DC. Rated 450 V, dan lonjakan 500 V bukan nilai yang boleh dipakai terus-menerus.
- Hitung daya dissipasi panas dengan Pc per elemen dikali enam, lalu pilih heatsink berdasarkan Rth(j-c) dan Rth(c-f) yang tertera.
- Siapkan torque wrench untuk baut M4 2,0 N·m pada seri RH dan M5 2,5 sampai 3,0 N·m pada seri RA.
- Verifikasi rating terminal driver dan level VCC 15 V, dengan rentang 13,5 V sampai 16,5 V pada seri RA.
- Siapkan pasta termal dan terapkan 50 sampai 100 µm merata di seluruh permukaan dasar modul.

Enam part 6MBP Fuji Electric kini tersedia di katalog Alfa Elektrindo, yaitu [6MBP15RH060](/part/6mbp15rh060/), [6MBP20RH060](/part/6mbp20rh060/), [6MBP30RH060](/part/6mbp30rh060/), [6MBP50RA060](/part/6mbp50ra060/), [6MBP75RA060](/part/6mbp75ra060/), dan [6MBP100RA060](/part/6mbp100ra060/). Seluruh part ini bisa dilihat pada halaman brand [Fuji Electric](/ma/fuji-electric/) bersama modul 2MBI dan 6DI untuk kebutuhan rectifier dan penggerak yang lebih besar.

Kalau Anda sedang menentukan modul pengganti untuk inverter yang ada, kirimkan data motor, tegangan bus DC, dan kode alarm yang muncul. Tim CV. Alfa Elektrindo Batam akan membantu pencocokan seri, paket, dan ukuran heatsink yang sesuai sebelum pesanan dikirim. Hubungi WhatsApp 0812-682-6672 atau email mail@elektrindo.co.id untuk ketersediaan stok dan penawaran terbaru.
