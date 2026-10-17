import React from 'react';
import { ArrowRight, Calendar, UserCheck, CheckCircle2, Phone } from 'lucide-react';
import { ADMISSION_STEPS, SCHOOL_INFO } from '../data/schoolData';

interface AdmissionsSectionProps {
  onOpenApply: () => void;
  onBookVisit: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenApply, onBookVisit }) => {
  return (
    <section id="admissions" className="py-20 md:py-28 bg-white relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card */}
        <div className="relative rounded-3xl bg-[#070F1E] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 mb-16">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A382B]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl text-left">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 mb-4 bg-[#0D1A30] px-4 py-1.5 rounded-lg border border-[#C5A059]/50 text-xs font-bold text-[#E5C782] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] ring-2 ring-[#C5A059]/40 animate-pulse" />
              <span>Admissions Open · {SCHOOL_INFO.session}</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-4">
              Begin Their Journey <br />
              <span className="italic font-normal text-[#E5C782]">With Ranthambore Academy.</span>
            </h2>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-[#F9F7F2]/85 leading-relaxed font-normal mb-8 max-w-2xl">
              We welcome applications from motivated young learners who seek to think critically, lead ethically, and cultivate lifelong curiosity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenApply}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#1A382B] hover:bg-[#2E5844] active:scale-[0.98] shadow-lg border border-[#C5A059]/50 hover:border-[#E5C782] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1A382B]"
              >
                <span>Apply Online (2026–27)</span>
                <ArrowRight className="w-4 h-4 text-[#E5C782]" />
              </button>

              <button
                onClick={onBookVisit}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white bg-transparent hover:bg-white/10 active:scale-[0.98] border border-[#C5A059]/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Book a Guided Campus Tour</span>
              </button>
            </div>
          </div>
        </div>

        {/* 5-Step Admissions Process */}
        <div>
          <div className="text-left mb-10">
            <div className="inline-flex items-center gap-2 mb-2 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[2px] bg-[#C5A059]"></span>
              <span>ADMISSION ROADMAP</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#070F1E]">
              A Rigorous, Transparent 5-Step Process
            </h3>
            <p className="text-sm text-[#5A6475] mt-1">
              Engineered to understand your child's innate potential and align with family aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {ADMISSION_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-[#F9F7F2] rounded-2xl p-6 border border-[#C5A059]/30 hover:border-[#C5A059] hover:bg-white transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg"
              >
                <div>
                  <span className="font-serif text-3xl font-extrabold text-[#C5A059] group-hover:text-[#1A382B] transition-colors block mb-4">
                    {step.step}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#070F1E] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#121A26]/80 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] text-[#5A6475]">
                  <span className="font-semibold">Step {idx + 1} of 5</span>
                  <CheckCircle2 className="w-4 h-4 text-[#1A382B]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admissions Help Desk Strip */}
        <div className="mt-14 p-6 rounded-2xl bg-[#F9F7F2] border border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#070F1E] flex items-center justify-center text-[#C5A059] border border-[#C5A059]/40 shadow-sm shrink-0">
              <Phone className="w-5 h-5 text-[#E5C782]" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#070F1E]">Need personal admissions advisory?</h4>
              <p className="text-xs text-[#5A6475]">Admissions coordinators available Mon–Sat (8:00 AM – 4:00 PM).</p>
            </div>
          </div>
          <button
            onClick={onBookVisit}
            type="button"
            className="text-xs font-bold text-[#070F1E] hover:text-white hover:bg-[#070F1E] px-5 py-2.5 rounded-lg bg-white border border-[#C5A059]/40 transition-colors shadow-sm"
          >
            Connect With Admissions Dean
          </button>
        </div>
      </div>
    </section>
  );
};
