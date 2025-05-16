
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Calendar } from '@/components/ui/calendar';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Users, DollarSign, Save, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const PlanningDashboard = () => {
  const { t, language } = useLanguage();
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [groupSize, setGroupSize] = useState(2);
  const [budget, setBudget] = useState([500, 2000]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [planProgress, setPlanProgress] = useState(0);

  const interests = [
    { id: 'beaches', name: { en: 'Beaches', th: 'ชายหาด' }, icon: '🏖️' },
    { id: 'diving', name: { en: 'Diving', th: 'ดำน้ำ' }, icon: '🤿' },
    { id: 'hiking', name: { en: 'Hiking', th: 'เดินป่า' }, icon: '🥾' },
    { id: 'food', name: { en: 'Food', th: 'อาหาร' }, icon: '🍲' },
    { id: 'culture', name: { en: 'Culture', th: 'วัฒนธรรม' }, icon: '🏮' },
    { id: 'wildlife', name: { en: 'Wildlife', th: 'สัตว์ป่า' }, icon: '🐒' },
  ];

  const toggleInterest = (id: string) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(i => i !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
    calculateProgress();
  };

  const calculateProgress = () => {
    let steps = 0;
    if (startDate) steps++;
    if (endDate) steps++;
    if (selectedInterests.length > 0) steps++;
    setPlanProgress(Math.round((steps / 3) * 100));
  };

  const handleDateSelect = (date: Date | undefined, type: 'start' | 'end') => {
    if (type === 'start') {
      setStartDate(date);
      if (date && endDate && date > endDate) {
        setEndDate(undefined);
      }
    } else {
      setEndDate(date);
    }
    calculateProgress();
  };

  const formatCurrency = (value: number) => {
    if (language === 'en') {
      return `$${value}`;
    } else {
      return `฿${Math.round(value * 35)}`;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="w-full lg:w-2/3">
          <h2 className="text-3xl font-bold mb-4">{t('plan.dashboard.title')}</h2>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">{t('plan.dashboard.progress')}: {planProgress}%</p>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${planProgress}%` }}
              ></div>
            </div>
          </div>
          
          {/* Trip Parameters Form */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t('plan.dashboard.dates')}</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP") : <span>{t('plan.dashboard.startDate')}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={(date) => handleDateSelect(date, 'start')}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                      disabled={!startDate}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? format(endDate, "PPP") : <span>{t('plan.dashboard.endDate')}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={(date) => handleDateSelect(date, 'end')}
                      disabled={(date) => 
                        date < (startDate || new Date()) || 
                        date > new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                      }
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('plan.dashboard.groupSize')}
              </label>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-500" />
                <input 
                  type="number" 
                  value={groupSize}
                  onChange={(e) => setGroupSize(parseInt(e.target.value) || 1)}
                  min={1}
                  max={20}
                  className="w-full rounded-md border border-input bg-background px-3 h-10"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                {t('plan.dashboard.budget')}
              </label>
              <div className="mb-2 flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-gray-500" />
                <span className="text-sm">
                  {formatCurrency(budget[0])} - {formatCurrency(budget[1])}
                </span>
              </div>
              <Slider 
                defaultValue={budget} 
                min={100} 
                max={5000} 
                step={100} 
                onValueChange={(values) => setBudget(values as [number, number])}
                className="py-4"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                {t('plan.dashboard.interests')}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${
                      selectedInterests.includes(interest.id) 
                        ? 'bg-primary/10 border-primary' 
                        : 'bg-background border-input hover:bg-muted/50'
                    }`}
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm mt-1">{interest.name[language]}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="flex gap-2">
              <Save className="h-4 w-4" />
              {t('plan.dashboard.savePlan')}
            </Button>
            <Button variant="outline" className="flex gap-2">
              <Share2 className="h-4 w-4" />
              {t('plan.dashboard.sharePlan')}
            </Button>
          </div>
        </div>
        
        {/* Suggestion Card */}
        <Card className="w-full lg:w-1/3">
          <CardHeader>
            <CardTitle>{t('plan.dashboard.suggestions')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedInterests.length > 0 ? (
                <>
                  <div className="text-sm text-gray-500">
                    {t('plan.dashboard.basedOn')}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedInterests.map((id) => {
                      const interest = interests.find(i => i.id === id);
                      return (
                        <div key={id} className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm flex items-center">
                          <span className="mr-1">{interest?.icon}</span>
                          <span>{interest?.name[language]}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm font-medium">{t('plan.dashboard.suggestedDuration')}:</p>
                    <p className="text-lg">5-7 {t('plan.dashboard.days')}</p>
                    
                    <p className="text-sm font-medium mt-3">{t('plan.dashboard.suggestedAreas')}:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Klong Dao Beach</li>
                      <li>Long Beach</li>
                      {selectedInterests.includes('diving') && (
                        <li>Koh Haa Islands</li>
                      )}
                      {selectedInterests.includes('culture') && (
                        <li>Lanta Old Town</li>
                      )}
                    </ul>
                  </div>
                </>
              ) : (
                <div className="text-center py-6 text-gray-500">
                  <p>{t('plan.dashboard.selectInterests')}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlanningDashboard;
