import React from 'react';
import { KATEGORI_LIST, DUSUN_LIST } from '../data/mockData';

export default function DashboardView({ objekList, tasksList, onNavigateTab, onSelectObjek }) {
  // Statistics calculations
  const totalObjek = objekList.length;
  const verifiedCount = objekList.filter(o => o.statusVerifikasi === 'Terverifikasi').length;
  const pendingCount = objekList.filter(o => o.statusVerifikasi === 'Menunggu Verifikasi').length;
  const revisionCount = objekList.filter(o => o.statusVerifikasi === 'Perlu Perbaikan').length;
  
  // Total estimasi omzet indikatif (TIDAK BOLEH DISEBUT REALISASI)
  const totalOmzetIndikatif = objekList.reduce((acc, curr) => acc + (curr.omzetIndikatif || 0), 0);

  // Group by dusun
  const dusunStats = DUSUN_LIST.map(dusun => {
    const items = objekList.filter(o => o.dusun === dusun);
    return {
      dusun,
      count: items.length,
      verified: items.filter(o => o.statusVerifikasi === 'Terverifikasi').length
    };
  });

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Page Title & Context */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '12px', color: 'var(--outline)', fontWeight: 500 }}>
              Sistem JRI &gt; Ringkasan Eksekutif
            </span>
            <span className="badge badge-indicative">
              <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>science</span>
              Data Pilot Aktif
            </span>
          </div>
          <h1 className="headline-xl">Dashboard Intelijen Potensi Ekonomi Desa</h1>
          <p className="body-md" style={{ marginTop: '4px' }}>
            Pemetaan sebaran objek ekonomi, status verifikasi lapangan, dan monitoring tindak lanjut Desa Jatimulyo.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            className="btn btn-secondary" 
            onClick={() => onNavigateTab('peta')}
          >
            <span className="material-symbols-outlined">map</span>
            Buka Peta GIS
          </button>
          <button 
            className="btn btn-primary"
            onClick={() => onNavigateTab('tambah-objek')}
          >
            <span className="material-symbols-outlined">add</span>
            Tambah Objek Baru
          </button>
        </div>
      </div>

      {/* PRD Compliance Disclaimer */}
      <div className="disclaimer-banner">
        <span className="material-symbols-outlined" style={{ color: '#E65100', fontSize: '24px' }}>info</span>
        <div>
          <div className="disclaimer-title">Catatan Metodologi & Kewenangan (PRD Bab 1 & 8)</div>
          <div className="disclaimer-desc">
            Sistem JRI menyediakan data indikatif potensi ekonomi dan tidak menetapkan kewajiban pajak/retribusi secara otomatis. 
            Angka estimasi omzet atau potensi fiskal bukan merupakan penerimaan realisasi kas daerah dan hanya ditujukan untuk perencanaan survei resmi.
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid-cols-4" style={{ marginBottom: '24px' }}>
        <div className="kpi-card">
          <div className="kpi-header">
            <span className="body-sm" style={{ fontWeight: 600, color: 'var(--on-surface-variant)' }}>
              Total Objek Terdata
            </span>
            <div className="kpi-icon-wrap" style={{ backgroundColor: 'var(--primary-subtle)', color: 'var(--primary)' }}>
              <span className="material-symbols-outlined">storefront</span>
            </div>
          </div>
          <div className="kpi-value">{totalObjek}</div>
          <div className="kpi-subtext">
            <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#1E8E3E' }}>check_circle</span>
            <span>Mencakup 6 Dusun Pilot</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <span className="body-sm" style={{ fontWeight: 600, color: 'var(--on-surface-variant)' }}>
              Objek Terverifikasi
            </span>
            <div className="kpi-icon-wrap" style={{ backgroundColor: 'var(--success-subtle)', color: '#137333' }}>
              <span className="material-symbols-outlined">verified</span>
            </div>
          </div>
          <div className="kpi-value" style={{ color: '#137333' }}>{verifiedCount}</div>
          <div className="kpi-subtext">
            <span>{Math.round((verifiedCount / (totalObjek || 1)) * 100)}% dari total telah divalidasi</span>
          </div>
        </div>

        <div className="kpi-card" style={{ cursor: 'pointer' }} onClick={() => onNavigateTab('verifikasi')}>
          <div className="kpi-header">
            <span className="body-sm" style={{ fontWeight: 600, color: 'var(--on-surface-variant)' }}>
              Antrean Verifikasi
            </span>
            <div className="kpi-icon-wrap" style={{ backgroundColor: '#FFF0D4', color: '#B06000' }}>
              <span className="material-symbols-outlined">pending_actions</span>
            </div>
          </div>
          <div className="kpi-value" style={{ color: '#B06000' }}>{pendingCount}</div>
          <div className="kpi-subtext" style={{ color: '#B06000' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span>
            <span>Perlu ditinjau oleh Verifikator</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <span className="body-sm" style={{ fontWeight: 600, color: 'var(--on-surface-variant)' }}>
              Total Omzet Indikatif
            </span>
            <div className="kpi-icon-wrap" style={{ backgroundColor: '#F3E8FD', color: '#7627BB' }}>
              <span className="material-symbols-outlined">analytics</span>
            </div>
          </div>
          <div className="kpi-value" style={{ fontSize: '20px' }}>
            Rp {(totalOmzetIndikatif / 1000000).toFixed(0)} Jt<span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--outline)' }}>/bln</span>
          </div>
          <div className="kpi-subtext">
            <span className="badge badge-indicative" style={{ padding: '1px 6px', fontSize: '10px' }}>Indikatif</span>
            <span>Bukan Realisasi Pajak</span>
          </div>
        </div>
      </div>

      {/* Main Content Split: Category Distribution & Dusun Progress */}
      <div className="grid-cols-3" style={{ marginBottom: '24px' }}>
        {/* Left: Dusun Distribution */}
        <div className="jri-card" style={{ gridColumn: 'span 2', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div>
              <h2 className="headline-md">Sebaran Objek per Dusun</h2>
              <p className="body-sm">Cakupan pendataan lapangan di 6 dusun wilayah administrasi Jatimulyo</p>
            </div>
            <span className="badge badge-verified">Survei Berjalan</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {dusunStats.map((item, idx) => {
              const pct = Math.round((item.count / (totalObjek || 1)) * 100);
              return (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 600, color: 'var(--on-surface)' }}>{item.dusun}</span>
                    <span style={{ color: 'var(--on-surface-variant)' }}>
                      <strong>{item.count} Usaha</strong> ({item.verified} terverifikasi)
                    </span>
                  </div>
                  <div style={{
                    height: '8px',
                    width: '100%',
                    backgroundColor: 'var(--surface-container)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${pct}%`,
                      backgroundColor: 'var(--primary)',
                      borderRadius: '4px',
                      transition: 'width 0.4s ease'
                    }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Category Distribution */}
        <div className="jri-card" style={{ padding: '24px' }}>
          <div style={{ marginBottom: '16px' }}>
            <h2 className="headline-md">Sektor Usaha</h2>
            <p className="body-sm">Proporsi jenis kegiatan ekonomi</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {KATEGORI_LIST.map((kat) => {
              const count = objekList.filter(o => o.kategori === kat.id).length;
              return (
                <div key={kat.id} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  backgroundColor: 'var(--surface-container-low)',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="material-symbols-outlined" style={{ color: kat.color, fontSize: '20px' }}>
                      {kat.icon}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--on-surface)' }}>
                      {kat.nama.split(' ')[0]}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '10px',
                    backgroundColor: '#FFFFFF',
                    color: 'var(--on-surface)'
                  }}>
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Objects Table Preview */}
      <div className="jri-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h2 className="headline-md">Objek Ekonomi Terbaru Masuk</h2>
            <p className="body-sm">Hasil pendataan lapangan teranyar yang membutuhkan pemantauan berkala</p>
          </div>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => onNavigateTab('data-objek')}
          >
            Lihat Semua ({totalObjek})
          </button>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID Objek</th>
                <th>Nama Usaha</th>
                <th>Kategori & Dusun</th>
                <th>Estimasi Skala</th>
                <th>Status Verifikasi</th>
                <th>Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {objekList.slice(0, 4).map((obj) => (
                <tr key={obj.id}>
                  <td className="font-mono" style={{ fontWeight: 600, color: 'var(--primary)' }}>
                    {obj.id}
                  </td>
                  <td>
                    <div style={{ fontWeight: 600 }}>{obj.nama}</div>
                    <div className="body-sm" style={{ color: 'var(--outline)' }}>{obj.alamat}</div>
                  </td>
                  <td>
                    <div>{obj.dusun}</div>
                    <span className="body-sm" style={{ color: 'var(--outline)' }}>{obj.subkategori}</span>
                  </td>
                  <td>
                    <span style={{ fontSize: '12px', fontWeight: 500 }}>{obj.skalaOmzet}</span>
                  </td>
                  <td>
                    {obj.statusVerifikasi === 'Terverifikasi' && (
                      <span className="badge badge-verified">
                        <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>verified</span>
                        Terverifikasi
                      </span>
                    )}
                    {obj.statusVerifikasi === 'Menunggu Verifikasi' && (
                      <span className="badge badge-pending">
                        <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>schedule</span>
                        Menunggu
                      </span>
                    )}
                    {obj.statusVerifikasi === 'Perlu Perbaikan' && (
                      <span className="badge badge-revision">
                        <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>report_problem</span>
                        Perbaikan
                      </span>
                    )}
                  </td>
                  <td>
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={() => onSelectObjek(obj)}
                    >
                      Buka Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
