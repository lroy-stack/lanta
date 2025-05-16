
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin } from 'lucide-react';
import { MapLocation } from '../types';

// Sample map location data
const mapLocations: MapLocation[] = [
  {
    id: 1,
    name: {
      en: 'Klong Dao Beach',
      th: 'หาดคลองดาว',
    },
    category: 'beach',
    position: { x: 30, y: 20 },
    description: {
      en: 'A family-friendly beach with calm waters',
      th: 'ชายหาดที่เป็นมิตรกับครอบครัวพร้อมน้ำทะเลที่สงบ',
    },
  },
  {
    id: 2,
    name: {
      en: 'Saladan Pier',
      th: 'ท่าเรือสลาดัน',
    },
    category: 'landmark',
    position: { x: 15, y: 10 },
    description: {
      en: 'Main arrival point to the island',
      th: 'จุดมาถึงหลักของเกาะ',
    },
  },
  {
    id: 3,
    name: {
      en: 'Old Town',
      th: 'เมืองเก่า',
    },
    category: 'landmark',
    position: { x: 70, y: 60 },
    description: {
      en: 'Historic district with charming shops',
      th: 'ย่านประวัติศาสตร์ที่มีร้านค้าที่น่าสนใจ',
    },
  },
  {
    id: 4,
    name: {
      en: 'Kantiang Bay',
      th: 'อ่าวกันเตียง',
    },
    category: 'beach',
    position: { x: 60, y: 75 },
    description: {
      en: 'Beautiful bay with luxury resorts',
      th: 'อ่าวที่สวยงามพร้อมรีสอร์ทหรูหรา',
    },
  },
  {
    id: 5,
    name: {
      en: 'Mu Ko Lanta National Park',
      th: 'อุทยานแห่งชาติหมู่เกาะลันตา',
    },
    category: 'activity',
    position: { x: 85, y: 85 },
    description: {
      en: 'Protected area with hiking trails',
      th: 'พื้นที่คุ้มครองพร้อมเส้นทางเดินป่า',
    },
  },
];

const InteractiveMap: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handlePinClick = (location: MapLocation) => {
    setActiveLocation(location === activeLocation ? null : location);
  };

  const handleFilterClick = (filter: string | null) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };
  
  const filteredLocations = activeFilter 
    ? mapLocations.filter(loc => loc.category === activeFilter)
    : mapLocations;

  // Define pin colors based on category
  const getPinColor = (category: string) => {
    switch(category) {
      case 'beach': return 'text-primary';
      case 'restaurant': return 'text-amber-500';
      case 'accommodation': return 'text-violet-600';
      case 'activity': return 'text-green-500';
      default: return 'text-dark';
    }
  };

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className={`${language === 'th' ? 'font-noto-thai' : ''}`}>{t('map.title')}</h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${language === 'th' ? 'font-noto-thai' : ''}`}>
            {t('map.description')}
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button 
            onClick={() => handleFilterClick(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${language === 'th' ? 'font-noto-thai' : ''}
              ${activeFilter === null ? 'bg-primary text-white' : 'bg-white/70 text-dark hover:bg-white'}`}
          >
            All
          </button>
          <button 
            onClick={() => handleFilterClick('beach')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${language === 'th' ? 'font-noto-thai' : ''}
              ${activeFilter === 'beach' ? 'bg-primary text-white' : 'bg-white/70 text-dark hover:bg-white'}`}
          >
            Beaches
          </button>
          <button 
            onClick={() => handleFilterClick('landmark')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${language === 'th' ? 'font-noto-thai' : ''}
              ${activeFilter === 'landmark' ? 'bg-primary text-white' : 'bg-white/70 text-dark hover:bg-white'}`}
          >
            Landmarks
          </button>
          <button 
            onClick={() => handleFilterClick('activity')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${language === 'th' ? 'font-noto-thai' : ''}
              ${activeFilter === 'activity' ? 'bg-primary text-white' : 'bg-white/70 text-dark hover:bg-white'}`}
          >
            Activities
          </button>
        </div>
        
        {/* Map Container */}
        <div className="relative w-full h-[500px] bg-blue-50 rounded-xl overflow-hidden shadow-lg">
          {/* Map Background */}
          <img 
            src="https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/kohlantamaps.jpg?updatedAt=1747394732121" 
            alt="Koh Lanta Map" 
            className="w-full h-full object-cover opacity-90"
          />
          
          {/* Stylized Map Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDAgTDEwMCAwIEwxMDAgMTAwIEwwIDEwMCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMxQTlEQUIiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtZGFzaGFycmF5PSI1LDUiIC8+PC9zdmc+')] opacity-40"></div>
          
          {/* Location Pins */}
          {filteredLocations.map((location) => (
            <button
              key={location.id}
              className={`absolute group ${getPinColor(location.category)}`}
              style={{ left: `${location.position.x}%`, top: `${location.position.y}%` }}
              onClick={() => handlePinClick(location)}
            >
              <div className="relative">
                <MapPin 
                  className={`w-8 h-8 transform -translate-x-1/2 -translate-y-full filter drop-shadow-md
                    ${activeLocation?.id === location.id ? 'text-accent animate-pulse-slow' : ''}`} 
                  strokeWidth={activeLocation?.id === location.id ? 3 : 2}
                />
                
                {/* Location Label */}
                <span className={`absolute whitespace-nowrap left-1/2 -translate-x-1/2 -translate-y-full -mt-2
                  bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium shadow-md
                  ${activeLocation?.id === location.id ? 'block' : 'hidden group-hover:block'}
                  ${language === 'th' ? 'font-noto-thai' : ''}`}
                >
                  {location.name[language]}
                </span>
              </div>
            </button>
          ))}
          
          {/* Location Info Card */}
          {activeLocation && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs w-full animate-fade-in">
              <h3 className={`font-bold text-lg mb-1 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {activeLocation.name[language]}
              </h3>
              <p className={`text-sm text-gray-600 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {activeLocation.description?.[language]}
              </p>
              <div className="mt-3">
                <button className={`text-sm font-medium text-primary hover:text-primary/80 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {language === 'en' ? 'Learn more' : 'ดูเพิ่มเติม'} →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
