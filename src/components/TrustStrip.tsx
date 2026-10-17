import React from 'react';
import { Compass, Cpu, GraduationCap, ShieldCheck } from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../data/schoolData';

export const TrustStrip: React.FC = () => {
  const icons = [Compass, Cpu, GraduationCap, ShieldCheck];

  return (
    <section className="bg-white border-b border-[#C5A059]/20 py-8 relative z-10" aria-label="Core Academic Commitments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#C5A059]/20">
          {TRUST_STRIP_ITEMS.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.label}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-3.5 ${
                  idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-[#070F1E] flex items-center justify-center text-[#C5A059] shrink-0 border border-[#C5A059]/40 shadow-sm">
                  <Icon className="w-5 h-5 text-[#E5C782]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#070F1E] tracking-tight">{item.label}</h4>
                  <p className="text-xs text-[#5A6475] mt-0.5 line-clamp-1">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
