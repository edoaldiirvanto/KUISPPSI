import React, { useState } from 'react';

export default function TindakLanjutView({ tasksList, onUpdateTaskStatus, onCreateTask, objekList }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newObjekId, setNewObjekId] = useState(objekList[0]?.id || '');
  const [newPetugas, setNewPetugas] = useState('Budi Santoso, S.Kom');
  const [newPrioritas, setNewPrioritas] = useState('Tinggi');
  const [newTenggat, setNewTenggat] = useState('2026-10-30');
  const [newDeskripsi, setNewDeskripsi] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const matchedObj = objekList.find(o => o.id === newObjekId);
    const newTask = {
      id: `TGS-2026-0${Math.floor(50 + Math.random() * 40)}`,
      judul: newTitle,
      objekId: newObjekId,
      objekNama: matchedObj ? matchedObj.nama : 'Objek Lapangan',
      dusun: matchedObj ? matchedObj.dusun : 'Dusun I Jatimulyo',
      petugasTugas: newPetugas,
      prioritas: newPrioritas,
      status: 'Terbuka',
      tenggat: newTenggat,
      deskripsi: newDeskripsi,
      riwayatLog: 'Tugas tindak lanjut baru diterbitkan melalui modul operasional.'
    };

    onCreateTask(newTask);
    setModalOpen(false);
    setNewTitle('');
    setNewDeskripsi('');
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h1 className="headline-xl">Manajemen Tugas Tindak Lanjut Lapangan</h1>
          <p className="body-md">
            Penugasan verifikasi ulang, klarifikasi izin, dan survei lapangan Desa Jatimulyo (PRD FR-07).
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
          <span className="material-symbols-outlined">add_task</span>
          Buat Tugas Baru
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {tasksList.map(task => (
          <div
            key={task.id}
            className="jri-card"
            style={{
              padding: '20px 24px',
              borderLeft: task.prioritas === 'Tinggi' ? '4px solid #BA1A1A' : task.prioritas === 'Sedang' ? '4px solid #B06000' : '4px solid #1E8E3E'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span className="font-mono" style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary)' }}>
                    {task.id}
                  </span>
                  <span className="badge" style={{
                    backgroundColor: task.prioritas === 'Tinggi' ? '#FEECEB' : task.prioritas === 'Sedang' ? '#FFF0D4' : '#E6F4EA',
                    color: task.prioritas === 'Tinggi' ? '#C5221F' : task.prioritas === 'Sedang' ? '#925400' : '#137333'
                  }}>
                    Prioritas {task.prioritas}
                  </span>
                  <span className="badge" style={{
                    backgroundColor: task.status === 'Selesai' ? 'var(--success-subtle)' : task.status === 'Dalam Proses' ? '#E8F0FE' : '#F1F3F4',
                    color: task.status === 'Selesai' ? '#137333' : task.status === 'Dalam Proses' ? '#1967D2' : '#5F6368'
                  }}>
                    {task.status}
                  </span>
                </div>
                <h3 className="headline-sm">{task.judul}</h3>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', color: 'var(--outline)' }}>Tenggat Waktu:</div>
                <div className="font-mono" style={{ fontSize: '13px', fontWeight: 600 }}>{task.tenggat}</div>
              </div>
            </div>

            <p className="body-md" style={{ marginBottom: '14px', color: 'var(--on-surface-variant)' }}>
              {task.deskripsi}
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '12px',
              borderTop: '1px solid var(--outline-subtle)',
              fontSize: '12px'
            }}>
              <div>
                <span>Terkait Objek: <strong>{task.objekNama}</strong> ({task.dusun})</span> &bull; 
                <span style={{ marginLeft: '8px' }}>Petugas Lapangan: <strong>{task.petugasTugas}</strong></span>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                {task.status !== 'Selesai' && (
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onUpdateTaskStatus(task.id, 'Selesai')}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#1E8E3E' }}>check</span>
                    Tandai Selesai
                  </button>
                )}
                {task.status === 'Terbuka' && (
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => onUpdateTaskStatus(task.id, 'Dalam Proses')}
                  >
                    Mulai Kerjakan
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Buat Tugas */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h3 className="headline-md">Terbitkan Tugas Tindak Lanjut Baru</h3>
              <button className="btn btn-ghost btn-sm" onClick={() => setModalOpen(false)}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleCreate}>
              <div className="modal-body">
                <div className="form-group">
                  <label className="form-label">Judul Instruksi Tugas <span className="required">*</span></label>
                  <input
                    type="text"
                    className="input-control"
                    placeholder="Contoh: Verifikasi ulang izin reklame toko"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="grid-cols-2">
                  <div className="form-group">
                    <label className="form-label">Pilih Objek Terkait</label>
                    <select
                      className="select-control"
                      value={newObjekId}
                      onChange={(e) => setNewObjekId(e.target.value)}
                    >
                      {objekList.map(o => (
                        <option key={o.id} value={o.id}>{o.id} - {o.nama}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Petugas Lapangan</label>
                    <select
                      className="select-control"
                      value={newPetugas}
                      onChange={(e) => setNewPetugas(e.target.value)}
                    >
                      <option value="Budi Santoso, S.Kom">Budi Santoso, S.Kom (Petugas Pendata)</option>
                      <option value="Ahmad Fauzi, M.Si">Ahmad Fauzi, M.Si (Analis Potensi)</option>
                    </select>
                  </div>
                </div>

                <div className="grid-cols-2">
                  <div className="form-group">
                    <label className="form-label">Prioritas Penanganan</label>
                    <select
                      className="select-control"
                      value={newPrioritas}
                      onChange={(e) => setNewPrioritas(e.target.value)}
                    >
                      <option value="Tinggi">Tinggi (Mendesak)</option>
                      <option value="Sedang">Sedang</option>
                      <option value="Rendah">Rendah</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Batas Tenggat Waktu</label>
                    <input
                      type="date"
                      className="input-control"
                      value={newTenggat}
                      onChange={(e) => setNewTenggat(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Uraian Rinci Petunjuk Lapangan</label>
                  <textarea
                    className="textarea-control"
                    rows="3"
                    placeholder="Tuliskan arahan dan dokumen yang harus diambil oleh petugas di lapangan..."
                    value={newDeskripsi}
                    onChange={(e) => setNewDeskripsi(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-ghost" onClick={() => setModalOpen(false)}>
                  Batal
                </button>
                <button type="submit" className="btn btn-primary">
                  Terbitkan Tugas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
