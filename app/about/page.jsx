'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyMobileBar from '../components/StickyMobileBar';
import AdmissionModal from '../components/AdmissionModal';
import LoginModal from '../components/LoginModal';
import DisciplineRules from '../components/DisciplineRules';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import { Sparkles, Award, Users, Star, Clock, CheckCircle2, BookOpen, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://apextutorialbettiah.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'About Us',
        'item': 'https://apextutorialbettiah.com/about'
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Schema.org Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar onOpenLoginModal={() => setIsLoginModalOpen(true)} />
      
      <main className="flex-grow">
        
        {/* Page Hero Header */}
        <section className="relative bg-[#070d19] text-white py-16 sm:py-24 border-b border-slate-800/80 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 via-blue-500/20 to-indigo-500/20 border border-amber-400/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              <Sparkles size={14} className="text-amber-400" />
              <span>ABOUT APEX TUTORIAL BETTIAH</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Empowering Bihar Board <br />
              <span className="text-amber-400 font-display">11th & 12th Science Toppers</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              10+ years of dedicated academic leadership, Smart Board visual learning, and disciplined early morning coaching in West Champaran, Bihar.
            </p>

            {/* Quick Stats Bar */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-amber-400 font-black text-xl font-display">
                  <Users size={18} />
                  <span>5000+</span>
                </div>
                <p className="text-xs text-slate-400 font-semibold">Enrolled Students</p>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-amber-400 font-black text-xl font-display">
                  <Award size={18} />
                  <span>10+ Yrs</span>
                </div>
                <p className="text-xs text-slate-400 font-semibold">Bihar Board Legacy</p>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-amber-400 font-black text-xl font-display">
                  <Star size={18} className="fill-amber-400" />
                  <span>4.7 / 5.0</span>
                </div>
                <p className="text-xs text-slate-400 font-semibold">329+ Verified Reviews</p>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-amber-400 font-black text-xl font-display">
                  <Clock size={18} />
                  <span>6:00 AM</span>
                </div>
                <p className="text-xs text-slate-400 font-semibold">Early Morning Batches</p>
              </div>
            </div>

          </div>
        </section>

        {/* Detailed Institute Vision & History Section */}
        <section className="py-20 bg-[#050b18] text-white relative border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800 relative aspect-[4/3] group">
                  <Image
                    src="/apex-hero.jpg"
                    alt="Apex Tutorial Bettiah Smart Board Classroom"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                <div className="absolute -bottom-6 -right-2 bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl border border-slate-800 shadow-2xl space-y-1.5 max-w-xs">
                  <p className="text-xs font-black text-amber-400 uppercase tracking-wider">
                    Official Bettiah Campus
                  </p>
                  <p className="text-xs text-slate-300 font-medium leading-snug">
                    Supriya Main Road, Chawani, Bettiah, Bihar 845438
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
                    OUR FOUNDATION & PHILOSOPHY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
                    Redefining BSEB Science Coaching in Bettiah
                  </h2>
                </div>

                <div className="space-y-4 text-slate-300 text-sm leading-relaxed font-sans">
                  <p>
                    Apex Tutorial Bettiah was established with a clear vision: to make high-quality, concept-driven Science education accessible to every Bihar Board (BSEB) Class 11th & 12th student in Bettiah and West Champaran.
                  </p>
                  <p>
                    Under the academic leadership of <strong className="text-white font-bold">H.Kumar (Founder & Head Faculty)</strong>, Apex Tutorial pioneered the integration of Interactive Smart Board technology in Bettiah, replacing boring rote learning with animated 3D visual concepts in Physics, Chemistry, Mathematics, and Biology.
                  </p>
                  <p>
                    We strictly specialize in Bihar Board Science stream, offering dedicated early morning 6:00 AM batches so students can learn with fresh mental energy and dedicate full day hours to self-study and revision.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "100% Bihar Board NCERT Syllabus",
                    "Early Morning 6:00 AM Batches",
                    "Interactive Smart Board Learning",
                    "Weekly Exam Model Tests",
                    "Hindi & English Medium Batches",
                    "Personalized WhatsApp Doubt Support"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-slate-200 bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Detailed Subject Specialization Grid */}
        <section className="py-20 bg-[#060c19] text-white border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
                ACADEMIC EXCELLENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
                Comprehensive Science Subjects
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Expert faculty guidance tailored specifically for Bihar Board (BSEB) 11th & 12th examination pattern.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-4 hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap size={22} />
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-blue-400 transition-colors">
                  Physics ⚛️
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Deep conceptual derivation, numerical problem-solving techniques, and high-scoring objective MCQ practice for BSEB board exams.
                </p>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-4 hover:border-amber-500/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles size={22} />
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors">
                  Chemistry 🧪
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Organic reaction mechanisms, inorganic memory shortcuts, physical chemistry formula sheets, and chapter-wise test series.
                </p>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-4 hover:border-emerald-500/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen size={22} />
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-emerald-400 transition-colors">
                  Mathematics 📐
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Calculus speed shortcuts, 3D geometry & vector proofs, step-by-step theorem mastery, and 10-year question bank practice.
                </p>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-4 hover:border-purple-500/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-purple-400 transition-colors">
                  Biology 🧬
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  NCERT line-by-line reading, 3D anatomical diagrams, genetics & biotechnology concepts, and high-yield board exam tips.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Classroom Discipline Rules Section */}
        <DisciplineRules />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final CTA Banner */}
        <FinalCTA />

      </main>

      <Footer />
      <StickyMobileBar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />
      <AdmissionModal isOpen={isAdmissionModalOpen} onClose={() => setIsAdmissionModalOpen(false)} />
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
}
