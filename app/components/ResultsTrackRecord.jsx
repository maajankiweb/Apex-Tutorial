'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Star, Medal, Award, Search, Sparkles, ArrowRight } from 'lucide-react';

export default function ResultsTrackRecord({ isHomePage = false }) {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(16);

  const stats = [
    {
      icon: TrendingUp,
      value: "5000+",
      label: "Students coached"
    },
    {
      icon: Star,
      value: "85%",
      label: "Score improvement"
    },
    {
      icon: Medal,
      value: "10+",
      label: "Years of results"
    }
  ];

  // 50 Verified Student Result Cards
  const toppers = [
    { initials: "RK", name: "Rahul Kumar", class: "Class 12 BSEB", score: "96 / 100", subject: "Mathematics - 2024", note: "BSEB Board District Topper", category: "Mathematics" },
    { initials: "PS", name: "Priya Singh", class: "Class 12 PCM", score: "94 / 100", subject: "Physics - 2024", note: "Highest Physics score in Bettiah", category: "Physics" },
    { initials: "AY", name: "Anjali Yadav", class: "Class 12 PCB", score: "92 / 100", subject: "Biology - 2024", note: "Bihar Board merit list holder", category: "Biology" },
    { initials: "SJ", name: "Suresh Jha", class: "Class 12 Science", score: "91 / 100", subject: "Chemistry - 2024", note: "Organic Chemistry Distinction", category: "Chemistry" },
    { initials: "VK", name: "Vikas Kumar", class: "Class 12 PCM", score: "90 / 100", subject: "Physics - 2024", note: "NCERT Numerical Specialist", category: "Physics" },
    { initials: "AK", name: "Ankit Verma", class: "Class 12 BSEB", score: "89 / 100", subject: "Mathematics - 2024", note: "Calculus & Vector Topper", category: "Mathematics" },
    { initials: "AM", name: "Amit Mishra", class: "Class 12 PCB", score: "88 / 100", subject: "Chemistry - 2024", note: "High Distinction Scorer", category: "Chemistry" },
    { initials: "SB", name: "Sneha Bharti", class: "Class 12 PCB", score: "87 / 100", subject: "Biology - 2024", note: "Genetics & 3D Diagram Master", category: "Biology" },
    { initials: "NR", name: "Neha Ray", class: "Class 12 PCM", score: "86 / 100", subject: "Physics - 2024", note: "Full marks in 50% Objective MCQs", category: "Physics" },
    { initials: "KG", name: "Kavita Gupta", class: "Class 12 BSEB", score: "85 / 100", subject: "Chemistry - 2024", note: "Inorganic Chemistry Ranker", category: "Chemistry" },
    { initials: "SS", name: "Saurabh Sharma", class: "Class 12 PCM", score: "85 / 100", subject: "Mathematics - 2024", note: "3D Geometry & Matrix Expert", category: "Mathematics" },
    { initials: "MK", name: "Manish Kumar", class: "Class 12 PCB", score: "84 / 100", subject: "Biology - 2024", note: "Botany & Zoology Distinction", category: "Biology" },
    { initials: "RP", name: "Rohan Patel", class: "Class 12 PCM", score: "84 / 100", subject: "Physics - 2024", note: "Electrostatics & Optics Specialist", category: "Physics" },
    { initials: "PK", name: "Pooja Kumari", class: "Class 12 BSEB", score: "83 / 100", subject: "Chemistry - 2024", note: "Physical Chemistry Master", category: "Chemistry" },
    { initials: "AD", name: "Aditya Dubey", class: "Class 12 PCM", score: "83 / 100", subject: "Mathematics - 2024", note: "Algebra & Trigonometry Ranker", category: "Mathematics" },
    { initials: "SP", name: "Shalini Pandey", class: "Class 12 PCB", score: "82 / 100", subject: "Biology - 2024", note: "BSEB Board Merit Certificate", category: "Biology" },
    { initials: "DK", name: "Deepak Kumar", class: "Class 12 PCM", score: "82 / 100", subject: "Physics - 2024", note: "Magnetism & AC Circuits Topper", category: "Physics" },
    { initials: "VG", name: "Vivek Gupta", class: "Class 12 BSEB", score: "81 / 100", subject: "Chemistry - 2024", note: "Top Ranker in Weekly Sunday Tests", category: "Chemistry" },
    { initials: "SK", name: "Sandeep Kumar", class: "Class 12 PCM", score: "81 / 100", subject: "Mathematics - 2024", note: "Linear Programming Master", category: "Mathematics" },
    { initials: "RT", name: "Riya Tiwari", class: "Class 12 PCB", score: "80 / 100", subject: "Biology - 2024", note: "Ecology & Biotechnology Ranker", category: "Biology" },

    // 21 - 35
    { initials: "AR", name: "Alok Roy", class: "Class 11 Science", score: "89 / 100", subject: "Physics - 2024", note: "Class 11th Foundation Topper", category: "Physics" },
    { initials: "NK", name: "Nikhil Kumar", class: "Class 11 Science", score: "88 / 100", subject: "Chemistry - 2024", note: "Class 11th Organic Chemistry Base", category: "Chemistry" },
    { initials: "PS", name: "Pankaj Shah", class: "Class 11 Science", score: "87 / 100", subject: "Mathematics - 2024", note: "Trigonometry & Coordinate Geometry", category: "Mathematics" },
    { initials: "KG", name: "Komal Gupta", class: "Class 11 Science", score: "86 / 100", subject: "Biology - 2024", note: "Cell Biology & Genetics Base", category: "Biology" },
    { initials: "AS", name: "Abhishek Singh", class: "Class 12 PCM", score: "80 / 100", subject: "Physics - 2024", note: "Modern Physics High Scorer", category: "Physics" },
    { initials: "ST", name: "Swati Tripathi", class: "Class 12 PCB", score: "80 / 100", subject: "Chemistry - 2024", note: "Bio-molecules & Polymer Specialist", category: "Chemistry" },
    { initials: "MR", name: "Mohit Raj", class: "Class 12 PCM", score: "79 / 100", subject: "Mathematics - 2024", note: "Integration & Derivative Topper", category: "Mathematics" },
    { initials: "NM", name: "Nisha Maurya", class: "Class 12 PCB", score: "79 / 100", subject: "Biology - 2024", note: "Human Physiology Distinction", category: "Biology" },
    { initials: "VD", name: "Varun Dutt", class: "Class 12 PCM", score: "78 / 100", subject: "Physics - 2024", note: "Ray & Wave Optics Master", category: "Physics" },
    { initials: "PA", name: "Prashant Agarwal", class: "Class 12 BSEB", score: "78 / 100", subject: "Chemistry - 2024", note: "Electrochemistry High Marks", category: "Chemistry" },
    { initials: "SS", name: "Simran Singh", class: "Class 12 PCM", score: "78 / 100", subject: "Mathematics - 2024", note: "Probability & Statistics Ranker", category: "Mathematics" },
    { initials: "PB", name: "Pooja Bharti", class: "Class 12 PCB", score: "77 / 100", subject: "Biology - 2024", note: "Reproductive Health & Microbes", category: "Biology" },
    { initials: "GS", name: "Gaurav Sharma", class: "Class 12 PCM", score: "77 / 100", subject: "Physics - 2024", note: "Semiconductor Electronics Specialist", category: "Physics" },
    { initials: "KM", name: "Kajal Mishra", class: "Class 12 BSEB", score: "76 / 100", subject: "Chemistry - 2024", note: "Coordination Chemistry Distinction", category: "Chemistry" },
    { initials: "RK", name: "Ravi Kant", class: "Class 12 PCM", score: "76 / 100", subject: "Mathematics - 2024", note: "Determinants & Matrices Master", category: "Mathematics" },

    // 36 - 50
    { initials: "AT", name: "Ananya Thakur", class: "Class 11 Science", score: "85 / 100", subject: "Physics - 2024", note: "Class 11th Kinematics Specialist", category: "Physics" },
    { initials: "DK", name: "Dharmendra Kumar", class: "Class 11 Science", score: "84 / 100", subject: "Chemistry - 2024", note: "Class 11th Thermodynamics Master", category: "Chemistry" },
    { initials: "SY", name: "Shubham Yadav", class: "Class 11 Science", score: "84 / 100", subject: "Mathematics - 2024", note: "Sets & Relations Topper", category: "Mathematics" },
    { initials: "MS", name: "Megha Sinha", class: "Class 11 Science", score: "83 / 100", subject: "Biology - 2024", note: "Plant Kingdom & Morphology Base", category: "Biology" },
    { initials: "VJ", name: "Vikram Jha", class: "Class 12 PCM", score: "75 / 100", subject: "Physics - 2024", note: "EM Waves & Alternating Current", category: "Physics" },
    { initials: "SL", name: "Suman Lal", class: "Class 12 BSEB", score: "75 / 100", subject: "Chemistry - 2024", note: "Surface Chemistry High Marks", category: "Chemistry" },
    { initials: "RS", name: "Rakesh Shah", class: "Class 12 PCM", score: "75 / 100", subject: "Mathematics - 2024", note: "Differential Equations Specialist", category: "Mathematics" },
    { initials: "AK", name: "Arti Kumari", class: "Class 12 PCB", score: "74 / 100", subject: "Biology - 2024", note: "Evolution & Biodiversity Distinction", category: "Biology" },
    { initials: "MK", name: "Mukesh Kumar", class: "Class 12 PCM", score: "74 / 100", subject: "Physics - 2024", note: "Current Electricity & Circuits", category: "Physics" },
    { initials: "PS", name: "Prerna Sharma", class: "Class 12 BSEB", score: "74 / 100", subject: "Chemistry - 2024", note: "Solutions & Chemical Kinetics", category: "Chemistry" },
    { initials: "HK", name: "Harish Kumar", class: "Class 12 PCM", score: "73 / 100", subject: "Mathematics - 2024", note: "Vector Analysis & 3D Lines", category: "Mathematics" },
    { initials: "SR", name: "Sneha Ray", class: "Class 12 PCB", score: "73 / 100", subject: "Biology - 2024", note: "Biotechnology & Health Base", category: "Biology" },
    { initials: "SK", name: "Sunil Kumar", class: "Class 12 Science", score: "72 / 100", subject: "Physics - 2024", note: "Gravitation & Oscillations Base", category: "Physics" },
    { initials: "PM", name: "Pooja Maurya", class: "Class 12 BSEB", score: "72 / 100", subject: "Chemistry - 2024", note: "p-Block Elements Mastery", category: "Chemistry" },
    { initials: "VT", name: "Vikas Tiwari", class: "Class 12 PCM", score: "71 / 100", subject: "Mathematics - 2024", note: "Calculus Formula Specialist", category: "Mathematics" }
  ];

  const filteredToppers = toppers.filter((t) => {
    const matchesTab = activeTab === 'All' || t.category === activeTab;
    const matchesSearch = searchQuery === '' ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.class.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // If rendering on Home Page, show ONLY 4 result cards
  const displayedToppers = isHomePage 
    ? toppers.slice(0, 4) 
    : filteredToppers.slice(0, visibleCount);

  return (
    <section className="py-20 bg-[#060c19] text-white relative overflow-hidden border-t border-slate-800/80" id="track-record">
      
      {/* Background Radial Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <p className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
            HAMARA TRACK RECORD
          </p>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
            Results That Speak
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            Consistent Bihar Board success. Har saal students apni best performance achieve karte hain.
          </p>
        </div>

        {/* Middle 3 Metric Counter Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl border border-slate-800/90 shadow-xl text-center space-y-2 hover:border-amber-400/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Icon size={18} />
                </div>
                <p className="text-2xl sm:text-3xl font-serif font-black text-white font-display">
                  {item.value}
                </p>
                <p className="text-xs text-slate-400 font-semibold">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Filter Category Tabs & Live Search Bar (Shown ONLY on Results Page) */}
        {!isHomePage && (
          <div className="space-y-6 pt-4">
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 50 toppers by student name, subject..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs font-medium focus:ring-2 focus:ring-amber-400 outline-none shadow-xl"
              />
              <Search size={16} className="absolute left-4 top-3.5 text-slate-500" />
            </div>

            {/* Filter Pills */}
            <div className="flex justify-center flex-wrap gap-2">
              {[
                { id: 'All', label: 'All 50 Toppers' },
                { id: 'Physics', label: 'Physics ⚛️' },
                { id: 'Chemistry', label: 'Chemistry 🧪' },
                { id: 'Mathematics', label: 'Mathematics 📐' },
                { id: 'Biology', label: 'Biology 🧬' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setVisibleCount(16);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                    activeTab === tab.id
                      ? 'gold-gradient-bg text-slate-950 shadow-lg shadow-amber-500/20 scale-105'
                      : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        )}

        {/* Student Result Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayedToppers.map((student, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 backdrop-blur-xl p-5 rounded-3xl border border-slate-800/90 shadow-2xl space-y-3.5 relative overflow-hidden group hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300"
            >
              {/* Ribbon Medal Badge Icon on Top Right */}
              <div className="absolute top-4 right-4 text-amber-400/40 group-hover:text-amber-400 transition-colors">
                <Medal size={18} />
              </div>

              {/* Header: Avatar Circle + Name & Class */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-lg border border-blue-400/30">
                  {student.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold font-display text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {student.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-semibold">
                    {student.class}
                  </p>
                </div>
              </div>

              {/* Score Highlight Box */}
              <div className="p-3 bg-slate-950/90 rounded-2xl border border-slate-800 space-y-0.5">
                <p className="text-base font-black text-amber-400 font-display">
                  {student.score}
                </p>
                <p className="text-[11px] text-slate-300 font-medium">
                  {student.subject}
                </p>
              </div>

              {/* Note / District Rank */}
              <p className="text-[11px] italic text-slate-400 font-serif leading-snug">
                {student.note}
              </p>

            </div>
          ))}
        </div>

        {/* Home Page Callout CTA (View All 50+ Results) */}
        {isHomePage ? (
          <div className="text-center pt-2">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider px-5 sm:px-8 py-3.5 rounded-2xl shadow-xl hover:scale-105 transition-transform"
            >
              <span>View All 50+ Verified Results</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        ) : (
          /* Load More Button for 50 Cards on Results Page */
          visibleCount < filteredToppers.length && (
            <div className="text-center pt-4">
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 16, filteredToppers.length))}
                className="gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider px-5 sm:px-8 py-3.5 rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-pointer"
              >
                View More Results ({filteredToppers.length - visibleCount} Remaining)
              </button>
            </div>
          )
        )}

        {/* Footer Sub-text Note */}
        <p className="text-center text-[11px] text-slate-500 font-medium pt-2">
          Results based on student self-reporting and official Bihar Board verification. Individual results may vary.
        </p>

      </div>
    </section>
  );
}
