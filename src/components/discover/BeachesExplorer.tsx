
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Waves, Users, Umbrella } from 'lucide-react';

type Beach = {
  id: number;
  name: {
    en: string;
    th: string;
  };
  location: {
    en: string;
    th: string;
  };
  images: string[];
  characteristics: {
    length: string;
    sandType: {
      en: string;
      th: string;
    };
    waterClarity: number; // 1-5
  };
  crowdLevel: number; // 1-5
  facilities: string[]; // 'restrooms', 'restaurants', 'rentals', 'showers'
  description: {
    en: string;
    th: string;
  };
};

const beaches: Beach[] = [
  {
    id: 1,
    name: {
      en: "Klong Dao Beach",
      th: "หาดคลองดาว",
    },
    location: {
      en: "Northwest Koh Lanta",
      th: "ทางตะวันตกเฉียงเหนือของเกาะลันตา",
    },
    images: [
      "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/Klong-Dao-Beach-on-Koh-Lanta.webp",
      "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/Klong-Dao-Beach-1024x576.png",
      "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/klog-dao-beach.jpeg"
    ],
    characteristics: {
      length: "3 km",
      sandType: {
        en: "Fine white",
        th: "ทรายขาวละเอียด",
      },
      waterClarity: 4,
    },
    crowdLevel: 4,
    facilities: ["restrooms", "restaurants", "rentals", "showers"],
    description: {
      en: "Klong Dao is Koh Lanta's most popular beach, offering stunning sunset views and shallow waters perfect for families with children.",
      th: "คลองดาวเป็นชายหาดที่ได้รับความนิยมมากที่สุดของเกาะลันตา มีวิวพระอาทิตย์ตกที่สวยงามและน้ำตื้นเหมาะสำหรับครอบครัวที่มีเด็ก",
    }
  },
  {
    id: 2,
    name: {
      en: "Long Beach",
      th: "หาดยาว",
    },
    location: {
      en: "West Coast Koh Lanta",
      th: "ชายฝั่งตะวันตกของเกาะลันตา",
    },
    images: [
      "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/HF_Long-Beach-Koh-Lanta_1024x680_C-Agnieszka-Napio%CC%81rkowska.webp",
      "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/long-beachlanta.webp",
      "https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-beach.jpg"
    ],
    characteristics: {
      length: "4 km",
      sandType: {
        en: "Golden",
        th: "ทรายสีทอง",
      },
      waterClarity: 5,
    },
    crowdLevel: 3,
    facilities: ["restrooms", "restaurants", "rentals"],
    description: {
      en: "True to its name, Long Beach stretches for kilometers with soft golden sand and clear waters, ideal for swimming and sunset walks.",
      th: "หาดยาวมีความยาวหลายกิโลเมตรตามชื่อ พร้อมทรายสีทองนุ่มและน้ำใสเหมาะสำหรับการว่ายน้ำและเดินชมพระอาทิตย์ตก",
    }
  },
  {
    id: 3,
    name: {
      en: "Kantiang Bay",
      th: "อ่าวกันเตียง",
    },
    location: {
      en: "Southwest Koh Lanta",
      th: "ทางตะวันตกเฉียงใต้ของเกาะลันตา",
    },
    images: [
      "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/Kantiang-Bay-in-Koh-Lanta.webp",
      "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/kantang.webp",
      "https://ik.imagekit.io/insomnialz/kohLanta-img/atardecer-en-la-bahia-kantiang-koh-lanta-tailandia-1024x546.webp"
    ],
    characteristics: {
      length: "1 km",
      sandType: {
        en: "White",
        th: "ทรายขาว",
      },
      waterClarity: 5,
    },
    crowdLevel: 2,
    facilities: ["restrooms", "restaurants"],
    description: {
      en: "Often cited as one of Thailand's most beautiful beaches, Kantiang Bay offers crystal-clear waters and a more secluded atmosphere.",
      th: "มักถูกกล่าวถึงว่าเป็นหนึ่งในชายหาดที่สวยที่สุดของประเทศไทย อ่าวกันเตียงมีน้ำใสคริสตัลและบรรยากาศที่เงียบสงบ",
    }
  },
  {
    id: 4,
    name: {
      en: "Bamboo Bay",
      th: "อ่าวไม้ไผ่",
    },
    location: {
      en: "Southern Koh Lanta",
      th: "ทางใต้ของเกาะลันตา",
    },
    images: [
      "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/sunset-bamboobay.jpg",
      "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/bamboobay.png",
      "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/Bamboo-Bay.jpg"
    ],
    characteristics: {
      length: "0.5 km",
      sandType: {
        en: "Golden",
        th: "ทรายสีทอง",
      },
      waterClarity: 5,
    },
    crowdLevel: 1,
    facilities: ["restaurants"],
    description: {
      en: "Bamboo Bay is one of Koh Lanta's most secluded beaches, offering pristine sands and excellent snorkeling opportunities in a peaceful setting.",
      th: "อ่าวไม้ไผ่เป็นหนึ่งในชายหาดที่เงียบสงบที่สุดของเกาะลันตา มีทรายที่บริสุทธิ์และโอกาสในการดำน้ำตื้นที่ยอดเยี่ยมในบรรยากาศที่สงบ",
    }
  },
];

