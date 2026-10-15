import React, { useState, useMemo } from 'react';
import { Calculator, DollarSign, Percent, Calendar, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { AGENT_INFO } from '../data/realtorData';

interface MortgageCalculatorSectionProps {
  onOpenContactForPreApproval?: () => void;
}

export const MortgageCalculatorSection: React.FC<MortgageCalculatorSectionProps> = ({
  onOpenContactForPreApproval,
}) => {
  const [homePrice, setHomePrice] = useState<number>(805000); // Default to Torrance sold comp
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(30);

  const calculations = useMemo(() => {
    const downPaymentAmount = (homePrice * downPaymentPercent) / 100;
    const loanAmount = homePrice - downPaymentAmount;

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTermYears * 12;

    let monthlyPrincipalAndInterest = 0;
    if (monthlyInterestRate > 0) {
      monthlyPrincipalAndInterest =
        (loanAmount *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
      monthlyPrincipalAndInterest = loanAmount / numberOfPayments;
    }

    // CA property tax approx 1.2% annual
    const monthlyPropertyTax = (homePrice * 0.012) / 12;
    const monthlyInsurance = (homePrice * 0.0035) / 12;
    const monthlyPMI = downPaymentPercent < 20 ? (loanAmount * 0.007) / 12 : 0;

    const totalMonthlyPayment =
      monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyInsurance + monthlyPMI;

    return {
      downPaymentAmount,
      loanAmount,
      monthlyPrincipalAndInterest: Math.round(monthlyPrincipalAndInterest),
      monthlyPropertyTax: Math.round(monthlyPropertyTax),
      monthlyInsurance: Math.round(monthlyInsurance),
      monthlyPMI: Math.round(monthlyPMI),
      totalMonthlyPayment: Math.round(totalMonthlyPayment),
    };
  }, [homePrice, downPaymentPercent, interestRate, loanTermYears]);

  return (
    <section id="calculator" className="py-24 lg:py-32 bg-white border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-extrabold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Buyer Planning & Financial Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans']">
            South Bay Investment & Mortgage Calculator
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mt-2 font-normal">
            Calculate your estimated monthly payment across Torrance, Carson, Gardena, and Los Angeles including California property taxes and hazard insurance.
          </p>
        </div>

        {/* Outer Glass Card */}
        <div className="rounded-[32px] glass-luxury p-6 sm:p-10 border border-gray-200/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Controls (Left Column) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Home Price Slider */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-gray-600">
                    Target Property Price
                  </label>
                  <span className="text-2xl font-extrabold text-[#080E18] font-['Manrope']">
                    ${homePrice >= 1000000 ? `${(homePrice / 1000000).toFixed(2)}M` : `${(homePrice / 1000).toFixed(0)}K`}
                  </span>
                </div>
                <input
                  type="range"
                  min="300000"
                  max="2000000"
                  step="10000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0F1A2C]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-2 font-semibold">
                  <span>$300K</span>
                  <span className="text-[#8C6D2D]">$805K (Torrance Avg)</span>
                  <span>$2M+</span>
                </div>
              </div>

              {/* Down Payment & Percent */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-2">
                    Down Payment (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="3"
                      max="60"
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">
                      %
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500 font-semibold block mt-1.5">
                    Amount: ${calculations.downPaymentAmount.toLocaleString()}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-2">
                    Mortgage Interest Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      min="3.0"
                      max="12.0"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">
                      %
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500 font-semibold block mt-1.5">
                    Current CA benchmark: ~6.5%
                  </span>
                </div>
              </div>

              {/* Loan Term Selection */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-2">
                  Fixed Loan Term
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[30, 15].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setLoanTermYears(term)}
                      className={`py-3 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                        loanTermYears === term
                          ? 'bg-[#0F1A2C] text-white border-[#C5A059]/60 shadow-md'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {term}-Year Fixed Mortgage
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-center gap-2.5 text-xs text-[#8C6D2D] font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>
                  Includes California standardized property tax (~1.2%) & hazard insurance estimates.
                </span>
              </div>
            </div>

            {/* Monthly Output Card (Right Column) */}
            <div className="lg:col-span-5 rounded-[28px] bg-obsidian-gradient text-white p-7 sm:p-9 shadow-2xl flex flex-col justify-between border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[11px] uppercase font-extrabold tracking-[0.2em] text-[#DFC080] block">
                  Estimated Total Investment
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-['Manrope'] my-3">
                  ${calculations.totalMonthlyPayment.toLocaleString()}
                  <span className="text-base font-medium text-gray-300"> /mo</span>
                </div>
                <p className="text-xs text-gray-300 font-medium">
                  Principal financed: ${calculations.loanAmount.toLocaleString()}
                </p>

                {/* Itemized list */}
                <div className="space-y-3 pt-6 mt-6 border-t border-white/10 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                      Principal & Interest
                    </span>
                    <span className="font-bold font-['Manrope'] text-white">
                      ${calculations.monthlyPrincipalAndInterest.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#DFC080]" />
                      Property Taxes (CA ~1.2%)
                    </span>
                    <span className="font-bold font-['Manrope'] text-white">
                      ${calculations.monthlyPropertyTax.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      Homeowners Insurance
                    </span>
                    <span className="font-bold font-['Manrope'] text-white">
                      ${calculations.monthlyInsurance.toLocaleString()}
                    </span>
                  </div>

                  {calculations.monthlyPMI > 0 && (
                    <div className="flex items-center justify-between text-amber-300">
                      <span className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        Private Mortgage Insurance (PMI)
                      </span>
                      <span className="font-bold font-['Manrope']">
                        ${calculations.monthlyPMI.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-white/10 relative z-10">
                <a
                  href="#contact"
                  onClick={onOpenContactForPreApproval}
                  className="w-full py-4 px-4 bg-gradient-to-r from-[#F5DF9E] via-[#DFC080] to-[#C5A059] text-[#080E18] text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg text-center block cursor-pointer hover:brightness-105"
                >
                  Connect With Alex for Lender Pre-Approval
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
