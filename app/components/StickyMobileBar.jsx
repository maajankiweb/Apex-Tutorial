'use client';

import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function StickyMobileBar({ onOpenAdmissionModal }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-xs font-bold">
        
        {/* Call Button */}
        <a
          href={`tel:${INSTITUTE_DATA.phone.replace(/\s+/g, '')}`}
          className="bg-slate-800 hover:bg-slate-700 text-white py-2.5 px-2 rounded-xl flex flex-col items-center justify-center gap-1 text-center border border-slate-700 active:scale-95 transition-all"
        >
          <Phone size={16} className="text-amber-400" />
          <span className="text-[10px]">Call Center</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=Hello%20Apex%20Tutorial%20Bettiah,%20I%20want%20information%20about%20Class%2011th/12th%20Science%20Admission`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 px-2 rounded-xl flex flex-col items-center justify-center gap-1 text-center shadow active:scale-95 transition-all"
        >
          <MessageSquare size={16} />
          <span className="text-[10px]">WhatsApp</span>
        </a>

        {/* Book Demo Button */}
        <button
          onClick={onOpenAdmissionModal}
          className="gold-gradient-bg text-slate-950 py-2.5 px-2 rounded-xl flex flex-col items-center justify-center gap-1 text-center shadow active:scale-95 transition-all font-black"
        >
          <Sparkles size={16} />
          <span className="text-[10px]">Book Demo</span>
        </button>

      </div>
    </div>
  );
}
