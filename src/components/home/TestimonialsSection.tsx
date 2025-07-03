import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const testimonials = [
  {
    quote: "My family's safari experience with Halar Club was nothing short of magical. The Kathiawadi horses were gentle yet spirited, and the guides showed us parts of Gujarat we never knew existed. It was a perfect blend of adventure and cultural immersion.",
    name: "Aditya Sharma",
    title: "Family Safari Participant",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    quote: "As someone who's ridden horses across the world, I can confidently say that the training at Halar Club is world-class. The focus on developing a genuine bond with these magnificent Kathiawadi horses sets them apart from any other riding school I've experienced.",
    name: "Priya Patel",
    title: "Professional Equestrian",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  },
  {
    quote: "Watching my daughter grow in confidence through Halar Club's young rider program has been incredible. The instructors' patience and expertise have transformed her from a nervous beginner to a skilled young equestrian who deeply respects these beautiful animals.",
    name: "Rajesh Mehta",
    title: "Parent of Young Rider",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section bg-gradient-to-b from-amber-50 to-white py-12 md:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 mx-auto">
        <SectionHeading 
          title="What Our Riders Say" 
          subtitle="Experiences shared by members of our community"
          center
        />
        
        <div className="relative max-w-4xl mx-auto mt-6 md:mt-8">
          <div className="flex flex-col items-center text-center p-6 sm:p-8 md:p-10 lg:p-12 bg-white rounded-2xl shadow-xl transform transition-transform duration-300 hover:shadow-2xl">
            <div className="mb-4 md:mb-6 text-amber-500 transform hover:scale-110 transition-transform duration-300">
              <Quote size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
            </div>
            <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl italic mb-6 md:mb-8 text-gray-700 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center gap-3 md:gap-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name} 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover ring-4 ring-amber-100"
              />
              <div className="text-left">
                <p className="font-semibold text-base md:text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-gray-600 text-sm md:text-base">{testimonials[currentIndex].title}</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={14} className="sm:w-4 sm:h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {!isMobile && (
            <>
              <div className="absolute top-1/2 -left-3 sm:-left-4 md:-left-6 -translate-y-1/2">
                <button 
                  onClick={goToPrevious}
                  className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-amber-50 transition-all duration-300 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-600" />
                </button>
              </div>
              
              <div className="absolute top-1/2 -right-3 sm:-right-4 md:-right-6 -translate-y-1/2">
                <button 
                  onClick={goToNext}
                  className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-amber-50 transition-all duration-300 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6 text-amber-600" />
                </button>
              </div>
            </>
          )}

          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-600 w-6 md:w-8' 
                    : 'bg-gray-300 hover:bg-amber-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {isMobile && (
            <div className="flex justify-center gap-3 mt-4">
              <button 
                onClick={goToPrevious}
                className="bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} className="text-amber-600" />
              </button>
              <button 
                onClick={goToNext}
                className="bg-white rounded-full p-2 shadow-md hover:bg-amber-50 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} className="text-amber-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;