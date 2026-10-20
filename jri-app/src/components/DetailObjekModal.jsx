import React, { useState } from 'react';

export default function DetailObjekModal({ objek, onClose, onVerify, currentUser }) {
  const [activeTab, setActiveTab] = useState('ringkasan');
  const [catatanVerif, setCatatanVerif] = useState('');

  if (!objek) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card" style={{ maxWidth: '820px' }}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="font-mono" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)' }}>
                {objek.id}
              </span>
              <span className={`badge ${objek.statusVerifikasi === 'Terverifikasi' ? 'badge-verified' : objek.statusVerifikasi === 'Menunggu Verifikasi' ? 'badge-pending' : 'badge-revision'}`}>
                {objek.statusVerifikasi}
              </span>
            </div>
            <h2 className="headline-lg" style={{ marginTop: '2px' }}>{objek.nama}</h2>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Modal Tabs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          padding: '0 24px',
          borderBottom: '1px solid var(--outline-subtle)',
          backgroundColor: 'var(--surface-container-low)'
        }}>
          {['ringkasan', 'lokasi', 'ekonomi', 'riwayat'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 14px',
                fontSize: '13px',
                fontWeight: activeTab === tab ? 700 : 500,
                color: activeTab === tab ? 'var(--primary)' : 'var(--outline)',
                borderBottom: activeTab === tab ? '2px solid var(--primary)' : '2px solid transparent',
                textTransform: 'capitalize'
              }}
            >
              {tab === 'ringkasan' && "Ringkasan Objek"}
              {tab === 'lokasi' && "Lokasi & Koordinat"}
              {tab === 'ekonomi' && "Aktivitas & Skala"}
              {tab === 'riwayat' && "Riwayat Audit"}
            </button>
          ))}
        </div>

        {/* Body Content */}
        <div className="modal-body">
          {activeTab === 'ringkasan' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '20px', marginBottom: '20px' }}>
                <img
                  src={objek.fotoUrl}
                  alt={objek.nama}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--outline-variant)'
                  }}
                />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--on-surface)' }}>Deskripsi Usaha:</div>
                  <p className="body-md" style={{ marginTop: '4px' }}>{objek.deskripsi}</p>

                  <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '12.5px' }}>
                    <div>
                      <span style={{ color: 'var(--outline)' }}>Subkategori:</span>
                      <div style={{ fontWeight: 600 }}>{objek.subkategori}</div>
                    </div>
                    <div>
                      <span style={{ color: 'var(--outline)' }}>Status Operasional:</span>
                      <div style={{ fontWeight: 600 }}>{objek.statusOperasional}</div>
                    </div>
                    <div>
                      <span style={{ color: 'var(--outline)' }}>Kelengkapan Berkas:</span>
                      <div style={{ fontWeight: 600 }}>{objek.kelengkapanDokumen}</div>
                    </div>
                    <div>
                      <span style={{ color: 'var(--outline)' }}>Sumber Pendataan:</span>
                      <div style={{ fontWeight: 600 }}>{objek.sumberData}</div>
                    </div>
                  </div>
                </div>
              </div>

              {objek.catatanVerifikasi && (
                <div style={{
                  padding: '12px 16px',
                  backgroundColor: '#FFF0D4',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid #FFE0A6',
                  fontSize: '12.5px',
                  color: '#925400'
                }}>
                  <strong>Catatan Verifikator ({objek.verifikator || 'Tim Verifikasi'}):</strong><br />
                  {objek.catatanVerifikasi}
                </div>
              )}
            </div>
          )}

          {activeTab === 'lokasi' && (
            <div>
              <div className="grid-cols-2" style={{ marginBottom: '16px' }}>
                <div className="jri-card" style={{ padding: '16px' }}>
                  <span className="body-sm" style={{ fontWeight: 600 }}>Dusun Administrasi:</span>
                  <div style={{ fontSize: '15px', fontWeight: 700, marginTop: '2px' }}>{objek.dusun}</div>
                  <div style={{ fontSize: '13px', color: 'var(--outline)' }}>{objek.rtRw}</div>
                </div>
                <div className="jri-card" style={{ padding: '16px' }}>
                  <span className="body-sm" style={{ fontWeight: 600 }}>Koordinat GPS:</span>
                  <div className="font-mono" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--primary)', marginTop: '2px' }}>
                    {objek.lat}, {objek.lng}
                  </div>
                  <div style={{ fontSize: '12px', color: '#1E8E3E' }}>Tervalidasi Spasial JRI</div>
                </div>
              </div>

              <div className="jri-card" style={{ padding: '16px' }}>
                <span className="body-sm" style={{ fontWeight: 600 }}>Alamat / Patokan Jalan:</span>
                <p style={{ fontSize: '13.5px', marginTop: '4px' }}>{objek.alamat}</p>
              </div>
            </div>
          )}

          {activeTab === 'ekonomi' && (
            <div>
              <div className="grid-cols-3" style={{ marginBottom: '16px' }}>
                <div className="jri-card" style={{ padding: '16px' }}>
                  <span className="body-sm" style={{ fontWeight: 600 }}>Skala Usaha:</span>
                  <div style={{ fontSize: '13px', fontWeight: 600, marginTop: '4px' }}>{objek.skalaOmzet}</div>
                </div>
                <div className="jri-card" style={{ padding: '16px' }}>
                  <span className="body-sm" style={{ fontWeight: 600 }}>Omzet Indikatif:</span>
                  <div className="font-mono" style={{ fontSize: '16px', fontWeight: 700, color: 'var(--primary)', marginTop: '4px' }}>
                    Rp {(objek.omzetIndikatif || 0).toLocaleString('id-ID')}
                  </div>
                </div>
                <div className="jri-card" style={{ padding: '16px' }}>
                  <span className="body-sm" style={{ fontWeight: 600 }}>Tenaga Kerja:</span>
                  <div style={{ fontSize: '15px', fontWeight: 700, marginTop: '4px' }}>{objek.tenagaKerja} Orang</div>
                </div>
              </div>

              <div className="disclaimer-banner" style={{ margin: 0 }}>
                <span className="material-symbols-outlined" style={{ color: '#E65100' }}>info</span>
                <div className="disclaimer-desc">
                  Data omzet di atas merupakan estimasi indikatif lapangan untuk pemetaan potensi dan tidak dapat dijadikan dasar penetapan kewajiban pajak resmi sebelum ada telaah dari instansi berwenang.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'riwayat' && (
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {(objek.riwayat || []).map((rw, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--primary-subtle)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '11px',
                      fontWeight: 700
                    }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ fontSize: '12.5px', fontWeight: 600 }}>{rw.aksi}</div>
                      <div style={{ fontSize: '11px', color: 'var(--outline)' }}>
                        Oleh: <strong>{rw.aktor}</strong> &bull; {rw.tgl}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
