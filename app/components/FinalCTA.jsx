'use client';

import Link from 'next/link';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-[#070e1b] text-white relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Pill Badge */}
        <div>
          <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-amber-500/40 px-4 py-1.5 rounded-full shadow-lg text-amber-300 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span>Admissions Open - Limited Seats</span>
          </div>
        </div>

        {/* Main Display Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white leading-none">
          Start Your Journey Today.
        </h2>

        {/* Subtitle Text */}
        <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans font-medium">
          Bettiah ke best faculty ke saath Bihar Board ki complete preparation <br className="hidden sm:inline" />
          <span className="text-slate-400 font-serif italic">— Smart Learning, Sure Success.</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/courses"
            className="gold-gradient-bg text-slate-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/15 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Courses</span>
            <ArrowRight size={17} />
          </Link>

          <a
            href={`https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=Hello%20Apex%20Tutorial%20Bettiah,%20I%20want%20information%20about%20Class%2011th/12th%20Science%20Admission`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/90 hover:bg-slate-800 text-white font-extrabold text-sm px-7 py-4 rounded-2xl border border-slate-700/80 shadow-lg active:scale-95 transition-all flex items-center gap-2.5"
          >
            <MessageSquare size={18} className="text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Bottom Small Text */}
        <p className="text-xs text-slate-400 pt-3 font-medium">
          5000+ students already enrolled · No hidden fees · Cancel anytime after enrollment query
        </p>

      </div>
    </section>
  );
}
