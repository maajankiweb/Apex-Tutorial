'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, MessageSquare, Sparkles, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const faqs = [
    {
      id: 1,
      category: "Teaching & Smart Board",
      q: "Apex Tutorial ka kya approach hai Bihar Board ke liye?",
      a: "Hum 100% Bihar Board (BSEB) Class 11th & 12th Science syllabus pe focused hain. Smart Board se visual teaching, Hinglish/Hindi & English medium mein concepts explain karte hain taaki har student samajh sake. Practice questions, model papers aur mock tests bhi dete hain."
    },
    {
      id: 2,
      category: "Admissions & Batches",
      q: "Batches ki timing kya hai aur kya morning batches available hain?",
      a: "Apex Tutorial Bettiah mein early morning batches sharp 6:00 AM se start hote hain. Early morning classes se students fresh mental energy ke saath padhte hain aur din ka baaki time self-study revision ke liye milta hai."
    },
    {
      id: 3,
      category: "Admissions & Batches",
      q: "Kya Hindi aur English dono Medium ke students padh sakte hain?",
      a: "Haan, humare paas Hindi Medium aur English Medium dono ke dedicated BSEB Science batches hain. Physics, Chemistry, Mathematics aur Biology dono mediums mein in-depth padhaya jata hai."
    },
    {
      id: 4,
      category: "Teaching & Smart Board",
      q: "Class miss ho jane par kya backup / recording milti hai?",
      a: "Apex Tutorial hybrid learning model follow karta hai. Agar kisi student ki class miss hoti hai, toh online portal & recorded backup lectures se wo concept revision kar sakta hai."
    },
    {
      id: 5,
      category: "Tests & Guidance",
      q: "Weak students ke liye doubt session aur personal attention kaise milti hai?",
      a: "Lectures ke baad daily 1-on-1 doubt solving session hota hai. Class mein limited batch size aur individual progress tracking ki wajah se har student ko personal attention milti hai."
    },
    {
      id: 6,
      category: "Tests & Guidance",
      q: "Weekly tests kis pattern pe hote hain?",
      a: "Har Sunday ko compulsory weekly tests conduct kiye jaate hain jo 100% Bihar Board (BSEB) latest pattern aur 50% objective MCQs format par based hote hain."
    },
    {
      id: 7,
      category: "Teaching & Smart Board",
      q: "Smart Board ka kya fayda hai normal board se zyada?",
      a: "Smart Board technology se complex 3D Science diagrams, animations aur visual experiments dikhaye jaate hain jisse Physics aur Chemistry ke concepts fast aur permanent yaad rehte hain."
    },
    {
      id: 8,
      category: "Admissions & Batches",
      q: "Admission process aur fee structure ki enquiry kaise karein?",
      a: "Aap humare Bettiah campus (Supriya Main Road, Chawani) visit kar sakte hain ya direct WhatsApp par message karke demo class book aur fee structure enquiry kar sakte hain."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    if (activeCategory === 'All') return true;
    return faq.category === activeCategory;
  });

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-[#050b18] text-white relative overflow-hidden border-t border-slate-800/80" id="faq">
      
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 via-blue-500/20 to-indigo-500/20 border border-amber-400/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            <HelpCircle size={14} className="text-amber-400" />
            <span>SAWAAL JAWAB • FAQ HELP CENTER</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Kuch bhi poochna ho toh yahan dekho — ya WhatsApp karo seedha.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex justify-center flex-wrap gap-2">
          {[
            { id: 'All', label: 'All FAQs (8)' },
            { id: 'Admissions & Batches', label: 'Admissions & Batches' },
            { id: 'Teaching & Smart Board', label: 'Teaching & Smart Board' },
            { id: 'Tests & Guidance', label: 'Tests & Guidance' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'gold-gradient-bg text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 8 Accordions Container */}
        <div className="space-y-4 pt-2">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden group ${
                  isOpen
                    ? 'bg-slate-900/95 border-amber-500/60 shadow-2xl shadow-amber-500/10'
                    : 'bg-slate-900/80 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {/* Index Number Badge */}
                    <div className={`w-8 h-8 rounded-xl border flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-amber-400/20 text-amber-300 border-amber-400/50'
                        : 'bg-slate-950 text-slate-400 border-slate-800 group-hover:border-slate-700'
                    }`}>
                      0{faq.id}
                    </div>

                    {/* Question Title */}
                    <span className={`text-sm sm:text-base font-extrabold font-display leading-snug transition-colors ${
                      isOpen ? 'text-amber-400' : 'text-slate-100 group-hover:text-white'
                    }`}>
                      {faq.q}
                    </span>
                  </div>

                  {/* Toggle Circle Icon */}
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    isOpen
                      ? 'bg-amber-400/20 border-amber-400/50 text-amber-400'
                      : 'bg-slate-950 border-slate-800 text-slate-400 group-hover:text-white'
                  }`}>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 font-sans space-y-3">
                    <div className="pt-3 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
                      <p>{faq.a}</p>
                      <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold pt-1">
                        <CheckCircle2 size={13} />
                        <span>Verified Apex Tutorial Academic Info</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct WhatsApp Callout Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border border-slate-800 p-6 sm:p-7 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-amber-400 font-extrabold text-xs">
              <Sparkles size={14} />
              <span>Have More Questions?</span>
            </div>
            <p className="text-sm font-extrabold text-white">
              Aur kuch poochna hai? Directly WhatsApp karo.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=Hello%20Apex%20Tutorial%20Bettiah,%20I%20have%20a%20question%20about%20Class%2011th/12th%20Science%20Admissions`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-700/80 px-5 py-3 rounded-xl font-extrabold text-xs shadow-lg active:scale-95 transition-all flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className="gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center gap-1.5"
            >
              <span>Contact Campus</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
