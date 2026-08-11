'use client';

import { Star, Award, Users, Clock } from 'lucide-react';

export default function TrustStrip() {
  return (
    <section className="bg-[#070e1c] border-b border-slate-800/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">
          
          {/* Card 1: Google Reviews */}
          <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex items-center gap-4 shadow-sm hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Star size={22} className="fill-amber-400" />
            </div>
            <div>
              <div className="text-xl font-black font-display text-amber-400 tracking-tight">4.7 / 5★</div>
              <div className="text-xs text-slate-400 font-semibold mt-0.5">162 Google Reviews</div>
            </div>
          </div>

          {/* Card 2: Justdial Votes */}
          <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex items-center gap-4 shadow-sm hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Award size={22} />
            </div>
            <div>
              <div className="text-xl font-black font-display text-blue-400 tracking-tight">4.7 / 5★</div>
              <div className="text-xs text-slate-400 font-semibold mt-0.5">167 Justdial Votes</div>
            </div>
          </div>

          {/* Card 3: Class Stream */}
          <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex items-center gap-4 shadow-sm hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Users size={22} />
            </div>
            <div>
              <div className="text-xl font-black font-display text-emerald-400 tracking-tight">11th & 12th</div>
              <div className="text-xs text-slate-400 font-semibold mt-0.5">Exclusive Science Stream</div>
            </div>
          </div>

          {/* Card 4: Early Batches */}
          <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 flex items-center gap-4 shadow-sm hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
              <Clock size={22} />
            </div>
            <div>
              <div className="text-xl font-black font-display text-purple-400 tracking-tight">6:00 AM</div>
              <div className="text-xs text-slate-400 font-semibold mt-0.5">Early Morning Batches</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
