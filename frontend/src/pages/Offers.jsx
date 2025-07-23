import React, { useState } from 'react';
import { Calendar, Clock, Gift, Percent, GraduationCap, Users } from 'lucide-react';
import { offersData } from '../mock';
import LazyImage from '../components/LazyImage';

const Offers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Offers', icon: <Gift className="h-5 w-5" /> },
    { id: 'time-based', label: 'Happy Hour', icon: <Clock className="h-5 w-5" /> },
    { id: 'loyalty', label: 'Loyalty Cards', icon: <Users className="h-5 w-5" /> },
    { id: 'combo', label: 'Combo Deals', icon: <Percent className="h-5 w-5" /> },
    { id: 'student', label: 'Student Deals', icon: <GraduationCap className="h-5 w-5" /> }
  ];

  const filteredOffers = selectedCategory === 'all' 
    ? offersData 
    : offersData.filter(offer => offer.type === selectedCategory);

  const getOfferIcon = (type) => {
    switch(type) {
      case 'time-based': return <Clock className="h-6 w-6" />;
      case 'loyalty': return <Users className="h-6 w-6" />;
      case 'combo': return <Percent className="h-6 w-6" />;
      case 'student': return <GraduationCap className="h-6 w-6" />;
      default: return <Gift className="h-6 w-6" />;
    }
  };

  const getDiscountBadge = (offer) => {
    if (offer.discount.includes('%')) {
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-gold text-coffee-dark">
          {offer.discount} OFF
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-coffee-medium text-white">
        {offer.discount}
      </span>
    );
  };

  return (
    <div className="offers-page">
      {/* Hero Section */}
      <section 
        className="section bg-gradient-to-r from-accent-gold to-accent-warm text-coffee-dark relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(240, 173, 78, 0.8), rgba(244, 189, 117, 0.8)), url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDB8fHx8MTc1MzI1MzI1OHww&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">Special Offers</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white drop-shadow-md">
            Discover amazing deals and save on your favorite coffee drinks and treats. 
            From happy hour specials to loyalty rewards, we've got something for everyone!
          </p>
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full text-coffee-dark font-semibold shadow-xl">
            <Gift className="h-5 w-5" />
            <span>Limited Time Offers Available</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-coffee-medium text-white shadow-lg'
                    : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="section bg-white">
        <div className="container">
          {filteredOffers.length === 0 ? (
            <div className="text-center py-12">
              <Gift className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No offers found</h3>
              <p className="text-text-secondary">Try selecting a different category</p>
            </div>
          ) : (
            <div className="grid grid-2 lg:grid-cols-3 gap-8">
              {filteredOffers.map((offer) => (
                <div key={offer.id} className="card group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Offer Image */}
                  <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <LazyImage
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes={[400, 600, 800]}
                      quality={85}
                    />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-warm rounded-lg text-coffee-dark">
                      {getOfferIcon(offer.type)}
                    </div>
                    {getDiscountBadge(offer)}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-coffee-medium transition-colors">
                    {offer.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {offer.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-sm text-text-secondary">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>
                        {offer.validUntil === 'ongoing' ? 'Ongoing' : `Until ${offer.validUntil}`}
                      </span>
                    </div>
                    <button className="btn btn-primary">
                      Claim Offer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Loyalty Program Highlight */}
      <section className="section bg-coffee-dark text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent-gold rounded-full text-coffee-dark mb-8">
              <Users className="h-10 w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Loyalty Program</h2>
            <p className="text-xl mb-8 text-cream-medium">
              Earn points with every purchase and unlock exclusive rewards, birthday treats, 
              and early access to new menu items.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-coffee-light bg-opacity-50 rounded-lg p-6">
                <div className="text-2xl font-bold text-accent-gold mb-2">1 Point</div>
                <div className="text-cream-medium">Per $1 Spent</div>
              </div>
              <div className="bg-coffee-light bg-opacity-50 rounded-lg p-6">
                <div className="text-2xl font-bold text-accent-gold mb-2">100 Points</div>
                <div className="text-cream-medium">Free Drink</div>
              </div>
              <div className="bg-coffee-light bg-opacity-50 rounded-lg p-6">
                <div className="text-2xl font-bold text-accent-gold mb-2">Birthday</div>
                <div className="text-cream-medium">Free Treat</div>
              </div>
            </div>
            <button className="btn btn-accent">
              Sign Up Today
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-cream-medium">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Never Miss a Deal</h2>
            <p className="text-lg text-text-secondary mb-8">
              Subscribe to our newsletter and be the first to know about new offers, 
              seasonal specials, and exclusive member-only deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee-medium"
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;