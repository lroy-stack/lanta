
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CalendarDays, Clock, MapPin, Calendar, Plus, Users } from 'lucide-react';

const EventsMeetups: React.FC = () => {
  const { language } = useLanguage();
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);

  const texts = {
    title: {
      en: 'Events & Meetups',
      th: 'กิจกรรมและการพบปะ'
    },
    subtitle: {
      en: 'Discover and join community events happening on and around Koh Lanta',
      th: 'ค้นพบและเข้าร่วมกิจกรรมชุมชนที่เกิดขึ้นบนและรอบเกาะลันตา'
    },
    createEvent: {
      en: 'Create Event',
      th: 'สร้างกิจกรรม'
    },
    upcomingEvents: {
      en: 'Upcoming Events',
      th: 'กิจกรรมที่กำลังจะมาถึง'
    },
    happening: {
      en: 'Happening Today',
      th: 'เกิดขึ้นวันนี้'
    },
    attending: {
      en: 'Attending',
      th: 'จะเข้าร่วม'
    },
    interested: {
      en: 'Interested',
      th: 'สนใจ'
    },
    viewDetails: {
      en: 'View Details',
      th: 'ดูรายละเอียด'
    },
    date: {
      en: 'Date',
      th: 'วันที่'
    },
    time: {
      en: 'Time',
      th: 'เวลา'
    },
    location: {
      en: 'Location',
      th: 'สถานที่'
    },
    organizer: {
      en: 'Organizer',
      th: 'ผู้จัด'
    },
    newEvent: {
      en: 'New Event',
      th: 'กิจกรรมใหม่'
    },
    eventTitle: {
      en: 'Event Title',
      th: 'ชื่อกิจกรรม'
    },
    eventDescription: {
      en: 'Event Description',
      th: 'คำอธิบายกิจกรรม'
    },
    eventType: {
      en: 'Event Type',
      th: 'ประเภทกิจกรรม'
    },
    cancel: {
      en: 'Cancel',
      th: 'ยกเลิก'
    },
    submit: {
      en: 'Submit Event',
      th: 'ส่งกิจกรรม'
    },
    free: {
      en: 'Free',
      th: 'ฟรี'
    }
  };

  const eventTypes = [
    { value: 'social', label: { en: 'Social Meetup', th: 'การพบปะทางสังคม' } },
    { value: 'activity', label: { en: 'Group Activity', th: 'กิจกรรมกลุ่ม' } },
    { value: 'workshop', label: { en: 'Workshop', th: 'เวิร์คชอป' } },
    { value: 'cleanup', label: { en: 'Beach Cleanup', th: 'ทำความสะอาดชายหาด' } },
    { value: 'cultural', label: { en: 'Cultural Event', th: 'กิจกรรมทางวัฒนธรรม' } }
  ];

  // Mock data for events
  const events = [
    {
      id: 1,
      title: {
        en: 'Beach Cleanup at Klong Dao',
        th: 'ทำความสะอาดชายหาดที่คลองดาว'
      },
      description: {
        en: 'Join us for a community beach cleanup event. Equipment will be provided. Let\'s keep Koh Lanta beautiful!',
        th: 'เข้าร่วมกิจกรรมทำความสะอาดชายหาดกับเรา จะมีอุปกรณ์ให้ มาร่วมกันรักษาความสวยงามของเกาะลันตา!'
      },
      image: '/placeholder.svg',
      date: '2023-06-15',
      displayDate: 'June 15, 2023',
      time: '09:00 - 12:00',
      location: 'Klong Dao Beach',
      organizer: 'Lanta Eco Warriors',
      organizerAvatar: '/placeholder.svg',
      type: 'cleanup',
      attendees: 24,
      free: true,
      isToday: true
    },
    {
      id: 2,
      title: {
        en: 'Sunset Yoga at Long Beach',
        th: 'โยคะชมพระอาทิตย์ตกที่หาดยาว'
      },
      description: {
        en: 'Relax and rejuvenate with our sunset yoga session on beautiful Long Beach. All levels welcome!',
        th: 'ผ่อนคลายและฟื้นฟูด้วยเซสชันโยคะชมพระอาทิตย์ตกบนหาดยาวอันสวยงาม ยินดีต้อนรับทุกระดับ!'
      },
      image: '/placeholder.svg',
      date: '2023-06-16',
      displayDate: 'June 16, 2023',
      time: '17:30 - 18:30',
      location: 'Long Beach (near Lanta Castaway)',
      organizer: 'Lanta Yoga Community',
      organizerAvatar: '/placeholder.svg',
      type: 'activity',
      attendees: 12,
      free: false,
      price: 300,
      isToday: false
    },
    {
      id: 3,
      title: {
        en: 'Digital Nomad Meetup & Networking',
        th: 'การพบปะและการสร้างเครือข่ายของดิจิทัลโนแมด'
      },
      description: {
        en: 'Connect with fellow digital nomads and remote workers on the island. Share experiences, tips, and maybe find your next collaboration!',
        th: 'เชื่อมต่อกับเพื่อนดิจิทัลโนแมดและผู้ทำงานระยะไกลบนเกาะ แบ่งปันประสบการณ์ เคล็ดลับ และอาจพบการทำงานร่วมกันครั้งต่อไปของคุณ!'
      },
      image: '/placeholder.svg',
      date: '2023-06-18',
      displayDate: 'June 18, 2023',
      time: '18:00 - 21:00',
      location: 'Hub of Joys Coworking Space, Saladan',
      organizer: 'Lanta Digital Collective',
      organizerAvatar: '/placeholder.svg',
      type: 'social',
      attendees: 18,
      free: true,
      isToday: false
    },
    {
      id: 4,
      title: {
        en: 'Thai Cooking Workshop',
        th: 'เวิร์คชอปทำอาหารไทย'
      },
      description: {
        en: 'Learn to cook authentic Southern Thai dishes with local ingredients. Limited spots available!',
        th: 'เรียนรู้การทำอาหารไทยใต้แท้ๆด้วยวัตถุดิบท้องถิ่น มีที่นั่งจำกัด!'
      },
      image: '/placeholder.svg',
      date: '2023-06-20',
      displayDate: 'June 20, 2023',
      time: '14:00 - 16:30',
      location: 'Time For Lime Cooking School',
      organizer: 'Chef Somchai',
      organizerAvatar: '/placeholder.svg',
      type: 'workshop',
      attendees: 8,
      free: false,
      price: 1200,
      isToday: false
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{texts.title[language]}</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{texts.subtitle[language]}</p>
        <Dialog open={isCreateEventOpen} onOpenChange={setIsCreateEventOpen}>
          <DialogTrigger asChild>
            <Button className="mt-4 flex items-center gap-2">
              <Plus size={16} />
              {texts.createEvent[language]}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle>{texts.newEvent[language]}</DialogTitle>
              <DialogDescription>
                {language === 'en' 
                  ? 'Create a new event to share with the Koh Lanta community.'
                  : 'สร้างกิจกรรมใหม่เพื่อแบ่งปันกับชุมชนเกาะลันตา'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  {texts.eventTitle[language]}
                </label>
                <Input id="title" />
              </div>
              <div className="space-y-2">
                <label htmlFor="description" className="text-sm font-medium">
                  {texts.eventDescription[language]}
                </label>
                <Textarea id="description" rows={5} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">
                    {texts.date[language]}
                  </label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium">
                    {texts.time[language]}
                  </label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-medium">
                  {texts.location[language]}
                </label>
                <Input id="location" />
              </div>
              <div className="space-y-2">
                <label htmlFor="eventType" className="text-sm font-medium">
                  {texts.eventType[language]}
                </label>
                <Select>
                  <SelectTrigger id="eventType">
                    <SelectValue placeholder={language === 'en' ? 'Select event type' : 'เลือกประเภทกิจกรรม'} />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label[language]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateEventOpen(false)}>
                {texts.cancel[language]}
              </Button>
              <Button onClick={() => setIsCreateEventOpen(false)}>
                {texts.submit[language]}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Happening Today */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{texts.happening[language]}</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events
            .filter(event => event.isToday)
            .map(event => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <AspectRatio ratio={1} className="md:col-span-1">
                    <img 
                      src={event.image} 
                      alt={event.title[language]} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-4 md:col-span-2">
                    <Badge variant="secondary" className="mb-2">
                      {language === 'en' ? 'Today' : 'วันนี้'}
                    </Badge>
                    <h4 className="text-xl font-bold mb-2">{event.title[language]}</h4>
                    <div className="space-y-2 mb-4 text-gray-600 text-sm">
                      <div className="flex items-center space-x-2">
                        <CalendarDays size={16} />
                        <span>{event.displayDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={event.organizerAvatar} alt={event.organizer} />
                          <AvatarFallback>{event.organizer.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{event.organizer}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        {texts.viewDetails[language]}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{texts.upcomingEvents[language]}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events
            .filter(event => !event.isToday)
            .map(event => (
              <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={event.image} 
                    alt={event.title[language]} 
                    className="w-full h-full object-cover"
                  />
                  {event.free && (
                    <Badge className="absolute top-2 right-2 bg-green-500">
                      {texts.free[language]}
                    </Badge>
                  )}
                </AspectRatio>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">{event.title[language]}</h4>
                  <div className="space-y-1 mb-3 text-gray-600 text-sm">
                    <div className="flex items-center space-x-2">
                      <CalendarDays size={14} />
                      <span>{event.displayDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={event.organizerAvatar} alt={event.organizer} />
                      <AvatarFallback>{event.organizer.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{event.organizer}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users size={14} className="mr-1" />
                      <span>{event.attendees} {texts.attending[language]}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      {texts.interested[language]}
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

export default EventsMeetups;
