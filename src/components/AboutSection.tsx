import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const highlights = [
    {
      num: '01',
      title: 'Student First',
      desc: 'Every scholar is known, valued, and challenged to exceed ordinary expectations.',
    },
    {
      num: '02',
      title: 'Future Ready',
      desc: 'Rigorous cognitive inquiry, scientific literacy, and global perspective beyond textbooks.',
    },
    {
      num: '03',
      title: 'Holistic Growth',
      desc: 'Harmonizing deep intellect with athletic stamina, artistic grace, and unshakeable character.',
    },
  ];

  const handleScrollToAcademics = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLearnMore) {
      onLearnMore();
      return;
    }
    const target = document.getElementById('academics');
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
    <section id="about" className="py-20 md:py-28 bg-[#F9F7F2] relative overflow-hidden border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Campus & Learning Environment Visual */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Frame with University Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/35 bg-white">
                <div className="h-[420px] sm:h-[480px] w-full bg-[#070F1E] relative">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
                    alt="Active interactive learning session at Ranthambore International Academy"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-[#070F1E]/20 to-transparent pointer-events-none" />

                  {/* Caption badge at bottom of image */}
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <span className="text-[10px] font-bold text-[#E5C782] uppercase tracking-[0.2em] block">
                      A Sanctuary for Inquiry
                    </span>
                    <p className="font-serif text-lg font-bold text-white mt-1">
                      “Where student ideas are rigorously explored, debated, and nurtured.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Offset Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#070F1E] text-white p-5 rounded-2xl border-2 border-[#C5A059] shadow-2xl max-w-[240px] sm:max-w-[270px] z-20">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#1A382B] text-[#E5C782] border border-[#C5A059]/40 flex items-center justify-center font-serif text-xl font-bold shrink-0">
                    1:12
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Faculty-Scholar Ratio</h4>
                    <p className="text-[11px] text-[#E5C782]">Personalized scholarly tutelage</p>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="absolute -top-4 -left-4 w-28 h-28 border-l-2 border-t-2 border-[#C5A059] rounded-tl-2xl -z-10 hidden sm:block" />
            </div>
          </div>

          {/* Right Column: School Philosophy & Highlights */}
          <div className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3.5 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[2px] bg-[#C5A059]"></span>
              <span>DISCOVER RIA · INSTITUTIONAL ETHOS</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070F1E] tracking-tight leading-[1.15] mb-6">
              More Than A School. <br />
              <span className="italic font-normal text-[#C5A059]">A Seat of Possibility.</span>
            </h2>

            {/* Philosophy Content */}
            <div className="space-y-4 text-base text-[#121A26]/85 leading-relaxed font-normal mb-8">
              <p>
                Situated on the verdant perimeter of Sawai Madhopur, Ranthambore International Academy is engineered to the highest standards of international schooling. We believe that authentic education is not a mechanical preparation for exams, but a profound awakening of human intellect and conscience.
              </p>
              <p>
                Our students are immersed in advanced scientific research, expressive fine arts, bilingual oratory, and competitive athletics—grounded by the enduring moral values of our heritage.
              </p>
            </div>

            {/* Three Numbered Pillars */}
            <div className="w-full space-y-4 pt-4 pb-8 border-y border-[#C5A059]/25 mb-8">
              {highlights.map((item) => (
                <div key={item.num} className="flex items-start gap-4">
                  <span className="font-serif font-extrabold text-xl text-[#C5A059] shrink-0 pt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-[#070F1E] flex items-center gap-1.5">
                      <span>{item.title}</span>
                      <span className="text-[#5A6475] font-normal text-xs">— {item.desc.split('.')[0]}.</span>
                    </h3>
                    <p className="text-xs text-[#5A6475] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleScrollToAcademics}
              type="button"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#1A382B] hover:bg-[#2E5844] active:scale-[0.98] transition-all shadow-md border border-[#C5A059]/50 hover:border-[#E5C782] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A382B]"
            >
              <span>Discover Our Academic Approach</span>
              <ArrowRight className="w-4 h-4 text-[#E5C782]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
