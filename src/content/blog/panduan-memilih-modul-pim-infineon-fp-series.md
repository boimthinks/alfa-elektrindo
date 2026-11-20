---
title: "Panduan Modul PIM Infineon FP Series"
slug: "panduan-memilih-modul-pim-infineon-fp-series"
long_title: "Panduan Kode Modul PIM Infineon FP Series untuk Drive Motor"
date: "2026-11-20T08:00:00.000Z"
kategori: "Blog"
fifu_image_url: "/img/panduan-memilih-modul-pim-infineon-fp-series_poco.webp"
meta_description: "Panduan membaca kode modul PIM Infineon FP series, membedakan EasyPIM 2B dan EconoPIM 3, serta mencocokkan arus, tegangan, dan paket untuk drive motor."
img_prompt: "Infineon PIM IGBT module with rectifier bridge and screw terminals mounted on an aluminum heatsink inside an industrial motor drive panel, multimeter probes testing a terminal, realistic workshop photography, no text, no people."
pendahuluan: "Panduan membaca kode modul PIM Infineon FP series dan memilihnya untuk drive motor industri, mencakup arti kode FP50R12KT4G, perbedaan housing EasyPIM 2B dan EconoPIM 3, tabel komparasi part yang tersedia, serta kesalahan pemesanan yang paling sering terjadi."
---

Modul PIM Infineon FP series adalah salah satu komponen yang paling sering salah dibeli di pasar penggantian. Penyebutnya bukan kualitas modul, melainkan urusan fisik: pembeli mencocokkan arus dan tegangan, lalu modul yang datang tidak masuk ke lubang PCB atau terminal sekrupnya tidak sejajar dengan busbar. Satu seri FP terbagi ke dalam beberapa housing yang berbeda ukuran, dan housing tidak bisa saling dipertukarkan.

Artikel ini membedah cara membaca kode FP, perbedaan housing EasyPIM dan EconoPIM, isi di dalam modul, serta tabel komparasi part FP yang tersedia di katalog Alfa Elektrindo. Target pembacanya teknisi maintenance dan purchasing yang sedang mencari pengganti modul PIM pada drive motor.

## Isi Sebuah Modul PIM FP Series

FP adalah singkatan dari Power Integrated Module. Satu modul memuat tiga blok daya sekaligus pada satu baseplate keramik: penyearah enam dioda (B6) di depan, brake chopper satu lengan di tengah, dan inverter enam IGBT tiga fasa di belakang. Sebuah NTC thermistor juga menyatu di baseplate untuk pengukuran suhu oleh rangkaian kontrol.

Integrasi ini yang membuat FP populer pada drive motor kelas kecil sampai menengah. Perancang tidak perlu merakit tiga komponen terpisah, panjang jalur tembaga antar blok pendek, sehingga induktansi parasitik rendah dan risiko overshoot tegangan menurun. Konsekuensinya, satu titik gagal saja, misalnya dioda penyearah saja yang jebol, membuat seluruh modul harus diganti.

Kehadiran brake chopper juga menentukan perilaku drive di lapangan. Ketika motor mengerem dan energi regeneratif menaikkan tegangan bus DC, chopper membuang energi itu ke braking resistor. Banyak kasus drive trip overvoltage yang ternyata bukan kerusakan modul, melainkan resistor rem yang putus, jadi periksa dulu jalur ini sebelum menyalahkan FP.

## Cara Membaca Kode FP50R12KT4G

Kode FP mengikuti pola yang konsisten dan bisa dipecah bagian demi bagian. Mengambil FP50R12KT4G sebagai contoh, angka 50 adalah arus nominal dalam ampere, R12 berarti kelas tegangan 1200 V, dan KT4 menunjukkan generasi chip. Akhiran G pada part ini menandai teknologi chip lebih baru dengan VCE(sat) lebih rendah dibanding generasi sebelumnya.

| Bagian kode | Arti | Contoh |
| :--- | :--- | :--- |
| FP | Power Integrated Module (PIM lengkap) | [FP50R12KT4G](/part/fp50r12kt4g/) |
| Angka depan | Arus nominal dalam ampere | 50 berarti 50 A |
| R06, R07, R12 | Kelas tegangan 600, 650, 1200 V | R12 berarti 1200 V |
| KT4, KT3 | IGBT4 dan IGBT3 trench fieldstop | KT4 generasi 4 |
| KE3, YT3, E3 | IGBT3 varian E3 dan Y | KE3 generasi 3 |
| W1, W2 | Generasi chip varian W | W2T4 generasi terbaru |
| _B11 | Varian pin solder untuk PCB | tanpa akhiran pin PressFIT |

Dua contoh penerapannya begini. FP15R12W2T4 berarti PIM 15 A kelas 1200 V dengan chip generasi W2 bawaan teknologi IGBT4. FP50R12KT3 berarti PIM 50 A kelas 1200 V dengan chip IGBT3, generasi lebih tua dari KT4. Kedua modul bisa saja kompatibel secara fisik di drive yang sama, tetapi parameter switching dan tegangan saturasi keduanya berbeda, jadi penilaian teknis tetap perlu sebelum saling menggantikan.

