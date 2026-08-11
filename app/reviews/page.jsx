'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyMobileBar from '../components/StickyMobileBar';
import AdmissionModal from '../components/AdmissionModal';
import LoginModal from '../components/LoginModal';
import ReviewSection from '../components/ReviewSection';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import { Star, Sparkles, MessageSquare, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function ReviewsPage() {
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
        'name': 'Student Reviews',
        'item': 'https://apextutorialbettiah.com/reviews'
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 via-blue-500/20 to-indigo-500/20 border border-amber-400/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              <Sparkles size={14} className="text-amber-400" />
              <span>4.7★ VERIFIED STUDENT & PARENT REVIEWS</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Real Experiences From <br />
              <span className="text-amber-400 font-display">Bettiah's BSEB Science Toppers</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Read authentic feedback from 300+ students and parents who experienced Smart Board learning, early morning discipline, and dedicated BSEB science coaching at Apex Tutorial Bettiah.
            </p>

            {/* Rating Counter Badges Row */}
            <div className="flex justify-center flex-wrap items-center gap-4 pt-4">
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-center gap-3 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-400 flex items-center justify-center font-black text-xl font-display">
                  4.7
                </div>
                <div className="text-left space-y-0.5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 font-bold">329+ Google Reviews</p>
                </div>
              </div>

              <a
                href={INSTITUTE_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/90 border border-slate-800 hover:border-amber-400 p-4 rounded-2xl flex items-center gap-3 shadow-xl transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-1">
                    <span>Write a Google Review</span>
                    <ExternalLink size={13} />
                  </p>
                  <p className="text-[11px] text-slate-400">Share your feedback on Google Maps</p>
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* Main Comprehensive Review Grid Section */}
        <ReviewSection />

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
