import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { MapPin, Navigation, Compass, Bed, Bath, Maximize2, ArrowRight, Sparkles, Layers, CheckCircle2, Flame, ExternalLink } from 'lucide-react';
import { ALL_PROPERTIES, PropertyItem } from '../data/realtorData';

interface InteractiveMapSectionProps {
  focusedProperty?: PropertyItem | null;
  onSelectProperty?: (property: PropertyItem) => void;
  onOpenContactWithProperty?: (address: string) => void;
}

export const InteractiveMapSection: React.FC<InteractiveMapSectionProps> = ({
  focusedProperty,
  onSelectProperty,
  onOpenContactWithProperty,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const [selectedMapProp, setSelectedMapProp] = useState<PropertyItem>(ALL_PROPERTIES[0]); // Default to 24263 Los Codona
  const [mapFilter, setMapFilter] = useState<'ALL' | 'ACTIVE' | 'SOLD'>('ALL');

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Centered around Torrance & South Bay
    const map = L.map(mapContainerRef.current, {
      center: [33.82, -118.32],
      zoom: 11,
      zoomControl: true,
      scrollWheelZoom: false,
    });

    // High clarity Voyager tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CARTO, OpenStreetMap',
      maxZoom: 19,
    }).addTo(map);

    // Custom Glass Pins with Status Distinction
    ALL_PROPERTIES.forEach((prop) => {
      const isActive = prop.status === 'ACTIVE';

      const customIcon = L.divIcon({
        className: 'custom-map-marker',
        html: `
          <div style="
            background: ${isActive ? 'linear-gradient(135deg, #059669 0%, #047857 100%)' : 'linear-gradient(135deg, #0F1A2C 0%, #15253F 100%)'};
            color: #FFFFFF;
            font-weight: 800;
            font-family: 'Inter', sans-serif;
            font-size: 11px;
            padding: 6px 12px;
            border-radius: 9999px;
            border: 2px solid ${isActive ? '#6EE7B7' : '#DFC080'};
            box-shadow: 0 10px 22px -4px ${isActive ? 'rgba(5, 150, 105, 0.45)' : 'rgba(15, 26, 44, 0.35)'};
            display: inline-flex;
            align-items: center;
            gap: 6px;
            white-space: nowrap;
            cursor: pointer;
            transform: translate(-50%, -50%);
          ">
            <span style="display:inline-block; width:7px; height:7px; border-radius:9999px; background:${isActive ? '#FFFFFF' : '#DFC080'};"></span>
            <span>${prop.priceFormatted}</span>
            <span style="font-size:9px; opacity:0.85; text-transform:uppercase;">${isActive ? 'Active' : 'Sold'}</span>
          </div>
        `,
        iconSize: [110, 32],
        iconAnchor: [55, 16],
      });

      const marker = L.marker(prop.coordinates, { icon: customIcon }).addTo(map);

      // Popup html
      const popupHtml = `
        <div style="width: 260px; font-family: 'Inter', sans-serif; border-radius: 14px; overflow: hidden;">
          <img src="${prop.image}" alt="${prop.address}" style="width:100%; height:120px; object-fit:cover;" />
          <div style="padding: 12px 14px; background: #ffffff;">
            <div style="font-size: 10px; font-weight: 800; color: ${isActive ? '#059669' : '#8C6D2D'}; text-transform: uppercase; letter-spacing: 0.1em;">
              ${isActive ? '● ACTIVE FOR SALE' : '✓ VERIFIED SOLD'} · ${prop.role}
            </div>
            <div style="font-size: 18px; font-weight: 800; color: #080E18; margin-top: 2px;">${prop.priceFormatted}</div>
            <div style="font-size: 12px; color: #374151; font-weight: 600;">${prop.address}, ${prop.city}</div>
            <div style="font-size: 11px; color: #6B7280; margin-top: 4px;">${prop.beds} Beds · ${prop.baths} Baths · ${prop.sqft} Sq Ft</div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, { className: 'custom-map-popup' });

      marker.on('click', () => {
        setSelectedMapProp(prop);
        if (onSelectProperty) onSelectProperty(prop);
      });

      markersRef.current[prop.id] = marker;
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update marker visibility when mapFilter changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;
    ALL_PROPERTIES.forEach((prop) => {
      const marker = markersRef.current[prop.id];
      if (!marker) return;

      const shouldShow =
        mapFilter === 'ALL' ||
        (mapFilter === 'ACTIVE' && prop.status === 'ACTIVE') ||
        (mapFilter === 'SOLD' && prop.status === 'SOLD');

      if (shouldShow) {
        if (!mapInstanceRef.current!.hasLayer(marker)) {
          marker.addTo(mapInstanceRef.current!);
        }
      } else {
        if (mapInstanceRef.current!.hasLayer(marker)) {
          marker.remove();
        }
      }
    });
  }, [mapFilter]);

  // Center on property when selected from parent
  useEffect(() => {
    if (!focusedProperty || !mapInstanceRef.current) return;
    const { coordinates, id } = focusedProperty;
    mapInstanceRef.current.flyTo(coordinates, 14, { duration: 1.5 });
    setSelectedMapProp(focusedProperty);

    const marker = markersRef.current[id];
    if (marker) {
      marker.openPopup();
    }
  }, [focusedProperty]);

  const resetView = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([33.82, -118.32], 11, { duration: 1.2 });
    }
  };

  const focusOnTorranceCluster = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([33.81, -118.34], 13.5, { duration: 1.2 });
    }
  };

  const isActive = selectedMapProp.status === 'ACTIVE';

  return (
    <section id="map-browser" className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-extrabold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive Location Explorer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans']">
              Explore Properties by Location
            </h2>
            <p className="text-base sm:text-lg text-gray-500 mt-2 max-w-2xl font-normal">
              Click on pins across Torrance, Gardena, and Greater Los Angeles to inspect neighborhood details, pricing, and active tour schedules.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Filter Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-white border border-gray-200 shadow-xs text-xs font-bold">
              <button
                onClick={() => setMapFilter('ALL')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  mapFilter === 'ALL' ? 'bg-[#0F1A2C] text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All Comps ({ALL_PROPERTIES.length})
              </button>
              <button
                onClick={() => setMapFilter('ACTIVE')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  mapFilter === 'ACTIVE' ? 'bg-emerald-600 text-white' : 'text-emerald-700 hover:text-emerald-900'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Active (3)
              </button>
              <button
                onClick={() => setMapFilter('SOLD')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  mapFilter === 'SOLD' ? 'bg-[#0F1A2C] text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Sold (6)
              </button>
            </div>

            <button
              onClick={focusOnTorranceCluster}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-xs font-bold text-[#0F1A2C] border border-gray-200 hover:border-[#C5A059] shadow-xs transition-all cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Zoom to Torrance</span>
            </button>

            <button
              onClick={resetView}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white text-xs font-bold text-gray-600 border border-gray-200 hover:text-gray-900 shadow-xs transition-all cursor-pointer"
              title="Reset view"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Map Layout: Left Map, Right Property Preview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Leaflet Map Container */}
          <div className="lg:col-span-8 rounded-[28px] overflow-hidden glass-luxury p-3 border border-white shadow-xl relative">
            <div
              ref={mapContainerRef}
              className="w-full h-[480px] sm:h-[560px] rounded-2xl z-10"
              style={{ minHeight: '480px' }}
            />

            {/* Floating Map Legend */}
            <div className="absolute bottom-6 left-6 z-20 glass-luxury px-4 py-3 rounded-2xl border border-white shadow-lg text-xs font-semibold text-gray-800 space-y-1.5 hidden sm:block">
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-emerald-300" />
                <span>Active Torrance Listings ($1.7M, $699K, $1.3M)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#0F1A2C] border-2 border-[#DFC080]" />
                <span>Verified Historical Sales ($840K, $805K, $885K, $624K)</span>
              </div>
            </div>
          </div>

          {/* Right Selected Property Card */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Active Property Card */}
            <div className="rounded-[28px] glass-luxury p-6 border border-white shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8C6D2D]">
                  Selected Property
                </span>
                <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold border ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-gray-100 text-gray-700 border-gray-200'
                }`}>
                  {isActive ? '● ACTIVE FOR SALE' : '✓ VERIFIED SOLD'}
                </span>
              </div>

              {/* Property Image Viewport */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-900 shadow-inner">
                <img
                  src={selectedMapProp.image}
                  alt={selectedMapProp.address}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[10px] uppercase font-bold text-[#DFC080]">
                    {selectedMapProp.role}
                  </div>
                  <div className="text-2xl font-extrabold font-['Manrope']">
                    {selectedMapProp.priceFormatted}
                  </div>
                </div>
              </div>

              {/* Address & Meta */}
              <div>
                <h3 className="text-lg font-extrabold text-[#080E18] font-['Plus_Jakarta_Sans']">
                  {selectedMapProp.address}
                </h3>
                <p className="text-xs text-gray-500 font-semibold flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  {selectedMapProp.city}, {selectedMapProp.state} {selectedMapProp.zip}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-200/80 text-xs font-semibold text-gray-700 text-center">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-bold">Beds</span>
                  <span className="text-sm font-extrabold text-gray-900">{selectedMapProp.beds}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-bold">Baths</span>
                  <span className="text-sm font-extrabold text-gray-900">{selectedMapProp.baths}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase font-bold">Sq Ft</span>
                  <span className="text-sm font-extrabold text-gray-900">{selectedMapProp.sqft.toLocaleString()}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5">
                {selectedMapProp.highlights.slice(0, 3).map((item, idx) => (
                  <span
                    key={idx}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-amber-50 text-amber-900 border-amber-200/70'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Description Snippet */}
              <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                {selectedMapProp.description}
              </p>

              {/* CTA Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenContactWithProperty) {
                      onOpenContactWithProperty(selectedMapProp.address);
                    }
                  }}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-[#0F1A2C] hover:bg-[#15253F] text-white border border-[#C5A059]/40'
                  }`}
                >
                  <span>{isActive ? 'Schedule Private Tour' : 'Inquire on Comps & Value'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Torrance Summary Pill */}
            <div className="p-4 rounded-2xl bg-white border border-gray-200 text-xs text-gray-600 space-y-1 shadow-xs">
              <div className="font-bold text-[#080E18] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Torrance & South Bay Representation</span>
              </div>
              <p className="text-[11px] text-gray-500">
                Alex's office is located at 23670 Hawthorne Blvd, Suite 100, Torrance, CA 90505.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
