import React, { useState } from 'react';

export default function VerifikasiView({ objekList, currentUser, onVerifyObjek, onSelectObjek }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [decisionModal, setDecisionModal] = useState(false);
  const [decisionType, setDecisionType] = useState('Terverifikasi');
  const [decisionNote, setDecisionNote] = useState('');

  // Objects pending verification
  const pendingItems = objekList.filter(o => o.statusVerifikasi === 'Menunggu Verifikasi');
  const revisionItems = objekList.filter(o => o.statusVerifikasi === 'Perlu Perbaikan');

  const handleOpenDecision = (obj, type) => {
    setSelectedItem(obj);
    setDecisionType(type);
    setDecisionNote(
      type === 'Terverifikasi'
        ? 'Data identitas fisik, titik koordinat peta, dan klasifikasi usaha telah divalidasi sesuai kondisi lapangan Desa Jatimulyo.'
        : type === 'Perlu Perbaikan'
        ? 'Perlu pembaruan koordinat GPS dan foto tampak plang nama yang lebih jelas.'
        : 'Data ditolak karena entitas usaha tidak ditemukan aktif di lapangan.'
    );
    setDecisionModal(true);
  };

  const handleConfirmDecision = () => {
    if (!decisionNote.trim()) {
      alert('Alasan atau catatan verifikasi wajib diisi untuk menjaga akuntabilitas audit.');
      return;
    }

    onVerifyObjek(selectedItem.id, decisionType, decisionNote, currentUser.nama);
    setDecisionModal(false);
    setSelectedItem(null);
  };

  return (
    <div>
      {/* Title */}
      <div style={{ marginBottom: '20px' }}>
        <h1 className="headline-xl">Alur Kerja Verifikasi Data Lapangan</h1>
        <p className="body-md">
          Tinjauan bukti, foto lapangan, dan penentuan status verifikasi objek ekonomi oleh verifikator berwenang (PRD FR-05).
        </p>
      </div>

      {/* Role Reminder */}
      <div style={{
        background: 'var(--surface-container-low)',
        border: '1px solid var(--outline-variant)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 18px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>security</span>
          <div style={{ fontSize: '13px', color: 'var(--on-surface)' }}>
            Petugas Verifikator Aktif: <strong>{currentUser.nama}</strong> ({currentUser.role})
          </div>
        </div>
        <span className="badge badge-verified">
          Otoritas Pemeriksa Sah
        </span>
      </div>

      {/* Pending Queue List */}
      <div className="jri-card" style={{ padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div>
            <h2 className="headline-md">Antrean Menunggu Verifikasi ({pendingItems.length})</h2>
            <p className="body-sm">Data survei lapangan baru yang diajukan dan belum melalui validasi resmi</p>
          </div>
          <span className="badge badge-pending">Perlu Ditinjau</span>
        </div>

        {pendingItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '36px', color: 'var(--outline)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '42px', color: '#1E8E3E' }}>task_alt</span>
            <div style={{ marginTop: '8px', fontWeight: 600, color: 'var(--on-surface)' }}>Semua Antrean Bersih!</div>
            <div className="body-sm">Tidak ada objek ekonomi baru yang menunggu verifikasi saat ini.</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {pendingItems.map((obj) => (
              <div
                key={obj.id}
                style={{
                  border: '1px solid var(--outline-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr 220px',
                  gap: '20px',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <img
                  src={obj.fotoUrl}
                  alt={obj.nama}
                  style={{
                    width: '140px',
                    height: '95px',
                    objectFit: 'cover',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--outline-variant)'
                  }}
                />

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="font-mono" style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700 }}>
                      {obj.id}
                    </span>
                    <span className="badge badge-pending">Menunggu Verifikasi</span>
                  </div>
                  <h3 className="headline-sm" style={{ marginTop: '4px' }}>{obj.nama}</h3>
                  <div className="body-sm" style={{ color: 'var(--outline)', marginTop: '2px' }}>
                    {obj.dusun} ({obj.rtRw}) &bull; {obj.alamat}
                  </div>
                  <div style={{ fontSize: '12px', marginTop: '6px', color: 'var(--on-surface-variant)' }}>
                    Pendata: <strong>{obj.petugas}</strong> ({obj.tanggalPendataan}) &bull; Dokumen: <em>{obj.kelengkapanDokumen}</em>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleOpenDecision(obj, 'Terverifikasi')}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                    Setujui (Valid)
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleOpenDecision(obj, 'Perlu Perbaikan')}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>history_edu</span>
                    Minta Perbaikan
                  </button>
                  <button
                    className="btn btn-ghost btn-sm"
                    style={{ color: 'var(--error)' }}
                    onClick={() => handleOpenDecision(obj, 'Ditolak')}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>cancel</span>
                    Tolak Data
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Revision Queue List */}
      {revisionItems.length > 0 && (
        <div className="jri-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <h2 className="headline-md">Data dalam Masa Perbaikan ({revisionItems.length})</h2>
              <p className="body-sm">Objek yang dikembalikan ke petugas survei untuk revisi GPS atau kelengkapan berkas</p>
            </div>
            <span className="badge badge-revision">Perlu Revisi</span>
          </div>

          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID & Nama Usaha</th>
                  <th>Dusun</th>
                  <th>Petugas Penanggung Jawab</th>
                  <th>Catatan Evaluasi Verifikator</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {revisionItems.map(obj => (
                  <tr key={obj.id}>
                    <td>
                      <div className="font-mono" style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '11px' }}>
                        {obj.id}
                      </div>
                      <div style={{ fontWeight: 600 }}>{obj.nama}</div>
                    </td>
                    <td>{obj.dusun}</td>
                    <td>{obj.petugas}</td>
                    <td style={{ maxWidth: '300px', fontSize: '12px', color: '#BA1A1A' }}>
                      {obj.catatanVerifikasi || 'Perlu pembaruan data lapangan'}
                    </td>
                    <td>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => onSelectObjek(obj)}
                      >
                        Tinjau Ulang
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Decision Modal */}
      {decisionModal && selectedItem && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <div>
                <h3 className="headline-md">Keputusan Verifikasi Data</h3>
                <div className="body-sm">Objek: {selectedItem.nama} ({selectedItem.id})</div>
              </div>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setDecisionModal(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="modal-body">
              <div style={{
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: decisionType === 'Terverifikasi' ? 'var(--success-subtle)' : decisionType === 'Perlu Perbaikan' ? '#FFF0D4' : '#FEECEB',
                color: decisionType === 'Terverifikasi' ? '#137333' : decisionType === 'Perlu Perbaikan' ? '#925400' : '#BA1A1A',
                marginBottom: '16px',
                fontWeight: 600,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span className="material-symbols-outlined">
                  {decisionType === 'Terverifikasi' ? 'verified' : decisionType === 'Perlu Perbaikan' ? 'report_problem' : 'cancel'}
                </span>
                <span>Tindakan Terpilih: Menetapkan Status {decisionType.toUpperCase()}</span>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Catatan Justifikasi & Alasan Verifikator <span className="required">*</span>
                </label>
                <textarea
                  className="textarea-control"
                  rows="4"
                  value={decisionNote}
                  onChange={(e) => setDecisionNote(e.target.value)}
                  placeholder="Jelaskan dasar pertimbangan verifikasi lapangan..."
                  required
                />
                <span className="form-hint">Catatan ini akan tersimpan permanen di Lembar Audit Trail sistem JRI.</span>
              </div>

              <div style={{ fontSize: '11.5px', color: 'var(--outline)', marginTop: '12px' }}>
                *Catatan PRD: Status "Terverifikasi" hanya mengonfirmasi validitas data lapangan sesuai ruang lingkup survei, bukan penetapan pajak daerah.
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setDecisionModal(false)}
              >
                Batal
              </button>
              <button
                type="button"
                className={`btn ${decisionType === 'Terverifikasi' ? 'btn-primary' : decisionType === 'Perlu Perbaikan' ? 'btn-secondary' : 'btn-danger'}`}
                onClick={handleConfirmDecision}
              >
                Konfirmasi & Simpan Keputusan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
