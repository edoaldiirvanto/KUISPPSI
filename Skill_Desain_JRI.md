# Skill Desain UI/UX — Jatimulyo Revenue Intelligence (JRI)

## 1. Identitas Skill

**Nama:** JRI Government Revenue Intelligence Design System  
**Jenis:** Skill desain UI/UX untuk dashboard administrasi desa, pemetaan ekonomi, analitik potensi pendapatan, verifikasi lapangan, dan pelaporan pemerintahan.  
**Produk acuan:** Jatimulyo Revenue Intelligence (JRI)  
**Bahasa antarmuka:** Bahasa Indonesia  
**Gaya utama:** Government SaaS, modern enterprise dashboard, data-driven, rapi, profesional, mudah dipakai petugas lapangan maupun staf kantor.

Gunakan skill ini saat merancang halaman baru, memperbaiki antarmuka yang sudah ada, membuat komponen, atau menyusun prompt desain untuk tool seperti Google Stitch berdasarkan pola UI dalam kode referensi.

## 2. Tujuan Desain

Buat antarmuka yang membantu pemerintah desa untuk:
- Mendata objek ekonomi dan usaha lokal.
- Memetakan lokasi objek ekonomi berdasarkan dusun, RT/RW, dan koordinat.
- Memverifikasi identitas usaha, foto, dokumen, serta kualitas data.
- Memahami potensi ekonomi secara indikatif melalui dashboard dan analitik.
- Menindaklanjuti hasil verifikasi melalui tugas lapangan.
- Menghasilkan laporan yang konsisten dan dapat ditelusuri.
- Mengelola akun, peran, hak akses, dan jejak audit.

Desain harus menekankan keterbacaan, transparansi, akuntabilitas, keamanan data, dan efisiensi pekerjaan administrasi. Jangan membuat estimasi atau status terlihat seperti fakta terverifikasi jika datanya masih berupa simulasi atau indikasi.

## 3. Prinsip Visual

1. **Profesional dan administratif:** Hindari tampilan yang terlalu playful, dekorasi berlebihan, gradient mencolok, dan animasi yang tidak membantu.
2. **Informasi bertingkat:** Judul halaman, deskripsi, status, ringkasan, konten utama, dan tindakan harus mudah dibedakan.
3. **Data dahulu:** Angka, status verifikasi, filter, tabel, peta, dan grafik harus menjadi fokus utama.
4. **Konsistensi:** Gunakan token warna, jarak, radius, tipografi, tombol, badge, dan pola formulir yang sama di semua halaman.
5. **Aman dan transparan:** Tandai data sensitif, jelaskan status proses, tampilkan konfirmasi sebelum tindakan penting, dan sediakan jejak audit.
6. **Bisa dipakai di lapangan:** Formulir panjang harus terbagi menjadi bagian logis, mudah dinavigasi, dan responsif pada layar lebih kecil.
7. **Jangan hanya mengandalkan warna:** Status penting harus memiliki teks dan/atau ikon yang jelas.
8. **Data contoh harus diberi konteks:** Data dummy, simulasi, estimasi, dan data belum diverifikasi tidak boleh ditampilkan sebagai data resmi.

## 4. Sistem Warna

Gunakan palet berikut sebagai token utama. Pertahankan rasio kontras yang memadai untuk teks dan kontrol.

| Token | Nilai | Penggunaan |
|---|---|---|
| `primary` | `#005138` | Warna utama, navigasi aktif, CTA utama |
| `primary-container` | `#176B4D` | Latar elemen utama dan ikon penting |
| `secondary` | `#006B5A` | Aksen sekunder, elemen pendukung |
| `secondary-container` | `#95F4DC` | Sorotan sekunder yang lembut |
| `tertiary` | `#5E4200` | Informasi perhatian/indikator khusus |
| `tertiary-fixed-dim` | `#F2BE5C` | Aksen kuning hangat untuk peringatan non-kritis |
| `background` / `surface` | `#F8F9FF` | Latar halaman |
| `surface-container-low` | `#EFF4FF` | Area input, filter, panel sekunder |
| `surface-container` | `#E6EEFF` | Latar pembungkus dan elemen terkelompok |
| `surface-container-high` | `#DEE9FC` | Hover, pemisah, atau kontrol sekunder |
| `surface-container-lowest` | `#FFFFFF` | Kartu dan permukaan utama |
| `on-surface` | `#121C2A` | Teks utama |
| `on-surface-variant` | `#3F4943` | Teks pendukung |
| `outline` | `#6F7A73` | Border dan elemen pembatas |
| `outline-variant` | `#BEC9C1` | Border halus |
| `error` | `#BA1A1A` | Kesalahan dan tindakan destruktif |
| `error-container` | `#FFDAD6` | Latar pesan kesalahan |
| `on-primary` | `#FFFFFF` | Teks di atas warna utama |

