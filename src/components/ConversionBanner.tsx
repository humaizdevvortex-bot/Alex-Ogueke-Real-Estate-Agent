import React from 'react';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { AGENT_INFO } from '../data/realtorData';

interface ConversionBannerProps {
  onOpenContact?: () => void;
}

export const ConversionBanner: React.FC<ConversionBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background Architectural Photo with Cinematic Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={AGENT_INFO.heroBannerBg}
          alt="South Bay Los Angeles coastal modern architecture"
          className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.12]"
          loading="lazy"
        />
        {/* Obsidian Glass Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080E18]/95 via-[#0F1A2C]/80 to-[#080E18]/90" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white space-y-7">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-[#DFC080]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Southern California Real Estate Representation</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-white leading-[1.1] font-['Plus_Jakarta_Sans']">
          Ready to Make Your Next Move?
        </h2>

        <p className="text-base sm:text-xl text-gray-200 max-w-2xl mx-auto font-normal leading-relaxed">
          Whether you're buying, selling, or exploring your options, start a conversation about your real estate goals today.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider text-[#080E18] bg-gradient-to-r from-[#F5DF9E] via-[#DFC080] to-[#C5A059] shadow-[0_10px_25px_rgba(197,160,89,0.35)] hover:shadow-[0_15px_30px_rgba(197,160,89,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`tel:${AGENT_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md shadow-lg transition-all"
          >
            <Phone className="w-4 h-4 text-[#DFC080]" />
            <span>Call {AGENT_INFO.phone}</span>
          </a>
        </div>

        <div className="pt-4 text-xs text-gray-400 font-medium">
          Keller Williams Realty South Bay · 23670 Hawthorne Blvd, Suite 100, Torrance, CA · CalDRE #{AGENT_INFO.calDRE}
        </div>

      </div>
    </section>
  );
};
