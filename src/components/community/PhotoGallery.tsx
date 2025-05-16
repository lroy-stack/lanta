
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera, Heart, MapPin, Plus, Upload, User } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const { language } = useLanguage();
  const [selectedPhotoId, setSelectedPhotoId] = useState<number | null>(null);

  const texts = {
    title: {
      en: 'Photo Gallery',
      th: 'แกลเลอรีรูปภาพ'
    },
    subtitle: {
      en: 'Explore and share beautiful photos from around Koh Lanta',
      th: 'สำรวจและแบ่งปันภาพถ่ายสวย ๆ จากรอบ ๆ เกาะลันตา'
    },
    uploadPhoto: {
      en: 'Upload Photo',
      th: 'อัปโหลดรูปภาพ'
    },
    featured: {
      en: 'Featured',
      th: 'แนะนำ'
    },
    recent: {
      en: 'Recent',
      th: 'ล่าสุด'
    },
    popular: {
      en: 'Popular',
      th: 'ยอดนิยม'
    },
    beaches: {
      en: 'Beaches',
      th: 'ชายหาด'
    },
    wildlife: {
      en: 'Wildlife',
      th: 'สัตว์ป่า'
    },
    sunsets: {
      en: 'Sunsets',
      th: 'พระอาทิตย์ตก'
    },
    localLife: {
      en: 'Local Life',
      th: 'ชีวิตท้องถิ่น'
    }
  };

  // Mock data for photos
  const photos = [
    {
      id: 1,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-kohlanta.jpg',
      title: {
        en: 'Sunset at Kantiang Bay',
        th: 'พระอาทิตย์ตกที่อ่าวกันตัง'
      },
      photographer: 'Alex M.',
      avatar: 'https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-kohlanta.jpg',
      location: 'Kantiang Bay',
      likes: 156,
      category: 'sunsets'
    },
    {
      id: 2,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/Kantiang-Bay-Beach.jpg',
      title: {
        en: 'Low Tide at Klong Dao Beach',
        th: 'น้ำลงที่หาดคลองดาว'
      },
      photographer: 'Sarah L.',
      avatar: 'https://ik.imagekit.io/insomnialz/kohLanta-img/Kantiang-Bay-Beach.jpg',
      location: 'Klong Dao Beach',
      likes: 89,
      category: 'beaches'
    },
    {
      id: 3,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/water-aligator.jpg',
      title: {
        en: 'Monitor Lizard on Klong Jark Beach',
        th: 'ตะกวดบนหาดคลองจาก'
      },
      photographer: 'Tom W.',
      avatar: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/water-aligator.jpg',
      location: 'Klong Jark Beach',
      likes: 112,
      category: 'wildlife'
    },
    {
      id: 4,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/koh-lanta-old-town-01.jpg',
      title: {
        en: 'Traditional Longtail Boats',
        th: 'เรือหางยาวแบบดั้งเดิม'
      },
      photographer: 'Emma R.',
      avatar: 'https://ik.imagekit.io/insomnialz/kohLanta-img/koh-lanta-old-town-01.jpg',
      location: 'Old Town',
      likes: 78,
      category: 'localLife'
    },
    {
      id: 5,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/snorkeling-04-768x512.jpg',
      title: {
        en: 'Crystal Clear Waters at Koh Rok',
        th: 'น้ำใสเหมือนคริสตัลที่เกาะรอก'
      },
      photographer: 'Mike J.',
      avatar: 'https://ik.imagekit.io/insomnialz/kohLanta-img/snorkeling-04-768x512.jpg',
      location: 'Koh Rok',
      likes: 203,
      category: 'beaches'
    },
    {
      id: 6,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/Mu-Koh-Lanta-National-Park-5.jpg',
      title: {
        en: 'Monkeys at Mu Ko Lanta National Park',
        th: 'ลิงที่อุทยานแห่งชาติหมู่เกาะลันตา'
      },
      photographer: 'Lisa T.',
      avatar: 'https://ik.imagekit.io/insomnialz/kohLanta-img/Mu-Koh-Lanta-National-Park-5.jpg',
      location: 'Mu Ko Lanta National Park',
      likes: 145,
      category: 'wildlife'
    },
    {
      id: 7,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/A-Koh-Lanta-Old-Town-F-Helene-Talbot.webp',
      title: {
        en: 'Fishing Village Life in Old Town',
        th: 'ชีวิตในหมู่บ้านประมงในเมืองเก่า'
      },
      photographer: 'David S.',
      avatar: 'https://ik.imagekit.io/insomnialz/kohLanta-img/A-Koh-Lanta-Old-Town-F-Helene-Talbot.webp',
      location: 'Old Town',
      likes: 67,
      category: 'localLife'
    },
    {
      id: 8,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/atardecer-en-la-bahia-kantiang-koh-lanta-tailandia-1024x546.webp',
      title: {
        en: 'Red Sky at Klong Nin Beach',
        th: 'ท้องฟ้าสีแดงที่หาดคลองนิน'
      },
      photographer: 'Sophia K.',
      avatar: 'https://ik.imagekit.io/insomnialz/kohLanta-img/atardecer-en-la-bahia-kantiang-koh-lanta-tailandia-1024x546.webp',
      location: 'Klong Nin Beach',
      likes: 189,
      category: 'sunsets'
    },
    {
      id: 9,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/elephants-wildlife-kohlanta.avif',
      title: {
        en: 'Elephants in the Jungle',
        th: 'ช้างในป่า'
      },
      photographer: 'James P.',
      avatar: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/elephants-wildlife-kohlanta.avif',
      location: 'Elephant Sanctuary',
      likes: 231,
      category: 'wildlife'
    },
    {
      id: 10,
      image: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/koh-lanta-wasserfall.jpeg',
      title: {
        en: 'Hidden Waterfall',
        th: 'น้ำตกที่ซ่อนอยู่'
      },
      photographer: 'Nina R.',
      avatar: 'https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/koh-lanta-wasserfall.jpeg',
      location: 'Klong Jark Waterfall',
      likes: 156,
      category: 'wildlife'
    }
  ];

  const selectedPhoto = selectedPhotoId ? photos.find(photo => photo.id === selectedPhotoId) : null;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{texts.title[language]}</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{texts.subtitle[language]}</p>
        <Button className="mt-4 flex items-center gap-2">
          <Upload size={16} />
          {texts.uploadPhoto[language]}
        </Button>
      </div>

      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="mb-8 w-full flex justify-center">
          <TabsTrigger value="featured">{texts.featured[language]}</TabsTrigger>
          <TabsTrigger value="recent">{texts.recent[language]}</TabsTrigger>
          <TabsTrigger value="popular">{texts.popular[language]}</TabsTrigger>
          <TabsTrigger value="beaches">{texts.beaches[language]}</TabsTrigger>
          <TabsTrigger value="wildlife">{texts.wildlife[language]}</TabsTrigger>
          <TabsTrigger value="sunsets">{texts.sunsets[language]}</TabsTrigger>
          <TabsTrigger value="localLife">{texts.localLife[language]}</TabsTrigger>
        </TabsList>
        
        {['featured', 'recent', 'popular', 'beaches', 'wildlife', 'sunsets', 'localLife'].map(tab => (
          <TabsContent key={tab} value={tab}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {photos
                .filter(photo => tab === 'featured' || tab === 'recent' || tab === 'popular' || photo.category === tab)
                .map(photo => (
                  <div 
                    key={photo.id} 
                    className="group relative cursor-pointer overflow-hidden rounded-md"
                    onClick={() => setSelectedPhotoId(photo.id)}
                  >
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={photo.image} 
                        alt={photo.title[language]} 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <h4 className="text-white font-medium mb-1">{photo.title[language]}</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={photo.avatar} alt={photo.photographer} />
                            <AvatarFallback>{photo.photographer.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <span className="text-white text-sm">{photo.photographer}</span>
                        </div>
                        <div className="flex items-center text-white text-sm">
                          <Heart size={14} className="mr-1 fill-white" />
                          <span>{photo.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Photo Detail Dialog */}
      {selectedPhoto && (
        <Dialog open={selectedPhotoId !== null} onOpenChange={(open) => !open && setSelectedPhotoId(null)}>
          <DialogContent className="sm:max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <img 
                  src={selectedPhoto.image} 
                  alt={selectedPhoto.title[language]} 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="space-y-4">
                <DialogHeader>
                  <DialogTitle>{selectedPhoto.title[language]}</DialogTitle>
                  <DialogDescription>
                    <div className="flex items-center space-x-2 mt-2">
                      <MapPin size={16} className="text-gray-500" />
                      <span>{selectedPhoto.location}</span>
                    </div>
                  </DialogDescription>
                </DialogHeader>
                
                <div className="flex items-center space-x-3 py-3 border-y">
                  <Avatar>
                    <AvatarImage src={selectedPhoto.avatar} alt={selectedPhoto.photographer} />
                    <AvatarFallback>{selectedPhoto.photographer.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{selectedPhoto.photographer}</div>
                    <div className="text-sm text-gray-500">
                      {language === 'en' ? 'Photographer' : 'ช่างภาพ'}
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Heart size={16} />
                    <span>
                      {selectedPhoto.likes} {language === 'en' ? 'Likes' : 'ถูกใจ'}
                    </span>
                  </Button>
                  <Button variant="secondary" className="flex items-center gap-2">
                    <User size={16} />
                    <span>
                      {language === 'en' ? 'Follow' : 'ติดตาม'}
                    </span>
                  </Button>
                </div>
                
                <Badge variant="outline">
                  {texts[selectedPhoto.category as keyof typeof texts][language]}
                </Badge>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PhotoGallery;
