import React from 'react';
import { Star, Quote, ExternalLink, CheckCircle, Sparkles } from 'lucide-react';
import { REVIEWS_DATA, AGENT_INFO } from '../data/realtorData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-[#FAF9F6] border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-extrabold uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
              <span>Verified Client Social Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans']">
              Client Experiences
            </h2>
            <p className="text-base sm:text-lg text-gray-500 mt-2 max-w-2xl font-normal">
              Authentic reviews from Southern California buyers and sellers represented by Alex Ogueke.
            </p>
          </div>

          {/* Yelp Summary Card */}
          <div className="glass-luxury p-5 rounded-2xl border border-white flex items-center gap-4 shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#DFC080] text-[#C5A059]" />
              ))}
            </div>
            <div>
              <div className="text-sm font-extrabold text-[#080E18]">
                5.0 Rating on Yelp
              </div>
              <a
                href={AGENT_INFO.yelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8C6D2D] hover:underline font-bold flex items-center gap-1 mt-0.5"
              >
                <span>Keller Williams Realty Torrance</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="rounded-[28px] glass-luxury p-8 sm:p-10 border border-white shadow-lg flex flex-col justify-between relative group hover:border-[#C5A059]/40 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#DFC080] text-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    {rev.source}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans']">
                  "{rev.headline}"
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  {rev.content}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-gray-200/80 flex items-center justify-between">
                <div>
                  <span className="text-sm font-extrabold text-[#080E18] block font-['Plus_Jakarta_Sans']">
                    {rev.author}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {rev.location} · {rev.date}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#8C6D2D]">
                  Keller Williams Client
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Link Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-gray-700">
          <a
            href={AGENT_INFO.yelpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-luxury border border-gray-300 hover:border-[#C5A059] shadow-xs transition-all"
          >
            <span>Yelp Business Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
          </a>
          <a
            href={AGENT_INFO.homesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-luxury border border-gray-300 hover:border-[#C5A059] shadow-xs transition-all"
          >
            <span>Homes.com Agent Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
          </a>
        </div>

      </div>
    </section>
  );
};
