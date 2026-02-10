import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.booking': 'Booking',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Twins Salon',
    'hero.slogan': 'Everything Inside',
    'hero.subtitle': 'Your Beauty & Wellness Destination',
    'hero.cta': 'Book Now',
    
    // About Section
    'about.title': 'About Twins Salon',
    'about.intro': 'Welcome to Twins Salon, where beauty meets excellence. We are dedicated to providing you with the finest beauty and wellness services in an elegant, relaxing environment.',
    'about.mission': 'Our Mission',
    'about.mission.text': ' To beautify women, restore their confidence, let them know they are valuable, that they deserve to be honored and above all bring a smile to those who sometimes come to the salon feeling sad.',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Discover Our Excellence',
    'services.hairdressing': 'Hairdressing',
    'services.hairdressing.desc': 'Professional cuts, coloring, and styling for all hair types',
    'services.makeup': 'Makeup',
    'services.makeup.desc': 'Bridal, event, and professional makeup services',
    'services.skincare': 'Skincare & Spa',
    'services.skincare.desc': 'Rejuvenating facials, relaxation, and massage therapy',
    'services.nails': 'Nails',
    'services.nails.desc': 'Professional manicure, pedicure, and nail art',
    'services.cta': 'Discover Our Services',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.1': 'Amazing service! The team at Twins Salon made me feel like a queen. Highly recommend!',
    'testimonials.2': 'Professional, clean, and beautiful results every time. My go-to salon for all beauty needs.',
    'testimonials.3': 'The best salon experience I\'ve ever had. The attention to detail is exceptional.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Opening Hours',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    
    // Booking
    'booking.title': 'Book Your Appointment',
    'booking.subtitle': 'Schedule your beauty experience',
    'booking.form.service': 'Select Service',
    'booking.form.date': 'Select Date',
    'booking.form.time': 'Select Time',
    'booking.form.name': 'Full Name',
    'booking.form.phone': 'Phone Number',
    'booking.form.email': 'Email Address',
    'booking.form.notes': 'Additional Notes',
    'booking.form.submit': 'Book Appointment',
    
    // Footer
    'footer.slogan': 'Everything Inside',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    
    // Gallery
    'gallery.title': 'Our Gallery',
    'gallery.subtitle': 'Discover our creations and transformations',
    'gallery.filter.all': 'All',
    'gallery.filter.hair': 'Hair',
    'gallery.filter.makeup': 'Makeup',
    'gallery.filter.nails': 'Nails',
    'gallery.filter.spa': 'Spa',
    
    // Blog
    'blog.title': 'Beauty Blog',
    'blog.subtitle': 'Beauty tips, trends and inspiration',
    'blog.readMore': 'Read more',
    'blog.categories': 'Categories',
    'blog.recent': 'Recent posts',
    
    // About Page
    'about.team.title': 'Our Team',
    'about.team.subtitle': 'Passionate professionals at your service',
    'about.values.title': 'Our Values',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'We are committed to providing the highest quality services',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'We stay at the forefront of the latest trends and techniques',
    'about.values.care': 'Care',
    'about.values.care.desc': 'Your well-being and satisfaction are our absolute priority',
    
    // Services Page
    'services.pricing': 'Pricing',
    'services.duration': 'Duration',
    'services.bookService': 'Book this service',
    'services.popular': 'Popular',
    'services.detailed.title': 'Detailed Services',
    
    // Special Offers
    'offers.title': 'Special Opening Offers',
    'offers.subtitle': 'Book your first appointment and receive 20% off any service. New clients only.',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.gallery': 'Galerie',
    'nav.booking': 'Réservation',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Twins Salon',
    'hero.slogan': 'Tout à l\'Intérieur',
    'hero.subtitle': 'Votre Destination Beauté & Bien-être',
    'hero.cta': 'Réservez Maintenant',
    
    // About Section
    'about.title': 'À Propos de Twins Salon',
    'about.intro': 'Bienvenue chez Twins Salon, où la beauté rencontre l\'excellence. Nous nous consacrons à vous offrir les meilleurs services de beauté et de bien-être dans un environnement élégant et relaxant.',
    'about.mission': 'Notre Mission',
    'about.mission.text': 'Embellir les femmes, leur redonner confiance, leur faire savoir qu\'elles ont de la valeur, qu\'elles sont a honorer et surtout apporter du sourir a ces personnes qui parfois viennent triste au salon.',
    
    // Services
    'services.title': 'Nos Services',
    'services.subtitle': 'Découvrez Notre Excellence',
    'services.hairdressing': 'Coiffure',
    'services.hairdressing.desc': 'Coupes, colorations et coiffures professionnelles pour tous types de cheveux',
    'services.makeup': 'Maquillage',
    'services.makeup.desc': 'Services de maquillage pour mariées, événements et professionnel',
    'services.skincare': 'Soins du Visage & Spa',
    'services.skincare.desc': 'Soins du visage rajeunissants, relaxation et thérapie de massage',
    'services.nails': 'Ongles',
    'services.nails.desc': 'Manucure, pédicure et nail art professionnels',
    'services.cta': 'Découvrez Nos Services',
    
    // Testimonials
    'testimonials.title': 'Ce Que Disent Nos Clientes',
    'testimonials.1': 'Service incroyable ! L\'équipe de Twins Salon m\'a fait me sentir comme une reine. Je recommande vivement !',
    'testimonials.2': 'Professionnel, propre, et de beaux résultats à chaque fois. Mon salon de référence pour tous mes besoins beauté.',
    'testimonials.3': 'La meilleure expérience de salon que j\'aie jamais eue. L\'attention aux détails est exceptionnelle.',
    
    // Contact
    'contact.title': 'Nous Contacter',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'E-mail',
    'contact.hours': 'Heures d\'Ouverture',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le Message',
    
    // Booking
    'booking.title': 'Réservez Votre Rendez-vous',
    'booking.subtitle': 'Planifiez votre expérience beauté',
    'booking.form.service': 'Sélectionner le Service',
    'booking.form.date': 'Sélectionner la Date',
    'booking.form.time': 'Sélectionner l\'Heure',
    'booking.form.name': 'Nom Complet',
    'booking.form.phone': 'Numéro de Téléphone',
    'booking.form.email': 'Adresse E-mail',
    'booking.form.notes': 'Notes Supplémentaires',
    'booking.form.submit': 'Réserver le Rendez-vous',
    
    // Footer
    'footer.slogan': 'Tout à l\'Intérieur',
    'footer.rights': 'Tous droits réservés.',
    
    // Common
    'common.loading': 'Chargement...',
    'common.submit': 'Soumettre',
    'common.cancel': 'Annuler',
    
    // Gallery
    'gallery.title': 'Notre Galerie',
    'gallery.subtitle': 'Découvrez nos créations et transformations',
    'gallery.filter.all': 'Tout',
    'gallery.filter.hair': 'Coiffure',
    'gallery.filter.makeup': 'Maquillage',
    'gallery.filter.nails': 'Ongles',
    'gallery.filter.spa': 'Spa',
    
    // Blog
    'blog.title': 'Blog Beauté',
    'blog.subtitle': 'Conseils, tendances et inspirations beauté',
    'blog.readMore': 'Lire la suite',
    'blog.categories': 'Catégories',
    'blog.recent': 'Articles récents',
    
    // About Page
    'about.team.title': 'Notre Équipe',
    'about.team.subtitle': 'Des professionnels passionnés à votre service',
    'about.values.title': 'Nos Valeurs',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Nous nous engageons à fournir des services de la plus haute qualité',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Nous restons à la pointe des dernières tendances et techniques',
    'about.values.care': 'Bienveillance',
    'about.values.care.desc': 'Votre bien-être et votre satisfaction sont notre priorité absolue',
    
    // Services Page
    'services.pricing': 'Tarifs',
    'services.duration': 'Durée',
    'services.bookService': 'Réserver ce service',
    'services.popular': 'Populaire',
    'services.detailed.title': 'Services Détaillés',
    
    // Special Offers
    'offers.title': 'Offres Spéciales d\'Ouverture',
    'offers.subtitle': 'Réservez votre premier rendez-vous et bénéficiez de 20% de réduction sur tous nos services. Nouveaux clients uniquement.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}