### Aturan warna
- Gunakan hijau tua sebagai identitas visual dan CTA utama.
- Gunakan latar putih atau sangat terang agar tabel dan formulir tetap jelas.
- Gunakan kuning/emas untuk status perlu perhatian, bukan untuk dekorasi.
- Gunakan merah hanya untuk kesalahan, risiko, atau tindakan destruktif.
- Hindari menjadikan semua kartu berwarna; utamakan permukaan netral dengan aksen seperlunya.
- Pastikan teks kecil tetap terbaca pada badge, tabel, dan kontrol.

## 5. Tipografi

**Font utama:** Inter (fallback: system sans-serif).

| Gaya | Ukuran | Line-height | Bobot | Penggunaan |
|---|---:|---:|---:|---|
| Headline XL desktop | 32 px | 40 px | 700 | Judul utama tertentu |
| Headline XL mobile | 24 px | 32 px | 700 | Judul pada layar kecil |
| Headline LG | 24 px | 32 px | 600 | Judul halaman/area besar |
| Headline MD | 18 px | 26 px | 600 | Judul kartu atau bagian |
| Headline SM | 15 px | 22 px | 600 | Judul komponen kecil |
| Body LG | 16 px | 24 px | 400 | Deskripsi penting |
| Body MD | 14 px | 20 px | 400 | Isi utama |
| Body SM | 12 px | 18 px | 400 | Keterangan tambahan |
| Label LG | 14 px | 20 px | 600 | Label kontrol dan tombol |
| Label MD | 12 px | 16 px | 500 | Label dan metadata |
| Label SM | 11 px | 14 px | 600 | Badge dan metadata ringkas |
| Numeric metric | 28 px | 34 px | 700 | KPI dan angka utama |

Aturan:
- Gunakan ukuran besar untuk angka KPI, tetapi jangan memperbesar semua angka.
- Gunakan angka tabular/monospaced untuk ID, kode, koordinat, dan angka yang perlu dibandingkan.
- Gunakan huruf kapital seperlunya; hindari paragraf panjang dengan huruf kapital semua.
- Label formulir harus spesifik dan diletakkan dekat kontrolnya.

## 6. Spacing, Grid, Radius, dan Elevation

### Skala jarak
- `space-xs`: 4 px
- `space-sm`: 8 px
- `space-md`: 16 px
- `space-lg`: 24 px
- `space-xl`: 32 px
- `gutter`: 24 px
- `gutter-sm`: 16 px
- `margin`: 32 px

### Radius
- Default: 4 px
- `lg`: 8 px
- `xl`: 12 px
- `full`: 9999 px untuk chip/pill/avatar

### Layout
- Desktop: sidebar tetap di kiri, header di atas area konten, konten utama memakai lebar terukur dan grid responsif.
- Gunakan grid 12 kolom jika halaman memiliki formulir atau panel kompleks.
- Kartu utama umumnya menggunakan padding 24 px; komponen ringkas 12–16 px.
- Jarak antarkelompok harus lebih besar daripada jarak antarelemen di dalam kelompok.
- Gunakan border halus dan shadow ringan. Jangan memakai shadow berat pada setiap elemen.
- Hindari scrollbar dekoratif yang disembunyikan jika hal itu mengurangi aksesibilitas atau menyulitkan pengguna.

## 7. Kerangka Aplikasi

### Sidebar navigasi
Sidebar desktop berwarna putih dengan logo/monogram JRI dan nama produk. Navigasi menggunakan ikon Material Symbols Outlined dan label yang jelas.

