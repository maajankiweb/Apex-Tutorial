'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyMobileBar from '../components/StickyMobileBar';
import AdmissionModal from '../components/AdmissionModal';
import LoginModal from '../components/LoginModal';
import ResultsTrackRecord from '../components/ResultsTrackRecord';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import { Trophy } from 'lucide-react';

export default function ResultsPage() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar onOpenLoginModal={() => setIsLoginModalOpen(true)} />
      
      <main className="flex-grow">
        
        {/* Page Hero Header */}
        <section className="relative bg-[#070d19] text-white py-16 sm:py-24 border-b border-slate-800/80 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 via-blue-500/20 to-indigo-500/20 border border-amber-400/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              <Trophy size={14} className="text-amber-400" />
              <span>PROVEN BIHAR BOARD SUCCESS • HALL OF FAME</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Results That Speak — <br />
              <span className="text-amber-400 font-display">Apex Tutorial Toppers</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Consistent top marks in BSEB Class 12th & 11th Science exams. Celebrating 50+ verified academic topper results of Bettiah students in Physics, Chemistry, Maths & Biology.
            </p>

            {/* Quick Stats Bar */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <p className="text-amber-400 font-black text-2xl font-display">5000+</p>
                <p className="text-xs text-slate-400 font-semibold">Students Coached</p>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <p className="text-amber-400 font-black text-2xl font-display">85%</p>
                <p className="text-xs text-slate-400 font-semibold">Score Improvement</p>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <p className="text-amber-400 font-black text-2xl font-display">10+ Yrs</p>
                <p className="text-xs text-slate-400 font-semibold">BSEB Board Success</p>
              </div>

              <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 text-center space-y-1">
                <p className="text-amber-400 font-black text-2xl font-display">4.7 / 5.0★</p>
                <p className="text-xs text-slate-400 font-semibold">Verified Ratings</p>
              </div>
            </div>

          </div>
        </section>

        {/* Primary Results Track Record Section (50 Result Cards with Filters & Live Search) */}
        <ResultsTrackRecord />

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
