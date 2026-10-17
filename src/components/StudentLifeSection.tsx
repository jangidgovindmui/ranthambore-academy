import React from 'react';
import { HOUSE_SYSTEM } from '../data/schoolData';
import { Shield, Sparkles, Trophy, Users, Trees, Feather, Compass, HeartHandshake } from 'lucide-react';

export const StudentLifeSection: React.FC = () => {
  return (
    <section id="student-life" className="py-20 md:py-28 bg-[#FFFFFF] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
            <span className="w-5 h-[2px] bg-[#C5A059]"></span>
            <span>PASTORAL CHARTER & THE FOUR HOUSES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070F1E] tracking-tight leading-[1.15] mb-4">
            The Historic House System & <br />
            <span className="italic font-normal text-[#C5A059]">Collegiate Student Life.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#121A26]/85 leading-relaxed font-normal">
            Echoing the venerable traditions of premier residential academies, every scholar is initiated into one of our four houses. Through intense academic colloquiums, athletic tournaments, and pastoral mentorship, our house system inspires lifelong bonds and personal honor.
          </p>
        </div>

        {/* 4 Houses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {HOUSE_SYSTEM.map((house) => (
            <div
              key={house.id}
              className={`rounded-2xl p-7 border-2 ${house.borderClass} ${house.bgClass} flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <div>
                {/* House Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-md border border-white/30"
                    style={{ backgroundColor: house.color }}
                  >
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#070F1E]/70">
                    House Motto
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#070F1E] mb-1">
                  {house.name}
                </h3>
                <p className="font-serif italic text-xs font-semibold text-[#1A382B] mb-4">
                  “{house.motto}”
                </p>

                <div className="p-3.5 bg-white/90 rounded-xl border border-black/5 mb-4 text-xs text-[#070F1E]/90 shadow-sm">
                  <p className="font-bold text-[10px] uppercase tracking-wider text-[#5A6475]">
                    House Shield: <span className="text-[#070F1E] font-extrabold">{house.symbol}</span>
                  </p>
                  <p className="mt-1 text-xs text-[#121A26]/85 leading-relaxed">
                    {house.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-between text-[11px] text-[#5A6475]">
                <span className="font-medium">House Master:</span>
                <strong className="text-[#070F1E]">{house.houseMaster.split(',')[0]}</strong>
              </div>
            </div>
          ))}
        </div>

        {/* Co-Curricular & Student Leadership Clubs */}
        <div className="bg-[#F9F7F2] rounded-2xl p-8 sm:p-10 border border-[#C5A059]/30 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#1A382B] uppercase tracking-[0.2em]">
                University-Level Societies & Co-Scholastic Spectrum
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#070F1E] mt-1">
                Scholarly Guilds & Environmental Stewardship
              </h3>
            </div>
            <p className="text-xs text-[#5A6475] max-w-md">
              Over 50 student-led interest guilds operating weekly under faculty fellowship, from classical heritage arts to computational robotics and wildlife field biology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#C5A059]/25 shadow-sm hover:border-[#C5A059] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#1A382B] text-[#E5C782] flex items-center justify-center mb-3.5 border border-[#C5A059]/30">
                <Trees className="w-5 h-5 text-[#E5C782]" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#070F1E] mb-1.5">
                Ranthambore Tiger & Conservation Guild
              </h4>
              <p className="text-xs text-[#5A6475] leading-relaxed">
                Ecological surveys in the tiger sanctuary perimeter, camera trapping analysis, biodiversity census, and zero-plastic estate initiatives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#C5A059]/25 shadow-sm hover:border-[#C5A059] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#070F1E] text-[#E5C782] flex items-center justify-center mb-3.5 border border-[#C5A059]/40">
                <Sparkles className="w-5 h-5 text-[#E5C782]" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#070F1E] mb-1.5">
                Computational AI & STEM Laboratory
              </h4>
              <p className="text-xs text-[#5A6475] leading-relaxed">
                Micro-controller robotics, autonomous navigation prototypes, 3D printing design cycles, and competitive mathematical Olympiad coaching.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#C5A059]/25 shadow-sm hover:border-[#C5A059] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#1A382B] text-[#E5C782] flex items-center justify-center mb-3.5 border border-[#C5A059]/30">
                <Feather className="w-5 h-5 text-[#E5C782]" />
              </div>
              <h4 className="font-serif text-base font-bold text-[#070F1E] mb-1.5">
                Debating Union & Cultural Heritage Guild
              </h4>
              <p className="text-xs text-[#5A6475] leading-relaxed">
                Oxford-style parliamentary debate, Model UN colloquiums, Rajasthani miniature painting, and classical symphony ensembles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
