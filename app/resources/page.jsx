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
import { FileText, Download, Clock, ArrowRight, Sparkles, BookOpen, CheckCircle2, ShieldCheck, Search } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function ResourcesPage() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeSubject, setActiveSubject] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const studyResources = [
    {
      id: 1,
      subject: "Physics",
      subjectBadge: "Physics ⚛️",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      title: "Class 12th Physics Top 50 Objective Questions (BSEB 2026)",
      desc: "Chapter-wise 50% MCQs with detailed step-by-step Hindi/English explanations based on Bihar Board pattern.",
      fileSize: "2.4 MB PDF"
    },
    {
      id: 2,
      subject: "Chemistry",
      subjectBadge: "Chemistry 🧪",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      title: "Class 12th Chemistry Organic Reaction Master Sheet",
      desc: "All Named Reactions (Aldol, Cannizzaro, Reimer-Tiemann) + Physical Chemistry Formula Cheat Sheet.",
      fileSize: "3.1 MB PDF"
    },
    {
      id: 3,
      subject: "Mathematics",
      subjectBadge: "Mathematics 📐",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      title: "Class 11th & 12th Calculus Formula & Theorem Booklet",
      desc: "Differentiation, Integration formulas, 3D Vector Geometry proofs, and speed calculation shortcuts.",
      fileSize: "1.8 MB PDF"
    },
    {
      id: 4,
      subject: "Biology",
      subjectBadge: "Biology 🧬",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      title: "Class 12th Biology Important Diagrams & NCERT Revision",
      desc: "High-probability diagram labeling practice sets and Genetics NCERT line-by-line summary.",
      fileSize: "4.2 MB PDF"
    },
    {
      id: 5,
      subject: "BSEB Special",
      subjectBadge: "BSEB Special 📝",
      badgeColor: "bg-orange-500/10 text-orange-300 border-orange-500/30",
      title: "Last 10 Years BSEB Science Solved Question Bank",
      desc: "Subject-wise chapter weightage breakdown and 10-year official Bihar Board examination papers.",
      fileSize: "5.5 MB PDF"
    },
    {
      id: 6,
      subject: "Formula Bank",
      subjectBadge: "Formula Bank 📚",
      badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
      title: "Class 11th to 12th Science Transition Formula Handbook",
      desc: "Essential mathematical tools for Physics & Chemistry numerical calculation speed for 11th & 12th students.",
      fileSize: "2.0 MB PDF"
    }
  ];

  const filteredResources = studyResources.filter((r) => {
    const matchesSubject = activeSubject === 'All' || r.subject.toLowerCase() === activeSubject.toLowerCase();
    const matchesSearch = searchQuery === '' ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      <Navbar onOpenLoginModal={() => setIsLoginModalOpen(true)} />
      
      <main className="flex-grow">
        
        {/* Page Hero Header */}
        <section className="relative bg-[#070d19] text-white py-16 sm:py-24 border-b border-slate-800/80 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 via-blue-500/20 to-indigo-500/20 border border-amber-400/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              <Sparkles size={14} className="text-amber-400" />
              <span>BSEB CLASS 11th & 12th SCIENCE STUDY ZONE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              BSEB Science Study Material & <br />
              <span className="text-amber-400 font-display">Model Paper Download Zone</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Download chapter-wise objective question banks (50% MCQs), formula handbooks, previous year solved papers, and BSEB exam strategies.
            </p>

            {/* Search Input Box */}
            <div className="max-w-xl mx-auto pt-4 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search resources by topic (e.g. Physics, Organic, Calculus)..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-400 outline-none shadow-2xl"
              />
              <Search size={18} className="absolute left-4 top-8 text-slate-500" />
            </div>

          </div>
        </section>

        {/* Resources Grid & Filters */}
        <section className="py-20 bg-[#050b18] text-white border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Subject Filter Pills */}
            <div className="flex justify-center flex-wrap gap-2.5">
              {[
                { id: 'All', label: 'All Resources (6+)' },
                { id: 'Physics', label: 'Physics ⚛️' },
                { id: 'Chemistry', label: 'Chemistry 🧪' },
                { id: 'Mathematics', label: 'Mathematics 📐' },
                { id: 'Biology', label: 'Biology 🧬' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubject(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                    activeSubject === tab.id
                      ? 'gold-gradient-bg text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                      : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Resources Cards Grid */}
            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((res) => (
                  <div
                    key={res.id}
                    className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-800/90 shadow-2xl space-y-5 flex flex-col justify-between hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 group"
                  >
                    <div className="space-y-4">
                      
                      {/* Badge Header */}
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-black px-3 py-1 rounded-full border uppercase tracking-wider ${res.badgeColor}`}>
                          {res.subjectBadge}
                        </span>
                        <span className="text-[10px] bg-slate-950 text-slate-400 font-bold px-2.5 py-0.5 rounded-full border border-slate-800">
                          {res.fileSize}
                        </span>
                      </div>

                      {/* Resource Title */}
                      <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-400 transition-colors leading-snug">
                        {res.title}
                      </h3>

                      {/* Resource Description */}
                      <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                        {res.desc}
                      </p>

                    </div>

                    {/* Download Request Button */}
                    <div className="pt-4 border-t border-slate-800/80">
                      <button
                        onClick={() => setIsAdmissionModalOpen(true)}
                        className="w-full gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Download size={14} />
                        <span>Request Free PDF Download</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-900/90 p-12 rounded-3xl border border-slate-800 text-center space-y-3 max-w-xl mx-auto">
                <FileText size={32} className="text-slate-600 mx-auto" />
                <h4 className="text-lg font-bold text-white">No materials found</h4>
                <p className="text-xs text-slate-400">
                  No matching study resources found for your search query. Try clearing filters.
                </p>
              </div>
            )}

          </div>
        </section>

        {/* Local SEO Blog Articles Section */}
        <section className="py-20 bg-[#060c19] text-white border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
                EXAM GUIDANCE & ARTICLES
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white">
                BSEB Science Study Guides & Advice
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Proven exam strategies and preparation tips for Bettiah students.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {INSTITUTE_DATA.seoBlogPosts.map((post, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-amber-400" />
                        <span>{post.readTime}</span>
                      </span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-base font-bold font-display text-white group-hover:text-amber-400 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {post.excerpt}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsAdmissionModalOpen(true)}
                    className="text-xs font-bold text-amber-400 flex items-center gap-1 hover:underline pt-3 border-t border-slate-800/80"
                  >
                    <span>Read Full Guide & Contact Center</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
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
