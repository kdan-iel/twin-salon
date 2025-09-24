import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { DynamicHero } from '../DynamicHero';
import { toast } from 'sonner@2.0.3';

export function BookingPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const services = [
    'Women\'s Haircut',
    'Men\'s Haircut', 
    'Hair Coloring',
    'Hair Highlights',
    'Blowout & Styling',
    'Bridal Makeup',
    'Event Makeup',
    'Natural Day Look',
    'European Facial',
    'Anti-Aging Treatment',
    'Relaxation Massage',
    'Classic Manicure',
    'Gel Manicure',
    'Spa Pedicure',
    'Bridal Package',
    'Pamper Day Package',
    'Girls Night Out Package'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.service || !formData.date || !formData.time || !formData.name || !formData.phone || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock submission
    toast.success('Booking request submitted! We will contact you within 24 hours to confirm your appointment.');
    
    // Reset form
    setFormData({
      service: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      email: '',
      notes: ''
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <DynamicHero
        title={t('booking.title')}
        subtitle={t('booking.subtitle')}
        description={t('nav.home') === 'Accueil' 
          ? 'Choisissez votre service préféré, la date et l\'heure, et nous nous occuperons du reste.'
          : 'Choose your preferred service, date, and time, and we\'ll take care of the rest.'
        }
        backgroundImage="https://images.unsplash.com/photo-1626383137804-ff908d2753a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxvbiUyMGFwcG9pbnRtZW50JTIwYm9va2luZyUyMGVsZWdhbnR8ZW58MXx8fHwxNzU4NzIxMjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        height="h-[70vh] min-h-[500px]"
        overlay="gradient"
      />

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-pink-50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Book Your Appointment
              </CardTitle>
              <p className="text-gray-600">
                Fill out the form below and we'll confirm your appointment within 24 hours
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5 text-pink-500" />
                    <span>{t('booking.form.service')} *</span>
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="h-12 border-gray-300 focus:border-pink-500">
                      <SelectValue placeholder="Choose a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-pink-500" />
                      <span>{t('booking.form.date')} *</span>
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className="h-12 border-gray-300 focus:border-pink-500"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-pink-500" />
                      <span>{t('booking.form.time')} *</span>
                    </Label>
                    <Select onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger className="h-12 border-gray-300 focus:border-pink-500">
                        <SelectValue placeholder="Select time..." />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 border-b border-pink-200 pb-2">
                    Personal Information
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="w-5 h-5 text-pink-500" />
                      <span>{t('booking.form.name')} *</span>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="w-5 h-5 text-pink-500" />
                        <span>{t('booking.form.phone')} *</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="h-12 border-gray-300 focus:border-pink-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-pink-500" />
                        <span>{t('booking.form.email')} *</span>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="flex items-center space-x-2">
                      <MessageSquare className="w-5 h-5 text-pink-500" />
                      <span>{t('booking.form.notes')}</span>
                    </Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="min-h-[100px] border-gray-300 focus:border-pink-500"
                      placeholder="Any special requests or notes..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
                  >
                    {t('booking.form.submit')}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Alternatives */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prefer to Call or Text?
            </h2>
            <p className="text-xl text-gray-600">
              You can also reach us directly using these methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Call Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team
                </p>
                <a 
                  href="tel:+15551234567" 
                  className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-gray-600 mb-4">
                  Quick booking via WhatsApp
                </p>
                <a 
                  href="https://wa.me/15551234567" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                >
                  Chat with us
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-4">
                  Send us your booking details
                </p>
                <a 
                  href="mailto:booking@twinssalon.com" 
                  className="text-pink-600 font-semibold hover:text-pink-700 transition-colors"
                >
                  booking@twinssalon.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Booking Policy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Confirmation</h4>
                  <p className="text-gray-600 mb-4">
                    All appointments require confirmation. We'll contact you within 24 hours to confirm your booking.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Cancellation</h4>
                  <p className="text-gray-600">
                    Please provide at least 24 hours notice for cancellations to avoid any charges.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Late Arrivals</h4>
                  <p className="text-gray-600 mb-4">
                    Please arrive 10 minutes early. Late arrivals may result in shortened service time.
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Payment</h4>
                  <p className="text-gray-600">
                    We accept cash, credit cards, and mobile payments. Payment is due at time of service.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}