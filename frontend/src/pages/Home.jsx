import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Coffee, Users, Award } from 'lucide-react';
import { heroData, testimonialsData } from '../mock';
import { useCart } from '../contexts/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  
  // Featured favorites data with matching IDs from menuData
  const featuredItems = [
    {
      id: 3, // Caffe Latte ID from menuData
      name: "Signature Latte",
      description: "Our house blend with perfectly steamed milk and latte art",
      price: 4.75,
      image: "https://images.unsplash.com/photo-1531441802565-2948024f1b22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3NTMxNTk2Njh8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 6, // Cold Brew ID from menuData
      name: "Cold Brew Special", 
      description: "Smooth cold brew with your choice of milk or cream",
      price: 4.25,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxjb2ZmZWV8ZW58MHx8fHwxNzUzMTU5Njc0fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 1, // Classic Espresso ID from menuData
      name: "Espresso Perfection",
      description: "Rich, bold shots from our premium espresso blend", 
      price: 2.50,
      image: "https://images.unsplash.com/photo-1596018589878-217d8603c4c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3NTMxNTk2Njh8MA&ixlib=rb-4.1.0&q=85"
    }
  ];
  const features = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Carefully sourced beans from the world's best coffee regions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Baristas",
      description: "Our skilled team crafts every cup with passion and precision"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award Winning",
      description: "Recognized for excellence in coffee brewing and customer service"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden hero-animated">
        {/* Animated Coffee Background */}
        <div className="absolute inset-0">
          {/* Option 1: Video Background (when you have the video file) */}
          {/* <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/path-to-your-coffee-video.mp4" type="video/mp4" />
          </video> */}
          
          {/* Option 2: 3D Coffee Animation */}
          <div className="coffee-3d-scene">
            <div className="coffee-3d-container">
              {/* 3D Coffee Mug */}
              <div className="mug-3d">
                <div className="mug-body">
                  <div className="mug-inner"></div>
                  <div className="mug-coffee">
                    <div className="coffee-surface"></div>
                  </div>
                </div>
                <div className="mug-handle"></div>
                <div className="mug-shadow"></div>
              </div>
              
              {/* 3D Human Hand Animation */}
              <div className="hand-3d">
                <div className="hand-arm"></div>
                <div className="hand-palm">
                  <div className="coffee-pot">
                    <div className="pot-body"></div>
                    <div className="pot-spout"></div>
                    <div className="pot-handle"></div>
                  </div>
                </div>
                <div className="fingers">
                  <div className="finger finger-1"></div>
                  <div className="finger finger-2"></div>
                  <div className="finger finger-3"></div>
                  <div className="finger finger-4"></div>
                  <div className="thumb"></div>
                </div>
              </div>
              
              {/* 3D Coffee Stream */}
              <div className="coffee-stream-3d">
                <div className="stream-particle stream-1"></div>
                <div className="stream-particle stream-2"></div>
                <div className="stream-particle stream-3"></div>
                <div className="stream-particle stream-4"></div>
                <div className="stream-particle stream-5"></div>
              </div>
              
              {/* 3D Steam Effect */}
              <div className="steam-3d">
                <div className="steam-particle steam-p1"></div>
                <div className="steam-particle steam-p2"></div>
                <div className="steam-particle steam-p3"></div>
                <div className="steam-particle steam-p4"></div>
              </div>
            </div>
          </div>
          
          {/* Fallback static background */}
          <div 
            className="absolute inset-0 bg-cover bg-center fallback-bg"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1516036018940-b0159d2ab461?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwb3VyaW5nfGVufDB8fHx8MTc1MzE1NjQ0Mnww&ixlib=rb-4.1.0&q=85")',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark via-coffee-medium to-coffee-light opacity-80"></div>
        <div className="relative container">
          <div className="section flex items-center min-h-[90vh] lg:min-h-screen">
            <div className="max-w-2xl fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {heroData.title}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-cream-medium font-medium">
                {heroData.subtitle}
              </p>
              <p className="text-lg mb-8 text-cream-light leading-relaxed">
                {heroData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Link to="/coffee-shop" className="btn btn-accent inline-flex items-center justify-center group">
                  {heroData.cta}
                  <ArrowRight className="ml-1 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Learn Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Brew Haven?</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We're passionate about delivering an exceptional coffee experience that goes beyond just great taste.
            </p>
          </div>
          <div className="grid grid-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover-lift">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-warm rounded-full text-coffee-dark mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Menu Preview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Favorites</h2>
            <p className="text-lg text-text-secondary">
              Discover our most popular coffee creations
            </p>
          </div>
          <div className="grid grid-3 gap-8">
            <div className="card">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531441802565-2948024f1b22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3NTMxNTk2Njh8MA&ixlib=rb-4.1.0&q=85" 
                  alt="Signature Latte with beautiful latte art"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Signature Latte</h3>
              <p className="text-text-secondary mb-4">Our house blend with perfectly steamed milk and latte art</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-coffee-medium">$4.75</span>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
            <div className="card">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxjb2ZmZWV8ZW58MHx8fHwxNzUzMTU5Njc0fDA&ixlib=rb-4.1.0&q=85" 
                  alt="Cold Brew Special in glass cup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cold Brew Special</h3>
              <p className="text-text-secondary mb-4">Smooth cold brew with your choice of milk or cream</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-coffee-medium">$4.25</span>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
            <div className="card">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596018589878-217d8603c4c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3NTMxNTk2Njh8MA&ixlib=rb-4.1.0&q=85" 
                  alt="Espresso Perfection - premium espresso shots"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Espresso Perfection</h3>
              <p className="text-text-secondary mb-4">Rich, bold shots from our premium espresso blend</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-coffee-medium">$2.50</span>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/coffee-shop" className="btn btn-secondary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-cream-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-text-secondary">
              Don't just take our word for it - hear from our coffee community
            </p>
          </div>
          <div className="grid grid-3 gap-8">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-gold fill-current" />
                  ))}
                </div>
                <p className="text-text-secondary mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent-warm rounded-full flex items-center justify-center mr-4">
                    <span className="text-coffee-dark font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-coffee-medium text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Brew Haven?</h2>
          <p className="text-xl mb-8 text-cream-medium">
            Visit us today and discover why we're the neighborhood's favorite coffee destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/coffee-shop" className="btn btn-accent">
              Order Online
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Find Our Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;