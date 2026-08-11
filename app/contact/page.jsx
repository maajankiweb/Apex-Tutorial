'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyMobileBar from '../components/StickyMobileBar';
import AdmissionModal from '../components/AdmissionModal';
import LoginModal from '../components/LoginModal';
import LocationCard from '../components/LocationCard';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import { Phone, MessageCircle, MapPin, Clock, Send, Sparkles, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function ContactPage() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    studentName: '',
    guardianName: '',
    phone: '',
    targetClass: 'Class 12th Science Target',
    medium: 'Hindi Medium',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        studentName: '',
        guardianName: '',
        phone: '',
        targetClass: 'Class 12th Science Target',
        medium: 'Hindi Medium',
        message: ''
      });
    }, 4000);
  };

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
              <span>OFFICIAL CAMPUS HELPLINE & LOCATION • BETTIAH</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Connect With Apex Tutorial <br />
              <span className="text-amber-400 font-display">Bettiah Campus</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
              Visit our campus on Supriya Main Road, Chawani, Bettiah or connect directly with our admission helpline for BSEB Class 11th & 12th Science seat reservation.
            </p>

            {/* Quick Contact Cards Grid (Exclusive Mobile Numbers Display) */}
            <div className="pt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              
              {/* Call Helpline */}
              <a
                href={`tel:${INSTITUTE_DATA.phone}`}
                className="bg-slate-900/90 backdrop-blur-xl p-5 rounded-3xl border border-slate-800 text-center space-y-2 hover:border-amber-400/50 transition-all group shadow-xl"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Official Helpline</p>
                <p className="text-base font-black text-amber-400 font-display">{INSTITUTE_DATA.phoneFormatted}</p>
              </a>

              {/* WhatsApp Desk */}
              <a
                href={`https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=Hello%20Apex%20Tutorial%20Bettiah,%20I%20want%20to%20inquire%20about%20admissions`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/90 backdrop-blur-xl p-5 rounded-3xl border border-slate-800 text-center space-y-2 hover:border-emerald-400/50 transition-all group shadow-xl"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <MessageCircle size={18} />
                </div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">WhatsApp Instant Desk</p>
                <p className="text-base font-black text-emerald-400 font-display">+91 98520 02500</p>
              </a>

              {/* Campus Address */}
              <div className="bg-slate-900/90 backdrop-blur-xl p-5 rounded-3xl border border-slate-800 text-center space-y-2 shadow-xl">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto">
                  <MapPin size={18} />
                </div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Location Landmark</p>
                <p className="text-xs text-slate-200 font-bold leading-tight">Supriya Main Road, Chawani, Bettiah</p>
              </div>

              {/* Batch Timings */}
              <div className="bg-slate-900/90 backdrop-blur-xl p-5 rounded-3xl border border-slate-800 text-center space-y-2 shadow-xl">
                <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center mx-auto">
                  <Clock size={18} />
                </div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Early Morning Batch</p>
                <p className="text-xs text-amber-300 font-bold">6:00 AM Sharp Daily</p>
              </div>

            </div>

          </div>
        </section>

        {/* Contact & Counseling Form Section */}
        <section className="py-20 bg-[#050b18] text-white border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Form Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">
                    ADMISSION COUNSELING & INQUIRY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
                    Send Us Your Query
                  </h2>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-medium">
                  Fill out the quick counseling form, and our academic coordinator will contact you directly with batch timings, fee structures, and free demo class availability.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Direct response within 2 hours during working hours",
                    "Free trial demo class reservation",
                    "NCERT study material guide consultation",
                    "Parent-faculty interaction desk"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-slate-200">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Callout Box */}
                <div className="p-5 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2">
                  <p className="text-xs font-black text-amber-400 uppercase tracking-wider">Prefer Direct Phone Call?</p>
                  <p className="text-xs text-slate-300 font-medium">
                    Call our Bettiah desk directly at <a href={`tel:${INSTITUTE_DATA.phone}`} className="text-amber-400 font-bold hover:underline">{INSTITUTE_DATA.phoneFormatted}</a> between 6:00 AM and 7:00 PM.
                  </p>
                </div>
              </div>

              {/* Right Interactive Form */}
              <div className="lg:col-span-7">
                <div className="bg-slate-900/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-slate-800/90 shadow-2xl space-y-6">
                  
                  {submitted ? (
                    <div className="p-8 bg-emerald-950/80 border border-emerald-800 rounded-2xl text-center space-y-3">
                      <ShieldCheck size={36} className="text-emerald-400 mx-auto" />
                      <h3 className="text-xl font-bold text-white">Inquiry Received Successfully!</h3>
                      <p className="text-xs text-emerald-200">
                        Thank you for reaching out. Our Bettiah campus admission coordinator will connect with you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-300">Student Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.studentName}
                            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                            placeholder="e.g. Rahul Kumar"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-medium focus:ring-2 focus:ring-amber-400 outline-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-300">Father / Guardian Name</label>
                          <input
                            type="text"
                            value={formData.guardianName}
                            onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                            placeholder="e.g. Rajesh Kumar"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-medium focus:ring-2 focus:ring-amber-400 outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-300">Mobile Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 98520 02500"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-medium focus:ring-2 focus:ring-amber-400 outline-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-extrabold text-slate-300">Target Batch *</label>
                          <select
                            value={formData.targetClass}
                            onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-medium focus:ring-2 focus:ring-amber-400 outline-none cursor-pointer"
                          >
                            <option value="Class 12th Science Target">Class 12th BSEB Target Batch</option>
                            <option value="Class 11th Science Foundation">Class 11th Science Foundation Program</option>
                            <option value="Class 12th Board Crash Course">Class 12th Board Crash Course & Test Series</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-300">Medium Preference</label>
                        <div className="flex gap-4 pt-1">
                          {['Hindi Medium', 'English Medium'].map((med) => (
                            <label key={med} className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer">
                              <input
                                type="radio"
                                name="medium"
                                value={med}
                                checked={formData.medium === med}
                                onChange={(e) => setFormData({ ...formData, medium: e.target.value })}
                                className="accent-amber-400"
                              />
                              <span>{med}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-extrabold text-slate-300">Your Message / Query</label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Ask about batch timings, fee structure, or demo class..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-medium focus:ring-2 focus:ring-amber-400 outline-none resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Submit Admission Inquiry</span>
                        <Send size={15} />
                      </button>

                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Location Card Map Section (Exclusive Phone Highlighted) */}
        <LocationCard showPhone={true} />

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
