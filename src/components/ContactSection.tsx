import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Globe, Send, CheckCircle2, AlertCircle, ArrowUpRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { AGENT_INFO } from '../data/realtorData';

interface ContactSectionProps {
  initialPropertyInquiry?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPropertyInquiry }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interestType, setInterestType] = useState('Buying');
  const [timeline, setTimeline] = useState('1-3 months');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialPropertyInquiry) {
      setMessage(`Hi Alex, I would like to schedule a private tour or receive detailed information regarding ${initialPropertyInquiry}.`);
      setInterestType('Scheduling a Tour');
    }
  }, [initialPropertyInquiry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please fill out all required fields (Name, Email, and Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`Real Estate Inquiry from ${fullName} (${interestType})`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interestType}\nTimeline: ${timeline}\n\nMessage:\n${message}`
    );
    return `mailto:${AGENT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full badge-gold text-xs font-extrabold uppercase tracking-widest mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Confidential Inquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#080E18] tracking-tight font-['Plus_Jakarta_Sans']">
            Let's Talk About Your Next Move
          </h2>
          <p className="text-base sm:text-lg text-gray-500 mt-2 font-normal">
            Have a question about the Torrance market, selling a property, or scheduling a confidential consultation? Alex is ready to help.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Agent Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Agent Profile Card */}
            <div className="rounded-[28px] glass-luxury p-7 border border-white shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={AGENT_INFO.portraitImage}
                  alt={AGENT_INFO.name}
                  className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-white shadow-md"
                />
                <div>
                  <h3 className="text-xl font-extrabold text-[#080E18] font-['Plus_Jakarta_Sans']">
                    {AGENT_INFO.name}
                  </h3>
                  <p className="text-xs font-bold text-[#8C6D2D]">
                    {AGENT_INFO.brokerage}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5 font-medium">
                    CalDRE #{AGENT_INFO.calDRE} · Realtor
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200/80 text-sm">
                
                {/* Telephone */}
                <a
                  href={`tel:${AGENT_INFO.phoneRaw}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-gray-200/80 text-gray-800 hover:border-[#C5A059] transition-all group shadow-xs"
                >
                  <div className="p-2.5 rounded-xl bg-amber-50 text-[#C5A059] group-hover:bg-[#0F1A2C] group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">
                      Direct Telephone
                    </span>
                    <span className="font-extrabold text-sm text-[#080E18]">{AGENT_INFO.phone}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${AGENT_INFO.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-gray-200/80 text-gray-800 hover:border-[#C5A059] transition-all group shadow-xs"
                >
                  <div className="p-2.5 rounded-xl bg-amber-50 text-[#C5A059] group-hover:bg-[#0F1A2C] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">
                      Direct Email
                    </span>
                    <span className="font-bold text-sm text-[#080E18]">{AGENT_INFO.email}</span>
                  </div>
                </a>

                {/* Office Address */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-gray-200/80 text-gray-800 shadow-xs">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-[#C5A059]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">
                      Torrance Office
                    </span>
                    <span className="font-semibold text-xs sm:text-sm text-gray-800">
                      {AGENT_INFO.officeAddress}
                    </span>
                  </div>
                </div>

                {/* Official Website */}
                <a
                  href={AGENT_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-gray-200/80 text-gray-800 hover:border-[#C5A059] transition-all group shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-50 text-[#C5A059] group-hover:bg-[#0F1A2C] group-hover:text-white transition-colors">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">
                        Agent Portal
                      </span>
                      <span className="font-bold text-xs sm:text-sm text-[#080E18]">
                        alexogueke.kw.com
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#C5A059]" />
                </a>

              </div>
            </div>

            {/* Privacy Guarantee */}
            <div className="flex items-start gap-3.5 p-5 rounded-2xl glass-luxury border border-white text-xs text-gray-600 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Your confidentiality is strictly protected. Communications route exclusively to Alex Ogueke at Keller Williams Realty South Bay. No spam or third-party lists.
              </p>
            </div>

          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[32px] glass-luxury p-7 sm:p-10 border border-white shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#080E18] font-['Plus_Jakarta_Sans']">
                    Thank You, {fullName}!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been formulated. You can open it directly in your email client to dispatch to Alex immediately.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateMailto()}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0F1A2C] to-[#15253F] shadow-md border border-[#C5A059]/40 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#DFC080]" />
                      <span>Open in Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-gray-600 hover:text-gray-900 px-4 py-3"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-extrabold text-[#080E18] font-['Plus_Jakarta_Sans']">
                      Direct Advisory Consultation
                    </h3>
                    <span className="text-[10px] font-bold text-[#8C6D2D] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      Response within 24h
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Marcus Johnson"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059] shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(310) 555-0199"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059] shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="marcus@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059] shadow-xs"
                    />
                  </div>

                  {/* Interested In & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                        I'm Interested In
                      </label>
                      <select
                        value={interestType}
                        onChange={(e) => setInterestType(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059] shadow-xs cursor-pointer"
                      >
                        <option value="Scheduling a Tour">Scheduling a Private Tour</option>
                        <option value="Buying">Buying a Residence</option>
                        <option value="Selling">Selling for Maximum Value</option>
                        <option value="Investing">Real Estate Investments / Duplex</option>
                        <option value="First-Time Buyer">First-Time Homebuyer Guidance</option>
                        <option value="Market Valuation">Free Market Evaluation (CMA)</option>
                        <option value="General Inquiry">General Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                        Target Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059] shadow-xs cursor-pointer"
                      >
                        <option value="Immediate">Immediate (Under 30 days)</option>
                        <option value="1-3 months">1 to 3 months</option>
                        <option value="3-6 months">3 to 6 months</option>
                        <option value="Just Researching">Just exploring / Future</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-600 mb-1.5">
                      Message / Property Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify your preferred neighborhoods, property type, or specific questions..."
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/30 focus:border-[#C5A059] shadow-xs font-normal"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#0F1A2C] to-[#15253F] hover:from-[#15253F] hover:to-[#1E3557] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl shadow-lg border border-[#C5A059]/40 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 text-[#DFC080]" />
                    <span>Send Message to Alex</span>
                  </button>

                  <p className="text-[11px] text-gray-400 text-center font-medium">
                    Keller Williams Realty South Bay · CalDRE #{AGENT_INFO.calDRE}
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
