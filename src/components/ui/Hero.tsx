import React, { useEffect, useState } from 'react';
import Button from './Button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  image: string;
  overlay?: boolean;
  overlayOpacity?: number;
  height?: 'full' | 'half' | 'auto';
  textAlign?: 'left' | 'center' | 'right';
  textColor?: 'light' | 'dark';
}

const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  image,
  overlay = true,
  overlayOpacity = 0.6,
  height = 'full',
  textAlign = 'center',
  textColor = 'light',
}: HeroProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setIsLoading(false);
      // Trigger animation after image loads
      setTimeout(() => setIsVisible(true), 100);
    };
  }, [image]);

  const heights = {
    full: 'min-h-screen',
    half: 'min-h-[50vh]',
    auto: 'min-h-[400px] md:min-h-[500px]',
  };

  const textAlignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const textColors = {
    light: 'text-white',
    dark: 'text-gray-900',
  };

  return (
    <div className={`relative ${heights[height]} overflow-hidden flex flex-col justify-center`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-50">
          <div className="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      )}
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image}
          alt="Hero"
          className={`w-full h-full object-cover object-center transition-transform duration-700 ${isVisible ? 'scale-100' : 'scale-110'}`}
          style={{ objectPosition: isMobile ? 'center center' : 'center center' }}
        />
        {overlay && (
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-700 ${isVisible ? 'opacity-70' : 'opacity-0'}`}
            style={{ opacity: isVisible ? overlayOpacity : 0 }}
          />
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 my-auto py-12 md:py-16">
        <div 
          className={`max-w-4xl mx-auto ${textAlignments[textAlign]} ${textColors[textColor]} transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto opacity-90">
            {subtitle}
          </p>
          {buttonText && buttonLink && (
            <Button 
              to={buttonLink} 
              size="lg"
              className="animate-pulse-slow hover:animate-none transition-all duration-300 transform hover:scale-105"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {height === 'full' && (
        <div 
          className={`absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col items-center text-white animate-bounce">
            <span className="text-xs md:text-sm mb-1 md:mb-2 opacity-80">Scroll Down</span>
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;