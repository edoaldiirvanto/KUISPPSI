import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { DUSUN_LIST, KATEGORI_LIST } from '../data/mockData';

// Fix leaflet default marker icons in React Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom colored markers for categories
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <div style="
        background-color: ${color};
        width: 30px;
        height: 30px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        box-shadow: 0 3px 6px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 10px;
          height: 10px;
          background: #FFFFFF;
          border-radius: 50%;
        "></div>
      </div>
    `,
    iconSize: [30, 42],
    iconAnchor: [15, 38],
    popupAnchor: [0, -38]
  });
};

export default function PetaEkonomiView({ objekList, onSelectObjek }) {
  const [filterDusun, setFilterDusun] = useState('Semua');
  const [filterKategori, setFilterKategori] = useState('Semua');
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Filtered objects
  const filteredList = objekList.filter(o => {
    if (filterDusun !== 'Semua' && o.dusun !== filterDusun) return false;
    if (filterKategori !== 'Semua' && o.kategori !== filterKategori) return false;
    if (filterStatus !== 'Semua' && o.statusVerifikasi !== filterStatus) return false;
    return true;
  });

  const centerCoords = [-5.3488, 105.3054]; // Pusat Desa Jatimulyo

  return (
    <div>
      {/* Header & Filter Bar */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div>
            <h1 className="headline-xl">Peta Spasial Potensi Ekonomi Desa</h1>
            <p className="body-md">Sebaran geospasial titik objek usaha di wilayah pilot Desa Jatimulyo.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-indicative">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>pin_drop</span>
              {filteredList.length} Titik Terpasang
            </span>
          </div>
        </div>

        {/* Filters Card */}
        <div className="jri-card" style={{ padding: '16px 20px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--outline)' }}>filter_alt</span>
            <span style={{ fontSize: '13px', fontWeight: 600 }}>Filter Peta:</span>
          </div>

          <select
            className="select-control"
            style={{ width: 'auto', minWidth: '160px' }}
            value={filterDusun}
            onChange={(e) => setFilterDusun(e.target.value)}
          >
            <option value="Semua">Semua Dusun</option>
            {DUSUN_LIST.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            className="select-control"
            style={{ width: 'auto', minWidth: '180px' }}
            value={filterKategori}
            onChange={(e) => setFilterKategori(e.target.value)}
          >
            <option value="Semua">Semua Kategori Sektor</option>
            {KATEGORI_LIST.map(k => (
              <option key={k.id} value={k.id}>{k.nama}</option>
            ))}
          </select>

          <select
            className="select-control"
            style={{ width: 'auto', minWidth: '170px' }}
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="Semua">Semua Status Verifikasi</option>
            <option value="Terverifikasi">Terverifikasi</option>
            <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
            <option value="Perlu Perbaikan">Perlu Perbaikan</option>
          </select>

          {(filterDusun !== 'Semua' || filterKategori !== 'Semua' || filterStatus !== 'Semua') && (
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => {
                setFilterDusun('Semua');
                setFilterKategori('Semua');
                setFilterStatus('Semua');
              }}
            >
              Reset Filter
            </button>
          )}
        </div>
      </div>

      {/* Map + Detail Panel Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: selectedMarker ? '1fr 340px' : '1fr', gap: '18px' }}>
        {/* Leaflet Map Card */}
        <div className="jri-card" style={{ padding: '6px', height: '620px', position: 'relative', overflow: 'hidden' }}>
          <MapContainer
            center={centerCoords}
            zoom={14}
            style={{ height: '100%', width: '100%', borderRadius: 'var(--radius-lg)' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredList.map((obj) => {
              const kat = KATEGORI_LIST.find(k => k.id === obj.kategori);
              const color = kat ? kat.color : '#005138';
              return (
                <Marker
                  key={obj.id}
                  position={[obj.lat, obj.lng]}
                  icon={createCustomIcon(color)}
                  eventHandlers={{
                    click: () => setSelectedMarker(obj)
                  }}
                >
                  <Popup>
                    <div style={{ minWidth: '180px' }}>
                      <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--primary)' }}>{obj.nama}</div>
                      <div style={{ fontSize: '11px', color: '#666', marginTop: '2px' }}>{obj.subkategori}</div>
                      <div style={{ fontSize: '11px', marginTop: '4px' }}><strong>Dusun:</strong> {obj.dusun}</div>
                      <div style={{ marginTop: '8px' }}>
                        <button
                          style={{
                            background: 'var(--primary)',
                            color: '#fff',
                            border: 'none',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            cursor: 'pointer',
                            width: '100%'
                          }}
                          onClick={() => onSelectObjek(obj)}
                        >
                          Lihat Detail Objek
                        </button>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>

          {/* Map Floating Legend */}
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            zIndex: 1000,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(4px)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--outline-subtle)'
          }}>
            <div style={{ fontSize: '11.5px', fontWeight: 700, marginBottom: '8px', color: 'var(--on-surface)' }}>
              Legenda Sektor Usaha:
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {KATEGORI_LIST.map(k => (
                <div key={k.id} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: k.color }}></span>
                  <span>{k.nama.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Marker Detail Drawer */}
        {selectedMarker && (
          <div className="jri-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '620px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
              <div>
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700 }}>
                  {selectedMarker.id}
                </span>
                <h3 className="headline-sm" style={{ marginTop: '2px' }}>{selectedMarker.nama}</h3>
              </div>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => setSelectedMarker(null)}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
              </button>
            </div>

            <img
              src={selectedMarker.fotoUrl}
              alt={selectedMarker.nama}
              style={{
                width: '100%',
                height: '140px',
                objectFit: 'cover',
                borderRadius: 'var(--radius-md)',
                marginBottom: '14px'
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, overflowY: 'auto' }}>
              <div>
                <div className="body-sm" style={{ fontWeight: 600 }}>Dusun & Alamat:</div>
                <div style={{ fontSize: '12px', color: 'var(--on-surface)' }}>
                  {selectedMarker.dusun}, {selectedMarker.rtRw}<br />
                  <span style={{ color: 'var(--outline)' }}>{selectedMarker.alamat}</span>
                </div>
              </div>

              <div>
                <div className="body-sm" style={{ fontWeight: 600 }}>Koordinat GPS:</div>
                <div className="font-mono" style={{ fontSize: '11.5px', color: 'var(--primary)' }}>
                  {selectedMarker.lat}, {selectedMarker.lng}
                </div>
              </div>

              <div>
                <div className="body-sm" style={{ fontWeight: 600 }}>Status Verifikasi:</div>
                <span className={`badge ${selectedMarker.statusVerifikasi === 'Terverifikasi' ? 'badge-verified' : selectedMarker.statusVerifikasi === 'Menunggu Verifikasi' ? 'badge-pending' : 'badge-revision'}`}>
                  {selectedMarker.statusVerifikasi}
                </span>
              </div>

              <div>
                <div className="body-sm" style={{ fontWeight: 600 }}>Estimasi Skala:</div>
                <div style={{ fontSize: '12px' }}>{selectedMarker.skalaOmzet}</div>
                <div style={{ fontSize: '11px', color: 'var(--outline)' }}>Tenaga Kerja: {selectedMarker.tenagaKerja} orang</div>
              </div>
            </div>

            <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--outline-subtle)' }}>
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => onSelectObjek(selectedMarker)}
              >
                Buka Lembar Verifikasi Lengkap
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