const BeachesExplorer = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<string | null>(null);
  
  // Translations
  const translations = {
    title: {
      en: "Beaches Explorer",
      th: "สำรวจชายหาด",
    },
    subtitle: {
      en: "Discover Koh Lanta's pristine coastline",
      th: "ค้นพบชายฝั่งที่บริสุทธิ์ของเกาะลันตา",
    },
    filters: {
      all: {
        en: "All Beaches",
        th: "หาดทั้งหมด",
      },
      family: {
        en: "Family-Friendly",
        th: "เหมาะกับครอบครัว",
      },
      quiet: {
        en: "Quiet & Secluded",
        th: "เงียบสงบและเป็นส่วนตัว",
      },
      facilities: {
        en: "Full Facilities",
        th: "สิ่งอำนวยความสะดวกครบครัน",
      },
    },
    characteristics: {
      en: "Characteristics",
      th: "ลักษณะ",
    },
    length: {
      en: "Beach Length",
      th: "ความยาวหาด",
    },
    sand: {
      en: "Sand Type",
      th: "ประเภททราย",
    },
    clarity: {
      en: "Water Clarity",
      th: "ความใสของน้ำ",
    },
    crowd: {
      en: "Crowd Level",
      th: "ระดับความแออัด",
    },
    facilities: {
      en: "Facilities",
      th: "สิ่งอำนวยความสะดวก",
    },
    facilityNames: {
      restrooms: {
        en: "Restrooms",
        th: "ห้องน้ำ",
      },
      restaurants: {
        en: "Restaurants",
        th: "ร้านอาหาร",
      },
      rentals: {
        en: "Equipment Rentals",
        th: "บริการให้เช่าอุปกรณ์",
      },
      showers: {
        en: "Showers",
        th: "ห้องอาบน้ำ",
      },
    },
  };

  // Filter beaches based on selected filter
  const filteredBeaches = filter === null 
    ? beaches 
    : filter === 'family' 
      ? beaches.filter(beach => beach.crowdLevel >= 3 && beach.characteristics.waterClarity >= 4)
      : filter === 'quiet'
        ? beaches.filter(beach => beach.crowdLevel <= 2)
        : filter === 'facilities'
          ? beaches.filter(beach => beach.facilities.length >= 3)
          : beaches;

  // Render rating as dots
  const renderRating = (rating: number, max: number = 5) => (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }).map((_, i) => (
        <span 
          key={i} 
          className={`h-2 w-2 rounded-full ${i < rating ? 'bg-primary' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  );

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
      
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.entries(translations.filters).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setFilter(key === 'all' ? null : key)}
            className={`px-4 py-2 rounded-full transition-colors ${language === 'th' ? 'font-noto-thai' : ''} 
              ${filter === (key === 'all' ? null : key) 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}
            `}
          >
            {value[language]}
          </button>
        ))}
      </div>
      
      {/* Beach Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBeaches.map((beach) => (
          <Card key={beach.id} className="overflow-hidden hover-lift">
            <div className="relative h-64">
              <Carousel>
                <CarouselContent>
                  {beach.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="h-64">
                        <img 
                          src={img} 
                          alt={`${beach.name[language]} - ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className={`text-xl font-bold mb-1 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {beach.name[language]}
                </h3>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className={`text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {beach.location[language]}
                  </span>
                </div>
                <p className={`text-gray-600 mb-4 text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {beach.description[language]}
                </p>
              </div>
              
              {/* Characteristics */}
              <div className="border-t pt-4">
                <h4 className={`text-sm font-medium mb-2 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {translations.characteristics[language]}
                </h4>
                
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <p className={`text-xs text-gray-500 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {translations.length[language]}
                    </p>
                    <p className={`text-sm font-medium ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {beach.characteristics.length}
                    </p>
                  </div>
                  
                  <div>
                    <p className={`text-xs text-gray-500 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {translations.sand[language]}
                    </p>
                    <p className={`text-sm font-medium ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {beach.characteristics.sandType[language]}
                    </p>
                  </div>
                  
                  <div>
                    <p className={`text-xs text-gray-500 flex items-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      <Waves className="h-3 w-3 mr-1" /> {translations.clarity[language]}
                    </p>
                    {renderRating(beach.characteristics.waterClarity)}
                  </div>
                  
                  <div>
                    <p className={`text-xs text-gray-500 flex items-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
                      <Users className="h-3 w-3 mr-1" /> {translations.crowd[language]}
                    </p>
                    {renderRating(beach.crowdLevel)}
                  </div>
                </div>
                
                {/* Facilities */}
                <div>
                  <p className={`text-xs text-gray-500 mb-1 flex items-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    <Umbrella className="h-3 w-3 mr-1" /> {translations.facilities[language]}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {beach.facilities.map((facility) => (
                      <span 
                        key={facility} 
                        className={`text-xs bg-secondary/30 text-dark px-2 py-1 rounded ${language === 'th' ? 'font-noto-thai' : ''}`}
                      >
                        {translations.facilityNames[facility as keyof typeof translations.facilityNames][language]}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BeachesExplorer;