Urutan modul yang didukung pola desain referensi:
1. Ringkasan Dashboard
2. Peta Ekonomi
3. Data Objek Ekonomi
4. Verifikasi Data
5. Analisis Potensi
6. Tindak Lanjut
7. Laporan
8. Audit dan Kualitas Data
9. Manajemen Pengguna
10. Pengaturan

Panduan sidebar:
- Item aktif memakai latar `primary-container` atau variasi hijau yang kontras, dengan teks putih.
- Item tidak aktif menggunakan teks `on-surface-variant` dan hover lembut.
- Kelompok administrasi seperti Manajemen Pengguna dan Pengaturan dapat dipisahkan dengan divider.
- Di bagian bawah sidebar, tampilkan konteks administrasi seperti tahun anggaran dan status sistem jika datanya tersedia.
- Pada layar kecil, ubah sidebar menjadi drawer atau navigasi yang dapat dibuka/tutup.

### Header atas
Sertakan:
- Breadcrumb yang menunjukkan posisi pengguna.
- Kolom pencarian global, misalnya pencarian NOP, NIK, nama usaha, atau dusun.
- Notifikasi dengan indikator jumlah yang belum dibaca jika tersedia.
- Bantuan.
- Identitas pengguna dan peran.

Jangan menampilkan informasi pribadi yang tidak dibutuhkan. Data akun dan peran harus berasal dari sesi yang valid, bukan nilai hard-coded pada implementasi produksi.

### Area konten
Gunakan pola konsisten:
1. Breadcrumb atau konteks halaman.
2. Judul halaman dan deskripsi singkat.
3. Tindakan utama dan status halaman.
4. Ringkasan/KPI bila relevan.
5. Filter atau navigasi bagian.
6. Konten utama berupa tabel, formulir, peta, grafik, atau daftar tugas.
7. Pesan status, bantuan, dan catatan metodologi bila dibutuhkan.

## 8. Pola Komponen

### Kartu
- Latar putih, radius 12 px, padding 16–24 px.
- Judul singkat dan deskripsi ringkas.
- Gunakan ikon dalam wadah kecil dengan latar warna lembut.
- Kartu KPI menampilkan label, angka besar, satuan, perubahan/perbandingan jika tersedia, dan sumber/periode data bila relevan.

### Tombol
- **Primary:** hijau tua, teks putih, untuk tindakan utama seperti Simpan Draf atau Ajukan Verifikasi.
- **Secondary:** permukaan netral dengan border atau latar lembut.
- **Tertiary/Ghost:** tanpa latar dominan untuk tindakan sekunder.
- **Danger:** merah untuk hapus, arsip permanen, atau tindakan destruktif.
- Setiap tombol harus memiliki label berupa kata kerja yang spesifik.
- Tampilkan loading, disabled, sukses, dan gagal jika proses asynchronous memang ada.
- Jangan menampilkan keadaan berhasil sebelum operasi backend benar-benar berhasil.

### Badge/status
Status harus konsisten dan menyertakan teks, misalnya:
- Aktif
- Musiman
- Tutup sementara
- Draf
- Menunggu verifikasi
- Terverifikasi
- Perlu perbaikan
- Ditolak
- Indikatif
- Data tidak lengkap

Gunakan hijau untuk status positif, kuning/emas untuk perlu perhatian, merah untuk gagal/ditolak, dan abu-abu untuk status netral. Jangan menyampaikan arti status hanya melalui warna.

### Formulir
- Gunakan label eksplisit, tanda wajib (`*`) dan validasi di dekat field.
- Placeholder hanya sebagai contoh, bukan pengganti label.
- Kelompokkan field berdasarkan tujuan, bukan berdasarkan urutan teknis database.
- Field wajib dan opsional harus dibedakan.
- Berikan pesan kesalahan yang menyebutkan cara memperbaiki.
- Untuk formulir panjang, gunakan stepper/anchor bagian dan indikator progres.
- Simpan draf otomatis hanya jika benar-benar diimplementasikan; jelaskan status penyimpanan.
- Sebelum meninggalkan formulir dengan perubahan belum disimpan, tampilkan dialog konfirmasi.

