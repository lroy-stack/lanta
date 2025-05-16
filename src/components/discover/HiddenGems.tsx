
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Eye, MapPin, Sun, Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HiddenGems = () => {
  const { language } = useLanguage();
  const [activeSpot, setActiveSpot] = useState<number | null>(null);
  
  // Translations
  const translations = {
    title: {
      en: "Hidden Gems",
      th: "สถานที่ลับ",
    },
    subtitle: {
      en: "Discover Koh Lanta's best kept secrets",
      th: "ค้นพบความลับที่ซ่อนอยู่บนเกาะลันตา",
    },
    secretSpots: {
      title: {
        en: "Secret Spots",
        th: "จุดลับ",
      },
      description: {
        en: "Explore these lesser-known locations to experience Koh Lanta away from the crowds",
        th: "สำรวจสถานที่ที่ไม่ค่อยมีคนรู้จักเหล่านี้เพื่อสัมผัสเกาะลันตาห่างไกลจากฝูงชน",
      },
    },
    insiderStories: {
      title: {
        en: "Insider Stories",
        th: "เรื่องราวจากคนใน",
      },
    },
    sunrisesSunsets: {
      title: {
        en: "Best Sunrise & Sunset Spots",
        th: "จุดชมพระอาทิตย์ขึ้นและตกที่ดีที่สุด",
      },
      description: {
        en: "Experience magical moments at these perfect viewpoints",
        th: "สัมผัสช่วงเวลาอันวิเศษที่จุดชมวิวที่สมบูรณ์แบบเหล่านี้",
      },
    }
  };

  // Hidden spots data
  const spots = [
    {
      id: 1,
      name: {
        en: "Diamond Cliff",
        th: "ผาเพชร",
      },
      location: {
        en: "Southern Koh Lanta",
        th: "ตอนใต้ของเกาะลันตา",
      },
      description: {
        en: "A secluded cliff offering panoramic views of the Andaman Sea, perfect for watching the sunset away from crowds.",
        th: "หน้าผาที่เงียบสงบมอบวิวพาโนรามาของทะเลอันดามัน เหมาะสำหรับชมพระอาทิตย์ตกห่างไกลจากฝูงชน",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/Mu-Koh-Lanta-National-Park-drone.jpg",
      x: 70,
      y: 80,
    },
    {
      id: 2,
      name: {
        en: "Waterfall Bay",
        th: "อ่าวน้ำตก",
      },
      location: {
        en: "Eastern Coast",
        th: "ชายฝั่งตะวันออก",
      },
      description: {
        en: "A small bay with a seasonal waterfall that flows directly into the sea during the rainy season. Accessible only by boat or a challenging hike.",
        th: "อ่าวเล็ก ๆ ที่มีน้ำตกตามฤดูกาลที่ไหลลงสู่ทะเลโดยตรงในช่วงฤดูฝน สามารถเข้าถึงได้เฉพาะทางเรือหรือการเดินป่าที่ท้าทาย",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/waterfall-kohlanta.jpg",
      x: 85,
      y: 40,
    },
    {
      id: 3,
      name: {
        en: "Hidden Cove",
        th: "อ่าวซ่อนเร้น",
      },
      location: {
        en: "Northwest Peninsula",
        th: "คาบสมุทรทางตะวันตกเฉียงเหนือ",
      },
      description: {
        en: "A sheltered cove with crystal-clear waters and vibrant coral, accessible via a 20-minute jungle trail. Bring snorkeling gear for the best experience.",
        th: "อ่าวที่ได้รับการปกป้องด้วยน้ำใสคริสตัลและปะการังที่มีสีสัน เข้าถึงได้ทางเส้นทางป่า 20 นาที นำอุปกรณ์ดำน้ำตื้นมาด้วยเพื่อประสบการณ์ที่ดีที่สุด",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/Kantiang-Bay-Beach.jpg",
      x: 15,
      y: 20,
    },
    {
      id: 4,
      name: {
        en: "Bamboo Point",
        th: "จุดไม้ไผ่",
      },
      location: {
        en: "Central Highlands",
        th: "ที่ราบสูงตอนกลาง",
      },
      description: {
        en: "A peaceful bamboo grove with a small natural pool fed by a mountain spring. The perfect spot to escape the heat of the day.",
        th: "ป่าไผ่ที่เงียบสงบพร้อมสระน้ำธรรมชาติเล็ก ๆ ที่รับน้ำจากน้ำพุบนภูเขา จุดที่เหมาะสำหรับหลบหนีความร้อนของวัน",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/Mu-Koh-Lanta-National-Park-5.jpg",
      x: 50,
      y: 50,
    },
  ];

  // Insider stories
  const stories = [
    {
      id: 1,
      title: {
        en: "The Secret Cave of Koh Lanta",
        th: "ถ้ำลับของเกาะลันตา",
      },
      author: {
        en: "By Somchai, Local Fisherman",
        th: "โดย สมชาย, ชาวประมงท้องถิ่น",
      },
      content: {
        en: "My grandfather first showed me this hidden cave when I was just 10 years old. It's accessible only during very low tide, and inside there's a chamber with ancient wall markings that few visitors ever see.",
        th: "คุณปู่ของฉันแสดงถ้ำที่ซ่อนอยู่นี้ให้ฉันดูครั้งแรกตอนที่ฉันอายุเพียง 10 ปี มันเข้าถึงได้เฉพาะช่วงน้ำลงต่ำมาก และภายในมีห้องโถงที่มีรอยเขียนบนผนังโบราณที่นักท่องเที่ยวน้อยคนนักจะได้เห็น",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/cave-kohlanta.jpg",
    },
    {
      id: 2,
      title: {
        en: "The Abandoned Lighthouse Trail",
        th: "เส้นทางประภาคารที่ถูกทิ้งร้าง",
      },
      author: {
        en: "By Ratana, Tour Guide",
        th: "โดย รัตนา, มัคคุเทศก์",
      },
      content: {
        en: "Beyond the main lighthouse at the National Park, there's an overgrown path leading to a smaller, abandoned lighthouse built during World War II. The view from there is my favorite spot on the entire island.",
        th: "นอกเหนือจากประภาคารหลักที่อุทยานแห่งชาติ มีเส้นทางที่รกร้างนำไปสู่ประภาคารที่เล็กกว่าและถูกทิ้งร้างซึ่งสร้างขึ้นในช่วงสงครามโลกครั้งที่สอง วิวจากที่นั่นเป็นจุดโปรดของฉันบนเกาะทั้งหมด",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/lighthouse.webp",
    },
    {
      id: 3,
      title: {
        en: "The Hidden Batik Workshop",
        th: "โรงงานบาติกที่ซ่อนอยู่",
      },
      author: {
        en: "By Fai, Local Artist",
        th: "โดย ฝ้าย, ศิลปินท้องถิ่น",
      },
      content: {
        en: "In a quiet corner of Lanta Old Town, there's a small family-run batik workshop that's been operating for over 50 years. They welcome visitors to learn the traditional techniques, but you won't find it in any guidebook.",
        th: "ในมุมเงียบของเมืองเก่าลันตา มีโรงงานบาติกเล็ก ๆ ที่ดำเนินการโดยครอบครัวซึ่งเปิดดำเนินการมานานกว่า 50 ปี พวกเขายินดีต้อนรับนักท่องเที่ยวให้มาเรียนรู้เทคนิคแบบดั้งเดิม แต่คุณจะไม่พบมันในคู่มือท่องเที่ยวใด ๆ",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/koh-lanta-old-town-01.jpg",
    },
  ];

  // Sunrise and sunset spots
  const sunSpots = [
    {
      id: 1,
      name: {
        en: "Phra Ae Viewpoint",
        th: "จุดชมวิวพระแอ",
      },
      type: "sunset",
      bestTime: {
        en: "6:00 PM - 6:30 PM",
        th: "18:00 น. - 18:30 น.",
      },
      bestSeason: {
        en: "November to April",
        th: "พฤศจิกายน ถึง เมษายน",
      },
      description: {
        en: "The elevated viewpoint offers unobstructed sunset views with silhouettes of long-tail boats in the foreground.",
        th: "จุดชมวิวที่ยกระดับให้วิวพระอาทิตย์ตกที่ไม่มีสิ่งกีดขวางพร้อมเงาของเรือหางยาวในเบื้องหน้า",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/sunset.jpg",
    },
    {
      id: 2,
      name: {
        en: "Kantiang Bay Sunrise",
        th: "พระอาทิตย์ขึ้นที่อ่าวกันเตียง",
      },
      type: "sunrise",
      bestTime: {
        en: "5:45 AM - 6:15 AM",
        th: "5:45 น. - 6:15 น.",
      },
      bestSeason: {
        en: "Year-round",
        th: "ตลอดทั้งปี",
      },
      description: {
        en: "Experience the soft glow of dawn over the eastern hills as the bay gradually illuminates with golden light.",
        th: "สัมผัสแสงรุ่งอรุณอ่อน ๆ เหนือเนินเขาทางตะวันออกในขณะที่อ่าวค่อย ๆ สว่างด้วยแสงสีทอง",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/atardecer-en-la-bahia-kantiang-koh-lanta-tailandia-1024x546.webp",
    },
    {
      id: 3,
      name: {
        en: "Old Town Pier",
        th: "ท่าเรือเมืองเก่า",
      },
      type: "sunrise",
      bestTime: {
        en: "6:00 AM - 6:30 AM",
        th: "6:00 น. - 6:30 น.",
      },
      bestSeason: {
        en: "December to February",
        th: "ธันวาคม ถึง กุมภาพันธ์",
      },
      description: {
        en: "Watch the sunrise over the mainland mountains from this historic pier extending into the Andaman Sea.",
        th: "ชมพระอาทิตย์ขึ้นเหนือภูเขาบนแผ่นดินใหญ่จากท่าเรือประวัติศาสตร์นี้ที่ยื่นออกไปในทะเลอันดามัน",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/A-Koh-Lanta-Old-Town-F-Helene-Talbot.webp",
    },
    {
      id: 4,
      name: {
        en: "Bamboo Bay Sunset",
        th: "พระอาทิตย์ตกที่อ่าวไม้ไผ่",
      },
      type: "sunset",
      bestTime: {
        en: "5:45 PM - 6:15 PM",
        th: "17:45 น. - 18:15 น.",
      },
      bestSeason: {
        en: "November to April",
        th: "พฤศจิกายน ถึง เมษายน",
      },
      description: {
        en: "This southernmost bay offers spectacular sunset views with dramatic limestone karsts in the distance.",
        th: "อ่าวที่อยู่ใต้สุดนี้มอบวิวพระอาทิตย์ตกที่น่าตื่นตาตื่นใจพร้อมหินปูนที่น่าทึ่งในระยะไกล",
      },
      image: "https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-beach.jpg",
    },
  ];

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
      
      {/* Secret Spots Map */}
      <div className="mb-16">
        <h3 className={`text-2xl font-bold mb-4 flex items-center justify-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          <Eye className="h-6 w-6 mr-2 text-primary" />
          {translations.secretSpots.title[language]}
        </h3>
        
        <p className={`text-center mb-8 max-w-2xl mx-auto ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {translations.secretSpots.description[language]}
        </p>
        
        {/* Interactive Map */}
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-8">
          {/* Map Background */}
          <img 
            src="https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/koh-lanta-map.jpg" 
            alt="Koh Lanta Map" 
            className="w-full h-full object-cover"
          />
          
          {/* Spots on Map */}
          {spots.map((spot) => (
            <button 
              key={spot.id}
              className="absolute"
              style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
              onClick={() => setActiveSpot(activeSpot === spot.id ? null : spot.id)}
            >
              <div className="relative">
                <MapPin 
                  className={`w-8 h-8 text-accent drop-shadow-lg -translate-x-1/2 -translate-y-1/2 ${activeSpot === spot.id ? 'animate-pulse' : ''}`}
                  strokeWidth={activeSpot === spot.id ? 3 : 2}
                />
                
                {/* Spot name on hover */}
                <div className={`absolute whitespace-nowrap left-1/2 -translate-x-1/2 -translate-y-full -mt-2
                  bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium shadow-md
                  ${language === 'th' ? 'font-noto-thai' : ''}`}
                >
                  {spot.name[language]}
                </div>
              </div>
            </button>
          ))}
          
          {/* Active Spot Detail */}
          {activeSpot !== null && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-sm w-full animate-fade-in">
              <div className="flex gap-4">
                <div className="w-1/3">
                  <img 
                    src={spots.find(spot => spot.id === activeSpot)?.image} 
                    alt={spots.find(spot => spot.id === activeSpot)?.name[language]} 
                    className="w-full h-24 object-cover rounded"
                  />
                </div>
                <div className="w-2/3">
                  <h4 className={`font-bold text-lg mb-1 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {spots.find(spot => spot.id === activeSpot)?.name[language]}
                  </h4>
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span className={`text-xs ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {spots.find(spot => spot.id === activeSpot)?.location[language]}
                    </span>
                  </div>
                  <p className={`text-sm text-gray-600 line-clamp-3 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {spots.find(spot => spot.id === activeSpot)?.description[language]}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Insider Stories */}
      <div className="mb-16">
        <h3 className={`text-2xl font-bold mb-8 flex items-center justify-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          <Eye className="h-6 w-6 mr-2 text-primary" />
          {translations.insiderStories.title[language]}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="overflow-hidden hover-lift">
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title[language]} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h4 className={`text-xl font-bold mb-1 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {story.title[language]}
                </h4>
                <p className={`text-gray-500 text-sm mb-4 italic ${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {story.author[language]}
                </p>
                <p className={`text-gray-600 text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {story.content[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Sunrise & Sunset Spots */}
      <div>
        <h3 className={`text-2xl font-bold mb-4 flex items-center justify-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          <Sun className="h-6 w-6 mr-2 text-primary" />
          {translations.sunrisesSunsets.title[language]}
        </h3>
        
        <p className={`text-center mb-8 max-w-2xl mx-auto ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {translations.sunrisesSunsets.description[language]}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sunSpots.map((spot) => (
            <Card key={spot.id} className="overflow-hidden hover-lift">
              <div className="relative h-64">
                <img 
                  src={spot.image} 
                  alt={spot.name[language]} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${spot.type === 'sunrise' ? 'bg-amber-100 text-amber-800' : 'bg-orange-100 text-orange-800'}`}>
                  {spot.type === 'sunrise' ? (language === 'en' ? 'Sunrise' : 'พระอาทิตย์ขึ้น') : (language === 'en' ? 'Sunset' : 'พระอาทิตย์ตก')}
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className={`text-xl font-bold mb-3 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {spot.name[language]}
                </h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className={`text-xs text-gray-500 flex items-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      <Clock className="h-3 w-3 mr-1" /> {language === 'en' ? 'Best Time' : 'เวลาที่ดีที่สุด'}
                    </p>
                    <p className={`text-sm font-medium ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {spot.bestTime[language]}
                    </p>
                  </div>
                  
                  <div>
                    <p className={`text-xs text-gray-500 flex items-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      <Calendar className="h-3 w-3 mr-1" /> {language === 'en' ? 'Best Season' : 'ฤดูกาลที่ดีที่สุด'}
                    </p>
                    <p className={`text-sm font-medium ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {spot.bestSeason[language]}
                    </p>
                  </div>
                </div>
                
                <p className={`text-gray-600 text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {spot.description[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiddenGems;
