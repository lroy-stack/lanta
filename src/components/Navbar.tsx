
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="font-playfair font-bold text-2xl text-primary">Expor<span className="text-accent">Lanta</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="nav-link">{t('nav.home')}</Link>
          <Link to="/discover" className="nav-link">{t('nav.discover')}</Link>
          <Link to="/plan" className="nav-link">{t('nav.plan')}</Link>
          <Link to="/experiences" className="nav-link">{t('nav.experiences')}</Link>
          <Link to="/community" className="nav-link">{t('nav.community')}</Link>
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageToggle />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-4 p-2 rounded-md text-dark hover:bg-gray-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-slide-in-right">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <Link to="/" className="py-3 border-b border-gray-200" onClick={() => setMobileMenuOpen(false)}>{t('nav.home')}</Link>
            <Link to="/discover" className="py-3 border-b border-gray-200" onClick={() => setMobileMenuOpen(false)}>{t('nav.discover')}</Link>
            <Link to="/plan" className="py-3 border-b border-gray-200" onClick={() => setMobileMenuOpen(false)}>{t('nav.plan')}</Link>
            <Link to="/experiences" className="py-3 border-b border-gray-200" onClick={() => setMobileMenuOpen(false)}>{t('nav.experiences')}</Link>
            <Link to="/community" className="py-3" onClick={() => setMobileMenuOpen(false)}>{t('nav.community')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
