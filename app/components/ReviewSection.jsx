'use client';

import { useState } from 'react';
import { Star, CheckCircle2, ExternalLink, ShieldCheck, Quote, Sparkles, MessageSquare } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function ReviewSection() {
  const [filter, setFilter] = useState('All');

  const filteredReviews = INSTITUTE_DATA.reviewHighlights.filter(rev => {
    if (filter === 'All') return true;
    return rev.source.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section className="py-20 bg-[#050b18] text-white relative overflow-hidden" id="reviews">
      
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 via-blue-500/20 to-indigo-500/20 border border-amber-400/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            <Star size={14} className="fill-amber-400 text-amber-400" />
            <span>4.7 / 5.0 Star Rated (Multi-Platform Verified)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
            Verified Student & Parent Reviews
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Authentic public reviews from Google Maps (162 reviews) and Justdial (167 votes) validating our coaching quality in Bettiah, Bihar.
          </p>
        </div>

        {/* Multi-Platform Aggregate Metric Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Google Card */}
          <div className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-800 shadow-2xl flex items-center justify-between gap-4 hover:border-amber-400/40 transition-all duration-300 group">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400 text-[11px] font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Google Maps Profile</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-serif font-black text-white">4.7</span>
                <div className="flex text-amber-400 text-lg">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-xs text-slate-300 font-semibold">
                Based on <strong className="text-amber-400">162 Google Reviews</strong> in Bettiah
              </p>
            </div>

            <a
              href={INSTITUTE_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider px-4.5 py-3 rounded-2xl shadow-lg flex items-center gap-1.5 hover:brightness-110 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <span>View Map</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Justdial Card */}
          <div className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-800 shadow-2xl flex items-center justify-between gap-4 hover:border-blue-400/40 transition-all duration-300 group">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-400 text-[11px] font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Justdial Verified Rating</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-serif font-black text-white">4.7</span>
                <div className="flex text-amber-400 text-lg">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-xs text-slate-300 font-semibold">
                Based on <strong className="text-blue-400">167 Verified Votes</strong>
              </p>
            </div>

            <div className="bg-slate-950 px-3.5 py-2 rounded-2xl border border-slate-800 text-amber-300 text-xs font-black flex items-center gap-1.5 shrink-0">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Verified 4.7★</span>
            </div>
          </div>

        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2.5 pt-2">
          {[
            { id: 'All', label: 'All Reviews (329+)' },
            { id: 'Google', label: 'Google Reviews (162)' },
            { id: 'Justdial', label: 'Justdial Votes (167)' },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                filter === f.id
                  ? 'gold-gradient-bg text-slate-950 shadow-md shadow-amber-500/20 scale-105'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Individual Review Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          {filteredReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-800/90 space-y-4 flex flex-col justify-between shadow-2xl hover:border-amber-400/40 hover:shadow-amber-500/5 transition-all duration-300 relative group overflow-hidden"
            >
              <Quote size={40} className="text-amber-400/10 absolute top-4 right-4 pointer-events-none group-hover:text-amber-400/20 transition-colors" />

              <div className="space-y-4 relative z-10">
                
                {/* Rating & Source Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <span className="text-[10px] bg-slate-950 text-slate-300 font-extrabold px-3 py-1 rounded-full border border-slate-800 uppercase tracking-wider">
                    {rev.source}
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="text-sm italic text-slate-200 leading-relaxed font-serif">
                  &ldquo;{rev.text}&rdquo;
                </blockquote>

              </div>

              {/* Author & Verification Info */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-medium relative z-10">
                <div className="flex items-center gap-2 font-black text-white font-display">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                    <CheckCircle2 size={12} />
                  </div>
                  <span>{rev.author}</span>
                </div>

                <span className="text-[11px] text-slate-400 font-semibold">
                  {rev.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
