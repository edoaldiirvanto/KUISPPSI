import React, { useState } from 'react';
import { DUSUN_LIST, KATEGORI_LIST } from '../data/mockData';

export default function DataObjekView({ objekList, onSelectObjek, onNavigateTab, searchQuery, onArchiveObjek }) {
  const [filterDusun, setFilterDusun] = useState('Semua');
  const [filterKategori, setFilterKategori] = useState('Semua');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter logic
  const filtered = objekList.filter(o => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = o.nama.toLowerCase().includes(q);
      const matchId = o.id.toLowerCase().includes(q);
      const matchDusun = o.dusun.toLowerCase().includes(q);
      if (!matchName && !matchId && !matchDusun) return false;
    }
    if (filterDusun !== 'Semua' && o.dusun !== filterDusun) return false;
    if (filterKategori !== 'Semua' && o.kategori !== filterKategori) return false;
    if (filterStatus !== 'Semua' && o.statusVerifikasi !== filterStatus) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const exportToCSV = () => {
    const headers = ["ID", "Nama Usaha", "Kategori", "Dusun", "Status", "Omzet Indikatif", "Petugas"];
    const rows = filtered.map(o => [
      o.id,
      `"${o.nama}"`,
      o.kategori,
      `"${o.dusun}"`,
      o.statusVerifikasi,
      o.omzetIndikatif,
      `"${o.petugas}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `JRI_Data_Objek_Desa_Jatimulyo_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Title & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h1 className="headline-xl">Basis Data Objek Ekonomi Desa</h1>
          <p className="body-md">Katalog seluruh potensi usaha, lokasi dusun, dan riwayat verifikasi Desa Jatimulyo.</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-secondary" onClick={exportToCSV}>
            <span className="material-symbols-outlined">download</span>
            Ekspor CSV
          </button>
          <button className="btn btn-primary" onClick={() => onNavigateTab('tambah-objek')}>
            <span className="material-symbols-outlined">add_circle</span>
            Tambah Objek Baru
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="jri-card" style={{ padding: '16px 20px', marginBottom: '20px', display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--outline)', fontSize: '20px' }}>filter_list</span>
          <span style={{ fontSize: '13px', fontWeight: 600 }}>Filter:</span>
        </div>

        <select
          className="select-control"
          style={{ width: 'auto', minWidth: '160px' }}
          value={filterDusun}
          onChange={(e) => { setFilterDusun(e.target.value); setCurrentPage(1); }}
        >
          <option value="Semua">Semua Dusun</option>
          {DUSUN_LIST.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <select
          className="select-control"
          style={{ width: 'auto', minWidth: '170px' }}
          value={filterKategori}
          onChange={(e) => { setFilterKategori(e.target.value); setCurrentPage(1); }}
        >
          <option value="Semua">Semua Kategori</option>
          {KATEGORI_LIST.map(k => <option key={k.id} value={k.id}>{k.nama}</option>)}
        </select>

        <select
          className="select-control"
          style={{ width: 'auto', minWidth: '170px' }}
          value={filterStatus}
          onChange={(e) => { setFilterStatus(e.target.value); setCurrentPage(1); }}
        >
          <option value="Semua">Semua Status</option>
          <option value="Terverifikasi">Terverifikasi</option>
          <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
          <option value="Perlu Perbaikan">Perlu Perbaikan</option>
        </select>

        <div style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--outline)' }}>
          Ditemukan: <strong>{filtered.length}</strong> data
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID & Nama Usaha</th>
              <th>Kategori Sektor</th>
              <th>Lokasi Wilayah</th>
              <th>Estimasi Indikatif</th>
              <th>Status Verifikasi</th>
              <th>Petugas Pendata</th>
              <th style={{ textAlign: 'right' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '40px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--outline-variant)' }}>search_off</span>
                  <div style={{ marginTop: '8px', color: 'var(--on-surface-variant)', fontWeight: 500 }}>
                    Tidak ada objek yang sesuai kriteria pencarian / filter.
                  </div>
                </td>
              </tr>
            ) : (
              paginated.map((obj) => (
                <tr key={obj.id}>
                  <td>
                    <div className="font-mono" style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700 }}>
                      {obj.id}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '13.5px', marginTop: '2px' }}>{obj.nama}</div>
                    <div className="body-sm" style={{ color: 'var(--outline)' }}>{obj.alamat}</div>
                  </td>
                  <td>
                    <span style={{ fontSize: '12.5px', fontWeight: 500 }}>{obj.subkategori}</span>
                  </td>
                  <td>
                    <div style={{ fontSize: '12.5px', fontWeight: 600 }}>{obj.dusun}</div>
                    <div className="body-sm" style={{ color: 'var(--outline)' }}>{obj.rtRw}</div>
                  </td>
                  <td>
                    <div className="font-mono" style={{ fontWeight: 600, fontSize: '13px' }}>
                      Rp {(obj.omzetIndikatif || 0).toLocaleString('id-ID')}
                    </div>
                    <span className="badge badge-indicative" style={{ fontSize: '9px', padding: '1px 5px' }}>
                      Indikatif/bln
                    </span>
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
                        Perlu Perbaikan
                      </span>
                    )}
                  </td>
                  <td>
                    <div style={{ fontSize: '12px', fontWeight: 500 }}>{obj.petugas}</div>
                    <div style={{ fontSize: '11px', color: 'var(--outline)' }}>{obj.tanggalPendataan}</div>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'inline-flex', gap: '6px' }}>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => onSelectObjek(obj)}
                        title="Buka Dokumen Lengkap"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>visibility</span>
                        Lihat
                      </button>
                      <button
                        className="btn btn-ghost btn-sm"
                        style={{ color: 'var(--error)' }}
                        onClick={() => {
                          if (confirm(`Konfirmasi arsipkan data objek "${obj.nama}" (${obj.id})? Tindakan ini akan dicatat ke audit log.`)) {
                            onArchiveObjek(obj.id);
                          }
                        }}
                        title="Arsipkan Objek"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>archive</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
        <div className="body-sm">
          Menampilkan baris {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filtered.length)} dari total {filtered.length}
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            className="btn btn-secondary btn-sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          >
            Sebelumnya
          </button>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 8px', fontSize: '13px', fontWeight: 600 }}>
            {currentPage} / {totalPages}
          </div>
          <button
            className="btn btn-secondary btn-sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}
