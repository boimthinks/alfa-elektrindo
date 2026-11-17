---
title: "Cara Membaca Kode Thyristor KP dan Memilih Kapsul yang Tepat"
slug: "cara-membaca-kode-thyristor-kp-dan-memilih-kapsul"
long_title: "Cara Membaca Kode Thyristor KP dan Memilih Kapsul yang Tepat"
date: "2026-11-17T08:00:00.000Z"
kategori: "Blog"
fifu_image_url: "/img/cara-membaca-kode-thyristor-kp-dan-memilih-kapsul_poco.webp"
meta_description: "Panduan membaca kode thyristor KP: arti angka arus dan tegangan, kecocokan kapsul dengan klem, serta koordinasi sekring aR agar penggantian tidak gagal lagi."
img_prompt: "Industrial technician measuring a disc thyristor capsule with a caliper next to a heatsink clamp, power rectifier panel in background, realistic workshop photography, no text."
pendahuluan: "Panduan membaca kode thyristor kapsul KP, dari arti angka arus dan kode tegangan sampai kecocokan outline dengan klem heatsink, agar penggantian tidak berakhir dengan kapsul retak."
---

Penggantian thyristor di penyearah daya besar sering berakhir dengan kegagalan yang sama seperti sebelumnya. Teknisi memesan tipe yang sama persis, memasangnya, lalu kapsul retak atau terbakar dalam beberapa jam operasi. Pada umumnya masalahnya bukan pada tipe komponen, melainkan pada cara kode part dibaca dan pada kecocokan mekanis kapsul dengan klem.

Thyristor kapsul tidak punya terminal solder. Arus utama lewat melalui dua permukaan logam yang dijepit di antara heatsink, sehingga seluruh jalur arus dan jalur panas bergantung pada tekanan mekanis yang benar. Artikel ini membahas cara membaca kode KP, menentukan kelas arus dari kondisi pendinginan nyata, dan mencocokkan kapsul dengan klem yang tersedia.

## Kasus yang Berulang di Lapangan

Sebuah penyearah tiga fasa di lini pelapisan logam kehilangan satu lengan setelah bertahun-tahun beroperasi. Thyristor pengganti dipesan dengan nomor yang terbaca pada kapsul lama. Saat dipasang, arus awal normal dan suhu naik perlahan. Sekitar satu shift kemudian kapsul yang baru ikut gagal, kali ini dengan retakan pada wafer.

Penyebabnya biasanya salah satu dari tiga hal. Pertama, kelas tegangan tidak sesuai dengan kondisi jaringan. Kedua, arus rata-rata dihitung pada pendinginan dua sisi padahal di panel hanya satu sisi yang benar-benar menempel pada pelat dingin. Ketiga, kapsul pengganti lebih besar atau lebih kecil dari klem yang tersedia sehingga tekanannya tidak merata.

Ketiganya bisa dicegah jika kode KP dibaca dengan benar sebelum pemesanan.

## Membaca Kode KP Bagian demi Bagian

Kode thyristor kapsul umumnya berbentuk tiga bagian: huruf KP, angka arus, dan kode tegangan. Contohnya KP500-16.

Huruf KP menandakan thyristor kontrol fase tipe kapsul atau press-pack. Varian KK dengan huruf K kedua adalah thyristor fast switching untuk aplikasi frekuensi tinggi, dan keduanya tidak saling menggantikan pada rangkaian yang sama.

Angka di tengah adalah arus rata-rata maju dalam ampere, bukan arus puncak dan bukan arus RMS. Angka ini berlaku pada suhu heatsink 55 derajat Celsius dengan pendinginan dua sisi. Produsen kadang menambahkan huruf A setelah angka arus, sehingga KP500 dan KP500A merujuk kelas yang sama.

Dua digit terakhir adalah kode tegangan. Nilainya dikalikan 100 untuk memperoleh tegangan balik berulang atau VRRM. Kode 16 berarti 1600 volt, kode 18 berarti 1800 volt, dan kode 24 berarti 2400 volt.

Cara membaca ini penting karena dua part yang huruf dan angka arusnya sama bisa berbeda kelas tegangan. Menukar KP500-16 dengan KP500-18 tidak berbahaya, tetapi menukar KP500-18 dengan KP500-12 pada jaringan 400 volt bisa menyebabkan kegagalan berulang.

## Menentukan Kelas Arus dari Suhu Heatsink Nyata

