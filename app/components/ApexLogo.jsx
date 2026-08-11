'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ApexLogo({ className = "", showSubtitle = true }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {!imgError ? (
        <img
          src="/logo.png"
          alt="Apex Tutorial Bettiah Logo"
          className="h-10 w-10 rounded-xl object-cover shadow-md group-hover:scale-105 transition-transform"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-900 via-blue-700 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
          A
        </div>
      )}

      <div>
        <div className="flex items-center gap-1.5">
          <span className="font-black text-xl sm:text-2xl text-white tracking-tight font-display">
            APEX TUTORIAL
          </span>
          <span className="text-[10px] bg-amber-500/20 text-amber-300 font-extrabold px-2 py-0.5 rounded border border-amber-500/30">
            BETTIAH
          </span>
        </div>
        {showSubtitle && (
          <p className="text-[11px] text-blue-400 font-bold tracking-wide">
            BSEB Class 11th & 12th Science Institute
          </p>
        )}
      </div>
    </Link>
  );
}
