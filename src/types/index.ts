
export interface HighlightItem {
  id: number;
  category: 'beaches' | 'activities' | 'food' | 'culture' | 'accommodation';
  imageUrl: string;
  name: {
    en: string;
    th: string;
  };
  description: {
    en: string;
    th: string;
  };
}

export interface WeatherData {
  temp: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  icon: string;
}

export interface MapLocation {
  id: number;
  name: {
    en: string;
    th: string;
  };
  category: 'beach' | 'restaurant' | 'accommodation' | 'activity' | 'landmark';
  position: {
    x: number;
    y: number;
  };
  description?: {
    en: string;
    th: string;
  };
}
