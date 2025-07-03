import React, { useState } from 'react';
import { Users as Horse, Mountain, Award, Users, ArrowRight, Moon, Calendar, Map, Camera, X, Clock, Users as GroupIcon, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Authentic Kathiawadi Horses',
    description: 'Experience the majesty of purebred Kathiawadi horses, a breed renowned for their strength, grace, and noble heritage.',
    icon: <Horse size={32} />,
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Expert Training',
    description: 'Learn from certified instructors who blend international techniques with traditional Indian horsemanship.',
    icon: <Award size={32} />,
    color: 'from-amber-500 to-amber-600',
  },
  {
    title: 'Rich Heritage',
    description: 'Immerse yourself in the centuries-old traditions of Rajput horse riding and equestrian excellence.',
    icon: <Mountain size={32} />,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    title: 'Welcoming Community',
    description: 'Join our inclusive community of horse enthusiasts, where riders of all levels come together to share their passion.',
    icon: <Users size={32} />,
    color: 'from-purple-500 to-purple-600',
  },
];

const adventures = [
  {
    title: 'Moonlight Safari',
    description: 'Experience the magic of night riding under the stars, exploring scenic trails in the moonlight.',
    longDescription: 'Our Moonlight Safari is a unique experience that combines the thrill of night riding with the beauty of starlit landscapes. Perfect for couples and small groups, this adventure includes a guided tour through specially selected trails, followed by a traditional dinner under the stars.',
    icon: <Moon size={32} />,
    color: 'from-indigo-500 to-indigo-600',
    duration: '2-3 hours',
    price: '₹2,500 per person',
    groupSize: '2-6 people',
    includes: [
      'Professional guide',
      'Safety equipment',
      'Traditional dinner',
      'Photography session',
      'Transportation to/from meeting point'
    ],
    requirements: [
      'Basic riding experience',
      'Age 12+ years',
      'Comfortable clothing',
      'Closed-toe shoes'
    ]
  },
  {
    title: 'Cultural Events',
    description: 'Participate in traditional horse ceremonies and cultural celebrations showcasing our rich heritage.',
    longDescription: 'Immerse yourself in the rich cultural heritage of Kathiawadi horse riding through our special events. Experience traditional ceremonies, watch skilled riders perform, and learn about the historical significance of these magnificent animals in our culture.',
    icon: <Calendar size={32} />,
    color: 'from-rose-500 to-rose-600',
    duration: 'Full day',
    price: '₹3,500 per person',
    groupSize: '4-20 people',
    includes: [
      'Traditional ceremony participation',
      'Cultural performance',
      'Traditional lunch',
      'Interactive workshops',
      'Souvenir package'
    ],
    requirements: [
      'All ages welcome',
      'Traditional attire provided',
      'No riding experience needed'
    ]
  },
  {
    title: 'Scenic Trails',
    description: 'Discover hidden gems and breathtaking landscapes on our guided trail rides through diverse terrain.',
    longDescription: 'Explore the natural beauty of our region on horseback. Our scenic trails take you through diverse landscapes, from gentle hills to riverbanks, offering stunning views and opportunities to spot local wildlife.',
    icon: <Map size={32} />,
    color: 'from-teal-500 to-teal-600',
    duration: '3-4 hours',
    price: '₹2,000 per person',
    groupSize: '2-8 people',
    includes: [
      'Experienced guide',
      'Trail snacks',
      'Water and refreshments',
      'Basic photography',
      'First aid support'
    ],
    requirements: [
      'Basic riding experience',
      'Age 10+ years',
      'Comfortable riding clothes',
      'Sun protection'
    ]
  },
  {
    title: 'Photo Safari',
    description: 'Capture stunning moments with our horses in picturesque locations, perfect for photography enthusiasts.',
    longDescription: 'Perfect for photography enthusiasts and social media lovers, our Photo Safari combines horse riding with professional photography. Capture stunning moments with our beautiful Kathiawadi horses in carefully selected scenic locations.',
    icon: <Camera size={32} />,
    color: 'from-orange-500 to-orange-600',
    duration: '2 hours',
    price: '₹3,000 per person',
    groupSize: '1-4 people',
    includes: [
      'Professional photographer',
      'Multiple locations',
      'Horse preparation',
      'Digital photos',
      'Basic editing'
    ],
    requirements: [
      'No riding experience needed',
      'Age 8+ years',
      'Camera equipment provided',
      'Comfortable clothing'
    ]
  },
];

const AdventureModal = ({ adventure, onClose }: { adventure: typeof adventures[0], onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${adventure.color} text-white`}>
                {adventure.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{adventure.title}</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              {adventure.longDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-amber-500" />
                <span className="text-gray-700">{adventure.duration}</span>
              </div>
              <div className="flex items-center gap-3">
                <GroupIcon size={20} className="text-amber-500" />
                <span className="text-gray-700">{adventure.groupSize}</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
              <ul className="space-y-2">
                {adventure.includes.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <Star size={16} className="text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
              <ul className="space-y-2">
                {adventure.requirements.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <Star size={16} className="text-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <div className="text-2xl font-bold text-amber-600">
                {adventure.price}
              </div>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-300"
              >
                Book Now
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const [selectedAdventure, setSelectedAdventure] = useState<typeof adventures[0] | null>(null);

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeading 
          title="Why Choose Halar Club"
          subtitle="Discover what makes our riding experience truly special"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 sm:p-8 text-center rounded-xl border border-gray-100 hover:border-transparent transition-all duration-300 hover:shadow-xl bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50 h-full"
            >
              <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 bg-gradient-to-br ${feature.color} text-white transform group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-amber-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors text-sm font-medium group-hover:translate-x-1"
              >
                Learn More 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <SectionHeading 
          title="Adventure Experiences"
          subtitle="Explore our unique riding adventures and special events"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {adventures.map((adventure, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <div className={`p-6 bg-gradient-to-br ${adventure.color} text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl">
                    {adventure.icon}
                  </div>
                  <h3 className="text-xl font-bold">{adventure.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{adventure.description}</p>
              </div>
              <div className="p-6 flex-grow">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-amber-500" />
                    <span className="text-gray-700">{adventure.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GroupIcon size={18} className="text-amber-500" />
                    <span className="text-gray-700">{adventure.groupSize}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 mt-auto">
                <button 
                  onClick={() => setSelectedAdventure(adventure)}
                  className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-center rounded-lg text-gray-800 font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedAdventure && (
        <AdventureModal 
          adventure={selectedAdventure} 
          onClose={() => setSelectedAdventure(null)}
        />
      )}
    </section>
  );
};

export default FeaturesSection;