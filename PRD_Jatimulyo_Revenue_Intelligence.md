# Product Requirements Document (PRD)
# Jatimulyo Revenue Intelligence (JRI)

**Versi:** 1.0  
**Status:** Draft untuk validasi pemangku kepentingan  
**Tanggal:** 20 Oktober 2026  
**Wilayah pilot:** Desa Jatimulyo, Kecamatan Jati Agung, Kabupaten Lampung Selatan, Provinsi Lampung  
**Jenis produk:** Sistem informasi pemetaan potensi ekonomi, verifikasi objek, dan analitik pendukung pendapatan daerah  
**Dokumen:** Markdown (`.md`)

---

## 1. Ringkasan Eksekutif

Jatimulyo Revenue Intelligence (JRI) adalah aplikasi web untuk membantu pemerintah dan pemangku kepentingan yang berwenang mengumpulkan, memetakan, memvalidasi, serta menganalisis informasi objek ekonomi di Desa Jatimulyo. Sistem dirancang untuk meningkatkan kualitas data lapangan dan mendukung tindak lanjut yang dapat membantu optimalisasi penerimaan daerah sesuai kewenangan dan peraturan yang berlaku.

JRI bukan sistem penetapan pajak, bukan pengganti sistem administrasi pajak resmi, dan tidak dapat menetapkan seseorang atau usaha sebagai penunggak pajak secara otomatis. Aplikasi menyediakan data indikatif, jejak audit, alur verifikasi, dan laporan untuk membantu petugas yang berwenang mengambil tindakan melalui proses resmi.

### 1.1 Ringkasan produk

| Elemen | Rincian |
|---|---|
| Nama | Jatimulyo Revenue Intelligence |
| Singkatan | JRI |
| Pengguna utama | Petugas pendataan, verifikator berwenang, analis, pimpinan, administrator |
| Masalah inti | Data potensi ekonomi dapat tersebar, tidak seragam, belum terverifikasi, atau sulit ditindaklanjuti |
| Solusi | Basis data objek ekonomi dengan peta GIS, verifikasi, analisis indikatif, tugas tindak lanjut, dan laporan |
| Platform awal | Aplikasi web responsif |
| Wilayah pilot | Desa Jatimulyo |
| Sasaran jangka panjang | Dapat diperluas ke kecamatan/kabupaten melalui konfigurasi dan tata kelola yang disepakati |
| Model implementasi | Pilot terbatas, evaluasi, lalu integrasi atau ekspansi jika disetujui |

### 1.2 Prinsip utama

1. **Data sebelum asumsi:** kebutuhan dan kondisi aktual harus divalidasi melalui pemangku kepentingan serta survei lapangan.
2. **Estimasi bukan realisasi:** potensi indikatif, hasil verifikasi, dan penerimaan aktual harus dipisahkan.
3. **Kewenangan tetap jelas:** keputusan perpajakan dan pemungutan dilakukan oleh instansi yang berwenang.
4. **Privasi sejak desain:** hanya mengumpulkan data yang diperlukan dan mempunyai dasar pemrosesan yang sah.
5. **Auditabilitas:** perubahan data, status, dan estimasi harus dapat ditelusuri.
6. **Tidak ada pemungutan mandiri:** JRI tidak memungut pajak atau retribusi dan tidak membuat pungutan baru.
7. **Dapat diperluas:** struktur data dan wilayah tidak boleh dikunci hanya untuk satu desa.

---

## 2. Latar Belakang dan Konteks

### 2.1 Konteks wilayah

Desa Jatimulyo berada di Kecamatan Jati Agung, Kabupaten Lampung Selatan, Provinsi Lampung. Informasi publik tingkat kecamatan menunjukkan adanya aktivitas ekonomi seperti UMKM, pertanian, perdagangan, dan kegiatan wisata di kawasan Jati Agung. Namun, keberadaan, jumlah, persebaran, dan kontribusi setiap jenis aktivitas di Desa Jatimulyo harus dikonfirmasi melalui data resmi dan survei lapangan.

### 2.2 Konteks penerimaan daerah

Pendapatan Asli Daerah (PAD) memiliki sumber dan mekanisme yang diatur oleh ketentuan perundang-undangan. JRI berfokus pada dukungan data dan analitik untuk membantu proses yang sah, terutama:
- pemetaan objek ekonomi;
- peningkatan kualitas dan kelengkapan data;
- penemuan kemungkinan duplikasi atau data kedaluwarsa;
- pengorganisasian pemeriksaan lapangan;
- analisis indikatif sesuai aturan yang berlaku;
- dokumentasi tindak lanjut dan rekonsiliasi dengan data resmi yang diizinkan.

JRI tidak mengasumsikan bahwa semua usaha merupakan objek pajak tertentu. Klasifikasi dan kelayakan suatu objek harus ditentukan berdasarkan aturan yang berlaku serta pemeriksaan oleh petugas berwenang.

### 2.3 Hipotesis masalah yang perlu divalidasi

Hipotesis berikut bukan pernyataan bahwa masalah telah terbukti terjadi di Jatimulyo.

- Informasi objek ekonomi mungkin tersimpan dalam beberapa dokumen atau sistem.
- Koordinat dan identitas objek mungkin belum seragam.
- Status verifikasi dan pembaruan data mungkin sulit dilihat dalam satu tampilan.
- Petugas mungkin membutuhkan mekanisme untuk mengatur prioritas survei dan tindak lanjut.
- Pimpinan mungkin membutuhkan laporan yang membedakan potensi indikatif dari realisasi penerimaan.
- Sistem yang sudah digunakan pemerintah mungkin telah mencakup sebagian kebutuhan tersebut.

Sebelum pembangunan penuh, tim wajib memetakan sistem yang telah ada dan memastikan JRI tidak menduplikasi fungsi tanpa alasan yang jelas.

---

## 3. Visi, Misi, dan Tujuan Produk

### 3.1 Visi

Menjadi sistem informasi intelijen data wilayah yang membantu pemerintah mengambil keputusan berbasis data tentang potensi ekonomi dan pendapatan daerah secara transparan, terukur, dan dapat diaudit.

### 3.2 Misi

- Menyediakan satu katalog data objek ekonomi yang terstruktur untuk wilayah pilot.
- Memudahkan pendataan lapangan dan validasi oleh petugas yang ditunjuk.
- Menyediakan peta dan analitik untuk mendukung penentuan prioritas pemeriksaan.
- Mencatat alur tindak lanjut secara transparan.
- Menghasilkan laporan yang dapat digunakan untuk evaluasi program dan perencanaan.
- Menjaga keamanan, privasi, kualitas data, serta batas kewenangan.

### 3.3 Tujuan bisnis dan operasional

1. Mengurangi waktu yang dibutuhkan untuk mencari, memperbarui, dan merekap data objek ekonomi.
2. Meningkatkan kelengkapan dan akurasi data lapangan.
3. Memudahkan petugas mengetahui objek yang belum diverifikasi atau perlu diperbarui.
4. Menyediakan dasar data yang lebih baik untuk perencanaan pemeriksaan dan tindak lanjut resmi.
5. Mengukur apakah penggunaan sistem berkontribusi pada perbaikan proses dan, jika datanya tersedia, penerimaan tambahan yang terverifikasi.
6. Menyediakan pola implementasi yang dapat dievaluasi sebelum diperluas.

### 3.4 Hal yang bukan tujuan produk

