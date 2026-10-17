import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin, ShieldCheck, UserCheck, CreditCard, Search, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeaderProps {
  onOpenApply: () => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
  onOpenTCSearch: () => void;
  onOpenParentPortal: (mode: 'login' | 'fee') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenApply,
  activeSection,
  onNavigateSection,
  onOpenTCSearch,
  onOpenParentPortal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Academics', id: 'academics' },
    { label: 'Admissions', id: 'admissions' },
    { label: 'Campus & Heritage', id: 'campus' },
    { label: 'Student Life', id: 'student-life' },
    { label: 'Transport', id: 'transport' },
    { label: 'Mandatory Disclosure', id: 'disclosure' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(id);
  };

  return (
    <>
      {/* Royal Charter Top Utility Bar (Oxford / Imperial Academic Style) */}
      <div className="bg-[#070F1E] text-[#E5C782] text-xs font-medium py-2 px-4 sm:px-8 border-b border-[#C5A059]/30 z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2.5">
          {/* Institutional Charter & Location */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3.5 text-[#F9F7F2]/90 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-bold tracking-wider text-[#E5C782] uppercase text-[10px] sm:text-[11px]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#C5A059] ring-2 ring-[#C5A059]/40" />
              Sawai Madhopur · Rajasthan
            </span>
            <span className="text-[#C5A059]/50 hidden sm:inline">|</span>
            <span className="text-[#F9F7F2]/80 hidden sm:inline tracking-wide">
              Affiliation: <strong className="text-white font-semibold">{SCHOOL_INFO.affiliationNo}</strong>
            </span>
            <span className="text-[#C5A059]/50 hidden md:inline">|</span>
            <span className="text-[#F9F7F2]/80 hidden md:inline tracking-wide">
              Code: <strong className="text-white font-semibold">{SCHOOL_INFO.schoolCode}</strong>
            </span>
          </div>

          {/* Quick Institutional Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 text-[#F9F7F2]/90 text-[11px] sm:text-xs">
            <button
              onClick={() => handleLinkClick('disclosure')}
              className="hover:text-white flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Public Disclosure</span>
            </button>
            <span className="text-[#C5A059]/40">·</span>
            <button
              onClick={() => onOpenParentPortal('fee')}
              className="hover:text-white flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline"
            >
              <CreditCard className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Online Fee Portal</span>
            </button>
            <span className="text-[#C5A059]/40">·</span>
            <button
              onClick={onOpenTCSearch}
              className="hover:text-white flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline"
            >
              <Search className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>TC Verification</span>
            </button>
            <span className="text-[#C5A059]/40">·</span>
            <button
              onClick={() => onOpenParentPortal('login')}
              className="hover:bg-[#1A382B] text-[#E5C782] hover:text-white font-semibold transition-colors bg-[#0D1A30] px-2.5 py-0.5 rounded border border-[#C5A059]/40 flex items-center gap-1"
            >
              <UserCheck className="w-3 h-3 text-[#C5A059]" />
              <span>Parent ERP</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Prestigious University Navigation Bar */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          scrolled
            ? 'shadow-[0_8px_30px_rgba(7,15,30,0.08)] border-b border-[#C5A059]/30 py-3'
            : 'border-b border-[#070F1E]/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Aristocratic University Crest & Title */}
          <button
            onClick={() => handleLinkClick('home')}
            type="button"
            className="flex items-center gap-3.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded-lg p-1"
            aria-label="Ranthambore International Academy Home"
          >
            {/* Heraldic Gold Crest */}
            <div className="w-13 h-13 rounded-xl bg-[#070F1E] flex items-center justify-center p-2 shadow-md border-2 border-[#C5A059] group-hover:border-[#E5C782] transition-colors shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#C5A059]" fill="currentColor">
                <circle cx="50" cy="50" r="46" stroke="#C5A059" strokeWidth="3" fill="none" />
                <circle cx="50" cy="50" r="40" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                <path d="M30 74 L50 22 L70 74 L58 74 L50 50 L42 74 Z" fill="#C5A059" />
                <circle cx="50" cy="38" r="5" fill="#E5C782" />
                {/* Laurel leaves accent */}
                <path d="M22 50 C24 42 30 38 34 36 C32 42 28 48 22 50 Z" fill="#E5C782" opacity="0.85" />
                <path d="M78 50 C76 42 70 38 66 36 C68 42 72 48 78 50 Z" fill="#E5C782" opacity="0.85" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#070F1E] leading-tight group-hover:text-[#1A382B] transition-colors">
                Ranthambore <span className="text-[#C5A059]">International</span> Academy
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold text-[#2E5844]">
                Sawai Madhopur · Rajasthan
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  type="button"
                  className={`text-[13px] font-semibold tracking-wide transition-all relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded ${
                    isActive
                      ? 'text-[#1A382B] font-bold'
                      : 'text-[#121A26]/80 hover:text-[#070F1E]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenApply}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-[#1A382B] hover:bg-[#2E5844] active:scale-[0.98] transition-all duration-200 shadow-md border border-[#C5A059]/40 hover:border-[#E5C782] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A382B]"
            >
              <span>Admissions 2026–27</span>
              <ArrowRight className="w-4 h-4 text-[#E5C782]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="xl:hidden p-2 rounded-lg text-[#070F1E] hover:text-[#1A382B] hover:bg-[#F9F7F2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="xl:hidden fixed inset-0 z-50 bg-[#070F1E]/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/30 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-[#070F1E] flex items-center justify-center p-1.5 border border-[#C5A059]">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#C5A059]" fill="currentColor">
                      <circle cx="50" cy="50" r="44" stroke="#C5A059" strokeWidth="4" fill="none" />
                      <path d="M30 72 L50 24 L70 72 L58 72 L50 50 L42 72 Z" fill="#C5A059" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-serif font-bold text-sm text-[#070F1E] block">
                      Ranthambore International
                    </span>
                    <span className="text-[10px] text-[#2E5844] font-bold tracking-wider uppercase">
                      Sawai Madhopur · Portal
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  type="button"
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-[#121A26] hover:bg-[#F9F7F2]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col gap-1.5" aria-label="Mobile Menu Links">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      type="button"
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors text-left ${
                        isActive
                          ? 'bg-[#F9F7F2] text-[#1A382B] font-bold border-l-4 border-[#C5A059]'
                          : 'text-[#121A26] hover:bg-[#F9F7F2] hover:text-[#1A382B]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                    </button>
                  );
                })}
              </nav>

              {/* Extra Portal tools in Mobile */}
              <div className="mt-6 pt-4 border-t border-[#070F1E]/10 space-y-2">
                <span className="text-[11px] font-bold text-[#5A6475] uppercase tracking-wider block mb-2">
                  Institutional Portals
                </span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenParentPortal('login');
                  }}
                  className="w-full py-2 px-3 bg-[#F9F7F2] hover:bg-[#F2EDE2] rounded-lg text-xs font-semibold text-[#070F1E] flex items-center justify-between border border-[#C5A059]/20"
                >
                  <span className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#1A382B]" />
                    Parent ERP Dashboard
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5A6475]" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTCSearch();
                  }}
                  className="w-full py-2 px-3 bg-[#F9F7F2] hover:bg-[#F2EDE2] rounded-lg text-xs font-semibold text-[#070F1E] flex items-center justify-between border border-[#C5A059]/20"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#1A382B]" />
                    Transfer Certificate (TC)
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5A6475]" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenParentPortal('fee');
                  }}
                  className="w-full py-2 px-3 bg-[#F9F7F2] hover:bg-[#F2EDE2] rounded-lg text-xs font-semibold text-[#070F1E] flex items-center justify-between border border-[#C5A059]/20"
                >
                  <span className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#1A382B]" />
                    Online Fee Payment
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5A6475]" />
                </button>
              </div>
            </div>

            {/* Mobile Drawer Bottom Action */}
            <div className="pt-6 border-t border-[#070F1E]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                type="button"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1A382B] text-white font-bold text-sm hover:bg-[#2E5844] shadow-md border border-[#C5A059]/40"
              >
                <span>Apply for Session 2026–27</span>
                <ArrowRight className="w-4 h-4 text-[#E5C782]" />
              </button>

              <div className="text-center text-xs text-[#5A6475] pt-2">
                <p>Admissions Helpline: {SCHOOL_INFO.phone}</p>
                <p className="text-[11px] text-[#2E5844] font-semibold mt-0.5">
                  Sawai Madhopur, Rajasthan, India
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
