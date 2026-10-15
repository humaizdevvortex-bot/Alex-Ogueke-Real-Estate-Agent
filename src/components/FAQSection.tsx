import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/realtorData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white border-b border-gray-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-extrabold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Client Questions & Advisory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans']">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mt-2 font-normal">
            Essential information regarding representation, market coverage, and working with Alex Ogueke.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-[22px] glass-luxury border border-gray-200/90 overflow-hidden shadow-xs transition-all duration-300 hover:border-[#C5A059]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#080E18] font-['Plus_Jakarta_Sans']">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#0F1A2C] text-[#DFC080] rotate-180 shadow-sm'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 animate-in fade-in duration-200 border-t border-gray-100">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-3 font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Prompt */}
        <div className="mt-12 text-center text-xs text-gray-500 font-medium">
          Have an additional question about your property or neighborhood?{' '}
          <a href="#contact" className="text-[#0F1A2C] font-extrabold hover:text-[#C5A059] underline ml-1">
            Reach out directly to Alex
          </a>
        </div>

      </div>
    </section>
  );
};
