import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
<<<<<<< HEAD
=======
import CollectionsBentoSection from './components/CollectionsBentoSection';
>>>>>>> 35f9b9eec83dde46189f36caee3217c7e8a30d65
import CraftStorySection from './components/CraftStorySection';
import BestsellersSection from './components/BestsellersSection';
import TestimonialsCTASection from './components/TestimonialsCTASection';
import InstagramFeedSection from './components/InstagramFeedSection';

export default function HomepagePage() {
  return (
    <main className="bg-[#FAF6F0] overflow-x-hidden">
      <Header />
      <HeroSection />
      <CollectionsBentoSection />
      <CraftStorySection />
      <BestsellersSection />
      <InstagramFeedSection />
      <TestimonialsCTASection />
      <Footer />
    </main>
  );
}
