import React from 'react';
import { Coffee, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Footer Separator */}
      <div className="footer-separator bg-gradient-to-r from-accent-gold via-coffee-light to-accent-gold h-1"></div>
      
      <footer className="bg-coffee-dark text-cream-light relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="footer-pattern"></div>
        </div>
        
        {/* Main Footer Content */}
        <div className="container relative z-10">
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Brand Section - Enhanced */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center">
                    <Coffee className="h-6 w-6 text-coffee-dark" />
                  </div>
                  <span className="text-2xl font-bold text-white">Brew Haven</span>
                </div>
                <p className="text-cream-medium text-base leading-relaxed">
                  Your premium destination for the finest coffee experience. 
                  From bean to cup, we craft perfection in every sip.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-coffee-medium rounded-full flex items-center justify-center text-cream-medium hover:bg-accent-gold hover:text-coffee-dark transition-all duration-300 transform hover:scale-110">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-coffee-medium rounded-full flex items-center justify-center text-cream-medium hover:bg-accent-gold hover:text-coffee-dark transition-all duration-300 transform hover:scale-110">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-coffee-medium rounded-full flex items-center justify-center text-cream-medium hover:bg-accent-gold hover:text-coffee-dark transition-all duration-300 transform hover:scale-110">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links - Enhanced */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white border-b-2 border-accent-gold pb-2 inline-block">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/" className="text-cream-medium hover:text-accent-gold transition-all duration-300 text-base flex items-center group">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-cream-medium hover:text-accent-gold transition-all duration-300 text-base flex items-center group">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/offers" className="text-cream-medium hover:text-accent-gold transition-all duration-300 text-base flex items-center group">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Special Offers
                    </a>
                  </li>
                  <li>
                    <a href="/coffee-shop" className="text-cream-medium hover:text-accent-gold transition-all duration-300 text-base flex items-center group">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Coffee Shop
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info - Enhanced */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white border-b-2 border-accent-gold pb-2 inline-block">Contact Info</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 bg-coffee-medium rounded-full flex items-center justify-center group-hover:bg-accent-gold transition-colors">
                      <Mail className="h-5 w-5 text-accent-gold group-hover:text-coffee-dark" />
                    </div>
                    <div>
                      <p className="text-xs text-cream-medium/70 uppercase tracking-wide">Email</p>
                      <a 
                        href="mailto:hello@brewhaven.com" 
                        className="text-cream-light hover:text-accent-gold transition-colors text-base"
                      >
                        hello@brewhaven.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 bg-coffee-medium rounded-full flex items-center justify-center group-hover:bg-accent-gold transition-colors">
                      <Phone className="h-5 w-5 text-accent-gold group-hover:text-coffee-dark" />
                    </div>
                    <div>
                      <p className="text-xs text-cream-medium/70 uppercase tracking-wide">Phone</p>
                      <a 
                        href="tel:+1234567890" 
                        className="text-cream-light hover:text-accent-gold transition-colors text-base"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 bg-coffee-medium rounded-full flex items-center justify-center group-hover:bg-accent-gold transition-colors">
                      <MapPin className="h-5 w-5 text-accent-gold group-hover:text-coffee-dark" />
                    </div>
                    <div>
                      <p className="text-xs text-cream-medium/70 uppercase tracking-wide">Address</p>
                      <span className="text-cream-light text-base">
                        123 Coffee Street<br />
                        Downtown, City 12345
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours - Enhanced */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white border-b-2 border-accent-gold pb-2 inline-block">Opening Hours</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-coffee-medium">
                    <span className="text-cream-medium">Monday - Friday</span>
                    <span className="text-accent-gold font-semibold">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-coffee-medium">
                    <span className="text-cream-medium">Saturday</span>
                    <span className="text-accent-gold font-semibold">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-cream-medium">Sunday</span>
                    <span className="text-accent-gold font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer - Enhanced */}
          <div className="border-t-2 border-coffee-light py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex items-center space-x-3">
                <Coffee className="h-5 w-5 text-accent-gold" />
                <p className="text-cream-light text-base">
                  © 2024 Brew Haven. All rights reserved.
                </p>
              </div>
              <div className="flex space-x-8">
                <a href="#" className="text-cream-medium hover:text-accent-gold transition-colors text-base border-b border-transparent hover:border-accent-gold pb-1">
                  Privacy Policy
                </a>
                <a href="#" className="text-cream-medium hover:text-accent-gold transition-colors text-base border-b border-transparent hover:border-accent-gold pb-1">
                  Terms of Service
                </a>
                <a href="#" className="text-cream-medium hover:text-accent-gold transition-colors text-base border-b border-transparent hover:border-accent-gold pb-1">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;