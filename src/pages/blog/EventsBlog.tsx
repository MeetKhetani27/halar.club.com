import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventCard = ({ title, date, time, location, description, image, price, category }: {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  price: string;
  category: string;
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
    <div className="relative h-56">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-amber-600 font-medium text-sm">{category}</span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="flex items-center gap-4 text-gray-600 mb-4">
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          {date}
        </div>
        <div className="flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          {time}
        </div>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <MapPin className="w-5 h-5 mr-2" />
        {location}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-amber-600">{price}</span>
        <button className="bg-amber-600 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-700 transition-colors duration-300">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

const EventsBlog: React.FC = () => {
  const upcomingEvents = [
    {
      title: "Halar Annual Horse Show",
      date: "June 15, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Halar Club Grounds",
      description: "Join us for a spectacular display of Kathiawari and Marwari horses showcasing their beauty, agility, and training. Watch dressage performances, jumping exhibitions, and traditional horse dance routines.",
      image: "https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      price: "₹999",
      category: "Exhibition"
    },
    {
      title: "Equestrian Cultural Festival",
      date: "July 8-10, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "Halar Club Amphitheater",
      description: "A three-day celebration of Gujarat's rich equestrian heritage featuring traditional horse performances, art exhibitions of equine art, historical displays, and interactive demonstrations of horse-riding techniques.",
      image: "https://images.unsplash.com/photo-1562764259-e6ec071bc722?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      price: "₹1,499",
      category: "Culture"
    },
    {
      title: "Children's Horse Camp",
      date: "May 25-30, 2025",
      time: "8:00 AM - 2:00 PM",
      location: "Halar Stud Farm",
      description: "A special week-long camp designed for children ages 7-15 to learn about horse care, basic riding skills, and the joy of connecting with these magnificent animals in a safe, supportive environment.",
      image: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1739&q=80",
      price: "₹5,999/week",
      category: "Workshop"
    },
  ];

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">Equestrian Events</h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Join us for exciting equestrian events throughout the year. From horse shows to cultural
            celebrations, there's always something happening at Halar Club for horse enthusiasts.
          </p>
        </div>

        {/* Event Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Exhibition', 'Culture', 'Workshop', 'Competition', 'Family'].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 
                ${category === 'All' 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-amber-50'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

        {/* Special Event Feature */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1624344019099-39b7b037c6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Gujarat Horse Festival" 
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <div className="bg-amber-100 px-4 py-1 rounded-full inline-block mb-4">
                <span className="text-amber-800 font-semibold">Featured Event</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Gujarat Horse Festival 2025</h2>
              <p className="text-gray-600 mb-6">
                The biggest equestrian event of the year returns! This grand celebration showcases the finest 
                Kathiawari and Marwari horses from across the region, featuring competitions, performances, 
                and demonstrations of traditional horsemanship. Don't miss this opportunity to witness 
                the magnificent cultural heritage of Gujarat's indigenous horse breeds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-amber-700 mr-2" />
                  <span>October 12-15, 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-700 mr-2" />
                  <span>Rajkot Exhibition Grounds</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Never Miss an Event</h2>
          <p className="text-amber-800 mb-6">Subscribe to our newsletter and be the first to know about upcoming equestrian events and exclusive offers.</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
            />
            <button className="bg-amber-700 text-white px-6 py-3 rounded-r-full font-medium hover:bg-amber-800 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsBlog;
