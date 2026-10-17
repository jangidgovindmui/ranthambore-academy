import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenApply: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenApply }) => {
  const quickLinks = [
    { label: 'About RIA & Charter', href: '#about' },
    { label: 'Academics & Curricula', href: '#academics' },
    { label: 'Campus & Infrastructure', href: '#campus' },
    { label: 'The Four Houses', href: '#student-life' },
    { label: 'Transport & Bus Routes', href: '#transport' },
    { label: 'Achievements & Distinction', href: '#achievements' },
    { label: 'Moments Gallery', href: '#gallery' },
    { label: 'Admissions 2026–27', href: '#admissions' },
    { label: 'Mandatory Disclosure', href: '#disclosure' },
    { label: 'Contact Secretariat', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#070F1E] text-white pt-16 pb-12 border-t-2 border-[#C5A059]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Identity & Crest */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-xl bg-[#0D1A30] border-2 border-[#C5A059] flex items-center justify-center p-2 shadow-inner">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#C5A059]" fill="currentColor">
                  <circle cx="50" cy="50" r="46" stroke="#C5A059" strokeWidth="3" fill="none" />
                  <path d="M30 74 L50 22 L70 74 L58 74 L50 50 L42 74 Z" fill="#C5A059" />
                  <circle cx="50" cy="38" r="5" fill="#E5C782" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block">
                  Ranthambore <span className="text-[#C5A059]">International</span> Academy
                </span>
                <span className="text-[11px] text-[#C5A059] uppercase font-bold tracking-[0.2em]">
                  Sawai Madhopur · Rajasthan
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base text-[#E5C782]">
              “{SCHOOL_INFO.tagline}”
            </p>

            <p className="text-xs sm:text-sm text-[#F9F7F2]/75 leading-relaxed max-w-sm">
              An institution dedicated to academic brilliance, moral fortitude, environmental empathy, and global leadership in the historic heart of Rajasthan.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { name: 'Instagram', icon: Instagram },
                { name: 'Facebook', icon: Facebook },
                { name: 'YouTube', icon: Youtube },
                { name: 'LinkedIn', icon: LinkedInIcon },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href="#social"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Demo Mode: Navigating to official ${s.name} channel.`);
                    }}
                    aria-label={`Visit RIA on ${s.name} (Demo)`}
                    className="w-10 h-10 rounded-xl bg-[#0D1A30] border border-[#C5A059]/30 flex items-center justify-center text-[#E5C782] hover:bg-[#1A382B] hover:text-white hover:border-[#C5A059] transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">
              University Portals
            </h4>
            <ul className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-[#F9F7F2]/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-[#E5C782] hover:underline underline-offset-4 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: School Info & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">
              Secretariat Coordinates
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-[#F9F7F2]/80">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{SCHOOL_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenApply}
                type="button"
                className="w-full py-3 px-4 rounded-xl bg-[#1A382B] hover:bg-[#2E5844] text-white text-xs font-bold border-2 border-[#C5A059]/40 hover:border-[#E5C782] transition-colors shadow-md"
              >
                Apply for Academic Session 2026–27
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A6475]">
          <div>
            <p className="text-white/80">
              © 2026 Ranthambore International Academy. <span className="text-[#E5C782] font-semibold">Demo Presentation Website</span>.
            </p>
            <p className="text-[11px] text-[#5A6475] mt-0.5">
              Designed as a showcase for prospective institutional clients.
            </p>
          </div>

          <div className="flex items-center gap-6 text-[#F9F7F2]/75">
            <button
              onClick={() => onOpenLegal('privacy')}
              type="button"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              type="button"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms of Demonstration
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Safe fallback for Linkedin icon if naming discrepancy
const LinkedInIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
