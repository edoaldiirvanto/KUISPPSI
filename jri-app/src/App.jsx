import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DetailObjekModal from './components/DetailObjekModal';

// Views
import DashboardView from './views/DashboardView';
import PetaEkonomiView from './views/PetaEkonomiView';
import DataObjekView from './views/DataObjekView';
import TambahObjekView from './views/TambahObjekView';
import VerifikasiView from './views/VerifikasiView';
import AnalisisPotensiView from './views/AnalisisPotensiView';
import TindakLanjutView from './views/TindakLanjutView';
import LaporanView from './views/LaporanView';
import AuditKualitasView from './views/AuditKualitasView';
import ManajemenUserView from './views/ManajemenUserView';
import PengaturanView from './views/PengaturanView';

// Initial Data
import {
  INITIAL_OBJEK_EKONOMI,
  INITIAL_TUGAS,
  INITIAL_AUDIT_LOGS,
  AUDIT_QUALITY_ISSUES,
  USERS
} from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentUser, setCurrentUser] = useState(USERS[0]); // Default: Petugas Pendata
  const [searchQuery, setSearchQuery] = useState('');

  // Main State
  const [objekList, setObjekList] = useState(INITIAL_OBJEK_EKONOMI);
  const [tasksList, setTasksList] = useState(INITIAL_TUGAS);
  const [auditLogs, setAuditLogs] = useState(INITIAL_AUDIT_LOGS);
  const [selectedObjekForDetail, setSelectedObjekForDetail] = useState(null);

  // Toast notification
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Handler: Tambah Objek Baru
  const handleSaveObjek = (newObjek) => {
    setObjekList(prev => [newObjek, ...prev]);

    // Tambahkan ke Audit Log
    const newLog = {
      id: `AUD-${Math.floor(8920 + Math.random() * 100)}`,
      waktu: new Date().toLocaleString('id-ID'),
      aktor: currentUser.nama,
      peran: currentUser.role,
      modul: "Pendataan Objek",
      aksi: "TAMBAH_OBJEK",
      objekRef: newObjek.id,
      keterangan: `Mendaftarkan objek baru: ${newObjek.nama} (${newObjek.dusun}) status Menunggu Verifikasi.`,
      ipAddress: "114.125.77.94"
    };
    setAuditLogs(prev => [newLog, ...prev]);

    showToast(`Objek ${newObjek.nama} berhasil diajukan ke antrean verifikasi!`);
    setActiveTab('data-objek');
  };

  // Handler: Arsipkan Objek
  const handleArchiveObjek = (objekId) => {
    const target = objekList.find(o => o.id === objekId);
    setObjekList(prev => prev.filter(o => o.id !== objekId));

    const newLog = {
      id: `AUD-${Math.floor(8920 + Math.random() * 100)}`,
      waktu: new Date().toLocaleString('id-ID'),
      aktor: currentUser.nama,
      peran: currentUser.role,
      modul: "Data Objek",
      aksi: "ARSIP_OBJEK",
      objekRef: objekId,
      keterangan: `Mengarsipkan data objek ekonomi: ${target ? target.nama : objekId}`,
      ipAddress: "114.125.77.94"
    };
    setAuditLogs(prev => [newLog, ...prev]);
    showToast(`Objek ${objekId} berhasil diarsipkan.`);
  };

  // Handler: Verifikasi Objek
  const handleVerifyObjek = (objekId, statusKeputusan, catatan, verifikatorNama) => {
    setObjekList(prev => prev.map(o => {
      if (o.id === objekId) {
        return {
          ...o,
          statusVerifikasi: statusKeputusan,
          catatanVerifikasi: catatan,
          verifikator: verifikatorNama,
          tanggalVerifikasi: new Date().toISOString().slice(0, 10),
          riwayat: [
            ...(o.riwayat || []),
            {
              tgl: new Date().toLocaleString('id-ID'),
              aktor: verifikatorNama,
              aksi: `Status diubah menjadi "${statusKeputusan}" (${catatan})`
            }
          ]
        };
      }
      return o;
    }));

    const newLog = {
      id: `AUD-${Math.floor(8920 + Math.random() * 100)}`,
      waktu: new Date().toLocaleString('id-ID'),
      aktor: verifikatorNama,
      peran: currentUser.role,
      modul: "Verifikasi Data",
      aksi: "MEMPERBARUI_STATUS",
      objekRef: objekId,
      keterangan: `Verifikator menetapkan status ${statusKeputusan}: ${catatan}`,
      ipAddress: "182.1.240.11"
    };
    setAuditLogs(prev => [newLog, ...prev]);

    showToast(`Status objek ${objekId} diperbarui menjadi ${statusKeputusan}!`);
  };

  // Handler: Update Status Tugas
  const handleUpdateTaskStatus = (taskId, newStatus) => {
    setTasksList(prev => prev.map(t => {
      if (t.id === taskId) {
        return { ...t, status: newStatus };
      }
      return t;
    }));
    showToast(`Status tugas ${taskId} diubah menjadi ${newStatus}.`);
  };

  // Handler: Buat Tugas Baru
  const handleCreateTask = (newTask) => {
    setTasksList(prev => [newTask, ...prev]);
    showToast(`Tugas baru ${newTask.id} berhasil diterbitkan!`);
  };

  // Counter badges for sidebar
  const counts = {
    total: objekList.length,
    pending: objekList.filter(o => o.statusVerifikasi === 'Menunggu Verifikasi').length,
    tasks: tasksList.filter(t => t.status !== 'Selesai').length,
    issues: AUDIT_QUALITY_ISSUES.filter(i => i.status !== 'Terselesaikan').length
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--background)' }}>
      {/* Toast Notification */}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '28px',
          zIndex: 2000,
          background: 'var(--primary)',
          color: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '13.5px',
          fontWeight: 600
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        counts={counts}
      />

      {/* Header Bar */}
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />

      {/* Main Content Area */}
      <main style={{
        marginLeft: 'var(--sidebar-width)',
        marginTop: 'var(--header-height)',
        flex: 1,
        padding: '28px 32px',
        maxWidth: '1600px'
      }}>
        {activeTab === 'dashboard' && (
          <DashboardView
            objekList={objekList}
            tasksList={tasksList}
            onNavigateTab={setActiveTab}
            onSelectObjek={(obj) => setSelectedObjekForDetail(obj)}
          />
        )}

        {activeTab === 'peta' && (
          <PetaEkonomiView
            objekList={objekList}
            onSelectObjek={(obj) => setSelectedObjekForDetail(obj)}
          />
        )}

        {activeTab === 'data-objek' && (
          <DataObjekView
            objekList={objekList}
            searchQuery={searchQuery}
            onNavigateTab={setActiveTab}
            onSelectObjek={(obj) => setSelectedObjekForDetail(obj)}
            onArchiveObjek={handleArchiveObjek}
          />
        )}

        {activeTab === 'tambah-objek' && (
          <TambahObjekView
            currentUser={currentUser}
            onSaveObjek={handleSaveObjek}
            onCancel={() => setActiveTab('data-objek')}
          />
        )}

        {activeTab === 'verifikasi' && (
          <VerifikasiView
            objekList={objekList}
            currentUser={currentUser}
            onVerifyObjek={handleVerifyObjek}
            onSelectObjek={(obj) => setSelectedObjekForDetail(obj)}
          />
        )}

        {activeTab === 'analisis' && (
          <AnalisisPotensiView
            objekList={objekList}
          />
        )}

        {activeTab === 'tindak-lanjut' && (
          <TindakLanjutView
            tasksList={tasksList}
            objekList={objekList}
            onUpdateTaskStatus={handleUpdateTaskStatus}
            onCreateTask={handleCreateTask}
          />
        )}

        {activeTab === 'laporan' && (
          <LaporanView
            objekList={objekList}
            tasksList={tasksList}
          />
        )}

        {activeTab === 'audit-kualitas' && (
          <AuditKualitasView
            auditLogs={auditLogs}
            objekList={objekList}
          />
        )}

        {activeTab === 'manajemen-user' && (
          <ManajemenUserView
            currentUser={currentUser}
          />
        )}

        {activeTab === 'pengaturan' && (
          <PengaturanView />
        )}
      </main>

      {/* Detail Objek Modal */}
      {selectedObjekForDetail && (
        <DetailObjekModal
          objek={selectedObjekForDetail}
          currentUser={currentUser}
          onClose={() => setSelectedObjekForDetail(null)}
          onVerify={handleVerifyObjek}
        />
      )}
    </div>
  );
}
