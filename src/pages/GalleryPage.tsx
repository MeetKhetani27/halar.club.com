import React, { useState, useEffect } from 'react';
import HeroSection from '../components/ui/HeroSection';

// Sample gallery images - replace with your actual images
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/horse1.jpg', 
    alt: 'Kathiawadi horse standing majestically',
    category: 'horses',
    width: 600,
    height: 400,
  },
  {
    id: 2,
    src: '/images/gallery/horse2.jpg',
    alt: 'Horse riding training session',
    category: 'training',
    width: 400,
    height: 600,
  },
  {
    id: 3,
    src: '/images/gallery/event1.jpg',
    alt: 'Cultural celebration with horses',
    category: 'events',
    width: 600,
    height: 400,
  },
  {
    id: 4,
    src: '/images/gallery/horse3.jpg',
    alt: 'Horses in stable',
    category: 'horses',
    width: 600,
    height: 400,
  },
  {
    id: 5,
    src: '/images/gallery/training1.jpg',
    alt: 'Advanced riding techniques',
    category: 'training',
    width: 400,
    height: 600,
  },
  {
    id: 6,
    src: '/images/gallery/event2.jpg',
    alt: 'Moonlight safari experience',
    category: 'events',
    width: 600,
    height: 400,
  },
  {
    id: 7,
    src: '/images/gallery/landscape1.jpg',
    alt: 'Beautiful riding trail',
    category: 'landscapes',
    width: 600,
    height: 400,
  },
  {
    id: 8,
    src: '/images/gallery/horse4.jpg',
    alt: 'Purebred Kathiawadi horse portrait',
    category: 'horses',
    width: 400,
    height: 600,
  },
  {
    id: 9,
    src: '/images/gallery/training2.jpg',
    alt: 'Young rider learning basics',
    category: 'training',
    width: 600,
    height: 400,
  },
  {
    id: 10,
    src: '/images/gallery/landscape2.jpg',
    alt: 'Sunset trail ride',
    category: 'landscapes',
    width: 600,
    height: 400,
  },
  {
    id: 11,
    src: '/images/gallery/event3.jpg',
    alt: 'Cultural heritage celebration',
    category: 'events',
    width: 400,
    height: 600,
  },
  {
    id: 12,
    src: '/images/gallery/horse5.jpg',
    alt: 'Horse grooming session',
    category: 'horses',
    width: 600,
    height: 400,
  }
];

// Fallback image for development purposes
const fallbackImage = "https://via.placeholder.com/600x400/FFA500/FFFFFF?text=Halar+Club+Gallery";

// Helper function to get image dimensions
const getImageDimensions = (width: number, height: number) => {
  const aspectRatio = width / height;
  if (width > 600 || height > 400) {
    if (aspectRatio > 1) {
      return { width: 600, height: Math.round(600 / aspectRatio) };
    } else {
      return { width: Math.round(400 * aspectRatio), height: 400 };
    }
  }
  return { width, height };
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  
  // Handle image filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === activeFilter));
    }
  }, [activeFilter]);

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Images' },
    { id: 'horses', name: 'Horses' },
    { id: 'training', name: 'Training' },
    { id: 'events', name: 'Events' },
    { id: 'landscapes', name: 'Landscapes' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero section */}
      <HeroSection 
        title="Our Gallery" 
        subtitle="Experience the beauty and grace of Halar Club through our collection of images" 
        className="pt-20"
      />

      {/* Gallery section */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-12">
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 
                ${activeFilter === category.id 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-amber-100'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Masonry gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className={`overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="group relative cursor-pointer aspect-[4/3] bg-gray-200 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const { width, height } = getImageDimensions(image.width, image.height);
                    target.src = `https://via.placeholder.com/${width}x${height}/FFA500/FFFFFF?text=${encodeURIComponent(image.alt)}`;
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: image.width / image.height }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full text-white">
                    <p className="text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = fallbackImage;
              }}
              className="max-h-[80vh] max-w-full object-contain rounded"
            />
            <div className="mt-4 text-white">
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;