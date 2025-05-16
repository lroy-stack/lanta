
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLanguage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setLanguage(language === 'en' ? 'th' : 'en');
      setIsAnimating(false);
    }, 300);
  };

  const languageLabels = {
    en: {
      label: 'TH | ภาษาไทย',
      ariaLabel: 'Switch to Thai'
    },
    th: {
      label: 'EN | English',
      ariaLabel: 'Switch to English'
    }
  };

  return (
    <Button 
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="rounded-lg bg-white/80 backdrop-blur-sm px-3 py-2 text-sm font-medium text-dark shadow-sm hover:bg-white/90 transition-all duration-300"
      aria-label={languageLabels[language].ariaLabel}
    >
      <span className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {languageLabels[language].label}
      </span>
    </Button>
  );
};

export default LanguageToggle;
