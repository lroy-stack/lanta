
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ParallaxHeader: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="relative h-[40vh] bg-gray-900 overflow-hidden">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/koh-lanta-aereal.webp?updatedAt=1747394732246)', 
          transform: 'translateZ(0)',
          backgroundPosition: 'center 45%'
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      
      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-2">
          {language === 'en' ? 'Community' : 'ชุมชน'}
        </h1>
        <p className="text-xl max-w-2xl">
          {language === 'en' 
            ? 'Connect with travelers and locals, share experiences, and discover the real Koh Lanta.'
            : 'เชื่อมต่อกับนักเดินทางและคนท้องถิ่น แบ่งปันประสบการณ์ และค้นพบเกาะลันตาที่แท้จริง'
          }
        </p>
      </div>
    </div>
  );
};

export default ParallaxHeader;
