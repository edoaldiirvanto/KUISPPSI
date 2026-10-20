// Data awal untuk pilot Desa Jatimulyo, Kec. Jati Agung, Kab. Lampung Selatan
// Koordinat pusat Desa Jatimulyo: -5.3488, 105.3054

export const DUSUN_LIST = [
  "Dusun I Jatimulyo",
  "Dusun II Karang Anyar Indah",
  "Dusun III Purwosari",
  "Dusun IV Sinar Rejeki",
  "Dusun V Sidodadi",
  "Dusun VI Margodadi"
];

export const KATEGORI_LIST = [
  { id: "kuliner", nama: "Kuliner & Restoran", icon: "restaurant", color: "#E65100" },
  { id: "perdagangan", nama: "Perdagangan & Toko Kelontong", icon: "storefront", color: "#1565C0" },
  { id: "pertanian", nama: "Pertanian & Agribisnis", icon: "agriculture", color: "#2E7D32" },
  { id: "jasa", nama: "Jasa & Perbengkelan", icon: "build", color: "#6A1B9A" },
  { id: "pariwisata", nama: "Wisata & Hiburan Desa", icon: "attractions", color: "#00838F" },
  { id: "industri_kecil", nama: "Industri Kecil / Kerajinan", icon: "factory", color: "#C2185B" }
];

export const USERS = [
  { id: "usr-01", nama: "Budi Santoso, S.Kom", nip: "198804122015031002", role: "Petugas Pendataan", roleKey: "surveyor", avatar: "BS" },
  { id: "usr-02", nama: "Dra. Siti Rahmawati", nip: "198205162008012014", role: "Verifikator Berwenang", roleKey: "verifier", avatar: "SR" },
  { id: "usr-03", nama: "Ahmad Fauzi, M.Si", nip: "197903212006041008", role: "Analis Potensi Daerah", roleKey: "analyst", avatar: "AF" },
  { id: "usr-04", nama: "H. Joko Triono, S.Sos", nip: "197109151998031004", role: "Pimpinan / Kepala Desa", roleKey: "leader", avatar: "JT" },
  { id: "usr-05", nama: "Admin Sistem JRI", nip: "199411032020121001", role: "Administrator TI", roleKey: "admin", avatar: "AD" }
];

