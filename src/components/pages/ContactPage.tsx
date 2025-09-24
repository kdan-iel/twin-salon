import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { DynamicHero } from '../DynamicHero';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Mock submission
    toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      content: ['123 Beauty Street', 'Downtown, City 12345', 'United States'],
      action: 'https://maps.google.com',
      actionText: 'Get Directions'
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      content: ['+1 (555) 123-4567'],
      action: 'tel:+15551234567',
      actionText: 'Call Now'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: ['info@twinssalon.com', 'booking@twinssalon.com'],
      action: 'mailto:info@twinssalon.com',
      actionText: 'Send Email'
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      content: [
        'Monday - Saturday: 9:00 AM - 8:00 PM',
        'Sunday: 10:00 AM - 6:00 PM',
        'Closed on major holidays'
      ],
      action: null,
      actionText: null
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <DynamicHero
        title={t('contact.title')}
        description={t('nav.home') === 'Accueil' 
          ? 'Nous serions ravis de vous entendre ! Contactez-nous pour réservations, questions, ou juste pour dire bonjour.'
          : 'We\'d love to hear from you! Get in touch for bookings, questions, or just to say hello.'
        }
        backgroundImage="https://images.unsplash.com/photo-1710839006592-4fdfc6caca80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGNvbnRhY3QlMjBjb25zdWx0YXRpb24lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU4NzIxMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        height="h-[70vh] min-h-[500px]"
        overlay="gradient"
      />

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 bg-gradient-to-br from-white to-pink-50 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {info.title}
                          </h3>
                          {info.content.map((line, lineIndex) => (
                            <p key={lineIndex} className="text-gray-600 mb-1">
                              {line}
                            </p>
                          ))}
                          {info.action && (
                            <a
                              href={info.action}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium mt-2 transition-colors"
                            >
                              {info.actionText}
                              <Send className="w-4 h-4 ml-1" />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-pink-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {t('contact.form.title')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {t('contact.form.name')} *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="h-12 border-gray-300 focus:border-pink-500"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        {t('contact.form.email')} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="h-12 border-gray-300 focus:border-pink-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t('contact.form.message')} *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="min-h-[120px] border-gray-300 focus:border-pink-500"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Salon
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of downtown, we're easy to find and convenient to reach.
            </p>
          </div>

          {/* Mock Map */}
          <Card className="overflow-hidden shadow-xl border-0">
            <div className="h-96 bg-gray-300 flex items-center justify-center relative">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <MapPin className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Twins Salon
                </h3>
                <p className="text-gray-600 mb-4">
                  123 Beauty Street<br />
                  Downtown, City 12345
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300"
                >
                  Open in Google Maps
                  <Send className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Follow Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay connected and see our latest work on social media
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <span className="mt-3 text-gray-700 font-medium group-hover:text-pink-600 transition-colors">
                Instagram
              </span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Facebook className="w-8 h-8 text-white" />
              </div>
              <span className="mt-3 text-gray-700 font-medium group-hover:text-pink-600 transition-colors">
                Facebook
              </span>
            </a>

            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <span className="mt-3 text-gray-700 font-medium group-hover:text-pink-600 transition-colors">
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Do I need an appointment?',
                answer: 'Yes, we recommend booking an appointment to ensure availability. Walk-ins are welcome based on availability.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, all major credit cards, and mobile payments including Apple Pay and Google Pay.'
              },
              {
                question: 'Do you offer bridal packages?',
                answer: 'Yes! We offer comprehensive bridal packages including trials, wedding day services, and special group rates.'
              },
              {
                question: 'What should I bring to my appointment?',
                answer: 'Just bring yourself! We provide all necessary products and tools. For color services, please arrive with clean, dry hair.'
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white border-0 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}