- Menetapkan kewajiban pajak atau retribusi secara otomatis.
- Menggantikan sistem administrasi pajak atau keuangan resmi.
- Menentukan pelanggaran, sanksi, atau status tunggakan secara otomatis.
- Memungut pajak atau retribusi melalui akun pengembang aplikasi.
- Membuka data pribadi atau data perpajakan kepada publik.
- Menjanjikan kenaikan PAD tertentu sebelum ada baseline dan bukti.
- Mengumpulkan data pribadi dalam skala besar tanpa dasar kewenangan yang jelas.

---

## 4. Pemangku Kepentingan dan Pengguna

### 4.1 Pemangku kepentingan

| Pemangku kepentingan | Kepentingan | Peran yang diharapkan |
|---|---|---|
| Pemerintah Desa Jatimulyo | Data ekonomi lokal dan perencanaan desa | Konsultasi, pendataan sesuai kewenangan, validasi konteks lokal |
| Kecamatan Jati Agung | Koordinasi wilayah | Koordinasi dan fasilitasi jika diperlukan |
| BPPRD Kabupaten Lampung Selatan | Administrasi pajak/retribusi sesuai kewenangan | Validasi klasifikasi, kebutuhan, aturan, serta integrasi data yang diizinkan |
| Bappeda/perangkat daerah terkait | Perencanaan dan analisis | Konsultasi indikator, penggunaan laporan |
| Petugas lapangan | Pendataan objek | Input dan pembaruan data sesuai penugasan |
| Verifikator | Validasi informasi | Meninjau bukti, menyetujui atau mengembalikan data |
| Pengelola TI pemerintah | Keamanan dan integrasi | Peninjauan teknis, hosting, akses, dan integrasi |
| Pelaku usaha/warga | Akurasi informasi yang relevan | Memberikan atau mengoreksi informasi melalui mekanisme yang sah |
| Pengembang/penyedia | Implementasi dan dukungan | Mengembangkan dan memelihara aplikasi berdasarkan kontrak yang sah |

### 4.2 Persona pengguna

#### Persona A — Petugas pendataan
- Perlu mendata objek di lapangan dengan cepat.
- Memerlukan formulir yang mudah dipakai melalui laptop atau ponsel.
- Memerlukan pencatatan sumber informasi dan koordinat.
- Tidak boleh menetapkan kewajiban pajak.

#### Persona B — Verifikator berwenang
- Perlu meninjau data, bukti, dan riwayat perubahan.
- Memerlukan fungsi menyetujui, mengembalikan, atau menolak data dengan alasan.
- Memerlukan pembatasan akses sesuai tugas.

#### Persona C — Analis
- Perlu melihat distribusi objek, kualitas data, backlog verifikasi, dan skenario potensi.
- Memerlukan filter, ekspor, dan metadata sumber data.
- Tidak boleh mengubah hasil verifikasi tanpa otorisasi.

#### Persona D — Pimpinan
- Memerlukan ringkasan yang mudah dibaca.
- Ingin mengetahui perkembangan, hambatan, biaya, dan hasil tindak lanjut.
- Memerlukan angka yang jelas membedakan estimasi dan penerimaan aktual.

#### Persona E — Administrator aplikasi
- Mengelola akun, peran, konfigurasi, dan kesehatan sistem.
- Akses teknis tidak otomatis berarti akses ke seluruh data sensitif.
- Perubahan penting harus tercatat dalam audit log.

---

## 5. Ruang Lingkup Produk

### 5.1 In-scope untuk MVP

1. Login dan autentikasi pengguna.
2. Kontrol akses berbasis peran (RBAC).
3. Manajemen wilayah pilot dan kategori objek.
4. Formulir pendataan objek ekonomi.
5. Penyimpanan alamat, koordinat, sumber data, dan tanggal pendataan.
6. Peta interaktif dengan filter.
7. Daftar objek dengan pencarian, penyaringan, dan pengurutan.
8. Alur status verifikasi.
9. Catatan pemeriksaan dan lampiran bukti yang relevan.
10. Deteksi awal potensi duplikasi.
11. Penugasan tindak lanjut.
12. Dashboard kualitas dan cakupan data.
13. Ekspor laporan dasar ke CSV/XLSX atau PDF.
14. Audit log untuk aktivitas penting.
15. Konfigurasi dasar kategori dan wilayah.
16. Backup dan pemulihan database.
17. Dokumentasi penggunaan dan administrasi.

### 5.2 In-scope untuk tahap lanjutan

- Analitik potensi indikatif berbasis aturan yang disahkan.
- Perbandingan data dengan sumber resmi yang boleh digunakan.
- Integrasi API resmi jika tersedia dan disetujui.
- Sinkronisasi data secara terjadwal.
- Mode pendataan dengan koneksi terbatas/offline terbatas.
- Analitik tren berdasarkan periode.
- Notifikasi tugas dan pengingat pembaruan.
- Pengelolaan lampiran dan retensi data yang lebih lengkap.
- Ekspansi ke desa atau kecamatan lain.
- Modul katalog ekonomi lokal jika ada kebutuhan dan pemilik proses yang jelas.

### 5.3 Out-of-scope

- Pemungutan atau pembayaran pajak.
- Penerbitan ketetapan atau surat tagihan resmi.
- Penetapan tunggakan, sanksi, atau pelanggaran otomatis.
- Pengambilan data rahasia dari sistem pihak lain tanpa izin.
- Pengumpulan NIK/NPWP/NOP secara massal untuk prototipe.
- Pelacakan individu tanpa dasar yang sah.
- Marketplace penuh pada MVP.
- Aplikasi mobile native pada MVP.
- Prediksi berbasis AI sebelum kualitas data dan kebutuhan terbukti.
- Integrasi ke sistem pemerintah tanpa persetujuan dan dokumentasi teknis.

---

## 6. Prinsip Desain Produk

1. **Satu objek, satu ID internal:** setiap objek memiliki pengenal unik di JRI.
2. **Sumber data selalu dicatat:** setiap objek memiliki sumber, tanggal, dan petugas penginput.
3. **Status terlihat jelas:** data baru, menunggu verifikasi, terverifikasi, perlu perbaikan, ditolak, atau diarsipkan.
4. **Perubahan dapat dilacak:** perubahan data penting harus menyimpan pengguna, waktu, dan alasan.
5. **Pemisahan data dan keputusan:** sistem membantu analisis, tetapi keputusan administratif tetap pada pejabat yang berwenang.
6. **Prinsip minimisasi:** kumpulkan hanya data yang diperlukan untuk tujuan yang disepakati.
7. **Tidak ada skor “pelanggaran”:** skor prioritas hanya mengatur pekerjaan verifikasi, bukan menilai kesalahan atau kewajiban pajak.
8. **Akses berdasarkan tugas:** pengguna hanya melihat fungsi dan data yang dibutuhkan.
9. **Aksesibilitas:** antarmuka harus responsif, kontras jelas, label formulir mudah dipahami, dan tidak bergantung pada warna saja.
10. **Konfigurasi, bukan hardcode:** kategori, status, dan wilayah harus dapat dikelola secara terkontrol.

---

## 7. Alur Kerja Utama

### 7.1 Pendataan objek baru

1. Petugas login.
2. Petugas membuka menu “Tambah Objek”.
3. Petugas mengisi kategori, nama tampilan, lokasi, sumber informasi, dan atribut yang diperlukan.
4. Sistem memvalidasi kolom wajib dan format data.
5. Sistem mencari kemungkinan objek serupa berdasarkan nama, alamat, dan jarak koordinat.
6. Jika ada kemungkinan duplikasi, sistem menampilkan peringatan dan meminta petugas meninjau.
7. Petugas mengirim data.
8. Status menjadi `Menunggu Verifikasi`.
9. Verifikator menerima objek dalam daftar tugas.

