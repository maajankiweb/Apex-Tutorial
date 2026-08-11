'use client';

import { useState } from 'react';
import { X, CheckCircle, Send, PhoneCall, Sparkles, BookOpen } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function AdmissionModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentPhone: '',
    targetClass: 'Class 12th Science (BSEB)',
    streamSubjects: 'PCM (Physics, Chem, Math)',
    medium: 'Hindi Medium',
    preferredBatch: '6:00 AM Early Morning Batch',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp message (100% English)
    const msg = `*New Admission Inquiry - Apex Tutorial Bettiah*%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Phone:* ${formData.parentPhone}%0A` +
      `*Class:* ${formData.targetClass}%0A` +
      `*Subjects:* ${formData.streamSubjects}%0A` +
      `*Medium:* ${formData.medium}%0A` +
      `*Preferred Batch:* ${formData.preferredBatch}`;
    
    const waUrl = `https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=${msg}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <div className="space-y-1">
              <span className="bseb-badge text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                BSEB 11th & 12th Science Admissions 2026-27
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white font-display">
                Book Free Demo Class
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Fill this form to reserve your seat in early morning (6:00 AM) or evening Science batches at Supriya Main Road campus, Bettiah.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Student Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  placeholder="e.g. Rahul Kumar"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  value={formData.parentPhone}
                  onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
                  placeholder="10-digit mobile number"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Target Class *
                  </label>
                  <select
                    value={formData.targetClass}
                    onChange={(e) => setFormData({...formData, targetClass: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                  >
                    <option value="Class 12th Science (BSEB)">Class 12th Science (BSEB)</option>
                    <option value="Class 11th Science (BSEB)">Class 11th Science (BSEB)</option>
                    <option value="12th Science Crash Course">12th Science Crash Course</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Instruction Medium *
                  </label>
                  <select
                    value={formData.medium}
                    onChange={(e) => setFormData({...formData, medium: e.target.value})}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                  >
                    <option value="Hindi Medium">Hindi Medium</option>
                    <option value="English Medium">English Medium</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Subjects Stream *
                </label>
                <select
                  value={formData.streamSubjects}
                  onChange={(e) => setFormData({...formData, streamSubjects: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                >
                  <option value="PCM (Physics, Chem, Math)">PCM (Physics, Chemistry, Maths)</option>
                  <option value="PCB (Physics, Chem, Bio)">PCB (Physics, Chemistry, Biology)</option>
                  <option value="PCMB (All 4 Subjects)">PCMB (Physics, Chem, Maths, Biology)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Preferred Batch Timing *
                </label>
                <select
                  value={formData.preferredBatch}
                  onChange={(e) => setFormData({...formData, preferredBatch: e.target.value})}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-600 outline-none"
                >
                  <option value="6:00 AM Early Morning Batch">6:00 AM Early Morning Batch</option>
                  <option value="Morning 7:30 AM Batch">Morning 7:30 AM Batch</option>
                  <option value="Evening 3:30 PM Batch">Evening 3:30 PM Batch</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-slate-950 font-black text-sm py-3.5 rounded-xl shadow-lg hover:brightness-110 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Submit Inquiry & Connect on WhatsApp</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle size={36} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white font-display">
              Inquiry Submitted Successfully!
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
              Thank you, <strong>{formData.studentName}</strong>! Redirecting you to WhatsApp connect with Apex Tutorial Bettiah helpline (`{INSTITUTE_DATA.phone}`).
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-slate-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
