
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Flag, History } from 'lucide-react';

const CulturalHeritage = () => {
  const { language } = useLanguage();
  
  // Translations
  const translations = {
    title: {
      en: "Cultural Heritage",
      th: "มรดกทางวัฒนธรรม",
    },
    subtitle: {
      en: "Experience the rich cultural tapestry of Koh Lanta",
      th: "สัมผัสมรดกทางวัฒนธรรมอันหลากหลายของเกาะลันตา",
    },
    history: {
      title: {
        en: "Historical Timeline",
        th: "เส้นเวลาประวัติศาสตร์",
      }
    },
    communities: {
      title: {
        en: "Cultural Communities",
        th: "ชุมชนทางวัฒนธรรม",
      },
      subtitle: {
        en: "Discover the three main cultural groups that shape Koh Lanta's unique identity",
        th: "ค้นพบกลุ่มวัฒนธรรมหลักสามกลุ่มที่หล่อหลอมอัตลักษณ์อันเป็นเอกลักษณ์ของเกาะลันตา",
      },
      chaolay: {
        name: {
          en: "Chao Lay (Sea Gypsies)",
          th: "ชาวเล (ชาวเลแห่งทะเล)",
        },
        description: {
          en: "The original inhabitants of the region, the Chao Lay or 'sea people' maintain distinct seafaring traditions and animistic beliefs. Their unique boat-building techniques and annual Loi Rua festival are important cultural treasures.",
          th: "ชาวพื้นเมืองดั้งเดิมของภูมิภาคนี้ ชาวเล หรือ 'คนทะเล' ยังคงรักษาประเพณีการเดินเรือและความเชื่อเกี่ยวกับวิญญาณที่เป็นเอกลักษณ์ เทคนิคการต่อเรือที่เป็นเอกลักษณ์และเทศกาลลอยเรือประจำปีของพวกเขาเป็นสมบัติทางวัฒนธรรมที่สำคัญ",
        },
      },
      thaimuslim: {
        name: {
          en: "Thai Muslims",
          th: "ไทยมุสลิม",
        },
        description: {
          en: "Making up the majority of Koh Lanta's population, the Thai Muslims have deeply influenced the island's culture from cuisine to architecture. Many fishing villages on the east coast maintain traditional ways of life.",
          th: "ชาวไทยมุสลิมซึ่งเป็นประชากรส่วนใหญ่ของเกาะลันตา มีอิทธิพลอย่างลึกซึ้งต่อวัฒนธรรมของเกาะตั้งแต่อาหารไปจนถึงสถาปัตยกรรม หมู่บ้านประมงหลายแห่งบนชายฝั่งตะวันออกยังคงรักษาวิถีชีวิตแบบดั้งเดิม",
        },
      },
      chinesethai: {
        name: {
          en: "Chinese Thais",
          th: "คนไทยเชื้อสายจีน",
        },
        description: {
          en: "Primarily settled in Lanta Old Town, Chinese Thai merchants arrived in the early 20th century. Their influence is visible in the distinctive Sino-Portuguese shophouses and annual vegetarian festival.",
          th: "ตั้งถิ่นฐานหลักในเมืองเก่าลันตา พ่อค้าไทยเชื้อสายจีนมาถึงในช่วงต้นศตวรรษที่ 20 อิทธิพลของพวกเขาเห็นได้ชัดในอาคารพาณิชย์แบบจีน-โปรตุเกสที่เป็นเอกลักษณ์และเทศกาลกินเจประจำปี",
        },
      },
    },
    oldTown: {
      title: {
        en: "Lanta Old Town",
        th: "เมืองเก่าลันตา",
      },
      description: {
        en: "Once the main commercial center of the island, Lanta Old Town features historic wooden shophouses built on stilts over the water, reminiscent of many old trading ports in Southeast Asia.",
        th: "เคยเป็นศูนย์กลางการค้าหลักของเกาะ เมืองเก่าลันตามีอาคารพาณิชย์ไม้ประวัติศาสตร์ที่สร้างบนเสาไม้เหนือน้ำ คล้ายกับท่าการค้าเก่าหลายแห่งในเอเชียตะวันออกเฉียงใต้",
      },
    },
    festivals: {
      title: {
        en: "Cultural Festivals & Events",
        th: "เทศกาลและกิจกรรมทางวัฒนธรรม",
      },
      loi_rua: {
        name: {
          en: "Loi Rua (Floating Boat) Festival",
          th: "เทศกาลลอยเรือ",
        },
        month: {
          en: "May/June",
          th: "พฤษภาคม/มิถุนายน",
        },
        description: {
          en: "A traditional Chao Lay ceremony where a symbolic boat is launched to sea, carrying bad luck away from the community.",
          th: "พิธีกรรมแบบดั้งเดิมของชาวเลที่มีการปล่อยเรือสัญลักษณ์ออกสู่ทะเล เพื่อนำพาสิ่งไม่ดีออกไปจากชุมชน",
        },
      },
      vegetarian: {
        name: {
          en: "Vegetarian Festival",
          th: "เทศกาลกินเจ",
        },
        month: {
          en: "October",
          th: "ตุลาคม",
        },
        description: {
          en: "Celebrated by the Chinese Thai community, featuring strict vegetarian diet, temple ceremonies, and processions.",
          th: "เฉลิมฉลองโดยชุมชนไทยเชื้อสายจีน มีการรับประทานอาหารเจอย่างเคร่งครัด พิธีกรรมในวัด และขบวนแห่",
        },
      },
      laanta_lanta: {
        name: {
          en: "Laanta Lanta Festival",
          th: "เทศกาลลานตา ลันตา",
        },
        month: {
          en: "March",
          th: "มีนาคม",
        },
        description: {
          en: "A three-day celebration in Old Town featuring local food, music, traditional performances and cultural exhibitions.",
          th: "เทศกาลสามวันในเมืองเก่าที่มีอาหารท้องถิ่น ดนตรี การแสดงแบบดั้งเดิม และนิทรรศการทางวัฒนธรรม",
        },
      },
    },
    timelineEvents: [
      {
        year: "1500s",
        event: {
          en: "Earliest recorded settlements of Sea Gypsies",
          th: "การตั้งถิ่นฐานที่บันทึกไว้ครั้งแรกของชาวเล",
        },
      },
      {
        year: "1800s",
        event: {
          en: "Establishment of Muslim fishing communities",
          th: "การก่อตั้งชุมชนประมงมุสลิม",
        },
      },
      {
        year: "1910-1920",
        event: {
          en: "Chinese merchants settle in Lanta Old Town",
          th: "พ่อค้าชาวจีนตั้งถิ่นฐานในเมืองเก่าลันตา",
        },
      },
      {
        year: "1950s",
        event: {
          en: "Construction of first concrete road on the island",
          th: "การก่อสร้างถนนคอนกรีตสายแรกบนเกาะ",
        },
      },
      {
        year: "1990s",
        event: {
          en: "Tourism begins to develop significantly",
          th: "การท่องเที่ยวเริ่มพัฒนาอย่างมีนัยสำคัญ",
        },
      },
      {
        year: "2004",
        event: {
          en: "Impact of Indian Ocean tsunami",
          th: "ผลกระทบจากคลื่นสึนามิในมหาสมุทรอินเดีย",
        },
      },
      {
        year: "Present",
        event: {
          en: "Balance of tourism development with cultural preservation",
          th: "ความสมดุลระหว่างการพัฒนาการท่องเที่ยวกับการอนุรักษ์วัฒนธรรม",
        },
      },
    ]
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
      
      {/* Historical Timeline */}
      <div className="mb-16">
        <h3 className={`text-2xl font-bold mb-6 flex items-center justify-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          <History className="h-6 w-6 mr-2 text-primary" />
          {translations.history.title[language]}
        </h3>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
          
          <div className="space-y-12">
            {translations.timelineEvents.map((item, index) => (
              <div 
                key={item.year} 
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <span className="text-sm font-bold text-primary block mb-1">
                    {item.year}
                  </span>
                  <p className={`${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {item.event[language]}
                  </p>
                </div>
                
                {/* Empty space on the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Cultural Communities */}
      <div className="mb-16">
        <h3 className={`text-2xl font-bold mb-6 flex items-center justify-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          <Flag className="h-6 w-6 mr-2 text-primary" />
          {translations.communities.title[language]}
        </h3>
        
        <p className={`text-center mb-8 max-w-3xl mx-auto ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {translations.communities.subtitle[language]}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chao Lay */}
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/Sea%20Gypsies%20Village,%20Pulau%20Tetagan,%20Southwest%20of%20Pulau%20Bodgaya,%20Tun%20Sakaran%20Marine%20Park,%20Sabah.jpg" 
                alt="Chao Lay" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className={`text-xl font-bold mb-2 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.communities.chaolay.name[language]}
              </h4>
              <p className={`text-gray-600 text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.communities.chaolay.description[language]}
              </p>
            </CardContent>
          </Card>
          
          {/* Thai Muslims */}
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://ik.imagekit.io/insomnialz/kohLanta-img/muslim.jpg?updatedAt=1747390879639" 
                alt="Thai Muslims" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className={`text-xl font-bold mb-2 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.communities.thaimuslim.name[language]}
              </h4>
              <p className={`text-gray-600 text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.communities.thaimuslim.description[language]}
              </p>
            </CardContent>
          </Card>
          
          {/* Chinese Thais */}
          <Card className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://ik.imagekit.io/insomnialz/kohLanta-img/Old-Town.png" 
                alt="Chinese Thais" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h4 className={`text-xl font-bold mb-2 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.communities.chinesethai.name[language]}
              </h4>
              <p className={`text-gray-600 text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.communities.chinesethai.description[language]}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Lanta Old Town */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className={`text-2xl font-bold mb-4 ${language === 'th' ? 'font-noto-thai' : ''}`}>
              {translations.oldTown.title[language]}
            </h3>
            <p className={`text-gray-600 mb-6 ${language === 'th' ? 'font-noto-thai' : ''}`}>
              {translations.oldTown.description[language]}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://ik.imagekit.io/insomnialz/kohLanta-img/koh-lanta-old-town-01.jpg" 
                alt="Old Town Shop" 
                className="rounded-lg h-32 w-full object-cover"
              />
              <img 
                src="https://ik.imagekit.io/insomnialz/kohLanta-img/A-Koh-Lanta-Old-Town-F-Helene-Talbot.webp" 
                alt="Old Town Pier" 
                className="rounded-lg h-32 w-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden h-64 md:h-full">
              <img 
                src="https://ik.imagekit.io/insomnialz/kohLanta-img/Old-Town.png" 
                alt="Lanta Old Town" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Festivals */}
      <div>
        <h3 className={`text-2xl font-bold mb-6 flex items-center justify-center ${language === 'th' ? 'font-noto-thai' : ''}`}>
          <Calendar className="h-6 w-6 mr-2 text-primary" />
          {translations.festivals.title[language]}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className={`text-xl font-bold mb-1 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.festivals.loi_rua.name[language]}
              </h4>
              <p className="text-sm text-primary font-medium mb-3">
                {translations.festivals.loi_rua.month[language]}
              </p>
              <p className={`text-gray-600 text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.festivals.loi_rua.description[language]}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className={`text-xl font-bold mb-1 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.festivals.vegetarian.name[language]}
              </h4>
              <p className="text-sm text-primary font-medium mb-3">
                {translations.festivals.vegetarian.month[language]}
              </p>
              <p className={`text-gray-600 text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.festivals.vegetarian.description[language]}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h4 className={`text-xl font-bold mb-1 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.festivals.laanta_lanta.name[language]}
              </h4>
              <p className="text-sm text-primary font-medium mb-3">
                {translations.festivals.laanta_lanta.month[language]}
              </p>
              <p className={`text-gray-600 text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {translations.festivals.laanta_lanta.description[language]}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CulturalHeritage;
