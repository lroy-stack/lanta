
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceBrowser from '../components/experiences/ExperienceBrowser';
import ExperienceCategories from '../components/experiences/ExperienceCategories';
import FeaturedExperiences from '../components/experiences/FeaturedExperiences';
import ParallaxHeader from '../components/experiences/ParallaxHeader';

const Experiences = () => {
  const { language, t } = useLanguage();

  const pageContent = {
    title: {
      en: "Unforgettable Experiences in Koh Lanta",
      th: "ประสบการณ์ที่น่าจดจำในเกาะลันตา"
    },
    subtitle: {
      en: "Discover adventures that will create memories to last a lifetime",
      th: "ค้นพบการผจญภัยที่จะสร้างความทรงจำไปตลอดชีวิต"
    },
    headerImage: "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/view-of-beach-and-lighthouse.jpeg?updatedAt=1747394735455"
  };

  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      
      <ParallaxHeader 
        title={pageContent.title[language]} 
        subtitle={pageContent.subtitle[language]}
        imagePath={pageContent.headerImage} 
      />
      
      <div className="container mx-auto px-4 py-8 md:py-12">
        <FeaturedExperiences />
        <ExperienceCategories />
        <ExperienceBrowser />
      </div>
      
      <Footer />
    </div>
  );
};

export default Experiences;
