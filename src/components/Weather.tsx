
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CloudSun, CloudRain } from 'lucide-react';
import { WeatherData } from '../types';

// Sample weather data (this would come from a real API in production)
const sampleWeatherData: WeatherData = {
  temp: 30,
  feelsLike: 32,
  humidity: 75,
  windSpeed: 8,
  condition: 'partly-cloudy',
  icon: 'cloud-sun',
};

const Weather: React.FC = () => {
  const { t, language } = useLanguage();
  const [weather, setWeather] = useState<WeatherData>(sampleWeatherData);
  const [isCelsius, setIsCelsius] = useState(true);

  // In a real app, we would fetch live weather data here
  useEffect(() => {
    // Simulate API call
    const fetchWeather = () => {
      // For demo purposes, we're using the sample data
      setWeather(sampleWeatherData);
    };

    fetchWeather();
    // Set up interval to refresh weather data every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Convert temperature between Celsius and Fahrenheit
  const getTemperature = () => {
    if (isCelsius) {
      return weather.temp;
    } else {
      return Math.round((weather.temp * 9/5) + 32);
    }
  };

  // Get weather icon based on condition
  const WeatherIcon = () => {
    switch(weather.condition) {
      case 'rainy':
        return <CloudRain className="w-16 h-16 text-blue-500" />;
      case 'partly-cloudy':
      default:
        return <CloudSun className="w-16 h-16 text-amber-400" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-light to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className={`text-center mb-8 ${language === 'th' ? 'font-noto-thai' : ''}`}>
          {t('weather.title')}
        </h2>
        
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <WeatherIcon />
                <div className="ml-4">
                  <div className="text-3xl font-bold">
                    {getTemperature()}
                    <span className="text-xl">
                      {isCelsius ? t('weather.celsius') : t('weather.fahrenheit')}
                    </span>
                  </div>
                  <div className={`text-sm text-gray-500 ${language === 'th' ? 'font-noto-thai' : ''}`}>
                    {language === 'en' ? 'Koh Lanta, Thailand' : 'เกาะลันตา, ประเทศไทย'}
                  </div>
                </div>
              </div>
              
              <div>
                <button 
                  onClick={() => setIsCelsius(!isCelsius)}
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                >
                  {isCelsius ? 'C° → F°' : 'F° → C°'}
                </button>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-gray-500 text-sm">{t('weather.temp')}</div>
                <div className="font-medium">{getTemperature()}{isCelsius ? '°C' : '°F'}</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm">{t('weather.humidity')}</div>
                <div className="font-medium">{weather.humidity}%</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm">{t('weather.wind')}</div>
                <div className="font-medium">{weather.windSpeed} km/h</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className={`text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
                {language === 'en' 
                  ? 'Currently sunny with some clouds. Perfect beach weather!' 
                  : 'ปัจจุบันแดดจัดมีเมฆบ้าง อากาศดีเหมาะกับการไปชายหาด!'}
              </div>
            </div>
          </div>
          
          <div className={`bg-primary/10 p-4 text-center text-sm ${language === 'th' ? 'font-noto-thai' : ''}`}>
            {language === 'en'
              ? 'Current Season: Dry Season (November - April)'
              : 'ฤดูกาลปัจจุบัน: ฤดูแล้ง (พฤศจิกายน - เมษายน)'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
