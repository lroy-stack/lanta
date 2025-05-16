
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Star, Clock, Map, Tag, Camera } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const NatureWildlife = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('mangroves');
  
  // Translations
  const translations = {
    title: {
      en: "Nature & Wildlife",
      th: "ธรรมชาติและสัตว์ป่า",
    },
    subtitle: {
      en: "Explore Koh Lanta's diverse ecosystems",
      th: "สำรวจระบบนิเวศที่หลากหลายของเกาะลันตา",
    },
    ecosystems: {
      mangroves: {
        en: "Mangroves",
        th: "ป่าชายเลน",
      },
      coral: {
        en: "Coral Reefs",
        th: "แนวปะการัง",
      },
      jungle: {
        en: "Jungle",
        th: "ป่า",
      },
    },
    nationalPark: {
      title: {
        en: "Mu Ko Lanta National Park",
        th: "อุทยานแห่งชาติหมู่เกาะลันตา",
      },
      description: {
        en: "Established in 1990, this national park covers several islands including the southern tip of Koh Lanta. The park features pristine beaches, lush jungle trails, and a historic lighthouse.",
        th: "ก่อตั้งขึ้นในปี 1990 อุทยานแห่งชาตินี้ครอบคลุมเกาะหลายแห่งรวมถึงปลายใต้ของเกาะลันตา อุทยานมีชายหาดที่บริสุทธิ์ เส้นทางเดินป่าที่อุดมสมบูรณ์ และประภาคารเก่าแก่",
      },
      hours: {
        en: "Opening Hours: 8:30 AM - 5:00 PM daily",
        th: "เวลาทำการ: 8:30 น. - 17:00 น. ทุกวัน",
      },
      fees: {
        en: "Entry Fees: 200 THB for adults, 100 THB for children",
        th: "ค่าเข้าชม: 200 บาท สำหรับผู้ใหญ่, 100 บาท สำหรับเด็ก",
      },
    },
    trails: {
      title: {
        en: "Hiking Trails",
        th: "เส้นทางเดินป่า",
      },
      trail1: {
        name: {
          en: "Lighthouse Trail",
          th: "เส้นทางเดินสู่ประภาคาร",
        },
        difficulty: {
          en: "Easy",
          th: "ง่าย",
        },
        length: {
          en: "2 km",
          th: "2 กม.",
        },
        description: {
          en: "A scenic walk to the historic lighthouse with panoramic views.",
          th: "การเดินชมวิวไปยังประภาคารเก่าแก่พร้อมวิวพาโนรามา",
        },
      },
      trail2: {
        name: {
          en: "Jungle Circuit",
          th: "วงจรป่า",
        },
        difficulty: {
          en: "Moderate",
          th: "ปานกลาง",
        },
        length: {
          en: "4 km",
          th: "4 กม.",
        },
        description: {
          en: "Loop through dense jungle with opportunities to spot wildlife.",
          th: "วงรอบผ่านป่าทึบพร้อมโอกาสในการเห็นสัตว์ป่า",
        },
      },
    },
    photography: {
      title: {
        en: "Photography Spots",
        th: "จุดถ่ายภาพ",
      },
      spot1: {
        name: {
          en: "Ta Noad Cape",
          th: "แหลมตาโนด",
        },
        bestTime: {
          en: "Best Time: Sunset",
          th: "เวลาที่ดีที่สุด: พระอาทิตย์ตก",
        },
      },
      spot2: {
        name: {
          en: "Lighthouse Viewpoint",
          th: "จุดชมวิวประภาคาร",
        },
        bestTime: {
          en: "Best Time: Morning",
          th: "เวลาที่ดีที่สุด: ช่วงเช้า",
        },
      },
    },
    ecosystemContent: {
      mangroves: {
        title: {
          en: "Mangrove Forests",
          th: "ป่าชายเลน",
        },
        description: {
          en: "Koh Lanta's east coast features extensive mangrove forests, crucial for coastal protection and serving as nurseries for marine life. Take a kayak tour through the mangrove canals to observe this unique ecosystem up close.",
          th: "ชายฝั่งตะวันออกของเกาะลันตามีป่าชายเลนกว้างขวาง ซึ่งสำคัญต่อการป้องกันชายฝั่งและเป็นแหล่งอนุบาลสัตว์น้ำ ลองพายเรือคายัคผ่านคลองป่าชายเลนเพื่อสังเกตระบบนิเวศที่เป็นเอกลักษณ์นี้อย่างใกล้ชิด",
        },
        image: "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/manglares-kohlanta.jpeg",
      },
      coral: {
        title: {
          en: "Coral Reefs",
          th: "แนวปะการัง",
        },
        description: {
          en: "The waters surrounding Koh Lanta are home to vibrant coral reefs teeming with marine life. Snorkeling and diving spots like Koh Haa and Hin Daeng offer some of the best underwater experiences in Thailand.",
          th: "น้ำรอบเกาะลันตาเป็นที่อยู่ของแนวปะการังที่มีชีวิตชีวาและเต็มไปด้วยสิ่งมีชีวิตทางทะเล จุดดำน้ำตื้นและดำน้ำลึกเช่น เกาะห้า และ หินแดง มอบประสบการณ์ใต้น้ำที่ดีที่สุดในประเทศไทย",
        },
        image: "https://ik.imagekit.io/insomnialz/kohLanta-img/snorkeling-04-768x512.jpg",
      },
      jungle: {
        title: {
          en: "Tropical Jungle",
          th: "ป่าเขตร้อน",
        },
        description: {
          en: "Koh Lanta's interior is covered with lush tropical jungle, especially in the southern part within the national park. These forests are home to diverse wildlife including macaques, flying foxes, and over 100 bird species.",
          th: "พื้นที่ภายในของเกาะลันตาปกคลุมด้วยป่าเขตร้อนที่อุดมสมบูรณ์ โดยเฉพาะในส่วนทางใต้ภายในอุทยานแห่งชาติ ป่าเหล่านี้เป็นที่อยู่ของสัตว์ป่าหลากหลายชนิด รวมถึงลิงแสม สุนัขจิ้งจอกบิน และนกกว่า 100 สายพันธุ์",
        },
        image: "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/jungle-kohlanta.jpg",
      },
    }
  };

  // Animal and plant species
  const species = [
    {
      category: "mammals",
      items: [
        {
          name: { en: "Crab-eating macaque", th: "ลิงแสม" },
          image: "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/monkeys-kohlanta.jpg",
        },
        {
          name: { en: "Flying fox", th: "ค้างคาวแม่ไก่" },
          image: "https://ik.imagekit.io/insomnialz/kohLanta-img/Mu-Koh-Lanta-National-Park-drone.jpg",
        },
      ]
    },
    {
      category: "birds",
      items: [
        {
          name: { en: "White-bellied sea eagle", th: "นกอินทรีทะเลท้องขาว" },
          image: "https://ik.imagekit.io/insomnialz/kohLanta-img/mu-ko-lanta-national-park.jpg",
        },
        {
          name: { en: "Kingfisher", th: "นกกินปลา" },
          image: "https://ik.imagekit.io/insomnialz/kohLanta-img/Mu-Koh-Lanta-National-Park-5.jpg",
        },
      ]
    },
    {
      category: "marine",
      items: [
        {
          name: { en: "Blacktip reef shark", th: "ฉลามครีบดำ" },
          image: "https://ik.imagekit.io/insomnialz/kohLanta-img/snorkeling-08.jpg",
        },
        {
          name: { en: "Green sea turtle", th: "เต่าทะเลเขียว" },
          image: "https://ik.imagekit.io/insomnialz/kohLanta-img/snorkeling-04-768x512.jpg",
        },
      ]
    },
    {
      category: "flora",
      items: [
        {
          name: { en: "Mangrove tree", th: "ต้นโกงกาง" },
          image: "https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/manglares-kohlanta.jpeg",
        },
        {
          name: { en: "Beach morning glory", th: "ผักบุ้งทะเล" },
          image: "https://ik.imagekit.io/insomnialz/kohLanta-img/ko-lanta-island.jpg",
        },
      ]
    }
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
      
      {/* Ecosystem Tabs */}
      <div className="mb-10">
        <div className="flex justify-center mb-8">
          {Object.entries(translations.ecosystems).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 border-b-2 transition-colors ${language === 'th' ? 'font-noto-thai' : ''} 
                ${activeTab === key 
                  ? 'border-primary text-primary font-medium' 
                  : 'border-transparent text-gray-500 hover:text-gray-700'}
              `}
            >
              {value[language]}
            </button>
          ))}
        </div>
        
        {/* Ecosystem Content */}
        <div className="max-w-4xl mx-auto">
          {Object.keys(translations.ecosystems).map((key) => (
            <div key={key} className={activeTab === key ? 'block' : 'hidden'}>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className={`text-2xl font-bold mb-4 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {translations.ecosystemContent[key as keyof typeof translations.ecosystemContent].title[language]}
                  </h3>
                  <p className={`text-gray-600 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {translations.ecosystemContent[key as keyof typeof translations.ecosystemContent].description[language]}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={translations.ecosystemContent[key as keyof typeof translations.ecosystemContent].image} 
                    alt={translations.ecosystemContent[key as keyof typeof translations.ecosystemContent].title[language]} 
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Flora and Fauna Gallery */}
      <div className="mb-16">
        <h3 className={`text-2xl font-bold mb-6 text-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          <Star className="inline-block h-5 w-5 mr-2 text-primary" />
          {language === 'en' ? 'Notable Flora & Fauna' : 'พืชและสัตว์ที่น่าสนใจ'}
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {species.flatMap(category => 
            category.items.map((item, index) => (
              <div key={`${category.category}-${index}`} className="text-center">
                <div className="w-full aspect-square mb-2 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name[language]} 
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <p className={`text-sm font-medium ${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {item.name[language]}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* National Park Information */}
      <div className="bg-primary/5 rounded-xl p-6 mb-10">
        <div className="max-w-4xl mx-auto">
          <h3 className={`text-2xl font-bold mb-4 text-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
            {translations.nationalPark.title[language]}
          </h3>
          
          <p className={`text-gray-600 mb-6 text-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
            {translations.nationalPark.description[language]}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Park Information */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className={`${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {translations.nationalPark.hours[language]}
                </span>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 text-primary mr-2" />
                <span className={`${language === 'th' ? 'font-noto-thai' : ''}`}>
                  {translations.nationalPark.fees[language]}
                </span>
              </div>
            </div>
            
            {/* Trails */}
            <div>
              <h4 className={`text-lg font-medium mb-3 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                <Map className="inline-block h-5 w-5 mr-2 text-primary" />
                {translations.trails.title[language]}
              </h4>
              
              <div className="mb-4">
                <img 
                  src="https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/koh-lanta-things-to-do-hiking.jpg" 
                  alt="Hiking in Koh Lanta" 
                  className="w-full h-40 object-cover rounded-lg shadow-sm mb-3"
                />
              </div>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg">
                  <p className={`font-medium ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {translations.trails.trail1.name[language]}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className={`${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {translations.trails.trail1.difficulty[language]}
                    </span>
                    <span className={`${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {translations.trails.trail1.length[language]}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {translations.trails.trail1.description[language]}
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-lg">
                  <p className={`font-medium ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {translations.trails.trail2.name[language]}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className={`${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {translations.trails.trail2.difficulty[language]}
                    </span>
                    <span className={`${language === 'th' ? 'font-noto-thai' : ''}`}>
                      {translations.trails.trail2.length[language]}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {translations.trails.trail2.description[language]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Photography Spots */}
      <div>
        <h3 className={`text-2xl font-bold mb-6 text-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          <Camera className="inline-block h-5 w-5 mr-2 text-primary" />
          {translations.photography.title[language]}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
              <img 
                src="https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/sunset-bamboobay.jpg" 
                alt={translations.photography.spot1.name[language]} 
                className="w-full h-60 object-cover"
              />
            <CardContent className="p-4">
              <h4 className={`font-bold text-lg ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.photography.spot1.name[language]}
              </h4>
              <p className={`text-sm text-gray-500 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.photography.spot1.bestTime[language]}
              </p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
              <img 
                src="https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/lighthouse-kohlanta.webp" 
                alt={translations.photography.spot2.name[language]} 
                className="w-full h-60 object-cover"
              />
            <CardContent className="p-4">
              <h4 className={`font-bold text-lg ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.photography.spot2.name[language]}
              </h4>
              <p className={`text-sm text-gray-500 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.photography.spot2.bestTime[language]}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NatureWildlife;
