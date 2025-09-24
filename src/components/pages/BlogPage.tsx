import React, { useState } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { DynamicHero } from '../DynamicHero';

export function BlogPage() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Skincare Routine for Glowing Skin',
      excerpt: 'Discover the essential steps for achieving radiant, healthy skin with our expert-approved skincare routine.',
      image: 'https://images.unsplash.com/photo-1586212653598-40f9046fe5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBibG9nJTIwc2tpbmNhcmUlMjByb3V0aW5lfGVufDF8fHx8MTc1ODYzNTk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Lisa Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Skincare',
      featured: true
    },
    {
      id: 2,
      title: 'Hair Color Trends for 2024',
      excerpt: 'From balayage to bold colors, explore the hottest hair color trends that will dominate this year.',
      image: 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlcnxlbnwxfHx8fDE3NTg2MjcwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Sarah Thompson',
      date: '2024-01-12',
      readTime: '7 min read',
      category: 'Hair',
      featured: false
    },
    {
      id: 3,
      title: 'Bridal Beauty: Timeline and Tips',
      excerpt: 'Plan your perfect wedding look with our comprehensive bridal beauty timeline and expert advice.',
      image: 'https://images.unsplash.com/photo-1553540751-988bd7918c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjB3ZWRkaW5nfGVufDF8fHx8MTc1ODYzNTg3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Emma Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Bridal',
      featured: false
    },
    {
      id: 4,
      title: 'Nail Art Inspiration: Spring Designs',
      excerpt: 'Get inspired with beautiful spring nail art designs that will make your nails the center of attention.',
      image: 'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMG5haWwlMjBhcnQlMjBkZXNpZ25zfGVufDF8fHx8MTc1ODYzNTg4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Maria Gonzalez',
      date: '2024-01-08',
      readTime: '4 min read',
      category: 'Nails',
      featured: false
    },
    {
      id: 5,
      title: 'Self-Care Sunday: At-Home Spa Rituals',
      excerpt: 'Transform your home into a spa sanctuary with these relaxing self-care rituals and treatments.',
      image: 'https://images.unsplash.com/photo-1643684460412-76908d8e5a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBmYWNpYWwlMjB0cmVhdG1lbnQlMjByZWxheGluZ3xlbnwxfHx8fDE3NTg2MzU3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Lisa Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Wellness',
      featured: false
    },
    {
      id: 6,
      title: 'Makeup Must-Haves for Busy Women',
      excerpt: 'Streamline your beauty routine with these essential makeup products that every busy woman needs.',
      image: 'https://images.unsplash.com/photo-1612883695890-f2ab22e65215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYWtldXAlMjBhcnRpc3QlMjB3b3JraW5nfGVufDF8fHx8MTc1ODYzNTY5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      author: 'Emma Rodriguez',
      date: '2024-01-03',
      readTime: '8 min read',
      category: 'Makeup',
      featured: false
    }
  ];

  const categories = ['All', 'Skincare', 'Hair', 'Makeup', 'Nails', 'Bridal', 'Wellness'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock newsletter subscription
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <DynamicHero
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
        description={t('nav.home') === 'Accueil' 
          ? 'Restez au courant des derniers conseils beauté, tendances et conseils d\'experts de notre équipe professionnelle.'
          : 'Stay updated with the latest beauty tips, trends, and expert advice from our professional team.'
        }
        backgroundImage="https://images.unsplash.com/photo-1563721465847-e8f94d9e628d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBibG9nJTIwbWFnYXppbmUlMjBpbnNwaXJhdGlvbnxlbnwxfHx8fDE3NTg3MjEyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        height="h-[70vh] min-h-[500px]"
        overlay="gradient"
      />

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-gradient-to-r from-pink-500 to-pink-600 text-white mb-4">
                Featured Article
              </Badge>
            </div>
            <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-pink-50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-96 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-pink-600">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white w-fit">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 border-gray-300 hover:border-pink-300 hover:text-pink-600'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white border-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-pink-600">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <Button variant="ghost" size="sm" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-2">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Subscribe to our newsletter for the latest beauty tips, exclusive offers, and salon updates.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-pink-200 focus:bg-white/20"
              required
            />
            <Button type="submit" size="lg" className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Beauty Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Quick Beauty Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert advice you can use right now
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💧',
                title: 'Stay Hydrated',
                tip: 'Drink plenty of water for naturally glowing skin from within.'
              },
              {
                icon: '🌙',
                title: 'Beauty Sleep',
                tip: 'Get 7-8 hours of sleep for skin repair and rejuvenation.'
              },
              {
                icon: '☀️',
                title: 'Sun Protection',
                tip: 'Always wear SPF 30+ to prevent premature aging and damage.'
              },
              {
                icon: '🥗',
                title: 'Healthy Diet',
                tip: 'Eat antioxidant-rich foods for healthy hair, skin, and nails.'
              }
            ].map((tip, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-pink-50 border-0">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600">
                    {tip.tip}
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