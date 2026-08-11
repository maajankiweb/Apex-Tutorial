'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Clock, Sparkles, ChevronRight, MessageCircle, ArrowRight, ShieldCheck, Zap, Play } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function SciencePrograms({ onOpenAdmissionModal }) {
  const [selectedSubject, setSelectedSubject] = useState('All');

  const filteredCourses = INSTITUTE_DATA.courses.filter(course => {
    if (selectedSubject === 'All') return true;
    return course.subjects.some(s => s.toLowerCase().includes(selectedSubject.toLowerCase()));
  });

  return (
    <section className="py-20 bg-[#050b18] text-white relative overflow-hidden" id="courses">
      
      {/* Subtle Background Radial Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-amber-500/20 border border-blue-500/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            <Sparkles size={14} className="text-amber-400" />
            <span>HUMARI PADHAI • Explore Programs</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
            Science Course Offerings & Schedules
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Apni class aur subject choose karo — aur learning shuru karo. Dedicated BSEB 11th & 12th Science batches across Physics, Chemistry, Maths & Biology.
          </p>
        </div>

        {/* Subject Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-2.5">
          {[
            { id: 'All', label: 'All Programs' },
            { id: 'Physics', label: 'Physics ⚛️' },
            { id: 'Chemistry', label: 'Chemistry 🧪' },
            { id: 'Mathematics', label: 'Mathematics 📐' },
            { id: 'Biology', label: 'Biology 🧬' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedSubject(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                selectedSubject === tab.id
                  ? 'gold-gradient-bg text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-800/90 shadow-2xl flex flex-col justify-between hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 group overflow-hidden"
            >
              <div>
                
                {/* Course Banner Image Container (Matching Reference Screenshot) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Image Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="bg-amber-400/90 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
                      {course.badge}
                    </span>

                    <span className="bg-slate-950/80 text-amber-300 border border-amber-400/30 font-bold text-[10px] px-2.5 py-1 rounded-full backdrop-blur-md">
                      BSEB Pattern
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-7 space-y-5">
                  
                  {/* Subject Tag Pills */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {course.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-extrabold bg-slate-950 text-blue-300 border border-blue-800/60 px-2.5 py-0.5 rounded-full"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  {/* Course Title */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed">
                      {course.englishSubtitle}
                    </p>
                  </div>

                  {/* Batch Schedule Box */}
                  <div className="p-3.5 bg-slate-950/90 rounded-2xl border border-slate-800 text-xs space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-amber-400">
                      <Clock size={14} className="shrink-0" />
                      <span>Batch Schedule:</span>
                    </div>
                    <p className="font-extrabold text-white text-xs leading-relaxed pl-5">
                      {course.batchTiming}
                    </p>
                  </div>

                  {/* Key Highlights List */}
                  <div className="space-y-2 pt-1">
                    <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Zap size={13} className="text-amber-400" />
                      <span>Key Features:</span>
                    </p>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {course.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                            <Check size={9} />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

              {/* Action Buttons (Matching Reference Screenshot) */}
              <div className="p-6 pt-0 space-y-2.5">
                
                {/* Secondary Button: Free Intro Dekho */}
                <button
                  onClick={onOpenAdmissionModal}
                  className="w-full bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Play size={13} className="fill-amber-400 text-amber-400" />
                  <span>Free Intro Dekho</span>
                </button>

                {/* Primary Button: Abhi Enroll Karo */}
                <button
                  onClick={onOpenAdmissionModal}
                  className="w-full gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Abhi Enroll Karo</span>
                  <ArrowRight size={15} />
                </button>

                {/* Direct WhatsApp & Full Details Links */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-bold pt-1">
                  <a
                    href={`https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=I%20want%20information%20about%20${encodeURIComponent(course.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-950 hover:bg-slate-800 text-emerald-400 border border-slate-800/80 py-2 px-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <MessageCircle size={13} />
                    <span>WhatsApp</span>
                  </a>

                  <Link
                    href="/courses"
                    className="bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800/80 py-2 px-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <span>Full Details</span>
                    <ChevronRight size={13} />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Medium & Helpline Callout Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
              <ShieldCheck size={16} />
              <span>BSEB Hindi & English Medium Options</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black font-display text-white">
              Looking for Specialized Science Batches in Bettiah?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Visit our campus or connect via WhatsApp for batch seat reservation and fee details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3.5 rounded-xl border border-slate-700 flex items-center gap-2 transition-all"
            >
              <span>Contact Page</span>
            </Link>

            <button
              onClick={onOpenAdmissionModal}
              className="gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Apply Admissions
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
