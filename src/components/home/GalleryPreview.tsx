import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { ArrowRight, Maximize2 } from 'lucide-react';

const images = [
  {
    src: "https://images.pexels.com/photos/5112309/pexels-photo-5112309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Horse riding training session",
    category: "Training"
  },
  {
    src: "https://images.pexels.com/photos/7232898/pexels-photo-7232898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Kathiawadi horse portrait",
    category: "Horses"
  },
  {
    src: "https://images.pexels.com/photos/10845109/pexels-photo-10845109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Horse safari through scenic landscape",
    category: "Safari"
  },
  {
    src: "https://images.pexels.com/photos/2123375/pexels-photo-2123375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Young rider learning horsemanship",
    category: "Training"
  },
  {
    src: "https://images.pexels.com/photos/5089176/pexels-photo-5089176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Group riding expedition",
    category: "Safari"
  },
  {
    src: "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Traditional horse ceremony",
    category: "Events"
  }
];

const GalleryPreview = () => {
  return (
    <section className="section bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 mx-auto">
        <SectionHeading 
          title="Moments Captured at Halar Club" 
          subtitle="Glimpses of our horses, riders, and adventures"
          center
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 md:mb-12">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-w-4 aspect-h-3 transform transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-amber-600 rounded-full text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold mb-1 sm:mb-2">{image.alt}</h3>
                  <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-200">
                    <Maximize2 size={14} className="sm:w-4 sm:h-4" />
                    <span>View full size</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            to="/gallery" 
            variant="outline"
            className="group inline-flex items-center gap-1 sm:gap-2 hover:bg-amber-600 hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            View Full Gallery
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;