'use client';

import Image from 'next/image';
import { Quote, Award, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function DirectorsMessage() {
  return (
    <section className="py-16 bg-slate-900/90 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-950 p-5 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Decorative Glow Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Portrait Column */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-amber-500/50 shadow-2xl group">
                <Image
                  src="/director.jpg"
                  alt="Academic Director Apex Tutorial Bettiah"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-white font-display">Academic Leadership</h3>
                <p className="text-xs text-amber-400 font-extrabold uppercase tracking-wider">Apex Tutorial Bettiah</p>
                <p className="text-[11px] text-slate-400">Specializing in BSEB Science Excellence</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-extrabold bg-emerald-950/60 px-3.5 py-1 rounded-full border border-emerald-800/80 shadow">
                <ShieldCheck size={14} />
                <span>10+ Years Excellence in Bettiah</span>
              </div>
            </div>

            {/* Right Director's Statement */}
            <div className="lg:col-span-8 space-y-5 text-slate-200">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
                Director&apos;s Message
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight leading-snug">
                &ldquo;Empowering Bihar Board Science Students to Achieve Top Percentage & Ranker Results.&rdquo;
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                <p>
                  Welcome to Apex Tutorial Bettiah. Our sole academic commitment is providing world-class classroom coaching exclusively for Class 11th & 12th Science students preparing for Bihar School Examination Board (BSEB) examinations.
                </p>
                <p>
                  We believe that strict discipline, early morning 6:00 AM batch routines, and continuous weekly test evaluations build the mental focus and confidence necessary for achieving 90%+ scores in Physics, Chemistry, Mathematics, and Biology.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-white">
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2 shadow">
                  <CheckCircle size={16} className="text-amber-400 shrink-0" />
                  <span>100% BSEB NCERT Focus</span>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2 shadow">
                  <CheckCircle size={16} className="text-emerald-400 shrink-0" />
                  <span>Strict Academic Discipline</span>
                </div>
                <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800 flex items-center gap-2 shadow">
                  <CheckCircle size={16} className="text-blue-400 shrink-0" />
                  <span>Weekly Test Series</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
