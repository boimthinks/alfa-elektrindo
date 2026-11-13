---
title: "Perbedaan Stud Diode Semikron SKN dan SKR pada Heatsink"
slug: "perbedaan-stud-diode-semikron-skn-dan-skr-pada-heatsink"
long_title: "Membedakan Polaritas Stud Diode Semikron SKN dan SKR agar Heatsink Tidak Short Circuit"
date: "2026-11-05T08:00:00.000Z"
kategori: "Blog"
fifu_image_url: "/img/perbedaan-stud-diode-semikron-skn-dan-skr-pada-heatsink_poco.webp"
pendahuluan: "Panduan membedakan polaritas stud diode Semikron SKN dan SKR pada heatsink penyearah industri guna mencegah hubung singkat dan kerusakan wafer silikon."
img_prompt: "Industrial electrician testing Semikron stud rectifier diode SKN and SKR polarity with digital multimeter on an aluminum heatsink assembly in power panel workshop."
---

Pemasangan penyearah daya tinggi sering menyisakan insiden ledakan sesaat setelah pemutus tenaga utama dinyalakan. Kasus yang berulang di pabrik pelapisan logam (electroplating), mesin las industri, maupun panel eksitasi generator umumnya berakar pada satu kekeliruan sepele: teknisi mengira seluruh bodi baut stud diode memiliki polaritas listrik yang sama. Ketika teknisi memasang unit pengganti tanpa memverifikasi kode polaritas dasar, pelat heatsink bersama langsung menciptakan jalur hubung singkat antar-fasa yang fatal.

Pabrikan [Semikron](/ma/semikron/) merancang dioda penyearah tipe stud dengan dua konfigurasi polaritas yang berlawanan pada kemasan mekanis yang identik. Memahami perbedaan fundamental antara seri SKN dan SKR sangat krusial bagi teknisi lapangan agar sistem penyearah bekerja optimal tanpa risiko kebakaran komponen.

## Anatomi Kemasan Stud Baut dan Jalur Termal Silikon

Dioda stud dirancang khusus untuk menangani arus maju kontinu puluhan hingga ratusan ampere. Berbeda dengan komponen elektronika sinyal kecil berkaki kawat, bodi stud menggunakan ulir tembaga masif berbalut nikel yang memegang peran ganda. Ulir baut ini berfungsi sebagai konduktor arus utama sekaligus penghantar panas langsung menuju pelat pendingin alumunium.

Di dalam rumah keramik atau logam kedap udara tersebut, terpasang wafer kristal silikon planar yang dipatri menggunakan paduan khusus pada landasan tembaga. Kontak terminal kedua dihubungkan ke kabel anyam tembaga fleksibel (braided lead) yang mencuat dari kubah atas isolator keramik.

Pemisahan fungsi mekanis dan elektrikal inilah yang mendasari lahirnya dua varian polaritas. Pabrikan dapat membalik posisi wafer silikon di dalam kemasan tanpa mengubah dimensi mekanis baut, diameter ulir, maupun panjang kabel atas. Akibatnya, dua buah dioda yang tampak persis dari luar bisa memiliki arah aliran arus yang bertolak belakang.

## Perbedaan Nomenklatur Semikron Seri SKN dan Seri SKR

Semikron menggunakan standarisasi kode huruf yang sangat sistematis untuk menandai polaritas elektroda pada bodi baut stud:

Huruf N pada kode SKN mengacu pada Normal Polarity. Pada varian ini, baut berulir (stud) berfungsi sebagai Anoda, sedangkan kabel atas (flexible lead) bertindak sebagai Katoda. Arus listrik mengalir maju dari pelat heatsink tempat baut ditanam menuju ke terminal kabel atas. Contoh komponen di katalog meliputi [SKN 100/16](/part/skn-100-16/), [SKN 240-16](/part/skn-240-16/), dan [SKN 71/12 UNF](/part/skn-71-12-unf/).

