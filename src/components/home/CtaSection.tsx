import React from 'react';
import Button from '../ui/Button';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-br from-amber-600 to-amber-700 text-white py-12 md:py-16 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-left space-y-4 md:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Experience the Legacy of Kathiawadi Horse Riding?
            </h2>
            <p className="text-base md:text-lg text-amber-100 leading-relaxed">
              Join Halar Club today and embark on a journey that connects you with India's rich equestrian heritage through training, safaris, and a community of passionate riders.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              <Button 
                to="/contact" 
                size="lg" 
                className="group bg-blue text-amber-600 hover:bg-gray-100 transition-all duration-300 text-sm md:text-base font-bold text-black"
              >
                Become a Member
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                to="/contact" 
                variant="outline" 
                size="lg" 
                className="group border-white text-white hover:bg-amber-500 transition-all duration-300 text-sm md:text-base"
              >
                Contact Us
                <Phone size={18} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 transform transition-transform duration-300 hover:shadow-xl">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="bg-white/20 p-2 md:p-3 rounded-lg">
                  <Calendar size={20} className="md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">Book Your First Ride</h3>
                  <p className="text-amber-100 text-sm md:text-base">Schedule a trial session today</p>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 text-amber-100 text-sm md:text-base">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                  <span>Professional training for all levels</span>
                </div>
                <div className="flex items-center gap-3 text-amber-100 text-sm md:text-base">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                  <span>Scenic horse safaris</span>
                </div>
                <div className="flex items-center gap-3 text-amber-100 text-sm md:text-base">
                  <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                  <span>Cultural immersion experiences</span>
                </div>
              </div>
              <Button 
                to="/contact" 
                size="lg" 
                className="w-full bg-black text-white hover:bg-gray-100 transition-all duration-300 text-sm md:text-base font-bold text-black"
              >
                Schedule Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;