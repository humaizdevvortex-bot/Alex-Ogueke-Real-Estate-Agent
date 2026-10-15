import React from 'react';
import { DollarSign, Home, TrendingUp, Calendar, Star, Sparkles, ShieldCheck } from 'lucide-react';
import { AGENT_INFO } from '../data/realtorData';

export const StatisticsStrip: React.FC = () => {
  const stats = [
    {
      value: "$10.2M",
      label: "Total Sales Volume",
      sublabel: "Homes.com verified production",
      icon: DollarSign,
      highlight: true,
    },
    {
      value: "16",
      label: "Closed Transactions",
      sublabel: "Buyer & seller representation",
      icon: Home,
      highlight: false,
    },
    {
      value: "$638K",
      label: "Average Sale Price",
      sublabel: "$550K–$940K historical range",
      icon: TrendingUp,
      highlight: false,
    },
    {
      value: "4 Years",
      label: "Market Experience",
      sublabel: "Torrance & South Bay focus",
      icon: Calendar,
      highlight: false,
    },
    {
      value: "5.0 ★",
      label: "Client Satisfaction",
      sublabel: "100% 5-star verified reviews",
      icon: Star,
      highlight: true,
    },
  ];

  return (
    <section className="relative py-12 bg-obsidian-gradient text-white border-y border-white/10 overflow-hidden">
      {/* Ambient background light streaks */}
      <div className="absolute top-0 right-1/3 w-96 h-32 bg-[#C5A059]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-32 bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Luxury Header Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#DFC080] shadow-[0_0_8px_#DFC080]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-300">
              Verified Production & Historical Performance
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>{AGENT_INFO.reportingPeriod}</span>
          </div>
        </div>

        {/* 5-Column Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl glass-dark-luxury p-5 sm:p-6 border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#DFC080] group-hover:bg-[#C5A059]/20 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  {stat.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFC080] animate-ping" />
                  )}
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight font-['Manrope'] text-white group-hover:text-gold-gradient transition-all">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
