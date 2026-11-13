---
title: "Fungsi Modul Rectifier Infineon DDB6U"
slug: "fungsi-brake-chopper-modul-rectifier-infineon-ddb6u"
long_title: "Fungsi Brake Chopper Modul Rectifier Infineon DDB6U"
date: "2026-11-09T08:00:00.000Z"
kategori: "Blog"
fifu_image_url: "/img/fungsi-brake-chopper-modul-rectifier-infineon-ddb6u_poco.webp"
pendahuluan: "Pelajari arsitektur modul penyearah Infineon DDB6U, fungsi proteksi brake chopper IGBT, dan NTC termal pada inverter VFD industri bersama Alfa Elektrindo."
img_prompt: "An Indonesian industrial electrical engineer examining an Infineon DDB6U diode bridge module on a disassembled VFD inverter panel in a factory maintenance workshop."
---

Kerusakan fatal pada unit inverter penggerak motor sering kali berawal dari lonjakan tegangan balik yang gagal diredam oleh sirkuit penyearah depan. Di berbagai pabrik pengolahan semen, konveyor pelabuhan, maupun mesin derek industri berat, motor listrik yang melambat mendadak berubah fungsi menjadi generator arus. Tanpa sistem pembuangan daya yang memadai, tegangan pada kapasitor bus arus searah (DC bus) melonjak cepat melewati batas aman hingga meremukkan modul transistor inverter di sisi keluaran.

Pabrikan [Infineon](/ma/infineon/) menjawab tantangan tersebut dengan merancang keluarga modul penyearah jembatan tiga fasa seri DDB6U. Komponen ini tidak sekadar bertindak sebagai penyearah arus bolak-balik pasif, melainkan mengintegrasikan sirkuit pengereman dinamis (dynamic braking chopper) dan sensor termal presisi dalam satu modul terpadu.

## Anatomi Sirkuit Terpadu Modul Penyearah DDB6U

Konstruksi modul penyearah konvensional umumnya hanya memuat enam keping dioda penyearah tanpa fitur kendali aktif. Kondisi ini memaksa teknisi panel menambahkan unit pengereman eksternal terpisah yang memakan banyak ruang dan menambah titik sambungan kabel.

Keluarga DDB6U berbasis kemasan EconoBRIDGE memadukan tiga subsistem elektronik utama di atas satu pelat dasar keramik berisolasi alumina (Al2O3). Bagian depan sirkuit tersusun atas enam dioda penyearah gelombang penuh tiga fasa dengan ketahanan tegangan puncak balik (VRRM) hingga 1600 volt. Rating tegangan ini memberikan margin keselamatan yang sangat lapang untuk jala-jala listrik industri tiga fasa 380 volt hingga 480 volt terhadap lonjakan transien petir maupun induksi pensaklaran trafo.

Subsistem kedua adalah transistor daya insulated gate bipolar transistor (IGBT) kelas 1200 volt yang difungsikan khusus sebagai brake chopper, berpasangan dengan dioda pemulihan cepat (fast recovery free-wheeling diode). Keberadaan komponen aktif ini memungkinkan modul mengalihkan kelebihan energi dari DC bus langsung menuju resistor pengereman eksternal secara terkontrol.

Subsistem ketiga berupa sensor resistansi termal bersuhu koefisien negatif (NTC thermistor). Sensor ini terpasang tepat di dekat wafer silikon utama untuk membaca temperatur kerja modul secara langsung, lalu mengirimkan sinyal umpan balik menuju kartu pemroses mikro kontroler inverter.

## Mekanisme Pengereman Dinamis Melawan Lonjakan Tegangan DC Bus

Saat sistem otomasi memerintahkan motor berdaya besar untuk berhenti mendadak atau menurunkan kecepatan putaran roller conveyor berbeban penuh, inersia mekanis beban akan memaksa rotor berputar lebih cepat dari medan putar stator. Fenomena regenerasi ini mengubah energi kinetik putaran mekanis menjadi energi listrik yang dipompa balik menuju terminal masukan inverter melalui dioda anti-paralel.

