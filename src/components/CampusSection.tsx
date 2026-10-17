import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { FACILITIES } from '../data/schoolData';
import { Facility } from '../types';

interface CampusSectionProps {
  onSelectFacility?: (facility: Facility) => void;
  onBookVisit: () => void;
}

export const CampusSection: React.FC<CampusSectionProps> = ({ onBookVisit }) => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const tags = ['ALL', 'CLASSROOM', 'LABORATORY', 'LIBRARY', 'SPORTS', 'ARTS', 'CAMPUS'];

  const filteredFacilities =
    selectedTag === 'ALL'
      ? FACILITIES
      : FACILITIES.filter((f) => f.tag === selectedTag);

  return (
    <section id="campus" className="py-20 md:py-28 bg-white relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3.5 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
              <span className="w-5 h-[2px] bg-[#C5A059]"></span>
              <span>CAMPUS HERITAGE & INFRASTRUCTURE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070F1E] tracking-tight leading-[1.15]">
              A Campus Designed <br />
              <span className="italic font-normal text-[#C5A059]">For Grand Possibility.</span>
            </h2>
            <p className="text-base text-[#121A26]/85 leading-relaxed font-normal mt-4">
              Sprawled across 20 acres of lush, gated estate in Sawai Madhopur, our campus is architectural testament to intellectual dignity, state-of-the-art laboratories, and collegiate tranquility.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onBookVisit}
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#1A382B] hover:bg-[#2E5844] active:scale-[0.98] transition-all shadow-md border border-[#C5A059]/40 hover:border-[#E5C782]"
            >
              <span>Schedule A Campus Tour</span>
              <ArrowRight className="w-4 h-4 text-[#E5C782]" />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-9 text-xs font-bold scrollbar-none" role="tablist" aria-label="Campus Facility Categories">
          {tags.map((tag) => {
            const isCurrent = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2.5 rounded-xl transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] ${
                  isCurrent
                    ? 'bg-[#070F1E] text-[#E5C782] border border-[#C5A059] shadow-md'
                    : 'bg-[#F9F7F2] text-[#5A6475] hover:text-[#070F1E] hover:bg-[#F2EDE2] border border-[#C5A059]/20'
                }`}
              >
                {tag === 'ALL' ? 'All Faculties & Grounds' : tag}
              </button>
            );
          })}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="group bg-[#F9F7F2] rounded-2xl overflow-hidden border border-[#C5A059]/30 hover:border-[#C5A059] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Facility Image with Fallback */}
              <div className="relative h-52 w-full bg-[#070F1E] overflow-hidden">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070F1E] via-[#070F1E]/20 to-transparent pointer-events-none" />

                {/* Facility Tag Badge */}
                <div className="absolute top-3 left-3 bg-[#070F1E]/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-extrabold text-[#E5C782] tracking-widest uppercase border border-[#C5A059]/40">
                  {facility.tag}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#070F1E] mb-2 group-hover:text-[#1A382B] transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs text-[#121A26]/80 leading-relaxed mb-4">
                    {facility.description}
                  </p>
                </div>

                {/* Key specs */}
                <div className="pt-3.5 border-t border-[#C5A059]/20 space-y-1.5">
                  {facility.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#5A6475]">
                      <Check className="w-3.5 h-3.5 text-[#1A382B] shrink-0 font-bold" />
                      <span className="font-medium text-[#121A26]/90">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