### Tabel data
- Prioritaskan keterbacaan, alignment konsisten, header jelas, dan jarak baris cukup.
- Sediakan pencarian, filter, pengurutan, pagination, dan keadaan kosong jika dibutuhkan.
- Aksi per baris sebaiknya ringkas dan dapat ditemukan.
- Gunakan kolom status yang konsisten dan format angka/tanggal yang seragam.
- Pada layar kecil, sediakan scroll horizontal yang jelas atau tampilan kartu alternatif.
- Untuk data sensitif, jangan menampilkan nilai lengkap jika tidak dibutuhkan oleh peran pengguna.

### Dialog dan drawer
- Gunakan modal untuk konfirmasi tindakan penting, pembuatan tugas, revisi, atau keputusan verifikasi.
- Judul harus menjelaskan keputusan yang sedang diminta.
- Jelaskan konsekuensi tindakan sebelum tombol konfirmasi.
- Gunakan tombol sekunder untuk batal dan tombol utama/destruktif sesuai konsekuensi.
- Drawer cocok untuk detail objek tanpa kehilangan konteks daftar.
- Dialog harus dapat ditutup secara jelas dan mendukung keyboard/accessibility.

### Toast/notifikasi
- Pesan singkat dan spesifik: apa yang terjadi dan apa langkah berikutnya.
- Gunakan toast untuk konfirmasi ringan, bukan satu-satunya cara menyampaikan kesalahan kritis.
- Jangan memuat detail sensitif ke notifikasi yang mungkin terlihat oleh orang lain.

### Ikon
- Gunakan Material Symbols Outlined sebagaimana kode referensi.
- Gunakan ikon yang maknanya familiar, misalnya dashboard, map, domain, fact_check, trending_up, assignment_turned_in, description, rule, manage_accounts, settings, storefront, pin_drop, finance_mode, add_a_photo, verified_user.
- Ikon harus membantu pemindaian, bukan menggantikan label penting.
- Hindari mencampur banyak gaya ikon dalam satu aplikasi.

## 9. Pola Halaman dan Modul

### A. Ringkasan Dashboard
- Tampilkan KPI yang benar-benar didukung data: jumlah objek terdata, status verifikasi, distribusi kategori, isu kualitas data, dan tindak lanjut terbuka.
- Grafik yang relevan: tren pendataan/verifikasi, komposisi sektor, status per dusun, serta prioritas tindak lanjut.
- Peta ringkas dapat menampilkan sebaran objek ekonomi.
- Sertakan periode data, waktu pembaruan, dan definisi metrik.
- Jangan membuat angka, tren, atau perbandingan palsu. Jika data demo, beri label “Data Simulasi”.

### B. Peta Ekonomi
- Gunakan peta sebagai area utama dengan pin atau marker yang konsisten.
- Sediakan filter kategori, status verifikasi, dusun, dan skala usaha.
- Panel detail marker menampilkan nama objek, kategori, status, dan alamat ringkas.
- Tampilkan legenda dan sumber koordinat.
- Sediakan fallback berupa daftar objek jika peta gagal dimuat.
- Jangan menganggap koordinat GPS akurat tanpa sumber dan hasil pengukuran yang tersedia.

### C. Data Objek Ekonomi
- Sediakan pencarian nama usaha, ID, kategori, dusun, dan status.
- Tampilkan identitas utama, lokasi, kategori, status verifikasi, dan tanggal pembaruan.
- Tindakan yang lazim: lihat detail, edit sesuai izin, verifikasi, arsipkan, dan ekspor jika berwenang.
- Arsipkan atau hapus harus melalui konfirmasi dan dicatat dalam audit trail.

### D. Form Tambah/Edit Objek Ekonomi
Gunakan lima bagian seperti pola referensi:
1. **Informasi Dasar Usaha:** nama objek, kategori, subkategori, deskripsi, status operasional.
2. **Lokasi & Geospasial:** alamat/patokan, dusun, RT/RW, koordinat GPS, peta.
3. **Aktivitas Ekonomi & Estimasi Skala:** jenis kegiatan, skala omzet, tenaga kerja lokal, sumber informasi, fasilitas, catatan.
4. **Dokumen & Foto Pendukung:** foto fasad, foto aktivitas, dokumen legalitas jika tersedia.
5. **Sumber & Kualitas Data:** sumber data, petugas pendata, kelengkapan, validasi, catatan kualitas.

