import React, { useState } from 'react';
import { Heart, MapPin, Bed, Bath, Maximize2, ArrowUpRight, Share2, Sparkles, TrendingUp, CheckCircle2, Eye, Calendar, Clock, Flame } from 'lucide-react';
import { ALL_PROPERTIES, PropertyItem } from '../data/realtorData';
import { PropertyDetailModal } from './PropertyDetailModal';

interface SoldPropertiesSectionProps {
  onFocusOnMap?: (property: PropertyItem) => void;
  onOpenContactWithProperty?: (address: string) => void;
  activeCityFilter?: string;
  activeTypeFilter?: string;
}

export const SoldPropertiesSection: React.FC<SoldPropertiesSectionProps> = ({
  onFocusOnMap,
  onOpenContactWithProperty,
  activeCityFilter = 'All',
  activeTypeFilter = 'All',
}) => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'ACTIVE' | 'SOLD' | 'TORRANCE' | 'HOUSES' | 'CONDOS_MULTI'>('ALL');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (property: PropertyItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareText = `Check out this listing with Alex Ogueke (Keller Williams): ${property.address}, ${property.city} (${property.priceFormatted})`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopiedId(property.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  // Filter properties
  const filteredProperties = ALL_PROPERTIES.filter((prop) => {
    if (activeCityFilter !== 'All' && !prop.city.toLowerCase().includes(activeCityFilter.toLowerCase())) {
      return false;
    }
    if (activeTypeFilter !== 'All' && prop.propertyType !== activeTypeFilter) {
      return false;
    }
    if (activeTab === 'ACTIVE') return prop.status === 'ACTIVE';
    if (activeTab === 'SOLD') return prop.status === 'SOLD';
    if (activeTab === 'TORRANCE') return ['Torrance', 'Gardena'].includes(prop.city);
    if (activeTab === 'HOUSES') return prop.propertyType === 'House';
    if (activeTab === 'CONDOS_MULTI') return ['Condo', 'Multifamily', 'Townhouse'].includes(prop.propertyType);
    return true;
  });

  const activeCount = ALL_PROPERTIES.filter(p => p.status === 'ACTIVE').length;
  const soldCount = ALL_PROPERTIES.filter(p => p.status === 'SOLD').length;

  return (
    <section id="properties" className="py-24 lg:py-32 bg-white border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-extrabold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real MLS Listings & Verified Comps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans']">
              Featured Listings & Market Sales
            </h2>
            <p className="text-base sm:text-lg text-gray-500 mt-2 max-w-2xl font-normal">
              Active homes available for private tours in Torrance, alongside Alex Ogueke's verified closed transactions across Southern California.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{activeCount} Active Torrance Listings</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-[#8C6D2D] shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{soldCount} Verified MLS Sales</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 mb-10 pb-2 overflow-x-auto scrollbar-none">
          {[
            { id: 'ALL', label: 'All Portfolio', count: ALL_PROPERTIES.length },
            { id: 'ACTIVE', label: '⭐ Active For Sale', count: activeCount, highlight: true },
            { id: 'SOLD', label: 'Verified Closed Sales', count: soldCount },
            { id: 'TORRANCE', label: 'Torrance & South Bay', count: ALL_PROPERTIES.filter(p => ['Torrance', 'Gardena'].includes(p.city)).length },
            { id: 'HOUSES', label: 'Single Family Homes', count: ALL_PROPERTIES.filter(p => p.propertyType === 'House').length },
            { id: 'CONDOS_MULTI', label: 'Condos & Multifamily', count: ALL_PROPERTIES.filter(p => ['Condo', 'Multifamily'].includes(p.propertyType)).length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full transition-all shrink-0 cursor-pointer flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#0F1A2C] to-[#15253F] text-white shadow-md border border-[#C5A059]/40'
                  : tab.highlight
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100'
                  : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  activeTab === tab.id 
                    ? 'bg-[#DFC080] text-[#0F1A2C]' 
                    : tab.highlight 
                    ? 'bg-emerald-200 text-emerald-900' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => {
            const isFav = !!favorites[property.id];
            const isCopied = copiedId === property.id;
            const isActive = property.status === 'ACTIVE';

            return (
              <div
                key={property.id}
                onClick={() => setSelectedProperty(property)}
                className={`group relative rounded-[28px] overflow-hidden glass-card-luxury flex flex-col justify-between cursor-pointer border ${
                  isActive ? 'border-emerald-200/90 shadow-[0_15px_35px_-10px_rgba(16,185,129,0.12)]' : 'border-gray-200/80'
                }`}
              >
                {/* Image Viewport */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-900">
                  <img
                    src={property.image}
                    alt={`${property.address}, ${property.city}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080E18]/85 via-transparent to-black/25 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 z-10">
                    {isActive ? (
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-emerald-600/95 text-white backdrop-blur-md shadow-md border border-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        <span>Active Listing</span>
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#0F1A2C]/90 text-white backdrop-blur-md shadow-sm border border-white/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#DFC080]" />
                        <span>Verified Sale</span>
                      </span>
                    )}

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#0F1A2C] backdrop-blur-md shadow-xs">
                      {property.propertyType}
                    </span>
                  </div>

                  {/* Action Icons (Favorite & Share) */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 z-10">
                    <button
                      onClick={(e) => handleShare(property, e)}
                      className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all shadow-sm"
                      title="Share property"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => toggleFavorite(property.id, e)}
                      className={`p-2 rounded-full backdrop-blur-md transition-all shadow-sm ${
                        isFav
                          ? 'bg-rose-500 text-white'
                          : 'bg-black/40 hover:bg-black/70 text-white'
                      }`}
                      title="Save to favorites"
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-white' : ''}`} />
                    </button>
                  </div>

                  {/* Price Plate in Clean Millions / K Format */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-white pointer-events-none">
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#DFC080] flex items-center gap-1">
                        {property.role}
                      </div>
                      <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Manrope'] text-white drop-shadow-sm">
                        {property.priceFormatted}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-semibold text-gray-300 block">
                        ${property.pricePerSqFt}/sq ft
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {property.dateOrStatus}
                      </span>
                    </div>
                  </div>

                  {/* Share Notification Toast */}
                  {isCopied && (
                    <div className="absolute inset-0 bg-[#0F1A2C]/90 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold animate-in fade-in z-20">
                      ✓ Copied link to clipboard
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans'] group-hover:text-[#8C6D2D] transition-colors">
                          {property.address}
                        </h3>
                        <p className="text-xs text-gray-500 font-semibold flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                          {property.city}, {property.state} {property.zip}
                        </p>
                      </div>

                      {isActive && (
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Active MLS
                        </span>
                      )}
                    </div>

                    {/* Specs Line */}
                    <div className="grid grid-cols-3 gap-2 py-3 my-3 border-y border-gray-100 text-xs font-semibold text-gray-700">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-gray-400" />
                        <span><strong>{property.beds}</strong> Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-gray-400" />
                        <span><strong>{property.baths}</strong> Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4 text-gray-400" />
                        <span><strong>{property.sqft.toLocaleString()}</strong> Sq Ft</span>
                      </div>
                    </div>

                    {/* Highlights Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {property.highlights.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                            isActive
                              ? 'bg-emerald-50/70 text-emerald-800 border-emerald-200/60'
                              : 'bg-amber-50/70 text-amber-900 border-amber-200/60'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Buttons */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3 text-xs">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onFocusOnMap) onFocusOnMap(property);
                      }}
                      className="font-bold text-gray-600 hover:text-[#080E18] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>View on Map</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isActive && onOpenContactWithProperty) {
                          onOpenContactWithProperty(property.address);
                        } else {
                          setSelectedProperty(property);
                        }
                      }}
                      className={`font-bold px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                        isActive
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                          : 'text-[#8C6D2D] hover:text-[#0F1A2C] bg-amber-50 hover:bg-amber-100'
                      }`}
                    >
                      <span>{isActive ? 'Schedule Tour' : 'Details'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-[28px] glass-luxury border border-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-extrabold text-[#080E18] font-['Plus_Jakarta_Sans']">
              Looking for a Specific Torrance or South Bay Property?
            </h4>
            <p className="text-sm text-gray-600">
              Alex has access to upcoming off-market properties and Keller Williams private exclusives across Los Angeles.
            </p>
          </div>

          <button
            onClick={() => {
              if (onOpenContactWithProperty) onOpenContactWithProperty('Upcoming Torrance Inventory');
            }}
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0F1A2C] to-[#15253F] hover:from-[#15253F] hover:to-[#1E3557] border border-[#C5A059]/40 shadow-md transition-all shrink-0 cursor-pointer"
          >
            Request Off-Market & Active Alerts
          </button>
        </div>

      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onOpenContactWithProperty={(address) => {
            setSelectedProperty(null);
            if (onOpenContactWithProperty) onOpenContactWithProperty(address);
          }}
        />
      )}
    </section>
  );
};
