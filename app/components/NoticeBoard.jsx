'use client';

import { Bell } from 'lucide-react';

export default function NoticeBoard() {
  return (
    <section className="py-20 bg-[#050b18] text-white relative overflow-hidden border-t border-slate-800/80" id="notice">
      
      {/* Background Decorative Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3">
          <p className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
            LATEST UPDATES
          </p>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white">
            Notice Board
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-medium">
            Latest updates, results aur new batch ki jankaari
          </p>
        </div>

        {/* Notice Card Frame (Matching Reference Image) */}
        <div className="bg-slate-900/90 backdrop-blur-xl p-12 sm:p-16 rounded-3xl border border-slate-800/90 shadow-2xl text-center space-y-4">
          
          <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
            <Bell size={24} />
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-black text-white">
            No active notices right now
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Check back soon for batch announcements, results, and important updates.
          </p>

        </div>

      </div>
    </section>
  );
}
