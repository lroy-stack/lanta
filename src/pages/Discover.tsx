
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParallaxHeader from '../components/discover/ParallaxHeader';
import BeachesExplorer from '../components/discover/BeachesExplorer';
import NatureWildlife from '../components/discover/NatureWildlife';
import CulturalHeritage from '../components/discover/CulturalHeritage';
import HiddenGems from '../components/discover/HiddenGems';
import VisualStories from '../components/discover/VisualStories';
import SectionNav from '../components/discover/SectionNav';

const Discover = () => {
  // Scroll to section when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Handle initial hash on page load
    if (window.location.hash) {
      setTimeout(handleHashChange, 500);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <ParallaxHeader />
      <SectionNav />
      <div className="container mx-auto px-4 py-8">
        <div id="beaches" className="scroll-mt-24">
          <BeachesExplorer />
        </div>
        
        <div id="nature" className="scroll-mt-24 mt-24">
          <NatureWildlife />
        </div>
        
        <div id="culture" className="scroll-mt-24 mt-24">
          <CulturalHeritage />
        </div>
        
        <div id="hidden-gems" className="scroll-mt-24 mt-24">
          <HiddenGems />
        </div>
        
        <div id="stories" className="scroll-mt-24 mt-24 mb-16">
          <VisualStories />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
