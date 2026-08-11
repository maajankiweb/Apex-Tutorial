'use client';

import { Tv, Laptop, Trophy, HeartHandshake, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Tv,
      title: "Smart Board Classes",
      desc: "Bettiah region ka pehla institute jo Smart Board technology use karta hai. Visual learning se concepts fast aur permanent yaad rehte hain.",
      badge: "Smart Classroom",
      color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400"
    },
    {
      icon: Laptop,
      title: "Hybrid Learning",
      desc: "Offline classroom aur online platform — dono saath. Class miss ho jaye toh recording dekho. Learn anytime, anywhere.",
      badge: "Flexible Study",
      color: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400"
    },
    {
      icon: Trophy,
      title: "Proven Results",
      desc: "Consistent Bihar Board toppers. Har saal students ne 70%+ marks achieve kiye hain physics aur English mein.",
      badge: "Topper Results",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400"
    },
    {
      icon: HeartHandshake,
      title: "Personal Attention",
      desc: "Har student ka progress individually track hota hai. WhatsApp pe doubt solve hota hai. Sirf class nahi — community milti hai.",
      badge: "1-on-1 Support",
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-[#060c19] text-white relative overflow-hidden border-y border-slate-800/80">
      
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 via-blue-500/20 to-indigo-500/20 border border-amber-400/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            <Sparkles size={14} className="text-amber-400" />
            <span>Hamare Baare Mein</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
            Why Students Choose Apex Tutorial
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Sirf syllabus nahi — concepts clear karte hain. 10+ saalon ka Bihar Board expertise, aur results jo bolte hain.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4 flex flex-col justify-between hover:border-amber-400/50 hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} border flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] bg-slate-950 text-slate-300 font-bold px-2.5 py-1 rounded-full border border-slate-800 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-amber-400 font-bold">
                  <CheckCircle2 size={13} />
                  <span>Verified Apex Advantage</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Founder Quote Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden text-center space-y-4">
          
          <Quote size={48} className="text-amber-400/20 absolute top-4 left-6 pointer-events-none" />
          
          <blockquote className="text-lg sm:text-xl font-serif italic text-slate-100 max-w-2xl mx-auto leading-relaxed relative z-10">
            “Har student ko personal attention milti hai — class mein ya WhatsApp pe. Success sirf marks mein nahi, confidence mein bhi hota hai.”
          </blockquote>

          <div className="pt-2">
            <p className="text-amber-400 font-black text-sm tracking-wide font-display">
              — H.Kumar, Founder & Head Faculty
            </p>
            <p className="text-xs text-slate-400">Apex Tutorial Bettiah</p>
          </div>

        </div>

      </div>
    </section>
  );
}