Energi balik tersebut tidak dapat dikembalikan ke jala-jala jembatan dioda masukan karena dioda penyearah bersifat satu arah. Seluruh muatan arus regeneratif akhirnya menumpuk pada deretan kapasitor elektrolit DC bus. Akibatnya, tegangan kapasitor melonjak dari batas normal sekitar 540 volt melonjak drastis hingga menembus 800 volt.

Sirkuit pemantau tegangan pada pengendali inverter akan mengaktifkan gerbang (gate) transistor chopper pada modul DDB6U begitu batas ambang tegangan terlampaui. Transistor IGBT chopper bekerja dalam mode pensaklaran modulasi lebar pulsa (PWM) berkecepatan tinggi. Arus listrik berlebih langsung dialirkan melintasi resistor pengereman eksternal (braking resistor) dan diubah menjadi energi panas, sehingga tegangan DC bus kembali stabil di bawah batas trip darurat.

## Perbandingan Karakteristik Seri EconoBRIDGE dan IsoPACK

Infineon membagi keluarga penyearah DDB6U ke dalam dua rancangan mekanis dan elektrikal untuk menjawab rentang kebutuhan daya industri yang beragam.

Kemasan EconoBRIDGE dirancang untuk aplikasi inverter terintegrasi kompak dengan metode pemasangan solder pin atau koneksi tekan (PressFIT) langsung ke papan PCB pengendali. Seri ini memuat jembatan dioda, brake chopper lengkap, serta sensor NTC terpadu. Part number yang termasuk kategori ini antara lain [DDB6U84N16RR](/part/ddb6u84n16rr/) berkapasitas arus keluaran 85 ampere, [DDB6U104N16RR](/part/ddb6u104n16rr/) dengan kapasitas 105 ampere, dan [DDB6U134N16RR](/part/ddb6u134n16rr/) dengan daya hantar 134 ampere.

Kemasan IsoPACK dirancang untuk inverter industri berat tanpa sirkuit chopper internal, namun berfokus penuh pada ketahanan arus masif dan kemudahan instalasi menggunakan baut pengencang terminal tembaga kokoh. Modul ini memiliki basis pelat tembaga tebal berdaya tahan termal tinggi untuk beban jangka panjang tanpa jeda. Model yang beroperasi di kelas ini meliputi [DDB6U145N16L](/part/ddb6u145n16l/) dengan kemampuan 145 ampere serta [DDB6U205N16L](/part/ddb6u205n16l/) yang mampu menghantarkan arus kontinu 205 ampere pada suhu casing 100 derajat Celsius.

| Part Number Katalog | Arus Output DC Nominal | Tegangan Puncak Balik | Tipe Casing Mekanis | Keberadaan Brake Chopper | Batas Arus Lonjakan |
| :--- | :--- | :--- | :--- | :--- | :--- |
| DDB6U84N16RR | 85 A (@ TC 100°C) | 1600 V | EconoBRIDGE 2 | Terintegrasi IGBT 35A 1200V | 550 A (10 ms) |
| DDB6U104N16RR | 105 A (@ TC 100°C) | 1600 V | EconoBRIDGE 2 | Terintegrasi IGBT 50A 1200V | 650 A (10 ms) |
| DDB6U134N16RR | 134 A (@ TC 100°C) | 1600 V | EconoBRIDGE 2 | Terintegrasi IGBT 75A 1200V | 1000 A (10 ms) |
| DDB6U145N16L | 145 A (@ TC 100°C) | 1600 V | IsoPACK Screw | Tidak (Penyearah Murni) | 1200 A (10 ms) |
| DDB6U205N16L | 205 A (@ TC 100°C) | 1600 V | AG-ISOPACK-1 | Tidak (Penyearah Murni) | 1500 A (10 ms) |

Data di atas menunjukkan fleksibilitas lini produk [Bridge Rectifiers](/ca/bridge-rectifiers/) Infineon dalam mendukung berbagai level daya mesin industri, mulai dari sistem konveyor 30 kilowatt hingga unit penggerak pompa 132 kilowatt.

## Prosedur Pengujian dan Verifikasi Multimeter di Lapangan

Pemeriksaan kesehatan modul DDB6U sebelum dilakukan pemasangan baru atau saat investigasi mesin trip darurat wajib dilakukan dengan instrumen multimeter digital mode dioda. Jangan pernah menyalakan suplai tegangan tiga fasa sebelum seluruh blok penyearah dan transistor terbukti bebas dari gangguan hubung singkat.

