import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', key: 'nav.home' },
    { path: '/services', key: 'nav.services' },
    { path: '/booking', key: 'nav.booking' },
    { path: '/contact', key: 'nav.contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">TS</span>
              </div>
              <div>
                <div className="font-bold text-white">Twins Salon</div>
                <div className="text-sm text-pink-300">{t('footer.slogan')}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('about.intro')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-pink-300 transition-colors text-sm"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 Beauty Street<br />
                  Downtown, City 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@twinssalon.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>Mon-Sat: 9:00 AM - 8:00 PM</div>
                  <div>Sun: 10:00 AM - 6:00 PM</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Twins Salon. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}