export const INITIAL_OBJEK_EKONOMI = [
  {
    id: "JRI-JTM-001",
    nama: "RM Pindang Bambu Jatimulyo",
    kategori: "kuliner",
    subkategori: "Rumah Makan Khas Tradisional",
    deskripsi: "Penyedia hidangan khas pindang Lampung dan lauk tradisional dengan kapasitas 80 tempat duduk.",
    dusun: "Dusun I Jatimulyo",
    rtRw: "RT 02 / RW 01",
    alamat: "Jl. Terusan Ryacudu No. 45, Simpang Koramil",
    lat: -5.3482,
    lng: 105.3045,
    skalaOmzet: "Menengah (Rp 150jt - 300jt/bln)",
    omzetIndikatif: 210000000,
    tenagaKerja: 14,
    luasTempat: 240,
    statusOperasional: "Aktif Permanen",
    statusVerifikasi: "Terverifikasi",
    tanggalPendataan: "2026-09-15",
    petugas: "Budi Santoso, S.Kom",
    verifikator: "Dra. Siti Rahmawati",
    tanggalVerifikasi: "2026-09-18",
    catatanVerifikasi: "Objek telah diperiksa langsung di lapangan, plang nama dan fasilitas terdaftar sesuai KBLI 56101.",
    sumberData: "Survei Lapangan Mandiri",
    kelengkapanDokumen: "Lengkap (NIB + Foto + Titik Koordinat)",
    fotoUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    riwayat: [
      { tgl: "2026-09-15 09:30", aktor: "Budi Santoso", aksi: "Pendataan lapangan awal objek ekonomi" },
      { tgl: "2026-09-18 14:15", aktor: "Dra. Siti Rahmawati", aksi: "Verifikasi lapangan disetujui (Terverifikasi)" }
    ]
  },
  {
    id: "JRI-JTM-002",
    nama: "Toko Material & Bangunan Sinar Jaya",
    kategori: "perdagangan",
    subkategori: "Penyedia Bahan Bangunan & Semen",
    deskripsi: "Toko grosir dan eceran pasir, semen, bata ringan dan alat teknik konstruksi di jalur utama.",
    dusun: "Dusun II Karang Anyar Indah",
    rtRw: "RT 05 / RW 02",
    alamat: "Jl. Raya Jatimulyo KM 2.5",
    lat: -5.3435,
    lng: 105.3112,
    skalaOmzet: "Besar (> Rp 300jt/bln)",
    omzetIndikatif: 450000000,
    tenagaKerja: 18,
    luasTempat: 550,
    statusOperasional: "Aktif Permanen",
    statusVerifikasi: "Menunggu Verifikasi",
    tanggalPendataan: "2026-10-12",
    petugas: "Budi Santoso, S.Kom",
    verifikator: null,
    tanggalVerifikasi: null,
    catatanVerifikasi: null,
    sumberData: "Pemberitahuan Warga & Survei Petugas",
    kelengkapanDokumen: "Kurang Foto Izin Reklame Usaha",
    fotoUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    riwayat: [
      { tgl: "2026-10-12 11:10", aktor: "Budi Santoso", aksi: "Pendaftaran objek baru ke antrean verifikasi" }
    ]
  },
  {
    id: "JRI-JTM-003",
    nama: "Kebun Edukasi & Agrowisata Buah Naga Jati Lestari",
    kategori: "pariwisata",
    subkategori: "Agrowisata dan Wahana Petik Buah",
    deskripsi: "Kawasan budidaya buah naga dan jeruk siam dengan spot foto keluarga, gazebo, dan kantin lokal.",
    dusun: "Dusun III Purwosari",
    rtRw: "RT 01 / RW 03",
    alamat: "Jl. Poros Purwosari Blok B",
    lat: -5.3562,
    lng: 105.2985,
    skalaOmzet: "Menengah (Rp 50jt - 150jt/bln)",
    omzetIndikatif: 95000000,
    tenagaKerja: 9,
    luasTempat: 8000,
    statusOperasional: "Aktif Musiman/Weekend",
    statusVerifikasi: "Terverifikasi",
    tanggalPendataan: "2026-08-20",
    petugas: "Budi Santoso, S.Kom",
    verifikator: "Dra. Siti Rahmawati",
    tanggalVerifikasi: "2026-08-24",
    catatanVerifikasi: "Telah dikoordinasikan dengan Pokdarwis Desa Jatimulyo. Beroperasi ramai pada hari Sabtu & Minggu.",
    sumberData: "Data Pokdarwis Desa Jatimulyo",
    kelengkapanDokumen: "Lengkap (Rekomendasi Desa + Peta Lahan)",
    fotoUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
    riwayat: [
      { tgl: "2026-08-20 13:00", aktor: "Budi Santoso", aksi: "Entri data objek agrowisata dusun III" },
      { tgl: "2026-08-24 10:20", aktor: "Dra. Siti Rahmawati", aksi: "Verifikasi lapangan disetujui" }
    ]
  },
  {
    id: "JRI-JTM-004",
    nama: "Bengkel Bubut & Las Presisi Abadi",
    kategori: "jasa",
    subkategori: "Fabrikasi Logam & Perbengkelan",
    deskripsi: "Jasa reparasi mesin pertanian (traktor, pompa air diesel), pembuatan pagar teralis dan bubut suku cadang.",
    dusun: "Dusun IV Sinar Rejeki",
    rtRw: "RT 03 / RW 04",
    alamat: "Gang Masjid Baitul Muttaqin",
    lat: -5.3401,
    lng: 105.3021,
    skalaOmzet: "Kecil (Rp 20jt - 50jt/bln)",
    omzetIndikatif: 38000000,
    tenagaKerja: 5,
    luasTempat: 120,
    statusOperasional: "Aktif Permanen",
    statusVerifikasi: "Perlu Perbaikan",
    tanggalPendataan: "2026-10-05",
    petugas: "Budi Santoso, S.Kom",
    verifikator: "Dra. Siti Rahmawati",
    tanggalVerifikasi: "2026-10-08",
    catatanVerifikasi: "Koordinat awal meleset di area permukiman warga. Perlu re-tagging GPS tepat di posisi bengkel dan lampiran foto meteran daya listrik.",
    sumberData: "Survei Mandiri Lapangan",
    kelengkapanDokumen: "Perlu Revisi Titik GPS",
    fotoUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    riwayat: [
      { tgl: "2026-10-05 15:45", aktor: "Budi Santoso", aksi: "Pengajuan data pendataan bengkel" },
      { tgl: "2026-10-08 16:30", aktor: "Dra. Siti Rahmawati", aksi: "Catatan perbaikan koordinat dikirimkan ke petugas" }
    ]
  },
  {
    id: "JRI-JTM-005",
    nama: "Gudang Penggilingan Padi & Beras Sejahtera",
    kategori: "pertanian",
    subkategori: "Rice Milling Unit (RMU)",
    deskripsi: "Sentra penggilingan gabah petani sawah lebak dan penampungan beras kemasan karung 10kg - 50kg.",
    dusun: "Dusun V Sidodadi",
    rtRw: "RT 06 / RW 05",
    alamat: "Jl. Irigasi Tersier Sidodadi RT 06",
    lat: -5.3621,
    lng: 105.3184,
    skalaOmzet: "Menengah (Rp 150jt - 300jt/bln)",
    omzetIndikatif: 190000000,
    tenagaKerja: 8,
    luasTempat: 600,
    statusOperasional: "Aktif Permanen",
    statusVerifikasi: "Terverifikasi",
    tanggalPendataan: "2026-07-19",
    petugas: "Budi Santoso, S.Kom",
    verifikator: "Dra. Siti Rahmawati",
    tanggalVerifikasi: "2026-07-22",
    catatanVerifikasi: "Data kapasitas mesin giling 4 ton/hari telah dicocokkan dengan catatan Gapoktan setempat.",
    sumberData: "Registrasi Gapoktan Desa",
    kelengkapanDokumen: "Lengkap (Surat Keterangan Usaha Desa + Foto)",
    fotoUrl: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=600&q=80",
    riwayat: [
      { tgl: "2026-07-19 10:15", aktor: "Budi Santoso", aksi: "Pencatatan RMU Sidodadi" },
      { tgl: "2026-07-22 11:00", aktor: "Dra. Siti Rahmawati", aksi: "Verifikasi berhasil" }
    ]
  },
  {
    id: "JRI-JTM-006",
    nama: "Sentra Anyaman Bambu & Gerabah Indah",
    kategori: "industri_kecil",
    subkategori: "Kerajinan Tangan Home Industry",
    deskripsi: "Kelompok pengrajin besek bambu dan pot gerabah hias yang memasok toko cinderamata di Bandar Lampung.",
    dusun: "Dusun VI Margodadi",
    rtRw: "RT 04 / RW 06",
    alamat: "Jl. Perintis Kemerdekaan Dusun VI",
    lat: -5.3524,
    lng: 105.3251,
    skalaOmzet: "Mikro (< Rp 20jt/bln)",
    omzetIndikatif: 16000000,
    tenagaKerja: 7,
    luasTempat: 90,
    statusOperasional: "Aktif Permanen",
    statusVerifikasi: "Menunggu Verifikasi",
    tanggalPendataan: "2026-10-18",
    petugas: "Budi Santoso, S.Kom",
    verifikator: null,
    tanggalVerifikasi: null,
    catatanVerifikasi: null,
    sumberData: "Survei Lapangan Mandiri",
    kelengkapanDokumen: "Foto Galeri Produksi Terlampir",
    fotoUrl: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80",
    riwayat: [
      { tgl: "2026-10-18 14:00", aktor: "Budi Santoso", aksi: "Entri objek baru sentra anyaman" }
    ]
  },
  {
    id: "JRI-JTM-007",
    nama: "Kopi Robusta Kedai Pojok Jatimulyo",
    kategori: "kuliner",
    subkategori: "Kedai Kopi & Coworking Sederhana",
    deskripsi: "Warung kopi tongkrongan anak muda dan pekerja lepas dengan wifi dan camilan lokal.",
    dusun: "Dusun I Jatimulyo",
    rtRw: "RT 03 / RW 01",
    alamat: "Jl. Pramuka No. 12",
    lat: -5.3470,
    lng: 105.3060,
    skalaOmzet: "Kecil (Rp 20jt - 50jt/bln)",
    omzetIndikatif: 32000000,
    tenagaKerja: 4,
    luasTempat: 80,
    statusOperasional: "Aktif Permanen",
    statusVerifikasi: "Terverifikasi",
    tanggalPendataan: "2026-09-02",
    petugas: "Budi Santoso, S.Kom",
    verifikator: "Dra. Siti Rahmawati",
    tanggalVerifikasi: "2026-09-04",
    catatanVerifikasi: "Memiliki tempat usaha tetap dan plang nama yang jelas.",
    sumberData: "Survei Lapangan Mandiri",
    kelengkapanDokumen: "Lengkap",
    fotoUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
    riwayat: [
      { tgl: "2026-09-02 16:00", aktor: "Budi Santoso", aksi: "Entri data usaha kedai kopi" },
      { tgl: "2026-09-04 11:30", aktor: "Dra. Siti Rahmawati", aksi: "Verifikasi objek disetujui" }
    ]
  }
];

