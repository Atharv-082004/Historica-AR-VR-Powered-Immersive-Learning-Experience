import { useMemo, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import type { Marker as LeafletMarker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { monuments, Monument } from '../data/monuments';
import { useLocation } from 'wouter';
import { useAudio } from '../lib/stores/useAudio';

const ALL = "All";

const LeafletMap = () => {
  const [, setLocation] = useLocation();
  const audio = useAudio();
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState<string>(ALL);
  const [eraFilter, setEraFilter] = useState<string>(ALL);
  const [unescoOnly, setUnescoOnly] = useState(false);

  const states = useMemo(
    () => [ALL, ...Array.from(new Set(monuments.map(m => m.state))).sort()],
    []
  );
  const eras = useMemo(
    () => [ALL, ...Array.from(new Set(monuments.map(m => m.era).filter(Boolean) as string[])).sort()],
    []
  );

  const filtered: Monument[] = useMemo(() => {
    const q = search.trim().toLowerCase();
    return monuments.filter(m => {
      if (unescoOnly && !m.UNESCO) return false;
      if (stateFilter !== ALL && m.state !== stateFilter) return false;
      if (eraFilter !== ALL && m.era !== eraFilter) return false;
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.city.toLowerCase().includes(q) ||
        m.state.toLowerCase().includes(q) ||
        m.dynasty.toLowerCase().includes(q)
      );
    });
  }, [search, stateFilter, eraFilter, unescoOnly]);

  const createCustomIcon = (isUNESCO: boolean = false, hovered: boolean = false) => {
    const size: [number, number] = hovered ? [33, 54] : [25, 41];
    const anchor: [number, number] = hovered ? [16, 54] : [12, 41];
    return new Icon({
      iconUrl: isUNESCO
        ? 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png'
        : 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: size,
      iconAnchor: anchor,
      popupAnchor: [1, -34],
      shadowSize: [size[1], size[1]],
      className: hovered ? 'historica-marker-hover' : '',
    });
  };

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const markerRefs = useRef<Record<string, LeafletMarker | null>>({});

  const handleMarkerClick = (monumentId: string) => {
    audio.playHit();
    setLocation(`/monument/${monumentId}`);
  };

  return (
    <div className="h-full w-full relative z-10">
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
        attributionControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filtered.map(monument => (
          <Marker
            key={monument.id}
            position={[monument.coordinates[1], monument.coordinates[0]]}
            icon={createCustomIcon(monument.UNESCO || false, hoveredId === monument.id)}
            ref={(ref) => { markerRefs.current[monument.id] = ref; }}
            eventHandlers={{
              click: () => handleMarkerClick(monument.id),
              mouseover: (e) => {
                setHoveredId(monument.id);
                e.target.openPopup();
              },
              mouseout: (e) => {
                setHoveredId(prev => (prev === monument.id ? null : prev));
                e.target.closePopup();
              },
            }}
          >
            <Popup closeButton={false} autoPan={false}>
              <div className="text-center">
                <h3 className="font-bold text-orange-800">{monument.name}</h3>
                <p className="text-sm text-gray-600">{monument.city}, {monument.state}</p>
                <p className="text-xs mt-1 text-gray-500">Built: {monument.yearBuilt}</p>
                {monument.UNESCO && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-amber-100 text-amber-800 text-xs rounded-full">
                    UNESCO Heritage
                  </span>
                )}
                <p className="text-[10px] mt-1 text-orange-600 italic">Click marker to explore</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Search & Filter overlay */}
      <div className="absolute top-4 left-4 z-[1000] bg-white/95 backdrop-blur-md p-3 rounded-lg shadow-lg border border-orange-200 w-[18rem] max-w-[calc(100vw-2rem)]">
        <h3 className="font-semibold text-orange-800 text-sm mb-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          Search & Filter
        </h3>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name, city, dynasty…"
          className="w-full px-2 py-1.5 text-sm border border-amber-200 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
        />
        <div className="grid grid-cols-2 gap-2 mt-2">
          <select
            value={stateFilter}
            onChange={e => setStateFilter(e.target.value)}
            className="text-xs px-2 py-1.5 border border-amber-200 rounded bg-white"
          >
            {states.map(s => <option key={s} value={s}>{s === ALL ? 'All states' : s}</option>)}
          </select>
          <select
            value={eraFilter}
            onChange={e => setEraFilter(e.target.value)}
            className="text-xs px-2 py-1.5 border border-amber-200 rounded bg-white capitalize"
          >
            {eras.map(e => <option key={e} value={e}>{e === ALL ? 'All eras' : e}</option>)}
          </select>
        </div>
        <label className="flex items-center mt-2 text-xs text-orange-800 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={unescoOnly}
            onChange={e => setUnescoOnly(e.target.checked)}
            className="mr-1.5 accent-amber-500"
          />
          UNESCO heritage only
        </label>
        <p className="text-xs text-amber-700 mt-2">
          {filtered.length} of {monuments.length} monument{monuments.length === 1 ? '' : 's'}
        </p>
      </div>

      {/* Information overlay */}
      <div className="absolute bottom-4 right-4 z-[1000] bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-orange-200 max-w-xs">
        <h3 className="font-medium text-orange-800 text-sm mb-1">Interactive Map</h3>
        <p className="text-xs text-orange-700/80">
          Click on markers to explore India's historical monuments. Gold markers represent UNESCO World Heritage sites.
        </p>
      </div>
    </div>
  );
};

export default LeafletMap;
