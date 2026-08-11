'use client';

import { useState } from 'react';
import { X, LogIn, Lock, User, CheckCircle, ShieldCheck } from 'lucide-react';
import { INSTITUTE_DATA } from '../data/instituteData';

export default function LoginModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('student'); // 'student' | 'faculty'
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const resetAndClose = () => {
    setIsLoggedIn(false);
    setUserId('');
    setPassword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-white">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X size={20} />
        </button>

        {!isLoggedIn ? (
          <div className="space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto shadow-lg shadow-blue-500/10">
                <LogIn size={24} />
              </div>
              <h3 className="text-2xl font-black font-display tracking-tight">
                Apex Portal Login
              </h3>
              <p className="text-xs text-slate-400">
                Access your BSEB 11th & 12th attendance, batch test marks & study notes.
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="grid grid-cols-2 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-bold">
              <button
                type="button"
                onClick={() => setActiveTab('student')}
                className={`py-2 rounded-lg transition-colors ${
                  activeTab === 'student'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Student Portal
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('faculty')}
                className={`py-2 rounded-lg transition-colors ${
                  activeTab === 'faculty'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Faculty / Admin
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-300 mb-1.5">
                  {activeTab === 'student' ? 'Roll Number / Mobile No.' : 'Faculty ID'}
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-3 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder={activeTab === 'student' ? 'Enter 10-digit mobile or Roll No.' : 'Enter Faculty ID'}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-3 text-slate-500" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-800 bg-slate-950 text-white font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-0" />
                  <span>Remember me</span>
                </label>
                <a
                  href={`https://wa.me/${INSTITUTE_DATA.whatsappNumber}?text=Forgot%20password%20for%20Apex%20Portal`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline font-bold"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full gold-gradient-bg text-slate-950 font-black text-sm py-3.5 rounded-xl shadow-lg hover:brightness-110 flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <LogIn size={16} />
                  <span>Log In to Portal</span>
                </button>
              </div>

              <div className="text-center pt-2 text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Apex Tutorial Bettiah Verified Portal</span>
              </div>
            </form>

          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle size={36} />
            </div>
            <h4 className="text-2xl font-black font-display">
              Welcome Back!
            </h4>
            <p className="text-xs text-slate-300">
              Logged in successfully as <strong className="text-amber-400">{userId || 'Student'}</strong>. Redirecting to student dashboard...
            </p>
            <button
              onClick={resetAndClose}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
