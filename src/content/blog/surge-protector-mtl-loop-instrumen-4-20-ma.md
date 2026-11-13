---
title: "Surge Protector MTL dan Cara Memilihnya untuk Loop 4-20 mA"
slug: "surge-protector-mtl-loop-instrumen-4-20-ma"
long_title: "Membedakan Surge Protector MTL TP48 dan SD Series pada Panel Instrumen 4-20 mA"
date: "2026-11-11T08:00:00.000Z"
kategori: "Blog"
fifu_image_url: "/img/surge-protector-mtl-loop-instrumen-4-20-ma_poco.webp"
pendahuluan: "Panduan memilih surge protector MTL TP48 dan SD series untuk melindungi loop instrumen 4-20 mA dari surja induksi kabel lapangan di area pabrik."
img_prompt: "Industrial instrument technician inspecting MTL surge protection modules mounted on DIN rail inside a marshalling panel, with 4-20 mA loop wiring and green earth bar visible, realistic industrial photography."
---

Transmitter tekanan di area proses tiba-tiba mengirim sinyal 22 mA ke DCS padahal tekanan tangki tidak berubah. Setelah kartu input diganti dua kali dalam sebulan, teknisi baru menemukan bahwa kabel sinyal sepanjang 180 meter berjalan sejajar dengan tray kabel motor pompa 75 kW. Tidak ada petir yang menyambar panel. Kerusakan datang dari surja induksi pensaklaran inverter yang naik turun setiap hari.

Kasus seperti ini bukan cerita langka di pabrik yang padat kabel daya. Loop instrumen memang dirancang untuk membawa arus kecil, bukan untuk menahan lonjakan tegangan. Di sinilah surge protector MTL masuk sebagai lapisan pertahanan tambahan yang dipasang di antara kabel lapangan dan elektronika penerima.

## Mengapa Loop Instrumen Gagal Tanpa Petir

Kartu input analog industri umumnya hanya toleran terhadap tegangan beberapa puluh volt. Komponen proteksi internal perangkat dibuat untuk kerusakan elektrostatis skala kecil, bukan untuk pulsa 1 kV per mikrodetik yang merambat lewat kabel lapangan. Begitu pulsa melewati ambang komponen, kegagalan bisa berhenti di jalur input atau menjalar ke catu daya kartu dan mengganggu titik lain di rak yang sama.

Surja induktif muncul dari tiga sumber yang akrab di lantai produksi. Pensaklaran IGBT pada inverter menghasilkan dV/dt tinggi pada kabel motor, kontaktor dan solenoid memutus arus induktif sehingga memicu percikan, dan perbedaan potensial tanah antara gedung proses dan ruang kontrol menarik arus melalui screen kabel. Ketiganya berujung pada satu hal, yaitu beda tegangan mendadak antara dua ujung kabel yang sama.

Proteksi perangkat penerima bersifat pasif dan menunggu. Sebaliknya, surge protection device bekerja dengan mengalihkan energi surja ke jalur pentanahan sebelum sempat mencapai elektronika. Pada loop 4-20 mA, perangkat ini harus memenuhi syarat tambahan yang jarang dibahas di brosur, yaitu tidak boleh mengubah arus loop maupun menambah resistansi yang menggeser akurasi.

## Dua Gaya Pemasangan yang Menentukan Pilihan

MTL membagi solusi proteksi sinyalnya ke dalam dua pendekatan pemasangan. Pendekatan pertama adalah perangkat field-mounted yang dipasang langsung di titik instrumen, diwakili seri [MTL TP48](/part/mtl-tp48/). Perangkat ini disekrup ke port conduit yang tidak terpakai pada bodi transmitter, lalu kabel internal dihubungkan ke terminal instrumen dan stud pentanahan di dalam casing.

Kelebihan pendekatan ini adalah jarak proteksi yang sangat dekat dengan perangkat yang dilindungi. Transien tidak diberi kesempatan berjalan sepanjang kabel panel sebelum diklem. Karena bodi TP48 terbuat dari stainless steel ANSI 316 dengan proteksi IP66 dan sertifikasi ATEX untuk area berbahaya, perangkat ini juga bertahan pada lingkungan proses yang basah, korosif, dan berklasifikasi zona.

Pendekatan kedua memakai modul [rail DIN](/ca/surge-protection-devices/) di panel marshalling, diwakili seri MTL SD. Modul SD07, SD16, SD32, dan SD55 hanya selebar 7 milimeter, sehingga satu batang rail DIN 35 milimeter dapat menampung belasan titik proteksi. Seluruh titik yang menuju satu kartu input dapat dilindungi dalam satu area panel, dan modul mencengkeram rail dengan satu gerakan manual yang sekaligus membentuk koneksi pentanahan.

