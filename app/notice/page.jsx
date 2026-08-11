'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyMobileBar from '../components/StickyMobileBar';
import AdmissionModal from '../components/AdmissionModal';
import LoginModal from '../components/LoginModal';
import FinalCTA from '../components/FinalCTA';
import { Bell, Calendar, Clock, Sparkles, Search, CheckCircle2, ArrowRight, ShieldAlert, FileText, MessageCircle } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function NoticePage() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeTag, setActiveTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const noticesList = [
    {
      id: 1,
      tag: "Fresh Batch",
      tagColor: "bg-amber-400/10 text-amber-300 border-amber-400/30",
      date: "August 2026",
      title: "Class 12th BSEB Target Batch 2026-27 Admissions Open",
      desc: "Early morning 6:00 AM batch registration is open. Seats are strictly limited to maintain quiet classroom atmosphere. Free demo classes available from Monday to Saturday.",
      actionText: "Book Free Demo Class",
      actionType: "modal"
    },
    {
      id: 2,
      tag: "Fresh Batch",
      tagColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      date: "August 2026",
      title: "Class 11th Science Foundation Batch Registration Started",
      desc: "Dedicated Hindi Medium and English Medium options available for Class 10 to 11th transition students. Special conceptual bridging lectures for Physics and Chemistry numerical base.",
      actionText: "Inquire Batch Schedule",
      actionType: "modal"
    },
    {
      id: 3,
      tag: "Model Test Series",
      tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      date: "Every Sunday",
      title: "Class 12th Board Model Test Series Schedule Released",
      desc: "Compulsory 3-hour evaluation tests conducted every Sunday sharp at 7:00 AM based 100% on the latest BSEB Bihar Board pattern (50% MCQs + 50% Subjective).",
      actionText: "View Test Pattern",
      actionType: "link",
      href: "/courses"
    },
    {
      id: 4,
      tag: "Important Alert",
      tagColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      date: "Official BSEB Update",
      title: "BSEB 12th Board Exam Form Fill-up & Registration Advisory",
      desc: "All enrolled Class 12th students must verify their Aadhar card, passport photo, and registration details at the Bettiah campus counter for Bihar Board form verification.",
      actionText: "Contact Counter",
      actionType: "link",
      href: "/contact"
    },
    {
      id: 5,
      tag: "Model Test Series",
      tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      date: "Weekly Update",
      title: "Class 11th Chapter-wise Objective Practice Sheet Distribution",
      desc: "Printed practice sheets for Physics (Vectors & Kinematics) and Chemistry (Atomic Structure) are now available in the student study portal for download.",
      actionText: "Go to Resources",
      actionType: "link",
      href: "/resources"
    },
    {
      id: 6,
      tag: "Important Alert",
      tagColor: "bg-orange-500/10 text-orange-300 border-orange-500/30",
      date: "Campus Discipline",
      title: "Strict Morning Batch Punctuality Advisory (6:00 AM Sharp)",
      desc: "Campus main gates close sharp at 6:05 AM for early morning batches. Late entry will not be permitted to maintain silent study environment.",
      actionText: "Read Discipline Rules",
      actionType: "link",
      href: "/about#discipline"
    }
  ];

  const filteredNotices = noticesList.filter((n) => {
    const matchesTag = activeTag === 'All' || n.tag === activeTag;
    const matchesSearch = searchQuery === '' || 
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      n.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
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
              <Bell size={14} className="text-amber-400 animate-bounce" />
              <span>OFFICIAL ACADEMIC BULLETIN • BETTIAH</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Apex Tutorial Official <br />
              <span className="text-amber-400 font-display">Notice Board & Updates</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Real-time updates on BSEB Class 11th & 12th Science batches, Sunday model test series, holidays, and board exam registration schedules.
            </p>

            {/* Search Input Box */}
            <div className="max-w-xl mx-auto pt-4 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notices by keyword (e.g. 12th, Test, Batch)..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-400 outline-none shadow-2xl"
              />
              <Search size={18} className="absolute left-4 top-8 text-slate-500" />
            </div>

          </div>
        </section>

        {/* Filter Tabs & Notices Grid */}
        <section className="py-16 bg-[#050b18] text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            
            {/* Filter Category Pills */}
            <div className="flex justify-center flex-wrap gap-2.5">
              {[
                { id: 'All', label: 'All Notices' },
                { id: 'Fresh Batch', label: 'Fresh Batches 🎓' },
                { id: 'Model Test Series', label: 'Model Test Series 📝' },
                { id: 'Important Alert', label: 'Important Alerts ⚠️' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTag(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                    activeTag === tab.id
                      ? 'gold-gradient-bg text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                      : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Notices Cards Grid */}
            {filteredNotices.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNotices.map((n) => (
                  <div
                    key={n.id}
                    className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-slate-800/90 shadow-2xl space-y-5 flex flex-col justify-between hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 group"
                  >
                    <div className="space-y-4">
                      
                      {/* Notice Tag & Date Header */}
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-black px-3 py-1 rounded-full border uppercase tracking-wider ${n.tagColor}`}>
                          {n.tag}
                        </span>
                        <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                          <Calendar size={12} className="text-amber-400" />
                          <span>{n.date}</span>
                        </span>
                      </div>

                      {/* Notice Title */}
                      <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-400 transition-colors leading-snug">
                        {n.title}
                      </h3>

                      {/* Notice Description */}
                      <p className="text-xs text-slate-300 leading-relaxed font-sans font-medium">
                        {n.desc}
                      </p>

                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-slate-800/80">
                      {n.actionType === 'modal' ? (
                        <button
                          onClick={() => setIsAdmissionModalOpen(true)}
                          className="w-full gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider py-3 rounded-xl shadow hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>{n.actionText}</span>
                          <ArrowRight size={14} />
                        </button>
                      ) : (
                        <Link
                          href={n.href}
                          className="w-full bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 text-center"
                        >
                          <span>{n.actionText}</span>
                          <ArrowRight size={14} />
                        </Link>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-900/90 p-12 rounded-3xl border border-slate-800 text-center space-y-3 max-w-xl mx-auto">
                <Bell size={32} className="text-slate-600 mx-auto" />
                <h4 className="text-lg font-bold text-white">No notices found</h4>
                <p className="text-xs text-slate-400">
                  No matching notices found for your search query. Try clearing filters.
                </p>
              </div>
            )}

            {/* Direct WhatsApp Helpline Banner */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border border-slate-800 p-6 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
              <div className="space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-amber-400 font-extrabold text-xs">
                  <Sparkles size={14} />
                  <span>Official Notice Inquiry</span>
                </div>
                <p className="text-sm font-extrabold text-white">
                  Have a question regarding any announcement or batch timing?
                </p>
              </div>

              <a
                href={`https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=Hello%20Apex%20Tutorial%20Bettiah,%20I%20have%20a%20question%20regarding%20the%20latest%20notice`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 px-6 py-3 rounded-xl font-extrabold text-xs shadow-lg active:scale-95 transition-all flex items-center gap-2 shrink-0"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Desk</span>
              </a>
            </div>

          </div>
        </section>

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
