import React from 'react';
import { Coffee, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-cream-light">
      {/* Main Footer Content */}
      <div className="container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Coffee className="h-8 w-8 text-accent-gold" />
                <span className="text-xl font-bold">Brew Haven</span>
              </div>
              <p className="text-cream-medium text-sm leading-relaxed">
                Your premium destination for the finest coffee experience. 
                From bean to cup, we craft perfection in every sip.
              </p>
              <div className="flex space-x-4">
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
              <h4 className="text-lg font-semibold text-accent-gold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-cream-medium hover:text-white transition-colors text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-cream-medium hover:text-white transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/offers" className="text-cream-medium hover:text-white transition-colors text-sm">
                    Special Offers
                  </a>
                </li>
                <li>
                  <a href="/coffee-shop" className="text-cream-medium hover:text-white transition-colors text-sm">
                    Coffee Shop
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-accent-gold">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-accent-gold flex-shrink-0" />
                  <a 
                    href="mailto:hello@brewhaven.com" 
                    className="text-cream-medium hover:text-white transition-colors text-sm"
                  >
                    hello@brewhaven.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-accent-gold flex-shrink-0" />
                  <a 
                    href="tel:+1234567890" 
                    className="text-cream-medium hover:text-white transition-colors text-sm"
                  >
                    (123) 456-7890
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-accent-gold flex-shrink-0 mt-0.5" />
                  <span className="text-cream-medium text-sm">
                    123 Coffee Street<br />
                    Downtown, City 12345
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-accent-gold">Opening Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-cream-medium">Monday - Friday</span>
                  <span className="text-white">6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream-medium">Saturday</span>
                  <span className="text-white">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream-medium">Sunday</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-coffee-light py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream-medium text-sm">
              © 2024 Brew Haven. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-cream-medium hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-cream-medium hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-cream-medium hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;