Sebaliknya, huruf R pada kode SKR merupakan singkatan dari Reverse Polarity. Pada model ini, baut berulir berfungsi sebagai Katoda, sementara kabel fleksibel atas adalah Anoda. Aliran arus mengalir masuk melalui kabel atas menuju baut stud dan keluar ke heatsink pendingin. Contoh komponen di katalog antara lain [SKR 100/16](/part/skr-100-16/), [SKR 26/16](/part/skr-26-16/), dan [SKR 71/16](/part/skr-71-16/).

| Seri Semikron | Polaritas Baut Stud | Polaritas Kabel Atas | Simbol Skematik Aliran Arus | Contoh Part Number Populer |
| :--- | :--- | :--- | :--- | :--- |
| SKN Series | Anoda (Positif) | Katoda (Negatif) | Baut mengalirkan arus ke kabel atas | SKN 26/16, SKN 71/16, SKN 100/16, SKN 240/16 |
| SKR Series | Katoda (Negatif) | Anoda (Positif) | Kabel atas mengalirkan arus ke baut | SKR 26/16, SKR 71/16, SKR 100/16, SKR 240/16 |

Keberadaan pasangan SKN dan SKR dirancang untuk mempermudah perakitan jembatan penyearah gelombang penuh (full-wave bridge rectifier). Dengan mengombinasikan tiga unit SKN pada satu pelat heatsink dan tiga unit SKR pada pelat heatsink lainnya, perancang panel dapat menjadikan kedua heatsink tersebut langsung sebagai busbar keluaran positif dan negatif DC. Skema ini mengeliminasi kebutuhan isolator mika tambahan yang dapat menghambat pelepasan panas.

Kekeliruan menukar posisi SKN dengan SKR pada jembatan penyearah membuat pelat pendingin bertindak sebagai jembatan langsung fasa AC ke kutub DC. Akibatnya, sekring pembatas putus seketika atau wafer silikon pecah berkeping-keping karena lonjakan arus hubung singkat tanpa hambatan.

## Metode Pengujian Lapangan Menggunakan Multimeter Digital

Pada unit mesin yang telah beroperasi bertahun-tahun di lingkungan lembap pabrik atau stasiun plating kimia, sablon teks part number pada badan dioda sering kali aus atau hangus terbakar. Teknisi pemeliharaan tidak boleh mengandalkan tebakan visual semata. Pengujian junction p-n menggunakan multimeter digital mode dioda merupakan prosedur wajib sebelum baut dikencangkan ke heatsink.

Langkah pengujian polaritas stud diode dilakukan dengan melepaskan kabel atas dari terminal busbar agar pengukuran tidak terpengaruh beban sirkuit lain:

Langkah pengujian bias maju:
Hubungkan probe merah multimeter (terminal positif) ke baut stud dan probe hitam (terminal negatif) ke kabel fleksibel atas. Amati layar instrumen. Jika multimeter menampilkan angka drop tegangan maju berkisar antara 0,400 volt hingga 0,750 volt, berarti dioda berada dalam konduksi maju. Kondisi ini membuktikan bahwa baut stud adalah Anoda dan kabel atas adalah Katoda, yang menandakan dioda tersebut adalah seri SKN.

Langkah pengujian bias mundur:
Tukar posisi probe dengan menempelkan probe hitam ke baut stud dan probe merah ke kabel atas. Layar multimeter wajib menunjukkan status loop terbuka (Open Loop atau angka 1 di pojok kiri). Apabila instrumen berbunyi bip terus-menerus atau menunjukkan angka hambatan mendekati nol ohm pada kedua arah polaritas, junction silikon internal dioda telah rusak hubung singkat (short circuit) dan tidak boleh dipasang lagi.

Apabila pada uji langkah pertama layar multimeter menunjukkan Open Loop, namun saat probe merah diletakkan di kabel atas dan probe hitam di baut stud muncul angka 0,500 volt, maka komponen tersebut adalah seri SKR dengan baut sebagai Katoda.

## Standar Torsi Pengencangan Kunci dan Hambatan Termal Kontak

