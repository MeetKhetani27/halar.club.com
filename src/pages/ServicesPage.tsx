import React from 'react';
import { 
  Award, 
  Users, 
  GraduationCap, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Compass, 
  BadgeCheck,
  Heart
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import HeroSection from '../components/ui/HeroSection';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  features, 
  price, 
  color 
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price: string;
  color: string;
}) => {
  const colorClasses = {
    amber: {
      bg: "bg-amber-100",
      border: "border-amber-200",
      iconBg: "bg-amber-200",
      iconText: "text-amber-800",
      title: "text-amber-900",
      checkmark: "text-amber-600"
    },
    indigo: {
      bg: "bg-indigo-100",
      border: "border-indigo-200",
      iconBg: "bg-indigo-200",
      iconText: "text-indigo-800",
      title: "text-indigo-900",
      checkmark: "text-indigo-600"
    },
    emerald: {
      bg: "bg-emerald-100",
      border: "border-emerald-200",
      iconBg: "bg-emerald-200",
      iconText: "text-emerald-800",
      title: "text-emerald-900",
      checkmark: "text-emerald-600"
    }
  };
  
  const classes = colorClasses[color as keyof typeof colorClasses];
  
  return (
    <div className={`${classes.bg} border ${classes.border} rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 `}>
      <div className="flex items-center mb-4">
        <div className={`${classes.iconBg} rounded-full p-3 mr-4`}>
          <div className={classes.iconText}>{icon}</div>
        </div>
        <h3 className={`${classes.title} text-xl font-bold`}>{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <BadgeCheck className={`${classes.checkmark} w-5 h-5 mr-2 mt-0.5`} />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-gray-900">{price}</span>
        <button className={`${classes.iconBg} ${classes.iconText} px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity`}>
          Learn More
        </button>
      </div>
    </div>
  );
};

const TrainingLevel = ({
  level,
  title,
  description,
  suitable,
  duration,
  color
}: {
  level: string;
  title: string;
  description: string;
  suitable: string;
  duration: string;
  color: string;
}) => {
  const colorClasses = {
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-800",
      border: "border-amber-300"
    },
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-800",
      border: "border-indigo-300"
    },
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-800",
      border: "border-emerald-300"
    }
  };
  
  const classes = colorClasses[color as keyof typeof colorClasses];
  
  return (
    <div className={`${classes.bg} rounded-xl p-6 border ${classes.border}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <div>
          <span className={`${classes.text} font-semibold text-sm uppercase tracking-wider`}>
            {level}
          </span>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <Clock className={`${classes.text} w-5 h-5 mr-1`} />
          <span className="text-gray-700">{duration}</span>
        </div>
      </div>
      <p className="text-gray-700 mb-3">{description}</p>
      <div className="flex items-center">
        <Users className={`${classes.text} w-5 h-5 mr-2`} />
        <span className="text-gray-700">{suitable}</span>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Basic Riding Program",
      description: "Perfect for beginners looking to establish a strong foundation in horsemanship with our gentle Kathiawari horses.",
      icon: <GraduationCap size={24} />,
      features: [
        "Introduction to horse care and handling",
        "Basic riding techniques and posture",
        "Safety procedures and protocols",
        "Understanding horse behavior",
        "Weekly guided practice sessions"
      ],
      price: "₹8,999 / month",
      color: "amber"
    },
    {
      title: "Advanced Training",
      description: "For intermediate riders looking to refine their skills and develop a deeper connection with their mount.",
      icon: <Award size={24} />,
      features: [
        "Advanced riding techniques",
        "Dressage fundamentals",
        "Trail riding skills",
        "Horse communication and psychology",
        "Personalized coaching and feedback"
      ],
      price: "₹12,999 / month",
      color: "indigo"
    },
    {
      title: "Private Lessons",
      description: "One-on-one instruction tailored to your specific goals and learning pace with our expert trainers.",
      icon: <Users size={24} />,
      features: [
        "Personalized learning curriculum",
        "Flexible scheduling options",
        "Choice of training focus areas",
        "Regular progress assessments",
        "Direct access to master trainers"
      ],
      price: "₹1,499 / session",
      color: "emerald"
    }
  ];

  const trainingLevels = [
    {
      level: "Level 1",
      title: "Introduction to Horsemanship",
      description: "Learn the basics of horse handling, grooming, and elementary riding skills in a safe, controlled environment.",
      suitable: "Complete beginners, children (7+ years), and adults with no prior experience",
      duration: "4-8 weeks",
      color: "amber"
    },
    {
      level: "Level 2",
      title: "Developing Rider",
      description: "Build confidence in the saddle, learn to control speed and direction, and develop proper riding posture and balance.",
      suitable: "Riders who have completed Level 1 or have basic riding experience",
      duration: "8-12 weeks",
      color: "amber"
    },
    {
      level: "Level 3",
      title: "Confident Rider",
      description: "Master different gaits, learn basic dressage movements, and develop independent riding skills in various terrains.",
      suitable: "Riders comfortable with walking and trotting independently",
      duration: "12-16 weeks",
      color: "indigo"
    },
    {
      level: "Level 4",
      title: "Advanced Techniques",
      description: "Refine your riding technique, learn advanced communication with your horse, and tackle challenging riding scenarios.",
      suitable: "Experienced riders looking to enhance their skills",
      duration: "16-20 weeks",
      color: "indigo"
    },
    {
      level: "Level 5",
      title: "Master Rider",
      description: "Perfect advanced maneuvers, develop deep horse-rider connection, and prepare for potential competitive riding if desired.",
      suitable: "Dedicated riders with significant experience seeking mastery",
      duration: "20+ weeks",
      color: "emerald"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12 pt-20 pb-20">
        <HeroSection 
          title="Our Services" 
          subtitle="Discover our premium horse riding experiences and training programs" 
        />

        {/* Training Philosophy */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <SectionHeading title="Our Training Philosophy" />
              <p className="text-gray-700 mb-4">
                At Halar Club, we believe in a holistic approach to horsemanship. Our training 
                methodology focuses on building a strong partnership between horse and rider 
                through mutual respect and clear communication.
              </p>
              <p className="text-gray-700 mb-4">
                We take pride in our patient, progressive teaching style that ensures both 
                riders and horses develop confidence together. Safety is paramount in all our 
                programs, with careful attention to proper technique and appropriate challenges 
                for each skill level.
              </p>
              <p className="text-gray-700">
                Our indigenous Kathiawari and Marwari horses are selected for their gentle 
                temperament and trained for 4-5 years before being introduced to our riding 
                programs, ensuring a safe and rewarding experience for all our students.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Horse training" 
                className="rounded-xl shadow-md h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Training Levels */}
        <div className="mb-16">
          <SectionHeading title="Our Training Levels" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainingLevels.map((level, index) => (
              <TrainingLevel key={index} {...level} />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="text-amber-700 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
            <p className="text-gray-600">
              All our training programs prioritize safety with proper equipment, 
              well-maintained facilities, and carefully trained horses suitable for each rider's level.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="text-amber-700 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">
              We offer weekday and weekend sessions with morning and evening options 
              to accommodate various schedules and preferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="text-amber-700 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Attention</h3>
            <p className="text-gray-600">
              Small class sizes ensure each rider receives individual attention and 
              guidance, with regular progress assessments and feedback.
            </p>
          </div>
        </div>

        {/* Special Programs */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <SectionHeading title="Special Programs" center={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">Children's Horse Camp</h3>
              <p className="text-gray-700 mb-4">
                Our holiday camps introduce children aged 7-15 to the world of horses through 
                fun activities, basic riding lessons, and horse care education.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-indigo-900 font-semibold">School holidays</span>
                <span className="bg-white text-indigo-800 px-3 py-1 rounded-full text-sm">₹5,999 / week</span>
              </div>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-emerald-900 mb-3">Therapeutic Riding</h3>
              <p className="text-gray-700 mb-4">
                Our therapeutic riding program uses horsemanship to improve physical, emotional, 
                and cognitive well-being for participants with special needs.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-emerald-900 font-semibold">By appointment</span>
                <span className="bg-white text-emerald-800 px-3 py-1 rounded-full text-sm">₹1,299 / session</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-amber-50 to-amber-100 p-10 rounded-xl border border-amber-200">
          <h2 className="text-3xl font-bold text-amber-900 mb-6">Ready to Start Your Riding Journey?</h2>
          <p className="text-lg text-amber-800 mb-8 max-w-3xl mx-auto">
            Join us at Halar Club and experience the joy of connecting with these magnificent Kathiawari 
            and Marwari horses. Our expert trainers are ready to guide you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors duration-300">
              Book a Trial Lesson
            </button>
            <button className="bg-white text-amber-700 border border-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage; 