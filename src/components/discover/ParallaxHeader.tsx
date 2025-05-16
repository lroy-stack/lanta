
import { useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';

const ParallaxHeader = () => {
  const { language } = useLanguage();
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        parallaxRef.current.style.opacity = `${1 - scrollPosition / 700}`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Translations
  const translations = {
    title: {
      en: "Discover Koh Lanta's Paradise",
      th: "ค้นพบสวรรค์บนเกาะลันตา",
    },
    subtitle: {
      en: "Immerse yourself in pristine beaches, lush jungles, and rich cultural heritage",
      th: "ดื่มด่ำกับชายหาดที่บริสุทธิ์ ป่าที่อุดมสมบูรณ์ และมรดกทางวัฒนธรรมที่มั่งคั่ง",
    },
    explore: {
      en: "Begin Exploring",
      th: "เริ่มการสำรวจ",
    }
  };

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Background layers for parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://ik.imagekit.io/insomnialz/kohLanta-img/Koh-Lanta-Thailand.jpg?updatedAt=1747390876038')",
          zIndex: 1
        }}
      />
      
      {/* Middle layer - water/beach */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        ref={parallaxRef}
        style={{ 
          backgroundImage: "url('https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-beach.jpg')",
          zIndex: 2
        }}
      />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-dark/40 to-dark/70"
        style={{ zIndex: 3 }}
      />
      
      {/* Content */}
      <div className="container relative mx-auto h-full flex items-center justify-center z-10" style={{ zIndex: 4 }}>
        <div className="text-center text-white px-4 animate-fade-in">
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${language === 'th' ? 'font-noto-thai' : 'font-montserrat'}`}>
            {translations.title[language]}
          </h1>
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 ${language === 'th' ? 'font-noto-thai' : 'font-opensans'}`}>
            {translations.subtitle[language]}
          </p>
          <a 
            href="#beaches"
            className={`btn-primary inline-flex items-center space-x-2 text-lg ${language === 'th' ? 'font-noto-thai' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('beaches')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>{translations.explore[language]}</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHeader;
