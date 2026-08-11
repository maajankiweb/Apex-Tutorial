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
import { ShieldCheck, Lock, Eye, Database, UserCheck, FileText, Bell, Sparkles, CheckCircle2, Scale, Globe, Trash2 } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function PrivacyPage() {
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
        'name': 'Privacy Policy',
        'item': 'https://apextutorialbettiah.com/privacy'
      }
    ]
  };

  const sections = [
    { id: 'data-collection', label: '1. Information We Collect' },
    { id: 'data-usage', label: '2. How We Use Your Data' },
    { id: 'data-security', label: '3. Data Security & Encryption' },
    { id: 'third-party', label: '4. Third-Party Sharing Policy' },
    { id: 'cookies', label: '5. Cookies & Website Analytics' },
    { id: 'student-rights', label: '6. Student & Parent Data Rights' },
    { id: 'data-retention', label: '7. Data Retention & Deletion' },
    { id: 'updates', label: '8. Policy Updates & Notifications' },
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
            
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400/20 via-blue-500/20 to-indigo-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              <Lock size={14} className="text-emerald-400" />
              <span>STUDENT DATA PROTECTION & PRIVACY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Privacy Policy & <br />
              <span className="text-amber-400 font-display">Data Security Commitment</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-medium">
              Apex Tutorial Bettiah is committed to safeguarding every student and parent&apos;s personal information collected during BSEB Class 11th & 12th Science coaching enrollment, counseling inquiries, and academic communication.
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
                  <h3 className="text-xs font-black uppercase tracking-widest text-emerald-400 font-display flex items-center gap-2 border-b border-slate-800 pb-3">
                    <FileText size={16} />
                    <span>Privacy Sections Index</span>
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

                <div className="bg-gradient-to-br from-emerald-950/60 to-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 text-xs">
                  <p className="font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    <span>Data Protection Officer</span>
                  </p>
                  <p className="text-slate-300 leading-snug">
                    For any privacy-related inquiries, visit the Apex Tutorial Administrative Desk at Supriya Main Road, Chawani, Bettiah, Bihar 845438.
                  </p>
                </div>
              </div>

              {/* Right Detailed Privacy Content */}
              <div className="lg:col-span-8 space-y-10 text-slate-300 text-sm leading-relaxed">
                
                {/* Section 1 */}
                <div id="data-collection" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                      <Database size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        1. Information We Collect
                      </h2>
                      <p className="text-xs text-slate-400">Personal data categories during enrollment & inquiries</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      When you register for Bihar Board (BSEB) Class 11th or 12th Science coaching at Apex Tutorial Bettiah, submit an admission inquiry form, or contact our WhatsApp desk, we may collect the following information:
                    </p>
                    <ul className="space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Student Personal Details:</strong> Full name, date of birth, class (11th/12th), stream (PCM/PCB), previous school name, and Bihar Board roll number.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Guardian Contact Information:</strong> Parent/guardian name, mobile phone number, WhatsApp number, and residential address in Bettiah or West Champaran district.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Academic Performance Data:</strong> Previous exam marks, subject-wise test scores from Sunday model test series, and weekly evaluation progress reports.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Website Inquiry Data:</strong> Information submitted through our online admission counseling form including preferred batch timing, medium preference (Hindi/English), and inquiry messages.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="data-usage" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">
                      <Eye size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        2. How We Use Your Data
                      </h2>
                      <p className="text-xs text-slate-400">Strictly academic management & parent communication</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      Your personal information is used exclusively for legitimate academic and administrative purposes at Apex Tutorial Bettiah:
                    </p>
                    <ul className="space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Processing and confirming admission enrollment for BSEB 11th & 12th Science batches.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Sending batch schedule updates, exam date notifications, and model test results via WhatsApp and SMS.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Sharing weekly academic progress reports and attendance records with registered parents/guardians.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Responding to admission counseling inquiries and scheduling free demo class visits at the Chawani campus.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 3 */}
                <div id="data-security" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        3. Data Security & Protection Measures
                      </h2>
                      <p className="text-xs text-slate-400">Technical & organizational safeguards</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction:
                    </p>
                    <ul className="space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Student records are maintained in secure digital and physical filing systems with restricted staff access.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Website form submissions are transmitted over HTTPS encrypted connections.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>Only authorized administrative staff and head faculty H.Kumar have access to complete student data records.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="third-party" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold shrink-0">
                      <Globe size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        4. Third-Party Data Sharing Policy
                      </h2>
                      <p className="text-xs text-slate-400">Zero commercial data sharing guarantee</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      Apex Tutorial Bettiah does <strong className="text-white">NOT</strong> sell, rent, trade, or share student or parent personal data with any third-party marketing companies, advertisers, or data brokers under any circumstances.
                    </p>
                    <p>
                      Data may only be shared with Bihar School Examination Board (BSEB) authorities when required for official board registration, examination enrollment, or regulatory compliance.
                    </p>
                  </div>
                </div>

                {/* Section 5 */}
                <div id="cookies" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold shrink-0">
                      <Eye size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        5. Cookies & Website Analytics
                      </h2>
                      <p className="text-xs text-slate-400">Minimal tracking for website improvement</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      Our website (apextutorialbettiah.com) may use essential cookies and analytics tools to understand visitor behavior, improve page performance, and optimize the user experience.
                    </p>
                    <p>
                      We do not use cookies for advertising retargeting or cross-site tracking. All analytics data is anonymized and aggregated.
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="student-rights" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold shrink-0">
                      <UserCheck size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        6. Student & Parent Data Rights
                      </h2>
                      <p className="text-xs text-slate-400">Access, correction & withdrawal options</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      Students and parents/guardians have the right to:
                    </p>
                    <ul className="space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Access:</strong> Request a copy of all personal data held by Apex Tutorial Bettiah.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Correction:</strong> Request updates to inaccurate or incomplete personal information.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Withdrawal:</strong> Opt out of WhatsApp/SMS communications at any time by contacting the administrative desk.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong className="text-white">Deletion:</strong> Request deletion of personal data after course completion, subject to legal retention requirements.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 7 */}
                <div id="data-retention" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold shrink-0">
                      <Trash2 size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        7. Data Retention & Deletion Schedule
                      </h2>
                      <p className="text-xs text-slate-400">Retention periods & automatic purging</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      Enrollment records and academic performance data are retained for the duration of the student&apos;s active coaching period plus 2 academic years after course completion for result verification purposes.
                    </p>
                    <p>
                      Website inquiry form submissions are retained for 12 months from the date of submission. Inactive inquiry data is automatically purged from our records.
                    </p>
                  </div>
                </div>

                {/* Section 8 */}
                <div id="updates" className="bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-4">
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shrink-0">
                      <Bell size={20} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold font-display text-white">
                        8. Policy Updates & Change Notifications
                      </h2>
                      <p className="text-xs text-slate-400">Transparency in policy revisions</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                    <p>
                      Apex Tutorial Bettiah reserves the right to update this Privacy Policy at any time. Material changes will be communicated through website notifications and WhatsApp broadcast updates to enrolled students and parents.
                    </p>
                    <p>
                      Continued use of our services after policy changes constitutes acceptance of the updated terms. We encourage periodic review of this page.
                    </p>
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
