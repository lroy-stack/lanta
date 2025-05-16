
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { 
  Slider 
} from '@/components/ui/slider';
import {
  ToggleGroup,
  ToggleGroupItem
} from '@/components/ui/toggle-group';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const ExperienceBrowser: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  const [duration, setDuration] = useState<number[]>([0, 12]);
  const [intensity, setIntensity] = useState<string>('all');
  const [ageGroup, setAgeGroup] = useState<string>('all');

  const categories = [
    { id: 'all', name: { en: 'All', th: 'ทั้งหมด' } },
    { id: 'water', name: { en: 'Water', th: 'ทางน้ำ' } },
    { id: 'land', name: { en: 'Land', th: 'ทางบก' } },
    { id: 'cultural', name: { en: 'Cultural', th: 'วัฒนธรรม' } },
    { id: 'relax', name: { en: 'Relaxation', th: 'พักผ่อน' } },
    { id: 'family', name: { en: 'Family', th: 'ครอบครัว' } },
    { id: 'nightlife', name: { en: 'Nightlife', th: 'กิจกรรมยามค่ำ' } },
  ];

  const intensityLevels = [
    { id: 'all', name: { en: 'Any', th: 'ทั้งหมด' } },
    { id: 'low', name: { en: 'Low', th: 'ต่ำ' } },
    { id: 'medium', name: { en: 'Medium', th: 'ปานกลาง' } },
    { id: 'high', name: { en: 'High', th: 'สูง' } },
  ];

  const ageGroups = [
    { id: 'all', name: { en: 'All Ages', th: 'ทุกวัย' } },
    { id: 'adults', name: { en: 'Adults', th: 'ผู้ใหญ่' } },
    { id: 'teens', name: { en: 'Teenagers', th: 'วัยรุ่น' } },
    { id: 'children', name: { en: 'Children', th: 'เด็ก' } },
    { id: 'family', name: { en: 'Family', th: 'ครอบครัว' } },
  ];

  // Mock experiences data
  const experiences = [
    {
      id: 1,
      title: { en: 'Scuba Diving at Koh Haa', th: 'ดำน้ำลึกที่เกาะห้า' },
      category: 'water',
      duration: 6,
      price: 3500,
      rating: 4.8,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/kayak-kohlanta.jpg?updatedAt=1747394732045',
      intensity: 'medium',
      ageGroup: 'adults',
    },
    {
      id: 2,
      title: { en: 'Thai Cooking Class', th: 'คลาสเรียนทำอาหารไทย' },
      category: 'cultural',
      duration: 3,
      price: 1500,
      rating: 4.9,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/Lanta-cookery.jpeg',
      intensity: 'low',
      ageGroup: 'family',
    },
    {
      id: 3,
      title: { en: 'Jungle Trekking', th: 'เดินป่า' },
      category: 'land',
      duration: 4,
      price: 1200,
      rating: 4.5,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/Mu-Koh-Lanta-National-Park-5.jpg',
      intensity: 'high',
      ageGroup: 'teens',
    },
    {
      id: 4,
      title: { en: 'Sunset Cruise', th: 'ล่องเรือชมพระอาทิตย์ตก' },
      category: 'water',
      duration: 3,
      price: 2000,
      rating: 4.7,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-kohlanta.jpg',
      intensity: 'low',
      ageGroup: 'all',
    },
    {
      id: 5,
      title: { en: 'Thai Massage', th: 'นวดแผนไทย' },
      category: 'relax',
      duration: 1,
      price: 500,
      rating: 4.6,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/thai-massage.jpg',
      intensity: 'low',
      ageGroup: 'adults',
    },
    {
      id: 6,
      title: { en: 'Beach Yoga', th: 'โยคะริมหาด' },
      category: 'relax',
      duration: 1.5,
      price: 600,
      rating: 4.8,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/yoga-kohlanta.avif',
      intensity: 'medium',
      ageGroup: 'all',
    },
  ];

  // Filter experiences based on selected filters
  const filteredExperiences = experiences.filter(exp => {
    const categoryMatch = selectedCategory === 'all' || exp.category === selectedCategory;
    const priceMatch = exp.price >= priceRange[0] && exp.price <= priceRange[1];
    const durationMatch = exp.duration >= duration[0] && exp.duration <= duration[1];
    const intensityMatch = intensity === 'all' || exp.intensity === intensity;
    const ageMatch = ageGroup === 'all' || exp.ageGroup === ageGroup;
    
    return categoryMatch && priceMatch && durationMatch && intensityMatch && ageMatch;
  });

  // Format currency based on language
  const formatPrice = (price: number): string => {
    return language === 'en' 
      ? `฿${price.toLocaleString()}`
      : `${price.toLocaleString()} บาท`;
  };

  // Format duration based on language
  const formatDuration = (hours: number): string => {
    if (language === 'en') {
      return hours === 1 ? `${hours} hour` : `${hours} hours`;
    } else {
      return `${hours} ชั่วโมง`;
    }
  };

  // Text content based on language
  const text = {
    browser: {
      en: 'Experience Browser',
      th: 'เลือกประสบการณ์'
    },
    filters: {
      en: 'Filters',
      th: 'ตัวกรอง'
    },
    priceRange: {
      en: 'Price Range',
      th: 'ช่วงราคา'
    },
    duration: {
      en: 'Duration',
      th: 'ระยะเวลา'
    },
    intensity: {
      en: 'Physical Intensity',
      th: 'ความเข้มข้นทางกายภาพ'
    },
    ageGroup: {
      en: 'Age Suitability',
      th: 'เหมาะกับช่วงอายุ'
    },
    book: {
      en: 'Book Now',
      th: 'จองเลย'
    },
    noResults: {
      en: 'No experiences match your filters. Try adjusting your criteria.',
      th: 'ไม่พบประสบการณ์ที่ตรงกับตัวกรองของคุณ โปรดปรับเกณฑ์การค้นหา'
    }
  };

  return (
    <div className="mt-12 mb-16">
      <h2 className="text-3xl font-bold mb-8">{text.browser[language]}</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters sidebar */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-xl mb-4">{text.filters[language]}</h3>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3">{text.priceRange[language]}</h4>
            <Slider
              defaultValue={[0, 10000]}
              max={10000}
              step={100}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mb-2"
            />
            <div className="flex justify-between text-sm">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3">{text.duration[language]}</h4>
            <Slider
              defaultValue={[0, 12]}
              max={12}
              step={0.5}
              value={duration}
              onValueChange={setDuration}
              className="mb-2"
            />
            <div className="flex justify-between text-sm">
              <span>{formatDuration(duration[0])}</span>
              <span>{formatDuration(duration[1])}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3">{text.intensity[language]}</h4>
            <div className="flex flex-wrap gap-2">
              {intensityLevels.map(level => (
                <Button
                  key={level.id}
                  variant={intensity === level.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setIntensity(level.id)}
                >
                  {level.name[language]}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3">{text.ageGroup[language]}</h4>
            <div className="flex flex-wrap gap-2">
              {ageGroups.map(group => (
                <Button
                  key={group.id}
                  variant={ageGroup === group.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setAgeGroup(group.id)}
                >
                  {group.name[language]}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="w-full lg:w-3/4">
          <div className="mb-6 overflow-x-auto pb-2">
            <ToggleGroup type="single" value={selectedCategory} onValueChange={(value) => value && setSelectedCategory(value)}>
              {categories.map(category => (
                <ToggleGroupItem key={category.id} value={category.id} aria-label={category.name[language]}>
                  {category.name[language]}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          
          {filteredExperiences.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperiences.map(experience => (
                <Card 
                  key={experience.id} 
                  className="overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={experience.image} 
                      alt={experience.title[language]} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium">
                      {formatPrice(experience.price)}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{experience.title[language]}</h3>
                    <div className="flex items-center text-sm mb-2">
                      <Clock size={16} className="mr-1 text-gray-500" />
                      <span className="text-gray-700">{formatDuration(experience.duration)}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star size={16} className="text-yellow-500 mr-1" />
                        <span className="font-medium">{experience.rating}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {intensityLevels.find(i => i.id === experience.intensity)?.name[language]}
                      </div>
                    </div>
                    <Button className="w-full">{text.book[language]}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500">{text.noResults[language]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceBrowser;
