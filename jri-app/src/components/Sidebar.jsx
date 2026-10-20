import React from 'react';

export default function Sidebar({ activeTab, setActiveTab, counts }) {
  const navItems = [
    { id: 'dashboard', label: 'Ringkasan Dashboard', icon: 'dashboard', badge: null },
    { id: 'peta', label: 'Peta Ekonomi', icon: 'map', badge: null },
    { id: 'data-objek', label: 'Data Objek Ekonomi', icon: 'storefront', badge: counts.total },
    { id: 'tambah-objek', label: 'Tambah Objek Baru', icon: 'add_circle', badge: null },
    { id: 'verifikasi', label: 'Verifikasi Data', icon: 'fact_check', badge: counts.pending, badgeColor: 'orange' },
    { id: 'analisis', label: 'Analisis Potensi', icon: 'trending_up', badge: 'Indikatif' },
    { id: 'tindak-lanjut', label: 'Tindak Lanjut', icon: 'assignment_turned_in', badge: counts.tasks },
    { id: 'laporan', label: 'Laporan & Ekspor', icon: 'description', badge: null },
    { id: 'audit-kualitas', label: 'Audit & Kualitas Data', icon: 'rule', badge: counts.issues, badgeColor: 'red' },
    { divider: true },
    { id: 'manajemen-user', label: 'Manajemen Pengguna', icon: 'manage_accounts', badge: null },
    { id: 'pengaturan', label: 'Pengaturan Sistem', icon: 'settings', badge: null },
  ];

  return (
    <aside style={{
      width: 'var(--sidebar-width)',
      backgroundColor: '#FFFFFF',
      borderRight: '1px solid var(--outline-subtle)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 100,
      boxShadow: 'var(--shadow-xs)'
    }}>
      {/* Brand Header */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '1px solid var(--outline-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 800,
          fontSize: '18px',
          boxShadow: '0 2px 6px rgba(0, 81, 56, 0.3)'
        }}>
          JRI
        </div>
        <div>
          <div style={{
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--on-surface)',
            letterSpacing: '-0.01em',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            JRI Desa
            <span style={{
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '4px',
              background: 'var(--primary-subtle)',
              color: 'var(--primary)',
              fontWeight: 700
            }}>PILOT</span>
          </div>
          <div style={{
            fontSize: '11.5px',
            color: 'var(--on-surface-variant)',
            marginTop: '1px'
          }}>
            Desa Jatimulyo, Lampung Sel.
          </div>
        </div>
      </div>

      {/* Nav List */}
      <nav style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
        {navItems.map((item, idx) => {
          if (item.divider) {
            return (
              <div 
                key={`div-${idx}`} 
                style={{
                  height: '1px',
                  background: 'var(--outline-subtle)',
                  margin: '12px 8px 8px 8px'
                }} 
              />
            );
          }

          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isActive ? 'var(--primary-container)' : 'transparent',
                color: isActive ? '#FFFFFF' : 'var(--on-surface-variant)',
                fontWeight: isActive ? 600 : 500,
                fontSize: '13.5px',
                transition: 'all 0.15s ease',
                textAlign: 'left',
                border: 'none',
                width: '100%'
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = 'var(--surface-container-low)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <div style={{ display: 'flex', alignItem: 'center', gap: '12px' }}>
                <span 
                  className={`material-symbols-outlined ${isActive ? 'fill' : ''}`}
                  style={{
                    fontSize: '20px',
                    color: isActive ? '#FFFFFF' : 'var(--outline)'
                  }}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>

              {item.badge !== null && item.badge !== undefined && (
                <span style={{
                  fontSize: '10.5px',
                  padding: '2px 7px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  backgroundColor: isActive 
                    ? 'rgba(255,255,255,0.25)' 
                    : item.badgeColor === 'orange' ? '#FFE8D6'
                    : item.badgeColor === 'red' ? '#FEECEB'
                    : 'var(--surface-container-high)',
                  color: isActive 
                    ? '#FFFFFF' 
                    : item.badgeColor === 'orange' ? '#B06000'
                    : item.badgeColor === 'red' ? '#BA1A1A'
                    : 'var(--on-surface)'
                }}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Sidebar Footer Context */}
      <div style={{
        padding: '16px 20px',
        borderTop: '1px solid var(--outline-subtle)',
        backgroundColor: 'var(--surface-container-low)',
        fontSize: '12px',
        color: 'var(--on-surface-variant)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontWeight: 600, color: 'var(--on-surface)' }}>Tahun Anggaran</span>
          <span style={{ fontWeight: 700, color: 'var(--primary)' }}>2026</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--outline)' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1E8E3E', display: 'inline-block' }}></span>
          <span>Sistem Pilot Aktif v1.0</span>
        </div>
      </div>
    </aside>
  );
}
