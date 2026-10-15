import React from 'react';
import { BarChart3, TrendingUp, Users, Home, Shield, DollarSign, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRODUCTION_DATA, AGENT_INFO } from '../data/realtorData';

export const TransactionHistorySection: React.FC = () => {
  return (
    <section id="production" className="py-24 lg:py-32 bg-white border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-extrabold uppercase tracking-widest mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Market Production & Analytics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans']">
            Transaction History & Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mt-2 font-normal">
            A comprehensive breakdown of closed sales, buyer vs. seller representation, and average transaction pricing in Southern California.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Top Banner Dashboard Card */}
          <div className="lg:col-span-12 rounded-[32px] bg-obsidian-gradient text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-white/10">
            {/* Ambient golden glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/10 gap-4 relative z-10">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-[0.2em] text-[#DFC080] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Total Verified MLS Record
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white font-['Plus_Jakarta_Sans']">
                  Overall Career Production Overview
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 text-xs text-gray-300 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PRODUCTION_DATA.overall.yearsReporting}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 relative z-10">
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Total Volume</span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold-gradient font-['Manrope'] block mt-1">
                  {PRODUCTION_DATA.overall.totalVolume}
                </span>
                <span className="text-xs text-gray-400 block mt-1 font-medium">16 Verified Transactions</span>
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Average Sale Price</span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Manrope'] block mt-1">
                  {PRODUCTION_DATA.overall.avgSalePrice}
                </span>
                <span className="text-xs text-gray-400 block mt-1 font-medium">Single Family & Multifamily</span>
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Historical Range</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Manrope'] block mt-1">
                  {PRODUCTION_DATA.overall.priceRange}
                </span>
                <span className="text-xs text-gray-400 block mt-1 font-medium">Entry to Luxury Bracket</span>
              </div>

              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">Experience</span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Manrope'] block mt-1">
                  4+ Years
                </span>
                <span className="text-xs text-gray-400 block mt-1 font-medium">CalDRE #{AGENT_INFO.calDRE}</span>
              </div>
            </div>
          </div>

          {/* Seller Representation Column */}
          <div className="lg:col-span-6 rounded-[28px] glass-luxury p-8 border border-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-50 text-[#8C6D2D] border border-[#C5A059]/30">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-[#080E18] font-['Plus_Jakarta_Sans']">
                      Seller Representation
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">Listing Agent Transactions</p>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#0F1A2C] bg-white border border-gray-200 px-3 py-1 rounded-full shadow-xs">
                  {PRODUCTION_DATA.sellerSide.deals} Closed Listings
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Total Listing Value</span>
                  <span className="text-2xl font-extrabold text-gray-900 font-['Manrope'] block mt-1">
                    {PRODUCTION_DATA.sellerSide.totalVolume}
                  </span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Avg Listing Sale</span>
                  <span className="text-2xl font-extrabold text-[#0F1A2C] font-['Manrope'] block mt-1">
                    {PRODUCTION_DATA.sellerSide.avgSalePrice}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-gray-700">
                  <span>Price Range</span>
                  <span className="text-[#080E18]">{PRODUCTION_DATA.sellerSide.priceRange}</span>
                </div>
                
                {/* Visual Representation Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden p-0.5">
                  <div className="bg-gradient-to-r from-[#0F1A2C] to-[#C5A059] h-2 rounded-full" style={{ width: '15%' }} />
                </div>
                <span className="text-xs text-gray-500 block font-normal">
                  Recorded up to 5% above list price in Los Angeles market.
                </span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500 font-medium">
              Verified sales include 7721 Bell Ave ($840K) and 1314 W 71st St ($624K).
            </div>
          </div>

          {/* Buyer Representation Column */}
          <div className="lg:col-span-6 rounded-[28px] glass-luxury p-8 border border-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-50 text-[#0F1A2C] border border-blue-100">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-[#080E18] font-['Plus_Jakarta_Sans']">
                      Buyer Representation
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">Buyer's Agent Purchases</p>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-[#0F1A2C] bg-white border border-gray-200 px-3 py-1 rounded-full shadow-xs">
                  {PRODUCTION_DATA.buyerSide.deals} Buyer Purchases
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Total Buyer Value</span>
                  <span className="text-2xl font-extrabold text-gray-900 font-['Manrope'] block mt-1">
                    {PRODUCTION_DATA.buyerSide.totalVolume}
                  </span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Avg Purchase Price</span>
                  <span className="text-2xl font-extrabold text-[#0F1A2C] font-['Manrope'] block mt-1">
                    {PRODUCTION_DATA.buyerSide.avgSalePrice}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-gray-700">
                  <span>Price Range</span>
                  <span className="text-[#080E18]">{PRODUCTION_DATA.buyerSide.priceRange}</span>
                </div>
                
                {/* Visual Representation Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden p-0.5">
                  <div className="bg-gradient-to-r from-[#0F1A2C] to-[#1E3557] h-2 rounded-full" style={{ width: '85%' }} />
                </div>
                <span className="text-xs text-gray-500 block font-normal">
                  Dedicated advocacy for first-time homebuyers and multi-unit investors.
                </span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-500 font-medium">
              Verified sales include Torrance ($805K), Gardena ($885K), Lancaster ($550K), and Barstow ($352K).
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
