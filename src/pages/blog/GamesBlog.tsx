import React from 'react';
import { Clock, Users, CheckCircle } from 'lucide-react';

const GameCard = ({ title, image, description, features, timing, price, capacity }: {
  title: string;
  image: string;
  description: string;
  features: string[];
  timing: string;
  price: string;
  capacity: string;
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
    <div className="relative h-56">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <Clock className="w-5 h-5 mr-2" />
          {timing}
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-5 h-5 mr-2" />
          {capacity}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-600">
            <CheckCircle className="w-5 h-5 text-amber-600 mr-2" />
            {feature}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-2xl font-bold text-amber-600">{price}</span>
        <button className="bg-amber-600 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-700 transition-colors duration-300">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

const GamesBlog: React.FC = () => {
  const games = [
    {
      title: "Equestrian Games Challenge",
      image: "https://images.unsplash.com/photo-1581793355692-3e5067dd09d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Test your horsemanship skills with a series of fun and engaging equestrian games designed for riders of all levels.",
      timing: "Weekend sessions: 8:00 AM - 12:00 PM",
      price: "₹1,500/person",
      capacity: "Groups of 6-10 riders",
      features: [
        "Barrel Racing",
        "Pole Bending",
        "Flag Race",
        "Egg and Spoon Race",
        "Musical Horses",
        "Relay Games"
      ]
    },
    {
      title: "Traditional Equestrian Sports",
      image: "https://images.unsplash.com/photo-1511994714008-b6d68a8b32a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Experience the rich heritage of traditional Gujarati and Rajasthani equestrian sports with our well-trained Kathiawari horses.",
      timing: "Special events: Announced monthly",
      price: "₹2,000/person",
      capacity: "Up to 20 participants",
      features: [
        "Tent Pegging",
        "Horse Archery",
        "Ghodi Vesh (Horse Dance)",
        "Lance Throwing",
        "Traditional Races",
        "Team Competition Events"
      ]
    },
    {
      title: "Children's Pony Games",
      image: "https://images.unsplash.com/photo-1583288240205-54b5368bd7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Fun and educational horse-based activities designed specifically for children to develop confidence and skills in a safe environment.",
      timing: "Saturdays: 9:00 AM - 12:00 PM",
      price: "₹999/child",
      capacity: "8-12 children per session",
      features: [
        "Lead Line Races",
        "Walk-Trot Games",
        "Obstacle Courses",
        "Grooming Competitions",
        "Horseback Simon Says",
        "Confidence Building Activities"
      ]
    }
  ];

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">Equestrian Games & Activities</h1>
          <p className="text-xl text-amber-800 max-w-3xl mx-auto">
            Discover the excitement and thrill of horseback games and activities at Halar Club. 
            Whether you're a beginner or experienced rider, we offer a variety of equestrian games 
            that combine fun, skill development, and the joy of connecting with these magnificent animals.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>

        {/* Featured Game */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1520540041643-addb22982523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Horseback Team Building" 
                className="rounded-xl shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <div className="bg-amber-100 text-amber-800 px-4 py-1 rounded-full inline-block mb-4">
                <span className="font-semibold">Featured Activity</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Horseback Team Building</h2>
              <p className="text-gray-700 mb-4">
                Our unique team building program combines horsemanship with collaborative challenges 
                to develop leadership, communication, and problem-solving skills. Perfect for corporate 
                groups, sports teams, and other organizations looking to strengthen their bonds in an 
                unconventional and memorable setting.
              </p>
              <p className="text-gray-700 mb-6">
                Activities are tailored to the group's experience level and objectives, with no prior 
                riding experience necessary. Our trained facilitators and gentle horses provide a safe 
                and supportive environment for all participants.
              </p>
              <button className="bg-amber-700 text-white px-6 py-2 rounded-full font-medium hover:bg-amber-800 transition-colors duration-300">
                Inquire About Team Building
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Benefits of Equestrian Games</h2>
            <p className="text-amber-800">Discover the many ways that horseback games can enhance physical and mental wellbeing.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Physical Fitness</h3>
              <p className="text-gray-600">Improve balance, coordination, core strength, and overall fitness through active engagement with horses</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Mental Focus</h3>
              <p className="text-gray-600">Develop concentration, decision-making skills, and mindfulness through horseback activities</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Emotional Wellbeing</h3>
              <p className="text-gray-600">Build confidence, reduce stress, and develop emotional resilience through human-horse connection</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Ready to Experience Equestrian Games?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors duration-300">
              Book an Activity
            </button>
            <button className="bg-white border border-amber-700 text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-colors duration-300">
              View Monthly Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesBlog;
