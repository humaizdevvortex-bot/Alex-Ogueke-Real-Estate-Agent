import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Maximize2, Tag, Check, Calendar, TrendingUp, Phone, Mail, ExternalLink, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { PropertyItem, AGENT_INFO } from '../data/realtorData';

interface PropertyDetailModalProps {
  property: PropertyItem | null;
  onClose: () => void;
  onOpenContactWithProperty: (address: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onOpenContactWithProperty,
}) => {
  if (!property) return null;

  const isActive = property.status === 'ACTIVE';
  const gallery = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev + 1) % gallery.length);
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300">
      <div
        className="relative bg-white rounded-[32px] max-w-3xl w-full overflow-hidden shadow-2xl border border-white/80 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md shadow-lg transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header & Gallery */}
        <div className="relative aspect-[16/9] w-full bg-gray-900 overflow-hidden group">
          <img
            src={gallery[activePhotoIdx]}
            alt={property.address}
            className="w-full h-full object-cover filter contrast-[1.03] transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080E18]/90 via-[#080E18]/25 to-black/30" />

          {/* Gallery Arrows if multiple photos */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md shadow-md transition-all z-20 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md shadow-md transition-all z-20 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
              {/* Photo counter */}
              <div className="absolute top-4 right-16 z-20 px-2.5 py-1 rounded-full bg-black/60 text-white text-[11px] font-bold backdrop-blur-md">
                {activePhotoIdx + 1} / {gallery.length}
              </div>
            </>
          )}

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
            {isActive ? (
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-emerald-600 text-white backdrop-blur-md border border-emerald-400 flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                Active MLS Listing
              </span>
            ) : (
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#0F1A2C]/90 text-white backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DFC080]" />
                Verified Sale
              </span>
            )}
            <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0F1A2C]/90 text-[#DFC080] backdrop-blur-md border border-[#C5A059]/40 shadow-sm">
              {property.role}
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-gray-800 shadow-sm">
              {property.propertyType}
            </span>
          </div>

          {/* Bottom Title & Price */}
          <div className="absolute bottom-5 left-5 right-5 text-white z-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase font-extrabold text-[#DFC080] tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {isActive ? 'Available for Private Showing' : 'Verified MLS Historical Transaction'}
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] text-white">
                  {property.address}
                </h3>
                <p className="text-sm text-gray-200 flex items-center gap-1.5 mt-1 font-medium">
                  <MapPin className="w-4 h-4 text-[#DFC080]" />
                  {property.city}, {property.state} {property.zip}
                </p>
              </div>

              <div className="text-left sm:text-right bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/25 shadow-md">
                <span className="block text-[10px] uppercase font-extrabold tracking-widest text-[#DFC080]">
                  {isActive ? 'Listing Price' : 'Verified Sold Price'}
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope']">
                  {property.priceFormatted}
                </span>
                <span className="block text-[10px] text-gray-300 font-medium">
                  {property.fullPriceFormatted}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails if multiple */}
        {gallery.length > 1 && (
          <div className="flex items-center gap-2 px-6 pt-3 pb-1 overflow-x-auto bg-gray-50 border-b border-gray-100">
            {gallery.map((thumb, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhotoIdx(idx)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  activePhotoIdx === idx ? 'border-[#C5A059] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={thumb} alt={`Photo ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-200/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#8C6D2D] border border-[#C5A059]/30">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Bedrooms</span>
                <span className="text-sm font-extrabold text-gray-900">{property.beds} Beds</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#8C6D2D] border border-[#C5A059]/30">
                <Bath className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Bathrooms</span>
                <span className="text-sm font-extrabold text-gray-900">{property.baths} Baths</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#8C6D2D] border border-[#C5A059]/30">
                <Maximize2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Living Area</span>
                <span className="text-sm font-extrabold text-gray-900">{property.sqft.toLocaleString()} Sq Ft</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-50 text-[#8C6D2D] border border-[#C5A059]/30">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block">Price / SqFt</span>
                <span className="text-sm font-extrabold text-gray-900">${property.pricePerSqFt}/SF</span>
              </div>
            </div>
          </div>

          {/* Highlights & MLS Badges */}
          <div>
            <h4 className="text-[11px] uppercase font-extrabold tracking-wider text-gray-500 mb-2.5">
              Property Features & MLS Highlights
            </h4>
            <div className="flex flex-wrap gap-2">
              {property.highlights.map((highlight, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-amber-50/80 text-[#8C6D2D] border border-[#C5A059]/30"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  {highlight}
                </span>
              ))}
              {property.daysOnMarket && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-gray-100 text-gray-800">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  {property.daysOnMarket} Days On Market
                </span>
              )}
              {property.currentEstValue && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  Est. Value: {property.currentEstValue}
                </span>
              )}
            </div>
          </div>

          {/* Property Overview */}
          <div>
            <h4 className="text-[11px] uppercase font-extrabold tracking-wider text-gray-500 mb-2">
              Overview & Market Representation Context
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              {property.description}
            </p>
          </div>

          {/* Agent Representation Box */}
          <div className="p-5 rounded-2xl glass-luxury border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={AGENT_INFO.portraitImage}
                alt={AGENT_INFO.name}
                className="w-13 h-13 rounded-xl object-cover object-top border-2 border-white shadow-sm"
              />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-extrabold text-[#080E18]">{AGENT_INFO.name}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-xs text-gray-600 block font-medium">
                  {property.role} · Keller Williams South Bay
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <a
                href={`tel:${AGENT_INFO.phoneRaw}`}
                className="p-3 rounded-xl bg-white text-[#0F1A2C] hover:bg-gray-50 border border-gray-200 transition-colors shadow-xs"
                title="Call Alex"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
              </a>
              <button
                onClick={() => {
                  onClose();
                  onOpenContactWithProperty(property.address);
                }}
                className={`px-5 py-3 text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-gradient-to-r from-[#0F1A2C] to-[#15253F] hover:from-[#15253F] hover:to-[#1E3557] border border-[#C5A059]/40'
                }`}
              >
                {isActive ? 'Schedule Private Tour' : 'Inquire on Similar Comps'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