Detail desain:
- Tampilkan stepper atau navigasi bagian.
- Gunakan kartu putih per bagian.
- Tampilkan keterangan singkat di bawah judul bagian.
- Beri tanda field wajib.
- Untuk koordinat, tampilkan lintang, bujur, sumber/akurasi bila tersedia, dan tombol mengambil lokasi hanya setelah izin browser diberikan.
- Validasi jenis file, ukuran file, dan kelengkapan sebelum pengiriman.
- Jangan mengklaim GPS terkunci, foto tervalidasi, atau dokumen terverifikasi jika aplikasi belum memeriksanya.

### E. Verifikasi Data
- Tampilkan antrean data yang menunggu verifikasi.
- Detail dapat memuat identitas usaha, lokasi, dokumen, foto, dan riwayat perubahan.
- Sediakan keputusan yang jelas: setujui, minta perbaikan, atau tolak jika alur kerja memang mengizinkan.
- Permintaan perbaikan harus memuat alasan dan instruksi yang bisa ditindaklanjuti.
- Simpan siapa yang melakukan keputusan, kapan, dan apa alasannya.

### F. Analisis Potensi
- Bedakan potensi indikatif dengan pendapatan yang benar-benar terealisasi.
- Tampilkan kategori, wilayah, indikator akses, skala usaha, kelengkapan data, serta tingkat keyakinan jika tersedia.
- Jelaskan metodologi, asumsi, bobot, sumber data, dan batasan model.
- Beri label yang tegas seperti “Estimasi indikatif — bukan angka penerimaan resmi”.
- Hindari presisi palsu. Jangan menyimpulkan nilai PADes pasti dari omzet usaha tanpa dasar hukum dan metodologi yang sah.
- Sediakan simulasi parameter hanya jika hasil simulasi diberi label dan tidak menimpa data aktual.

### G. Tindak Lanjut
- Gunakan daftar tugas dengan prioritas, wilayah, petugas, tenggat, status, dan ringkasan tindakan.
- Sediakan detail tugas, checklist, bukti pendukung, catatan lapangan, dan riwayat.
- Gunakan konfirmasi saat menyelesaikan atau mengalihkan tugas.
- Status tugas harus memiliki definisi dan transisi yang jelas.

### H. Laporan
- Sediakan katalog jenis laporan, periode, filter wilayah, status, serta format ekspor yang tersedia.
- Tampilkan pratinjau sebelum laporan dibuat jika sesuai.
- Beri informasi periode, tanggal pembuatan, pembuat, sumber data, dan versi metodologi.
- Tombol unduh hanya boleh menyatakan sukses jika file benar-benar dihasilkan.
- Dokumen laporan harus konsisten dalam judul, metadata, tabel, satuan, dan catatan metodologi.

### I. Audit dan Kualitas Data
- Tampilkan daftar isu, tingkat keparahan, objek terkait, sumber, dan status penyelesaian.
- Periksa kelengkapan, format, potensi duplikasi, konsistensi wilayah, validitas koordinat, serta kelengkapan dokumen.
- Berikan filter status dan prioritas.
- Catat tindakan audit dan jangan mengubah data sumber diam-diam.

### J. Manajemen Pengguna dan Pengaturan
- Gunakan matriks peran/hak akses yang mudah dipahami.
- Terapkan prinsip least privilege: pengguna hanya mendapat akses yang dibutuhkan.
- Sediakan jejak perubahan peran dan tindakan penting.
- Jangan menampilkan kata sandi atau rahasia sesi.
- Untuk pengaturan sensitif, tampilkan peringatan dan konfirmasi yang sesuai.

## 10. Interaksi dan State

