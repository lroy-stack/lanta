
import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, PlusCircle, Clock, Map, MapPin, Share2, Download } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

type Activity = {
  id: string;
  title: {
    en: string;
    th: string;
  };
  timeOfDay: 'morning' | 'afternoon' | 'evening';
  duration: number;
  location: string;
  image: string;
  cost: number;
};

type DayPlan = {
  id: string;
  date: Date;
  activities: {
    morning: Activity[];
    afternoon: Activity[];
    evening: Activity[];
  };
};

const ItineraryBuilder = () => {
  const { t, language } = useLanguage();
  const [days, setDays] = useState<DayPlan[]>([]);
  const [totalBudget, setTotalBudget] = useState(0);

  // Sample activities data
  const availableActivities: Activity[] = [
    {
      id: 'a1',
      title: { en: 'Snorkeling Trip', th: 'ทริปดำน้ำตื้น' },
      timeOfDay: 'morning',
      duration: 4,
      location: 'Koh Rok',
      image: '/placeholder.svg',
      cost: 45,
    },
    {
      id: 'a2',
      title: { en: 'Old Town Visit', th: 'เยี่ยมชมเมืองเก่า' },
      timeOfDay: 'afternoon',
      duration: 3,
      location: 'Lanta Old Town',
      image: '/placeholder.svg',
      cost: 10,
    },
    {
      id: 'a3',
      title: { en: 'Sunset Beach Dinner', th: 'อาหารค่ำริมชายหาดพระอาทิตย์ตก' },
      timeOfDay: 'evening',
      duration: 2,
      location: 'Klong Nin Beach',
      image: '/placeholder.svg',
      cost: 25,
    },
    {
      id: 'a4',
      title: { en: 'Kayaking in Mangroves', th: 'พายเรือคายัคในป่าชายเลน' },
      timeOfDay: 'morning',
      duration: 3,
      location: 'Thung Yee Pheng',
      image: '/placeholder.svg',
      cost: 20,
    },
    {
      id: 'a5',
      title: { en: 'Thai Cooking Class', th: 'คลาสเรียนทำอาหารไทย' },
      timeOfDay: 'afternoon',
      duration: 3,
      location: 'Saladan',
      image: '/placeholder.svg',
      cost: 35,
    },
    {
      id: 'a6',
      title: { en: 'Night Market Tour', th: 'ทัวร์ตลาดกลางคืน' },
      timeOfDay: 'evening',
      duration: 2,
      location: 'Saladan Night Market',
      image: '/placeholder.svg',
      cost: 15,
    },
  ];

  // Add a new day to the itinerary
  const addDay = () => {
    const lastDay = days[days.length - 1];
    const newDate = lastDay 
      ? new Date(lastDay.date)
      : new Date();
    
    if (lastDay) {
      newDate.setDate(newDate.getDate() + 1);
    }
    
    const newDay: DayPlan = {
      id: `day-${days.length + 1}`,
      date: newDate,
      activities: {
        morning: [],
        afternoon: [],
        evening: [],
      }
    };
    
    setDays([...days, newDay]);
  };

  // Handle drag and drop of activities
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const { source, destination } = result;
    
    // Determine if dragging from available activities or within calendar
    if (source.droppableId === 'available-activities') {
      const activityId = result.draggableId;
      const activity = availableActivities.find(a => a.id === activityId);
      
      if (!activity) return;
      
      // Format: day-{index}-{timeOfDay}
      const [, dayIndex, timeOfDay] = destination.droppableId.split('-');
      
      if (!dayIndex || !timeOfDay) return;
      
      const newDays = [...days];
      const day = newDays[parseInt(dayIndex)];
      
      if (day) {
        day.activities[timeOfDay as keyof typeof day.activities] = [
          ...day.activities[timeOfDay as keyof typeof day.activities],
          { ...activity }
        ];
        
        setDays(newDays);
        calculateBudget(newDays);
      }
    }
  };

  // Calculate the total budget based on selected activities
  const calculateBudget = (currentDays: DayPlan[]) => {
    let total = 0;
    currentDays.forEach(day => {
      ['morning', 'afternoon', 'evening'].forEach(time => {
        const activities = day.activities[time as keyof typeof day.activities];
        activities.forEach(activity => {
          total += activity.cost;
        });
      });
    });
    setTotalBudget(total);
  };

  // Format currency based on selected language
  const formatCurrency = (amount: number) => {
    return language === 'en' ? `$${amount}` : `฿${amount * 35}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex flex-col lg:flex-row justify-between mb-6 items-start lg:items-center">
        <div>
          <h3 className="text-2xl font-bold">{t('plan.itinerary.subtitle')}</h3>
          <p className="text-gray-500">{t('plan.itinerary.description')}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
          <Button className="flex items-center gap-2" onClick={addDay}>
            <PlusCircle className="h-4 w-4" />
            {t('plan.itinerary.addDay')}
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            {t('plan.itinerary.share')}
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            {t('plan.itinerary.export')}
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Budget tracker */}
        <div className="w-full lg:w-1/4">
          <Card>
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold mb-2">{t('plan.itinerary.budget')}</h4>
              <div className="text-3xl font-bold text-primary">
                {formatCurrency(totalBudget)}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {t('plan.itinerary.estimatedCost')}
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">{t('plan.itinerary.activities')}</h4>
                
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="available-activities">
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="space-y-2"
                      >
                        {availableActivities.map((activity, index) => (
                          <Draggable key={activity.id} draggableId={activity.id} index={index}>
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-gray-50 p-3 rounded-md border border-gray-200 cursor-move"
                              >
                                <div className="flex gap-3">
                                  <div className="w-12 h-12 bg-gray-200 rounded-md flex-shrink-0"></div>
                                  <div>
                                    <h5 className="font-medium">{activity.title[language]}</h5>
                                    <div className="flex items-center text-xs text-gray-500 gap-1">
                                      <Clock className="h-3 w-3" /> {activity.duration} {t('plan.itinerary.hours')}
                                    </div>
                                    <div className="flex items-center text-xs text-gray-500 gap-1">
                                      <MapPin className="h-3 w-3" /> {activity.location}
                                    </div>
                                  </div>
                                </div>
                                <div className="text-right text-sm font-medium mt-1">
                                  {formatCurrency(activity.cost)}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Itinerary calendar */}
        <div className="w-full lg:w-3/4">
          {days.length === 0 ? (
            <div className="border-2 border-dashed rounded-lg p-12 text-center">
              <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto" />
              <h3 className="mt-4 text-xl font-medium">{t('plan.itinerary.empty')}</h3>
              <p className="text-gray-500 mt-2">{t('plan.itinerary.emptyDescription')}</p>
              <Button className="mt-6" onClick={addDay}>
                {t('plan.itinerary.startPlanning')}
              </Button>
            </div>
          ) : (
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="space-y-6">
                {days.map((day, dayIndex) => (
                  <Card key={day.id}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-lg font-semibold">
                          {t('plan.itinerary.day')} {dayIndex + 1} - {day.date.toLocaleDateString(language === 'en' ? 'en-US' : 'th-TH')}
                        </h4>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['morning', 'afternoon', 'evening'].map((time) => (
                          <div key={time}>
                            <h5 className="text-sm font-medium mb-2 capitalize">
                              {t(`plan.itinerary.${time}`)}
                            </h5>
                            
                            <Droppable droppableId={`day-${dayIndex}-${time}`}>
                              {(provided) => (
                                <div 
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                  className="bg-gray-50 p-3 rounded-md border border-gray-200 min-h-28"
                                >
                                  {day.activities[time as keyof typeof day.activities].length === 0 ? (
                                    <div className="text-center py-8 text-gray-400 text-sm">
                                      {t('plan.itinerary.dropHere')}
                                    </div>
                                  ) : (
                                    <div className="space-y-2">
                                      {day.activities[time as keyof typeof day.activities].map((activity, index) => (
                                        <div 
                                          key={`${activity.id}-${index}`}
                                          className="bg-white p-2 rounded border shadow-sm"
                                        >
                                          <div className="font-medium text-sm">{activity.title[language]}</div>
                                          <div className="flex items-center text-xs text-gray-500 gap-1">
                                            <MapPin className="h-3 w-3" /> {activity.location}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </DragDropContext>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;
