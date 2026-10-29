---
title: |-
  TRD-2T100BF-2M
slug: |-
  trd-2t100bf-2m
category: |-
  Rotary Encoder
manufacturer: |-
  Koyo
featured: true
fifu_image_url: |-
  /img/KOYO-TRD-2T100BF-2M_poco.webp
pendahuluan: |-
  <p>Koyo TRD-2T100BF-2M adalah incremental rotary encoder tipe solid shaft (poros pejal) dengan resolusi 100 pulsa per putaran (100 P/R) yang diproduksi oleh Koyo Electronics Industries (JTEKT Corporation). Mengusung bodi kokoh berdiameter luar 50 mm dan diameter poros 8 mm, sensor putar ini dirancang untuk membaca posisi sudut, kecepatan putar, serta laju pergerakan mekanis mesin manufaktur secara akurat.</p>
  <p>Encoder seri TRD-2T ini menggunakan sirkuit keluaran tipe totem-pole (push-pull) yang fleksibel dihubungkan ke input PLC tipe sink (NPN) maupun source (PNP). Dilengkapi kabel bawaan sepanjang 2 meter dengan pelindung grounding (shielded cable) dan rentang suplai daya lebar 10,8 hingga 26,4 VDC, TRD-2T100BF-2M tahan terhadap fluktuasi tegangan maupun gangguan induksi kabel pada panel kontrol industri.</p>
spesifikasi: |-
  <table>
  <thead>
  <tr>
  <th>Parameter Teknis</th>
  <th>Nilai Spesifikasi</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Part Number</td>
  <td>TRD-2T100BF-2M / TRD-2T100BF</td>
  </tr>
  <tr>
  <td>Brand / Pabrikan</td>
  <td>Koyo Electronics Industries Co., Ltd. (JTEKT)</td>
  </tr>
  <tr>
  <td>Tipe Sensor</td>
  <td>Incremental Rotary Encoder (Shaft Type)</td>
  </tr>
  <tr>
  <td>Resolusi Pulsa</td>
  <td>100 Pulses Per Revolution (P/R)</td>
  </tr>
  <tr>
  <td>Tegangan Operasional Suplai</td>
  <td>10,8 hingga 26,4 VDC (Ripple p-p maks 3%)</td>
  </tr>
  <tr>
  <td>Konsumsi Arus Tanpa Beban</td>
  <td>Maksimum 50 mA</td>
  </tr>
  <tr>
  <td>Format Fase Output</td>
  <td>Fase A, Fase B, dan Fase Z (Marker / Origin Index)</td>
  </tr>
  <tr>
  <td>Tipe Rangkaian Output</td>
  <td>Totem Pole Output (Push-Pull kompatibel NPN / PNP)</td>
  </tr>
  <tr>
  <td>Beban Arus Output Maksimum</td>
  <td>Sink 30 mA / Source 10 mA</td>
  </tr>
  <tr>
  <td>Frekuensi Respon Maksimum</td>
  <td>50 kHz</td>
  </tr>
  <tr>
  <td>Diameter Poros (Shaft)</td>
  <td>8 mm solid shaft</td>
  </tr>
  <tr>
  <td>Diameter Bodi Luar</td>
  <td>50 mm</td>
  </tr>
  <tr>
  <td>Beban Poros Maksimum (Mekanis)</td>
  <td>Radial: 50 N, Aksial: 30 N</td>
  </tr>
  <tr>
  <td>Kecepatan Putar Maksimum Diizinkan</td>
  <td>5.000 RPM</td>
  </tr>
  <tr>
  <td>Panjang Kabel Bawaan</td>
  <td>2 meter (oil-resistant shielded cable)</td>
  </tr>
  <tr>
  <td>Derajat Proteksi Lingkungan</td>
  <td>IP50 (tahan debu industri)</td>
  </tr>
  <tr>
  <td>Suhu Operasional</td>
  <td>-10°C hingga +70°C</td>
  </tr>
  </tbody>
  </table>
penjelasan_spesifikasi: |-
  <p><strong>1. Sinyal Tiga Kanal (Fase A, B, dan Z) untuk Deteksi Arah dan Titik Nol</strong><br />
  Keluaran fase A dan B memiliki selisih fase 90 derajat listrik (kuadratur). Perbedaan urutan pulsa ini memungkinkan modul counter PLC mendeteksi arah putaran poros (searah jarum jam CW atau berlawanan arah jarum jam CCW) sekaligus melipatgandakan resolusi perhitungan jika menggunakan mode 2x atau 4x kuadratur. Kanal Z menghasilkan satu pulsa referensi per satu putaran penuh sebagai penanda posisi asal (home position / origin marker).</p>
  <p><strong>2. Rangkaian Totem Pole dengan Fleksibilitas Tegangan 24V</strong><br />
  Arsitektur sirkuit push-pull totem pole menghasilkan level tegangan tinggi mendekati nilai tegangan suplai DC (Vcc - 2,5V) dan level rendah di bawah 0,4V. Karakteristik ini membuat sinyal pulsa tetap tajam dan minim distorsi meski ditarik melewati kabel kontrol sepanjang 2 meter atau lebih, tanpa membutuhkan resistor pull-up eksternal pada kartu input PLC 24V.</p>
  <p><strong>3. Standar Kode Warna Pengkabelan (Wiring Pinout)</strong><br />
  Pemasangan kabel TRD-2T100BF-2M sangat jelas berkat label terminal pada bodi encoder:
  kabel Coklat (BRN) untuk tegangan positif DC 10,8–26,4V;
  kabel Biru (BLU) untuk 0V Ground Daya;
  kabel Hitam (BLK) untuk Output Fase A;
  kabel Putih (WHT) untuk Output Fase B;
  kabel Oranye (ORN) untuk Output Indeks Fase Z;
  serta serabut pelindung luar (SHLD) disambungkan ke grounding sasis untuk meredam interferensi.</p>
aplikasi_dalam_industri: |-
  <p>Encoder Koyo TRD-2T100BF-2M banyak diandalkan dalam bermacam lini otomatisasi pabrikasi:</p>
  <ul>
  <li><strong>Mesin Pemotong Otomatis (Cut-to-Length System):</strong> Menghitung panjang gulungan lembaran logam, pipa PVC, atau kain tekstil sebelum dieksekusi oleh pisau pemotong pneumatik.</li>
  <li><strong>Sinkronisasi Sabuk Konveyor (Conveyor Tracking):</strong> Memastikan pergerakan robot pemindah barang (pick-and-place) atau sistem dispensing lem bekerja selaras dengan kecepatan konveyor yang dinamis.</li>
  <li><strong>Mesin Pengemas dan Pelabelan (Packaging and Labeling):</strong> Mengatur penempatan label stiker dan penyegelan kantong plastik kemasan makanan secara presisi pada kecepatan tinggi.</li>
  <li><strong>Pemantauan Kecepatan Motor Listrik (Tachometer Digital):</strong> Mengukur feedback kecepatan poros motor induksi untuk input inverter variabel (VFD) pada mesin sentrifugal dan mixer.</li>
  </ul>
penutup: |-
  <p>Koyo TRD-2T100BF-2M menjadi solusi andal untuk penggantian encoder aus maupun instalasi mesin baru berkat keawetan poros bearing dan sinyal output yang stabil. CV. Alfa Elektrindo menyediakan rotary encoder Koyo original dengan spesifikasi terverifikasi untuk kebutuhan industri manufaktur di Batam, Cikarang, Karawang, Surabaya, dan kawasan industri seluruh Indonesia.</p>
published: true
---
