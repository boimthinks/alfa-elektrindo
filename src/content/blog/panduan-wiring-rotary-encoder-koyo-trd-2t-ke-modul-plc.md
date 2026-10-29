---
title: "Panduan Wiring Rotary Encoder Koyo TRD-2T ke Modul PLC"
slug: "panduan-wiring-rotary-encoder-koyo-trd-2t-ke-modul-plc"
long_title: "Panduan Wiring Rotary Encoder Koyo TRD-2T100BF-2M ke Modul PLC Industri"
date: "2026-10-27T08:30:00.000Z"
kategori: "Blog"
fifu_image_url: "/img/panduan-wiring-rotary-encoder-koyo-trd-2t-ke-modul-plc_poco.webp"
pendahuluan: "Pelajari diagram wiring Koyo TRD-2T100BF-2M, perbedaan output Totem Pole, dan integrasi input PLC berkecepatan tinggi. Solusi sensor di Alfa Elektrindo."
img_prompt: "Automation engineer wiring a Koyo incremental rotary encoder into an industrial PLC control panel enclosure with colored wires."
---

## Tantangan integrasi sensor putar pada sistem otomasi

Pemasangan sensor putar atau encoder pada mesin industri sering mengalami kendala pembacaan data yang tidak akurat. Pulsa yang terlewat, arah putaran yang terbaca terbalik, hingga gangguan sinyal pada kabel kontrol kerap memicu kesalahan posisi pada konveyor dan mesin pemotong.

Kesalahan tersebut umumnya bersumber dari ketidaksesuaian tipe sirkuit keluaran encoder dengan spesifikasi kartu masukan pada Programmable Logic Controller. Selain itu, pengkabelan yang mengabaikan pelindung grounding membuat sinyal pulsa rentan terdistorsi oleh derau motor listrik.

Memahami cara kerja rangkaian keluaran dan panduan pengkabelan sensor putar menjamin data posisi mekanis terbaca presisi oleh sistem kendali otomatis.

## Mengenal kelebihan rangkaian keluaran tipe totem pole

Sensor putar inkremental hadir dengan berbagai variasi rangkaian keluaran, seperti open collector NPN, open collector PNP, line driver diferensial, serta totem pole atau push-pull.

Model [TRD-2T100BF-2M](/part/trd-2t100bf-2m/) buatan pabrikan [Koyo](/ma/koyo/) mengusung arsitektur keluaran totem pole. Rangkaian ini memadukan dua transistor internal yang bekerja bergantian untuk menarik tegangan ke level tinggi mendekati nilai suplai positif dan menurunkannya ke level nol volt secara aktif.

Karakteristik push-pull ini memberikan keuntungan besar bagi perakit panel. Sensor dapat langsung dihubungkan ke kartu masukan PLC tipe sink maupun tipe source dengan rentang tegangan operasi fleksibel antara 10,8 hingga 26,4 Volt DC tanpa perlu memasang resistor pull-up eksternal tambahan.

## Diagram kode warna dan fungsi kabel sinyal Koyo TRD-2T

Kabel bawaan pada seri TRD-2T memiliki lima kabel inti berisolasi warna serta serabut pelindung luar anti-derau. Mengetahui penugasan masing-masing warna kabel menghindarkan risiko kerusakan sirkuit akibat salah sambung polaritas daya.

Kabel coklat difungsikan sebagai kutub positif suplai daya DC 24 Volt. Kabel biru dihubungkan ke kutub negatif atau nol volt ground daya.

Untuk transmisi data pulsa, kabel hitam menyalurkan pulsa fase A dan kabel putih menyalurkan pulsa fase B. Kabel oranye berfungsi menyalurkan pulsa fase Z atau pulsa indeks penanda satu putaran penuh, sedangkan serabut pelindung luar tanpa isolasi wajib disambungkan ke terminal grounding sasis panel.

## Pemanfaatan sinyal kuadratur fase A dan B pada modul PLC

Dua kanal keluaran fase A dan fase B menghasilkan gelombang kotak dengan selisih pergeseran fasa sebesar 90 derajat listrik. Pergeseran ini memungkinkan kartu high speed counter pada PLC menentukan arah pergerakan mekanis mesin.

Saat poros berputar searah jarum jam, pulsa fase A akan naik mendahului pulsa fase B. Sebaliknya, saat poros berputar berlawanan arah jarum jam, pulsa fase B akan mendahului fase A.

Dengan resolusi 100 pulsa per putaran, pemrogram PLC dapat memanfaatkan metode evaluasi 4x kuadratur untuk menghitung 400 perubahan kondisi pulsa setiap putaran poros. Sinyal fase Z yang muncul sekali per putaran dimanfaatkan sebagai titik acuan awal atau kalibrasi posisi mesin sebelum siklus kerja baru dimulai.

## Pemasangan mekanis poros dan peredam getaran

Selain ketelitian elektrik, keawetan [Rotary Encoder](/ca/rotary-encoder/) ditentukan oleh keselarasan pemasangan mekanis. Seri TRD-2T100BF memiliki poros pejal berdiameter 8 milimeter dengan batas beban radial maksimum 50 Newton dan beban aksial 30 Newton.

Penyambungan poros encoder ke poros motor penggerak tidak boleh dipasang kaku secara langsung menggunakan klem mati. Ketidaksejajaran sudut sekecil pecahan milimeter akan membebani bearing internal encoder dan mempercepat keausan mekanis.

Gunakan flexible coupling tipe heliks atau bellow yang lentur untuk menyerap getaran dan ketidaksejajaran poros. Pastikan pula bodi encoder berdiameter 50 milimeter terpasang kokoh pada braket mesin tanpa mengalami tekanan puntir berlebih.

## Penyediaan komponen sensor putar industri di Alfa Elektrindo

Kebutuhan sensor putar pengganti dengan spesifikasi akurat sangat penting untuk menjaga kesinambungan lini produksi manufaktur. Kesalahan memilih resolusi pulsa atau tipe keluaran sinyal dapat mengakibatkan kegagalan sinkronisasi mesin secara menyeluruh.

CV. Alfa Elektrindo menyediakan produk rotary encoder original Koyo dan merek otomasi ternama lainnya dengan jaminan mutu dan spesifikasi terverifikasi. Kami siap mendukung kebutuhan suku cadang sensor dan otomasi pabrik untuk kawasan industri di Batam, Jabodetabek, dan seluruh wilayah Indonesia.
