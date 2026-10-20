import React, { useState } from 'react';
import { KATEGORI_LIST } from '../data/mockData';

export default function AnalisisPotensiView({ objekList }) {
  const [selectedKategori, setSelectedKategori] = useState('kuliner');
  const [asumsiTarifBagiHasil, setAsumsiTarifBagiHasil] = useState(1.5); // % indikatif bagi hasil / retribusi desa
  const [coverageSimulasi, setCoverageSimulasi] = useState(80); // % target cakupan survei lapangan

  // Filter objek kategori terpilih
  const kategoriItems = objekList.filter(o => o.kategori === selectedKategori);
  const totalOmzetKategori = kategoriItems.reduce((acc, curr) => acc + (curr.omzetIndikatif || 0), 0);
  
  // Perhitungan simulasi indikatif (PRD FR-09)
  const potensiBrutoBulanan = totalOmzetKategori * (coverageSimulasi / 100);
  const potensiPADesBulanan = potensiBrutoBulanan * (asumsiTarifBagiHasil / 100);
  const potensiPADesTahunan = potensiPADesBulanan * 12;

  const activeKategoriObj = KATEGORI_LIST.find(k => k.id === selectedKategori) || KATEGORI_LIST[0];

  return (
    <div style={{ paddingBottom: '40px' }}>
      {/* Title */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
          <span className="badge badge-indicative">
            <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>science</span>
            Simulasi Model v1.2 (Indikatif)
          </span>
        </div>
        <h1 className="headline-xl">Mesin Analisis Potensi Ekonomi & Simulasi Pendapatan</h1>
        <p className="body-md">
          Model perhitungan skenario indikatif berdasarkan agregasi data usaha per sektor di Desa Jatimulyo (PRD FR-09).
        </p>
      </div>

      {/* Mandatory PRD Notice */}
      <div className="disclaimer-banner" style={{ backgroundColor: '#FEF7E6', borderColor: '#F2BE5C' }}>
        <span className="material-symbols-outlined" style={{ color: '#5E4200' }}>warning</span>
        <div>
          <div className="disclaimer-title" style={{ color: '#5E4200' }}>
            PERINGATAN TRANSPARANSI: ESTIMASI BUKAN REALISASI KAS (PRD Bab 1.2 & 8.2)
          </div>
          <div className="disclaimer-desc" style={{ color: '#5E4200' }}>
            Hasil di bawah ini merupakan <strong>estimasi indikatif berbasis parameter simulasi</strong>, bukan penetapan ketetapan pajak atau realisasi kas desa. 
            Semua parameter dan asumsi tarif tidak boleh dipakai sebelum dikoordinasikan secara sah dengan BPPRD Kabupaten Lampung Selatan dan Pemerintah Desa.
          </div>
        </div>
      </div>

      {/* Grid: Parameter & Hasil Skenario */}
      <div className="grid-cols-3" style={{ marginBottom: '24px' }}>
        {/* Kolom Kiri: Pengaturan Parameter */}
        <div className="jri-card" style={{ padding: '24px' }}>
          <h2 className="headline-md" style={{ marginBottom: '16px' }}>Parameter Simulasi</h2>

          <div className="form-group">
            <label className="form-label">Pilih Sektor Usaha Analisis</label>
            <select
              className="select-control"
              value={selectedKategori}
              onChange={(e) => setSelectedKategori(e.target.value)}
            >
              {KATEGORI_LIST.map(k => (
                <option key={k.id} value={k.id}>{k.nama}</option>
              ))}
            </select>
            <span className="form-hint">Jumlah objek terdata saat ini: {kategoriItems.length} unit</span>
          </div>

          <div className="form-group">
            <label className="form-label">
              Asumsi Kontribusi / Retribusi Indikatif (%)
            </label>
            <input
              type="number"
              step="0.1"
              min="0.5"
              max="10"
              className="input-control font-mono"
              value={asumsiTarifBagiHasil}
              onChange={(e) => setAsumsiTarifBagiHasil(parseFloat(e.target.value) || 0)}
            />
            <span className="form-hint">Rentang wajar desa: 1.0% - 2.5%</span>
          </div>

          <div className="form-group">
            <label className="form-label">Target Cakupan Lapangan (% Compliance)</label>
            <input
              type="range"
              min="30"
              max="100"
              value={coverageSimulasi}
              onChange={(e) => setCoverageSimulasi(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--primary)' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '4px' }}>
              <span>Konservatif (30%)</span>
              <strong className="font-mono">{coverageSimulasi}% Terjaring</strong>
              <span>Agresif (100%)</span>
            </div>
          </div>

          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'var(--surface-container-low)', borderRadius: 'var(--radius-md)', fontSize: '11.5px', color: 'var(--outline)' }}>
            <strong>Versi Formula:</strong> JRI-EST-V1.2_LAMSEL<br />
            <strong>Sumber Acuan:</strong> Data Survei Objek Terverifikasi 2026
          </div>
        </div>

        {/* Kolom Tengah & Kanan: Output Simulasi */}
        <div className="jri-card" style={{ gridColumn: 'span 2', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <h2 className="headline-md">Hasil Estimasi Potensi Sektor {activeKategoriObj.nama}</h2>
                <p className="body-sm">Perhitungan skenario pendapatan indikatif tahun anggaran berjalan</p>
              </div>
              <span className="badge badge-indicative">Skenario Aktif</span>
            </div>

            <div className="grid-cols-2" style={{ marginBottom: '20px' }}>
              <div style={{ padding: '16px', background: 'var(--surface-container-low)', borderRadius: 'var(--radius-md)' }}>
                <div className="body-sm" style={{ fontWeight: 600 }}>Total Omzet Agregat Terdata:</div>
                <div className="font-mono" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--on-surface)', marginTop: '4px' }}>
                  Rp {(totalOmzetKategori).toLocaleString('id-ID')}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--outline)', marginTop: '2px' }}>
                  Dari {kategoriItems.length} objek terdata di sistem
                </div>
              </div>

              <div style={{ padding: '16px', background: 'var(--surface-container-low)', borderRadius: 'var(--radius-md)' }}>
                <div className="body-sm" style={{ fontWeight: 600 }}>Omzet Terproyeksi ({coverageSimulasi}%):</div>
                <div className="font-mono" style={{ fontSize: '22px', fontWeight: 700, color: 'var(--secondary)', marginTop: '4px' }}>
                  Rp {(potensiBrutoBulanan).toLocaleString('id-ID')}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--outline)', marginTop: '2px' }}>
                  Tingkat kepatuhan/cakupan survei
                </div>
              </div>
            </div>

            {/* Hasil Potensi PADes Tahunan */}
            <div style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)',
              color: '#fff',
              padding: '24px',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '13px', opacity: 0.85, fontWeight: 500 }}>
                    POTENSI KONTRIBUSI INDIKATIF DESA (ESTIMASI TAHUNAN)
                  </div>
                  <div className="font-mono" style={{ fontSize: '32px', fontWeight: 800, marginTop: '6px', letterSpacing: '-0.02em' }}>
                    Rp {Math.round(potensiPADesTahunan).toLocaleString('id-ID')}
                  </div>
                </div>
                <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                  Rp {Math.round(potensiPADesBulanan).toLocaleString('id-ID')} / bln
                </span>
              </div>
              <div style={{ fontSize: '12px', marginTop: '12px', opacity: 0.9 }}>
                *Dengan asumsi persentase indikatif {asumsiTarifBagiHasil}% dari omzet terproyeksi. Dapat digunakan sebagai bahan penyusunan target APBDes Desa Jatimulyo.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
            <button
              className="btn btn-secondary"
              onClick={() => alert(`Laporan simulasi sektor ${activeKategoriObj.nama} berhasil disiapkan dalam antrean unduh PDF.`)}
            >
              <span className="material-symbols-outlined">print</span>
              Cetak Dokumen Skenario
            </button>
          </div>
        </div>
      </div>

      {/* Objek Pendukung Sektor Ini */}
      <div className="jri-card" style={{ padding: '24px' }}>
        <h3 className="headline-md" style={{ marginBottom: '14px' }}>
          Daftar Objek Penyusun Sektor {activeKategoriObj.nama}
        </h3>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID & Nama Objek</th>
                <th>Dusun</th>
                <th>Omzet Indikatif / Bulan</th>
                <th>Tenaga Kerja</th>
                <th>Status Verifikasi</th>
              </tr>
            </thead>
            <tbody>
              {kategoriItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <span className="font-mono" style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700 }}>{item.id}</span>
                    <div style={{ fontWeight: 600 }}>{item.nama}</div>
                  </td>
                  <td>{item.dusun}</td>
                  <td className="font-mono" style={{ fontWeight: 600 }}>
                    Rp {(item.omzetIndikatif || 0).toLocaleString('id-ID')}
                  </td>
                  <td>{item.tenagaKerja} Orang</td>
                  <td>
                    <span className={`badge ${item.statusVerifikasi === 'Terverifikasi' ? 'badge-verified' : 'badge-pending'}`}>
                      {item.statusVerifikasi}
                    </span>
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
