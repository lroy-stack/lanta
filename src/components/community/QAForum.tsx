
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, MessageCircle, Plus, Search, ThumbsUp, Filter } from 'lucide-react';
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

const QAForum: React.FC = () => {
  const { language } = useLanguage();
  const [isNewQuestionDialogOpen, setIsNewQuestionDialogOpen] = useState(false);

  const texts = {
    title: {
      en: 'Q&A Forum',
      th: 'กระดานถาม-ตอบ'
    },
    subtitle: {
      en: 'Ask questions, share knowledge, and get insights from travelers and locals',
      th: 'ถามคำถาม แบ่งปันความรู้ และรับข้อมูลเชิงลึกจากนักเดินทางและคนท้องถิ่น'
    },
    search: {
      en: 'Search questions...',
      th: 'ค้นหาคำถาม...'
    },
    filter: {
      en: 'Filter',
      th: 'กรอง'
    },
    askQuestion: {
      en: 'Ask a Question',
      th: 'ถามคำถาม'
    },
    recentQuestions: {
      en: 'Recent Questions',
      th: 'คำถามล่าสุด'
    },
    topQuestions: {
      en: 'Top Questions',
      th: 'คำถามยอดนิยม'
    },
    answers: {
      en: 'Answers',
      th: 'คำตอบ'
    },
    views: {
      en: 'Views',
      th: 'การเข้าชม'
    },
    verified: {
      en: 'Verified',
      th: 'ยืนยันแล้ว'
    },
    newQuestion: {
      en: 'New Question',
      th: 'คำถามใหม่'
    },
    questionTitle: {
      en: 'Question Title',
      th: 'หัวข้อคำถาม'
    },
    questionDetails: {
      en: 'Question Details',
      th: 'รายละเอียดคำถาม'
    },
    category: {
      en: 'Category',
      th: 'หมวดหมู่'
    },
    cancel: {
      en: 'Cancel',
      th: 'ยกเลิก'
    },
    submit: {
      en: 'Submit Question',
      th: 'ส่งคำถาม'
    },
    selectCategory: {
      en: 'Select category',
      th: 'เลือกหมวดหมู่'
    }
  };

  const categories = [
    { value: 'accommodation', label: { en: 'Accommodation', th: 'ที่พัก' } },
    { value: 'transportation', label: { en: 'Transportation', th: 'การเดินทาง' } },
    { value: 'food', label: { en: 'Food & Dining', th: 'อาหารและร้านอาหาร' } },
    { value: 'activities', label: { en: 'Activities', th: 'กิจกรรม' } },
    { value: 'general', label: { en: 'General Info', th: 'ข้อมูลทั่วไป' } }
  ];

  // Mock data for questions
  const questions = [
    {
      id: 1,
      title: {
        en: 'What\'s the best way to get from Krabi Airport to Koh Lanta?',
        th: 'วิธีที่ดีที่สุดในการเดินทางจากสนามบินกระบี่ไปเกาะลันตาคืออะไร?'
      },
      author: 'Emma L.',
      avatar: '/placeholder.svg',
      timeAgo: '2 days ago',
      category: { en: 'Transportation', th: 'การเดินทาง' },
      answers: 8,
      views: 156,
      hasVerifiedAnswer: true
    },
    {
      id: 2,
      title: {
        en: 'Are there any good vegetarian restaurants on Klong Nin Beach?',
        th: 'มีร้านอาหารมังสวิรัติที่ดีบนหาดคลองนินหรือไม่?'
      },
      author: 'Max W.',
      avatar: '/placeholder.svg',
      timeAgo: '1 week ago',
      category: { en: 'Food & Dining', th: 'อาหารและร้านอาหาร' },
      answers: 5,
      views: 89,
      hasVerifiedAnswer: false
    },
    {
      id: 3,
      title: {
        en: 'Which dive center is best for beginners wanting to get PADI certified?',
        th: 'ศูนย์ดำน้ำแห่งไหนดีที่สุดสำหรับผู้เริ่มต้นที่ต้องการได้รับการรับรองจาก PADI?'
      },
      author: 'Thomas K.',
      avatar: '/placeholder.svg',
      timeAgo: '3 days ago',
      category: { en: 'Activities', th: 'กิจกรรม' },
      answers: 12,
      views: 205,
      hasVerifiedAnswer: true
    },
    {
      id: 4,
      title: {
        en: 'How reliable is the WiFi in hotels on the southern part of the island?',
        th: 'WiFi ในโรงแรมทางตอนใต้ของเกาะมีความเสถียรแค่ไหน?'
      },
      author: 'Sophia R.',
      avatar: '/placeholder.svg',
      timeAgo: '5 days ago',
      category: { en: 'Accommodation', th: 'ที่พัก' },
      answers: 6,
      views: 124,
      hasVerifiedAnswer: false
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">{texts.title[language]}</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{texts.subtitle[language]}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder={texts.search[language]}
            className="pl-10"
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            {texts.filter[language]}
          </Button>
          <Dialog open={isNewQuestionDialogOpen} onOpenChange={setIsNewQuestionDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus size={16} />
                {texts.askQuestion[language]}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>{texts.newQuestion[language]}</DialogTitle>
                <DialogDescription>
                  {language === 'en' 
                    ? 'Ask a question to our community of travelers and locals.'
                    : 'ถามคำถามกับชุมชนนักเดินทางและคนท้องถิ่นของเรา'}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    {texts.questionTitle[language]}
                  </label>
                  <Input id="title" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium">
                    {texts.questionDetails[language]}
                  </label>
                  <Textarea id="details" rows={5} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    {texts.category[language]}
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={texts.selectCategory[language]} />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label[language]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsNewQuestionDialogOpen(false)}>
                  {texts.cancel[language]}
                </Button>
                <Button onClick={() => setIsNewQuestionDialogOpen(false)}>
                  {texts.submit[language]}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-xl">{texts.recentQuestions[language]}</h3>
        <div className="grid gap-4">
          {questions.map((question) => (
            <Card key={question.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={question.avatar} alt={question.author} />
                    <AvatarFallback>{question.author.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div>
                      <h4 className="font-medium text-lg">{question.title[language]}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <span>{question.author}</span>
                        <span className="mx-2">•</span>
                        <span>{question.timeAgo}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge variant="outline">{question.category[language]}</Badge>
                      {question.hasVerifiedAnswer && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <CheckCircle size={12} />
                          {texts.verified[language]}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center">
                        <MessageCircle size={16} className="mr-1" />
                        <span>{question.answers}</span>
                      </div>
                      <span className="text-xs text-gray-500">{texts.answers[language]}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>{question.views}</span>
                      <span className="text-xs text-gray-500">{texts.views[language]}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QAForum;