Pilihan di antara keduanya ditentukan oleh di mana risiko terbesar berada. Instalasi dengan kabel lapangan sangat panjang dan panel kontrol berjarak ratusan meter lebih tepat memakai modul di panel, karena titik masuk surja utama ada di perbatasan kabel. Instalasi dengan transmitter yang berdiri sendiri di area proses dan kabel masuk langsung ke perangkat lebih tepat memakai TP48.

## Memilih Rating Tegangan SD Series Tanpa Menjebak Loop

Kesalahan paling sering pada pemasangan modul SD adalah memilih seri dengan rating terlalu tinggi karena dianggap lebih aman. Pada jalur sinyal, rating yang terlalu tinggi justru menunda pengkleman sampai tegangan melewati batas yang sudah merusak kartu input. MTL menyediakan empat rating tegangan yang harus dicocokkan dengan tegangan kerja maksimum sistem, bukan dengan tegangan nominal catu daya.

| Model | Tegangan kerja (Un) | MCOV (Uc) | Proteksi Up 1 kV/us | Residual @ isn | Arus bocor |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [SD07](/part/mtl-sd07/) | 7 V DC / 5 V AC | 7,7 V | &lt; 12 V | 30 V | 500 uA |
| [SD16](/part/mtl-sd16/) | 16 V DC / 11 V AC | 17 V | &lt; 25 V | 40 V | 5 uA |
| [SD32](/part/mtl-sd32/) | 32 V DC / 22 V AC | 36 V | &lt; 45 V | 60 V | 5 uA |
| [SD55](/part/mtl-sd55/) | 55 V DC / 38 V AC | 62 V | &lt; 90 V | 100 V | 5 uA |

Rekomendasi standar MTL untuk loop 4-20 mA konvensional maupun smart transmitter adalah SD32 atau SD55, tergantung tegangan kerja maksimum sistem. Jika catu daya loop teregulasi baik dan tegangan puncak tidak melewati 32 V, SD32 memberi level proteksi lebih rapat. Jika catu daya kurang stabil dan tegangan loop masih menyentuh rentang 32 V sampai 55 V, SD55 mencegah pengkleman palsu yang bisa memutus komunikasi HART.

Ada satu detail yang mudah terlewat pada SD07. Arus bocornya 500 uA, jauh lebih besar dari 5 uA pada seri lain, karena rating tegangannya sangat rendah. Pada sumber milivolt berimpedansi tinggi, arus bocor ini dapat menggeser pembacaan. Karena itu SD07 dipakai untuk jalur yang memang membutuhkan level klem di bawah 12 V, dan pemilihan tetap harus memperhitungkan impedansi sumber serta karakteristik input kartu ukur.

Varian huruf di belakang nomor model juga menentukan fungsi, bukan sekadar kode pemasaran. Akhiran X menghilangkan fitur sekring dan loop disconnect demi resistansi lebih rendah. Akhiran R menaikkan bandwidth sampai 50 MHz untuk jalur komunikasi. Varian T3 menyediakan tiga terminal untuk loop 4-20 mA 3 kawat yang catu dayanya terpisah, sedangkan SDRTD khusus untuk RTD 3 kawat.

## Jebakan di Lapangan yang Tidak Ada di Brosur

Modul proteksi yang terpasang rapi di panel belum tentu bekerja. Pengalaman di lapangan menunjukkan tiga kesalahan yang berulang. Pertama, rail DIN tidak terhubung ke earth bar panel dengan baik. Modul SD mengambil pentanahan dari rail, sehingga rail yang hanya menempel pada dinding panel tanpa konduktor tembaga berukuran memadai membuat seluruh energi surja mencari jalur lain, termasuk melalui kabel sinyal.

Kedua, sekring 250 mA pada modul SD putus setelah satu peristiwa surja dan tidak ada yang menyadarinya. Loop tetap membaca normal, proteksi hilang sepenuhnya, dan kerusakan berikutnya baru terasa saat kartu input gagal. Sekring ini dirancang dapat diganti dengan paket SD-F25, dan pemeriksaan kontinuitasnya layak masuk daftar perawatan tahunan.

Ketiga, screen kabel diterminasi di kedua ujung. Modul SD menyediakan terminal ketiga khusus untuk terminasi screen yang aman. Screen yang dibumikan ganda justru menciptakan loop arus tanah yang membawa noise 50 Hz ke pembacaan. Praktik yang lazim dipakai adalah membumikan screen di satu sisi panel dan membiarkan sisi instrumen terhubung ke terminal screen modul.

Pada TP48, kesalahan yang sering terjadi adalah pemasangan pada transmitter dengan loop open circuit di atas 60 V atau daya masukan melebihi 1,2 W. Perangkat ini bersertifikat untuk digunakan pada loop intrinsically safe dengan batas tersebut, sehingga pemasangan di luar rentang itu menghapus jaminan keselamatan area berbahaya meski perangkat tetap berfungsi secara elektrik.

## Membandingkan TP48 dan SD Series Secara Praktis

