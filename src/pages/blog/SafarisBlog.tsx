import React from 'react';
import { MapPin, Clock, Users, ShieldCheck, Camera, Sun } from 'lucide-react';

const SafariPackage = ({ title, price, duration, description, features, image }: {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  image: string;
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 right-4 bg-amber-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
        {price}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-amber-700 font-medium mb-4">{duration}</p>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-amber-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const SafarisBlog: React.FC = () => {
  const safariPackages = [
    {
      title: 'Family Horse Safari',
      price: '₹1,999/person',
      duration: '3 Hours',
      description: "Experience the joy of horseback riding with your whole family. Our gentle Kathiawari horses are perfect for riders of all ages and experience levels.",
      image: 'https://images.unsplash.com/photo-1587990554674-c6faf92c2e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      features: [
        'Perfect for beginners and children',
        'Trained guides and handlers',
        'Beautiful scenic routes',
        'Safety equipment provided',
        'Photo opportunities',
        'Light refreshments included'
      ]
    },
    {
      title: 'Professional Riding Experience',
      price: '₹3,999/person',
      duration: '5 Hours',
      description: 'Designed for experienced riders, this safari takes you through more challenging terrains and allows for extended trotting and cantering sessions.',
      image: 'https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      features: [
        'Advanced riding techniques',
        'Varied terrain exploration',
        'Faster pace riding sessions',
        'Expert equestrian guides',
        'Packed lunch included',
        'Extended routes and trails'
      ]
    },
    {
      title: 'Cultural Safari Experience',
      price: '₹2,499/person',
      duration: '4 Hours',
      description: 'Immerse yourself in the culture and hospitality of the Kathiayawar peninsula while riding on horseback. Visit local villages and experience traditional Gujarati hospitality.',
      image: 'https://images.unsplash.com/photo-1576680205384-af0ea9e07e32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      features: [
        'Visit to traditional villages',
        'Cultural interactions',
        'Traditional Gujarati snacks',
        'Local craft demonstrations',
        'Comfortable riding pace',
        'Cultural guide included'
      ]
    },
  ];

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">Halar Safari Adventures</h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Discover the beauty of Gujarat on horseback with our authentic Kathiawari horse safaris.
            Experience diverse landscapes including rivers, mountains, lakes, and grasslands.
          </p>
        </div>

        {/* Safari Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1599053581540-248ea75b59cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Halar Safari" 
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-amber-900 border-b-2 border-amber-200 pb-2 mb-4">Experience Halar Safaris</h2>
              <p className="text-gray-700">
                We provide horse rides for families, kids, and professionals, partnering with the best hotel resorts in town, 
                such as Khirasra Palace Hotel, to ensure a hospitable experience. We tend to explore diverse and beautiful terrains, 
                including rivers, mountains, lakes, and grasslands.
              </p>
              <p className="text-gray-700">
                We offer unique horse safaris, allowing people to immerse themselves in the culture and hospitality of the 
                Kathiayawar peninsula while riding on horseback. Our experienced guides and well-trained Kathiawari horses 
                ensure a safe and memorable adventure for riders of all skill levels.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <MapPin className="text-amber-700 mr-2" />
                  <span>Diverse terrains</span>
                </div>
                <div className="flex items-center">
                  <Clock className="text-amber-700 mr-2" />
                  <span>Flexible durations</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-amber-700 mr-2" />
                  <span>All experience levels</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="text-amber-700 mr-2" />
                  <span>Safety prioritized</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Safari Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-10">Our Safari Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariPackages.map((pkg, index) => (
              <SafariPackage key={index} {...pkg} />
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Why Choose Halar Safaris?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Indigenous Horses</h3>
              <p className="text-gray-600">Experience riding on authentic Kathiawari horses, known for their smooth gait and gentle temperament.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Scenic Landscapes</h3>
              <p className="text-gray-600">Discover breathtaking views of Gujarat's diverse terrain, from rivers to mountains and grasslands.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Sun className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cultural Immersion</h3>
              <p className="text-gray-600">Immerse yourself in local culture with stops at traditional villages and authentic experiences.</p>
            </div>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Our Partnerships</h2>
          <p className="text-center text-gray-700 mb-8">
            We partner with premium hotels and resorts to provide comprehensive safari packages with comfortable accommodations.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Khirasra Palace Hotel" 
                className="w-64 h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold">Khirasra Palace Hotel</h3>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Heritage Resort" 
                className="w-64 h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold">Heritage Resort</h3>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Luxury Wilderness Camp" 
                className="w-64 h-40 object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold">Luxury Wilderness Camp</h3>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-amber-100 rounded-xl p-10 shadow-md">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Ready for an Unforgettable Adventure?</h2>
          <p className="text-lg text-amber-800 mb-8">
            Book your horseback safari today and discover the magic of Gujarat from a different perspective.
          </p>
          <button className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors duration-300">
            Book Your Safari Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafarisBlog;
