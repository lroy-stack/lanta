
import { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Image, Map, Flag, Sun, Eye, Star } from 'lucide-react';

const SectionNav = () => {
  const { t, language } = useLanguage();
  const [activeSection, setActiveSection] = useState('beaches');
  const navRef = useRef<HTMLDivElement>(null);
  
  // Add translations
  const translations = {
    'discover.nav.beaches': {
      en: 'Beaches',
      th: 'ชายหาด',
    },
    'discover.nav.nature': {
      en: 'Nature & Wildlife',
      th: 'ธรรมชาติและสัตว์ป่า',
    },
    'discover.nav.culture': {
      en: 'Cultural Heritage',
      th: 'มรดกทางวัฒนธรรม',
    },
    'discover.nav.hidden': {
      en: 'Hidden Gems',
      th: 'สถานที่ลับ',
    },
    'discover.nav.stories': {
      en: 'Visual Stories',
      th: 'เรื่องราวภาพ',
    },
  };

  // Get translation function
  const getT = (key: string): string => {
    return translations[key as keyof typeof translations]?.[language] || key;
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beaches', 'nature', 'culture', 'hidden-gems', 'stories'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navItems = [
    { id: 'beaches', icon: <Image className="w-5 h-5" />, label: getT('discover.nav.beaches') },
    { id: 'nature', icon: <Star className="w-5 h-5" />, label: getT('discover.nav.nature') },
    { id: 'culture', icon: <Flag className="w-5 h-5" />, label: getT('discover.nav.culture') },
    { id: 'hidden-gems', icon: <Eye className="w-5 h-5" />, label: getT('discover.nav.hidden') },
    { id: 'stories', icon: <Sun className="w-5 h-5" />, label: getT('discover.nav.stories') }
  ];

  return (
    <div 
      ref={navRef}
      className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-primary/10"
    >
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-2 md:space-x-8 overflow-x-auto horizontal-scrollbar px-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex flex-col md:flex-row items-center px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap
                ${activeSection === item.id ? 
                  'bg-primary/10 text-primary font-medium' : 
                  'hover:bg-primary/5 text-dark/70 hover:text-primary'
                }
                ${language === 'th' ? 'font-noto-thai' : ''}
              `}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(item.id);
                window.history.pushState(null, '', `#${item.id}`);
              }}
            >
              <span className="mb-1 md:mb-0 md:mr-2">{item.icon}</span>
              <span className="text-xs md:text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionNav;