| Aspek | MTL TP48 | MTL SD07 / SD16 / SD32 / SD55 |
| :--- | :--- | :--- |
| Posisi pasang | Bodi transmitter, port conduit | Rail DIN 35 mm di panel |
| Kapasitas surja | 20 kA (8/20 us), Iimp 2,5 kA (10/350 us) | 20 kA (8/20 us), isn 3 kA, Iimp 2,8 kA (10/350 us) |
| Level proteksi | &lt; 76 V pada 1 kV/us | &lt; 12 V sampai &lt; 90 V tergantung model |
| Bandwidth | 1 MHz, kapasitansi 100 pF | 25 kHz (50 MHz pada varian R) |
| Resistansi seri | Tidak ada | 4,2 ohm per line |
| Pentanahan | Lewat casing transmitter | Lewat rail DIN dan earth terminal |
| Fitur tambahan | Sertifikasi ATEX Ex ia dan Ex d | Loop disconnect, sekring 250 mA, terminal screen |
| Kesesuaian terbaik | Transmitter tunggal di area proses | Panel marshalling dengan banyak titik |

Angka pada tabel menunjukkan keduanya tidak saling menggantikan. TP48 unggul pada bandwidth dan tidak menambah resistansi, sedangkan seri SD unggul pada kepadatan titik dan kemudahan perawatan. Panel dengan 40 loop akan sulit memakai TP48 di setiap titik karena biaya dan ruang, sementara transmitter yang berdiri sendiri di area berbahaya lebih aman memakai proteksi yang menempel langsung di bodinya.

## Memeriksa Proteksi yang Sudah Terpasang

Sebelum menambah perangkat baru, periksa instalasi yang ada dengan urutan sederhana. Ukur kontinuitas antara rail DIN dan earth bar panel, lalu bandingkan dengan titik pentanahan casing instrumen. Selisih resistansi yang besar menandakan jalur pentanahan perlu diperbaiki lebih dulu, karena modul baru tidak akan bekerja optimal pada jalur tanah berimpedansi tinggi.

Berikutnya, periksa tegangan loop aktual saat perangkat bekerja normal, lalu cocokkan dengan rating modul yang terpasang. Modul dengan Uc hanya sedikit di atas tegangan kerja normal berisiko mengklemp saat ada fluktuasi catu daya, sedangkan modul dengan Uc jauh di atas tegangan kerja normal tidak memberi perlindungan yang memadai.

Langkah terakhir adalah uji loop disconnect. Lepas modul dari jalur, ukur sinyal, lalu pasang kembali. Jika pembacaan berubah signifikan setelah modul terpasang, ada resistansi atau arus bocor yang perlu dievaluasi. Pemeriksaan ini juga memastikan sekring modul masih utuh dan terminal tidak longgar akibat getaran mesin.

Untuk loop yang mengandalkan pengukuran arus sebagai umpan balik kontrol, proteksi sinyal sebaiknya dipasang berpasangan dengan pemilihan [transduser arus](/ca/transducers/) yang tepat. Artikel [sensor arus closed loop LEM LF series](/blog/sensor-arus-closed-loop-lem-lf-series-proteksi-inverter/) membahas sisi pengukuran arusnya, sementara proteksi sinyal menjaga jalur komunikasi hasil pengukuran tersebut tetap bersih.

## Checklist Sebelum Memesan Surge Protector

- Tentukan lokasi proteksi lebih dulu, di bodi transmitter atau di panel marshalling.
- Catat tegangan kerja maksimum sistem, bukan hanya tegangan nominal catu daya.
- Sebutkan jumlah kawat loop, apakah 2 kawat, 3 kawat, atau 4 kawat.
- Untuk TP48, tentukan ulir conduit yang tersedia, apakah 1/2 inci NPT, 20 mm ISO, atau G 1/2 inci BSP.
- Untuk seri SD, pastikan earth bar panel dan rail DIN sudah terhubung dengan konduktor memadai.
- Simpan sekring cadangan SD-F25 agar penggantian tidak menunggu pengiriman.
- Periksa apakah area pemasangan membutuhkan sertifikasi ATEX dan pastikan varian yang dipilih mencantumkannya.

Lima part number MTL kini tersedia di katalog Alfa Elektrindo, yaitu [MTL TP48](/part/mtl-tp48/), [MTL SD32](/part/mtl-sd32/), [MTL SD55](/part/mtl-sd55/), [MTL SD16](/part/mtl-sd16/), dan [MTL SD07](/part/mtl-sd07/). Seluruh seri dapat dilihat pada halaman brand [MTL](/ma/mtl/) beserta aksesori pendukungnya.

Jika panel instrumen Anda mengalami kegagalan kartu input berulang atau ingin memasang proteksi pada loop yang belum terlindungi, tim CV. Alfa Elektrindo Batam dapat membantu mencocokkan model dengan kondisi lapangan. Kirim daftar titik loop dan tegangan kerjanya melalui WhatsApp 0812-682-6672 atau email mail@elektrindo.co.id untuk penawaran dan ketersediaan stok.
