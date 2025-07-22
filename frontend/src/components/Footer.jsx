import React from 'react';
import { Coffee, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Heart, Star } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Enhanced Footer Separator with Gradient */}
      <div className="footer-separator bg-gradient-to-r from-transparent via-accent-gold to-transparent h-px relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-gold via-amber-300 to-accent-gold h-1 blur-sm"></div>
        <div className="relative bg-gradient-to-r from-accent-gold via-amber-400 to-accent-gold h-0.5"></div>
      </div>
      
      <footer className="bg-gradient-to-br from-coffee-dark via-slate-900 to-coffee-dark text-cream-light relative overflow-hidden">
        {/* Enhanced Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="footer-pattern opacity-10"></div>
          {/* Floating Coffee Bean Shapes */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-accent-gold/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-3 h-3 bg-amber-400/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-accent-gold/30 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        {/* Main Footer Content */}
        <div className="container relative z-10">
          <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand Section - Enhanced with Modern Card Design */}
              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-accent-gold rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <Coffee className="h-7 w-7 text-coffee-dark" />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/50 to-accent-gold/50 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div>
                      <span className="text-3xl font-bold text-white tracking-tight">Brew Haven</span>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-amber-400 fill-current" />
                        ))}
                        <span className="text-xs text-cream-medium/70 ml-2">Premium Quality</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-cream-medium/90 text-base leading-relaxed font-light">
                    Your premium destination for the finest coffee experience. 
                    From bean to cup, we craft perfection in every sip with 
                    <span className="text-accent-gold font-medium"> artisan precision</span>.
                  </p>
                </div>
                
                {/* Enhanced Social Media with Modern Styling */}
                <div className="space-y-4">
                  <h5 className="text-sm font-semibold text-accent-gold tracking-wider uppercase">Follow Our Journey</h5>
                  <div className="flex space-x-3">
                    <a href="#" className="group relative w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-cream-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                      <Facebook className="h-5 w-5 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-700/0 group-hover:from-blue-600/20 group-hover:to-blue-700/20 rounded-xl transition-all duration-300"></div>
                    </a>
                    <a href="#" className="group relative w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-cream-medium hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                      <Twitter className="h-5 w-5 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/20 group-hover:to-blue-600/20 rounded-xl transition-all duration-300"></div>
                    </a>
                    <a href="#" className="group relative w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center text-cream-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                      <Instagram className="h-5 w-5 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 to-purple-600/0 group-hover:from-pink-600/20 group-hover:to-purple-600/20 rounded-xl transition-all duration-300"></div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links - Enhanced with Modern Card Style */}
              <div className="space-y-8">
                <div className="relative">
                  <h4 className="text-xl font-bold text-white mb-1 tracking-tight">Quick Links</h4>
                  <div className="w-12 h-1 bg-gradient-to-r from-accent-gold to-amber-400 rounded-full"></div>
                  <p className="text-cream-medium/70 text-sm mt-3">Navigate our offerings</p>
                </div>
                <div className="space-y-1">
                  <a href="/" className="group flex items-center space-x-3 text-cream-medium hover:text-white transition-all duration-300 text-base py-3 px-4 rounded-lg hover:bg-white/5 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-1 bg-accent-gold rounded-full"></div>
                    </div>
                  </a>
                  <a href="/about" className="group flex items-center space-x-3 text-cream-medium hover:text-white transition-all duration-300 text-base py-3 px-4 rounded-lg hover:bg-white/5 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-1 bg-accent-gold rounded-full"></div>
                    </div>
                  </a>
                  <a href="/offers" className="group flex items-center space-x-3 text-cream-medium hover:text-white transition-all duration-300 text-base py-3 px-4 rounded-lg hover:bg-white/5 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Special Offers</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-1 bg-accent-gold rounded-full"></div>
                    </div>
                  </a>
                  <a href="/coffee-shop" className="group flex items-center space-x-3 text-cream-medium hover:text-white transition-all duration-300 text-base py-3 px-4 rounded-lg hover:bg-white/5 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-accent-gold rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Coffee Shop</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-1 bg-accent-gold rounded-full"></div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Info - Enhanced with Modern Glass Card Design */}
              <div className="space-y-8">
                <div className="relative">
                  <h4 className="text-xl font-bold text-white mb-1 tracking-tight">Contact Info</h4>
                  <div className="w-12 h-1 bg-gradient-to-r from-accent-gold to-amber-400 rounded-full"></div>
                  <p className="text-cream-medium/70 text-sm mt-3">Get in touch with us</p>
                </div>
                <div className="space-y-6">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></div>
                    <div className="relative flex items-start space-x-4 p-4 rounded-xl transition-all duration-300">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:from-amber-500 group-hover:to-accent-gold transition-all duration-300">
                          <Mail className="h-5 w-5 text-accent-gold group-hover:text-coffee-dark" />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/0 to-accent-gold/0 group-hover:from-amber-400/50 group-hover:to-accent-gold/50 rounded-xl blur-sm transition-all duration-300"></div>
                      </div>
                      <div>
                        <p className="text-xs text-accent-gold font-semibold uppercase tracking-wider mb-1">Email</p>
                        <a 
                          href="mailto:hello@brewhaven.com" 
                          className="text-cream-light hover:text-white transition-colors text-base font-medium"
                        >
                          hello@brewhaven.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></div>
                    <div className="relative flex items-start space-x-4 p-4 rounded-xl transition-all duration-300">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:from-emerald-500 group-hover:to-green-600 transition-all duration-300">
                          <Phone className="h-5 w-5 text-accent-gold group-hover:text-white" />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400/0 to-green-600/0 group-hover:from-emerald-400/50 group-hover:to-green-600/50 rounded-xl blur-sm transition-all duration-300"></div>
                      </div>
                      <div>
                        <p className="text-xs text-accent-gold font-semibold uppercase tracking-wider mb-1">Phone</p>
                        <a 
                          href="tel:+1234567890" 
                          className="text-cream-light hover:text-white transition-colors text-base font-medium"
                        >
                          (123) 456-7890
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></div>
                    <div className="relative flex items-start space-x-4 p-4 rounded-xl transition-all duration-300">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center group-hover:from-red-500 group-hover:to-pink-600 transition-all duration-300">
                          <MapPin className="h-5 w-5 text-accent-gold group-hover:text-white" />
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-br from-red-400/0 to-pink-600/0 group-hover:from-red-400/50 group-hover:to-pink-600/50 rounded-xl blur-sm transition-all duration-300"></div>
                      </div>
                      <div>
                        <p className="text-xs text-accent-gold font-semibold uppercase tracking-wider mb-1">Address</p>
                        <span className="text-cream-light text-base font-medium leading-relaxed">
                          123 Coffee Street<br />
                          Downtown, City 12345
                        </span>
                      </div>
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