import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import FeaturesSection from '../components/home/FeaturesSection';
import GalleryPreview from '../components/home/GalleryPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="space-y-12 md:space-y-16 lg:space-y-20">
        <AboutPreview />
        <FeaturesSection />
        <GalleryPreview />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </div>
  );
};

export default HomePage;