'use client';

import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6 space-y-4">
        <h1 className="text-6xl font-serif font-black text-amber-400 font-display">404</h1>
        <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
        <p className="text-slate-400 text-sm max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="gold-gradient-bg text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg"
        >
          Return to Home Page
        </Link>
      </main>
      <Footer />
    </div>
  );
}
