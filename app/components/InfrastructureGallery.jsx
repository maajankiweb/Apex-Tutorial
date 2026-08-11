'use client';

import Image from 'next/image';
import { Sparkles, Shield, BookOpen, Users, CheckCircle2 } from 'lucide-react';

export default function InfrastructureGallery() {
  const items = [
    {
      title: "Spacious Smart Classrooms",
      desc: "Equipped with digital smart boards, ergonomic seating, and high-clarity writing aids for interactive learning.",
      image: "/apex-hero.jpg"
    },
    {
      title: "Peaceful & Disciplined Atmosphere",
      desc: "Calm learning environment strictly free from distractions, designed for maximum concentration during lectures.",
      image: "/apex-facility.jpg"
    },
    {
      title: "Personalized Doubt Counter",
      desc: "Dedicated faculty desk after morning and evening lectures for individual one-on-one student doubt clearing.",
      image: "/apex-doubt.jpg"
    }
  ];

  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Campus Infrastructure Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight">
            State-of-the-Art Learning Facilities
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Take a look at our modern campus infrastructure at Supriya Main Road, Chawani, Bettiah.
          </p>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-xl group hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="text-lg font-bold font-display text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