Kesalahan mekanis yang paling sering merusak stud [Diode](/ca/diodes/) baru bukanlah tegangan listrik lebih, melainkan cara pengencangan baut yang keliru. Penggunaan kunci pas biasa tanpa alat pengukur torsi sering kali berakhir dengan kerusakan wafer kristal silikon atau pelepasan panas yang tidak merata.

Teknisi yang mengencangkan baut stud terlalu kuat (over-torque) akan meregangkan ulir tembaga dan melengkungkan pelat dasar wafer dioda. Tekanan mekanis berlebih ini memicu keretakan mikro (micro-cracks) pada sambungan solder internal silikon. Keretakan mikro tersebut memang lolos pengujian multimeter saat dingin, tetapi junction akan pecah seketika begitu terkena siklus pemanasan arus beban kerja.

Sebaliknya, pengencangan yang terlalu longgar (under-torque) menyisakan celah udara mikroskopis antara dasar dioda dan pelat pendingin. Udara merupakan isolator termal yang buruk sehingga hambatan termal kontak dari badan ke pendingin (Rthch) melonjak tinggi. Ketika arus ratusan ampere mengalir, panas internal tidak dapat disalurkan ke heatsink, memicu fenomena thermal runaway dalam hitungan menit.

| Ukuran Ulir Baut | Tipe Ulir | Torsi Standar Rekomendasi | Batas Rentang Aman | Model Dioda Terkait |
| :--- | :--- | :--- | :--- | :--- |
| M8 | Metrik Kasar | 4,0 Nm | 3,5 hingga 4,5 Nm | SKR 26/16, SKN 26/16 |
| M12 x 1,5 | Metrik Halus | 12,0 Nm | 10,0 hingga 14,0 Nm | SKN 100/16, SKR 100/16, SKN 71/16 |
| 1/2"-20 UNF | Inci Standar Halus | 12,0 Nm (106 lbf.in) | 10,0 hingga 14,0 Nm | SKN 71/12 UNF, SKR 71/12 UNF |
| M16 x 1,5 | Metrik Halus | 30,0 Nm | 27,0 hingga 33,0 Nm | SKN 240-16, SKR 240-16 |
| M24 x 1,5 | Metrik Halus | 60,0 Nm | 50,0 hingga 65,0 Nm | SKN 320/16, SKR 320/16 |

Sebelum baut dipasang ke heatsink, bersihkan permukaan dudukan pelat pendingin dari sisa kerak korosi dan gram logam menggunakan amplas halus nomor 600. Oleskan selapis tipis pasta termal non-konduktif dengan ketebalan merata sekitar 50 mikrometer. Lapisan pasta termal yang dioleskan terlalu tebal justru berubah menjadi penahan aliran panas, sedangkan pasta yang tidak rata menyisakan rongga udara berbahaya.

Perhatikan pula tipe ulir pada stud. Semikron memproduksi varian baut metrik (seperti M12 x 1,5) dan varian inci UNF (seperti [SKN 71/12 UNF](/part/skn-71-12-unf/)). Memaksa baut berulir UNF ke lubang tap metrik pada heatsink akan merusak ulir aluminium dan menggagalkan konduksi termal secara permanen.

## Proteksi Surja Induktif dan Koordinasi Sekring Semikonduktor

Sistem penyearah industri yang menyuplai beban transformator las atau rotor generator rentan terhadap lonjakan tegangan transien saat pemutusan saklar (inductive kickback). Dioda rectifier silikon murni sangat sensitif terhadap lonjakan tegangan balik yang melampaui rating VRRM nominal (misalnya 1600 volt pada seri 16).

Untuk meredam lonjakan tegangan liar tersebut, pasang modul varistor oksida logam paralel dengan terminal input penyearah atau antar-fasa penyearah, seperti modul varistor [Semikron SKVC 20A-460](/part/skvc-20a-460/). Modul varistor ini menjepit tegangan lebih transien dan mengalihkan energinya sebelum merusak junction dioda. Rangkaian snubber resistor-kapasitor (RC) juga wajib dipasang paralel melintasi tiap unit dioda stud untuk menekan laju kenaikan tegangan transien ($dV/dt$).

