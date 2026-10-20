import React, { useState } from 'react';
import { DUSUN_LIST, KATEGORI_LIST } from '../data/mockData';

export default function TambahObjekView({ currentUser, onSaveObjek, onCancel }) {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    // Bagian 1: Informasi Dasar Usaha
    nama: '',
    kategori: 'kuliner',
    subkategori: '',
    deskripsi: '',
    statusOperasional: 'Aktif Permanen',

    // Bagian 2: Lokasi & Geospasial
    dusun: DUSUN_LIST[0],
    rtRw: 'RT 01 / RW 01',
    alamat: '',
    lat: -5.3488,
    lng: 105.3054,
    akurasiGps: 'Terkunci Handheld GPS (±4 meter)',

    // Bagian 3: Aktivitas Ekonomi & Estimasi Skala
    skalaOmzet: 'Kecil (Rp 20jt - 50jt/bln)',
    omzetIndikatif: 35000000,
    tenagaKerja: 4,
    luasTempat: 75,
    fasilitas: 'Daya Listrik 2200VA, Sambungan Air Sumur Bor, Wifi, Parkir Roda 2',

    // Bagian 4: Dokumen & Foto Pendukung
    kelengkapanDokumen: 'Lengkap (NIB & Foto Lokasi)',
    fotoUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',

    // Bagian 5: Sumber & Kualitas Data
    sumberData: 'Survei Lapangan Mandiri',
    petugas: currentUser.nama,
    catatanKualitas: 'Data dikonfirmasi langsung dengan pengelola di tempat usaha.'
  });

  const [duplicationWarning, setDuplicationWarning] = useState(null);

  const steps = [
    { num: 1, title: 'Informasi Dasar', icon: 'info' },
    { num: 2, title: 'Lokasi & Spasial', icon: 'pin_drop' },
    { num: 3, title: 'Aktivitas Ekonomi', icon: 'analytics' },
    { num: 4, title: 'Foto & Bukti', icon: 'add_a_photo' },
    { num: 5, title: 'Sumber Data', icon: 'verified_user' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Deteksi duplikasi sederhana sesuai PRD FR-06
    if (field === 'nama' && value.length > 4) {
      if (value.toLowerCase().includes('pindang') || value.toLowerCase().includes('sinar')) {
        setDuplicationWarning(`Peringatan PRD FR-06: Terdeteksi kesamaan nama dengan objek terdaftar sebelumnya. Pastikan bukan entitas ganda.`);
      } else {
        setDuplicationWarning(null);
      }
    }
  };

  const handleAmbilLokasiBrowser = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData(prev => ({
            ...prev,
            lat: parseFloat(position.coords.latitude.toFixed(6)),
            lng: parseFloat(position.coords.longitude.toFixed(6)),
            akurasiGps: `GPS Browser Browser terkunci (akurasi ±${Math.round(position.coords.accuracy)}m)`
          }));
        },
        () => {
          // Fallback Desa Jatimulyo jika izin ditolak
          setFormData(prev => ({
            ...prev,
            lat: -5.3488,
            lng: 105.3054,
            akurasiGps: 'Koordinat Default Sentra Desa Jatimulyo'
          }));
        }
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama.trim() || !formData.alamat.trim()) {
      alert('Mohon lengkapi nama usaha dan alamat lengkap sebelum mengirim.');
      return;
    }

    const newObjek = {
      ...formData,
      id: `JRI-JTM-${Math.floor(100 + Math.random() * 900)}`,
      statusVerifikasi: 'Menunggu Verifikasi',
      tanggalPendataan: new Date().toISOString().slice(0, 10),
      riwayat: [
        {
          tgl: new Date().toLocaleString('id-ID'),
          aktor: currentUser.nama,
          aksi: 'Pendataan awal objek ekonomi lapangan baru diajukan'
        }
      ]
    };

    onSaveObjek(newObjek);
  };

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', paddingBottom: '40px' }}>
      {/* Stepper Navigation */}
      <div style={{ marginBottom: '24px' }}>
        <h1 className="headline-xl">Formulir Pendataan Lapangan Objek Ekonomi</h1>
        <p className="body-md">Sesuai pola 5 bagian data survei JRI (Skill Desain Bab 9.D & PRD FR-03).</p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '20px',
          background: '#fff',
          padding: '16px 20px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--outline-subtle)'
        }}>
          {steps.map((st, idx) => {
            const isCurrent = activeStep === st.num;
            const isDone = activeStep > st.num;
            return (
              <React.Fragment key={st.num}>
                <button
                  onClick={() => setActiveStep(st.num)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: isCurrent ? 'var(--primary)' : isDone ? '#1E8E3E' : 'var(--outline)',
                    fontWeight: isCurrent ? 700 : 500,
                    fontSize: '13px'
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isCurrent ? 'var(--primary)' : isDone ? 'var(--success-subtle)' : 'var(--surface-container-high)',
                    color: isCurrent ? '#fff' : isDone ? '#1E8E3E' : 'var(--outline)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 700
                  }}>
                    {isDone ? '✓' : st.num}
                  </div>
                  <span>{st.title}</span>
                </button>
                {idx < steps.length - 1 && (
                  <div style={{ flex: 1, height: '2px', backgroundColor: isDone ? '#1E8E3E' : 'var(--outline-subtle)', margin: '0 8px' }} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Duplication Warning Banner */}
      {duplicationWarning && (
        <div style={{
          backgroundColor: '#FFF0D4',
          border: '1px solid #FFE0A6',
          borderRadius: 'var(--radius-md)',
          padding: '12px 16px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '13px',
          color: '#925400'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>warning</span>
          <span>{duplicationWarning}</span>
        </div>
      )}

      {/* Form Container */}
      <form onSubmit={handleSubmit}>
        {/* Bagian 1: Informasi Dasar */}
        {activeStep === 1 && (
          <div className="jri-card" style={{ padding: '28px' }}>
            <h2 className="headline-md" style={{ marginBottom: '4px' }}>1. Informasi Dasar Usaha</h2>
            <p className="body-sm" style={{ marginBottom: '20px' }}>Identitas primer kegiatan ekonomi yang dijumpai petugas.</p>

            <div className="form-group">
              <label className="form-label">
                Nama Objek / Plang Usaha <span className="required">*</span>
              </label>
              <input
                type="text"
                className="input-control"
                placeholder="Contoh: RM Pindang Selera Rasa"
                value={formData.nama}
                onChange={(e) => handleInputChange('nama', e.target.value)}
                required
              />
              <span className="form-hint">Sesuai nama yang terpasang pada papan nama atau dikenal warga.</span>
            </div>

            <div className="grid-cols-2">
              <div className="form-group">
                <label className="form-label">Kategori Sektor <span className="required">*</span></label>
                <select
                  className="select-control"
                  value={formData.kategori}
                  onChange={(e) => handleInputChange('kategori', e.target.value)}
                >
                  {KATEGORI_LIST.map(k => (
                    <option key={k.id} value={k.id}>{k.nama}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Subkategori / Klasifikasi</label>
                <input
                  type="text"
                  className="input-control"
                  placeholder="Contoh: Rumah Makan Tradisional Khas Lampung"
                  value={formData.subkategori}
                  onChange={(e) => handleInputChange('subkategori', e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Deskripsi Operasional</label>
              <textarea
                className="textarea-control"
                rows="3"
                placeholder="Rincian barang/jasa yang dijual, jam buka, dan kapasitas layanan..."
                value={formData.deskripsi}
                onChange={(e) => handleInputChange('deskripsi', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Status Operasional</label>
              <select
                className="select-control"
                value={formData.statusOperasional}
                onChange={(e) => handleInputChange('statusOperasional', e.target.value)}
              >
                <option value="Aktif Permanen">Aktif Permanen (Buka Setiap Hari)</option>
                <option value="Aktif Musiman/Weekend">Aktif Musiman / Akhir Pekan Saja</option>
                <option value="Tutup Sementara">Tutup Sementara</option>
              </select>
            </div>
          </div>
        )}

        {/* Bagian 2: Lokasi & Spasial */}
        {activeStep === 2 && (
          <div className="jri-card" style={{ padding: '28px' }}>
            <h2 className="headline-md" style={{ marginBottom: '4px' }}>2. Lokasi Administrasi & Geospasial</h2>
            <p className="body-sm" style={{ marginBottom: '20px' }}>Wilayah penataan spasial berbasis dusun dan koordinat GPS.</p>

            <div className="grid-cols-2">
              <div className="form-group">
                <label className="form-label">Dusun Pilot <span className="required">*</span></label>
                <select
                  className="select-control"
                  value={formData.dusun}
                  onChange={(e) => handleInputChange('dusun', e.target.value)}
                >
                  {DUSUN_LIST.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">RT / RW</label>
                <input
                  type="text"
                  className="input-control"
                  value={formData.rtRw}
                  onChange={(e) => handleInputChange('rtRw', e.target.value)}
                  placeholder="Contoh: RT 03 / RW 02"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Alamat Lengkap / Patokan Jalan <span className="required">*</span></label>
              <input
                type="text"
                className="input-control"
                placeholder="Contoh: Jl. Terusan Ryacudu KM 2 No. 8 (Sebelah Alfamart Jatimulyo)"
                value={formData.alamat}
                onChange={(e) => handleInputChange('alamat', e.target.value)}
                required
              />
            </div>

            <div style={{
              background: 'var(--surface-container-low)',
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--outline-variant)',
              marginTop: '10px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>Koordinat Titik GPS Lapangan</div>
                  <div className="body-sm">Akurasi diperlukan untuk penentuan zona peta GIS desa.</div>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={handleAmbilLokasiBrowser}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>my_location</span>
                  Kunci GPS Saat Ini
                </button>
              </div>

              <div className="grid-cols-2">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Latitude (Lintang)</label>
                  <input
                    type="number"
                    step="any"
                    className="input-control font-mono"
                    value={formData.lat}
                    onChange={(e) => handleInputChange('lat', parseFloat(e.target.value))}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Longitude (Bujur)</label>
                  <input
                    type="number"
                    step="any"
                    className="input-control font-mono"
                    value={formData.lng}
                    onChange={(e) => handleInputChange('lng', parseFloat(e.target.value))}
                  />
                </div>
              </div>
              <div style={{ marginTop: '8px', fontSize: '11px', color: 'var(--outline)' }}>
                Status instrumen: {formData.akurasiGps}
              </div>
            </div>
          </div>
        )}

        {/* Bagian 3: Aktivitas Ekonomi */}
        {activeStep === 3 && (
          <div className="jri-card" style={{ padding: '28px' }}>
            <h2 className="headline-md" style={{ marginBottom: '4px' }}>3. Aktivitas Ekonomi & Skala Indikatif</h2>
            <p className="body-sm" style={{ marginBottom: '20px' }}>Estimasi kapasitas ekonomi untuk keperluan pemetaan potensi PADes.</p>

            <div className="grid-cols-2">
              <div className="form-group">
                <label className="form-label">Kategori Skala Usaha</label>
                <select
                  className="select-control"
                  value={formData.skalaOmzet}
                  onChange={(e) => handleInputChange('skalaOmzet', e.target.value)}
                >
                  <option value="Mikro (< Rp 20jt/bln)">Mikro (&lt; Rp 20jt/bln)</option>
                  <option value="Kecil (Rp 20jt - 50jt/bln)">Kecil (Rp 20jt - 50jt/bln)</option>
                  <option value="Menengah (Rp 50jt - 150jt/bln)">Menengah (Rp 50jt - 150jt/bln)</option>
                  <option value="Menengah Tinggi (Rp 150jt - 300jt/bln)">Menengah Tinggi (Rp 150jt - 300jt/bln)</option>
                  <option value="Besar (> Rp 300jt/bln)">Besar (&gt; Rp 300jt/bln)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Omzet Indikatif Bulanan (Rp)</label>
                <input
                  type="number"
                  className="input-control font-mono"
                  value={formData.omzetIndikatif}
                  onChange={(e) => handleInputChange('omzetIndikatif', parseInt(e.target.value) || 0)}
                />
                <span className="form-hint">Data ini merupakan estimasi indikatif lapangan, bukan ketetapan pajak.</span>
              </div>
            </div>

            <div className="grid-cols-2">
              <div className="form-group">
                <label className="form-label">Jumlah Tenaga Kerja (Orang)</label>
                <input
                  type="number"
                  className="input-control font-mono"
                  value={formData.tenagaKerja}
                  onChange={(e) => handleInputChange('tenagaKerja', parseInt(e.target.value) || 0)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Perkiraan Luas Bangunan/Lahan (m²)</label>
                <input
                  type="number"
                  className="input-control font-mono"
                  value={formData.luasTempat}
                  onChange={(e) => handleInputChange('luasTempat', parseInt(e.target.value) || 0)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Fasilitas Penunjang Usaha</label>
              <input
                type="text"
                className="input-control"
                placeholder="Contoh: Daya Listrik 3500VA, Lahan Parkir Luas, Reklame Billboard"
                value={formData.fasilitas}
                onChange={(e) => handleInputChange('fasilitas', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Bagian 4: Foto & Bukti */}
        {activeStep === 4 && (
          <div className="jri-card" style={{ padding: '28px' }}>
            <h2 className="headline-md" style={{ marginBottom: '4px' }}>4. Dokumen & Bukti Visual Pendukung</h2>
            <p className="body-sm" style={{ marginBottom: '20px' }}>Lampiran foto lokasi usaha dan kelengkapan administrasi.</p>

            <div className="form-group">
              <label className="form-label">URL Foto Fasad / Bangunan Usaha</label>
              <input
                type="text"
                className="input-control"
                value={formData.fotoUrl}
                onChange={(e) => handleInputChange('fotoUrl', e.target.value)}
              />
              <span className="form-hint">Foto bukti tampak depan yang menunjukkan plang nama dan aktivitas.</span>
            </div>

            {formData.fotoUrl && (
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Pratinjau Foto Bukti:</div>
                <img
                  src={formData.fotoUrl}
                  alt="Preview Bukti Lapangan"
                  style={{
                    width: '100%',
                    maxHeight: '260px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--outline-variant)'
                  }}
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"; }}
                />
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Status Kelengkapan Dokumen Legalitas</label>
              <select
                className="select-control"
                value={formData.kelengkapanDokumen}
                onChange={(e) => handleInputChange('kelengkapanDokumen', e.target.value)}
              >
                <option value="Lengkap (NIB & Foto Lokasi)">Lengkap (NIB / Izin Usaha Terlampir & Foto)</option>
                <option value="Hanya Foto Lapangan (Tanpa NIB)">Hanya Foto Lapangan (Belum memiliki NIB)</option>
                <option value="Surat Keterangan Usaha Desa (SKU)">Surat Keterangan Usaha Desa (SKU)</option>
                <option value="Perlu Perbaikan / Belum Lengkap">Perlu Perbaikan / Belum Lengkap</option>
              </select>
            </div>
          </div>
        )}

        {/* Bagian 5: Sumber & Kualitas Data */}
        {activeStep === 5 && (
          <div className="jri-card" style={{ padding: '28px' }}>
            <h2 className="headline-md" style={{ marginBottom: '4px' }}>5. Sumber & Integritas Kualitas Data</h2>
            <p className="body-sm" style={{ marginBottom: '20px' }}>Catatan audit asal usul data sesuai prinsip akuntabilitas PRD.</p>

            <div className="grid-cols-2">
              <div className="form-group">
                <label className="form-label">Metode Sumber Pendataan</label>
                <select
                  className="select-control"
                  value={formData.sumberData}
                  onChange={(e) => handleInputChange('sumberData', e.target.value)}
                >
                  <option value="Survei Lapangan Mandiri">Survei Lapangan Mandiri Petugas</option>
                  <option value="Laporan RT/RW Setempat">Laporan RT / RW Setempat</option>
                  <option value="Data Registrasi Pelaku UMKM Desa">Data Registrasi Pelaku UMKM Desa</option>
                  <option value="Pemberitahuan Sukarela Warga">Pemberitahuan Sukarela Warga</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Petugas Penginput (Otomatis Sesi)</label>
                <input
                  type="text"
                  className="input-control"
                  value={formData.petugas}
                  disabled
                  style={{ backgroundColor: 'var(--surface-container-low)' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Catatan Integritas & Kondisi Lapangan</label>
              <textarea
                className="textarea-control"
                rows="3"
                value={formData.catatanKualitas}
                onChange={(e) => handleInputChange('catatanKualitas', e.target.value)}
                placeholder="Tuliskan catatan khusus terkait validitas informasi atau kendala di lokasi..."
              />
            </div>

            <div style={{
              backgroundColor: 'var(--primary-subtle)',
              border: '1px solid rgba(0, 81, 56, 0.2)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              marginTop: '16px'
            }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>fact_check</span>
                <div style={{ fontSize: '12.5px', color: 'var(--primary)', lineHeight: 1.4 }}>
                  <strong>Pernyataan Akuntabilitas:</strong> Dengan mengajukan data ini, sistem akan menyimpan catatan ke Audit Log JRI dengan status <em>Menunggu Verifikasi</em>. Tim Verifikator Berwenang akan memeriksa kesesuaian dokumen dan foto sebelum data disahkan.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stepper Footer Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px'
        }}>
          <div>
            {activeStep > 1 && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveStep(prev => prev - 1)}
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Kembali
              </button>
            )}
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={onCancel}
            >
              Batal
            </button>

            {activeStep < 5 ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setActiveStep(prev => prev + 1)}
              >
                Lanjutkan Langkah {activeStep + 1}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                style={{ backgroundColor: '#005138' }}
              >
                <span className="material-symbols-outlined">send</span>
                Kirim ke Antrean Verifikasi
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
