import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';
import { AGENT_INFO } from '../data/realtorData';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  onOpenContactModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryNavLinks = [
    { label: 'Featured & Sales', href: '#properties' },
    { label: 'Map Explorer', href: '#map-browser' },
    { label: 'Track Record', href: '#production' },
    { label: 'Areas', href: '#areas' },
    { label: 'About', href: '#about' },
  ];

  const moreNavLinks = [
    { label: 'Client Advisory Services', href: '#services', desc: 'Buying, selling & investment strategies' },
    { label: 'Mortgage & Payment Calculator', href: '#calculator', desc: 'Estimate monthly California investments' },
    { label: 'Verified Client Reviews (5.0)', href: '#reviews', desc: 'Yelp & Homes.com recommendations' },
    { label: 'Frequently Asked Questions', href: '#faq', desc: 'Representation & process insights' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(8,14,24,0.06)] py-3'
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Realtor Title (Clean, Single Unit) */}
          <a href="#" className="flex items-center shrink-0 focus:outline-none">
            <BrandLogo size="md" variant="light" />
          </a>

          {/* Desktop Navigation - Clean, Single-Line, Never Wraps */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-semibold text-gray-700 whitespace-nowrap">
            {primaryNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-gray-700 hover:text-[#080E18] hover:bg-gray-100/70 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* "More Resources" Clean Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-3.5 py-2 rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                  dropdownOpen
                    ? 'bg-gray-100 text-[#080E18]'
                    : 'text-gray-700 hover:text-[#080E18] hover:bg-gray-100/70'
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-[#C5A059]' : 'text-gray-400'
                  }`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 rounded-2xl glass-luxury border border-white shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-150 z-50">
                  {moreNavLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block p-3 rounded-xl hover:bg-white/90 transition-colors group"
                    >
                      <div className="text-xs font-bold text-[#080E18] group-hover:text-[#C5A059] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-gray-500 font-normal mt-0.5">
                        {item.desc}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Header Actions (Phone & CTA - Guaranteed Single Line) */}
          <div className="hidden md:flex items-center gap-3 shrink-0 whitespace-nowrap">
            {/* Phone Link - Strictly No Wrap */}
            <a
              href={`tel:${AGENT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-[#080E18] hover:text-[#8C6D2D] hover:bg-amber-50/60 transition-colors"
              title="Call Alex Ogueke"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-50 text-[#C5A059] flex items-center justify-center border border-amber-200/50 shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-tight">{AGENT_INFO.phone}</span>
            </a>

            {/* Let's Connect Button */}
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContactModal) {
                  e.preventDefault();
                  onOpenContactModal();
                }
              }}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#0F1A2C] to-[#15253F] hover:from-[#15253F] hover:to-[#1E3557] border border-[#C5A059]/40 shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFC080]" />
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-300" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={`tel:${AGENT_INFO.phoneRaw}`}
              className="p-2 rounded-xl bg-amber-50 text-[#0F1A2C] border border-amber-200/60"
              aria-label="Call Alex"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-3 rounded-2xl glass-luxury border border-gray-200/90 p-5 shadow-2xl animate-in slide-in-from-top-3 duration-250">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold mb-5">
            {[...primaryNavLinks, ...moreNavLinks.map(m => ({ label: m.label.split(' ')[0], href: m.href }))].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl text-gray-800 hover:bg-white/90 hover:text-[#0F1A2C] border border-transparent hover:border-gray-200 transition-all truncate"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-gray-200/80 flex flex-col gap-2.5">
            <a
              href={`tel:${AGENT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#0F1A2C] font-bold text-xs border border-gray-200 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              Call {AGENT_INFO.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0F1A2C] to-[#15253F] text-white font-bold text-xs shadow-md border border-[#C5A059]/40"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFC080]" />
              Schedule Private Consultation
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