Langkah pertama adalah menguji enam dioda jembatan masukan tiga fasa:
Tempelkan probe hitam multimeter pada terminal positif DC bus modul. Sentuhkan probe merah secara bergantian ke tiga terminal masukan AC (fasa U, V, dan W). Multimeter harus menampilkan angka drop tegangan maju berkisar antara 0,400 volt hingga 0,550 volt pada ketiga fasa tersebut. Balik posisi probe dengan probe merah pada terminal positif DC dan probe hitam ke terminal AC. Multimeter harus menunjukkan kondisi loop terbuka atau tanpa pembacaan nilai hambatan.

Lakukan pengujian serupa untuk sisi negatif DC bus:
Tempelkan probe merah multimeter pada terminal negatif DC bus. Sentuhkan probe hitam secara berurutan ke terminal masukan AC (U, V, dan W). Drop tegangan maju yang terbaca harus konsisten berada pada angka 0,400 hingga 0,550 volt. Bila salah satu terminal fasa menunjukkan angka nol ohm atau instrumen berbunyi bip terus menerus, salah satu keping silikon dioda penyearah telah pecah dan modul tidak layak digunakan.

Langkah kedua adalah memverifikasi kondisi transistor IGBT brake chopper:
Uji jalur kolektor dan emiter transistor chopper. Tempelkan probe merah pada terminal kolektor resistor dan probe hitam pada terminal emiter negatif. Layar wajib menunjukkan kondisi loop terbuka tanpa kebocoran arus. Tempelkan kedua probe pada terminal sensor NTC. Pada suhu ruangan normal sekitar 25 derajat Celsius, resistansi NTC harus menunjukkan angka sekitar 5000 ohm (5 kilo-ohm) dan menurun perlahan saat bodi modul menerima panas.

## Standar Instalasi Termal dan Batasan Torsi Pengencangan

Pelepasan panas yang tidak optimal merupakan penyebab utama penurunan usia pakai modul penyearah semikonduktor. Meskipun efisiensi modul tergolong sangat tinggi, rugi konduksi dioda dan pensaklaran IGBT tetap melepaskan kalor dalam jumlah besar pada area substrat yang relatif sempit.

Pembersihan permukaan heatsink alumunium harus dilakukan menggunakan kain pembersih berpelarut alkohol isopropil hingga bebas dari sisa pasta kering, debu logam, dan goresan kasar. Lapisi permukaan dasar modul dengan pasta pendingin konduktif termal (thermal grease) secara tipis dan merata dengan ketebalan antara 50 hingga 100 mikrometer. Pengolesan pasta yang terlalu tebal justru akan menghambat rambatan panas dan memicu penumpukan titik panas lokal (hotspot).

Pengencangan baut penahan menuju heatsink wajib menerapkan kunci torsi terkalibrasi secara bertahap dalam pola silang diagonal. Untuk modul berukuran EconoBRIDGE 2, gunakan torsi pengencangan mekanis antara 3,0 hingga 4,0 Newton meter. Untuk kemasan IsoPACK bertipe baut pengencang M5, pertahankan torsi di rentang 4,0 hingga 5,0 Newton meter. Torsi yang melebihi batas anjuran pabrikan dapat melengkungkan pelat dasar tembaga dan meretakkan lapisan wafer keramik Al2O3 di bagian dalam kemasan.

Penggantian modul yang rusak juga harus disertai pemeriksaan koordinasi sekring semikonduktor berkecepatan tinggi. Pastikan nilai integral arus lonjakan ($I^2t$) sekring proteksi selalu berada di bawah batas ketahanan integral lebur modul DDB6U agar perlindungan terhadap ancaman hubung singkat bekerja sempurna.

Kebutuhan modul penyearah industri Infineon seri DDB6U, modul transistor IGBT, maupun komponen semikonduktor daya orisinal lainnya dapat Anda konsultasikan langsung bersama CV. Alfa Elektrindo Batam. Layanan penyediaan komponen resmi kami siap mendukung keandalan operasional lini produksi pabrikasi Anda di seluruh sentra industri Indonesia.
