import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DynamicHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  height?: string;
  overlay?: 'light' | 'dark' | 'gradient';
  textAlign?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
  logoSrc?: string;
  logoAlt?: string;
}

export function DynamicHero({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
  height = 'h-[70vh] min-h-[500px]',
  overlay = 'gradient',
  textAlign = 'center',
  children,
  logoSrc,
  logoAlt
}: DynamicHeroProps) {
  const overlayClasses = {
    light: 'bg-white/60',
    dark: 'bg-black/50',
    gradient: 'bg-gradient-to-r from-pink-600/40 via-purple-600/30 to-pink-600/40'
  };

  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={backgroundImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 text-white max-w-6xl mx-auto px-4 ${textAlignClasses[textAlign]}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {logoSrc && (
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.5, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                <ImageWithFallback
                  src={logoSrc}
                  alt={logoAlt || "Logo"}
                  className="relative z-10 w-32 h-32 md:w-40 md:h-40 object-contain filter drop-shadow-2xl"
                />
              </div>
            </motion.div>
          )}
          
          {subtitle && (
            <motion.p 
              className="text-lg md:text-xl mb-4 text-pink-200 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: logoSrc ? 0.6 : 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: logoSrc ? 0.8 : 0.6 }}
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: logoSrc ? 1.0 : 0.8 }}
            >
              {description}
            </motion.p>
          )}
          
          {ctaText && ctaLink && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: logoSrc ? 1.2 : 1.0 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          )}
          
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: logoSrc ? 1.4 : 1.2 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg animate-bounce delay-500"></div>
    </section>
  );
}