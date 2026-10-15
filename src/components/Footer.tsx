import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight, Shield, Heart } from 'lucide-react';
import { AGENT_INFO } from '../data/realtorData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian-gradient text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle gold ambient glow in footer */}
      <div className="absolute top-0 right-1/4 w-80 h-32 bg-[#C5A059]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          {/* Brand & Brokerage Info */}
          <div className="lg:col-span-5 space-y-5">
            <BrandLogo variant="dark" size="lg" />

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm font-normal">
              Providing personalized real estate guidance, local market comp analysis, and dedicated buyer & seller representation throughout Torrance, Carson, Gardena, and Greater Los Angeles.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p><strong className="text-white">Brokerage:</strong> {AGENT_INFO.brokerage}</p>
              <p><strong className="text-white">Office:</strong> {AGENT_INFO.officeAddress}</p>
              <p><strong className="text-white">California License:</strong> CalDRE #{AGENT_INFO.calDRE}</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#DFC080]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-medium">
              <li>
                <a href="#about" className="hover:text-[#DFC080] transition-colors">About Alex</a>
              </li>
              <li>
                <a href="#properties" className="hover:text-[#DFC080] transition-colors">Verified Sold Comps</a>
              </li>
              <li>
                <a href="#map-browser" className="hover:text-[#DFC080] transition-colors">Interactive Location Map</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#DFC080] transition-colors">Areas Known & Experienced</a>
              </li>
              <li>
                <a href="#production" className="hover:text-[#DFC080] transition-colors">Track Record & Analytics</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#DFC080] transition-colors">Representation Services</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#DFC080] transition-colors">Mortgage Calculator</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#DFC080] transition-colors">Client Reviews (5.0 Yelp)</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#DFC080] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact & Portals */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-extrabold text-[#DFC080]">
              Get In Touch
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#DFC080]">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${AGENT_INFO.phoneRaw}`} className="hover:text-white font-bold">
                  {AGENT_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#DFC080]">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${AGENT_INFO.email}`} className="hover:text-white font-medium">
                  {AGENT_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#DFC080] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-normal text-xs leading-relaxed">
                  23670 Hawthorne Blvd, Suite 100, Torrance, CA 90505
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={AGENT_INFO.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors border border-white/10"
              >
                <span>Keller Williams Agent Website</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DFC080]" />
              </a>

              <a
                href={AGENT_INFO.homesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors border border-white/10"
              >
                <span>Homes.com Verified Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DFC080]" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimers & Fair Housing Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Equal Housing Opportunity. CalDRE #02079279.</span>
          </div>

          <div className="text-center sm:text-right font-medium">
            <span>&copy; {new Date().getFullYear()} Alex Ogueke. Keller Williams Realty South Bay. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
