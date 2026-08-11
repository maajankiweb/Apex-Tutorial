'use client';

import Image from 'next/image';
import { ShieldCheck, Clock, Award, CheckCircle2, VolumeX, FileCheck, UserCheck, Flame, Sun } from 'lucide-react';

export default function DisciplineRules() {
  const pillars = [
    {
      icon: Clock,
      title: "Strict Punctuality",
      desc: "Batches start sharp at 6:00 AM. Punctuality is strictly enforced to maintain academic discipline.",
      color: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400"
    },
    {
      icon: VolumeX,
      title: "Silent & Focused Learning Zone",
      desc: "Classrooms are designed for a quiet, distraction-free environment conducive to deep study.",
      color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30 text-blue-400"
    },
    {
      icon: FileCheck,
      title: "Mandatory Weekly Tests",
      desc: "Compulsory weekly evaluation tests based strictly on the BSEB exam pattern.",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400"
    },
    {
      icon: UserCheck,
      title: "Personalized Guidance",
      desc: "Faculty dedicated time after lectures for resolving individual student doubts.",
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-[#050b17] text-white relative overflow-hidden" id="discipline">
      
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative aspect-[4/3] group">
              <Image
                src="/apex-facility.jpg"
                alt="Apex Tutorial Bettiah Focused Classroom Study Environment"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>

            {/* Floating Review Card Overlay */}
            <div className="absolute -bottom-6 -right-2 sm:right-4 bg-slate-900/95 backdrop-blur-xl text-white p-5 rounded-2xl border border-slate-700/80 shadow-2xl max-w-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-black">
                  <Flame size={15} />
                  <span>Verified Google Review</span>
                </div>
                <span className="text-[10px] bg-amber-400/20 text-amber-300 font-extrabold px-2 py-0.5 rounded border border-amber-400/30">
                  5.0 ★
                </span>
              </div>
              
              <blockquote className="text-xs italic text-slate-200 leading-relaxed font-serif">
                &ldquo;The class room is very good and the rules here are very good for studying.&rdquo;
              </blockquote>
              
              <div className="text-[11px] text-slate-400 font-semibold flex justify-between items-center pt-2 border-t border-slate-800">
                <span>— Ashish Kumar</span>
                <span className="text-blue-400 font-bold">Chawani, Bettiah</span>
              </div>
            </div>
          </div>

          {/* Right Content & Pillars Column */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Header */}
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-amber-500/20 border border-blue-500/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                <ShieldCheck size={14} className="text-amber-400" />
                <span>Academic Discipline Pillars</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight">
                Peaceful Atmosphere & Classroom Rules
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At Apex Tutorial, we maintain a quiet, highly disciplined environment designed specifically for BSEB Class 11th & 12th Science students preparing for board exams.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-slate-800/90 shadow-xl hover:border-slate-700 transition-all duration-300 space-y-3 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.color} border flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon size={18} />
                      </div>
                      <h3 className="text-sm font-extrabold font-display text-white group-hover:text-amber-400 transition-colors">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans pl-1">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 6:00 AM Callout Banner */}
            <div className="p-5 bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-slate-900 rounded-2xl border border-amber-400/30 flex items-start gap-4 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/40">
                <Sun size={20} />
              </div>

              <div className="text-xs text-slate-200 space-y-1">
                <p className="font-black text-sm text-amber-300 font-display flex items-center gap-2">
                  <span>Why 6:00 AM Early Morning Batches?</span>
                </p>
                <p className="text-slate-300 leading-relaxed font-medium">
                  Early morning classes allow students to attend lectures with fresh mental energy, complete coaching early, and dedicate full day hours to self-study revision for Bihar Board examinations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