export const INITIAL_TUGAS = [
  {
    id: "TGS-2026-041",
    judul: "Klarifikasi Pergeseran Koordinat GPS Bengkel Presisi Abadi",
    objekId: "JRI-JTM-004",
    objekNama: "Bengkel Bubut & Las Presisi Abadi",
    dusun: "Dusun IV Sinar Rejeki",
    petugasTugas: "Budi Santoso, S.Kom",
    prioritas: "Tinggi",
    status: "Dalam Proses",
    tenggat: "2026-10-25",
    deskripsi: "Verifikasi ulang titik geotagging karena berdekatan dengan rumah warga, ambil foto KWH meteran listrik dan papan nama.",
    riwayatLog: "Petugas telah menerima notifikasi perbaikan dan menjadwalkan kunjungan ulang pada hari Kamis."
  },
  {
    id: "TGS-2026-042",
    judul: "Tinjau Berkas Izin Reklame Toko Material Sinar Jaya",
    objekId: "JRI-JTM-002",
    objekNama: "Toko Material & Bangunan Sinar Jaya",
    dusun: "Dusun II Karang Anyar Indah",
    petugasTugas: "Budi Santoso, S.Kom",
    prioritas: "Sedang",
    status: "Terbuka",
    tenggat: "2026-10-28",
    deskripsi: "Minta copy izin pemasangan papan reklame luar ruang untuk memastikan kesesuaian data administrasi desa.",
    riwayatLog: "Menunggu jadwal konfirmasi pemilik toko."
  },
  {
    id: "TGS-2026-043",
    judul: "Pencocokan Data Pengunjung Akhir Pekan Agrowisata Buah Naga",
    objekId: "JRI-JTM-003",
    objekNama: "Kebun Edukasi & Agrowisata Buah Naga Jati Lestari",
    dusun: "Dusun III Purwosari",
    petugasTugas: "Ahmad Fauzi, M.Si",
    prioritas: "Rendah",
    status: "Selesai",
    tenggat: "2026-09-30",
    deskripsi: "Konfirmasi rata-rata kendaraan roda 4 dan roda 2 yang parkir di area agrowisata untuk parameter estimasi retribusi parkir desa.",
    riwayatLog: "Telah selesai disurvei. Rata-rata 45 mobil dan 120 motor per akhir pekan. Tercatat dalam modul analisis potensi."
  }
];