### 7.2 Verifikasi objek

1. Verifikator membuka detail objek dan riwayatnya.
2. Verifikator meninjau informasi dan bukti pendukung.
3. Verifikator memilih salah satu tindakan:
   - `Terverifikasi`;
   - `Perlu Perbaikan`;
   - `Ditolak`;
   - `Perlu Pemeriksaan Lanjutan`.
4. Verifikator wajib mengisi alasan untuk tindakan yang memerlukan alasan.
5. Sistem mencatat keputusan, pengguna, dan waktu.
6. Petugas dapat memperbaiki data jika diminta.
7. Perubahan yang relevan dikirim ulang untuk pemeriksaan.

Status `Terverifikasi` hanya menyatakan data yang diverifikasi sesuai ruang lingkup pemeriksaan, bukan penetapan kewajiban pajak.

### 7.3 Penugasan tindak lanjut

1. Analis atau verifikator mengusulkan objek untuk tindak lanjut.
2. Pengguna berwenang menyetujui dan menetapkan penanggung jawab.
3. Petugas melaksanakan tugas sesuai kewenangan.
4. Hasil dan bukti dicatat.
5. Verifikator meninjau hasil.
6. Jika berhubungan dengan administrasi pajak, objek diteruskan melalui proses resmi yang berlaku.
7. Hasil rekonsiliasi dicatat jika data penerimaan resmi tersedia.

### 7.4 Analisis potensi

1. Analis memilih kategori dan periode.
2. Sistem mengambil hanya data yang memenuhi syarat analisis.
3. Sistem menampilkan asumsi, sumber data, tanggal pembaruan, dan metode perhitungan.
4. Hasil diberi label `Indikatif`.
5. Hasil tidak boleh masuk ke metrik `Realisasi` sebelum dikonfirmasi melalui sumber resmi.
6. Perubahan parameter perhitungan dicatat dan diberi versi.

---

## 8. Status dan Definisi Data

### 8.1 Status objek

| Status | Definisi |
|---|---|
| `Draft` | Data belum dikirim oleh petugas |
| `Menunggu Verifikasi` | Data telah dikirim dan menunggu tinjauan |
| `Perlu Perbaikan` | Data dikembalikan untuk dilengkapi atau dikoreksi |
| `Terverifikasi` | Data telah diperiksa dalam ruang lingkup yang ditentukan |
| `Perlu Pemeriksaan Lanjutan` | Informasi membutuhkan pemeriksaan tambahan |
| `Ditolak` | Data tidak diterima dengan alasan yang dicatat |
| `Diarsipkan` | Data tidak lagi aktif dalam daftar operasional tetapi tetap mengikuti kebijakan retensi |

### 8.2 Kategori angka pada dashboard

| Label | Makna | Boleh disebut penerimaan aktual? |
|---|---|---|
| Objek terdata | Objek yang sudah dimasukkan ke JRI | Tidak |
| Objek terverifikasi | Objek yang lolos pemeriksaan data | Tidak |
| Potensi indikatif | Skenario estimasi dengan asumsi yang terdokumentasi | Tidak |
| Potensi tervalidasi | Estimasi yang diperiksa sesuai metodologi dan kewenangan | Tidak |
| Tindak lanjut | Aktivitas yang telah diproses melalui alur kerja | Tidak |
| Realisasi terkonfirmasi | Penerimaan yang cocok dengan sumber resmi yang disetujui | Ya, sesuai definisi dan cakupan data |

---

## 9. Persyaratan Fungsional

Prioritas:
- **P0:** wajib untuk MVP.
- **P1:** penting untuk tahap berikutnya.
- **P2:** peningkatan lanjutan.

### FR-01 — Autentikasi dan sesi (P0)
- Pengguna harus login untuk mengakses fitur internal.
- Sistem menyediakan mekanisme logout.
- Sesi harus memiliki masa berlaku dan mekanisme kedaluwarsa.
- Akun yang dinonaktifkan tidak dapat login.
- Password disimpan menggunakan hashing yang aman, bukan plaintext.
- Reset akun mengikuti prosedur yang aman.

**Kriteria penerimaan**
- Pengguna tanpa sesi tidak dapat membuka halaman internal.
- Akun nonaktif ditolak.
- Aktivitas login/logout yang relevan dapat dicatat tanpa menyimpan password.

### FR-02 — Role-Based Access Control (P0)
- Sistem mendukung peran administrator, petugas pendataan, verifikator, analis, dan pimpinan.
- Hak akses dapat ditentukan per fungsi.
- Pengguna tidak boleh menaikkan perannya sendiri.
- Akses ke data sensitif dibatasi secara terpisah.

**Kriteria penerimaan**
- Petugas pendataan tidak dapat menyetujui data yang dibuatnya sendiri kecuali kebijakan pilot secara eksplisit mengizinkan dan ada kontrol pengganti.
- Pimpinan dapat melihat dashboard yang diizinkan tetapi tidak otomatis dapat mengubah data sumber.
- Penolakan akses dicatat untuk operasi penting.

### FR-03 — Manajemen objek ekonomi (P0)
- Pengguna berwenang dapat membuat, melihat, dan memperbarui objek.
- Setiap objek memiliki ID unik.
- Sistem menyimpan sumber dan tanggal pendataan.
- Sistem memvalidasi field wajib.
- Penghapusan permanen dibatasi; arsip menjadi pilihan standar.

**Kriteria penerimaan**
- Objek tidak dapat dikirim tanpa field wajib.
- ID internal tidak dapat diduplikasi.
- Pembaruan menyimpan riwayat perubahan yang relevan.

### FR-04 — Pemetaan GIS (P0)
- Sistem menampilkan objek pada peta.
- Peta mendukung filter kategori, status, dan periode.
- Pengguna dapat membuka detail objek sesuai hak akses.
- Sistem menangani objek tanpa koordinat dengan menandainya pada daftar.
- Koordinat harus berada dalam rentang valid.

**Kriteria penerimaan**
- Filter peta sesuai dengan hasil pada daftar.
- Objek tanpa koordinat tidak menyebabkan halaman gagal.
- Data sensitif tidak ditampilkan pada pop-up yang dapat diakses tanpa izin.

### FR-05 — Alur verifikasi (P0)
- Verifikator dapat menyetujui, meminta perbaikan, menolak, atau meminta pemeriksaan lanjutan.
- Keputusan tertentu mewajibkan alasan.
- Sistem menyimpan waktu, pengguna, dan status sebelum/sesudah.
- Data yang diubah setelah verifikasi dapat kembali ke status yang sesuai kebijakan.

**Kriteria penerimaan**
- Perubahan status hanya dapat dilakukan peran yang diizinkan.
- Setiap keputusan dapat ditelusuri.
- Status verifikasi tidak disamakan dengan status pajak.

### FR-06 — Deteksi kemungkinan duplikasi (P1)
- Sistem membandingkan nama, alamat, kategori, dan jarak koordinat jika tersedia.
- Sistem memberi peringatan kemungkinan duplikasi.
- Pengguna berwenang dapat menghubungkan, mengabaikan, atau mengeskalasi temuan.
- Sistem tidak menghapus atau menggabungkan objek secara otomatis.

**Kriteria penerimaan**
- Kemungkinan duplikasi muncul sebagai peringatan, bukan keputusan final.
- Tindakan pengguna atas peringatan dicatat.

### FR-07 — Tugas tindak lanjut (P0)
- Pengguna berwenang dapat membuat tugas dari objek.
- Tugas memiliki penanggung jawab, prioritas, tenggat jika digunakan, status, dan catatan.
- Perubahan status tugas tercatat.
- Tugas yang terlambat dapat difilter.

