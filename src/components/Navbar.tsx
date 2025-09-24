import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Button } from './ui/button';
import twinsSalonLogo from 'figma:asset/bd3844a578c3e705817bc03a929132b20b65a329.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', key: 'nav.home' },
    { path: '/about', key: 'nav.about' },
    { path: '/services', key: 'nav.services' },
    { path: '/gallery', key: 'nav.gallery' },
    { path: '/booking', key: 'nav.booking' },
    { path: '/blog', key: 'nav.blog' },
    { path: '/contact', key: 'nav.contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={twinsSalonLogo} 
                alt="Twins Salon Logo" 
                className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-gray-900 text-lg group-hover:text-pink-600 transition-colors duration-300">Twins Salon</div>
              <div className="text-xs text-pink-600 font-medium">{t('hero.slogan')}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-pink-600 ${
                  location.pathname === link.path
                    ? 'text-pink-600 font-medium'
                    : 'text-gray-700'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-pink-600"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{language}</span>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md transition-colors hover:bg-pink-50 hover:text-pink-600 ${
                    location.pathname === link.path
                      ? 'text-pink-600 bg-pink-50 font-medium'
                      : 'text-gray-700'
                  }`}
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}