export const INITIAL_AUDIT_LOGS = [
  {
    id: "AUD-8910",
    waktu: "2026-10-20 23:15:40",
    aktor: "Dra. Siti Rahmawati",
    peran: "Verifikator Berwenang",
    modul: "Verifikasi Data",
    aksi: "MEMPERBARUI_STATUS",
    objekRef: "JRI-JTM-001",
    keterangan: "Menetapkan status objek RM Pindang Bambu menjadi Terverifikasi setelah uji fisik lapangan.",
    ipAddress: "182.1.240.11"
  },
  {
    id: "AUD-8909",
    waktu: "2026-10-20 21:05:12",
    aktor: "Budi Santoso, S.Kom",
    peran: "Petugas Pendataan",
    modul: "Pendataan Lapangan",
    aksi: "TAMBAH_OBJEK",
    objekRef: "JRI-JTM-006",
    keterangan: "Mengunggah data baru: Sentra Anyaman Bambu & Gerabah Indah Dusun VI Margodadi.",
    ipAddress: "114.125.77.94"
  },
  {
    id: "AUD-8908",
    waktu: "2026-10-20 19:40:02",
    aktor: "Admin Sistem JRI",
    peran: "Administrator TI",
    modul: "Pengaturan Sistem",
    aksi: "UPDATE_CONFIG",
    objekRef: "TAHUN_ANGGARAN_2026",
    keterangan: "Sinkronisasi batas wilayah geospasial Dusun IV dan verifikasi layer peta OSM.",
    ipAddress: "10.15.2.1"
  },
  {
    id: "AUD-8907",
    waktu: "2026-10-20 16:32:19",
    aktor: "Ahmad Fauzi, M.Si",
    peran: "Analis Potensi Daerah",
    modul: "Analisis Potensi",
    aksi: "SIMULASI_MODEL",
    objekRef: "MODEL-POTENSI-V1.2",
    keterangan: "Menjalankan simulasi skenario indikatif retribusi parkir dan objek ekonomi kuliner Desa Jatimulyo.",
    ipAddress: "182.1.240.15"
  }
];

