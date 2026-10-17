/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TickerBar } from './components/TickerBar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { PrincipalMessage } from './components/PrincipalMessage';
import { AcademicsSection } from './components/AcademicsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CampusSection } from './components/CampusSection';
import { StudentLifeSection } from './components/StudentLifeSection';
import { TransportSection } from './components/TransportSection';
import { MandatoryDisclosureSection } from './components/MandatoryDisclosureSection';
import { AchievementsSection } from './components/AchievementsSection';
import { GallerySection } from './components/GallerySection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { NoticesSection } from './components/NoticesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SideEnquiryTab } from './components/SideEnquiryTab';
import { ApplyModal } from './components/ApplyModal';
import { LegalModal } from './components/LegalModal';
import { TCSearchModal } from './components/TCSearchModal';
import { ParentPortalModal } from './components/ParentPortalModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applyModalMode, setApplyModalMode] = useState<'apply' | 'visit'>('apply');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [tcSearchOpen, setTcSearchOpen] = useState(false);
  const [parentPortalOpen, setParentPortalOpen] = useState(false);
  const [portalMode, setPortalMode] = useState<'login' | 'fee'>('login');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'academics',
      'campus',
      'student-life',
      'transport',
      'achievements',
      'gallery',
      'admissions',
      'disclosure',
      'notices',
      'contact',
    ];

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);

      const scrollPosition = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      const navOffset = 95;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenApply = () => {
    setApplyModalMode('apply');
    setApplyModalOpen(true);
  };

  const handleOpenVisit = () => {
    setApplyModalMode('visit');
    setApplyModalOpen(true);
  };

  const handleOpenPortal = (mode: 'login' | 'fee') => {
    setPortalMode(mode);
    setParentPortalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#121A26] flex flex-col selection:bg-[#C5A059]/30 selection:text-[#070F1E]">
      {/* 1. Institutional Fixed Header */}
      <Header
        onOpenApply={handleOpenApply}
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
        onOpenTCSearch={() => setTcSearchOpen(true)}
        onOpenParentPortal={handleOpenPortal}
      />

      {/* 2. Official Circulars Ticker Bar */}
      <TickerBar onViewNotices={() => handleNavigateSection('notices')} />

      {/* Main Website Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenApply={handleOpenApply} />

        {/* Core Commitments Strip */}
        <TrustStrip />

        {/* Discover RIA & Philosophy */}
        <AboutSection onLearnMore={() => handleNavigateSection('academics')} />

        {/* Principal's Desk */}
        <PrincipalMessage />

        {/* Academic Life & Curricula */}
        <AcademicsSection onOpenApply={handleOpenApply} />

        {/* Why Choose RIA */}
        <WhyChooseUs />

        {/* Campus & Facilities */}
        <CampusSection onBookVisit={handleOpenVisit} />

        {/* Pastoral Care & House System */}
        <StudentLifeSection />

        {/* Transportation & Bus Routes */}
        <TransportSection />

        {/* Achievements & Statistics */}
        <AchievementsSection />

        {/* Moments That Matter Gallery */}
        <GallerySection />

        {/* Admissions Roadmap 2026-27 */}
        <AdmissionsSection
          onOpenApply={handleOpenApply}
          onBookVisit={handleOpenVisit}
        />

        {/* Mandatory Public Disclosure (SARAS) */}
        <MandatoryDisclosureSection />

        {/* Official School Notices & Circulars */}
        <div id="notices">
          <NoticesSection />
        </div>

        {/* Admissions Contact & Route Map */}
        <ContactSection />
      </main>

      {/* Dark Navy Institutional Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenApply={handleOpenApply}
      />

      {/* Pinned Side Enquiry Banner & Back-To-Top (Classic Indian School Website) */}
      <SideEnquiryTab
        onOpenApply={handleOpenApply}
        showBackToTop={showBackToTop}
        onScrollToTop={handleScrollToTop}
      />

      {/* Admissions & Tour Booking Modal */}
      <ApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultMode={applyModalMode}
      />

      {/* Transfer Certificate (TC) Search Portal */}
      <TCSearchModal
        isOpen={tcSearchOpen}
        onClose={() => setTcSearchOpen(false)}
      />

      {/* Parent ERP & Fee Payment Portal Modal */}
      <ParentPortalModal
        isOpen={parentPortalOpen}
        onClose={() => setParentPortalOpen(false)}
        initialTab={portalMode}
      />

      {/* Legal & Demonstration Disclosure Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
