
import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HighlightItem } from '../types';

// Sample data for Island Highlights
const highlightsData: HighlightItem[] = [
  {
    id: 1,
    category: 'beaches',
    imageUrl: 'https://ik.imagekit.io/insomnialz/kohLanta-img/Kantiang-Bay-Beach.jpg',
    name: {
      en: 'Klong Dao Beach',
      th: 'หาดคลองดาว'
    },
    description: {
      en: 'A 3km stretch of white sand with shallow waters perfect for families.',
      th: 'ชายหาดทรายขาวยาว 3 กม. น้ำตื้น เหมาะสำหรับครอบครัว'
    }
  },
  {
    id: 2,
    category: 'beaches',
    imageUrl: 'https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-beach.jpg',
    name: {
      en: 'Long Beach',
      th: 'หาดยาว'
    },
    description: {
      en: 'Beautiful sunset views and a perfect spot for swimming.',
      th: 'วิวพระอาทิตย์ตกที่สวยงามและจุดที่เหมาะสำหรับการว่ายน้ำ'
    }
  },
  {
    id: 3,
    category: 'activities',
    imageUrl: 'https://ik.imagekit.io/insomnialz/kohLanta-img/snorkeling-08.jpg',
    name: {
      en: 'Scuba Diving',
      th: 'ดำน้ำลึก'
    },
    description: {
      en: 'Explore vibrant coral reefs and diverse marine life.',
      th: 'สำรวจแนวปะการังที่สวยงามและสิ่งมีชีวิตใต้ทะเลที่หลากหลาย'
    }
  },
  {
    id: 4,
    category: 'food',
    imageUrl: 'https://ik.imagekit.io/insomnialz/kohLanta-img/nightmarket.jpg',
    name: {
      en: 'Seafood Market',
      th: 'ตลาดอาหารทะเล'
    },
    description: {
      en: 'Fresh seafood caught daily by local fishermen.',
      th: 'อาหารทะเลสดที่จับโดยชาวประมงท้องถิ่นทุกวัน'
    }
  },
  {
    id: 5,
    category: 'culture',
    imageUrl: 'https://ik.imagekit.io/insomnialz/kohLanta-img/koh-lanta-old-town-01.jpg',
    name: {
      en: 'Old Town',
      th: 'เมืองเก่า'
    },
    description: {
      en: 'Charming historic district with traditional wooden houses.',
      th: 'ย่านประวัติศาสตร์ที่เสน่ห์ด้วยบ้านไม้ดั้งเดิม'
    }
  },
  {
    id: 6,
    category: 'accommodation',
    imageUrl: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/beachfront-resort-kohlanta.jpg',
    name: {
      en: 'Beachfront Resorts',
      th: 'รีสอร์ทริมหาด'
    },
    description: {
      en: 'Luxury accommodations with stunning ocean views.',
      th: 'ที่พักหรูพร้อมวิวมหาสมุทรที่น่าทึ่ง'
    }
  },
  {
    id: 7,
    category: 'activities',
    imageUrl: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/kayaking-kohlanta.jpg',
    name: {
      en: 'Kayaking',
      th: 'พายเรือคายัค'
    },
    description: {
      en: 'Explore hidden caves and mangroves with guided tours.',
      th: 'สำรวจถ้ำซ่อนและป่าชายเลนด้วยทัวร์ที่มีไกด์นำ'
    }
  },
  {
    id: 8,
    category: 'culture',
    imageUrl: 'https://ik.imagekit.io/insomnialz/kohLanta-img/songkran-11-Koh-Lanta-Thailand@2x.jpg',
    name: {
      en: 'Local Festivals',
      th: 'เทศกาลท้องถิ่น'
    },
    description: {
      en: 'Experience vibrant cultural celebrations throughout the year.',
      th: 'สัมผัสการเฉลิมฉลองทางวัฒนธรรมที่มีชีวิตชีวาตลอดทั้งปี'
    }
  }
];

const IslandHighlights: React.FC = () => {
  const { t, language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.8;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className={`text-center mb-8 ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {t('highlights.title')}
        </h2>
        
        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['beaches', 'activities', 'food', 'culture', 'accommodation'].map((category) => (
            <button 
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${language === 'th' ? 'font-noto-thai' : ''} 
                bg-secondary/30 text-dark hover:bg-secondary`}
            >
              {t(`highlights.${category}`)}
            </button>
          ))}
        </div>
        
        {/* Scroll Buttons */}
        <div className="relative">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors md:-left-4"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors md:-right-4"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
          
          {/* Scrollable Content */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto py-4 gap-6 horizontal-scrollbar hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {highlightsData.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-md overflow-hidden hover-lift group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name[language]} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-3 right-3 bg-accent/90 text-white text-xs font-bold px-2 py-1 rounded-md">
                    {t(`highlights.${item.category}`)}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className={`text-lg font-bold mb-2 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {item.name[language]}
                  </h3>
                  <p className={`text-sm text-gray-600 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {item.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslandHighlights;