export const AUDIT_QUALITY_ISSUES = [
  {
    id: "Q-01",
    tingkat: "Perhatian (Medium)",
    kategori: "Geospasial GPS",
    objekRef: "JRI-JTM-004",
    deskripsi: "Titik koordinat (-5.3401, 105.3021) berjarak < 8 meter dari batas persil tanah warga lain.",
    rekomendasi: "Lakukan kalibrasi GPS lapangan dengan minimal 4 satelit terkunci.",
    status: "Dalam Investigasi"
  },
  {
    id: "Q-02",
    tingkat: "Rendah (Low)",
    kategori: "Kelengkapan Dokumen",
    objekRef: "JRI-JTM-002",
    deskripsi: "Berkas Izin Reklame dan foto tampak samping belum diunggah.",
    rekomendasi: "Hubungi pemilik toko atau mintakan salinan dokumen ke aparat RT setempat.",
    status: "Terbuka"
  },
  {
    id: "Q-03",
    tingkat: "Selesai",
    kategori: "Duplikasi Data",
    objekRef: "JRI-JTM-007",
    deskripsi: "Sempat terindikasi nama kedai ganda dengan draft lama tahun 2025.",
    rekomendasi: "Draft lama telah diarsipkan pada audit trail.",
    status: "Terselesaikan"
  }
];
