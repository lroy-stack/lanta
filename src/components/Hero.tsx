
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          poster="https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/koh-Lanta-island.jpg?updatedAt=1747392940503"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-beautiful-blue-sea-at-sunset-1936-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-dark/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white py-16 mt-12">
        <h1 className={`mb-4 animate-fade-in ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {t('hero.title')}
        </h1>
        <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${language === 'th' ? 'font-noto-thai' : 'font-playfair'}`}>
          {t('hero.subtitle')}
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-10">
          <div className="flex items-center bg-white/90 backdrop-blur-md rounded-full shadow-lg overflow-hidden">
            <Search className="ml-4 text-gray-500" size={20} />
            <input
              type="text"
              placeholder={t('hero.search')}
              className={`w-full py-4 px-4 bg-transparent focus:outline-none text-dark ${language === 'th' ? 'font-noto-thai' : ''}`}
            />
          </div>
        </div>
        
        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className={`btn-accent hover-lift ${language === 'th' ? 'font-noto-thai' : ''}`}>
            {t('hero.explore')}
          </button>
          <button className={`btn-primary hover-lift ${language === 'th' ? 'font-noto-thai' : ''}`}>
            {t('hero.book')}
          </button>
          <button className={`btn-outline text-white border-white hover:bg-white/20 hover-lift ${language === 'th' ? 'font-noto-thai' : ''}`}>
            {t('hero.join')}
          </button>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#F9F8F4" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,176C960,171,1056,117,1152,96C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
