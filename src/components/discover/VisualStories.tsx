
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { GalleryHorizontal } from 'lucide-react';

const VisualStories = () => {
  const { language } = useLanguage();
  const [sliderValue, setSliderValue] = useState<number>(50);
  
  // Translations
  const translations = {
    title: {
      en: "Visual Stories",
      th: "เรื่องราวภาพ",
    },
    subtitle: {
      en: "Experience Koh Lanta through captivating imagery",
      th: "สัมผัสเกาะลันตาผ่านภาพที่น่าหลงใหล",
    },
    photoEssay: {
      title: {
        en: "Photo Essays",
        th: "เรื่องราวภาพถ่าย",
      },
    },
    beforeAfter: {
      title: {
        en: "Then & Now",
        th: "อดีตและปัจจุบัน",
      },
      description: {
        en: "Slide to compare how Koh Lanta has changed over the years",
        th: "เลื่อนเพื่อเปรียบเทียบการเปลี่ยนแปลงของเกาะลันตาตลอดหลายปี",
      },
    },
    dayNight: {
      title: {
        en: "Day to Night Transitions",
        th: "การเปลี่ยนแปลงจากกลางวันสู่กลางคืน",
      },
    },
    locations: {
      lantaOldTown: {
        en: "Lanta Old Town",
        th: "เมืองเก่าลันตา",
      },
      klongDaoBeach: {
        en: "Klong Dao Beach",
        th: "หาดคลองดาว",
      },
      saladan: {
        en: "Saladan Pier",
        th: "ท่าเรือสะละดัน",
      },
    },
  };

  // Photo essays data
  const photoEssays = [
    {
      id: 1,
      title: {
        en: "Life in Lanta Old Town",
        th: "ชีวิตในเมืองเก่าลันตา",
      },
      description: {
        en: "A glimpse into daily life in this historic coastal community",
        th: "การดูชีวิตประจำวันในชุมชนชายฝั่งประวัติศาสตร์แห่งนี้",
      },
      images: [
        "https://ik.imagekit.io/insomnialz/kohLanta-img/koh-lanta-old-town-01.jpg",
        "https://ik.imagekit.io/insomnialz/kohLanta-img/Old-Town.png",
        "https://ik.imagekit.io/insomnialz/kohLanta-img/A-Koh-Lanta-Old-Town-F-Helene-Talbot.webp",
        "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/thai-muslim-kohlanta.jpg",
      ],
    },
    {
      id: 2,
      title: {
        en: "Colors of the Andaman",
        th: "สีสันของอันดามัน",
      },
      description: {
        en: "Exploring the vibrant shades of Koh Lanta's sea and sky",
        th: "สำรวจเฉดสีที่สดใสของทะเลและท้องฟ้าเกาะลันตา",
      },
      images: [
        "https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-beach.jpg",
        "https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-kohlanta.jpg",
        "https://ik.imagekit.io/insomnialz/kohLanta-img/Kantiang-Bay-Beach.jpg",
        "https://ik.imagekit.io/insomnialz/kohLanta-img/atardecer-en-la-bahia-kantiang-koh-lanta-tailandia-1024x546.webp",
      ],
    },
  ];

  // Before & after images
  const beforeAfterImages = [
    {
      id: 1,
      location: "lantaOldTown",
      beforeImage: "https://ik.imagekit.io/insomnialz/kohLanta-img/Old-Town.png",
      afterImage: "https://ik.imagekit.io/insomnialz/kohLanta-img/A-Koh-Lanta-Old-Town-F-Helene-Talbot.webp",
      year: {
        before: "1980",
        after: "2023",
      },
    },
  ];

  // Day to night transitions
  const dayNightImages = [
    {
      id: 1,
      location: "klongDaoBeach",
      dayImage: "https://ik.imagekit.io/insomnialz/kohLanta-img/Kantiang-Bay-Beach.jpg",
      nightImage: "https://ik.imagekit.io/insomnialz/kohLanta-img/night-lanta.png",
    },
    {
      id: 2,
      location: "saladan",
      dayImage: "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/saladan-day-kohlanta.jpg",
      nightImage: "https://ik.imagekit.io/insomnialz/kohLanta-img/The%20Ozone%20Beach%20Bar%20Party%20Night-L.jpg",
    },
  ];

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className={`text-3xl font-bold ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {translations.title[language]}
        </h2>
        <p className={`text-lg text-gray-600 mt-2 ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {translations.subtitle[language]}
        </p>
      </div>
      
      {/* Photo Essays */}
      <div className="mb-16">
        <h3 className={`text-2xl font-bold mb-6 flex items-center justify-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          <GalleryHorizontal className="h-6 w-6 mr-2 text-primary" />
          {translations.photoEssay.title[language]}
        </h3>
        
        {photoEssays.map((essay) => (
          <div key={essay.id} className="mb-10">
            <h4 className={`text-xl font-bold mb-2 ${language === 'th' ? 'font-noto-thai' : ''}`}>
              {essay.title[language]}
            </h4>
            <p className={`text-gray-600 mb-4 ${language === 'th' ? 'font-noto-thai' : ''}`}>
              {essay.description[language]}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {essay.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`overflow-hidden rounded-lg shadow-md ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <img 
                    src={image} 
                    alt={`${essay.title[language]} - ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Before & After Comparison */}
      <div className="mb-16">
        <h3 className={`text-2xl font-bold mb-4 flex items-center justify-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {translations.beforeAfter.title[language]}
        </h3>
        <p className={`text-center mb-8 ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {translations.beforeAfter.description[language]}
        </p>
        
        {beforeAfterImages.map((item) => (
          <div key={item.id} className="max-w-3xl mx-auto">
            <h4 className={`text-center text-xl font-medium mb-4 ${language === 'th' ? 'font-noto-thai' : ''}`}>
              {translations.locations[item.location as keyof typeof translations.locations][language]}
            </h4>
            
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              {/* After Image (Full) */}
              <div 
                className="absolute inset-0"
                style={{ 
                  backgroundImage: `url(${item.afterImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Before Image (Partial based on slider) */}
              <div 
                className="absolute inset-0"
                style={{ 
                  backgroundImage: `url(${item.beforeImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: `${sliderValue}%`,
                  borderRight: '3px solid white'
                }}
              />
              
              {/* Year Labels */}
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {item.year.before}
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {item.year.after}
              </div>
              
              {/* Slider */}
              <input 
                type="range" 
                min="1" 
                max="99" 
                value={sliderValue} 
                onChange={handleSliderChange}
                className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 appearance-none cursor-pointer bg-transparent z-10"
                style={{
                  '--range-thumb-bg': '#1A9DAB',
                } as React.CSSProperties}
              />
              
              {/* Slider Handle */}
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-white border-2 border-primary shadow-lg"
                style={{ left: `calc(${sliderValue}% - 12px)` }}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Day to Night Transitions */}
      <div>
        <h3 className={`text-2xl font-bold mb-6 text-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {translations.dayNight.title[language]}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {dayNightImages.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <h4 className={`text-center text-lg font-medium py-3 bg-primary/5 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.locations[item.location as keyof typeof translations.locations][language]}
              </h4>
              
              <div className="grid grid-cols-2">
                <div className="col-span-1 border-r border-gray-200">
                  <img 
                    src={item.dayImage} 
                    alt={`${translations.locations[item.location as keyof typeof translations.locations][language]} - Day`}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4 text-center">
                    <p className={`font-medium ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {language === 'en' ? 'Day' : 'กลางวัน'}
                    </p>
                  </CardContent>
                </div>
                <div className="col-span-1">
                  <img 
                    src={item.nightImage}
                    alt={`${translations.locations[item.location as keyof typeof translations.locations][language]} - Night`}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4 text-center">
                    <p className={`font-medium ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {language === 'en' ? 'Night' : 'กลางคืน'}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisualStories;