**Kriteria penerimaan**
- Setiap tugas mempunyai objek atau konteks yang jelas.
- Pengguna yang tidak berwenang tidak dapat mengubah penanggung jawab.
- Tugas selesai harus memiliki catatan hasil.

### FR-08 — Dashboard operasional (P0)
- Menampilkan total objek, objek menunggu verifikasi, objek terverifikasi, data perlu perbaikan, dan tugas terbuka.
- Mendukung filter periode, kategori, dan wilayah jika tersedia.
- Menampilkan tanggal pembaruan data.
- Tidak mencampur estimasi dengan realisasi.

**Kriteria penerimaan**
- Angka dashboard cocok dengan data sumber sesuai filter.
- Semua kartu dan grafik memiliki label yang jelas.
- Data kosong ditampilkan sebagai “Belum tersedia”, bukan nol jika maknanya berbeda.

### FR-09 — Mesin estimasi potensi (P1)
- Perhitungan harus menggunakan parameter yang dapat ditelusuri.
- Setiap estimasi memiliki versi formula, tanggal, sumber, dan asumsi.
- Parameter tarif atau ambang batas hanya dapat dikonfigurasi oleh peran yang disetujui.
- Sistem menampilkan rentang atau skenario jika data belum lengkap.
- Hasil ditandai sebagai indikatif sampai divalidasi.

**Kriteria penerimaan**
- Pengguna dapat melihat dasar perhitungan.
- Estimasi tidak otomatis menghasilkan tagihan.
- Perubahan parameter tidak mengubah laporan historis tanpa jejak versi.

### FR-10 — Impor dan ekspor (P0)
- Pengguna berwenang dapat mengekspor data sesuai filter dan hak akses.
- Impor data harus memvalidasi kolom dan format.
- Sistem menyediakan ringkasan baris berhasil, gagal, dan alasan kegagalan.
- Data sensitif tidak dapat diekspor oleh semua peran.

**Kriteria penerimaan**
- Ekspor sesuai filter yang dipilih.
- Kegagalan impor tidak menyebabkan data parsial yang tidak diketahui.
- Ekspor tercatat di audit log untuk data yang dibatasi.

### FR-11 — Audit log (P0)
- Sistem mencatat login penting, perubahan data, perubahan status, ekspor sensitif, perubahan peran, dan konfigurasi.
- Log tidak dapat diubah oleh pengguna biasa.
- Log memiliki waktu, pengguna, jenis tindakan, dan referensi objek.
- Jangan mencatat password, token, atau data rahasia yang tidak perlu.

**Kriteria penerimaan**
- Administrator yang tidak memiliki izin khusus tidak dapat mengubah catatan audit.
- Log dapat dicari oleh pengguna berwenang.
- Perubahan penting memiliki nilai sebelum/sesudah jika aman dan relevan.

### FR-12 — Integrasi dengan sistem resmi (P2)
- Integrasi hanya dilakukan setelah persetujuan tertulis, dokumentasi API, dan penetapan dasar akses.
- Sistem harus mendukung pemetaan ID sumber dan ID internal.
- Data impor harus menyimpan asal dan waktu sinkronisasi.
- Jika API tidak tersedia, gunakan mekanisme impor yang disetujui.

**Kriteria penerimaan**
- Tidak ada akses tidak sah ke sistem lain.
- Kegagalan integrasi tidak mengubah data resmi secara otomatis.
- Perbedaan data ditampilkan untuk rekonsiliasi.

### FR-13 — Notifikasi (P2)
- Notifikasi untuk tugas baru, permintaan perbaikan, atau tugas mendekati tenggat.
- Kanal notifikasi ditentukan bersama pemilik sistem.
- Notifikasi tidak memuat data sensitif yang tidak diperlukan.

### FR-14 — Pengelolaan wilayah dan kategori (P0)
- Administrator berwenang dapat mengelola kategori dan wilayah.
- Kategori yang sudah dipakai tidak dihapus permanen jika merusak histori; gunakan status aktif/nonaktif.
- Perubahan konfigurasi dicatat.

---

## 10. Persyaratan Nonfungsional

### NFR-01 — Performa
- Untuk beban pilot, halaman daftar dan dashboard ditargetkan tampil dalam waktu kurang dari 3 detik pada kondisi jaringan dan data uji yang disepakati.
- Pencarian umum ditargetkan merespons kurang dari 2 detik pada dataset pilot yang telah ditentukan.
- Peta menggunakan pagination, clustering, atau pemuatan bertahap jika jumlah titik besar.
- Target final harus diuji berdasarkan perangkat, jaringan, dan ukuran dataset nyata.

### NFR-02 — Ketersediaan
- Target awal ketersediaan selama pilot: 99% per bulan, di luar pemeliharaan terjadwal dan gangguan penyedia infrastruktur.
- Rencana backup dan pemulihan harus diuji sebelum penggunaan operasional.

### NFR-03 — Keamanan
- HTTPS wajib untuk deployment.
- Password di-hash menggunakan algoritma yang sesuai praktik keamanan modern.
- Validasi input dilakukan di frontend dan backend.
- Perlindungan terhadap SQL injection, XSS, CSRF sesuai arsitektur, brute force, dan akses langsung tanpa izin.
- Rahasia konfigurasi disimpan di environment/secret manager, bukan repository.
- Hak akses menerapkan prinsip least privilege.
- Audit log dilindungi dari perubahan biasa.
- Backup dienkripsi jika memuat data sensitif.
- Dependency diperbarui dan diperiksa secara berkala.

### NFR-04 — Privasi dan perlindungan data
- Tetapkan tujuan, dasar pemrosesan, pemilik data, dan masa retensi sebelum pengumpulan.
- Minimalkan pengumpulan data pribadi.
- Data yang dapat mengidentifikasi individu hanya dapat diakses oleh peran yang mempunyai kebutuhan dan kewenangan.
- Jangan menampilkan informasi wajib pajak pada peta publik.
- Gunakan data sintetis atau agregat untuk demo.
- Sediakan prosedur koreksi data dan penanganan insiden.
- Tinjau kepatuhan terhadap UU Perlindungan Data Pribadi dan ketentuan sektoral yang berlaku.

### NFR-05 — Usability dan aksesibilitas
- Antarmuka berbahasa Indonesia.
- Responsif pada desktop, tablet, dan ponsel.
- Form memiliki label dan pesan kesalahan yang jelas.
- Status tidak dibedakan hanya dengan warna; gunakan teks dan ikon.
- Alur utama dapat dipelajari melalui panduan singkat.
- Konfirmasi diperlukan untuk tindakan yang berdampak besar.

### NFR-06 — Maintainability
- Kode menggunakan struktur modul yang konsisten.
- API terdokumentasi.
- Migrasi database dikelola dengan version control.
- Tersedia environment development, staging, dan production.
- Perubahan skema dan aturan estimasi disertai pengujian.

### NFR-07 — Backup dan pemulihan
- Jadwal backup ditetapkan bersama pemilik sistem.
- Backup disimpan terpisah dari lingkungan utama.
- Uji pemulihan dilakukan sebelum pilot dan berkala.
- Target RPO/RTO ditentukan saat desain deployment disepakati.

### NFR-08 — Interoperabilitas
- Data dapat diekspor dalam format umum sesuai hak akses.
- API mengikuti skema yang terdokumentasi jika dikembangkan.
- Format koordinat dan waktu konsisten.
- Import/export tidak boleh menghilangkan informasi sumber dan status verifikasi.

