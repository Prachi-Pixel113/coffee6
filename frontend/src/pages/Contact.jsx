import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Coffee, Users, Award } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        setStatus({
          type: 'error',
          message: errorData.detail || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please check your connection and try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-BREW', '+1 (555) 123-2739'],
      description: 'Call us for reservations or questions'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@brewhaven.com', 'catering@brewhaven.com'],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Coffee Street', 'Downtown District, CD 12345'],
      description: 'Visit our cozy café'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-coffee to-dark-coffee">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-golden">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cream">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-coffee mb-4">Contact Information</h2>
                <p className="text-gray-600 text-lg">
                  Have a question about our coffee, want to book an event, or just want to say hello? 
                  We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-golden bg-opacity-10 rounded-lg flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-golden" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-coffee mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700 mb-1">{detail}</p>
                        ))}
                        <p className="text-gray-500 text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-coffee mb-6">Send us a Message</h2>
                
                {/* Status Message */}
                {status.message && (
                  <div className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                    status.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {status.type === 'success' ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <p>{status.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-coffee mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-coffee mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-coffee mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-coffee mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Catering Services">Catering Services</option>
                        <option value="Private Events">Private Events</option>
                        <option value="Coffee Beans Order">Coffee Beans Order</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-coffee mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-golden focus:border-golden transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                      minLength={10}
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-golden hover:bg-golden-dark text-white font-medium py-4 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {loading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-cream bg-opacity-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-coffee mb-4">Why Choose Brew Haven?</h2>
              <p className="text-lg text-gray-600">
                We're more than just a coffee shop - we're your neighborhood gathering place
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-golden bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-golden" />
                </div>
                <h3 className="text-xl font-semibold text-coffee mb-2">Premium Coffee</h3>
                <p className="text-gray-600">Ethically sourced, expertly roasted, perfectly brewed</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-golden bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-golden" />
                </div>
                <h3 className="text-xl font-semibold text-coffee mb-2">Community Focus</h3>
                <p className="text-gray-600">A welcoming space for work, meetings, and connections</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-golden bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-golden" />
                </div>
                <h3 className="text-xl font-semibold text-coffee mb-2">Award Winning</h3>
                <p className="text-gray-600">Recognized for excellence in coffee and service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;