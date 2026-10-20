import React, { useState } from 'react';
import { AUDIT_QUALITY_ISSUES } from '../data/mockData';

export default function AuditKualitasView({ auditLogs, objekList }) {
  const [activeSubTab, setActiveSubTab] = useState('quality'); // 'quality' or 'logs'
  const [filterAksi, setFilterAksi] = useState('Semua');

  const filteredLogs = auditLogs.filter(log => {
    if (filterAksi !== 'Semua' && log.aksi !== filterAksi) return false;
    return true;
  });

  return (
    <div style={{ paddingBottom: '40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 className="headline-xl">Audit Sistem & Integritas Kualitas Data</h1>
        <p className="body-md">
          Pusat pemantauan anomali spasial, isu kelengkapan dokumen, dan jejak kronologis aktivitas sistem (PRD FR-11 & NFR-03).
        </p>
      </div>

      {/* Sub Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          className={`btn ${activeSubTab === 'quality' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveSubTab('quality')}
        >
          <span className="material-symbols-outlined">rule</span>
          Pemeriksaan Kualitas Data (Quality Issues)
        </button>
        <button
          className={`btn ${activeSubTab === 'logs' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveSubTab('logs')}
        >
          <span className="material-symbols-outlined">history</span>
          Jejak Audit Aktivitas (Audit Trail)
        </button>
      </div>

      {activeSubTab === 'quality' && (
        <div className="jri-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <h2 className="headline-md">Deteksi Anomali & Kualitas Data Pilot Jatimulyo</h2>
              <p className="body-sm">Hasil scanning otomatis terhadap koordinat spasial, duplikasi, dan kelengkapan izin</p>
            </div>
            <span className="badge badge-indicative">Deteksi Mesin JRI</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {AUDIT_QUALITY_ISSUES.map(issue => (
              <div
                key={issue.id}
                style={{
                  border: '1px solid var(--outline-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: issue.status === 'Terselesaikan' ? 'var(--surface-container-low)' : '#FFFFFF'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className="font-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)' }}>
                      {issue.id}
                    </span>
                    <span className="badge" style={{
                      backgroundColor: issue.status === 'Terselesaikan' ? 'var(--success-subtle)' : '#FFF0D4',
                      color: issue.status === 'Terselesaikan' ? '#137333' : '#925400'
                    }}>
                      {issue.tingkat}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--outline)' }}>
                      Kategori: {issue.kategori}
                    </span>
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--on-surface)' }}>
                    Objek Terkait: {issue.objekRef}
                  </div>
                  <p className="body-sm" style={{ marginTop: '2px', color: 'var(--on-surface-variant)' }}>
                    {issue.deskripsi}
                  </p>
                  <div style={{ fontSize: '12px', marginTop: '6px', color: 'var(--primary)', fontWeight: 500 }}>
                    💡 <strong>Rekomendasi Tindak Lanjut:</strong> {issue.rekomendasi}
                  </div>
                </div>

                <div>
                  <span className={`badge ${issue.status === 'Terselesaikan' ? 'badge-verified' : 'badge-pending'}`}>
                    {issue.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSubTab === 'logs' && (
        <div className="jri-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div>
              <h2 className="headline-md">Buku Catatan Audit (Immutable Audit Log)</h2>
              <p className="body-sm">Catatan perubahan data, verifikasi, dan administrasi sistem yang tidak dapat diubah</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12px', color: 'var(--outline)' }}>Filter Aksi:</span>
              <select
                className="select-control"
                style={{ width: 'auto', fontSize: '12px', padding: '4px 8px' }}
                value={filterAksi}
                onChange={(e) => setFilterAksi(e.target.value)}
              >
                <option value="Semua">Semua Aksi</option>
                <option value="MEMPERBARUI_STATUS">Perubahan Status</option>
                <option value="TAMBAH_OBJEK">Tambah Objek Baru</option>
                <option value="UPDATE_CONFIG">Pengaturan Sistem</option>
                <option value="SIMULASI_MODEL">Simulasi Model</option>
              </select>
            </div>
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Waktu & ID Audit</th>
                  <th>Petugas & Peran</th>
                  <th>Modul</th>
                  <th>Aksi Operasional</th>
                  <th>Keterangan Perubahan</th>
                  <th>IP Client</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map(log => (
                  <tr key={log.id}>
                    <td>
                      <div className="font-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)' }}>{log.id}</div>
                      <div className="font-mono" style={{ fontSize: '11px', color: 'var(--outline)' }}>{log.waktu}</div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 600, fontSize: '12.5px' }}>{log.aktor}</div>
                      <div style={{ fontSize: '11px', color: 'var(--outline)' }}>{log.peran}</div>
                    </td>
                    <td>
                      <span style={{ fontSize: '12px', fontWeight: 500 }}>{log.modul}</span>
                    </td>
                    <td>
                      <span className="badge badge-indicative" style={{ fontSize: '10px' }}>
                        {log.aksi}
                      </span>
                    </td>
                    <td style={{ maxWidth: '320px', fontSize: '12px' }}>
                      {log.keterangan}
                      {log.objekRef && (
                        <div className="font-mono" style={{ fontSize: '10.5px', color: 'var(--primary)', marginTop: '2px' }}>
                          Ref: {log.objekRef}
                        </div>
                      )}
                    </td>
                    <td className="font-mono" style={{ fontSize: '11px', color: 'var(--outline)' }}>
                      {log.ipAddress}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