## EasyPIM 2B dan EconoPIM 3 Tidak Saling Menggantikan

Housing adalah sumber kesalahan pemesanan terbesar pada seri FP. Dua keluarga housing yang paling sering dijumpai adalah EasyPIM dan EconoPIM, dan keduanya berbeda ukuran serta cara koneksi daya.

| Housing | Dimensi | Koneksi daya | Contoh part |
| :--- | :--- | :--- | :--- |
| EasyPIM 2B | 48,0 x 56,7 mm | pin solder / ScrewClamp | FP15R12W2T4, FP25R12W2T4, FP35R12W2T4 |
| EconoPIM 2 | 45,0 x 107,0 mm | terminal sekrup | [FP50R12KT4](/part/fp50r12kt4/) |
| EconoPIM 3 | 62,0 x 122,0 mm | terminal sekrup | FP50R12KT4G, FP75R12KT4-B15 |

Modul EasyPIM 2B berorientasi kompak dan dirancang untuk PCB drive dengan pin yang disolder atau dijepit ScrewClamp. Modul EconoPIM lebih panjang dan memakai terminal sekrup langsung ke busbar, sesuai untuk drive dengan arus lebih besar. Memasang FP50R12KT4G (EconoPIM 3) pada drive yang dirancang untuk FP25R12W2T4 (EasyPIM 2B) mustahil tanpa modifikasi mekanis, dan modifikasi semacam itu menghilangkan jaminan isolasi pabrik.

Cara paling cepat mengenali housing modul lama adalah mengukur panjang dan lebar badan modul, lalu melihat apakah koneksinya pin solder atau sekrup. Foto modul lama sebelum dilepas juga membantu saat memesan, terutama untuk memastikan arah pin dan posisi terminal penyearah.

## Komparasi Part FP Series di Katalog

Katalog Alfa Elektrindo memuat sebelas part FP series kelas 1200 V yang mencakup rentang arus 10 sampai 75 ampere. Tabel berikut merangkum arus nominal, housing, dan generasi chip masing-masing part.

| Part number | Arus nominal | Housing | Chip |
| :--- | :--- | :--- | :--- |
| [FP10R12YT3](/part/fp10r12yt3/) | 10 A | EasyPIM | IGBT3 Y |
| [FP15R12W2T4](/part/fp15r12w2t4/) | 15 A | EasyPIM 2B | IGBT4 W2 |
| [FP25R12U1T4](/part/fp25r12u1t4/) | 25 A | EasyPIM 2B | IGBT4 U1 |
| [FP25R12W2T4](/part/fp25r12w2t4/) | 25 A | EasyPIM 2B | IGBT4 W2 |
| [FP25R12W2T4_B11](/part/fp25r12w2t4_b11/) | 25 A | EasyPIM 2B, pin solder | IGBT4 W2 |
| [FP35R12W2T4](/part/fp35r12w2t4/) | 35 A | EasyPIM 2B | IGBT4 W2 |
| [FP40R12KE3](/part/fp40r12ke3/) | 40 A | EasyPIM 2B | IGBT3 E3 |
| [FP50R12KT3](/part/fp50r12kt3/) | 50 A | EconoPIM 2 | IGBT3 |
| [FP50R12KT4](/part/fp50r12kt4/) | 50 A | EconoPIM 2 | IGBT4 T4 |
| [FP50R12KT4G](/part/fp50r12kt4g/) | 50 A | EconoPIM 3 | IGBT4 T4, varian G |
| [FP75R12KT4-B15](/part/fp75r12kt4-b15/) | 75 A | EconoPIM 3 | IGBT4 T4 |

Tiga hal perlu dibaca hati-hati dari tabel ini. Pertama, FP50R12KT4 dan FP50R12KT4G berbeda housing meskipun arusnya sama, karena varian G pindah ke EconoPIM 3 yang lebih panjang. Kedua, FP25R12W2T4_B11 identik secara elektrik dengan FP25R12W2T4, perbedaannya hanya jenis pin. Ketiga, varian KT3 dan KE3 adalah chip generasi 3 yang pada banyak drive masih diproduksi sebagai pengganti modul lama, meskipun efisiensinya di bawah generasi 4.

### Mencocokkan Arus dengan Daya Motor

Sebagai acuan kasar pada jaring 400 V, PIM 15 A umumnya dipakai drive motor hingga sekitar 2,2 kW, PIM 25 A untuk 3,7 sampai 5,5 kW, PIM 35 sampai 40 A untuk 7,5 sampai 11 kW, dan PIM 50 sampai 75 A untuk 22 sampai 37 kW. Angka ini bergeser tergantung switching frequency dan kualitas pendinginan, jadi gunakan sebagai titik awal pencocokan, bukan patokan mutlak.

