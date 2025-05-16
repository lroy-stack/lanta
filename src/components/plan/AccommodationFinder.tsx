import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { 
  Map as MapIcon, 
  Bed, 
  Hotel, 
  Home, 
  Tent, 
  Wifi, 
  Utensils, 
  Bath, 
  AirVent, 
  Car 
} from 'lucide-react';

type Accommodation = {
  id: string;
  name: {
    en: string;
    th: string;
  };
  description: {
    en: string;
    th: string;
  };
  type: 'hotel' | 'resort' | 'guesthouse' | 'bungalow';
  location: {
    area: string;
    coordinates: [number, number];
  };
  priceRange: [number, number];
  rating: number;
  amenities: string[];
  images: string[];
};

const AccommodationFinder = () => {
  const { t, language } = useLanguage();
  const [priceRange, setPriceRange] = useState<[number, number]>([30, 200]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedArea, setSelectedArea] = useState<string[]>([]);
  
  const accommodationTypes = [
    { id: 'hotel', icon: <Hotel className="h-5 w-5" />, label: { en: 'Hotel', th: 'โรงแรม' } },
    { id: 'resort', icon: <Bath className="h-5 w-5" />, label: { en: 'Resort', th: 'รีสอร์ท' } },
    { id: 'guesthouse', icon: <Home className="h-5 w-5" />, label: { en: 'Guesthouse', th: 'เกสต์เฮาส์' } },
    { id: 'bungalow', icon: <Tent className="h-5 w-5" />, label: { en: 'Bungalow', th: 'บังกะโล' } },
  ];
  
  const amenities = [
    { id: 'wifi', icon: <Wifi className="h-4 w-4" />, label: { en: 'Wi-Fi', th: 'ไวไฟ' } },
    { id: 'restaurant', icon: <Utensils className="h-4 w-4" />, label: { en: 'Restaurant', th: 'ร้านอาหาร' } },
    { id: 'pool', icon: <Bath className="h-4 w-4" />, label: { en: 'Pool', th: 'สระว่ายน้ำ' } },
    { id: 'ac', icon: <AirVent className="h-4 w-4" />, label: { en: 'A/C', th: 'แอร์' } },
    { id: 'parking', icon: <Car className="h-4 w-4" />, label: { en: 'Parking', th: 'ที่จอดรถ' } },
  ];
  
  const areas = [
    { id: 'klong-dao', label: { en: 'Klong Dao', th: 'คลองเดา' } },
    { id: 'long-beach', label: { en: 'Long Beach', th: 'หาดยาว' } },
    { id: 'klong-khong', label: { en: 'Klong Khong', th: 'คลองข่อง' } },
    { id: 'klong-nin', label: { en: 'Klong Nin', th: 'คลองนิน' } },
    { id: 'kantiang-bay', label: { en: 'Kantiang Bay', th: 'อ่าวกันตัง' } },
  ];

  // Sample accommodations data
  const accommodations: Accommodation[] = [
    {
      id: 'acc1',
      name: { en: 'Lanta Sand Resort', th: 'แลนตา แซนด์ รีสอร์ท' },
      description: {
        en: 'A beachfront resort on Klong Dao Beach with modern facilities and spacious rooms.',
        th: 'รีสอร์ทริมชายหาดบนหาดคลองเดาพร้อมสิ่งอำนวยความสะดวกทันสมัยและห้องพักกว้างขวาง'
      },
      type: 'resort',
      location: {
        area: 'klong-dao',
        coordinates: [7.6423, 99.0295]
      },
      priceRange: [100, 250],
      rating: 4.5,
      amenities: ['wifi', 'restaurant', 'pool', 'ac', 'parking'],
      images: ['https://ik.imagekit.io/insomnialz/kohLanta-img/new-lanta-img/beachfront-resort-kohlanta.jpg', 'https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-beach.jpg']
    },
    {
      id: 'acc2',
      name: { en: 'Long Beach Chalet', th: 'ลองบีช ชาเล่ต์' },
      description: {
        en: 'Cozy bungalows located on the beautiful Long Beach with garden views.',
        th: 'บังกะโลที่แสนสบายตั้งอยู่บนหาดยาวอันสวยงามพร้อมวิวสวน'
      },
      type: 'bungalow',
      location: {
        area: 'long-beach',
        coordinates: [7.6122, 99.0331]
      },
      priceRange: [40, 80],
      rating: 4.2,
      amenities: ['wifi', 'ac'],
      images: ['https://ik.imagekit.io/insomnialz/kohLanta-img/sunset-kohlanta.jpg', 'https://ik.imagekit.io/insomnialz/kohLanta-img/Kantiang-Bay-Beach.jpg']
    },
    {
      id: 'acc3',
      name: { en: 'Kantiang View Resort', th: 'กันตัง วิว รีสอร์ท' },
      description: {
        en: 'Luxury resort overlooking Kantiang Bay with infinity pool and spa facilities.',
        th: 'รีสอร์ทหรูเหนืออ่าวกันตังพร้อมสระว่ายน้ำอินฟินิตี้และสปา'
      },
      type: 'resort',
      location: {
        area: 'kantiang-bay',
        coordinates: [7.5241, 99.0729]
      },
      priceRange: [150, 300],
      rating: 4.8,
      amenities: ['wifi', 'restaurant', 'pool', 'ac', 'parking'],
      images: ['https://ik.imagekit.io/insomnialz/kohLanta-img/atardecer-en-la-bahia-kantiang-koh-lanta-tailandia-1024x546.webp', 'https://ik.imagekit.io/insomnialz/kohLanta-img/Kantiang-Bay-Beach.jpg']
    },
  ];
  
  const toggleType = (id: string) => {
    if (selectedType.includes(id)) {
      setSelectedType(selectedType.filter(t => t !== id));
    } else {
      setSelectedType([...selectedType, id]);
    }
  };
  
  const toggleAmenity = (id: string) => {
    if (selectedAmenities.includes(id)) {
      setSelectedAmenities(selectedAmenities.filter(a => a !== id));
    } else {
      setSelectedAmenities([...selectedAmenities, id]);
    }
  };
  
  const toggleArea = (id: string) => {
    if (selectedArea.includes(id)) {
      setSelectedArea(selectedArea.filter(a => a !== id));
    } else {
      setSelectedArea([...selectedArea, id]);
    }
  };
  
  const formatCurrency = (amount: number) => {
    return language === 'en' ? `$${amount}` : `฿${amount * 35}`;
  };
  
  // Filter accommodations based on selected criteria
  const filteredAccommodations = accommodations.filter(acc => {
    // Filter by price range
    if (acc.priceRange[0] > priceRange[1] || acc.priceRange[1] < priceRange[0]) {
      return false;
    }
    
    // Filter by type
    if (selectedType.length > 0 && !selectedType.includes(acc.type)) {
      return false;
    }
    
    // Filter by area
    if (selectedArea.length > 0 && !selectedArea.includes(acc.location.area)) {
      return false;
    }
    
    // Filter by amenities
    if (selectedAmenities.length > 0) {
      return selectedAmenities.every(amenity => acc.amenities.includes(amenity));
    }
    
    return true;
  });

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/3">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">{t('plan.accommodation.priceRange')}</h3>
            <div className="mb-2 text-sm">
              {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])} {t('plan.accommodation.perNight')}
            </div>
            <Slider 
              defaultValue={priceRange} 
              min={10} 
              max={500} 
              step={10} 
              onValueChange={(values) => setPriceRange(values as [number, number])}
              className="py-4"
            />
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">{t('plan.accommodation.type')}</h3>
            <div className="grid grid-cols-2 gap-2">
              {accommodationTypes.map(type => (
                <button
                  key={type.id}
                  onClick={() => toggleType(type.id)}
                  className={`flex items-center gap-2 p-3 rounded-md transition-all ${
                    selectedType.includes(type.id)
                      ? 'bg-primary/10 border border-primary'
                      : 'border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {type.icon}
                  <span>{type.label[language]}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">{t('plan.accommodation.amenities')}</h3>
            <div className="flex flex-wrap gap-2">
              {amenities.map(amenity => (
                <button
                  key={amenity.id}
                  onClick={() => toggleAmenity(amenity.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all ${
                    selectedAmenities.includes(amenity.id)
                      ? 'bg-primary/10 border border-primary'
                      : 'border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {amenity.icon}
                  <span>{amenity.label[language]}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">{t('plan.accommodation.areas')}</h3>
            <div className="space-y-2">
              {areas.map(area => (
                <button
                  key={area.id}
                  onClick={() => toggleArea(area.id)}
                  className={`flex items-center w-full gap-2 px-3 py-2 rounded-md text-sm transition-all ${
                    selectedArea.includes(area.id)
                      ? 'bg-primary/10 border border-primary'
                      : 'border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <MapIcon className="h-4 w-4" />
                  <span>{area.label[language]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-2/3">
          <div className="border p-4 rounded-lg mb-6 bg-gray-50">
            <div className="text-center">
              <MapIcon className="h-6 w-6 mx-auto mb-2 text-gray-400" />
              <p className="text-gray-500">{t('plan.accommodation.mapPlaceholder')}</p>
              <Button variant="outline" className="mt-2">
                {t('plan.accommodation.viewMap')}
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredAccommodations.length === 0 ? (
              <div className="text-center p-12 border-2 border-dashed rounded-lg">
                <Bed className="h-12 w-12 mx-auto text-gray-300" />
                <h3 className="mt-4 text-xl font-medium">{t('plan.accommodation.noResults')}</h3>
                <p className="text-gray-500 mt-2">{t('plan.accommodation.tryAdjusting')}</p>
              </div>
            ) : (
              filteredAccommodations.map(acc => (
                <Card key={acc.id}>
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 h-48 relative">
                        <img 
                          src={acc.images[0]} 
                          alt={acc.name[language]} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-xs">
                          {formatCurrency(acc.priceRange[0])}+
                        </div>
                      </div>
                      <div className="p-4 w-full md:w-2/3">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold">{acc.name[language]}</h3>
                          <div className="bg-primary text-white px-2 py-1 rounded-md">
                            {acc.rating}/5
                          </div>
                        </div>
                        
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <MapIcon className="h-4 w-4 mr-1" />
                          {areas.find(a => a.id === acc.location.area)?.label[language]}
                        </div>
                        
                        <p className="my-3 text-sm">
                          {acc.description[language]}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {acc.amenities.map(amenityId => {
                            const amenity = amenities.find(a => a.id === amenityId);
                            return amenity ? (
                              <div key={amenityId} className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                                {amenity.icon}
                                <span className="ml-1">{amenity.label[language]}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-lg font-bold">
                              {formatCurrency(acc.priceRange[0])} - {formatCurrency(acc.priceRange[1])}
                            </span>
                            <span className="text-sm text-gray-500"> / {t('plan.accommodation.night')}</span>
                          </div>
                          <Button>
                            {t('plan.accommodation.viewDetails')}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationFinder;
