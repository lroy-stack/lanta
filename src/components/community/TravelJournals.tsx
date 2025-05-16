
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Heart, MessageSquare, Plus, MapPin } from 'lucide-react';

const TravelJournals: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    title: {
      en: 'Travel Journals',
      th: 'บันทึกการเดินทาง'
    },
    subtitle: {
      en: 'Read travel stories and share your own adventures on Koh Lanta',
      th: 'อ่านเรื่องราวการเดินทางและแบ่งปันการผจญภัยของคุณในเกาะลันตา'
    },
    featured: {
      en: 'Featured Journals',
      th: 'บันทึกการเดินทางที่แนะนำ'
    },
    recent: {
      en: 'Recent Journals',
      th: 'บันทึกการเดินทางล่าสุด'
    },
    createJournal: {
      en: 'Create Journal',
      th: 'สร้างบันทึกการเดินทาง'
    },
    readMore: {
      en: 'Read Full Journal',
      th: 'อ่านบันทึกเต็ม'
    },
    days: {
      en: 'days',
      th: 'วัน'
    },
    likes: {
      en: 'likes',
      th: 'ถูกใจ'
    },
    comments: {
      en: 'comments',
      th: 'ความคิดเห็น'
    }
  };

  // Mock data for travel journals
  const featuredJournals = [
    {
      id: 1,
      title: {
        en: 'Two Weeks in Paradise: Our Koh Lanta Family Adventure',
        th: 'สองสัปดาห์ในสวรรค์: การผจญภัยครอบครัวของเราที่เกาะลันตา'
      },
      author: 'Jessica M.',
      avatar: '/placeholder.svg',
      coverImage: '/placeholder.svg',
      excerpt: {
        en: 'Our unforgettable family adventure exploring beaches, jungles, and local culture on this beautiful island.',
        th: 'การผจญภัยครอบครัวที่น่าจดจำของเราในการสำรวจชายหาด ป่า และวัฒนธรรมท้องถิ่นบนเกาะที่สวยงามนี้'
      },
      duration: 14,
      locations: ['Klong Dao', 'Old Town', 'Klong Nin'],
      publishedDate: 'May 15, 2023',
      likes: 87,
      comments: 23
    },
    {
      id: 2,
      title: {
        en: 'Solo Backpacking on a Budget: Koh Lanta Edition',
        th: 'แบ็คแพ็คคนเดียวด้วยงบประมาณจำกัด: ฉบับเกาะลันตา'
      },
      author: 'David L.',
      avatar: '/placeholder.svg',
      coverImage: '/placeholder.svg',
      excerpt: {
        en: 'How I spent a month on Koh Lanta with minimal budget while experiencing everything the island has to offer.',
        th: 'ฉันใช้เวลาหนึ่งเดือนบนเกาะลันตาด้วยงบประมาณน้อยในขณะที่สัมผัสทุกอย่างที่เกาะมีให้ได้อย่างไร'
      },
      duration: 30,
      locations: ['Saladan', 'Long Beach', 'Kantiang Bay'],
      publishedDate: 'June 3, 2023',
      likes: 112,
      comments: 45
    }
  ];

  const recentJournals = [
    {
      id: 3,
      title: {
        en: 'Island Hopping Adventure: Koh Lanta as a Base',
        th: 'การผจญภัยข้ามเกาะ: เกาะลันตาเป็นฐานที่พัก'
      },
      author: 'Michael T.',
      avatar: '/placeholder.svg',
      coverImage: '/placeholder.svg',
      excerpt: {
        en: 'Using Koh Lanta as our base, we explored neighboring islands on day trips.',
        th: 'ใช้เกาะลันตาเป็นฐานที่พัก เราสำรวจเกาะใกล้เคียงในทริปวันเดียว'
      },
      duration: 7,
      locations: ['Koh Rok', 'Koh Ngai', 'Koh Mook'],
      publishedDate: 'August 10, 2023',
      likes: 45,
      comments: 12
    },
    {
      id: 4,
      title: {
        en: 'Digital Nomad Life on Koh Lanta',
        th: 'ชีวิตดิจิทัลโนแมดบนเกาะลันตา'
      },
      author: 'Sophie R.',
      avatar: '/placeholder.svg',
      coverImage: '/placeholder.svg',
      excerpt: {
        en: 'My experience working remotely while enjoying the relaxed island lifestyle.',
        th: 'ประสบการณ์ของฉันในการทำงานระยะไกลในขณะที่เพลิดเพลินกับการใช้ชีวิตบนเกาะที่ผ่อนคลาย'
      },
      duration: 21,
      locations: ['Klong Khong', 'Coworking Spaces'],
      publishedDate: 'September 5, 2023',
      likes: 67,
      comments: 19
    },
    {
      id: 5,
      title: {
        en: 'Honeymoon Paradise: Luxury Experience on Koh Lanta',
        th: 'สวรรค์ฮันนีมูน: ประสบการณ์หรูหราบนเกาะลันตา'
      },
      author: 'Emma & John',
      avatar: '/placeholder.svg',
      coverImage: '/placeholder.svg',
      excerpt: {
        en: 'Our romantic getaway at a 5-star resort with private beach access.',
        th: 'การหลบหนีสุดโรแมนติกของเราที่รีสอร์ท 5 ดาวพร้อมทางเข้าชายหาดส่วนตัว'
      },
      duration: 10,
      locations: ['Pimalai Resort', 'Kantiang Bay'],
      publishedDate: 'October 12, 2023',
      likes: 94,
      comments: 28
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{texts.title[language]}</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{texts.subtitle[language]}</p>
        <Button className="mt-4 flex items-center gap-2">
          <Plus size={16} />
          {texts.createJournal[language]}
        </Button>
      </div>

      {/* Featured Journals */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{texts.featured[language]}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredJournals.map(journal => (
            <Card key={journal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <AspectRatio ratio={16/9}>
                <img 
                  src={journal.coverImage} 
                  alt={journal.title[language]} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={journal.avatar} alt={journal.author} />
                      <AvatarFallback>{journal.author.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{journal.author}</div>
                      <div className="text-sm text-gray-500">{journal.publishedDate}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center space-x-1">
                    <CalendarDays size={14} />
                    <span>{journal.duration} {texts.days[language]}</span>
                  </Badge>
                </div>
                
                <h4 className="text-xl font-bold mb-2">{journal.title[language]}</h4>
                <p className="text-gray-600 mb-4">{journal.excerpt[language]}</p>
                
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {journal.locations.map((location, idx) => (
                    <Badge key={idx} variant="secondary" className="flex items-center gap-1">
                      <MapPin size={12} />
                      {location}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Heart size={16} className="mr-1" />
                      <span>{journal.likes} {texts.likes[language]}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare size={16} className="mr-1" />
                      <span>{journal.comments} {texts.comments[language]}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {texts.readMore[language]}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Journals */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{texts.recent[language]}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentJournals.map(journal => (
            <Card key={journal.id} className="hover:shadow-md transition-shadow">
              <AspectRatio ratio={16/9}>
                <img 
                  src={journal.coverImage} 
                  alt={journal.title[language]} 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">{journal.title[language]}</h4>
                <div className="flex items-center space-x-2 mb-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={journal.avatar} alt={journal.author} />
                    <AvatarFallback>{journal.author.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{journal.author}</span>
                  <span className="text-xs text-gray-500">• {journal.duration} {texts.days[language]}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{journal.excerpt[language]}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      <span>{journal.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare size={14} className="mr-1" />
                      <span>{journal.comments}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    {texts.readMore[language]}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelJournals;