Selain proteksi tegangan, koordinasi proteksi arus lebih membutuhkan sekring pembatas khusus semikonduktor (high-speed fuse). Sekring standar instalasi gedung tipe gG atau pemutus sirkuit MCB bekerja terlalu lambat untuk mengamankan silikon padat. Nilai $I^2t$ pemutusan total dari sekring semikonduktor wajib dipilih lebih kecil daripada nilai $I^2t$ tahanan lebur dioda stud yang tercantum di lembar data teknis.

## Tanya Jawab Seputar Pemasangan Stud Diode Industri

### Mengapa nilai hambatan dioda stud terbaca normal di meja kerja tetapi meletup saat berbeban?
Kerusakan semikonduktor tipe breakdown mikro kerap tidak terdeteksi oleh voltase uji baterai multimeter yang hanya berkisar antara 1,5 hingga 3 volt. Pada saat dioda menerima tegangan operasional di atas beberapa puluh volt di panel mesin, titik cacat pada wafer silikon mengalami tembus tegangan balik (reverse leakage breakdown). Pengujian yang lebih akurat pada unit yang dicurigai membutuhkan instrumen penguji resistansi isolasi bertegangan tinggi terkontrol (insulation tester).

### Apakah baut stud ulir UNF dapat dipasang langsung pada lubang ulir heatsink metrik?
Baut stud berulir inch UNF tidak boleh dipaksakan masuk ke lubang baut metrik. Sudut ulir dan jarak puncak ulir (pitch) kedua standar tersebut berbeda nyata. Pemaksaan baut UNF ke lubang metrik akan merusak dinding ulir aluminium pelat pendingin, mengurangi bidang kontak efektif, dan memicu pelepasan baut mendadak akibat getaran mekanis mesin pabrik.

### Bagaimana memastikan pelat heatsink pendingin masih layak digunakan kembali?
Periksa kerataan permukaan dudukan heatsink dengan meletakkan penggaris siku presisi berbahan baja melintang di atas area lubang baut. Bila terdapat celah cahaya yang mengindikasikan kelengkungan pelat melebihi 0,05 milimeter per 100 milimeter bentang, permukaan heatsink wajib diratakan ulang dengan mesin frais atau diganti pelat baru. Lubang bekas baut yang terangkat (burr) wajib dikikis rata sebelum unit dioda baru dipasang.

## Checklist Evaluasi Pemasangan dan Pengadaan Komponen

Pastikan lima langkah verifikasi berikut telah terpenuhi sebelum melakukan uji coba daya penuh pada panel penyearah:

- Verifikasi arah polaritas elektroda menggunakan multimeter digital untuk memastikan seri SKN dan SKR tidak tertukar posisi pada pelat pendingin busbar bersama.
- Pastikan ukuran ulir baut dan lubang dudukan heatsink cocok sempurna, membedakan secara cermat antara drat metrik dan ulir UNF.
- Bersihkan permukaan dudukan heatsink dari debu logam dan oleskan silikon grease termal secara tipis merata tanpa gumpalan.
- Kencangkan mur atau baut stud menggunakan kunci torsi terkalibrasi sesuai batas torsi nominal pada tabel spesifikasi mekanis pabrikan.
- Pastikan modul peredam tegangan surja varistor dan rangkaian kapasitor snubber berada dalam kondisi prima untuk menahan lonjakan induktif saat pensaklaran daya.

Kebutuhan penggantian mendesak untuk dioda penyearah industri Semikron tipe stud original, modul daya thyristor, hingga komponen elektronika industri usang (obsolete) dapat dikonsultasikan langsung bersama tim teknis CV. Alfa Elektrindo di Batam. Tim kami siap membantu verifikasi spesifikasi part number dan melayani pengiriman cepat ke seluruh kawasan industri di Indonesia melalui kontak WhatsApp 0812-682-6672 atau email resmi mail@elektrindo.co.id di Komplek Ruko Mega Legenda 2 Blok B2 No.7 Baloi Permai, Kota Batam.
