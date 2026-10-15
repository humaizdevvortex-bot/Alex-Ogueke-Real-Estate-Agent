import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatisticsStrip } from './components/StatisticsStrip';
import { AboutSection } from './components/AboutSection';
import { SoldPropertiesSection } from './components/SoldPropertiesSection';
import { InteractiveMapSection } from './components/InteractiveMapSection';
import { TransactionHistorySection } from './components/TransactionHistorySection';
import { AreasServedSection } from './components/AreasServedSection';
import { ServicesSection } from './components/ServicesSection';
import { MortgageCalculatorSection } from './components/MortgageCalculatorSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { ConversionBanner } from './components/ConversionBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SoldProperty, AreaExperience, SOLD_PROPERTIES } from './data/realtorData';

export default function App() {
  const [cityFilter, setCityFilter] = useState<string>('All');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const [mapFocusedProperty, setMapFocusedProperty] = useState<SoldProperty | null>(null);
  const [initialPropertyInquiry, setInitialPropertyInquiry] = useState<string>('');

  const handleFocusOnMap = (property: SoldProperty) => {
    setMapFocusedProperty(property);
    const mapSection = document.getElementById('map-browser');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactWithProperty = (address: string) => {
    setInitialPropertyInquiry(address);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectArea = (area: AreaExperience) => {
    setCityFilter(area.name);
    const propSection = document.getElementById('properties');
    if (propSection) {
      propSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#191919] font-['Inter',sans-serif] selection:bg-[#173B63] selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenContactModal={() => {
          const contact = document.getElementById('contact');
          if (contact) contact.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Single-Page Content Flow */}
      <main>
        {/* Hero Banner with Alex's Genuine Portrait */}
        <Hero
          onSelectCityFilter={(city) => setCityFilter(city)}
          onSelectTypeFilter={(type) => setTypeFilter(type)}
        />

        {/* Verified Statistics Strip */}
        <StatisticsStrip />

        {/* Editorial About Alex */}
        <AboutSection />

        {/* Recently Sold Properties 6-Card Grid */}
        <SoldPropertiesSection
          activeCityFilter={cityFilter}
          activeTypeFilter={typeFilter}
          onFocusOnMap={handleFocusOnMap}
          onOpenContactWithProperty={handleOpenContactWithProperty}
        />

        {/* Interactive Location Map Browser */}
        <InteractiveMapSection
          focusedProperty={mapFocusedProperty}
          onOpenContactWithProperty={handleOpenContactWithProperty}
          onSelectProperty={(prop) => {
            // Optional callback
          }}
        />

        {/* Transaction History & Market Production */}
        <TransactionHistorySection />

        {/* Photographic Areas Alex Knows Grid */}
        <AreasServedSection onSelectArea={handleSelectArea} />

        {/* Advisory Services */}
        <ServicesSection
          onOpenContact={() => {
            const contact = document.getElementById('contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* South Bay Mortgage & Affordability Calculator */}
        <MortgageCalculatorSection
          onOpenContactForPreApproval={() => {
            const contact = document.getElementById('contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Authentic Client Experiences & Yelp Social Proof */}
        <ReviewsSection />

        {/* Client FAQ Accordion */}
        <FAQSection />

        {/* Full Width Conversion Banner */}
        <ConversionBanner
          onOpenContact={() => {
            const contact = document.getElementById('contact');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Lead Capture Contact Section */}
        <ContactSection initialPropertyInquiry={initialPropertyInquiry} />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
