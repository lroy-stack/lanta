
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommunityDashboard from '../components/community/CommunityDashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QAForum from '../components/community/QAForum';
import TravelJournals from '../components/community/TravelJournals';
import PhotoGallery from '../components/community/PhotoGallery';
import EventsMeetups from '../components/community/EventsMeetups';
import LocalInsights from '../components/community/LocalInsights';
import ParallaxHeader from '../components/community/ParallaxHeader';

const Community: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ParallaxHeader />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="mb-8 w-full flex justify-center overflow-x-auto">
            <TabsTrigger value="dashboard">
              {language === 'en' ? 'Dashboard' : 'หน้าหลัก'}
            </TabsTrigger>
            <TabsTrigger value="qa">
              {language === 'en' ? 'Q&A Forum' : 'กระดานถาม-ตอบ'}
            </TabsTrigger>
            <TabsTrigger value="journals">
              {language === 'en' ? 'Travel Journals' : 'บันทึกการเดินทาง'}
            </TabsTrigger>
            <TabsTrigger value="gallery">
              {language === 'en' ? 'Photo Gallery' : 'แกลเลอรีรูปภาพ'}
            </TabsTrigger>
            <TabsTrigger value="events">
              {language === 'en' ? 'Events & Meetups' : 'กิจกรรมและการพบปะ'}
            </TabsTrigger>
            <TabsTrigger value="insights">
              {language === 'en' ? 'Local Insights' : 'ข้อมูลจากคนท้องถิ่น'}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <CommunityDashboard />
          </TabsContent>
          
          <TabsContent value="qa">
            <QAForum />
          </TabsContent>
          
          <TabsContent value="journals">
            <TravelJournals />
          </TabsContent>
          
          <TabsContent value="gallery">
            <PhotoGallery />
          </TabsContent>
          
          <TabsContent value="events">
            <EventsMeetups />
          </TabsContent>
          
          <TabsContent value="insights">
            <LocalInsights />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
