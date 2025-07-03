import { Award, Users, Compass, Rabbit } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import HeroSection from '../components/ui/HeroSection';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 pt-20 pb-20">
      <HeroSection 
        title="About Halar Club" 
        subtitle="A legacy of horsemanship, tradition, and excellence" 
      />

      {/* Founder Bio */}
      <div className="mb-16">
        <SectionHeading title="Mr. Shivduttsinh K Jadeja" />
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-amber-100 p-4 rounded-lg shadow-md h-full">
              <img 
                src="public/FOUNDER.png" 
                alt="Mr. Shivduttsinh K Jadeja" 
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm">Master Horseman</span>
                <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm">Certified Trainer</span>
                <span className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm">Kathiawari Expert</span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 space-y-4 text-gray-700">
            <p>Born into a Rajput family with a strong legacy of horsemanship, my bond with horses—especially the noble Kathiawari breed—was shaped early on by my grandfather's lineage and deepened through my father's guidance. A seasoned horseman himself, my father became both my mentor and my greatest inspiration, instilling in me not just a love for horses, but a profound respect for the art of horse breeding.</p>
            
            <p>My equestrian journey began at the age of seven. This early exposure laid a solid foundation, which I later built upon with formal training in Rajasthan's renowned equestrian town, Dundlod. There, I had the honor of being mentored by distinguished experts like H.H. Raghuvendra Singh Dundlod, Col. Ashok Yadav, and Col. Sarpratap Singh—each playing a pivotal role in refining my skills and understanding of the sport.</p>
            
            <p>Seeking to deepen my knowledge, I pursued equine judging at the STATE ANIMAL HUSBANDRY TRAINING INSTITUTE in Patan, Gujarat. With certifications in both riding and breeding under my belt, I transitioned into coaching and established two riding clubs. Among them, HALAR CLUB holds a special place in my heart. Under its banner, we've trained over 100 students in foundational riding skills and offered horseback safari experiences to more than 600 clients.</p>
            
            <p>Beyond training and coaching, I have actively participated in multiple endurance rides, continuously striving to push my own limits. Parallel to my equestrian pursuits, I earned a master's degree in psychology, which has enriched my current exploration into equine psychology—a field that beautifully bridges my passions.</p>
            
            <p>Today, I embrace the cowboy lifestyle and look ahead with great excitement as HALAR SAFARIS prepares to introduce guided horse rides through the lesser-known yet culturally vibrant landscapes of Gujarat. These journeys will offer riders more than just adventure—they'll be immersed in the rhythm of the Kathiawadi heritage, witnessing unforgettable sunrises and sunsets from horseback.</p>
            
            <p>For me, horses are more than animals—they are companions. I feel privileged to walk this path and to share the transformative power of horses with others.</p>
          </div>
        </div>
      </div>

      {/* Halar Farm Section */}
      <div className="mb-16">
        <SectionHeading title="Halar Stud Farm" />
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3 space-y-4 text-gray-700">
            <p>Halar Stud Farm was founded in 2007 by his father, Kishorsinhji Jadeja. Our focus have always been on breeding horses through generations, and we are proud to have 25 indigenous horses in their possession. We have established ourselves as one of the top breeders for Kathiawari horses.</p>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mt-6">
              <h3 className="text-2xl font-semibold mb-4 text-amber-800">What Sets Us Apart?</h3>
              <p className="mb-4">Welcome to Halar Stud Farm — a special place in Saurashtra where tradition meets training.</p>
              <p className="mb-4">At Halar, we don't use just any horses. We train and ride with three of India's most special breeds — the Kathiawadi and the Marwari & Sindhi. We believe in keeping our Indian heritage alive.</p>
              <p className="mb-4">Every Kathiawadi horse at Halar is trained for 4 to 5 years before any student rides them. They learn to be calm, strong, and connected with people. That way, when students ride them, the horse already knows how to listen, respond, and stay balanced.</p>
              <p className="mb-4">These horses are strong, loyal, and full of stamina. Their curved ears and smooth walk make them stand out. They're perfect for learning — gentle for beginners, but also great for more advanced riders.</p>
              <p className="mb-4">We also train the Marwari horse, known for its royal history and brave nature. Both breeds are part of India's proud culture, and we take that seriously.</p>
              <p>Halar Stud Farm is the only riding school in Saurashtra that works only with Kathiawadi and Marwari horses. We're proud to train these amazing animals and teach people how to ride the Indian way.</p>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-amber-100 p-4 rounded-lg shadow-md h-full">
              <img 
                src="https://images.unsplash.com/photo-1598894000396-bc7e873d5fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Halar Stud Farm" 
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="flex items-center bg-white p-3 rounded-md">
                  <Rabbit className="text-amber-700 w-8 h-8 mr-2" />
                  <div>
                    <p className="font-bold">25+</p>
                    <p className="text-sm">Indigenous Horses</p>
                  </div>
                </div>
                <div className="flex items-center bg-white p-3 rounded-md">
                  <Award className="text-amber-700 w-8 h-8 mr-2" />
                  <div>
                    <p className="font-bold">Top</p>
                    <p className="text-sm">Kathiawari Breeder</p>
                  </div>
                </div>
                <div className="flex items-center bg-white p-3 rounded-md">
                  <Compass className="text-amber-700 w-8 h-8 mr-2" />
                  <div>
                    <p className="font-bold">15+</p>
                    <p className="text-sm">Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center bg-white p-3 rounded-md">
                  <Users className="text-amber-700 w-8 h-8 mr-2" />
                  <div>
                    <p className="font-bold">100+</p>
                    <p className="text-sm">Trained Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="text-center bg-amber-50 p-8 rounded-xl border border-amber-200">
        <h3 className="text-2xl font-bold text-amber-800 mb-4">Come Visit Us</h3>
        <p className="text-lg mb-6">Experience horse riding with heart, history, and heritage.</p>
        <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default AboutPage;