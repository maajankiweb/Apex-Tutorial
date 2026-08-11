'use client';

import { useState } from 'react';
import { ShieldCheck, Info, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function VerifiedDataBanner() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
          <span>
            <strong className="text-white">Verified Data Protocol Active:</strong> 4.7★ (162 Google & 167 Justdial Reviews) | Exclusive BSEB 11th & 12th Science Scope
          </span>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-amber-400 font-bold hover:underline flex items-center gap-1 shrink-0"
        >
          <span>{expanded ? 'Hide Verification Audit' : 'Owner Data Audit'}</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

      </div>

      {expanded && (
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-slate-800 grid md:grid-cols-3 gap-4 text-[11px] text-slate-300">
          <div className="space-y-1">
            <p className="font-bold text-white flex items-center gap-1">
              <CheckCircle2 size={12} className="text-emerald-400" />
              <span>Verified NAP Data:</span>
            </p>
            <p><strong>Primary:</strong> {INSTITUTE_DATA.addressPrimary}</p>
            <p><strong>Helpline:</strong> {INSTITUTE_DATA.phone}</p>
          </div>

          <div className="space-y-1">
            <p className="font-bold text-white flex items-center gap-1">
              <CheckCircle2 size={12} className="text-emerald-400" />
              <span>Academic Scope:</span>
            </p>
            <p>Class 11th & 12th Bihar Board (BSEB) Science Only.</p>
            <p>Subjects: Physics, Chemistry, Maths, Biology.</p>
          </div>

          <div className="space-y-1">
            <p className="font-bold text-white flex items-center gap-1">
              <CheckCircle2 size={12} className="text-emerald-400" />
              <span>Multi-Platform Rating:</span>
            </p>
            <p>Google Maps: 4.7/5 (162 Reviews)</p>
            <p>Justdial Listing: 4.7/5 (167 Votes)</p>
          </div>
        </div>
      )}
    </div>
  );
}
