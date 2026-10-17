import React from 'react';
import { Volume2, ChevronRight, FileText } from 'lucide-react';
import { NOTICES } from '../data/schoolData';

interface TickerBarProps {
  onViewNotices: () => void;
}

export const TickerBar: React.FC<TickerBarProps> = ({ onViewNotices }) => {
  return (
    <div className="bg-[#070F1E] text-white border-b-2 border-[#C5A059]/40 text-xs py-2.5 px-4 relative z-30 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center gap-3.5">
        {/* Label Tag */}
        <div className="shrink-0 flex items-center gap-1.5 bg-[#C5A059] text-[#070F1E] font-extrabold px-3 py-1 rounded text-[11px] tracking-widest uppercase shadow-sm">
          <Volume2 className="w-3.5 h-3.5" />
          <span>Official Bulletins</span>
        </div>

        {/* Ticker Content */}
        <div className="flex-1 overflow-hidden whitespace-nowrap relative">
          <div className="inline-block animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer" onClick={onViewNotices}>
            {NOTICES.map((n) => (
              <span key={n.id} className="inline-flex items-center mx-6 text-[#F9F7F2]/90 hover:text-[#E5C782] transition-colors">
                <span className="text-[#E5C782] font-bold mr-1.5 tracking-wide">[{n.circularNo || 'CIRCULAR'}]:</span>
                <span className="font-medium">{n.title} ({n.date})</span>
                <span className="mx-4 text-[#C5A059]/60">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* Quick link button */}
        <button
          onClick={onViewNotices}
          type="button"
          className="shrink-0 hidden md:flex items-center gap-1.5 text-[11px] text-[#E5C782] hover:text-white font-bold transition-colors border-l border-white/20 pl-3.5"
        >
          <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Gazette Archive</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
