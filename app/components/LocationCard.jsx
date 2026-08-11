'use client';

import { MapPin, Phone, Clock, Navigation, Compass, AlertCircle, Sparkles } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function LocationCard({ showPhone = false }) {
  return (
    <section className="py-20 bg-[#060c19] text-white relative overflow-hidden border-t border-slate-800/80" id="map">
      
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-amber-500/20 border border-blue-500/30 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            <Sparkles size={14} className="text-amber-400" />
            <span>Campus Location & Contact</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
            Visit Apex Tutorial Bettiah
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Located conveniently on Supriya Main Road, Chawani, Bettiah, West Champaran.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Campus Info Card */}
          <div className="lg:col-span-5 bg-slate-900/90 backdrop-blur-xl p-7 sm:p-8 rounded-3xl border border-slate-800/90 shadow-2xl space-y-6 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300">
            
            <div className="space-y-5">
              <h3 className="text-xl font-bold font-display text-white border-b border-slate-800/80 pb-3.5 flex items-center justify-between">
                <span>Institute Details</span>
                <span className="text-[10px] bg-amber-400/10 text-amber-300 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-black uppercase">
                  Main Campus
                </span>
              </h3>

              {/* Primary Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Campus Address</p>
                  <p className="text-sm font-bold text-white leading-snug">
                    {INSTITUTE_DATA.addressPrimary}
                  </p>
                  <p className="text-xs text-amber-300 font-medium flex items-center gap-1">
                    <Compass size={13} className="shrink-0" />
                    <span>Landmark: {INSTITUTE_DATA.landmark}</span>
                  </p>
                </div>
              </div>

              {/* Phone (Rendered ONLY when showPhone prop is true) */}
              {showPhone && (
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Campus Helpline</p>
                    <a
                      href={`tel:${INSTITUTE_DATA.phone.replace(/\s+/g, '')}`}
                      className="text-base font-extrabold text-amber-400 hover:underline block"
                    >
                      {INSTITUTE_DATA.phone}
                    </a>
                    <p className="text-xs text-slate-400">Direct admission & batch inquiry helpline</p>
                  </div>
                </div>
              )}

              {/* Hours & Timings */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={20} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Class Timings & Hours</p>
                  <p className="text-sm font-bold text-white">
                    {INSTITUTE_DATA.hoursText}
                  </p>
                  <p className="text-xs text-slate-300 font-medium">
                    Early Morning Batches starting sharp at <strong className="text-amber-400">6:00 AM</strong>
                  </p>
                </div>
              </div>

              {/* Secondary Address Note */}
              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-white">
                  <AlertCircle size={14} className="text-amber-400" />
                  <span>Justdial Reference Address</span>
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Listing reference: <em>{INSTITUTE_DATA.addressSecondary}</em>. Please visit Supriya Main Road, Chawani for main campus admissions.
                </p>
              </div>

            </div>

            {/* Directions Action Button */}
            <a
              href={INSTITUTE_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer mt-4"
            >
              <Navigation size={18} />
              <span>Get Google Maps Directions</span>
            </a>

          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 min-h-[420px] relative group">
            <iframe
              title="Apex Tutorial Bettiah Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.0!2d84.502!3d26.802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39936ec0bceb2de9%3A0xecc49698aa2caec7!2sApex%20Tutorial!5e0!3m2!1sen!2sin!4v1786373394134"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px] filter contrast-105"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
