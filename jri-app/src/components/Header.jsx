import React from 'react';
import { USERS } from '../data/mockData';

export default function Header({ currentUser, setCurrentUser, onSearch, searchQuery }) {
  return (
    <header style={{
      height: 'var(--header-height)',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--outline-subtle)',
      position: 'fixed',
      top: 0,
      right: 0,
      left: 'var(--sidebar-width)',
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 28px',
      boxShadow: 'var(--shadow-xs)'
    }}>
      {/* Search Input */}
      <div style={{ display: 'flex', alignItems: 'center', width: '380px', position: 'relative' }}>
        <span 
          className="material-symbols-outlined" 
          style={{
            position: 'absolute',
            left: '12px',
            color: 'var(--outline)',
            fontSize: '20px'
          }}
        >
          search
        </span>
        <input
          type="text"
          placeholder="Cari NOP, ID Objek, Nama Usaha, Dusun..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '8px 12px 8px 38px',
            fontSize: '13px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--outline-variant)',
            backgroundColor: 'var(--surface-container-low)',
            outline: 'none',
            transition: 'all 0.15s ease'
          }}
          onFocus={(e) => {
            e.target.style.backgroundColor = '#FFFFFF';
            e.target.style.borderColor = 'var(--primary)';
            e.target.style.boxShadow = '0 0 0 3px rgba(0, 81, 56, 0.1)';
          }}
          onBlur={(e) => {
            e.target.style.backgroundColor = 'var(--surface-container-low)';
            e.target.style.borderColor = 'var(--outline-variant)';
            e.target.style.boxShadow = 'none';
          }}
        />
      </div>

      {/* Right Controls: Role Switcher & User Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Role Switcher for Testing/Demonstration */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: 'var(--outline)', fontWeight: 500 }}>
            Simulasi Peran:
          </span>
          <select
            value={currentUser.id}
            onChange={(e) => {
              const selected = USERS.find(u => u.id === e.target.value);
              if (selected) setCurrentUser(selected);
            }}
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--outline-variant)',
              backgroundColor: 'var(--surface-container-low)',
              fontWeight: 600,
              color: 'var(--primary)',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {USERS.map(u => (
              <option key={u.id} value={u.id}>
                {u.role} ({u.nama.split(' ')[0]})
              </option>
            ))}
          </select>
        </div>

        {/* Quick Notif Pill */}
        <button 
          title="Notifikasi Sistem"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--surface-container-low)',
            color: 'var(--on-surface-variant)',
            position: 'relative',
            border: '1px solid var(--outline-subtle)'
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
          <span style={{
            position: 'absolute',
            top: '6px',
            right: '6px',
            width: '8px',
            height: '8px',
            backgroundColor: '#BA1A1A',
            borderRadius: '50%'
          }}></span>
        </button>

        {/* User Card */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          paddingLeft: '16px',
          borderLeft: '1px solid var(--outline-subtle)'
        }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary-subtle)',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '13px',
            border: '1px solid rgba(0, 81, 56, 0.2)'
          }}>
            {currentUser.avatar}
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--on-surface)' }}>
              {currentUser.nama}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--outline)' }}>
              {currentUser.role}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
