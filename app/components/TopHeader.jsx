'use client';

import Link from 'next/link';
import { MapPin, Clock, Facebook, Star } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function TopHeader() {
  return (
    <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 relative z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2.5">
        
        {/* Left Side: Scope Badge & Hours */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
          <span className="bseb-badge text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow shrink-0">
            BSEB 11th & 12th Science
          </span>
          
          <span className="flex items-center gap-1.5 text-slate-300 font-medium text-[11px]">
            <Clock size={13} className="text-amber-400 shrink-0" />
            <span>Early Batches <strong className="text-amber-400 font-bold">6:00 AM Daily</strong></span>
          </span>

          <span className="hidden xl:flex items-center gap-1.5 text-slate-400 text-[11px]">
            <MapPin size={13} className="text-amber-400 shrink-0" />
            <span>Supriya Main Road, Chawani, Bettiah</span>
          </span>
        </div>

        {/* Right Side: Ratings & Direct Call Link */}
        <div className="flex items-center gap-3 text-[11px] font-semibold flex-wrap justify-center sm:justify-end">
          <div className="flex items-center gap-1.5 text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30">
            <Star size={12} className="fill-amber-400 text-amber-400 shrink-0" />
            <span>4.7/5★ (162 Google & 167 Justdial)</span>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-amber-400 font-extrabold hover:text-amber-300 transition-colors bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-800"
          >
            <span>Campus Helpline</span>
          </Link>

          <a
            href={INSTITUTE_DATA.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors p-0.5"
            aria-label="Facebook Page"
          >
            <Facebook size={14} />
          </a>
        </div>

      </div>
    </div>
  );
}