Kesalahan yang sering terjadi adalah mengganti modul dengan arus nominal lebih tinggi tanpa mengecek drive circuit. Arus lebih besar berarti muatan gerbang lebih besar, dan gate driver lama bisa gagal menyetel turn-off dengan benar. VCE(sat) yang berbeda juga mengubah titik kerja proteksi desat, sehingga drive bisa trip overcurrent padahal modulnya sehat.

Jika modul lama sudah tidak diproduksi dan tidak ada varian arus yang persis sama, turunkan atau naikkan satu tingkat arus hanya dengan menghitung ulang rugi konduksi pada suhu heatsink aktual. Ambil VCE(sat) pada datasheet modul baru di suhu 125 °C, kalikan arus fasa terburuk aplikasi, lalu bandingkan dengan daya buang modul lama.

## Prosedur Penggantian Modul PIM yang Aman

Penggantian modul PIM punya beberapa langkah yang tidak boleh dilewati. Prosedur berikut mengikuti praktik yang berlaku untuk seluruh modul IGBT terisolasi pada baseplate keramik.

1. Matikan drive dan tunggu minimal lima menit, lalu ukur tegangan bus DC dengan multimeter. Tegangan harus turun mendekati nol sebelum tangan menyentuh terminal apa pun.
2. Foto posisi kabel dan label modul lama, termasuk urutan terminal penyearah, bus DC, dan output fasa. Tukar urutan fasa pada inverter menyebabkan motor berputar balik, dan tertukarnya polaritas bus DC merusak modul baru dalam hitungan detik.
3. Lepas modul lama, bersihkan sisa pasta termal dari heatsink sampai bersih, lalu oles pasta baru setebal 50 sampai 100 µm merata di seluruh bidang sentuh.
4. Pasang modul baru, kencangkan sekrup terminal dan mounting sesuai torsi datasheet. Untuk modul pin solder EasyPIM, pastikan pin masuk lurus sebelum disolder agar tidak ada tegangan mekanis pada baseplate.
5. Sebelum menghidupkan beban penuh, uji drive pada tegangan rendah atau beban ringan dan pantau suhu heatsink pada beban nominal.

Salah satu titik kritis yang sering terlewat adalah pemeriksaan gate driver. Modul yang rusak akibat peledakan biasanya meninggalkan gate driver yang juga stres, dan kondisi ini tidak selalu terlihat dengan multimeter biasa. Memasang modul baru pada gate driver yang bermasalah adalah cara tercepat merusak modul pengganti.

## Kesalahan Pemesanan yang Paling Sering Terjadi

Tiga kesalahan mendominasi permintaan penggantian modul FP yang salah. Pertama, pembeli memesan berdasarkan arus dan tegangan saja tanpa mengecek housing, lalu modul tidak cocok secara mekanis. Kedua, pembeli mengira akhiran seperti _B11 atau -B15 adalah kode stok pabrik, padahal itu menandakan varian pin atau paket yang berbeda.

Ketiga, dan paling mahal, pembeli mengganti modul karena drive trip tanpa memeriksa brake chopper dan braking resistor. Modul FP yang sehat bisa dianggap rusak jika chopper tidak berfungsi karena resistor remnya putus. Uji dioda penyearah, jalur chopper, dan enam junction inverter dengan multimeter mode dioda sebelum memutuskan membeli modul baru, seperti dijelaskan pada artikel penyebab modul IGBT inverter meledak dan solusi penggantian.

Jika modul lama benar-benar sudah habis di pasar dan tidak ada FP yang cocok, alternatif lain adalah mengganti dengan tiga blok terpisah, yaitu modul penyearah, chopper, dan modul inverter dual. Pendekatan ini menuntut pekerjaan mekanis lebih banyak dan biasanya hanya layak pada unit dengan volume penggantian berulang.

## Checklist Sebelum Memesan Modul FP

Gunakan daftar berikut sebelum menghubungi penyalur, agar penggantian tidak gagal di tengah jalan.

1. Catat part number lengkap yang tercetak pada bodi modul lama, termasuk akhiran seperti G, B11, atau -B15.
2. Ukur panjang dan lebar badan modul, lalu tentukan keluarga housing EasyPIM atau EconoPIM.
3. Foto terminal dan posisi pin, terutama untuk modul EasyPIM 2B yang terpasang di PCB.
4. Catat arus nominal drive atau daya motor yang dilayani, sebagai pembanding rating modul.
5. Periksa braking resistor dan jalur chopper sebelum menyimpulkan modulnya rusak.
6. Periksa kondisi gate driver dan catu negatifnya, bukan hanya modul daya.
7. Siapkan pasta termal dan kunci torsi untuk pemasangan yang benar.

Semua part FP series di katalog ini tersedia melalui CV. Alfa Elektrindo di Batam dengan pengiriman ke seluruh Indonesia, bersama arsip brand Infineon dan kategori IGBT Modules untuk referensi part lainnya. Untuk bantuan pencocokan modul lama atau cek ketersediaan, hubungi WhatsApp 0812-682-6672.
