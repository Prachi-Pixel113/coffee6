import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Coffee, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonialsData } from '../mock';
import { useCart } from '../contexts/CartContext';
import LazyImage from '../components/LazyImage';
import HeroCarousel from '../components/HeroCarousel';
import { performanceMonitor } from '../utils/performanceMonitor';
import { 
  AnimatedSection, 
  fadeInUpVariants, 
  fadeInLeftVariants, 
  fadeInRightVariants,
  staggerContainerVariants,
  staggerItemVariants 
} from '../hooks/useScrollAnimation';

const Home = () => {
  const { addToCart } = useCart();
  
  // Performance monitoring
  React.useEffect(() => {
    performanceMonitor.mark('home-page-start');
    
    return () => {
      performanceMonitor.mark('home-page-end');
      performanceMonitor.measure('home-page-render', 'home-page-start', 'home-page-end');
    };
  }, []);
  
  // Hero carousel images with optimized data
  const heroImages = useMemo(() => [
    {
      src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzUzMTYzODg4fDA&ixlib=rb-4.1.0&q=85",
      alt: "Modern coffee shop interior with comfortable seating"
    },
    {
      src: "https://images.unsplash.com/photo-1562235681-74f0c27da49f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxiYXJpc3RhJTIwcG91cmluZyUyMGNvZmZlZXxlbnwwfHx8fDE3NTMxNjM4OTZ8MA&ixlib=rb-4.1.0&q=85",
      alt: "Professional barista creating perfect coffee"
    },
    {
      src: "https://images.unsplash.com/photo-1675306408031-a9aad9f23308?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3NTMxNjM5MDZ8MA&ixlib=rb-4.1.0&q=85",
      alt: "Premium coffee beans ready for brewing"
    }
  ], []);
  
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
      {/* Hero Section - Enhanced with Optimized Carousel */}
      <section id="hero" className="relative text-white overflow-hidden hero-enhanced min-h-screen group">
        {/* Optimized Hero Carousel */}
        <HeroCarousel images={heroImages} autoPlayInterval={6000} />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="coffee-pattern"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative container h-full z-10">
          <div className="flex items-center justify-between min-h-screen py-20">
            {/* Left Content */}
            <motion.div 
              className="max-w-3xl space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainerVariants}
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                variants={staggerItemVariants}
              >
                <Award className="h-4 w-4 text-yellow-300 mr-2" />
                <span className="text-yellow-200 text-sm font-medium">Premium Coffee Experience</span>
              </motion.div>
              
              {/* Enhanced Typography */}
              <motion.div className="space-y-6" variants={staggerItemVariants}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block text-4xl md:text-5xl lg:text-6xl text-white/90 font-semibold mb-2">Welcome to</span>
                  <span className="text-gradient-hero-light">Brew Haven</span>
                </h1>
                
                <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                  Where Every Cup Tells a Story
                </p>
                
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                  Discover the perfect blend of premium coffee beans, artisanal brewing methods, and cozy atmosphere. Your journey to coffee perfection starts here.
                </p>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-6"
                variants={staggerItemVariants}
              >
                <Link to="/coffee-shop" className="btn btn-primary-hero group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    <Coffee className="mr-3 h-5 w-5" />
                    Explore Our Menu
                    <ArrowRight className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-all duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-gold to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link to="/about" className="btn btn-secondary-hero group relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    <Award className="mr-3 h-5 w-5" />
                    Learn Our Story
                  </span>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Visual Elements */}
            <motion.div 
              className="hidden lg:block absolute right-20 top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="floating-card bg-white/15 backdrop-blur-lg p-6 rounded-2xl border border-white/30">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Coffee className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Fresh Roasted Daily</div>
                    <div className="text-gray-200 text-sm">Premium Quality Guaranteed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with Scroll Animations */}
      <AnimatedSection 
        id="features"
        className="section bg-white"
        variants={fadeInUpVariants}
      >
        <div className="container">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left Side - Content */}
            <motion.div className="space-y-8" variants={fadeInLeftVariants}>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Brew Haven?</h2>
                <p className="text-lg text-text-secondary max-w-2xl">
                  We're passionate about delivering an exceptional coffee experience that goes beyond just great taste.
                </p>
              </div>
              
              {/* Feature Points with Stagger Animation */}
              <motion.div 
                className="space-y-6"
                variants={staggerContainerVariants}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4 group"
                    variants={staggerItemVariants}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-14 h-14 bg-accent-warm rounded-full flex items-center justify-center text-coffee-dark transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-coffee-dark">{feature.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Additional Benefits */}
              <motion.div 
                className="bg-cream-dark rounded-2xl p-6 mt-8"
                variants={staggerItemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-accent-gold" />
                  <h4 className="text-lg font-semibold text-coffee-dark">Our Promise</h4>
                </div>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <span>Ethically sourced coffee beans from verified farms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <span>Freshly roasted in small batches for optimal flavor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <span>Expertly trained baristas committed to perfection</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            
            {/* Right Side - Image with Lazy Loading */}
            <motion.div 
              className="relative"
              variants={fadeInRightVariants}
            >
              <div className="relative z-10">
                <LazyImage 
                  src="https://images.unsplash.com/photo-1532713107108-dfb5d8d2fc42?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxiYXJpc3RhfGVufDB8fHx8MTc1MzE2NTExNHww&ixlib=rb-4.1.0&q=85"
                  alt="Professional barista creating latte art - showcasing our commitment to quality and craftsmanship"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                
                {/* Floating Stats Card */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-coffee-medium">10+</div>
                      <div className="text-sm text-text-secondary">Years Experience</div>
                    </div>
                    <div className="w-px h-12 bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-coffee-medium">500+</div>
                      <div className="text-sm text-text-secondary">Happy Customers</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent-warm rounded-full opacity-20"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-coffee-light rounded-full opacity-10"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0] 
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Quick Menu Preview with Animations */}
      <AnimatedSection 
        id="featured-menu"
        className="section bg-white" 
        variants={fadeInUpVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Favorites</h2>
            <p className="text-lg text-text-secondary">
              Discover our most popular coffee creations
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {featuredItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="card group"
                variants={staggerItemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                  <LazyImage 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                    priority={index === 0} // Prioritize first image
                    quality={85}
                    sizes={[400, 600, 800]}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-text-secondary mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-coffee-medium">${item.price.toFixed(2)}</span>
                  <motion.button 
                    onClick={() => addToCart(item)}
                    className="btn btn-primary hover:bg-coffee-dark transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/coffee-shop" className="btn btn-secondary">
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Testimonials with Scroll Animations */}
      <AnimatedSection 
        id="testimonials"
        className="section bg-cream-dark" 
        variants={fadeInUpVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-lg text-text-secondary">
              Don't just take our word for it - hear from our coffee community
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonialsData.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className="card"
                variants={staggerItemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <motion.div 
                  className="flex mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 + i * 0.1, type: "spring" }}
                    >
                      <Star className="h-5 w-5 text-accent-gold fill-current" />
                    </motion.div>
                  ))}
                </motion.div>
                <p className="text-text-secondary mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <motion.div 
                    className="w-12 h-12 bg-accent-warm rounded-full flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-coffee-dark font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section with Parallax Effect */}
      <motion.section 
        id="cta"
        className="section bg-coffee-medium text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Parallax Background Effect */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Brew Haven?</h2>
            <p className="text-xl mb-8 text-cream-medium">
              Visit us today and discover why we're the neighborhood's favorite coffee destination
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/coffee-shop" className="btn btn-accent">
                Order Online
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/about" className="btn btn-secondary">
                Find Our Location
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;