---

## 11. Rancangan Antarmuka dan Navigasi

### 11.1 Struktur navigasi

1. Dashboard
2. Peta Potensi
3. Data Objek
4. Tambah Objek
5. Verifikasi
6. Tugas Tindak Lanjut
7. Analisis Potensi
8. Laporan
9. Audit Log
10. Pengaturan
11. Profil dan Keluar

Menu ditampilkan berdasarkan peran pengguna.

### 11.2 Halaman Dashboard

Komponen:
- Kartu jumlah objek terdata.
- Kartu objek menunggu verifikasi.
- Kartu objek terverifikasi.
- Kartu data perlu perbaikan.
- Kartu tugas terbuka.
- Grafik pendataan berdasarkan waktu.
- Distribusi kategori objek.
- Peta ringkas.
- Tanggal pembaruan data.
- Penjelasan sumber dan cakupan data.

Jangan tampilkan kartu “PAD berhasil ditingkatkan” sebelum ada data penerimaan aktual dan metodologi atribusi yang disepakati.

### 11.3 Halaman Peta Potensi

Komponen:
- Peta utama.
- Filter kategori.
- Filter status verifikasi.
- Filter tanggal/periode.
- Pencarian objek.
- Legenda status.
- Panel detail objek.
- Indikator data tanpa koordinat.
- Tombol ekspor sesuai izin.

### 11.4 Halaman Data Objek

Komponen:
- Tabel dengan pagination.
- Kolom ID, kategori, nama tampilan, wilayah, tanggal pendataan, status, dan sumber.
- Pencarian dan filter.
- Tombol lihat detail.
- Tombol tambah/edit sesuai izin.
- Peringatan kemungkinan duplikasi.

### 11.5 Halaman Detail Objek

Tab:
- Ringkasan.
- Lokasi dan peta.
- Data pendataan.
- Bukti pendukung.
- Riwayat verifikasi.
- Tugas tindak lanjut.
- Riwayat perubahan.

### 11.6 Halaman Analisis Potensi

Komponen:
- Pemilihan kategori dan periode.
- Penjelasan sumber data.
- Parameter dan asumsi formula.
- Hasil skenario.
- Rentang ketidakpastian jika sesuai.
- Tanggal pembaruan.
- Label “indikatif” atau “tervalidasi”.
- Ekspor laporan analisis.

### 11.7 Pedoman visual

- Gaya profesional, bersih, dan berorientasi data.
- Warna utama netral; gunakan warna status secara konsisten.
- Hindari visual yang menyiratkan kesalahan atau tunggakan tanpa keputusan resmi.
- Gunakan grafik sederhana dan peta yang mudah dibaca.
- Sediakan tampilan kosong, loading, error, dan data belum tersedia.
- Setiap grafik memiliki judul, satuan, periode, dan sumber data.

---

## 12. Model Data Awal

Skema berikut merupakan rancangan logis. Detail kolom dan relasi harus disempurnakan setelah kebutuhan data dan kebijakan instansi dikonfirmasi.

### 12.1 `users`
- `id`
- `name`
- `username` atau `email`
- `password_hash`
- `role_id`
- `is_active`
- `created_at`
- `updated_at`
- `last_login_at`

### 12.2 `roles`
- `id`
- `name`
- `permissions`
- `created_at`
- `updated_at`

### 12.3 `regions`
- `id`
- `parent_id`
- `name`
- `region_type`
- `official_code` (nullable)
- `is_active`

### 12.4 `object_categories`
- `id`
- `name`
- `description`
- `requires_location`
- `is_active`
- `created_at`
- `updated_at`

### 12.5 `economic_objects`
- `id`
- `internal_code`
- `category_id`
- `region_id`
- `display_name`
- `address_text`
- `location_point` (geospatial)
- `data_source`
- `collected_at`
- `collected_by`
- `verification_status`
- `last_verified_at`
- `created_at`
- `updated_at`
- `archived_at` (nullable)

Hindari menyimpan atribut identitas pribadi atau nomor pajak dalam tabel umum jika tidak diperlukan. Jika dibutuhkan untuk integrasi resmi, desain tabel terpisah dengan kontrol akses lebih ketat dan dasar penggunaan yang jelas.

### 12.6 `verification_records`
- `id`
- `economic_object_id`
- `reviewer_id`
- `decision`
- `reason`
- `evidence_reference`
- `reviewed_at`
- `created_at`

### 12.7 `follow_up_tasks`
- `id`
- `economic_object_id`
- `title`
- `description`
- `assigned_to`
- `created_by`
- `priority`
- `status`
- `due_at` (nullable)
- `completed_at` (nullable)
- `outcome_note`
- `created_at`
- `updated_at`

### 12.8 `potential_estimates`
- `id`
- `economic_object_id` atau referensi agregasi
- `category_id`
- `period_start`
- `period_end`
- `formula_version`
- `assumptions_json`
- `estimated_min`
- `estimated_max`
- `validation_status`
- `source_reference`
- `calculated_at`
- `calculated_by`

### 12.9 `revenue_records`
- `id`
- `source_system`
- `source_record_reference`
- `category_id`
- `region_id`
- `period`
- `amount`
- `reconciliation_status`
- `reconciled_by`
- `reconciled_at`
- `created_at`

Gunakan data agregat jika identitas transaksi atau wajib pajak tidak dibutuhkan untuk tujuan pilot.

### 12.10 `audit_logs`
- `id`
- `actor_user_id`
- `action`
- `entity_type`
- `entity_id`
- `before_summary`
- `after_summary`
- `reason`
- `ip_or_session_reference` sesuai kebijakan privasi
- `created_at`

### 12.11 Relasi inti

- Satu kategori dapat memiliki banyak objek.
- Satu wilayah dapat memiliki banyak objek.
- Satu objek dapat memiliki banyak catatan verifikasi.
- Satu objek dapat memiliki banyak tugas tindak lanjut.
- Estimasi dapat terhubung dengan objek atau kelompok objek.
- Rekaman penerimaan harus dapat ditelusuri ke sumber resmi dan status rekonsiliasinya.
- Audit log menyimpan referensi entitas, bukan menggantikan tabel sumber.

---

## 13. Aturan Bisnis

1. Setiap objek wajib mempunyai ID internal unik.
2. Data objek tidak dapat dinyatakan terverifikasi oleh sistem hanya karena semua kolom terisi.
3. Status verifikasi harus ditetapkan oleh peran yang berwenang.
4. Sistem wajib menyimpan sumber dan tanggal pendataan.
5. Data tanpa koordinat tetap dapat disimpan jika kategorinya mengizinkan, tetapi tidak ditampilkan sebagai titik valid pada peta.
6. Deteksi duplikasi hanya menghasilkan kandidat untuk ditinjau.
7. Estimasi potensi harus mencantumkan asumsi, formula, sumber, dan waktu perhitungan.
8. Parameter pajak harus mengacu pada aturan resmi yang berlaku dan mempunyai versi efektif.
9. Perubahan aturan tidak boleh menulis ulang histori tanpa pencatatan versi.
10. Estimasi tidak dapat otomatis menjadi tagihan atau kewajiban pajak.
11. Realisasi hanya dapat ditampilkan sebagai terkonfirmasi jika cocok dengan sumber resmi yang disetujui.
12. Jika data penerimaan tidak tersedia, dashboard harus menampilkan “Belum tersedia”.
13. Pengguna tidak dapat menyetujui perubahan yang dilarang oleh kebijakan pemisahan tugas.
14. Penghapusan permanen dibatasi dan mengikuti kebijakan retensi.
15. Ekspor data mengikuti hak akses dan dicatat untuk data sensitif.
16. Tidak boleh ada pungutan baru yang diciptakan oleh JRI.
17. Data warga atau usaha tidak boleh dipublikasikan tanpa dasar dan otorisasi yang sesuai.
18. Semua keputusan administratif tetap berada di luar mesin analitik kecuali melalui sistem resmi yang berwenang.

