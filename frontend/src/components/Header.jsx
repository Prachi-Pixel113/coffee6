import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee, ShoppingCart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../contexts/CartContext';
import { useSmoothScroll, useScrollPosition } from '../hooks/useSmoothScroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollNav, setShowScrollNav] = useState(false);
  const location = useLocation();
  const { getCartItemCount, getCartTotal } = useCart();
  const { scrollToElement } = useSmoothScroll();
  const { scrollPosition } = useScrollPosition();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/offers', label: 'Offers' },
    { path: '/coffee-shop', label: 'Coffee Shop' },
  ];

  // Home page section navigation
  const homeNavItems = [
    { id: 'hero', label: 'Home' },
    { id: 'features', label: 'Why Us' },
    { id: 'featured-menu', label: 'Menu' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'cta', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  // Show/hide scroll navigation based on scroll position
  useEffect(() => {
    setShowScrollNav(scrollPosition > 100);
  }, [scrollPosition]);

  const handleSmoothScroll = (elementId) => {
    if (isHomePage) {
      scrollToElement(elementId, 80); // 80px offset for fixed header
    }
  };

  return (
    <motion.header 
      className={`
        bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100 backdrop-blur-md
        ${scrollPosition > 50 ? 'bg-white/95' : 'bg-white'}
      `}
      animate={{
        boxShadow: scrollPosition > 50 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
          : '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-coffee-dark">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Coffee className="h-8 w-8 text-coffee-medium" />
            </motion.div>
            <span>Brew Haven</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-1">
            {/* Main Navigation */}
            <div className="flex items-center space-x-8 ml-8">
              {isHomePage && showScrollNav ? (
                // Show smooth scroll navigation on home page
                <div className="flex items-center space-x-6">
                  {homeNavItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSmoothScroll(item.id)}
                      className="text-sm font-medium transition-colors hover:text-coffee-medium text-gray-600 hover:scale-105"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              ) : (
                // Show regular navigation
                navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium transition-colors hover:text-coffee-medium ${
                        isActive(item.path)
                          ? 'text-coffee-medium border-b-2 border-coffee-medium pb-1'
                          : 'text-gray-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))
              )}
            </div>

            {/* Right Side - Cart & Contact */}
            <div className="flex items-center space-x-4">
              {/* Cart Section */}
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {getCartItemCount() > 0 ? (
                  <Link 
                    to="/coffee-shop" 
                    className="relative flex items-center space-x-2 bg-coffee-light text-coffee-dark px-4 py-2 rounded-lg hover:bg-coffee-medium hover:text-white transition-all duration-300 shadow-sm"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="text-sm font-semibold">{getCartItemCount()} items</span>
                    <span className="text-sm font-bold text-coffee-dark">${getCartTotal().toFixed(2)}</span>
                    <motion.span 
                      className="absolute -top-2 -right-2 bg-coffee-dark text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.3 }}
                    >
                      {getCartItemCount()}
                    </motion.span>
                  </Link>
                ) : (
                  <Link 
                    to="/coffee-shop" 
                    className="flex items-center space-x-2 text-gray-400 px-4 py-2 rounded-lg border border-gray-200 hover:border-coffee-light hover:text-coffee-medium transition-all duration-300"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="text-sm">Cart</span>
                  </Link>
                )}
              </motion.div>

              {/* Contact Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact" className="btn btn-primary text-sm">
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-coffee-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden border-t border-gray-100 bg-white"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-coffee-medium bg-cream-medium'
                          : 'text-gray-600 hover:text-coffee-medium hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Cart Section */}
                <motion.div 
                  className="px-4 pt-2 border-t border-gray-100 mt-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {getCartItemCount() > 0 ? (
                    <Link
                      to="/coffee-shop"
                      className="flex items-center justify-between w-full p-3 bg-coffee-light text-coffee-dark rounded-lg hover:bg-coffee-medium hover:text-white transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="font-semibold">Cart ({getCartItemCount()} items)</span>
                      </div>
                      <span className="font-bold">${getCartTotal().toFixed(2)}</span>
                    </Link>
                  ) : (
                    <Link
                      to="/coffee-shop"
                      className="flex items-center space-x-2 w-full p-3 text-gray-400 border border-gray-200 rounded-lg hover:border-coffee-light hover:text-coffee-medium transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Cart (Empty)</span>
                    </Link>
                  )}
                </motion.div>

                <motion.div 
                  className="px-4 pt-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to="/contact"
                    className="btn btn-primary text-sm w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;