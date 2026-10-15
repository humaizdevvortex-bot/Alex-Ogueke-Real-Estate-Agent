import React from 'react';
import { UserCheck, Globe, MapPin, Building, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AGENT_INFO } from '../data/realtorData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-gray-200/60 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual & Trust Profile */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-[28px] overflow-hidden glass-luxury p-3 shadow-xl border border-white">
              
              {/* Secondary Crop Portrait Container */}
              <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-gray-100">
                <img
                  src={AGENT_INFO.portraitImage}
                  alt="Alex Ogueke - Real Estate Professional"
                  className="w-full h-full object-cover object-top filter contrast-[1.03]"
                />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl glass-dark-luxury text-white border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFC080] block">
                        Birthplace & South Bay Roots
                      </span>
                      <span className="text-sm font-bold text-white">
                        Carson, California
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/15 text-white">
                      9 Yrs Global Living
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Specs Table */}
              <div className="p-5 space-y-3.5 bg-white/90 rounded-2xl mt-3 border border-gray-100">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
                  <span className="font-extrabold uppercase tracking-wider text-gray-500">
                    Brokerage
                  </span>
                  <span className="font-bold text-[#0F1A2C]">
                    Keller Williams Realty South Bay
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
                  <span className="font-extrabold uppercase tracking-wider text-gray-500">
                    State License
                  </span>
                  <span className="font-bold text-gray-800">
                    CalDRE #{AGENT_INFO.calDRE}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs">
                  <span className="font-extrabold uppercase tracking-wider text-gray-500">
                    Headquarters
                  </span>
                  <span className="font-medium text-gray-700">
                    Torrance, CA 90505
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold uppercase tracking-wider text-gray-500">
                    Verified Volume
                  </span>
                  <span className="font-bold text-emerald-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    $10.2M (16 Closed Sales)
                  </span>
                </div>
              </div>

            </div>

            {/* Philosophy Box */}
            <div className="p-5 rounded-2xl glass-luxury border border-white/80 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-[#C5A059] shrink-0 border border-amber-200/50">
                  <Sparkles className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed font-serif">
                  "Every real estate transaction represents a major life milestone. My goal is to equip clients with clear market facts, calm guidance, and uncompromised advocacy."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Specialties */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-extrabold uppercase tracking-widest mb-3">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Professional Background</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#080E18] tracking-tight leading-tight font-['Plus_Jakarta_Sans']">
                Get to Know Alex Ogueke
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              <p>
                {AGENT_INFO.bio[0]}
              </p>
              <p>
                {AGENT_INFO.bio[1]}
              </p>
            </div>

            {/* Experience & Property Types Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              
              {/* Home Types Supported */}
              <div className="glass-card-luxury p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <Building className="w-4 h-4 text-[#0F1A2C]" />
                  <h3 className="text-xs font-bold text-[#080E18] uppercase tracking-wider">
                    Property Types Represented
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {AGENT_INFO.propertyTypes.map((type) => (
                    <span
                      key={type}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-gray-100/80 text-gray-800 border border-gray-200"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Practice Specialties */}
              <div className="glass-card-luxury p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-[#C5A059]" />
                  <h3 className="text-xs font-bold text-[#080E18] uppercase tracking-wider">
                    Practice Specialties
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {AGENT_INFO.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50/70 text-[#8C6D2D] border border-[#C5A059]/30"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0F1A2C] to-[#15253F] hover:from-[#15253F] hover:to-[#1E3557] shadow-md border border-[#C5A059]/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Discuss Your Real Estate Goals</span>
                <ArrowRight className="w-4 h-4 text-[#DFC080]" />
              </a>

              <a
                href={AGENT_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F1A2C] hover:text-[#C5A059] px-4 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <span>Official KW Profile</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
