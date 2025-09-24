import React from 'react';
import { Award, Heart, Users, Clock, Star, Sparkles, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { DynamicHero } from '../DynamicHero';

export function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('about.values.excellence'),
      titleFr: 'Excellence',
      description: t('about.values.excellence.desc'),
      descFr: 'Nous nous efforçons d\'atteindre la perfection dans chaque service que nous fournissons, en utilisant uniquement des produits et techniques de la plus haute qualité.'
    },
    {
      icon: Heart,
      title: t('about.values.care'),
      titleFr: 'Bienveillance',
      description: t('about.values.care.desc'),
      descFr: 'Votre satisfaction et votre confort sont nos priorités absolues. Nous écoutons vos besoins et dépassons vos attentes.'
    },
    {
      icon: Users,
      title: t('nav.home') === 'Accueil' ? 'Équipe Professionnelle' : 'Professional Team',
      description: t('nav.home') === 'Accueil' 
        ? 'Nos stylistes talentueux et experts en beauté sont formés aux dernières tendances et techniques.'
        : 'Our skilled stylists and beauty experts are trained in the latest trends and techniques.'
    },
    {
      icon: Clock,
      title: t('nav.home') === 'Accueil' ? 'Fiabilité' : 'Reliability',
      description: t('nav.home') === 'Accueil'
        ? 'Nous respectons votre temps et nous assurons que chaque rendez-vous se déroule sans problème et à l\'heure.'
        : 'We respect your time and ensure every appointment runs smoothly and on schedule.'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Thompson',
      role: t('nav.home') === 'Accueil' ? 'Styliste Maître & Co-Propriétaire' : 'Master Stylist & Co-Owner',
      specialties: t('nav.home') === 'Accueil' ? 'Coupe, Coloration, Coiffures de Mariage' : 'Hair Cutting, Coloring, Wedding Styles',
      experience: t('nav.home') === 'Accueil' ? '12 années' : '12 years',
      image: 'https://images.unsplash.com/photo-1562940215-4314619607a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyJTIwc3R5bGlzdCUyMHNhbG9uJTIwdGVhbXxlbnwxfHx8fDE3NTg2MzU3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Emma Rodriguez',
      role: t('nav.home') === 'Accueil' ? 'Artiste Maquillage Senior' : 'Senior Makeup Artist',
      specialties: t('nav.home') === 'Accueil' ? 'Maquillage Mariée, Événements, Séances Photo' : 'Bridal Makeup, Special Events, Photoshoots',
      experience: t('nav.home') === 'Accueil' ? '8 années' : '8 years',
      image: 'https://images.unsplash.com/photo-1606158436222-1896b18c5d25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBhcHBseWluZyUyMGNvc21ldGljc3xlbnwxfHx8fDE3NTg3MjAwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Lisa Chen',
      role: t('nav.home') === 'Accueil' ? 'Spécialiste Spa & Soins du Visage' : 'Spa & Skincare Specialist',
      specialties: t('nav.home') === 'Accueil' ? 'Soins du Visage, Traitements Anti-âge, Thérapie Relaxation' : 'Facials, Anti-aging Treatments, Relaxation Therapy',
      experience: t('nav.home') === 'Accueil' ? '10 années' : '10 years',
      image: 'https://images.unsplash.com/photo-1672015521020-ab4f86d5cc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMG1hc3NhZ2UlMjByZWxheGF0aW9ufGVufDF8fHx8MTc1ODcyMDA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Maria Gonzalez',
      role: t('nav.home') === 'Accueil' ? 'Artiste Ongles & Co-Propriétaire' : 'Nail Artist & Co-Owner',
      specialties: t('nav.home') === 'Accueil' ? 'Nail Art, Extensions Gel, Thérapie Pédicure' : 'Nail Art, Gel Extensions, Pedicure Therapy',
      experience: t('nav.home') === 'Accueil' ? '9 années' : '9 years',
      image: 'https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWFuaWN1cmUlMjBuYWlsJTIwYXJ0fGVufDF8fHx8MTc1ODcyMDA3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <DynamicHero
        title={t('about.title')}
        description={t('about.intro')}
        backgroundImage="https://images.unsplash.com/photo-1706973320004-98a2fe6ddb7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHRlYW0lMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc1ODcyMDA4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        height="h-[70vh] min-h-[500px]"
        overlay="gradient"
      />

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('nav.home') === 'Accueil' ? 'Notre Histoire' : 'Our Story'}
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                {t('nav.home') === 'Accueil' ? (
                  <>
                    <p>
                      Fondé en 2020 par les sœurs jumelles Sarah et Maria, Twins Salon est né d'une passion commune pour la beauté et le bien-être. En grandissant ensemble, elles ont toujours rêvé de créer un espace où les gens pourraient se sentir choyés, beaux et confiants.
                    </p>
                    <p>
                      Ce qui a commencé comme un petit salon de quartier est devenu une destination beauté de premier plan, grâce à notre engagement envers l'excellence et notre équipe extraordinaire de professionnels qualifiés. Nous croyons que la beauté ne consiste pas seulement à avoir une belle apparence, mais à se sentir bien de l'intérieur.
                    </p>
                    <p>
                      Aujourd'hui, Twins Salon continue d'évoluer, restant à l'avant-garde des tendances et techniques beauté tout en maintenant la touche personnelle et l'atmosphère chaleureuse qui nous rendent spéciaux.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Founded in 2020 by twin sisters Sarah and Maria, Twins Salon was born from a shared passion for beauty and wellness. Growing up together, they always dreamed of creating a space where people could feel pampered, beautiful, and confident.
                    </p>
                    <p>
                      What started as a small neighborhood salon has grown into a premier beauty destination, thanks to our commitment to excellence and our amazing team of skilled professionals. We believe that beauty is not just about looking good, but feeling great from the inside out.
                    </p>
                    <p>
                      Today, Twins Salon continues to evolve, staying at the forefront of beauty trends and techniques while maintaining the personal touch and warm atmosphere that makes us special.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl transform -rotate-3"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758188753373-5b01a0fc6d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc1ODcyMDA0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Twins Salon Interior"
                className="relative z-10 w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('nav.home') === 'Accueil' 
                ? 'Les principes qui guident tout ce que nous faisons chez Twins Salon'
                : 'The principles that guide everything we do at Twins Salon'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 bg-white border-0 h-full">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented professionals are here to make you look and feel your best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white border-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-pink-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Specialties:</span> {member.specialties}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Experience:</span> {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            {t('about.mission')}
          </h2>
          <p className="text-xl leading-relaxed text-pink-100">
            {t('about.mission.text')} We are committed to providing exceptional service in a welcoming environment where every client feels valued, beautiful, and confident. Our goal is to enhance your natural beauty while ensuring you have a relaxing and enjoyable experience every time you visit us.
          </p>
        </div>
      </section>
    </div>
  );
}