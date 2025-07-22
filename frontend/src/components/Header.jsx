import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartItemCount, getCartTotal } = useCart();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/offers', label: 'Offers' },
    { path: '/coffee-shop', label: 'Coffee Shop' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-coffee-dark">
            <Coffee className="h-8 w-8 text-coffee-medium" />
            <span>Brew Haven</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-coffee-medium ${
                  isActive(item.path)
                    ? 'text-coffee-medium border-b-2 border-coffee-medium pb-1'
                    : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Cart Button */}
            {getCartItemCount() > 0 && (
              <Link 
                to="/coffee-shop" 
                className="relative flex items-center space-x-2 text-coffee-dark hover:text-coffee-medium transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="text-sm font-medium">{getCartItemCount()}</span>
                <span className="absolute -top-2 -right-2 bg-coffee-medium text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              </Link>
            )}
            
            <Link to="/contact" className="btn btn-primary text-sm">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-coffee-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
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
              ))}
              <div className="px-4 pt-2">
                <Link
                  to="/contact"
                  className="btn btn-primary text-sm w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;