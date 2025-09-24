import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { DynamicHero } from '../DynamicHero';

export function GalleryPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'hair',
      title: 'Blonde Transformation',
      image: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlcnxlbnwxfHx8fDE3NTg2MjcwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      category: 'makeup',
      title: 'Bridal Makeup',
      image: 'https://images.unsplash.com/photo-1553540751-988bd7918c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjB3ZWRkaW5nfGVufDF8fHx8MTc1ODYzNTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      category: 'nails',
      title: 'Colorful Nail Art',
      image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG5haWwlMjBhcnQlMjBkZXNpZ25zfGVufDF8fHx8MTc1ODYzNTg4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 4,
      category: 'spa',
      title: 'Relaxation Room',
      image: 'https://images.unsplash.com/photo-1700142360825-d21edc53c8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjByZWxheGF0aW9uJTIwdHJlYXRtZW50JTIwcm9vbXxlbnwxfHx8fDE3NTg2MzU4ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 5,
      category: 'hair',
      title: 'Curly Hair Styling',
      image: 'https://images.unsplash.com/photo-1599387737838-660b75526801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdldHRpbmclMjBoYWlyJTIwc3R5bGVkJTIwc2Fsb258ZW58MXx8fHwxNzU4NjM1Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 6,
      category: 'makeup',
      title: 'Evening Glam',
      image: 'https://images.unsplash.com/photo-1612883695890-f2ab22e65215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYWtldXAlMjBhcnRpc3QlMjB3b3JraW5nfGVufDF8fHx8MTc1ODYzNTY5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 7,
      category: 'spa',
      title: 'Facial Treatment',
      image: 'https://images.unsplash.com/photo-1643684460412-76908d8e5a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBmYWNpYWwlMjB0cmVhdG1lbnQlMjByZWxheGluZ3xlbnwxfHx8fDE3NTg2MzU3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 8,
      category: 'nails',
      title: 'French Manicure',
      image: 'https://images.unsplash.com/photo-1650176491728-a5e6edd08575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBzYWxvbnxlbnwxfHx8fDE3NTg2MzU3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 9,
      category: 'hair',
      title: 'Color Highlights',
      image: 'https://images.unsplash.com/photo-1562940215-4314619607a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyJTIwc3R5bGlzdCUyMHNhbG9uJTIwdGVhbXxlbnwxfHx8fDE3NTg2MzU3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'hair', label: 'Hair' },
    { key: 'makeup', label: 'Makeup' },
    { key: 'nails', label: 'Nails' },
    { key: 'spa', label: 'Spa' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <DynamicHero
        title={t('gallery.title')}
        subtitle={t('gallery.subtitle')}
        description={t('nav.home') === 'Accueil' 
          ? 'Explorez notre portfolio présentant de magnifiques transformations, des relookings époustouflants et l\'atmosphère relaxante de Twins Salon.'
          : 'Explore our portfolio showcasing beautiful transformations, stunning makeovers, and the relaxing atmosphere of Twins Salon.'
        }
        backgroundImage="https://images.unsplash.com/photo-1589554881500-01ef08d1c8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGdhbGxlcnklMjBwb3J0Zm9saW8lMjBzaG93Y2FzZXxlbnwxfHx8fDE3NTg3MjEyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        height="h-[70vh] min-h-[500px]"
        overlay="gradient"
      />

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 border-gray-300 hover:border-pink-300 hover:text-pink-600'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-w-4 aspect-h-5">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <p className="text-pink-200 capitalize transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-pink-600 text-sm font-medium rounded-full">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Amazing Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the incredible before and after results from our talented team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlcnxlbnwxfHx8fDE3NTg2MjcwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hair Transformation"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Complete Hair Makeover</h3>
                    <p className="text-gray-200">From dark to stunning blonde highlights</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1553540751-988bd7918c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjB3ZWRkaW5nfGVufDF8fHx8MTc1ODYzNTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Bridal Makeup Transformation"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Bridal Beauty</h3>
                    <p className="text-gray-200">Perfect wedding day look</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Book your appointment today and let our talented team create your perfect look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4">
              {t('hero.cta')}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4">
              View Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}