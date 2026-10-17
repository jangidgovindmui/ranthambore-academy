import React from 'react';
import { WHY_CHOOSE_BENEFITS } from '../data/schoolData';
import { Shield, Sparkles, Users, Award, HeartHandshake, Compass } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const iconMap: { [key: string]: React.ReactNode } = {
    educators: <Users className="w-5 h-5 text-[#E5C782]" />,
    'student-centered': <Compass className="w-5 h-5 text-[#E5C782]" />,
    'tech-classrooms': <Sparkles className="w-5 h-5 text-[#E5C782]" />,
    'sports-arts': <Award className="w-5 h-5 text-[#E5C782]" />,
    'safe-environment': <Shield className="w-5 h-5 text-[#E5C782]" />,
    'values-character': <HeartHandshake className="w-5 h-5 text-[#E5C782]" />,
  };

  return (
    <section className="py-20 md:py-28 bg-[#F9F7F2] relative overflow-hidden border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
            <span className="w-5 h-[2px] bg-[#C5A059]"></span>
            <span>INSTITUTIONAL MERIT & DISTINCTION</span>
            <span className="w-5 h-[2px] bg-[#C5A059]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070F1E] tracking-tight leading-[1.15] mb-4">
            Why Discerning Families <span className="italic font-normal text-[#C5A059]">Choose RIA</span>
          </h2>
          <p className="text-base sm:text-lg text-[#121A26]/85 leading-relaxed font-normal">
            A rare synthesis of timeless cultural gravitas, progressive university-standard pedagogy, and uncompromising pastoral care.
          </p>
        </div>

        {/* Clean Editorial University Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_BENEFITS.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl p-8 border border-[#C5A059]/30 shadow-sm hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Pillar kicker */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#C5A059] uppercase">
                    {benefit.pillar}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#070F1E] flex items-center justify-center border border-[#C5A059]/40 group-hover:border-[#E5C782] transition-colors shadow-sm">
                    {iconMap[benefit.id]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#070F1E] mb-3 group-hover:text-[#1A382B] transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#121A26]/80 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Line Accent */}
              <div className="pt-6 mt-6 border-t border-[#C5A059]/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1A382B]" />
                <span className="text-[11px] font-bold text-[#5A6475] uppercase tracking-wider">RIA Charter Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