---

## 14. Analisis Potensi dan Metodologi

### 14.1 Prinsip perhitungan

Tidak ada satu formula yang cocok untuk semua kategori objek. Metode perhitungan harus ditetapkan per kategori berdasarkan data yang sah dan aturan yang berlaku.

Contoh alur:
1. Tentukan kategori objek.
2. Tentukan data minimum yang dibutuhkan.
3. Verifikasi apakah kategori relevan dengan suatu jenis pajak atau retribusi.
4. Pastikan aturan, tarif, ambang batas, dan pengecualian yang berlaku.
5. Hitung estimasi indikatif berdasarkan data yang tersedia.
6. Catat asumsi dan tingkat kelengkapan data.
7. Tampilkan hasil beserta sumber dan tanggalnya.
8. Jangan menganggap estimasi sebagai penerimaan aktual.

### 14.2 Contoh simulasi (bukan data Jatimulyo)

Misalnya, data simulasi menunjukkan potensi penerimaan yang secara hipotetis dapat ditindaklanjuti sebesar Rp120.000.000 per tahun, sementara biaya tambahan program Rp20.000.000 per tahun.

- Potensi bruto simulasi: Rp120.000.000.
- Biaya tambahan simulasi: Rp20.000.000.
- Selisih ilustratif: Rp100.000.000.

Angka tersebut bukan estimasi faktual untuk Desa Jatimulyo dan tidak boleh digunakan dalam proposal sebagai hasil riset lapangan. Dampak aktual harus berdasarkan objek yang memenuhi syarat, pemeriksaan resmi, pembayaran yang terealisasi, biaya, serta faktor eksternal.

### 14.3 Metrik finansial

- Nilai potensi indikatif.
- Nilai potensi yang sudah diperiksa.
- Nilai tindak lanjut yang diselesaikan.
- Penerimaan aktual yang terkonfirmasi.
- Biaya operasional program.
- Biaya per objek yang berhasil diverifikasi.
- Selisih terhadap baseline dengan penjelasan faktor lain.

### 14.4 Pencegahan klaim berlebihan

- Jangan mengatribusikan seluruh kenaikan penerimaan ke JRI.
- Bandingkan periode yang sebanding.
- Dokumentasikan perubahan tarif, target, kondisi ekonomi, dan kebijakan.
- Jika memungkinkan, gunakan kelompok pembanding.
- Sajikan keterbatasan data dalam laporan.

---

## 15. KPI dan Kriteria Keberhasilan

Target kuantitatif berikut merupakan **target awal untuk dibahas dan disetujui setelah baseline tersedia**, bukan data performa yang sudah dicapai.

| KPI | Definisi | Target pilot awal |
|---|---|---|
| Cakupan pendataan | Objek valid terdata dibandingkan objek yang diketahui dalam area survei | Target ditetapkan setelah baseline |
| Kelengkapan data | Objek dengan seluruh field wajib lengkap | ≥ 90% |
| Tingkat verifikasi | Objek yang telah diverifikasi dibandingkan objek yang diajukan | ≥ 80% dari data yang diajukan selama pilot |
| Duplikasi yang ditinjau | Kandidat duplikasi yang memiliki keputusan petugas | ≥ 90% kandidat ditinjau |
| Penyelesaian tugas | Tugas selesai dibandingkan tugas yang jatuh tempo | Target ditetapkan setelah baseline |
| Waktu pendataan | Median waktu input per objek | Turun dibandingkan proses baseline |
| Ketersediaan aplikasi | Waktu layanan tersedia selama periode pilot | Target awal 99%, tidak termasuk pemeliharaan terjadwal |
| Insiden akses tidak sah | Insiden yang dikonfirmasi | 0 insiden yang tidak tertangani |
| Rekonsiliasi penerimaan | Rekaman yang cocok dengan sumber resmi dibandingkan rekaman yang hendak dilaporkan sebagai realisasi | 100% untuk angka yang diberi label terkonfirmasi |
| Dampak PAD | Perubahan penerimaan yang terverifikasi dan relevan dengan intervensi | Dievaluasi setelah data dan periode pembanding tersedia |

### 15.1 Metode pengukuran

- Catat baseline sebelum aplikasi dipakai.
- Tetapkan periode pilot dan area survei.
- Definisikan “objek valid” sebelum penghitungan.
- Pisahkan data yang baru ditemukan dari objek yang benar-benar memenuhi kriteria tertentu.
- Gunakan data resmi untuk angka realisasi.
- Buat laporan evaluasi yang menjelaskan faktor lain yang memengaruhi hasil.

---

## 16. Rencana Pengembangan

### Fase 0 — Discovery dan validasi (minggu 1–2)

**Aktivitas**
- Wawancara pemerintah desa.
- Konsultasi dengan Kecamatan Jati Agung dan BPPRD.
- Inventarisasi aplikasi dan dataset yang sudah tersedia.
- Identifikasi pemilik data, dasar akses, dan proses kerja.
- Survei awal kategori objek ekonomi.
- Penetapan baseline dan indikator.

**Output**
- Dokumen temuan wawancara.
- Peta proses saat ini.
- Daftar kebutuhan yang disetujui.
- Matriks sumber data dan akses.
- Keputusan apakah MVP perlu dilanjutkan.

### Fase 1 — Desain produk (minggu 3–4)

**Aktivitas**
- Finalisasi user flow.
- Wireframe dan prototipe UI/UX.
- Model data dan API contract.
- Desain peran dan hak akses.
- Threat modeling dasar.
- Rencana uji penerimaan.

**Output**
- Prototipe yang dapat diuji.
- Skema database.
- Spesifikasi API.
- Daftar test case.
- Persetujuan rancangan dari pemilik proses.

### Fase 2 — Pembangunan MVP (minggu 5–8)

**Aktivitas**
- Autentikasi dan RBAC.
- CRUD objek.
- Peta dan filter.
- Verifikasi.
- Tugas tindak lanjut.
- Dashboard operasional.
- Audit log.
- Ekspor laporan.
- Pengujian otomatis dan manual.

**Output**
- Aplikasi staging.
- Dokumentasi deployment.
- Hasil pengujian.
- Daftar isu dan mitigasi.

### Fase 3 — Uji coba terbatas (minggu 9–10)

**Aktivitas**
- Pelatihan pengguna.
- Input data simulasi dan data lapangan yang diizinkan.
- Uji skenario pendataan dan verifikasi.
- Pemeriksaan kualitas data.
- Pengujian keamanan dasar.
- Pengumpulan umpan balik.

**Output**
- Laporan pilot.
- Daftar perbaikan.
- Evaluasi KPI awal.
- Keputusan lanjut, revisi, atau berhenti.

### Fase 4 — Evaluasi dan rencana ekspansi (minggu 11–12)

**Aktivitas**
- Evaluasi manfaat dan biaya.
- Tinjau tata kelola data.
- Konfirmasi integrasi yang dibutuhkan.
- Rencana dukungan dan pemeliharaan.
- Persetujuan ekspansi jika layak.

**Output**
- Laporan evaluasi akhir.
- Roadmap versi berikutnya.
- Estimasi biaya operasional.
- Rencana ekspansi yang disetujui.

