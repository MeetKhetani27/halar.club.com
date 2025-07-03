import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const AboutPreview = () => {
  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <SectionHeading 
              title="The Halar Legacy" 
              subtitle="A story of passion, tradition, and excellence in horse riding"
              className="text-left"
            />
            <div className="space-y-3 md:space-y-4">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Founded by Mr. Shivduttsinh K Jadeja, Halar Club represents the culmination of a lifelong passion for horses, especially the magnificent Kathiawadi breed. Born into a noble Rajput family with deep equestrian traditions, Mr. Jadeja has dedicated his life to preserving and promoting India's rich horse riding heritage.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                After receiving professional training in Dundlod and earning certification in equine judging, he established Halar Club to share his expertise and love for these majestic animals with riders of all levels.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 items-center pt-2">
              <Button to="/about" variant="outline" className="flex items-center group hover:bg-amber-500 hover:text-white transition-all duration-300 text-sm md:text-base">
                Read Our Story 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex items-center gap-1 md:gap-2 text-amber-600">
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                <span className="font-medium text-sm md:text-base">20+ Years of Excellence</span>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-w-16 aspect-h-14 md:aspect-h-12 lg:aspect-h-9 rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="/2.png"
                alt="Halar Club founder with horses" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-amber-600 text-white p-4 sm:p-6 rounded-lg shadow-xl max-w-[220px] sm:max-w-[280px] md:max-w-xs transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="text-3xl sm:text-4xl font-serif">"</div>
                <div>
                  <p className="italic text-xs sm:text-sm md:text-base leading-relaxed">
                    Our horses are not just animals, they are our heritage, our pride, and our companions in this beautiful journey.
                  </p>
                  <p className="mt-2 sm:mt-3 font-semibold text-xs sm:text-sm md:text-base flex items-center gap-2">
                    <span className="w-6 sm:w-8 h-[2px] bg-white/50"></span>
                    Shivduttsinh K Jadeja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;