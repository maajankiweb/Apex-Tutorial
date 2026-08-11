'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Globe, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import ApexLogo from './ApexLogo';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Apex Tutorial Bettiah",
    "alternateName": "Apex Tutorial BSEB 11th & 12th Science Institute",
    "url": "https://apextutorialbettiah.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RG54+P5Q, BE-004-0010, Supriya Main Road, INDRAPURI COLONY, Chawani",
      "addressLocality": "Bettiah",
      "addressRegion": "Bihar",
      "postalCode": "845438",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "162",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/Apextutorialbth/"
    ],
    "description": "Premier Bihar Board (BSEB) Class 11th & 12th Science coaching institute in Bettiah offering Physics, Chemistry, Mathematics & Biology in Hindi & English Medium."
  };

  return (
    <footer className="bg-[#040812] text-slate-400 text-xs border-t border-slate-800/80 relative overflow-hidden pb-20 lg:pb-0">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Decorative Background Radial Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4 Div Box Grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Box 1: Brand Logo, Text & Social Icons */}
          <div className="space-y-4">
            <ApexLogo showSubtitle={false} />
            <p className="text-slate-300 leading-relaxed text-xs">
              Apex Tutorial Bettiah is exclusively dedicated to Bihar Board (BSEB) Class 11th & 12th Science coaching across Physics, Chemistry, Mathematics & Biology in Hindi and English Medium.
            </p>

            <div className="space-y-2 pt-1">
              <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                Connect With Us
              </p>
              
              {/* Social Icons Row: Facebook, Instagram, Twitter, Google */}
              <div className="flex items-center gap-2.5">
                <a
                  href={INSTITUTE_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-all shadow"
                  aria-label="Facebook Page"
                  title="Facebook"
                >
                  <Facebook size={16} />
                </a>

                <a
                  href="https://instagram.com/apextutorialbettiah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-600 hover:to-purple-600 text-white flex items-center justify-center transition-all shadow"
                  aria-label="Instagram Profile"
                  title="Instagram"
                >
                  <Instagram size={16} />
                </a>

                <a
                  href="https://twitter.com/apextutorialbth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-400 hover:bg-sky-500 text-white flex items-center justify-center transition-all shadow"
                  aria-label="Twitter X Profile"
                  title="Twitter (X)"
                >
                  <Twitter size={16} />
                </a>

                <a
                  href={INSTITUTE_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 hover:bg-amber-500 hover:text-slate-950 text-white flex items-center justify-center transition-all shadow"
                  aria-label="Google Maps Profile"
                  title="Google Business Profile"
                >
                  <Globe size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Box 2: Quick Links */}
          <div className="space-y-3.5">
            <h5 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Quick Links</span>
            </h5>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/notice" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Notice & Announcements</span>
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>11th & 12th Science Batches</span>
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Study Material Zone</span>
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Results & Toppers</span>
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Student Reviews (4.7★)</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Contact Campus</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Box 3: Other Related Page Links */}
          <div className="space-y-3.5">
            <h5 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Related & Policies</span>
            </h5>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <a href="/terms#refund" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Admission & Fee Policy</span>
                </a>
              </li>
              <li>
                <a href="/about#discipline" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Academic Discipline Rules</span>
                </a>
              </li>
              <li>
                <a href="/contact#map" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span className="text-slate-600">›</span>
                  <span>Campus Location & Map</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Box 4: Newsletter Subscription */}
          <div className="space-y-3.5">
            <h5 className="text-xs font-black text-white uppercase tracking-widest font-display flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Newsletter & Updates</span>
            </h5>

            <p className="text-slate-300 text-xs leading-relaxed">
              Subscribe to receive latest BSEB 11th & 12th exam updates, model papers, and fresh batch notifications.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 font-medium focus:ring-2 focus:ring-amber-400 outline-none text-xs"
                />
                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider py-2.5 rounded-xl shadow hover:brightness-110 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Send size={13} />
                  <span>Subscribe Newsletter</span>
                </button>
              </form>
            ) : (
              <div className="bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 p-3 rounded-xl text-xs space-y-1 animate-fade-in">
                <div className="flex items-center gap-1.5 font-extrabold text-white">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>Successfully Subscribed!</span>
                </div>
                <p className="text-[11px] text-emerald-200">
                  Thank you for subscribing to Apex Tutorial updates.
                </p>
              </div>
            )}

            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 pt-1">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>We protect your privacy. No spam.</span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="py-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Apex Tutorial Bettiah. All Rights Reserved.</p>
          
          {/* Custom Credit Line */}
          <div className="text-slate-400">
            <span>Designed & Built by </span>
            <a
              href="https://maajankiwebtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-black hover:underline transition-colors"
            >
              Maajanki Web Tech
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
