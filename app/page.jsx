'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import TrustStrip from './components/TrustStrip';
import ResultsTrackRecord from './components/ResultsTrackRecord';
import HybridEcosystem from './components/HybridEcosystem';
import SciencePrograms from './components/SciencePrograms';
import DirectorsMessage from './components/DirectorsMessage';
import WhyChooseUs from './components/WhyChooseUs';
import DisciplineRules from './components/DisciplineRules';
import ReviewSection from './components/ReviewSection';
import NoticeBoard from './components/NoticeBoard';
import FaqSection from './components/FaqSection';
import LocationCard from './components/LocationCard';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import AdmissionModal from './components/AdmissionModal';
import LoginModal from './components/LoginModal';

export default function Home() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Clean Single Navbar Header */}
      <Navbar onOpenLoginModal={() => setIsLoginModalOpen(true)} />

      <main className="flex-grow">
        {/* Image 1: Hero Section */}
        <Hero onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />

        {/* Image 2: Stats Counter Section */}
        <StatsBar />

        {/* Image 3: Rating & Trust Badges Strip */}
        <TrustStrip />

        {/* Results Track Record (Hamara Track Record: Shows Top 4 Results on Home Page) */}
        <ResultsTrackRecord isHomePage={true} />

        {/* Hybrid Ecosystem (Smart Classroom Experience: Offline + Online, Ek Saath) */}
        <HybridEcosystem />

        {/* Course Programs (Science Course Offerings & Schedules) */}
        <SciencePrograms onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />
        
        {/* Director's Message */}
        <DirectorsMessage />

        {/* Why Choose Us Section (Hamare Baare Mein) */}
        <WhyChooseUs />

        {/* Academic Discipline Pillars */}
        <DisciplineRules />

        {/* Verified Student & Parent Reviews */}
        <ReviewSection />

        {/* Notice Board (Latest Updates) */}
        <NoticeBoard />

        {/* FAQ Accordion Section (Sawaal Jawab) */}
        <FaqSection />

        {/* Campus Location Map */}
        <LocationCard />

        {/* Final CTA Banner (Start Your Journey Today) */}
        <FinalCTA />
      </main>

      <Footer />
      <StickyMobileBar onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)} />
      
      <AdmissionModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}
