import React from 'react';
import { Moon, Shield, Award, Calendar, Clock, MapPin, Users, Star } from 'lucide-react';

const RideFeature = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const MoonNightRideBlog: React.FC = () => {
  const upcomingRides = [
    {
      title: "Full Moon Horseback Adventure",
      date: "June 24, 2025",
      distance: "10 km",
      duration: "3 hours",
      difficulty: "Beginner-Friendly",
      price: "₹2,999",
      spots: "12 spots left",
      image: "https://images.unsplash.com/photo-1539254692751-dbabbb58342c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Experience the magic of riding Kathiawari horses under a full moon. This enchanting journey takes you through scenic routes with breathtaking night views."
    },
    {
      title: "Moonlit Beach Ride",
      date: "July 10, 2025",
      distance: "8 km",
      duration: "2.5 hours",
      difficulty: "Easy",
      price: "₹2,499",
      spots: "8 spots left",
      image: "https://images.unsplash.com/photo-1533142464289-4a72922d9868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Ride along the beautiful coastline under the glow of the moon. Feel the gentle sea breeze as your horse trots along the sandy shores."
    },
    {
      title: "Celestial Countryside Journey",
      date: "August 2, 2025",
      distance: "15 km",
      duration: "4 hours",
      difficulty: "Intermediate",
      price: "₹3,499",
      spots: "6 spots left",
      image: "https://images.unsplash.com/photo-1501706362053-9d8c2ab29ed0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "An enchanting ride through rural landscapes bathed in moonlight. Experience the serene beauty of Gujarati countryside under starlit skies."
    }
  ];

  return (
    <div className="bg-indigo-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <img 
            src="https://images.unsplash.com/photo-1523974930131-29bb28a59265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Moon Night Ride" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-indigo-900/40 flex items-center">
            <div className="text-white max-w-2xl px-8">
              <h1 className="text-5xl font-bold mb-6">Moonlight Horse Rides</h1>
              <p className="text-xl mb-8">
                Experience the magic of horseback riding under the moonlit sky. Join our guided
                night rides for an unforgettable adventure through Gujarat's most scenic landscapes.
              </p>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300">
                Book Your Ride
              </button>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">The Magic of Moonlight Rides</h2>
              <p className="text-gray-700 mb-4">
                There's something truly magical about riding a horse under the silvery glow of the moon. 
                At Halar Club, we've created a unique experience that combines the traditional art of 
                horsemanship with the enchanting beauty of Gujarat's landscapes at night.
              </p>
              <p className="text-gray-700 mb-4">
                Our moonlight rides are carefully scheduled around full moon nights, when the 
                natural illumination creates a surreal atmosphere. The tranquility of the night, 
                combined with the rhythmic movement of your Kathiawari horse, creates a meditative 
                experience unlike any other.
              </p>
              <p className="text-gray-700">
                Whether you're a seasoned rider or a beginner, our professional guides ensure a safe 
                and memorable journey. Come discover the world from a different perspective – under 
                the watchful gaze of the moon and stars.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Night sky with full moon" 
                className="rounded-xl shadow-md w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <RideFeature
            icon={<Shield className="w-8 h-8 text-indigo-600" />}
            title="Safety First"
            description="Experienced guides, well-trained horses, and carefully planned routes ensure your safety throughout the night ride."
          />
          <RideFeature
            icon={<Moon className="w-8 h-8 text-indigo-600" />}
            title="Full Moon Magic"
            description="Rides scheduled during full moon phases for optimal natural lighting and the most enchanting experience."
          />
          <RideFeature
            icon={<Award className="w-8 h-8 text-indigo-600" />}
            title="Premium Experience"
            description="Authentic Kathiawari horses, traditional refreshments, and personalized attention for a premium adventure."
          />
        </div>

        {/* Upcoming Rides */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8">Upcoming Moonlight Rides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingRides.map((ride, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={ride.image} 
                    alt={ride.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-indigo-600 font-medium">{ride.difficulty}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{ride.title}</h3>
                  <p className="text-gray-600 mb-4">{ride.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-1" />
                      {ride.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-1" />
                      {ride.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-1" />
                      {ride.distance}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-indigo-600">{ride.price}</span>
                      <span className="text-sm text-gray-500 ml-2">{ride.spots}</span>
                    </div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-indigo-900 text-white rounded-xl p-10 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1532978089131-6c5da12c39c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Stars in night sky" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-center">
            <Star className="w-12 h-12 text-yellow-300 mx-auto mb-6" />
            <blockquote className="text-2xl italic font-light mb-6 max-w-3xl mx-auto">
              "The moonlight horse ride was absolutely magical. Seeing the landscape bathed in moonlight 
              while riding these majestic Kathiawari horses was an experience I'll treasure forever."
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Customer" 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div className="text-left">
                <p className="font-semibold">Priya Sharma</p>
                <p className="text-indigo-200">Ahmedabad, Gujarat</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-indigo-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do I need riding experience?</h3>
              <p className="text-gray-600">No prior experience is needed for our beginner rides. Our experienced guides will provide a brief training session before the ride and assist you throughout the journey.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What should I wear?</h3>
              <p className="text-gray-600">We recommend comfortable clothing that covers your legs (jeans or riding pants), closed-toe shoes or boots, and layers for the cooler night temperatures. Helmets will be provided.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What if the weather is cloudy?</h3>
              <p className="text-gray-600">If the moon visibility is significantly reduced due to cloud cover, we'll offer you the option to reschedule or proceed with the ride with additional lighting for safety.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there an age restriction?</h3>
              <p className="text-gray-600">Participants should be at least 12 years old for the moonlight rides. For younger children, we offer daytime riding experiences with additional safety measures.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoonNightRideBlog;
