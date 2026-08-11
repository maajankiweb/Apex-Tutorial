'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyMobileBar from '../components/StickyMobileBar';
import AdmissionModal from '../components/AdmissionModal';
import LoginModal from '../components/LoginModal';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import { ShieldCheck, Scale, FileText, Clock, AlertCircle, CheckCircle2, BookOpen, Lock, Sparkles, Phone } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function TermsPage() {
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
        'name': 'Terms & Conditions',
        'item': 'https://apextutorialbettiah.com/terms'
      }
    ]
  };

  const sections = [
    { id: 'discipline', label: '1. Academic Discipline & Punctuality' },
    { id: 'refund', label: '2. Admission & Fee Policy' },
    { id: 'attendance', label: '3. Weekly Model Test Series' },
    { id: 'code-of-conduct', label: '4. Code of Conduct & Governance' },
    { id: 'intellectual-property', label: '5. Intellectual Property Rights' },
    { id: 'limitation-liability', label: '6. Limitation of Liability' },
    { id: 'contact-legal', label: '7. Legal & Administrative Desk' },
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
        <section className="relative bg-[#070d19] text-white py-16 sm:py-20 border-b border-slate-800/80 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 via-blue-500/20 to-indigo-500/20 border border-amber-400/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              <Scale size={14} className="text-amber-400" />
              <span>LEGAL & COMPLIANCE GOVERNANCE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Terms & Academic Guidelines <br />
              <span className="text-amber-400 font-display">Apex Tutorial Bettiah</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
              Official student enrollment terms, classroom rules, fee policies, and academic governance for Bihar Board (BSEB) Class 11th & 12th Science coaching at Chawani Campus, Bettiah.
            </p>

            <div className="pt-2 text-xs text-slate-400 font-semibold">
              <span>Last Updated & Effective: </span>
              <strong className="text-white">Academic Session 2026-2027</strong>
            </div>

          </div>
        </section>

        {/* Main Content Layout with Sticky Sidebar Navigation */}
        <section className="py-16 bg-[#050b18] text-white border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Sticky Table of Contents Navigation */}
              <div className="lg:col-span-4 sticky top-24 space-y-4">
                <div className="bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-amber-400 font-display flex items-center gap-2 border-b border-slate-800 pb-3">
                    <FileText size={16} />
                    <span>Quick Navigation Index</span>
                  </h3>

                  <nav className="space-y-1.5 text-xs font-medium">
                    {sections.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="bg-gradient-to-br from-blue-950/60 to-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 text-xs">
                  <p className="font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    <span>Official Bettiah Campus</span>
                  </p>
                  <p className="text-slate-300 leading-snug">
                    Supriya Main Road, INDRAPURI COLONY, Chawani, Bettiah, Bihar 845438
                  </p>
                </div>
              </div>

              {/* Right Detailed Terms Text Content */}
              <div className="lg:col-span-8 space-y-10 text-slate-300 text-sm leading-relaxed">
                
                {/* Section 1 */}
                <div id="discipline" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        1. Academic Discipline & Punctuality Policy
                      </h2>
                      <p className="text-xs text-slate-400">Classroom decorum & morning timing commitment</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      Apex Tutorial Bettiah strictly emphasizes punctuality as the foundation of academic success for Bihar Board (BSEB) Class 11th & 12th Science examinations.
                    </p>
                    <ul className="space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Students must arrive at the Chawani campus sharp 10 minutes prior to their assigned batch timing (6:00 AM morning batch). Late arrivals will not be permitted into ongoing lectures.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Mobile phone usage during Smart Board lectures is strictly prohibited unless explicitly instructed by head faculty H.Kumar for visual digital assignments.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Minimum 85% classroom attendance is mandatory to remain eligible for the Sunday Model Test Series and final board exam target practice sets.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="refund" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">
                      <Scale size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        2. Admission & Fee Payment Policy
                      </h2>
                      <p className="text-xs text-slate-400">Enrollment validity, installment schedules & terms</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      All admissions to Apex Tutorial Bettiah are strictly subject to seat availability per batch limit (maximum 60 students per batch for personalized focus).
                    </p>
                    <ul className="space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Tuition fees must be paid according to the fee structure card provided at the time of counseling and enrollment. Receipt copies are issued for all valid payments.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Admission seats are non-transferable to other students under any circumstances.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Refund requests submitted prior to batch commencement will be processed after deducting administrative registration charges. Fees once paid post-batch start are non-refundable.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="attendance" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        3. Sunday Weekly Model Test Series
                      </h2>
                      <p className="text-xs text-slate-400">BSEB 50% MCQ + 50% Subjective Evaluation</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      Weekly evaluation tests are conducted every Sunday based strictly on the latest Bihar School Examination Board (BSEB) pattern.
                    </p>
                    <ul className="space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Test participation is compulsory for all enrolled 11th & 12th Science students. Unexcused absence will require parent counseling before re-entering class.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Model test answer sheets and marks reports are shared with parents via SMS/WhatsApp desk to track continuous progress.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="code-of-conduct" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        4. Campus Code of Conduct & Governance
                      </h2>
                      <p className="text-xs text-slate-400">Safety, respect & anti-ragging commitment</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      Apex Tutorial Bettiah maintains a zero-tolerance policy against any form of ragging, bullying, property damage, or disrespectful behavior towards faculty or fellow students.
                    </p>
                    <p>
                      Violation of campus decorum will result in immediate suspension or cancellation of enrollment without refund.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div id="intellectual-property" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold shrink-0">
                      <Lock size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        5. Intellectual Property & Study Material Rights
                      </h2>
                      <p className="text-xs text-slate-400">Exclusive PDF notes, formula sheets & recordings</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      All printed booklets, NCERT formula notes, model test question papers, and Smart Board digital slides provided by Apex Tutorial Bettiah are protected intellectual property.
                    </p>
                    <p>
                      Commercial redistribution, unauthorized digital uploading, or selling of institute study materials is strictly illegal.
                    </p>
                  </div>
                </div>

                {/* Section 6 & 7 */}
                <div id="contact-legal" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        6. Administrative & Legal Inquiry Desk
                      </h2>
                      <p className="text-xs text-slate-400">Campus address & official helpline</p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300 font-medium">
                    <p className="text-white font-bold">Apex Tutorial Bettiah Administrative Desk</p>
                    <p>RG54+P5Q, BE-004-0010, Supriya Main Road, INDRAPURI COLONY, Chawani, Bettiah, Bihar 845438</p>
                    <p className="text-amber-400 font-semibold pt-1">Visiting Hours: 6:00 AM - 7:00 PM (Tuesday to Sunday)</p>
                  </div>
                </div>

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