Timeline 12 minggu adalah rencana indikatif. Durasi bergantung pada akses data, ketersediaan pemangku kepentingan, kapasitas tim, dan proses persetujuan.

---

## 17. Strategi Pengujian

### 17.1 Unit test
- Validasi field wajib.
- Pembuatan ID unik.
- Perhitungan statistik dan estimasi.
- Validasi status.
- Hak akses fungsi.
- Deteksi input tidak valid.

### 17.2 Integration test
- API dan database.
- Login dan RBAC.
- Pembuatan objek hingga verifikasi.
- Pembuatan tugas hingga penyelesaian.
- Impor dan ekspor.
- Pencatatan audit log.

### 17.3 UI test
- Form desktop dan ponsel.
- Filter peta dan tabel.
- Kondisi loading, kosong, dan error.
- Dialog konfirmasi.
- Navigasi berdasarkan peran.

### 17.4 Security test
- Akses tanpa autentikasi.
- Akses lintas peran.
- Input berbahaya.
- Pengujian session dan logout.
- Pembatasan ekspor.
- Pemeriksaan kebocoran data melalui log dan respons API.
- Uji pemulihan backup.

### 17.5 User Acceptance Test (UAT)
UAT dilaksanakan oleh perwakilan pengguna yang ditunjuk. Setiap skenario memiliki hasil yang diharapkan dan status lulus/gagal. Penggunaan operasional dimulai hanya setelah isu kritis ditangani dan pemilik sistem menyetujui hasilnya.

---

## 18. Teknologi yang Direkomendasikan

| Lapisan | Teknologi | Alasan |
|---|---|---|
| Frontend | React + Vite + TypeScript | UI modular, ekosistem luas, cocok untuk dashboard |
| UI styling | Tailwind CSS atau sistem desain konsisten | Mempercepat pengembangan antarmuka |
| Peta | Leaflet | Ringan dan cocok untuk peta interaktif |
| Basemap | OpenStreetMap atau penyedia yang disetujui | Peta dasar; patuhi atribusi dan ketentuan penggunaan |
| Backend | Python FastAPI | API terstruktur dan dokumentasi OpenAPI |
| Database | PostgreSQL | Data relasional yang matang |
| Spatial | PostGIS | Query dan indeks geospasial |
| Authentication | Session aman atau token dengan desain yang tepat | Dipilih berdasarkan arsitektur deployment |
| File storage | Penyimpanan objek privat | Untuk lampiran yang diizinkan |
| Export | CSV/XLSX/PDF | Format laporan yang umum |
| Testing | Pytest, test frontend, dan pengujian API | Memeriksa fungsi dan regresi |
| Deployment | Server/cloud yang disetujui pemilik sistem | Disesuaikan dengan kebijakan dan kebutuhan keamanan |

Pilihan teknologi dapat berubah setelah peninjauan standar TI pemerintah, kebijakan hosting, dan kebutuhan integrasi.

---

## 19. Deployment dan Operasional

### 19.1 Environment
- **Development:** untuk pengembangan harian menggunakan data sintetis.
- **Staging:** untuk UAT dan demonstrasi.
- **Production:** hanya setelah persetujuan dan kesiapan operasional.

### 19.2 Persyaratan deployment
- Domain dan HTTPS.
- Secret management.
- Database tidak dibuka langsung ke internet.
- Backup terjadwal dan uji restore.
- Monitoring kesehatan aplikasi.
- Log error yang tidak membocorkan data pribadi.
- Patch keamanan dan pembaruan dependency.
- Kontak dukungan dan prosedur insiden.
- Rencana ekspor data dan pengakhiran layanan agar pemilik data tidak terkunci pada vendor.

### 19.3 Dukungan operasional
- Dokumentasi admin.
- Panduan pengguna.
- Prosedur pembuatan dan penonaktifan akun.
- Prosedur koreksi data.
- Prosedur backup/restore.
- Prosedur respons insiden.
- Jadwal pemeliharaan yang dikomunikasikan.
- Mekanisme pencatatan dan prioritas bug.

---

## 20. Privasi, Keamanan, dan Tata Kelola

### 20.1 Dasar tata kelola
Sebelum menggunakan data operasional, para pihak harus menentukan:
- siapa pemilik dan pengendali data;
- siapa pemroses data;
- tujuan dan dasar pemrosesan;
- kategori data yang boleh dikumpulkan;
- siapa yang dapat mengakses data;
- masa retensi dan penghapusan;
- cara koreksi data;
- prosedur permintaan akses;
- prosedur insiden dan pelaporan;
- perjanjian pemrosesan atau kerja sama jika diperlukan.

### 20.2 Data untuk prototipe
Gunakan data sintetis, data agregat, atau data publik yang lisensinya mengizinkan. Jangan memakai identitas wajib pajak atau dokumen pribadi nyata dalam presentasi.

### 20.3 Data operasional
Akses hanya diberikan setelah persetujuan tertulis, pemeriksaan dasar hukum, pembatasan akses, dan langkah keamanan yang memadai. Pengembang tidak boleh menyalin data sensitif ke perangkat atau akun pribadi tanpa otorisasi.

### 20.4 Referensi regulasi untuk ditinjau
Daftar berikut adalah titik awal untuk pemeriksaan hukum; bukan pengganti telaah oleh bagian hukum atau instansi berwenang.

- Undang-Undang Nomor 1 Tahun 2022 tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintahan Daerah.
- Peraturan pelaksana terkait pajak daerah dan retribusi daerah.
- Peraturan Daerah Kabupaten Lampung Selatan Nomor 1 Tahun 2024 tentang Pajak Daerah dan Retribusi Daerah, berikut perubahan atau aturan pelaksana terbaru jika ada.
- Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi.
- Ketentuan SPBE, keamanan informasi, arsip, dan pengadaan pemerintah yang relevan, sesuai status instansi serta bentuk kerja sama.

Seluruh dasar hukum, tarif, ambang batas, kewenangan, dan perubahan terbaru wajib diverifikasi sebelum implementasi operasional.

---

## 21. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Data resmi tidak tersedia | Analisis tidak dapat divalidasi | Gunakan data sintetis untuk prototipe; minta akses resmi; mulai dari data yang diizinkan |
| Duplikasi dengan sistem pemerintah | Produk tidak digunakan | Discovery sistem yang ada; fokus pada celah yang disetujui |
| Data lapangan tidak akurat | Analisis menyesatkan | Sumber data wajib, verifikasi, audit, dan koreksi |
| Estimasi dianggap sebagai tagihan | Risiko administratif dan kepercayaan | Label tegas, pemisahan modul, persetujuan instansi |
| Kebocoran data | Dampak hukum dan reputasi | RBAC, enkripsi, minimisasi, audit, dan respons insiden |
| Tidak ada pemilik proses | Tugas tidak ditindaklanjuti | Tetapkan sponsor dan penanggung jawab sebelum pilot |
| Anggaran tidak tersedia | Operasional terhenti | Pilot kecil, biaya transparan, dan rencana pemeliharaan |
| Ketergantungan vendor | Sulit berpindah sistem | Dokumentasi, ekspor data, source code dan hak penggunaan yang disepakati |
| Bias dalam prioritas | Pemeriksaan tidak adil | Kriteria transparan, tinjauan manusia, audit dan mekanisme koreksi |
| Integrasi gagal | Data tidak sinkron | Integrasi bertahap, staging, rekonsiliasi, dan fallback impor yang disetujui |

---

## 22. Model Biaya dan Keberlanjutan

