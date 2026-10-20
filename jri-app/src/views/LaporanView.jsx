import React, { useState } from 'react';
import { DUSUN_LIST, KATEGORI_LIST } from '../data/mockData';

export default function LaporanView({ objekList, tasksList }) {
  const [formatEkspor, setFormatEkspor] = useState('PDF');
  const [jenisLaporan, setJenisLaporan] = useState('rekap-potensi');
  const [selectedDusun, setSelectedDusun] = useState('Semua');

  const filteredObj = objekList.filter(o => {
    if (selectedDusun !== 'Semua' && o.dusun !== selectedDusun) return false;
    return true;
  });

  const totalOmzet = filteredObj.reduce((a, b) => a + (b.omzetIndikatif || 0), 0);
  const totalVerified = filteredObj.filter(o => o.statusVerifikasi === 'Terverifikasi').length;

  const handleDownload = () => {
    if (formatEkspor === 'CSV') {
      const headers = ["ID", "Nama Usaha", "Kategori", "Dusun", "Status Verifikasi", "Omzet Indikatif", "Petugas"];
      const rows = filteredObj.map(o => [
        o.id,
        `"${o.nama}"`,
        o.kategori,
        `"${o.dusun}"`,
        o.statusVerifikasi,
        o.omzetIndikatif,
        `"${o.petugas}"`
      ]);
      const csv = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
      const uri = encodeURI(csv);
      const link = document.createElement("a");
      link.href = uri;
      link.download = `Laporan_JRI_Desa_Jatimulyo_${selectedDusun.replace(/\s+/g, '_')}.csv`;
      link.click();
    } else {
      window.print();
    }
  };

  return (
    <div style={{ paddingBottom: '40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 className="headline-xl">Katalog Laporan & Rekapitulasi Ekspor</h1>
        <p className="body-md">
          Penyusunan dokumen resmi hasil pemetaan potensi ekonomi dan verifikasi objek Desa Jatimulyo (PRD FR-10).
        </p>
      </div>

      <div className="grid-cols-3" style={{ marginBottom: '24px' }}>
        {/* Kontrol Cetak */}
        <div className="jri-card" style={{ padding: '24px' }}>
          <h2 className="headline-md" style={{ marginBottom: '16px' }}>Pengaturan Dokumen</h2>

          <div className="form-group">
            <label className="form-label">Jenis Dokumen Laporan</label>
            <select
              className="select-control"
              value={jenisLaporan}
              onChange={(e) => setJenisLaporan(e.target.value)}
            >
              <option value="rekap-potensi">Rekapitulasi Potensi Ekonomi & Usaha Desa</option>
              <option value="status-verifikasi">Laporan Progres Verifikasi Lapangan</option>
              <option value="tindak-lanjut">Daftar Penugasan & Temuan Tindak Lanjut</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Cakupan Wilayah</label>
            <select
              className="select-control"
              value={selectedDusun}
              onChange={(e) => setSelectedDusun(e.target.value)}
            >
              <option value="Semua">Seluruh Desa Jatimulyo (6 Dusun)</option>
              {DUSUN_LIST.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Format Dokumen Output</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                className={`btn btn-sm ${formatEkspor === 'PDF' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ flex: 1 }}
                onClick={() => setFormatEkspor('PDF')}
              >
                PDF / Print
              </button>
              <button
                type="button"
                className={`btn btn-sm ${formatEkspor === 'CSV' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ flex: 1 }}
                onClick={() => setFormatEkspor('CSV')}
              >
                CSV / Excel
              </button>
            </div>
          </div>

          <button
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '16px' }}
            onClick={handleDownload}
          >
            <span className="material-symbols-outlined">download</span>
            Unduh / Cetak Dokumen
          </button>
        </div>

        {/* Pratinjau Dokumen Cetak */}
        <div className="jri-card" style={{ gridColumn: 'span 2', padding: '32px', backgroundColor: '#FFFFFF', border: '1px solid var(--outline-variant)' }}>
          {/* Header Surat/Laporan Resmi */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid #121C2A', paddingBottom: '16px', marginBottom: '20px' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em' }}>
              PEMERINTAH KABUPATEN LAMPUNG SELATAN &bull; KECAMATAN JATI AGUNG
            </div>
            <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--primary)', marginTop: '2px' }}>
              KANTOR KEPALA DESA JATIMULYO
            </div>
            <div style={{ fontSize: '11px', color: 'var(--outline)', marginTop: '2px' }}>
              Sistem Informasi Jatimulyo Revenue Intelligence (JRI) &bull; Tahun Anggaran 2026
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, textTransform: 'uppercase' }}>
              {jenisLaporan === 'rekap-potensi' && "Laporan Rekapitulasi Potensi Ekonomi Desa Jatimulyo"}
              {jenisLaporan === 'status-verifikasi' && "Laporan Capaian Verifikasi Fisik Lapangan"}
              {jenisLaporan === 'tindak-lanjut' && "Daftar Tugas Tindak Lanjut Survei & Evaluasi"}
            </h3>
            <div style={{ fontSize: '12px', color: 'var(--outline)' }}>
              Cakupan: <strong>{selectedDusun}</strong> &bull; Tanggal Cetak: {new Date().toLocaleDateString('id-ID')}
            </div>
          </div>

          {/* Ringkasan Angka Dokumen */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            padding: '12px',
            backgroundColor: 'var(--surface-container-low)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '20px'
          }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--outline)' }}>Total Objek Terdata</div>
              <div className="font-mono" style={{ fontSize: '16px', fontWeight: 700 }}>{filteredObj.length} Usaha</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--outline)' }}>Status Terverifikasi</div>
              <div className="font-mono" style={{ fontSize: '16px', fontWeight: 700, color: '#137333' }}>{totalVerified} Objek</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--outline)' }}>Estimasi Omzet Indikatif</div>
              <div className="font-mono" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary)' }}>
                Rp {(totalOmzet / 1000000).toFixed(0)} Jt/bln
              </div>
            </div>
          </div>

          {/* Tabel Mini Preview */}
          <table className="data-table" style={{ fontSize: '12px' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Usaha</th>
                <th>Dusun</th>
                <th>Omzet Indikatif</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredObj.slice(0, 5).map(item => (
                <tr key={item.id}>
                  <td className="font-mono">{item.id}</td>
                  <td><strong>{item.nama}</strong></td>
                  <td>{item.dusun}</td>
                  <td className="font-mono">Rp {(item.omzetIndikatif || 0).toLocaleString('id-ID')}</td>
                  <td>
                    <span className="badge badge-verified" style={{ fontSize: '9px' }}>
                      {item.statusVerifikasi}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tanda Tangan Format Surat */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
            <div style={{ textAlign: 'center', width: '220px', fontSize: '12px' }}>
              <div>Jatimulyo, {new Date().toLocaleDateString('id-ID')}</div>
              <div style={{ fontWeight: 600, marginTop: '2px' }}>Kepala Desa Jatimulyo</div>
              <div style={{ height: '55px' }}></div>
              <div style={{ fontWeight: 700, textDecoration: 'underline' }}>H. JOKO TRIONO, S.Sos</div>
              <div style={{ fontSize: '11px', color: 'var(--outline)' }}>NIP. 19710915 199803 1 004</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
