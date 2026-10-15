import React from 'react';
import { MapPin, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { AREAS_EXPERIENCE, AreaExperience } from '../data/realtorData';

interface AreasServedSectionProps {
  onSelectArea?: (area: AreaExperience) => void;
}

export const AreasServedSection: React.FC<AreasServedSectionProps> = ({ onSelectArea }) => {
  return (
    <section id="areas" className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-extrabold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Regional Market Insight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans']">
              Areas Alex Knows
            </h2>
            <p className="text-base sm:text-lg text-gray-500 mt-2 max-w-2xl font-normal">
              Explore communities across the Los Angeles and South Bay area where Alex has recorded real estate transactions.
            </p>
          </div>

          <div className="text-xs text-gray-500 bg-white/90 border border-gray-200 px-4 py-2.5 rounded-xl self-start md:self-auto shadow-xs font-semibold">
            <span>Verified recorded transaction counts</span>
          </div>
        </div>

        {/* 6-Card Photographic Discovery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {AREAS_EXPERIENCE.map((area) => (
            <div
              key={area.id}
              onClick={() => onSelectArea && onSelectArea(area)}
              className="group relative h-84 sm:h-96 rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/80 bg-[#080E18] transform hover:-translate-y-1.5"
            >
              {/* Authentic Area Background Image */}
              <img
                src={area.image}
                alt={`${area.name} neighborhood photography`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.92] contrast-[1.04]"
                loading="lazy"
              />

              {/* Multi-Stop Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080E18]/95 via-[#080E18]/45 to-transparent transition-opacity duration-300" />

              {/* Top Sales Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#0F1A2C]/90 text-white backdrop-blur-md border border-[#C5A059]/40 shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DFC080] shadow-[0_0_6px_#DFC080]" />
                  {area.salesCount} {area.salesCount === 1 ? 'Sale' : 'Sales'} Recorded
                </span>
              </div>

              {/* Bottom Area Details */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-2">
                <div className="text-xs uppercase tracking-widest text-[#DFC080] font-bold flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#DFC080]" />
                  {area.region}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans'] text-white">
                  {area.name}
                </h3>

                <p className="text-xs sm:text-sm text-gray-200 line-clamp-2 font-normal leading-relaxed">
                  {area.description}
                </p>

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {area.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Indicator */}
                <div className="pt-2 flex items-center text-xs font-bold text-[#DFC080] group-hover:text-white transition-colors">
                  <span>Explore Market Comps</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Context */}
        <div className="mt-10 text-center text-xs text-gray-400 font-medium">
          Transaction counts verified via public MLS records and client profile. Additional private transactions extend throughout Southern California.
        </div>

      </div>
    </section>
  );
};
