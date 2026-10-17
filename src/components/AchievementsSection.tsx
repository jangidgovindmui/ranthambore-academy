import React from 'react';
import { Award, BookOpen, Trophy, Compass, CheckCircle } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const statNumbers = [
    { value: '25+', label: 'Years of Proven Excellence', detail: 'Cultivating generations of leaders' },
    { value: '1500+', label: 'Scholars Enrolled', detail: 'Vibrant intellectual fellowship' },
    { value: '50+', label: 'University & Co-Scholastic Guilds', detail: 'Unbounded avenues for inquiry' },
    { value: '98%', label: 'Parental Trust Index', detail: 'Endorsed by our guardian community' },
  ];

  const highlights = [
    {
      title: 'Scholastic Distinction',
      icon: BookOpen,
      desc: 'Consistent board distinction scores across Foundational, Middle and Senior Secondary wings, paired with dedicated Ivy League & global university placement counseling.',
      points: ['Concept-driven analytical rigor', 'Advanced science & mathematics Olympiads', 'Personalized mentor-scholar tutoring'],
    },
    {
      title: 'Athletic Championship',
      icon: Trophy,
      desc: 'Disciplined physical education fostering endurance, teamwork, and sportsmanship across Olympic-spec athletics tracks, tennis courts, and equestrian grounds.',
      points: ['All-weather 400m athletic complex', 'Competitive inter-house tournaments', 'Certified national-level coaching staff'],
    },
    {
      title: 'Leadership & Ethical Voice',
      icon: Compass,
      desc: 'Nurturing visionary moral voices through student council governance, Ranthambore ecological missions, debating unions, and grassroots community impact.',
      points: ['Student Senate governance', 'Buffer-zone ecological restoration', 'Computational research & STEM initiatives'],
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#070F1E] text-white relative overflow-hidden border-b-2 border-[#C5A059]/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#1A382B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3.5 text-[#C5A059] font-bold text-xs tracking-[0.25em] uppercase">
            <span className="w-6 h-[2px] bg-[#C5A059]"></span>
            <span>MILESTONES OF SCHOLASTIC MERIT</span>
            <span className="w-6 h-[2px] bg-[#C5A059]"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-4">
            Grounding Academic Ambition In <br />
            <span className="italic font-normal text-[#E5C782]">Enduring Achievement.</span>
          </h2>
          <p className="text-base text-[#F9F7F2]/80 leading-relaxed font-normal">
            Our measure of excellence is reflected in the critical clarity, ethical poise, and global university admissions achieved by every young scholar who passes through our gates.
          </p>
        </div>

        {/* 4 Stat Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statNumbers.map((stat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0D1A30] border-2 border-[#C5A059]/30 text-center flex flex-col items-center justify-center hover:border-[#C5A059] transition-all shadow-lg"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#E5C782] tracking-tight">
                {stat.value}
              </span>
              <h4 className="text-sm font-bold text-white mt-2">{stat.label}</h4>
              <p className="text-[11px] text-[#F9F7F2]/60 mt-0.5">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* 3 Achievement Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D1A30] rounded-2xl p-8 border border-[#C5A059]/25 hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-13 h-13 rounded-xl bg-[#070F1E] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] mb-6 shadow-sm">
                    <Icon className="w-6 h-6 text-[#E5C782]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F9F7F2]/75 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-[#E5C782]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A382B] ring-1 ring-[#C5A059]" />
                      <span className="text-[#F9F7F2]/90 font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
