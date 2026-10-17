import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass, ShieldCheck, Award, Sparkles, Calendar, BookOpen } from 'lucide-react';
import { TRUST_STATS } from '../data/schoolData';

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  const [counts, setCounts] = useState<{ [key: number]: number }>({ 0: 0, 1: 0, 2: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          TRUST_STATS.forEach((stat, index) => {
            const duration = 1600;
            const startTime = performance.now();
            const target = stat.value;

            const updateCounter = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.floor(easeOut * target);

              setCounts((prev) => ({ ...prev, [index]: currentVal }));

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                setCounts((prev) => ({ ...prev, [index]: target }));
              }
            };

            requestAnimationFrame(updateCounter);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('about');
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
    <section id="home" className="relative bg-[#F9F7F2] pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#C5A059]/25">
      {/* Subtle academic heraldic watermark background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] select-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="academicGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#070F1E" strokeWidth="1" />
              <circle cx="40" cy="40" r="3" fill="#C5A059" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#academicGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Heading, Eyebrow & Call-to-Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Academic Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-5 px-3 py-1 rounded-md bg-[#070F1E]/05 border border-[#C5A059]/30 text-[#1A382B] font-bold text-[11px] tracking-[0.25em] uppercase">
              <span className="w-4 h-[2px] bg-[#C5A059]" />
              <span>FOUNDED ON EXCELLENCE · SAWAI MADHOPUR</span>
            </div>

            {/* Main Majestic University Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#070F1E] tracking-tight leading-[1.08] mb-6">
              Where Learning <br />
              <span className="italic font-normal text-[#C5A059]">Meets</span>{' '}
              <span className="text-[#1A382B]">Possibility.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#121A26]/85 leading-relaxed font-normal max-w-2xl mb-9">
              A premier international academy rooted in the majestic heritage of Rajasthan, cultivating intellectual courage, moral fortitude, and global leadership for a rapidly changing world.
            </p>

            {/* Dual CTAs with University Styling */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenApply}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#1A382B] hover:bg-[#2E5844] active:scale-[0.98] shadow-lg border-2 border-[#C5A059]/50 hover:border-[#E5C782] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A382B]"
              >
                <Calendar className="w-4 h-4 text-[#E5C782]" />
                <span>Admissions 2026–27</span>
                <ArrowRight className="w-4 h-4 text-[#E5C782]" />
              </button>

              <button
                onClick={handleExploreClick}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-bold text-[#070F1E] bg-white hover:bg-[#F9F7F2] active:scale-[0.98] border border-[#C5A059]/40 shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
              >
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <span>Explore Campus & Ethos</span>
              </button>
            </div>

            {/* Institutional Seal Footnote */}
            <div className="flex items-center gap-2.5 text-xs text-[#5A6475] pt-3 border-t border-[#070F1E]/10 w-full sm:w-auto">
              <ShieldCheck className="w-4 h-4 text-[#1A382B] shrink-0" />
              <span>Affiliated to premier secondary standards · Nursery through Grade 11</span>
            </div>
          </div>

          {/* Right Column: Prestigious University Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/35 bg-white group">
              {/* Image Container with Elegant Overlay */}
              <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden bg-[#070F1E]">
                <img
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
                  alt="Ranthambore International Academy Campus Architecture"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-[#070F1E]/30 to-transparent pointer-events-none" />

                {/* Top Badge: Sawai Madhopur Acreage */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#070F1E]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#C5A059]/40 text-white text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] ring-2 ring-[#C5A059]/30" />
                  <span className="tracking-wide">20-Acre Heritage Eco-Campus</span>
                </div>

                {/* Bottom Overlay Card Details */}
                <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#E5C782] uppercase block mb-1">
                    An Sanctuary of Enlightenment
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-white mb-2">
                    Nurturing Tomorrow's Global Thinkers
                  </h3>
                  <p className="text-xs text-[#F9F7F2]/85 line-clamp-2">
                    Sandstone verandas and courtyards designed for deep inquiry, collaborative debate, and holistic development.
                  </p>
                </div>
              </div>

              {/* Gilded Award Strip */}
              <div className="p-4 bg-white border-t border-[#C5A059]/25 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#070F1E] flex items-center justify-center text-[#C5A059] border border-[#C5A059]/40">
                    <Award className="w-5 h-5 text-[#E5C782]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#070F1E]">Eminent Pedagogy Standard</h4>
                    <p className="text-[11px] text-[#5A6475]">Holistic curriculum rooted in cultural integrity</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-[#1A382B] uppercase tracking-wider block">Intake</span>
                  <span className="text-xs font-bold text-[#070F1E]">July 2026</span>
                </div>
              </div>
            </div>

            {/* University gold ornamental corner frame */}
            <div className="absolute -bottom-3 -right-3 w-32 h-32 border-r-2 border-b-2 border-[#C5A059] rounded-br-2xl -z-10 pointer-events-none hidden sm:block" />
          </div>
        </div>

        {/* Prestigious Trust Statistics Strip with Gilded Numbers */}
        <div
          ref={statsRef}
          className="mt-16 pt-10 border-t-2 border-[#C5A059]/25 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
        >
          {TRUST_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-6 rounded-xl bg-white border border-[#C5A059]/25 shadow-sm hover:border-[#C5A059] hover:shadow-md transition-all"
            >
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#070F1E] tracking-tight">
                    {counts[idx] ?? 0}
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C5A059]">
                    {stat.suffix}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#121A26] mt-1">{stat.label}</h4>
                <p className="text-xs text-[#5A6475] mt-0.5">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
