
import Hero from '../components/Hero';
import IslandHighlights from '../components/IslandHighlights';
import InteractiveMap from '../components/InteractiveMap';
import Weather from '../components/Weather';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <IslandHighlights />
      <InteractiveMap />
      <Weather />
      <Footer />
    </div>
  );
};

export default Index;
