import React, { useState } from 'react';
import { USERS } from '../data/mockData';

export default function ManajemenUserView({ currentUser }) {
  const [userList, setUserList] = useState(USERS);
  const [filterRole, setFilterRole] = useState('Semua');

  const filteredUsers = userList.filter(u => {
    if (filterRole !== 'Semua' && u.roleKey !== filterRole) return false;
    return true;
  });

  return (
    <div style={{ paddingBottom: '40px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 className="headline-xl">Manajemen Pengguna & Hak Akses (RBAC)</h1>
        <p className="body-md">
          Pengaturan peran pengguna berdasarkan prinsip pembatasan kewenangan dan pemisahan tugas (PRD FR-02 & Skill Desain Bab 9.J).
        </p>
      </div>

      {/* RBAC Rules Matrix Banner */}
      <div className="jri-card" style={{ padding: '20px', marginBottom: '24px', backgroundColor: 'var(--surface-container-low)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>security</span>
          <h2 className="headline-sm">Matriks Hak Akses Berbasis Peran (RBAC JRI)</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', fontSize: '12px' }}>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '6px' }}>
            <strong style={{ color: 'var(--primary)' }}>Petugas Pendata:</strong>
            <p style={{ marginTop: '4px', color: 'var(--outline)' }}>Entri survei objek baru, re-tag koordinat GPS. Tidak dapat memvalidasi datanya sendiri.</p>
          </div>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '6px' }}>
            <strong style={{ color: 'var(--primary)' }}>Verifikator:</strong>
            <p style={{ marginTop: '4px', color: 'var(--outline)' }}>Uji kelayakan dokumen, tetapkan status Terverifikasi atau Minta Perbaikan.</p>
          </div>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '6px' }}>
            <strong style={{ color: 'var(--primary)' }}>Analis Potensi:</strong>
            <p style={{ marginTop: '4px', color: 'var(--outline)' }}>Simulasi skenario pendapatan, ekspor data agregat, evaluasi tren.</p>
          </div>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '6px' }}>
            <strong style={{ color: 'var(--primary)' }}>Pimpinan (Kades):</strong>
            <p style={{ marginTop: '4px', color: 'var(--outline)' }}>Melihat ringkasan eksekutif, pengesahan laporan, otorisasi penugasan.</p>
          </div>
          <div style={{ background: '#fff', padding: '10px', borderRadius: '6px' }}>
            <strong style={{ color: 'var(--primary)' }}>Administrator TI:</strong>
            <p style={{ marginTop: '4px', color: 'var(--outline)' }}>Audit log, backup, konfigurasi batas wilayah, manajemen akun.</p>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="jri-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <h2 className="headline-md">Daftar Akun Petugas Pilot JRI Desa Jatimulyo</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <select
              className="select-control"
              style={{ width: 'auto', fontSize: '12px' }}
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option value="Semua">Semua Peran</option>
              <option value="surveyor">Petugas Pendataan</option>
              <option value="verifier">Verifikator</option>
              <option value="analyst">Analis Potensi</option>
              <option value="leader">Pimpinan / Kades</option>
              <option value="admin">Administrator TI</option>
            </select>
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Petugas</th>
                <th>NIP / Identitas</th>
                <th>Peran Sistem</th>
                <th>Kewenangan Utama</th>
                <th>Status Akun</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-subtle)',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '12px'
                      }}>
                        {user.avatar}
                      </div>
                      <div>
                        <div style={{ fontWeight: 600 }}>{user.nama}</div>
                        <div className="font-mono" style={{ fontSize: '11px', color: 'var(--outline)' }}>{user.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="font-mono" style={{ fontSize: '12px' }}>{user.nip}</td>
                  <td>
                    <span className="badge badge-indicative">{user.role}</span>
                  </td>
                  <td style={{ fontSize: '12px', color: 'var(--on-surface-variant)' }}>
                    {user.roleKey === 'surveyor' && "Entri Data, Upload Foto GPS"}
                    {user.roleKey === 'verifier' && "Validasi Berkas, Pengesahan"}
                    {user.roleKey === 'analyst' && "Pemodelan Potensi, Ekspor"}
                    {user.roleKey === 'leader' && "Monitoring, Cetak Laporan Resmi"}
                    {user.roleKey === 'admin' && "Audit Log, Konfigurasi Wilayah"}
                  </td>
                  <td>
                    <span className="badge badge-verified">Aktif</span>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => alert(`Hak akses akun ${user.nama} telah sesuai dengan SK Penugasan Desa Jatimulyo.`)}
                    >
                      Audit Izin
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
