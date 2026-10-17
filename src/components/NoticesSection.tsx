import React, { useState } from 'react';
import { NOTICES } from '../data/schoolData';
import { Notice } from '../types';
import { ArrowRight, Bell, Calendar, X, FileText } from 'lucide-react';

export const NoticesSection: React.FC = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#F9F7F2] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3.5 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[2px] bg-[#C5A059]"></span>
              <span>ACADEMIC GAZETTE & CIRCULARS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070F1E] tracking-tight leading-[1.15]">
              Latest From <span className="italic font-normal text-[#C5A059]">RIA Gazette.</span>
            </h2>
            <p className="text-base text-[#121A26]/85 leading-relaxed font-normal mt-3">
              Official circulars, term assessment frameworks, and institutional directives for guardians, scholars, and faculty.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#5A6475] font-semibold">
            <Bell className="w-4 h-4 text-[#1A382B]" />
            <span>Updated weekly by the Directorate</span>
          </div>
        </div>

        {/* Notice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NOTICES.slice(0, 3).map((notice) => (
            <article
              key={notice.id}
              className="bg-white rounded-2xl p-8 border border-[#C5A059]/30 shadow-sm hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Clean unboxed metadata with dot separator */}
                <div className="flex items-center gap-2 text-xs text-[#5A6475] mb-4">
                  <span className="font-bold text-[#1A382B] uppercase tracking-wider">{notice.category}</span>
                  <span aria-hidden="true" className="text-[#C5A059]">·</span>
                  <span className="font-medium">{notice.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#070F1E] mb-3 group-hover:text-[#1A382B] transition-colors line-clamp-2">
                  {notice.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#121A26]/80 leading-relaxed line-clamp-3 mb-6">
                  {notice.excerpt}
                </p>
              </div>

              {/* Read More button */}
              <div className="pt-4 border-t border-[#C5A059]/20 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedNotice(notice)}
                  className="text-xs font-bold text-[#1A382B] group-hover:text-[#070F1E] inline-flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded"
                >
                  <span>Read Official Gazette</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
                <span className="text-[11px] font-semibold text-[#5A6475]">Ref: {notice.circularNo?.split('/')[2] || 'ADM'}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Notice Reader Modal */}
      {selectedNotice && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedNotice.title}
          className="fixed inset-0 z-50 bg-[#070F1E]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            className="max-w-xl w-full bg-white rounded-2xl p-7 sm:p-9 shadow-2xl border-2 border-[#C5A059] flex flex-col justify-between max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A059]/30 mb-5">
                <div className="flex items-center gap-2 text-xs text-[#5A6475]">
                  <span className="font-extrabold text-[#1A382B] uppercase tracking-wider">
                    {selectedNotice.category}
                  </span>
                  <span>·</span>
                  <span className="font-medium">{selectedNotice.date}</span>
                </div>
                <button
                  onClick={() => setSelectedNotice(null)}
                  type="button"
                  aria-label="Close Notice"
                  className="p-1.5 rounded-lg text-[#5A6475] hover:text-[#070F1E] hover:bg-[#F9F7F2]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-[#070F1E] mb-4">
                {selectedNotice.title}
              </h3>

              {/* Full Content */}
              <div className="text-sm text-[#121A26]/85 leading-relaxed space-y-3 mb-6">
                <p>{selectedNotice.fullContent}</p>
                <p className="text-xs text-[#5A6475] italic">
                  Note: Published under authority of Ranthambore International Academy Directorate.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-[#C5A059]/25 flex items-center justify-between">
              <div className="text-xs text-[#5A6475]">
                Issued by: <strong className="text-[#070F1E]">{selectedNotice.author}</strong>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="px-5 py-2.5 rounded-xl bg-[#070F1E] text-white text-xs font-bold hover:bg-[#0D1A30] border border-[#C5A059]/40"
              >
                Close Circular
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
