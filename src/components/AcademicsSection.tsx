import React from 'react';
import { BookOpen, Compass, GraduationCap, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';

interface AcademicsSectionProps {
  onSelectProgram?: (programId: string) => void;
  onOpenApply: () => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onSelectProgram, onOpenApply }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#E5C782]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#E5C782]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#E5C782]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#E5C782]" />;
    }
  };

  return (
    <section id="academics" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#C5A059]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 mb-3.5 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
            <span className="w-5 h-[2px] bg-[#C5A059]"></span>
            <span>ACADEMIC FACULTIES & CURRICULUM</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070F1E] tracking-tight leading-[1.15] mb-4">
            Learning Designed For <br />
            <span className="italic font-normal text-[#C5A059]">Curious Minds.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#121A26]/85 leading-relaxed font-normal">
            Calibrated to the rigorous standards of global universities, our four-tier academic framework fosters disciplined critical thinking, scientific inquiry, and independent research.
          </p>
        </div>

        {/* 4 Premium Academic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ACADEMIC_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="group bg-[#F9F7F2] rounded-2xl p-7 border border-[#C5A059]/30 hover:border-[#C5A059] hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl relative"
            >
              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-extrabold text-[#C5A059] group-hover:text-[#070F1E] transition-colors">
                    {program.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#070F1E] border border-[#C5A059]/40 flex items-center justify-center transition-colors shadow-sm">
                    {getIcon(program.icon)}
                  </div>
                </div>

                {/* Subtitle / Grades */}
                <span className="text-[11px] font-bold text-[#1A382B] tracking-wider uppercase block mb-1">
                  {program.subtitle}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#070F1E] mb-3 group-hover:text-[#1A382B] transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#121A26]/80 leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-[#C5A059]/20">
                  {program.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                      <span className="text-xs text-[#5A6475] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Action */}
              <div className="pt-6 mt-6 border-t border-[#C5A059]/20 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenApply}
                  className="text-xs font-bold text-[#1A382B] group-hover:text-[#070F1E] flex items-center gap-1 transition-colors"
                >
                  <span>Admission Guidelines</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* University Curriculum Framework Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-[#070F1E] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-2 border-[#C5A059]/40 shadow-2xl">
          <div>
            <span className="text-xs font-bold text-[#E5C782] tracking-[0.2em] uppercase">
              Rigorous Academic Architecture
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1.5">
              Integrated Experiential & University Advisory Tracks
            </h4>
            <p className="text-xs sm:text-sm text-[#F9F7F2]/80 mt-1 max-w-2xl leading-relaxed">
              Equipping scholars with Olympiad research capabilities, advanced laboratories, and global university placement mentorship.
            </p>
          </div>
          <button
            onClick={onOpenApply}
            type="button"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#1A382B] hover:bg-[#2E5844] text-white text-xs font-bold border border-[#C5A059]/50 transition-colors shadow-md"
          >
            Download Academic Prospectus
          </button>
        </div>
      </div>
    </section>
  );
};
