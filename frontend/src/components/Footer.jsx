import React from 'react';
import { Coffee, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="bg-coffee-dark text-cream-light">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Coffee className="h-6 w-6 text-accent-gold" />
                <span className="text-xl font-semibold text-white">Brew Haven</span>
              </div>
              <p className="text-cream-medium text-sm leading-relaxed">
                Your premium coffee experience. From bean to cup, we craft perfection.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-cream-medium hover:text-accent-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-cream-medium hover:text-accent-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-cream-medium hover:text-accent-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-medium">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-cream-medium hover:text-white transition-colors text-sm">Home</a></li>
                <li><a href="/about" className="text-cream-medium hover:text-white transition-colors text-sm">About Us</a></li>
                <li><a href="/offers" className="text-cream-medium hover:text-white transition-colors text-sm">Special Offers</a></li>
                <li><a href="/coffee-shop" className="text-cream-medium hover:text-white transition-colors text-sm">Coffee Shop</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-white font-medium">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-accent-gold" />
                  <a href="mailto:hello@brewhaven.com" className="text-cream-medium hover:text-white transition-colors text-sm">
                    hello@brewhaven.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-accent-gold" />
                  <a href="tel:+1234567890" className="text-cream-medium hover:text-white transition-colors text-sm">
                    (123) 456-7890
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-accent-gold mt-0.5" />
                  <span className="text-cream-medium text-sm">
                    123 Coffee Street<br />
                    Downtown, City 12345
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h4 className="text-white font-medium">Hours</h4>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-cream-medium">Mon - Fri</span>
                  <span className="text-white">6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cream-medium">Saturday</span>
                  <span className="text-white">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cream-medium">Sunday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-coffee-light mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-medium text-sm">
              © 2024 Brew Haven. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-cream-medium hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-cream-medium hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-cream-medium hover:text-white transition-colors text-sm">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;