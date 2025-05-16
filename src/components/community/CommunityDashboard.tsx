
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageCircle, ThumbsUp, Image, CalendarDays, User, TrendingUp } from 'lucide-react';

const CommunityDashboard: React.FC = () => {
  const { language } = useLanguage();

  const texts = {
    activityFeed: {
      en: 'Recent Activity',
      th: 'กิจกรรมล่าสุด'
    },
    trending: {
      en: 'Trending Topics',
      th: 'หัวข้อยอดนิยม'
    },
    activeMembers: {
      en: 'Active Members',
      th: 'สมาชิกที่กระตือรือร้น'
    },
    joinDiscussion: {
      en: 'Join Discussion',
      th: 'เข้าร่วมการสนทนา'
    },
    viewAll: {
      en: 'View All',
      th: 'ดูทั้งหมด'
    },
    readMore: {
      en: 'Read More',
      th: 'อ่านเพิ่มเติม'
    }
  };

  // Mock data for recent activity
  const recentActivities = [
    {
      id: 1,
      type: 'question',
      title: {
        en: 'Best time to visit Koh Lanta for snorkeling?',
        th: 'ช่วงเวลาที่ดีที่สุดในการไปดำน้ำตื้นที่เกาะลันตา?'
      },
      user: 'Sarah T.',
      avatar: '/placeholder.svg',
      time: '2 hours ago',
      engagement: 8,
      icon: <MessageCircle size={18} />
    },
    {
      id: 2,
      type: 'journal',
      title: {
        en: 'Our 7-day adventure in Koh Lanta with kids',
        th: '7 วันของการผจญภัยในเกาะลันตากับลูกๆ'
      },
      user: 'Mark J.',
      avatar: '/placeholder.svg',
      time: '5 hours ago',
      engagement: 15,
      icon: <Image size={18} />
    },
    {
      id: 3,
      type: 'event',
      title: {
        en: 'Beach Cleanup at Klong Dao',
        th: 'กิจกรรมทำความสะอาดหาดที่คลองดาว'
      },
      user: 'Lanta Eco Warriors',
      avatar: '/placeholder.svg',
      time: 'Tomorrow, 9 AM',
      engagement: 24,
      icon: <CalendarDays size={18} />
    }
  ];

  // Mock data for trending topics
  const trendingTopics = [
    {
      id: 1,
      topic: {
        en: 'Transport options from Krabi Airport',
        th: 'ตัวเลือกการเดินทางจากสนามบินกระบี่'
      },
      activity: 45,
      category: {
        en: 'Transportation',
        th: 'การเดินทาง'
      }
    },
    {
      id: 2,
      topic: {
        en: 'Comparing the best diving schools',
        th: 'เปรียบเทียบโรงเรียนสอนดำน้ำที่ดีที่สุด'
      },
      activity: 38,
      category: {
        en: 'Activities',
        th: 'กิจกรรม'
      }
    },
    {
      id: 3,
      topic: {
        en: 'Restaurants with vegan options',
        th: 'ร้านอาหารที่มีตัวเลือกอาหารวีแกน'
      },
      activity: 32,
      category: {
        en: 'Food',
        th: 'อาหาร'
      }
    }
  ];

  // Mock data for active members
  const activeMembers = [
    {
      id: 1,
      name: 'Lisa T.',
      avatar: '/placeholder.svg',
      contributions: 86,
      expertise: {
        en: 'Diving Expert',
        th: 'ผู้เชี่ยวชาญด้านการดำน้ำ'
      }
    },
    {
      id: 2,
      name: 'Michael S.',
      avatar: '/placeholder.svg',
      contributions: 67,
      expertise: {
        en: 'Local Food Guide',
        th: 'ผู้แนะนำอาหารท้องถิ่น'
      }
    },
    {
      id: 3,
      name: 'Tom K.',
      avatar: '/placeholder.svg',
      contributions: 52,
      expertise: {
        en: 'Adventure Specialist',
        th: 'ผู้เชี่ยวชาญด้านการผจญภัย'
      }
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Feed */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle>{texts.activityFeed[language]}</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/community/activity">{texts.viewAll[language]}</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-md hover:bg-slate-50 transition-colors">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={activity.avatar} alt={activity.user} />
                    <AvatarFallback>{activity.user.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{activity.user}</span>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
                    <p className="font-medium">{activity.title[language]}</p>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <div className="flex items-center text-xs">
                        {activity.icon}
                        <span className="ml-1">{activity.engagement}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        {texts.readMore[language]}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar with Trending Topics and Active Members */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <TrendingUp size={18} className="text-primary" />
                <CardTitle>{texts.trending[language]}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {trendingTopics.map(topic => (
                <div key={topic.id} className="space-y-2 pb-2 border-b last:border-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <p className="font-medium">{topic.topic[language]}</p>
                    <Badge variant="outline">{topic.category[language]}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <ThumbsUp size={14} className="mr-1" />
                    <span>{topic.activity}</span>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                {texts.viewAll[language]}
              </Button>
            </CardFooter>
          </Card>

          {/* Active Members */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-2">
                <User size={18} className="text-primary" />
                <CardTitle>{texts.activeMembers[language]}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeMembers.map(member => (
                <div key={member.id} className="flex items-center space-x-3 pb-2 border-b last:border-0 last:pb-0">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">{member.name}</div>
                    <div className="text-xs text-gray-500">{member.expertise[language]}</div>
                  </div>
                  <div className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {member.contributions}
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="w-full">
                {texts.viewAll[language]}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityDashboard;
