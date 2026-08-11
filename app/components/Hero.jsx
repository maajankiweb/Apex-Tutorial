'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Award, MessageCircle, Play, MapPin } from 'lucide-react';

export default function Hero({ onOpenAdmissionModal }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroImages = [
    { src: '/apex-hero.jpg', alt: 'Apex Tutorial Bettiah Smart Classroom' },
    { src: '/apex-facility.jpg', alt: 'Modern Lab & Facilities' },
    { src: '/apex-doubt.jpg', alt: 'Personalized Doubt Sessions' },
  ];

  return (
    <section className="relative bg-[#070d19] text-white py-12 lg:py-20 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, Text, CTAs & Metric Pills */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight leading-[1.1]">
                <span className="text-white block">Smart Learning.</span>
                <span className="text-amber-400 block mt-1">Sure Success.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              Modern Smart Board classrooms, expert faculty aur hybrid learning ke saath Class 11th & 12th Science ki complete preparation — Bettiah region ka #1 coaching institute.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/courses"
                className="gold-gradient-bg text-slate-950 font-black text-sm px-7 py-3.5 rounded-full shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight size={16} />
              </Link>

              <button
                onClick={onOpenAdmissionModal}
                className="bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                  <Play size={10} className="fill-amber-400 ml-0.5" />
                </div>
                <span>Watch Free Demo</span>
              </button>
            </div>

            {/* Metric Pills Grid */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-xl">
              
              {/* Pill 1 */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 px-4 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <p className="text-base font-black text-white font-display leading-none">5000+</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-1">Students Enrolled</p>
                </div>
              </div>

              {/* Pill 2 */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 px-4 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-base font-black text-white font-display leading-none">10+ Yrs</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-1">Bihar Board Results</p>
                </div>
              </div>

              {/* Pill 3 */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 px-4 py-3 rounded-2xl flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-base font-black text-white font-display leading-none">24/7</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-1">WhatsApp Support</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Feature Banner Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800/90 p-3 shadow-2xl space-y-3 group">
              
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950">
                <Image
                  src={heroImages[activeSlide].src}
                  alt={heroImages[activeSlide].alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  priority
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-3 right-3 bg-amber-500/90 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg backdrop-blur-sm border border-amber-400/40">
                  QUALITY EDUCATION BRIGHT FUTURE
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-sm font-extrabold text-white font-display">
                    Apex Tutorial Bettiah Campus
                  </p>
                  <p className="text-[11px] text-amber-300 font-semibold">
                    Supriya Main Road, Chawani, Bettiah
                  </p>
                </div>
              </div>

              {/* Slider Dot Indicators */}
              <div className="flex items-center justify-center gap-1.5 py-1">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeSlide === idx
                        ? 'w-6 bg-amber-400'
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
