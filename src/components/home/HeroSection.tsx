import Hero from '../ui/Hero';

const HeroSection = () => {
  return (
    <Hero
      image="/2.png"
      title="Experience Tradition and Excellence in Horse Riding"
      subtitle="Join Halar Club and discover the majestic world of Kathiawadi horses through training, safaris, and a deep connection to India's equestrian heritage"
      buttonText="Explore More"
      buttonLink="/about"
      overlay={true}
      overlayOpacity={0.7}
      height="full"
      textAlign="center"
      textColor="light"
    />
  );
};

export default HeroSection;