Biaya belum dapat ditetapkan secara akurat sebelum jumlah pengguna, volume data, kebutuhan hosting, standar keamanan, dan model pengadaan diketahui.

### 22.1 Komponen biaya
- Discovery dan konsultasi.
- Desain UI/UX.
- Pengembangan frontend dan backend.
- Pembuatan dan pengelolaan database.
- Peta dan layanan geospasial.
- Hosting dan domain.
- Backup, monitoring, dan keamanan.
- Pelatihan pengguna.
- Pemeliharaan dan dukungan.
- Integrasi dan migrasi data jika diperlukan.

### 22.2 Model kerja sama yang dapat dipertimbangkan
- Pengembangan sebagai proyek dengan ruang lingkup dan serah terima yang jelas.
- Lisensi atau layanan perangkat lunak jika sesuai aturan dan model pengadaan.
- Pemeliharaan tahunan melalui perjanjian yang sah.
- Kolaborasi dengan perguruan tinggi atau program inovasi jika tersedia.

Tidak ada jaminan kontrak atau anggaran pemerintah. Semua kerja sama harus melalui proses yang transparan dan sesuai ketentuan pengadaan serta tata kelola yang berlaku.

---

## 23. Asumsi dan Ketergantungan

### 23.1 Asumsi
- Desa Jatimulyo menjadi lokasi pilot awal.
- Terdapat pemangku kepentingan yang bersedia menilai prototipe.
- Data awal dapat dikumpulkan secara sah.
- Pengguna mempunyai perangkat dan koneksi yang cukup untuk mengakses aplikasi web.
- Pemilik proses dapat menunjuk petugas pendataan dan verifikator.

### 23.2 Ketergantungan
- Akses dan kualitas data.
- Persetujuan pemilik data.
- Konfirmasi proses dan aturan yang berlaku.
- Ketersediaan pengguna untuk UAT.
- Persetujuan hosting dan keamanan.
- Dokumentasi integrasi jika diperlukan.
- Penetapan pemilik aplikasi dan anggaran operasional.

### 23.3 Asumsi yang harus dikonfirmasi sebelum pembangunan penuh
- Sistem digital apa yang telah digunakan oleh desa, kecamatan, dan kabupaten?
- Data objek ekonomi apa yang sudah tersedia dan dalam format apa?
- Apakah pemetaan lapangan memang menjadi kebutuhan prioritas?
- Kategori objek mana yang layak menjadi fokus pilot?
- Siapa yang berwenang memverifikasi tiap jenis data?
- Apakah data penerimaan agregat dapat diakses untuk evaluasi?
- Apakah sistem harus di-host di infrastruktur pemerintah?
- Apakah ada standar teknis atau keamanan internal yang wajib dipenuhi?

---

## 24. Rencana Rilis

### Release 0 — Prototype
- Data sintetis.
- Dashboard contoh.
- Peta contoh.
- Form pendataan.
- Demo alur verifikasi.
- Tidak terhubung ke data rahasia atau sistem produksi.

### Release 1 — MVP Pilot
- Login dan RBAC.
- Pendataan objek.
- Peta dan daftar objek.
- Verifikasi.
- Tugas tindak lanjut.
- Dashboard kualitas data.
- Ekspor dan audit log.
- Penggunaan data operasional hanya setelah disetujui.

### Release 2 — Analitik Potensi
- Formula estimasi yang telah ditinjau.
- Sumber dan versi aturan.
- Skenario indikatif.
- Pelaporan potensi yang tervalidasi.
- Evaluasi terhadap baseline.

### Release 3 — Integrasi dan Ekspansi
- Integrasi dengan sumber resmi jika diizinkan.
- Rekonsiliasi data penerimaan.
- Pengelolaan banyak wilayah.
- Analitik tren.
- Perluasan setelah evaluasi pilot.

---

## 25. Definition of Done

Fitur dinyatakan selesai jika:
1. Kebutuhan dan kriteria penerimaan disetujui.
2. Implementasi memenuhi kriteria penerimaan.
3. Unit test dan integration test yang relevan lulus.
4. Hak akses telah diuji.
5. Tidak ada bug kritis yang diketahui dan belum ditangani.
6. Dokumentasi pengguna dan teknis diperbarui.
7. Logging dan penanganan error tersedia.
8. Pengujian keamanan yang relevan selesai.
9. Perubahan database memiliki migrasi.
10. Pemilik proses menyetujui hasil UAT untuk fitur yang memengaruhi proses operasional.

---

## 26. Open Questions

Pertanyaan berikut perlu dijawab bersama pemangku kepentingan sebelum PRD difinalisasi:

1. Siapa sponsor dan pemilik produk dari pihak pemerintah?
2. Apakah tujuan pilot adalah pendataan ekonomi umum atau fokus pada kategori pajak/retribusi tertentu?
3. Data apa yang boleh digunakan dan siapa yang memberi persetujuan?
4. Sistem apa yang sudah ada dan apakah memiliki API atau mekanisme ekspor?
5. Siapa yang boleh mengubah status verifikasi?
6. Bagaimana definisi objek valid untuk menghitung cakupan?
7. Apakah data penerimaan agregat tersedia untuk evaluasi dampak?
8. Apa persyaratan hosting, keamanan, dan retensi data?
9. Berapa pengguna, perangkat, dan volume objek yang diperkirakan?
10. Bagaimana mekanisme pengadaan, lisensi, serah terima kode, dan pemeliharaan?
11. Apakah ada kebutuhan pendataan offline?
12. Kapan pilot dianggap berhasil dan siapa yang menyetujui ekspansi?

---

## 27. Rekomendasi Keputusan

Rekomendasi awal:

1. Setujui **Discovery dan Prototype** terlebih dahulu, bukan langsung deployment produksi.
2. Gunakan data sintetis untuk demonstrasi.
3. Fokuskan MVP pada peta, pendataan objek, verifikasi, tugas, dashboard kualitas data, dan audit.
4. Tunda estimasi pajak otomatis sampai aturan, data, dan kewenangan dikonfirmasi.
5. Jangan membangun ulang fungsi sistem penerimaan resmi yang sudah tersedia.
6. Tetapkan baseline dan metode evaluasi sebelum pilot.
7. Lakukan tinjauan keamanan, privasi, dan hukum sebelum menggunakan data operasional.
8. Perluas ke kecamatan atau kabupaten hanya setelah pilot dievaluasi dan disetujui.

---

## 28. Referensi Awal

Referensi berikut merupakan titik awal riset dan perlu diperiksa kembali saat implementasi, terutama untuk memastikan perubahan terbaru.

- BPS Kabupaten Lampung Selatan: https://lampungselatankab.bps.go.id/
- Open Data Kabupaten Lampung Selatan: https://gotrack.lampungselatankab.go.id/opendata/
- Portal Pemerintah Kabupaten Lampung Selatan: https://lampungselatankab.go.id/
- Dashboard pajak Pemerintah Kabupaten Lampung Selatan: https://gotrack.lampungselatankab.go.id/command_center/pajak/dashboard
- Database Peraturan BPK — UU Nomor 1 Tahun 2022: https://peraturan.bpk.go.id/Details/195696/uu-no-1-tahun-2022
- Portal peraturan perundang-undangan: https://peraturan.go.id/

**Catatan:** Dokumen ini adalah PRD awal untuk diskusi dan validasi. Dokumen ini bukan penetapan hukum, bukan jaminan dampak penerimaan, dan bukan persetujuan resmi pemerintah. Semua data, kewenangan, metode perhitungan, dan integrasi operasional harus divalidasi oleh pemilik data dan instansi yang berwenang sebelum digunakan dalam produksi.
