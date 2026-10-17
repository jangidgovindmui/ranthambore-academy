import React from 'react';
import { BUS_ROUTES } from '../data/schoolData';
import { Bus, ShieldCheck, MapPin, Clock, CheckCircle } from 'lucide-react';

export const TransportSection: React.FC = () => {
  return (
    <section id="transport" className="py-20 md:py-28 bg-[#F9F7F2] relative border-b border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3.5 text-[#1A382B] font-bold text-xs tracking-[0.25em] uppercase">
            <span className="w-5 h-[2px] bg-[#C5A059]"></span>
            <span>SECURE TRANSIT & DISTRICT CONNECTIVITY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#070F1E] tracking-tight leading-[1.15] mb-4">
            Safe Transportation <br />
            <span className="italic font-normal text-[#C5A059]">& District Bus Routes.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#121A26]/85 leading-relaxed font-normal">
            RIA maintains an executive fleet of air-conditioned cruisers equipped with live GPS tracking, speed governors, CCTV cameras, and trained female attendants across Sawai Madhopur district.
          </p>
        </div>

        {/* Safety Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Real-Time GPS Tracking', desc: 'Live bus monitoring on parent app' },
            { label: 'Verified Female Attendants', desc: 'On-board assistance on every route' },
            { label: 'Speed Limit Regulated', desc: 'Govt. compliant 40 km/h governors' },
            { label: 'Onboard CCTV & First Aid', desc: 'Continuous camera surveillance' },
          ].map((item, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border border-[#C5A059]/30 shadow-sm">
              <div className="flex items-center gap-2 text-[#1A382B] font-bold text-xs uppercase mb-1">
                <CheckCircle className="w-4 h-4 text-[#C5A059]" />
                <span>{item.label}</span>
              </div>
              <p className="text-[11px] text-[#5A6475]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 4 Bus Routes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BUS_ROUTES.map((route) => (
            <div
              key={route.routeNumber}
              className="bg-white rounded-2xl p-7 border border-[#C5A059]/30 shadow-sm hover:border-[#C5A059] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3.5 border-b border-[#C5A059]/20 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#070F1E] flex items-center justify-center text-[#E5C782] shadow-sm">
                      <Bus className="w-5 h-5 text-[#E5C782]" />
                    </div>
                    <div>
                      <span className="font-extrabold text-[11px] text-[#C5A059] uppercase tracking-widest block">
                        {route.routeNumber}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[#070F1E]">
                        {route.routeName}
                      </h4>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#1A382B] font-bold bg-[#1A382B]/10 px-2.5 py-0.5 rounded-full border border-[#1A382B]/20">
                    Active Route
                  </span>
                </div>

                {/* Major Stops */}
                <div className="mb-4">
                  <span className="text-xs font-bold text-[#070F1E] block mb-2">
                    Key Stop Points & Pickup Nodes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {route.majorStops.map((stop, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs text-[#121A26] bg-[#F9F7F2] px-3 py-1 rounded-md border border-[#C5A059]/20 flex items-center gap-1.5"
                      >
                        <MapPin className="w-3 h-3 text-[#C5A059]" />
                        <span>{stop}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Schedule & Vehicle info */}
              <div className="pt-4 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#5A6475]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#1A382B]" />
                  <span>{route.timing}</span>
                </div>
                <div className="text-[11px] font-bold text-[#070F1E]">
                  {route.vehicleType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