Angka arus pada kode KP diukur pada satu titik acuan yang ketat. Bila kondisi di panel berbeda, kemampuan arus sebenarnya turun dan angka pada label tidak lagi berlaku.

| Parameter | Nilai acuan | Konsekuensi di lapangan |
| :--- | :--- | :--- |
| Suhu heatsink | 55 derajat Celsius | Di atas nilai ini arus harus diturunkan mengikuti kurva derating |
| Sisi pendinginan | Dua sisi | Pendinginan satu sisi memangkas kemampuan arus secara signifikan |
| Suhu junction | Maksimum 125 derajat Celsius | Batas keras yang tidak boleh dilampaui sesaat pun |

Langkah praktisnya dimulai dari daya buang, bukan dari arus. Hitung rugi daya thyristor pada arus operasi memakai tegangan jatuh on-state, lalu kalikan jumlah thyristor dalam satu lengan konverter. Angka itu dibandingkan dengan kemampuan heatsink dan aliran udara atau air yang tersedia.

Jika hasil perhitungan menunjukkan daya buang di atas kapasitas heatsink, solusinya menaikkan kelas arus satu tingkat, misalnya dari KP500 ke KP800, bukan menambah kipas pada heatsink yang sudah jenuh. Kapsul yang lebih besar memiliki resistansi termal lebih rendah sehingga membuang panas lebih efisien pada tekanan klem yang sama.

Resistansi termal junction ke heatsink untuk kelima tipe di katalog kami berkisar antara 0,055 dan 0,017 derajat Celsius per watt. Selisih sekecil itu berdampak besar pada arus 1000 ampere ke atas, karena setiap 0,01 derajat Celsius per watt setara dengan puluhan watt daya yang harus dibuang.

## Kecocokan Kapsul dengan Klem Heatsink

Ini bagian yang paling sering terlewat. Thyristor kapsul dibuat dalam beberapa ukuran outline, dan setiap ukuran memerlukan klem dengan diameter serta tekanan yang sesuai. Kapsul yang lebih besar tidak akan duduk rata pada klem yang lebih kecil, sekalipun bisa dipaksakan masuk.

| Outline | Diameter luar | Diameter kontak | Tekanan klem | Kelas yang biasa memakai |
| :--- | :--- | :--- | :--- | :--- |
| F3 | 56 mm | 45 mm | 5 sampai 10 kN | Kapsul arus menengah |
| F4 | 64 mm | 53 mm | 15 sampai 20 kN | Kapsul arus menengah hingga besar |
| F5 | 66 mm | 57 mm | 20 sampai 25 kN | Kapsul arus besar |
| F6 | 76 mm | 67 mm | 25 sampai 30 kN | Kapsul arus sangat besar |

Dua akibat muncul bila outline tidak cocok. Tekanan terlalu kecil meninggalkan celah mikro di antara kapsul dan heatsink sehingga resistansi termal naik jauh di atas nilai datasheet. Tekanan terlalu besar atau tidak merata membuat wafer silikon retak, dan keretakan ini sering tidak terlihat sampai komponen gagal total saat diberi beban.

Pemeriksaan sebelum pemasangan cukup memakai jangka sorong. Ukur diameter luar kapsul dan kedalaman klem, lalu bandingkan dengan tabel di atas. Setelah itu bersihkan kedua permukaan dengan alkohol isopropil dan pastikan tidak ada sisa pasta kering atau goresan.

Untuk tipe yang kami sediakan, pembagian outline dan tekanannya adalah sebagai berikut.

| Part Number | Arus rata-rata | IFSM 10 ms | I²t 50 Hz | Resistansi termal | Tekanan klem |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [KP300-16](/part/kp300-16/) | 300 A | 3,8 kA | 72,2 kA²s | 0,055 °C/W | 5,3 sampai 10 kN |
| [KP500-16](/part/kp500-16/) | 500 A | 6,4 kA | 204,8 kA²s | 0,035 °C/W | 15 sampai 20 kN |
| [KP800-16](/part/kp800-16/) | 800 A | 10 kA | 500 kA²s | 0,032 °C/W | 15 sampai 20 kN |
| [KP1000-16](/part/kp1000-16/) | 1000 A | 13 kA | 845 kA²s | 0,022 °C/W | 21 sampai 30 kN |
| [KP1500-16](/part/kp1500-16/) | 1500 A | 20 kA | 2000 kA²s | 0,017 °C/W | 27 sampai 34 kN |

Seluruh tipe di atas memiliki tegangan balik berulang 1600 volt dan suhu junction maksimum 125 derajat Celsius.

