
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Star, User, MapPin, Lightbulb, Calendar } from 'lucide-react';

const LocalInsights: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    title: {
      en: 'Local Insights',
      th: 'ข้อมูลเชิงลึกจากคนท้องถิ่น'
    },
    subtitle: {
      en: 'Get advice and tips from residents and long-term expats living on Koh Lanta',
      th: 'รับคำแนะนำและเคล็ดลับจากผู้อยู่อาศัยและชาวต่างชาติที่อาศัยอยู่บนเกาะลันตาเป็นเวลานาน'
    },
    localExperts: {
      en: 'Local Experts',
      th: 'ผู้เชี่ยวชาญท้องถิ่น'
    },
    askLocal: {
      en: 'Ask a Local',
      th: 'ถามคนท้องถิ่น'
    },
    insiderTips: {
      en: 'Insider Tips',
      th: 'เคล็ดลับคนใน'
    },
    seasonalUpdates: {
      en: 'Seasonal Updates',
      th: 'อัปเดตตามฤดูกาล'
    },
    expertIn: {
      en: 'Expert in',
      th: 'เชี่ยวชาญใน'
    },
    responseRate: {
      en: 'Response Rate',
      th: 'อัตราการตอบกลับ'
    },
    helpful: {
      en: 'Helpful',
      th: 'เป็นประโยชน์'
    },
    viewProfile: {
      en: 'View Profile',
      th: 'ดูโปรไฟล์'
    },
    askQuestion: {
      en: 'Ask Question',
      th: 'ถามคำถาม'
    },
    readMore: {
      en: 'Read More',
      th: 'อ่านเพิ่มเติม'
    },
    currentSeason: {
      en: 'Current Season',
      th: 'ฤดูกาลปัจจุบัน'
    }
  };

  // Mock data for local experts
  const localExperts = [
    {
      id: 1,
      name: 'Somchai K.',
      avatar: '/placeholder.svg',
      bio: {
        en: 'Lifelong resident of Koh Lanta. Former fisherman and now running a local tour company.',
        th: 'ผู้อาศัยตลอดชีวิตของเกาะลันตา อดีตชาวประมงและปัจจุบันดำเนินบริษัททัวร์ท้องถิ่น'
      },
      expertise: [
        { en: 'Fishing Spots', th: 'จุดตกปลา' },
        { en: 'Local History', th: 'ประวัติศาสตร์ท้องถิ่น' },
        { en: 'Hidden Beaches', th: 'ชายหาดที่ซ่อนอยู่' }
      ],
      location: 'Old Town',
      yearsOnIsland: 45,
      languages: ['Thai', 'English'],
      responseRate: '95%',
      helpfulCount: 187
    },
    {
      id: 2,
      name: 'Sarah W.',
      avatar: '/placeholder.svg',
      bio: {
        en: 'Expat from UK living on Koh Lanta for over a decade. Runs a yoga studio and volunteers for animal welfare.',
        th: 'ชาวต่างชาติจากสหราชอาณาจักรที่อาศัยอยู่บนเกาะลันตามากกว่าทศวรรษ ดำเนินสตูดิโอโยคะและอาสาสมัครเพื่อสวัสดิภาพสัตว์'
      },
      expertise: [
        { en: 'Wellness', th: 'สุขภาพ' },
        { en: 'Digital Nomad Life', th: 'ชีวิตดิจิทัลโนแมด' },
        { en: 'Animal Welfare', th: 'สวัสดิภาพสัตว์' }
      ],
      location: 'Klong Nin',
      yearsOnIsland: 12,
      languages: ['English', 'Thai'],
      responseRate: '98%',
      helpfulCount: 156
    },
    {
      id: 3,
      name: 'Nat T.',
      avatar: '/placeholder.svg',
      bio: {
        en: 'Local diving instructor with 15+ years of experience around Koh Lanta\'s waters.',
        th: 'ผู้สอนดำน้ำท้องถิ่นที่มีประสบการณ์มากกว่า 15 ปีในน่านน้ำรอบเกาะลันตา'
      },
      expertise: [
        { en: 'Scuba Diving', th: 'ดำน้ำลึก' },
        { en: 'Marine Life', th: 'สัตว์ทะเล' },
        { en: 'Conservation', th: 'การอนุรักษ์' }
      ],
      location: 'Saladan',
      yearsOnIsland: 18,
      languages: ['Thai', 'English', 'German'],
      responseRate: '90%',
      helpfulCount: 203
    }
  ];

  // Mock data for insider tips
  const insiderTips = [
    {
      id: 1,
      title: {
        en: 'Best Local Seafood Restaurants That Tourists Don\'t Know About',
        th: 'ร้านอาหารทะเลท้องถิ่นที่ดีที่สุดที่นักท่องเที่ยวไม่รู้จัก'
      },
      content: {
        en: 'While the beachfront restaurants are beautiful, the best seafood is actually found in these small family-run places...',
        th: 'ในขณะที่ร้านอาหารริมชายหาดสวยงาม อาหารทะเลที่ดีที่สุดจริงๆ แล้วพบได้ในสถานที่เล็กๆ ที่ครอบครัวดำเนินการเหล่านี้...'
      },
      author: 'Pitchaya L.',
      avatar: '/placeholder.svg',
      postedDate: 'May 5, 2023',
      likes: 34,
      comments: 8,
      category: { en: 'Food & Dining', th: 'อาหารและร้านอาหาร' }
    },
    {
      id: 2,
      title: {
        en: 'Avoiding the Crowds: Secret Viewpoints and Beaches',
        th: 'หลีกเลี่ยงฝูงชน: จุดชมวิวลับและชายหาด'
      },
      content: {
        en: 'Even during high season, you can find secluded spots if you know where to look. My favorite hidden beach is...',
        th: 'แม้แต่ในช่วงไฮซีซั่น คุณก็สามารถพบสถานที่ที่เงียบสงบได้หากคุณรู้ว่าจะมองหาที่ไหน ชายหาดที่ซ่อนอยู่ที่ฉันชอบคือ...'
      },
      author: 'James T.',
      avatar: '/placeholder.svg',
      postedDate: 'April 22, 2023',
      likes: 56,
      comments: 12,
      category: { en: 'Hidden Gems', th: 'สถานที่ซ่อนเร้น' }
    },
    {
      id: 3,
      title: {
        en: 'Navigating the Local Transportation Like a Pro',
        th: 'การนำทางการขนส่งท้องถิ่นเหมือนมืออาชีพ'
      },
      content: {
        en: 'Tuk-tuks and songthaews have unwritten rules and pricing structures. Here\'s how to get the best deals and avoid overpaying...',
        th: 'รถตุ๊กตุ๊กและรถสองแถวมีกฎและโครงสร้างราคาที่ไม่เป็นลายลักษณ์อักษร นี่คือวิธีการรับข้อเสนอที่ดีที่สุดและหลีกเลี่ยงการจ่ายเงินเกิน...'
      },
      author: 'Anong P.',
      avatar: '/placeholder.svg',
      postedDate: 'June 1, 2023',
      likes: 42,
      comments: 15,
      category: { en: 'Transportation', th: 'การขนส่ง' }
    }
  ];

  // Mock data for seasonal updates
  const seasonalUpdate = {
    season: {
      en: 'Green Season (Rainy Season)',
      th: 'ฤดูเขียว (ฤดูฝน)'
    },
    timeframe: {
      en: 'May to October',
      th: 'พฤษภาคมถึงตุลาคม'
    },
    currentStatus: {
      en: 'Moderate rainfall, mostly in short afternoon showers. Many businesses still open but with reduced hours.',
      th: 'ฝนตกปานกลาง ส่วนใหญ่เป็นฝนตกช่วงบ่ายสั้น ๆ ธุรกิจหลายแห่งยังคงเปิดอยู่แต่มีชั่วโมงลดลง'
    },
    tips: [
      {
        en: 'Ferry services to smaller islands like Koh Rok are currently suspended until November.',
        th: 'บริการเรือเฟอร์รี่ไปยังเกาะเล็ก ๆ เช่น เกาะรอก ถูกระงับในขณะนี้จนถึงเดือนพฤศจิกายน'
      },
      {
        en: 'The best diving visibility is now on the east side of the island.',
        th: 'ทัศนวิสัยในการดำน้ำที่ดีที่สุดตอนนี้อยู่ทางด้านตะวันออกของเกาะ'
      },
      {
        en: 'Many hotels offer significant green season discounts (up to 50% off).',
        th: 'โรงแรมหลายแห่งมีส่วนลดฤดูเขียวที่สำคัญ (ลดสูงสุด 50%)'
      }
    ],
    lastUpdated: 'June 5, 2023',
    updatedBy: 'Lanta Tourism Association'
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{texts.title[language]}</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{texts.subtitle[language]}</p>
      </div>

      {/* Local Experts */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{texts.localExperts[language]}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localExperts.map(expert => (
            <Card key={expert.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <Avatar className="h-20 w-20 mb-3">
                    <AvatarImage src={expert.avatar} alt={expert.name} />
                    <AvatarFallback>{expert.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h4 className="text-lg font-bold">{expert.name}</h4>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span>{expert.location} • {expert.yearsOnIsland} {language === 'en' ? 'years' : 'ปี'}</span>
                  </div>
                </div>
                
                <p className="text-sm text-center mb-4">{expert.bio[language]}</p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {expert.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">{skill[language]}</Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
                    <div className="text-gray-500">{texts.responseRate[language]}</div>
                    <div className="font-medium">{expert.responseRate}</div>
                  </div>
                  <div className="flex flex-col items-center p-2 bg-gray-50 rounded">
                    <div className="text-gray-500">{texts.helpful[language]}</div>
                    <div className="font-medium">{expert.helpfulCount}</div>
                  </div>
                </div>
                
                <div className="flex justify-between gap-2">
                  <Button variant="outline" className="flex-1">
                    {texts.viewProfile[language]}
                  </Button>
                  <Button className="flex-1">
                    {texts.askQuestion[language]}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Insider Tips */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{texts.insiderTips[language]}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insiderTips.map(tip => (
            <Card key={tip.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={tip.avatar} alt={tip.author} />
                    <AvatarFallback>{tip.author.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{tip.author}</div>
                    <div className="text-sm text-gray-500">{tip.postedDate}</div>
                  </div>
                </div>
                
                <Badge className="mb-2">{tip.category[language]}</Badge>
                <h4 className="text-lg font-bold mb-2">{tip.title[language]}</h4>
                <p className="text-gray-600 mb-4 text-sm">{tip.content[language]}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star size={16} className="mr-1" />
                      <span>{tip.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle size={16} className="mr-1" />
                      <span>{tip.comments}</span>
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

      {/* Seasonal Update */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{texts.seasonalUpdates[language]}</h3>
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{texts.currentSeason[language]}: {seasonalUpdate.season[language]}</CardTitle>
                <p className="text-gray-600">{seasonalUpdate.timeframe[language]}</p>
              </div>
              <div className="bg-white p-2 rounded-md flex items-center text-sm">
                <Calendar size={16} className="mr-2" />
                <span>{language === 'en' ? 'Updated' : 'อัปเดต'}: {seasonalUpdate.lastUpdated}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{seasonalUpdate.currentStatus[language]}</p>
            <h4 className="font-bold mb-2">{language === 'en' ? 'Current Tips' : 'เคล็ดลับปัจจุบัน'}:</h4>
            <ul className="space-y-2 list-inside">
              {seasonalUpdate.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start">
                  <Lightbulb size={18} className="mr-2 text-primary mt-1 flex-shrink-0" />
                  <span>{tip[language]}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-gray-500 flex items-center">
              <User size={16} className="mr-2" />
              <span>{language === 'en' ? 'Information provided by' : 'ข้อมูลให้โดย'}: {seasonalUpdate.updatedBy}</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LocalInsights;
