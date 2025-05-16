
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Waves, 
  Mountain, 
  Landmark, 
  Bath, 
  Users, 
  Music 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ExperienceCategories: React.FC = () => {
  const { language } = useLanguage();

  const categories = [
    {
      id: 'water',
      name: { en: 'Water Activities', th: 'กิจกรรมทางน้ำ' },
      description: {
        en: 'Discover diving, snorkeling, kayaking and more water adventures',
        th: 'ค้นพบการดำน้ำ, การดำน้ำตื้น, การพายเรือคายัคและการผจญภัยทางน้ำอื่นๆ'
      },
      icon: <Waves size={40} strokeWidth={1.5} />,
      color: 'bg-blue-50 text-blue-600',
      link: '/experiences?category=water'
    },
    {
      id: 'land',
      name: { en: 'Land Adventures', th: 'การผจญภัยบนบก' },
      description: {
        en: 'Explore hiking, caving, ziplining and jungle trekking experiences',
        th: 'สำรวจการเดินป่า, การสำรวจถ้ำ, การเล่นซิปไลน์และการเดินป่าดงดิบ'
      },
      icon: <Mountain size={40} strokeWidth={1.5} />,
      color: 'bg-green-50 text-green-600',
      link: '/experiences?category=land'
    },
    {
      id: 'cultural',
      name: { en: 'Cultural Experiences', th: 'ประสบการณ์ทางวัฒนธรรม' },
      description: {
        en: 'Immerse in Thai culture with cooking classes and local village tours',
        th: 'จมดิ่งในวัฒนธรรมไทยด้วยคลาสสอนทำอาหารและทัวร์หมู่บ้านท้องถิ่น'
      },
      icon: <Landmark size={40} strokeWidth={1.5} />,
      color: 'bg-amber-50 text-amber-600',
      link: '/experiences?category=cultural'
    },
    {
      id: 'relax',
      name: { en: 'Relaxation', th: 'การผ่อนคลาย' },
      description: {
        en: 'Rejuvenate with yoga sessions, massage and spa treatments',
        th: 'ฟื้นฟูร่างกายด้วยเซสชั่นโยคะ, นวด และทรีตเมนต์สปา'
      },
      icon: <Bath size={40} strokeWidth={1.5} />,
      color: 'bg-purple-50 text-purple-600',
      link: '/experiences?category=relax'
    },
    {
      id: 'family',
      name: { en: 'Family Activities', th: 'กิจกรรมสำหรับครอบครัว' },
      description: {
        en: 'Discover fun activities perfect for the whole family',
        th: 'ค้นพบกิจกรรมสนุกๆ ที่เหมาะสำหรับทั้งครอบครัว'
      },
      icon: <Users size={40} strokeWidth={1.5} />,
      color: 'bg-teal-50 text-teal-600',
      link: '/experiences?category=family'
    },
    {
      id: 'nightlife',
      name: { en: 'Nightlife', th: 'กิจกรรมยามค่ำคืน' },
      description: {
        en: 'Experience the island after dark with beach bars and events',
        th: 'สัมผัสเกาะหลังพระอาทิตย์ตกดินด้วยบาร์ริมหาดและกิจกรรมต่างๆ'
      },
      icon: <Music size={40} strokeWidth={1.5} />,
      color: 'bg-indigo-50 text-indigo-600',
      link: '/experiences?category=nightlife'
    }
  ];

  const text = {
    title: {
      en: 'Experience Categories',
      th: 'หมวดหมู่ประสบการณ์'
    },
    subtitle: {
      en: 'Explore the diverse range of activities available on Koh Lanta',
      th: 'สำรวจกิจกรรมที่หลากหลายบนเกาะลันตา'
    },
    explore: {
      en: 'Explore',
      th: 'สำรวจ'
    }
  };

  return (
    <div className="mt-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">{text.title[language]}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{text.subtitle[language]}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <Card key={category.id} className="overflow-hidden hover-lift">
            <CardContent className="p-6">
              <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.name[language]}</h3>
              <p className="text-gray-600 mb-4">{category.description[language]}</p>
              <Button asChild>
                <Link to={category.link}>
                  {text.explore[language]} {category.name[language]}
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCategories;