## Menyeimbangkan Thyristor yang Diparalel

Pada penyearah arus sangat besar, beberapa thyristor sering diparalel untuk membagi beban. Cara ini hanya aman bila karakteristik antar komponen dicocokkan, terutama tegangan jatuh on-state.

Dua thyristor dengan tegangan jatuh berbeda diparalel akan berbagi arus secara tidak merata. Komponen dengan tegangan jatuh lebih rendah menanggung arus lebih besar, memanas lebih cepat, lalu tegangan jatuhnya turun lebih jauh dan menarik arus lebih banyak lagi. Proses ini berjalan sendiri dan berakhir pada kegagalan salah satu komponen.

Tiga aturan praktis yang bisa dipakai. Gunakan tipe dan kelas tegangan yang identik dalam satu grup paralel. Usahakan panjang dan penampang busbar menuju setiap thyristor sama agar impedansi seimbang. Untuk beban yang benar-benar kritis, pilih komponen dari kelas arus lebih tinggi dan turunkan pemanfaatan supaya margin pembagian arus lebih longgar.

Perlu dicatat bahwa memparalel thyristor tidak menaikkan kemampuan lonjakan arus secara proporsional. Nilai IFSM pada tabel di atas berlaku per komponen, dan pembagian lonjakan saat hubung singkat tidak pernah sempurna.

## Koordinasi Sekring dengan I²t Thyristor

Sekring semikonduktor berkecepatan tinggi kelas aR dipakai untuk memutus arus hubung singkat sebelum wafer silikon rusak. Syarat utamanya satu: total I²t sekring saat memutus harus lebih kecil daripada I²t yang mampu ditahan thyristor.

Kolom I²t pada tabel di atas memberikan batas tersebut dalam kondisi tanpa tegangan pembalik. Bila tegangan balik penuh diterapkan setelah hubung singkat, kemampuan thyristor menurun menjadi sekitar 72 persen dari nilai itu. Perhitungan yang aman memakai angka yang lebih rendah.

Contoh penerapan pada KP500-16 memberi gambaran proporsinya. Kapasitasnya 204,8 kA²s pada 50 Hz tanpa tegangan pembalik, dan sekitar 147 kA²s bila tegangan balik penuh diterapkan. Sekring yang dipilih harus memiliki I²t lebur di bawah angka kedua, dengan margin setidaknya 20 persen.

Satu jebakan yang sering terjadi adalah sekring dipilih berdasarkan arus nominal beban saja. Sekring aR dengan arus nominal tepat sama dengan arus thyristor belum tentu memiliki I²t yang sesuai. Data I²t harus dibaca dari kurva sekring, bukan diperkirakan dari rating arusnya.

## Checklist Sebelum Memesan Pengganti

Sebelum menghubungi penjual, siapkan enam informasi berikut agar tipe yang dikirim tidak salah.

1. Kode lengkap pada bodi kapsul, termasuk kode tegangan setelah tanda hubung.
2. Diameter luar kapsul lama, diukur dengan jangka sorong.
3. Tegangan jala-jala dan jenis konverter tempat thyristor dipakai.
4. Jumlah sisi kapsul yang benar-benar terpasang pada pendingin.
5. Suhu pendingin atau suhu panel saat mesin beroperasi normal.
6. Tipe sekring yang melindungi lengan tersebut beserta data I²t bila tersedia.

Data nomor 2 dan nomor 4 paling sering tidak disiapkan, padahal keduanya paling sering menjadi penyebab kegagalan penggantian. Foto kapsul lama dari beberapa sisi juga sangat membantu, terutama bagian yang memuat label.

Kelima tipe thyristor kapsul KP di atas tersedia melalui [CV. Alfa Elektrindo](/about-us/) di Batam dengan pengiriman ke seluruh Indonesia. Untuk kapsul dengan kelas tegangan berbeda, misalnya 1200 atau 1800 volt, sampaikan kode tegangan yang dibutuhkan saat memesan karena kelas tegangan tidak dapat diubah setelah produksi.

Rangkaian lengkap [Thyristors](/ca/thyristors/) dan [modul thyristor](/ca/thyristor-modules/) juga tersedia bila penggantian mengarah pada perubahan konfigurasi rangkaian. Jika Anda perlu mendiskusikan kecocokan kapsul dengan klem yang sudah terpasang, hubungi 0812-682-6672 dengan menyertakan ukuran dan foto komponen lama.
