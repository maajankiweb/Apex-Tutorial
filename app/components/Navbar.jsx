'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import ApexLogo from './ApexLogo';

export default function Navbar({ onOpenLoginModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/notice', label: 'Notice' },
    { href: '/courses', label: 'Program' },
    { href: '/resources', label: 'Resources' },
    { href: '/results', label: 'Results' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl py-2.5 sm:py-3'
          : 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center shrink-0">
          <ApexLogo showSubtitle={false} />
        </div>

        {/* Center: Navigation Links (Desktop only) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Log In Button — COMMENTED OUT until backend/dashboard is built */}
        {/* 
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenLoginModal}
            className="gold-gradient-bg text-slate-950 font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/10 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <LogIn size={15} />
            <span>Log in</span>
          </button>
        </div>
        */}

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} className="text-amber-400" /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[57px] bottom-0 z-50 bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800 px-4 pt-4 pb-24 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-2">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 px-3 pb-1">
              Menu Navigation
            </p>
            
            <div className="flex flex-col space-y-1.5 font-semibold text-sm">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-3.5 rounded-xl flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-blue-600/20 text-blue-400 font-bold border border-blue-500/40'
                        : 'text-slate-200 bg-slate-900/50 hover:bg-slate-900 border border-slate-800/40'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={16} className={isActive ? "text-blue-400" : "text-slate-500"} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Login button in mobile drawer — COMMENTED OUT until backend/dashboard is built */}
          {/*
          <div className="pt-6 border-t border-slate-800 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLoginModal();
              }}
              className="w-full gold-gradient-bg text-slate-950 font-black py-3.5 rounded-xl shadow-xl text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <LogIn size={16} />
              <span>Log in to Student / Portal</span>
            </button>
          </div>
          */}
        </div>
      )}
    </header>
  );
}
