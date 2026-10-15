import React from 'react';
import { Home, TrendingUp, Key, BarChart3, Shield, Building, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/realtorData';

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Key': return <Key className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Building': return <Building className="w-5 h-5" />;
      default: return <Home className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Representation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans']">
            How Alex Can Help
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mt-3 leading-relaxed font-normal">
            Bespoke client advisory whether you are buying your first residence, selling for maximum market value, or expanding your South Bay investment portfolio.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={index}
              className="rounded-[28px] glass-luxury p-8 border border-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:border-[#C5A059]/50 transform hover:-translate-y-1.5 cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F1A2C] to-[#15253F] text-[#DFC080] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md border border-[#C5A059]/40">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-extrabold text-[#080E18] tracking-tight group-hover:text-[#0F1A2C] transition-colors mb-3 font-['Plus_Jakarta_Sans']">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200/80 flex items-center justify-between">
                <span className="text-xs font-bold text-[#8C6D2D]">
                  Keller Williams South Bay
                </span>
                <a
                  href="#contact"
                  className="text-xs font-extrabold text-[#080E18] group-hover:text-[#C5A059] flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0F1A2C] to-[#15253F] hover:from-[#15253F] hover:to-[#1E3557] shadow-xl border border-[#C5A059]/40 transition-all transform hover:-translate-y-0.5"
          >
            <span>Talk With Alex Today</span>
            <ArrowRight className="w-4 h-4 text-[#DFC080]" />
          </a>
        </div>

      </div>
    </section>
  );
};
