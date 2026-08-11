'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyMobileBar from '../components/StickyMobileBar';
import AdmissionModal from '../components/AdmissionModal';
import LoginModal from '../components/LoginModal';
import SciencePrograms from '../components/SciencePrograms';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import { Sparkles, Clock, CheckCircle2, BookOpen, Zap, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function CoursesPage() {
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
        'name': 'Courses',
        'item': 'https://apextutorialbettiah.com/courses'
      }
    ]
  };

  const syllabusHighlights = [
    {
      subject: "Physics ⚛️",
      topics: [
        "Electrostatics & Electric Current",
        "Magnetic Effects of Current & Magnetism",
        "Electromagnetic Induction & Optics",
        "Dual Nature of Matter & Atoms/Nuclei",
        "Semiconductor Electronics & Communication",
        "NCERT Numerical Problem Solving & 50% Objective MCQs"
      ],
      color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-400"
    },
    {
      subject: "Chemistry 🧪",
      topics: [
        "Solid State, Solutions & Electrochemistry",
        "Chemical Kinetics & Surface Chemistry",
        "p-Block, d-Block & Coordination Compounds",
        "Haloalkanes, Alcohols, Aldehydes & Amines",
        "Biomolecules, Polymers & Everyday Chemistry",
        "Organic Reaction Mechanisms & Memory Formulas"
      ],
      color: "from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-400"
    },
    {
      subject: "Mathematics 📐",
      topics: [
        "Relations, Functions & Inverse Trigonometry",
        "Matrices & Determinants",
        "Continuity, Differentiability & Derivatives",
        "Integrals, Differential Equations & Applications",
        "Vector Algebra & 3D Geometry",
        "Probability & Linear Programming Speed Shortcuts"
      ],
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400"
    },
    {
      subject: "Biology 🧬",
      topics: [
        "Sexual Reproduction in Flowering Plants & Humans",
        "Principles of Inheritance & Molecular Genetics",
        "Evolution & Human Health and Disease",
        "Biotechnology: Principles, Processes & Applications",
        "Ecosystem, Biodiversity & Environmental Issues",
        "3D Diagram Labeling & NCERT Line-by-Line Revision"
      ],
      color: "from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-400"
    }
  ];

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
              <span>EXCLUSIVELY BIHAR BOARD (BSEB) SCIENCE STREAM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Class 11th & 12th Science <br />
              <span className="text-amber-400 font-display">Academic Programs & Schedules</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Comprehensive classroom coaching across Physics, Chemistry, Mathematics, and Biology with dedicated Hindi & English Medium tracks and 6:00 AM early morning batches.
            </p>

            {/* Key Feature Badges Row */}
            <div className="flex justify-center flex-wrap gap-3 pt-4 text-xs font-bold">
              <span className="bg-slate-900 border border-slate-800 text-amber-300 px-4 py-2 rounded-full shadow">
                ✓ 100% NCERT & BSEB Board Pattern
              </span>
              <span className="bg-slate-900 border border-slate-800 text-blue-300 px-4 py-2 rounded-full shadow">
                ✓ Interactive Smart Board Classrooms
              </span>
              <span className="bg-slate-900 border border-slate-800 text-emerald-300 px-4 py-2 rounded-full shadow">
                ✓ 50% MCQs + 50% Subjective Mastery
              </span>
              <span className="bg-slate-900 border border-slate-800 text-purple-300 px-4 py-2 rounded-full shadow">
                ✓ Sunday Model Test Series
              </span>
            </div>

          </div>
        </section>

        {/* Main Courses Grid Component */}
        <SciencePrograms onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

        {/* Detailed Subject-Wise Syllabus Breakdown Section */}
        <section className="py-20 bg-[#060c19] text-white border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
                DETAILED SYLLABUS COVERAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
                BSEB Science Curriculum Roadmap
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Chapter-wise objective practice, NCERT numericals, and board exam high-yielding question banks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {syllabusHighlights.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 backdrop-blur-xl p-7 rounded-3xl border border-slate-800/90 shadow-2xl space-y-5 hover:border-amber-400/40 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors border-b border-slate-800/80 pb-3 flex items-center justify-between">
                    <span>{sub.subject}</span>
                    <span className="text-[10px] bg-slate-950 text-slate-400 px-2.5 py-0.5 rounded-full font-bold border border-slate-800 uppercase">
                      BSEB 11 & 12
                    </span>
                  </h3>

                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {sub.topics.map((t, tidx) => (
                      <li key={tidx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/40">
                          <CheckCircle2 size={11} />
                        </div>
                        <span className="leading-snug">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Batch Timing & Schedule Summary Banner */}
        <section className="py-16 bg-[#050b18] text-white border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
              
              <div className="space-y-3 text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                  <Clock size={15} />
                  <span>EARLY MORNING BATCH SPECIALTY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white">
                  Why Our 6:00 AM Batches Create Toppers
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  Classes starting sharp at 6:00 AM allow students to complete coaching early, study with peak morning mental alertness, and dedicate full day hours to self-study revision for Bihar Board exams.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-center space-y-1 w-full sm:w-auto min-w-[160px]">
                  <p className="text-amber-400 font-black text-base font-display">6:00 AM - 9:00 AM</p>
                  <p className="text-[11px] text-slate-400 font-semibold">Morning Target Batch</p>
                </div>

                <button
                  onClick={() => setIsAdmissionModalOpen(true)}
                  className="w-full sm:w-auto gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Reserve Batch Seat</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>
          </div>
        </section>

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
