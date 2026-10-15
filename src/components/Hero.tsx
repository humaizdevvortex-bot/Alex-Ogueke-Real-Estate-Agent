import React, { useState } from 'react';
import { Award, ArrowRight, Phone, Search, MapPin, Building2, CheckCircle2, Star, Sparkles, Shield, ChevronRight, Flame } from 'lucide-react';
import { AGENT_INFO, ALL_PROPERTIES } from '../data/realtorData';

interface HeroProps {
  onSelectCityFilter?: (city: string) => void;
  onSelectTypeFilter?: (type: string) => void;
  onSelectStatusFilter?: (status: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCityFilter, onSelectTypeFilter }) => {
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSelectCityFilter) onSelectCityFilter(selectedCity);
    if (onSelectTypeFilter) onSelectTypeFilter(selectedType);

    const target = document.getElementById('properties');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeCount = ALL_PROPERTIES.filter(p => p.status === 'ACTIVE').length;

  return (
    <section className="relative pt-32 pb-20 lg:pt-38 lg:pb-30 overflow-hidden bg-[#FAF9F6]">
      {/* Dynamic Ambient Glass Glow Orbs */}
      <div className="absolute top-12 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#DFC080]/20 to-blue-200/20 rounded-full blur-[100px] pointer-events-none -z-0" />
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-gradient-to-br from-blue-100/40 via-amber-100/25 to-transparent rounded-full blur-[90px] pointer-events-none -z-0" />

      {/* Subtle Architectural Hairline Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0F1A2C 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Personal Introduction & Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* High-End Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-luxury border border-[#C5A059]/30 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] shadow-[0_0_8px_#C5A059]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0F1A2C]">
                Torrance & South Bay Real Estate Specialist
              </span>
            </div>

            {/* Main Headline with Gold Gradient Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-[#080E18] tracking-tight leading-[1.08] font-['Plus_Jakarta_Sans']">
              Local Knowledge. <br />
              <span className="text-gold-gradient">Active Listings.</span> <br />
              Proven Results.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed font-normal">
              Representing buyers, sellers, and investors across Torrance, Gardena, Carson, and Greater Los Angeles with uncompromised personal service and Keller Williams South Bay strength.
            </p>

            {/* Credibility Ticker Strip */}
            <div className="flex flex-wrap items-center gap-3 py-1 text-xs font-semibold text-gray-700">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 shadow-xs text-emerald-900">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span><strong>{activeCount}</strong> Active Torrance Listings</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 border border-gray-200/90 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span><strong>16</strong> Closed Sales</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/90 border border-gray-200/90 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span><strong>$10.2M</strong> Volume</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/60 shadow-xs text-amber-900">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span><strong>5.0</strong> Yelp Verified</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#properties"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0F1A2C] via-[#15253F] to-[#1E3557] hover:shadow-[0_10px_25px_-5px_rgba(15,26,44,0.35)] border border-[#C5A059]/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>View Featured Listings</span>
                <ArrowRight className="w-4 h-4 text-[#DFC080]" />
              </a>

              <a
                href="#map-browser"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-[#0F1A2C] glass-luxury hover:bg-white border border-gray-300/80 shadow-xs transition-all hover:border-[#C5A059]"
              >
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span>Interactive Map</span>
              </a>

              <a
                href={`tel:${AGENT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-[#C5A059] px-3 py-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{AGENT_INFO.phone}</span>
              </a>
            </div>

            {/* High-End Glass Search Filter Dock */}
            <div className="mt-6 p-5 sm:p-6 rounded-2xl glass-luxury border border-white/80 shadow-[0_20px_45px_-10px_rgba(15,26,44,0.08)]">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F1A2C]">
                  <Search className="w-4 h-4 text-[#C5A059]" />
                  <span>Search Properties & Verified Comps</span>
                </div>
                <span className="text-[11px] font-semibold text-[#8C6D2D] bg-[#F5DF9E]/30 px-2.5 py-0.5 rounded-full border border-[#C5A059]/30">
                  {ALL_PROPERTIES.length} verified listings
                </span>
              </div>

              <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-5">
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    Select Community / City
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 bg-white/95 border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059] shadow-xs cursor-pointer"
                    >
                      <option value="All">All Communities ({ALL_PROPERTIES.length})</option>
                      <option value="Torrance">Torrance (Active & Sold Comps)</option>
                      <option value="Gardena">Gardena (South Bay)</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="Lancaster">Lancaster</option>
                      <option value="Barstow">Barstow (Inland)</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                    Property Category
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 bg-white/95 border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059] shadow-xs cursor-pointer"
                    >
                      <option value="All">All Categories</option>
                      <option value="House">Single Family Residence</option>
                      <option value="Condo">Condominium</option>
                      <option value="Multifamily">Multifamily / Income Asset</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3 flex items-end">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-[#0F1A2C] to-[#15253F] hover:from-[#15253F] hover:to-[#1E3557] text-white text-xs font-bold rounded-xl shadow-md border border-[#C5A059]/40 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Comps</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#DFC080]" />
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* Right Column: Mind-Blowing Frosted Glass Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Golden Ambient Backing Aura */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#C5A059]/30 via-[#DFC080]/20 to-[#15253F]/20 rounded-[32px] blur-2xl opacity-75 transform -rotate-1" />

              {/* Main Outer Frosted Glass Frame */}
              <div className="relative rounded-[28px] overflow-hidden glass-luxury p-3 shadow-[0_30px_60px_-15px_rgba(15,26,44,0.18)] border border-white">
                
                {/* Photo Viewport */}
                <div className="relative aspect-[4/4.8] rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={AGENT_INFO.portraitImage}
                    alt="Alex Ogueke - Keller Williams South Bay Real Estate Professional"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01]"
                    loading="eager"
                  />

                  {/* Gradient Fog at Base for Text Contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080E18]/90 via-[#0F1A2C]/50 to-transparent pointer-events-none" />

                  {/* Lower ID Plate */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#DFC080]">
                        Keller Williams Realty
                      </div>
                      <h2 className="text-xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                        Alex Ogueke
                      </h2>
                      <p className="text-xs text-gray-300">
                        Torrance, South Bay & Los Angeles Specialist
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-md border border-white/20 text-white">
                        DRE #{AGENT_INFO.calDRE}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Top Floating Glass Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 glass-luxury px-3.5 py-2 rounded-xl shadow-lg border border-white/90 items-center gap-2 text-xs font-bold text-[#0F1A2C]">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Verified MLS Track Record</span>
              </div>

              {/* Bottom Floating Glass Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-luxury p-4 rounded-2xl shadow-xl border border-white/90 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F1A2C] to-[#15253F] text-[#DFC080] flex items-center justify-center shrink-0 border border-[#C5A059]/40 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-[#080E18] font-['Plus_Jakarta_Sans']">
                    16 Closed Deals · $10.2M
                  </div>
                  <div className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Listings in Torrance</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
