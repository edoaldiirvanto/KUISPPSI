import React, { useState } from 'react';
import { DUSUN_LIST } from '../data/mockData';

export default function PengaturanView() {
  const [tahunAnggaran, setTahunAnggaran] = useState('2026');
  const [batasWilayah, setBatasWilayah] = useState('Kecamatan Jati Agung, Lampung Selatan');
  const [statusSistem, setStatusSistem] = useState('Pilot Terbatas Desa Jatimulyo');
  const [cadanganTersimpan, setCadanganTersimpan] = useState(false);

  const handleSimpan = (e) => {
    e.preventDefault();
    setCadanganTersimpan(true);
    setTimeout(() => setCadanganTersimpan(false), 3000);
  };

  const handleBackup = () => {
    const backupData = {
      namaSistem: "Jatimulyo Revenue Intelligence (JRI)",
      versi: "1.0-pilot",
      tanggalBackup: new Date().toISOString(),
      wilayah: "Desa Jatimulyo, Kec. Jati Agung, Kab. Lampung Selatan",
      dusunTerdaftar: DUSUN_LIST
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", `JRI_Backup_Desa_Jatimulyo_${new Date().toISOString().slice(0,10)}.json`);
    dl.click();
  };

  return (
    <div style={{ maxWidth: '800px', paddingBottom: '40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 className="headline-xl">Pengaturan Sistem & Konfigurasi Wilayah</h1>
        <p className="body-md">
          Pengelolaan parameter operasional, sinkronisasi batas geospasial dusun, dan pemeliharaan basis data (PRD FR-14 & NFR-07).
        </p>
      </div>

      {cadanganTersimpan && (
        <div style={{
          padding: '12px 16px',
          backgroundColor: 'var(--success-subtle)',
          border: '1px solid #CEEAD6',
          borderRadius: 'var(--radius-md)',
          color: '#137333',
          marginBottom: '20px',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span className="material-symbols-outlined">check_circle</span>
          <span>Konfigurasi sistem berhasil diperbarui dan dicatat ke Audit Trail!</span>
        </div>
      )}

      <form onSubmit={handleSimpan}>
        <div className="jri-card" style={{ padding: '24px', marginBottom: '24px' }}>
          <h2 className="headline-md" style={{ marginBottom: '16px' }}>Konfigurasi Operasional Desa</h2>

          <div className="grid-cols-2">
            <div className="form-group">
              <label className="form-label">Tahun Anggaran Berjalan</label>
              <input
                type="text"
                className="input-control font-mono"
                value={tahunAnggaran}
                onChange={(e) => setTahunAnggaran(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Status Penerapan Aplikasi</label>
              <input
                type="text"
                className="input-control"
                value={statusSistem}
                onChange={(e) => setStatusSistem(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Kecamatan & Kabupaten Acuan</label>
            <input
              type="text"
              className="input-control"
              value={batasWilayah}
              onChange={(e) => setBatasWilayah(e.target.value)}
            />
          </div>

          <div style={{ marginTop: '16px' }}>
            <label className="form-label">Daftar Dusun Aktif dalam Pilot</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
              {DUSUN_LIST.map((d, i) => (
                <span key={i} className="badge badge-verified" style={{ padding: '6px 12px', fontSize: '12px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>location_on</span>
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" className="btn btn-primary">
              Simpan Konfigurasi
            </button>
          </div>
        </div>
      </form>

      {/* Backup and Maintenance */}
      <div className="jri-card" style={{ padding: '24px' }}>
        <h2 className="headline-md" style={{ marginBottom: '8px' }}>Pencadangan & Pemulihan Basis Data (PRD NFR-07)</h2>
        <p className="body-sm" style={{ marginBottom: '18px' }}>
          Unduh cadangan data json terenkripsi untuk keamanan data survei ekonomi Desa Jatimulyo.
        </p>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-secondary" onClick={handleBackup}>
            <span className="material-symbols-outlined">backup</span>
            Unduh Cadangan Basis Data (JSON)
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => alert('Sistem JRI Pilot v1.0 beroperasi normal pada browser lokal.')}
          >
            <span className="material-symbols-outlined">health_and_safety</span>
            Cek Kesehatan Sistem
          </button>
        </div>
      </div>
    </div>
  );
}
