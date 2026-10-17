import React from 'react';
import { Calendar, ArrowUp } from 'lucide-react';

interface SideEnquiryTabProps {
  onOpenApply: () => void;
  showBackToTop: boolean;
  onScrollToTop: () => void;
}

export const SideEnquiryTab: React.FC<SideEnquiryTabProps> = ({
  onOpenApply,
  showBackToTop,
  onScrollToTop,
}) => {
  return (
    <>
      {/* Pinned University Side Banner Tab (Right edge) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:block">
        <button
          onClick={onOpenApply}
          type="button"
          aria-label="Open Admissions Registration Form"
          className="bg-[#1A382B] hover:bg-[#2E5844] text-white py-4 px-3.5 rounded-l-2xl shadow-2xl border-l-2 border-y-2 border-[#C5A059] flex items-center gap-2 [writing-mode:vertical-rl] rotate-180 font-bold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:pl-5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
        >
          <span className="flex items-center gap-1.5 rotate-90 text-[#E5C782]">
            <Calendar className="w-4 h-4" />
          </span>
          <span className="text-[#E5C782]">Admissions 2026–27</span>
          <span className="text-white/80 font-medium">| Apply Online</span>
        </button>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={onScrollToTop}
            type="button"
            aria-label="Back to top"
            className="p-3.5 rounded-full bg-white text-[#070F1E] shadow-xl border-2 border-[#C5A059]/40 hover:bg-[#070F1E] hover:text-[#E5C782] hover:border-[#C5A059] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      )}
    </>
  );
};