Interaksi yang tampak pada UI harus memiliki perilaku yang jelas dan dapat diprediksi:
- Navigasi aktif sesuai halaman.
- Pencarian dan filter mengubah hasil yang ditampilkan.
- Reset filter mengembalikan kondisi awal.
- Pemilihan baris, tab, dan tampilan harus mempertahankan state yang masuk akal.
- Simpan draf, ajukan verifikasi, ekspor, dan tindakan audit menampilkan status proses yang nyata.
- Modal terbuka dan tertutup melalui kontrol yang jelas.
- Perubahan yang belum disimpan memicu konfirmasi saat pengguna akan meninggalkan halaman.
- Form menampilkan validasi pada field yang relevan.
- Tombol yang belum didukung backend tidak boleh berpura-pura menjalankan operasi permanen; gunakan label “Simulasi” atau “Demo” bila diperlukan.

Untuk implementasi frontend:
- Pisahkan komponen, data, validasi, dan logika state.
- Hindari menaruh semua logika dalam handler inline yang panjang.
- Gunakan komponen reusable untuk input, badge, tombol, tabel, modal, dan kartu KPI.
- Pastikan loading, empty, error, success, dan disabled state tersedia.
- Hindari penggunaan `setTimeout` sebagai pengganti proses backend yang sebenarnya.

## 11. Responsivitas dan Aksesibilitas

- Desktop: sidebar penuh, header horizontal, grid multi-kolom.
- Tablet: kurangi jumlah kolom, pertahankan filter penting, sidebar dapat diciutkan.
- Mobile: navigasi menjadi drawer, formulir satu kolom, tombol utama mudah dijangkau, tabel memiliki alternatif yang nyaman.
- Semua kontrol harus dapat digunakan dengan keyboard.
- Label harus terhubung dengan input.
- Fokus keyboard harus terlihat.
- Jangan mengandalkan warna saja untuk menunjukkan status.
- Berikan teks alternatif untuk gambar informatif.
- Hormati preferensi reduced motion; animasi hanya untuk umpan balik ringan.
- Ukuran target sentuh harus memadai dan jarak antartombol mencegah salah tekan.

## 12. Privasi, Keamanan, dan Tata Kelola

- Terapkan pembatasan akses berdasarkan peran.
- Minimalkan pengumpulan data pribadi.
- Jangan meminta atau mengunggah data sensitif yang tidak relevan, seperti rekening pribadi.
- Jelaskan tujuan penggunaan lokasi dan foto.
- Minta izin sebelum mengakses GPS atau kamera.
- Lindungi dokumen dan foto melalui akses terkontrol.
- Masking data pribadi pada tabel dan ekspor jika tidak diperlukan.
- Catat tindakan penting dalam audit trail.
- Bedakan data draf, data menunggu verifikasi, data terverifikasi, dan data arsip.
- Jangan menampilkan klaim kepatuhan hukum sebagai fakta jika belum divalidasi oleh pihak yang berwenang.

## 13. Pola Microcopy

Gunakan bahasa Indonesia yang ringkas, jelas, dan administratif.

Contoh:
- “Tambah Objek Ekonomi”
- “Simpan Draf”
- “Ajukan Verifikasi”
- “Periksa kembali data yang wajib diisi.”
- “Perubahan belum disimpan. Tetap tinggalkan halaman?”
- “Data berhasil disimpan.” — hanya jika penyimpanan benar-benar berhasil.
- “Data ini masih menunggu verifikasi.”
- “Estimasi indikatif, bukan angka penerimaan resmi.”
- “Tidak ada data yang sesuai dengan filter.”
- “Unggah JPG, PNG, atau WebP maksimal 5 MB.”

Hindari:
- Pesan error teknis tanpa penjelasan pengguna.
- Klaim “berhasil” jika tindakan hanya simulasi.
- Bahasa yang menyalahkan pengguna.
- Istilah fiskal yang tidak dijelaskan.

## 14. Panduan Implementasi Berdasarkan Kode Referensi

Kode acuan menggunakan:
- HTML sebagai struktur halaman.
- Tailwind CSS melalui CDN dengan konfigurasi token warna, spacing, radius, dan font.
- Font Inter dari Google Fonts.
- Material Symbols Outlined untuk ikon.
- Pola dashboard dengan sidebar, header, kartu, form multi-bagian, modal, toast, tabel, peta, filter, dan panel analitik.
- JavaScript untuk interaksi UI seperti filter, tab, modal, toast, form, pemilihan baris, simulasi ekspor, dan alur tugas.

