
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Slider } from '@/components/ui/slider';
import { 
  Sun, 
  CloudRain, 
  Waves, 
  Users, 
  DollarSign,
  Umbrella
} from 'lucide-react';

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const SeasonalGuide = () => {
  const { t, language } = useLanguage();
  const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth());

  // Seasonal data
  const seasonalData = {
    weather: [
      { value: 80, icon: <Sun className="h-4 w-4 text-yellow-500" /> }, // Jan
      { value: 85, icon: <Sun className="h-4 w-4 text-yellow-500" /> }, // Feb
      { value: 90, icon: <Sun className="h-4 w-4 text-yellow-500" /> }, // Mar
      { value: 95, icon: <Sun className="h-4 w-4 text-yellow-500" /> }, // Apr
      { value: 80, icon: <CloudRain className="h-4 w-4 text-blue-500" /> }, // May
      { value: 70, icon: <CloudRain className="h-4 w-4 text-blue-500" /> }, // Jun
      { value: 65, icon: <CloudRain className="h-4 w-4 text-blue-500" /> }, // Jul
      { value: 60, icon: <CloudRain className="h-4 w-4 text-blue-500" /> }, // Aug
      { value: 60, icon: <CloudRain className="h-4 w-4 text-blue-500" /> }, // Sep
      { value: 70, icon: <CloudRain className="h-4 w-4 text-blue-500" /> }, // Oct
      { value: 75, icon: <Sun className="h-4 w-4 text-yellow-500" /> }, // Nov
      { value: 75, icon: <Sun className="h-4 w-4 text-yellow-500" /> }, // Dec
    ],
    waves: [
      { value: 20, icon: <Waves className="h-4 w-4" /> }, // Jan - calm
      { value: 15, icon: <Waves className="h-4 w-4" /> }, // Feb - very calm
      { value: 15, icon: <Waves className="h-4 w-4" /> }, // Mar - very calm
      { value: 15, icon: <Waves className="h-4 w-4" /> }, // Apr - very calm
      { value: 30, icon: <Waves className="h-4 w-4" /> }, // May - moderate
      { value: 50, icon: <Waves className="h-4 w-4" /> }, // Jun - rougher
      { value: 60, icon: <Waves className="h-4 w-4" /> }, // Jul - rough
      { value: 70, icon: <Waves className="h-4 w-4" /> }, // Aug - rough
      { value: 70, icon: <Waves className="h-4 w-4" /> }, // Sep - rough
      { value: 50, icon: <Waves className="h-4 w-4" /> }, // Oct - moderate
      { value: 30, icon: <Waves className="h-4 w-4" /> }, // Nov - calming
      { value: 20, icon: <Waves className="h-4 w-4" /> }, // Dec - calm
    ],
    crowds: [
      { value: 80, icon: <Users className="h-4 w-4" /> }, // Jan - high season
      { value: 85, icon: <Users className="h-4 w-4" /> }, // Feb - high season
      { value: 75, icon: <Users className="h-4 w-4" /> }, // Mar - high season
      { value: 60, icon: <Users className="h-4 w-4" /> }, // Apr - shoulder season
      { value: 30, icon: <Users className="h-4 w-4" /> }, // May - low season
      { value: 20, icon: <Users className="h-4 w-4" /> }, // Jun - low season
      { value: 20, icon: <Users className="h-4 w-4" /> }, // Jul - low season
      { value: 20, icon: <Users className="h-4 w-4" /> }, // Aug - low season
      { value: 20, icon: <Users className="h-4 w-4" /> }, // Sep - low season
      { value: 40, icon: <Users className="h-4 w-4" /> }, // Oct - shoulder season
      { value: 60, icon: <Users className="h-4 w-4" /> }, // Nov - shoulder season
      { value: 80, icon: <Users className="h-4 w-4" /> }, // Dec - high season
    ],
    prices: [
      { value: 80, icon: <DollarSign className="h-4 w-4" /> }, // Jan - high prices
      { value: 85, icon: <DollarSign className="h-4 w-4" /> }, // Feb - high prices
      { value: 80, icon: <DollarSign className="h-4 w-4" /> }, // Mar - high prices
      { value: 70, icon: <DollarSign className="h-4 w-4" /> }, // Apr - medium-high prices
      { value: 40, icon: <DollarSign className="h-4 w-4" /> }, // May - lower prices
      { value: 30, icon: <DollarSign className="h-4 w-4" /> }, // Jun - low prices
      { value: 30, icon: <DollarSign className="h-4 w-4" /> }, // Jul - low prices
      { value: 30, icon: <DollarSign className="h-4 w-4" /> }, // Aug - low prices
      { value: 30, icon: <DollarSign className="h-4 w-4" /> }, // Sep - low prices
      { value: 50, icon: <DollarSign className="h-4 w-4" /> }, // Oct - medium prices
      { value: 70, icon: <DollarSign className="h-4 w-4" /> }, // Nov - medium-high prices
      { value: 85, icon: <DollarSign className="h-4 w-4" /> }, // Dec - high prices
    ]
  };

  // Season information
  const seasons = [
    { months: [0, 1, 2, 3], name: { en: 'High Season', th: 'ช่วงไฮซีซั่น' }, color: 'bg-yellow-100' },
    { months: [4, 5, 6, 7, 8], name: { en: 'Green Season', th: 'ช่วงกรีนซีซั่น' }, color: 'bg-green-100' },
    { months: [9, 10, 11], name: { en: 'High Season', th: 'ช่วงไฮซีซั่น' }, color: 'bg-yellow-100' }
  ];
  
  const getCurrentSeason = () => {
    for (const season of seasons) {
      if (season.months.includes(selectedMonth)) {
        return season;
      }
    }
    return seasons[0]; // Default to first season if not found
  };
  
  const currentSeason = getCurrentSeason();

  // Monthly activities
  const monthlyActivities = [
    { // January
      good: ['diving', 'snorkeling', 'beach', 'hiking'],
      avoided: ['surfing']
    },
    { // February
      good: ['diving', 'snorkeling', 'beach', 'hiking'],
      avoided: ['surfing']
    },
    { // March
      good: ['diving', 'snorkeling', 'beach', 'hiking'],
      avoided: ['surfing']
    },
    { // April
      good: ['diving', 'snorkeling', 'beach', 'songkran'],
      avoided: ['surfing']
    },
    { // May
      good: ['surfing', 'cultural', 'budget'],
      avoided: ['diving', 'boat']
    },
    { // June
      good: ['surfing', 'cultural', 'budget'],
      avoided: ['diving', 'boat']
    },
    { // July
      good: ['surfing', 'cultural', 'budget'],
      avoided: ['diving', 'boat']
    },
    { // August
      good: ['surfing', 'cultural', 'budget'],
      avoided: ['diving', 'boat']
    },
    { // September
      good: ['surfing', 'cultural', 'budget'],
      avoided: ['diving', 'boat']
    },
    { // October
      good: ['cultural', 'budget', 'diving'],
      avoided: ['boat']
    },
    { // November
      good: ['diving', 'snorkeling', 'beach', 'loykrathong'],
      avoided: []
    },
    { // December
      good: ['diving', 'snorkeling', 'beach', 'newyear'],
      avoided: []
    }
  ];
  
  const activityNames = {
    diving: { en: 'Diving', th: 'ดำน้ำลึก' },
    snorkeling: { en: 'Snorkeling', th: 'ดำน้ำตื้น' },
    beach: { en: 'Beach Activities', th: 'กิจกรรมชายหาด' },
    hiking: { en: 'Hiking', th: 'เดินป่า' },
    surfing: { en: 'Surfing', th: 'เล่นกระดานโต้คลื่น' },
    cultural: { en: 'Cultural Visits', th: 'เยี่ยมชมวัฒนธรรม' },
    budget: { en: 'Budget Travel', th: 'ท่องเที่ยวประหยัด' },
    boat: { en: 'Boat Trips', th: 'ทริปล่องเรือ' },
    songkran: { en: 'Songkran Festival', th: 'เทศกาลสงกรานต์' },
    loykrathong: { en: 'Loy Krathong', th: 'ลอยกระทง' },
    newyear: { en: 'New Year Celebrations', th: 'ฉลองปีใหม่' }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">{t('plan.seasonal.subtitle')}</h3>
          <p className="text-gray-600 mb-6">{t('plan.seasonal.description')}</p>
          
          <div className="relative">
            {/* Season indicators */}
            <div className="grid grid-cols-12 h-6 mb-2 rounded-md overflow-hidden">
              {months.map((_, idx) => {
                const season = seasons.find(season => season.months.includes(idx));
                return (
                  <div 
                    key={idx} 
                    className={`${season?.color || 'bg-gray-100'} ${idx === selectedMonth ? 'ring-2 ring-primary' : ''}`}
                  />
                );
              })}
            </div>
            
            {/* Month labels */}
            <div className="grid grid-cols-12 mb-6">
              {months.map((month, idx) => (
                <div 
                  key={idx} 
                  className={`text-center text-xs cursor-pointer ${idx === selectedMonth ? 'font-bold text-primary' : ''}`}
                  onClick={() => setSelectedMonth(idx)}
                >
                  {month}
                </div>
              ))}
            </div>
            
            {/* Month selector slider */}
            <Slider
              min={0}
              max={11}
              step={1}
              value={[selectedMonth]}
              onValueChange={(value) => setSelectedMonth(value[0])}
              className="mb-8"
            />
          </div>
        </div>
        
        {/* Current month details */}
        <div className={`p-6 rounded-lg ${currentSeason.color} border`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">
              {months[selectedMonth]}
            </h3>
            <div className="px-3 py-1 bg-white rounded-full text-sm font-medium">
              {currentSeason.name[language]}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-3 rounded-md">
              <div className="flex items-center mb-2">
                <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="font-medium">{t('plan.seasonal.weather')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-500 h-2 rounded-full" 
                  style={{ width: `${seasonalData.weather[selectedMonth].value}%` }}
                />
              </div>
              <div className="text-sm mt-1">
                {seasonalData.weather[selectedMonth].value > 70 
                  ? t('plan.seasonal.sunny') 
                  : t('plan.seasonal.rainy')}
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-md">
              <div className="flex items-center mb-2">
                <Waves className="h-5 w-5 text-blue-500 mr-2" />
                <span className="font-medium">{t('plan.seasonal.seaConditions')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${seasonalData.waves[selectedMonth].value}%` }}
                />
              </div>
              <div className="text-sm mt-1">
                {seasonalData.waves[selectedMonth].value < 30 
                  ? t('plan.seasonal.calm') 
                  : seasonalData.waves[selectedMonth].value < 60
                    ? t('plan.seasonal.moderate')
                    : t('plan.seasonal.rough')}
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-md">
              <div className="flex items-center mb-2">
                <Users className="h-5 w-5 text-purple-500 mr-2" />
                <span className="font-medium">{t('plan.seasonal.crowds')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-500 h-2 rounded-full" 
                  style={{ width: `${seasonalData.crowds[selectedMonth].value}%` }}
                />
              </div>
              <div className="text-sm mt-1">
                {seasonalData.crowds[selectedMonth].value < 30 
                  ? t('plan.seasonal.quiet') 
                  : seasonalData.crowds[selectedMonth].value < 60
                    ? t('plan.seasonal.moderate')
                    : t('plan.seasonal.busy')}
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-md">
              <div className="flex items-center mb-2">
                <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                <span className="font-medium">{t('plan.seasonal.prices')}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${seasonalData.prices[selectedMonth].value}%` }}
                />
              </div>
              <div className="text-sm mt-1">
                {seasonalData.prices[selectedMonth].value < 40 
                  ? t('plan.seasonal.low') 
                  : seasonalData.prices[selectedMonth].value < 70
                    ? t('plan.seasonal.medium')
                    : t('plan.seasonal.high')}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Sun className="h-4 w-4 mr-2 text-green-600" />
                {t('plan.seasonal.recommended')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {monthlyActivities[selectedMonth].good.map(activity => (
                  <div key={activity} className="bg-white px-3 py-1 rounded-full text-sm flex items-center">
                    <span>{activityNames[activity][language]}</span>
                  </div>
                ))}
                {monthlyActivities[selectedMonth].good.length === 0 && (
                  <p className="text-sm text-gray-600">{t('plan.seasonal.noneRecommended')}</p>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Umbrella className="h-4 w-4 mr-2 text-red-500" />
                {t('plan.seasonal.avoid')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {monthlyActivities[selectedMonth].avoided.map(activity => (
                  <div key={activity} className="bg-white px-3 py-1 rounded-full text-sm flex items-center">
                    <span>{activityNames[activity][language]}</span>
                  </div>
                ))}
                {monthlyActivities[selectedMonth].avoided.length === 0 && (
                  <p className="text-sm text-gray-600">{t('plan.seasonal.noneAvoided')}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-lg mb-3">{t('plan.seasonal.highSeason')}</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>{t('plan.seasonal.highSeasonMonths')}: {t('plan.seasonal.novToApr')}</p>
              <p>{t('plan.seasonal.highSeasonDescription')}</p>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-lg mb-3">{t('plan.seasonal.greenSeason')}</h3>
            <div className="text-sm text-gray-600 space-y-2">
              <p>{t('plan.seasonal.greenSeasonMonths')}: {t('plan.seasonal.mayToOct')}</p>
              <p>{t('plan.seasonal.greenSeasonDescription')}</p>
            </div>
          </div>
          
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold text-lg mb-3">{t('plan.seasonal.tip')}</h3>
            <div className="text-sm text-gray-600">
              <p>{t('plan.seasonal.tipDescription')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalGuide;
