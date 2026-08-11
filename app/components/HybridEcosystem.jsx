'use client';

import { Tv, Video, Wifi, FileText, MessageSquare, CheckCircle2, Monitor, Laptop, PlayCircle, Smartphone } from 'lucide-react';

export default function HybridEcosystem() {
  const features = [
    {
      icon: Tv,
      title: "Smart Board Technology",
      desc: "Region's first institute with Interactive Smart Board — visual concepts stay forever.",
      color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400"
    },
    {
      icon: Video,
      title: "Recorded Lectures",
      desc: "Miss a class? Recorded lecture instantly available on your dashboard.",
      color: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400"
    },
    {
      icon: Wifi,
      title: "Hybrid Attendance",
      desc: "Join from classroom or home — learning never stops.",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400"
    },
    {
      icon: FileText,
      title: "Digital Study Notes",
      desc: "PDF notes for every chapter. Download anytime, revise anywhere.",
      color: "from-orange-500/20 to-amber-500/10 border-orange-500/30 text-orange-400"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Doubt Support",
      desc: "Doubts solve hote hain on WhatsApp — fast, personal, and effective.",
      color: "from-teal-500/20 to-cyan-500/10 border-teal-500/30 text-teal-400"
    },
    {
      icon: CheckCircle2,
      title: "Bihar Board Focused",
      desc: "100% pattern-aligned. Every topic mapped to Bihar Board exam format.",
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-[#050b18] text-white relative overflow-hidden border-t border-slate-800/80" id="ecosystem">
      
      {/* Decorative Radial Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <p className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
            SMART CLASSROOM EXPERIENCE
          </p>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
            Offline + Online, Ek Saath
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            Bharat ka future hybrid hai. Apex Tutorial ka ecosystem students ko prepare karta hai — Smart Board classroom se lekar mobile screen tak.
          </p>
        </div>

        {/* Main Content Grid: Left 6 Cards + Right Hub Ecosystem Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 6 Feature Cards (2 cols x 3 rows) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-slate-800/90 shadow-xl hover:border-amber-400/40 transition-all duration-300 space-y-2.5 group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-extrabold font-display text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans pl-1">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Apex Tutorial Hub Ecosystem Box (Matching Reference Image) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-xl p-5 sm:p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-8 relative overflow-hidden text-center group hover:border-amber-400/40 transition-all">
              
              {/* Top Circular Hub Emblem */}
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-20 h-20 rounded-full bg-slate-950 border-2 border-amber-400 flex flex-col items-center justify-center shadow-xl text-amber-400 space-y-0.5">
                  <Monitor size={24} />
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
                    Apex Hub
                  </span>
                </div>
              </div>

              {/* 4 Ecosystem Quad Grid Boxes */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Box 1: Classroom */}
                <div className="bg-blue-950/80 p-4 rounded-2xl border border-blue-800/60 text-center space-y-1 hover:scale-105 transition-transform">
                  <p className="text-sm font-black text-white font-display">Classroom</p>
                  <p className="text-[10px] text-blue-200 font-medium">Smart Board + Teacher</p>
                </div>

                {/* Box 2: Online Portal */}
                <div className="bg-slate-950/90 p-4 rounded-2xl border border-slate-800 text-center space-y-1 hover:scale-105 transition-transform">
                  <p className="text-sm font-black text-white font-display">Online Portal</p>
                  <p className="text-[10px] text-slate-300 font-medium">Videos + Notes + Tests</p>
                </div>

                {/* Box 3: WhatsApp */}
                <div className="bg-emerald-950/80 p-4 rounded-2xl border border-emerald-800/60 text-center space-y-1 hover:scale-105 transition-transform">
                  <p className="text-sm font-black text-white font-display">WhatsApp</p>
                  <p className="text-[10px] text-emerald-200 font-medium">Doubt solving anytime</p>
                </div>

                {/* Box 4: YouTube */}
                <div className="bg-purple-950/80 p-4 rounded-2xl border border-purple-800/60 text-center space-y-1 hover:scale-105 transition-transform">
                  <p className="text-sm font-black text-white font-display">YouTube</p>
                  <p className="text-[10px] text-purple-200 font-medium">Free demo lectures</p>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