Saat mengembangkan ulang:
1. Pertahankan identitas hijau tua dan permukaan terang.
2. Pertahankan pola navigasi dan hierarki informasi.
3. Ubah komponen berulang menjadi komponen reusable.
4. Gunakan data nyata dari backend jika tersedia.
5. Tandai fitur demo dengan jelas dan jangan menyamakan simulasi dengan penyimpanan permanen.
6. Jangan menganggap gambar peta statis sebagai peta interaktif. Gunakan penyedia peta dan API yang benar bila fitur geospasial akan dipakai sungguhan.
7. Hindari menyalin nilai contoh, identitas petugas, ID draft, koordinat, status GPS, dan dokumen dummy ke lingkungan produksi.

## 15. Checklist Kualitas Desain

Sebelum menyelesaikan desain, periksa:

- [ ] Identitas JRI konsisten dengan palet hijau dan permukaan terang.
- [ ] Judul halaman dan tindakan utama langsung terlihat.
- [ ] Sidebar dan breadcrumb menunjukkan konteks halaman dengan benar.
- [ ] Label, input, tombol, badge, dan tabel konsisten.
- [ ] Formulir panjang terbagi menjadi bagian logis.
- [ ] Field wajib, validasi, dan pesan kesalahan jelas.
- [ ] Loading, empty, error, success, dan disabled state dirancang.
- [ ] Tabel memiliki pencarian/filter dan tampilan mobile yang masuk akal.
- [ ] Peta memiliki legenda, fallback, dan sumber koordinat.
- [ ] Estimasi dibedakan dari data aktual/angka resmi.
- [ ] Dialog konfirmasi tersedia untuk tindakan berisiko.
- [ ] Privasi dan hak akses diperhitungkan.
- [ ] Tidak ada klaim penyimpanan, GPS, validasi, atau ekspor palsu.
- [ ] Kontras, keyboard focus, label input, dan teks alternatif diperiksa.
- [ ] Data demo ditandai jelas dan tidak dianggap sebagai data resmi.

## 16. Prompt Ringkas yang Bisa Dipakai Ulang

> Rancang antarmuka web dashboard **Jatimulyo Revenue Intelligence (JRI)**, sistem administrasi dan analitik objek ekonomi desa. Gunakan gaya government SaaS modern yang profesional, bersih, data-driven, dan mudah dipakai petugas kantor maupun lapangan. Gunakan font Inter, ikon Material Symbols Outlined, palet hijau tua `#005138` dan `#176B4D`, aksen sekunder `#006B5A`, latar `#F8F9FF`, kartu putih, radius 8–12 px, border halus, shadow ringan, dan spacing konsisten. Layout desktop menggunakan sidebar kiri, header dengan breadcrumb/pencarian/notifikasi/profil, dan konten utama yang terstruktur. Gunakan hierarki tipografi yang jelas, kartu KPI, filter, tabel, peta, grafik, badge status, formulir multi-bagian, modal konfirmasi, toast, dan empty/loading/error states sesuai kebutuhan halaman. Modul aplikasi meliputi dashboard, peta ekonomi, data objek ekonomi, verifikasi, analisis potensi, tindak lanjut, laporan, audit kualitas data, manajemen pengguna, dan pengaturan. Desain responsif untuk desktop, tablet, dan mobile; utamakan aksesibilitas, privasi, RBAC, transparansi metodologi, dan audit trail. Bedakan data aktual, data belum diverifikasi, data simulasi, dan estimasi indikatif. Jangan membuat klaim GPS, validasi dokumen, penyimpanan, atau ekspor berhasil jika belum benar-benar didukung sistem. Hindari dekorasi berlebihan dan pastikan antarmuka terasa konsisten, siap dikembangkan, dan berorientasi pada pekerjaan administrasi nyata.

---

**Catatan:** Skill ini merangkum pola visual dan fungsional yang terlihat pada kode referensi. Integrasi backend, keamanan produksi, validasi resmi, peta interaktif, serta penyimpanan file perlu diimplementasikan dan diuji secara terpisah.
