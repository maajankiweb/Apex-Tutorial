'use client';

import { Users, Award, Monitor, Star } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: "Students Coached",
    },
    {
      icon: Award,
      value: "10+",
      label: "Years of Results",
    },
    {
      icon: Monitor,
      value: "#1",
      label: "Smart Board Institute in Bettiah",
    },
    {
      icon: Star,
      value: "85%",
      label: "Average Score Improvement",
    },
  ];

  return (
    <section className="bg-[#050b17] border-y border-slate-800/80 py-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x divide-slate-800/80 gap-y-6 gap-x-2">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center px-4 py-2 space-y-2 group"
              >
                {/* Icon Box */}
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>

                {/* Stat Value */}
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {stat.value}
                </div>

                {/* Subtitle Label */}
                <div className="text-xs text-slate-400 font-semibold max-w-[160px] leading-tight">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
