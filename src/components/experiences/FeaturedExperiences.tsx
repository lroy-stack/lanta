
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Clock } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

const FeaturedExperiences: React.FC = () => {
  const { language } = useLanguage();

  const featuredExperiences = [
    {
      id: 1,
      title: { 
        en: 'Four Islands Tour by Speedboat', 
        th: 'ทัวร์สี่เกาะโดยเรือเร็ว' 
      },
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/Mu-Koh-Lanta-National-Park-5.jpg?updatedAt=1747390866088',
      price: 1500,
      rating: 4.9,
      duration: 7,
      category: { en: 'Island Hopping', th: 'ทัวร์เกาะ' },
      description: {
        en: 'Visit four stunning islands including Koh Mook and the famous Emerald Cave in one exciting day trip.',
        th: 'เยี่ยมชมสี่เกาะสวยงามรวมถึงเกาะมุกและถ้ำมรกตอันโด่งดังในทริปเดียว'
      },
      link: '/experiences/four-islands-tour'
    },
    {
      id: 2,
      title: { 
        en: 'Advanced Scuba Diving at Hin Daeng & Hin Muang', 
        th: 'ดำน้ำลึกระดับสูงที่หินแดงและหินม่วง' 
      },
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/snorkeling-04-768x512.jpg',
      price: 4500,
      rating: 4.8,
      duration: 8,
      category: { en: 'Diving', th: 'ดำน้ำ' },
      description: {
        en: 'Experience world-class diving at these famous sites known for manta rays and vibrant coral reefs.',
        th: 'สัมผัสประสบการณ์การดำน้ำระดับโลกที่แหล่งดำน้ำชื่อดังที่รู้จักกันในเรื่องกระเบนราหูและแนวปะการังที่สวยงาม'
      },
      link: '/experiences/hin-daeng-diving'
    },
    {
      id: 3,
      title: { 
        en: 'Traditional Thai Cooking Class', 
        th: 'คลาสเรียนทำอาหารไทยแบบดั้งเดิม' 
      },
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/TIMEFORLIMEThaiCookingClasswithCocktailFuninKohLanta.jpg',
      price: 1200,
      rating: 5.0,
      duration: 4,
      category: { en: 'Cultural', th: 'วัฒนธรรม' },
      description: {
        en: 'Learn to cook authentic Thai dishes with a local chef including a market visit to select fresh ingredients.',
        th: 'เรียนรู้การทำอาหารไทยแท้ๆกับเชฟท้องถิ่นรวมถึงการเยี่ยมชมตลาดเพื่อเลือกวัตถุดิบสด'
      },
      link: '/experiences/thai-cooking-class'
    },
    {
      id: 4,
      title: { 
        en: 'Old Town Cultural Tour', 
        th: 'ทัวร์วัฒนธรรมเมืองเก่า' 
      },
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/lontail-boat-kohlanta.jpeg',
      price: 800,
      rating: 4.7,
      duration: 3,
      category: { en: 'Cultural', th: 'วัฒนธรรม' },
      description: {
        en: "Explore Lanta Old Town's history, traditional wooden houses, local crafts and authentic food.",
        th: 'สำรวจประวัติศาสตร์ของเมืองเก่าลันตา บ้านไม้แบบดั้งเดิม งานฝีมือท้องถิ่น และอาหารแท้'
      },
      link: '/experiences/old-town-tour'
    },
  ];

  // Format price based on language
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

  const text = {
    title: {
      en: 'Featured Experiences',
      th: 'ประสบการณ์แนะนำ'
    },
    subtitle: {
      en: 'Our most popular and highly-rated activities',
      th: 'กิจกรรมยอดนิยมและได้รับการจัดอันดับสูงของเรา'
    },
    viewDetails: {
      en: 'View Details',
      th: 'ดูรายละเอียด'
    }
  };

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">{text.title[language]}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{text.subtitle[language]}</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative mx-auto max-w-5xl"
      >
        <CarouselContent>
          {featuredExperiences.map(experience => (
            <CarouselItem key={experience.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={experience.image} 
                    alt={experience.title[language]} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <CardContent className="p-5">
                  <div className="flex items-center mb-2 text-sm">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {experience.category[language]}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{experience.title[language]}</h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {experience.description[language]}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-500" />
                      <span className="font-medium">{experience.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock size={16} />
                      <span className="text-sm">{formatDuration(experience.duration)}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{formatPrice(experience.price)}</span>
                    <Button asChild size="sm">
                      <Link to={experience.link}>
                        {text.viewDetails[language]}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedExperiences;
