import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import CraftStorySection from './components/CraftStorySection';
import BestsellersSection from './components/BestsellersSection';
import TestimonialsCTASection from './components/TestimonialsCTASection';
import InstagramFeedSection from './components/InstagramFeedSection';

export default function HomepagePage() {
  return (
    <main className="bg-[#FAF6F0] overflow-x-hidden">
      <Header />
      <HeroSection />
      <CraftStorySection />
      <BestsellersSection />
      <InstagramFeedSection />
      <TestimonialsCTASection />
      <Footer />
    </main>
  );
}
