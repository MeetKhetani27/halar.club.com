import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`rounded-xl p-8 mb-12 ${className}`}>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">{title}</h1>
      {subtitle && (
        <p className="text-xl text-center text-gray-600">{subtitle}</p>
      )}
    </div>
  );
};
export default HeroSection;
