import React from 'react';
import { Coffee, Heart, Leaf, Award, Users } from 'lucide-react';
import { aboutData } from '../mock';

const About = () => {
  const stats = [
    { number: '9+', label: 'Years of Excellence' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '100%', label: 'Premium Beans' },
    { number: '24/7', label: 'Fresh Roasting' }
  ];

  const team = [
    {
      name: 'Maria Santos',
      role: 'Head Barista',
      experience: '8 years experience',
      image: 'MS'
    },
    {
      name: 'James Wilson',
      role: 'Coffee Roaster',
      experience: '12 years experience', 
      image: 'JW'
    },
    {
      name: 'Lisa Chen',
      role: 'Store Manager',
      experience: '6 years experience',
      image: 'LC'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="section bg-gradient-to-r from-cream-dark to-cream-medium">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{aboutData.title}</h1>
            <p className="text-xl md:text-2xl text-coffee-medium mb-8 font-medium">
              {aboutData.subtitle}
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              {aboutData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-coffee-medium rounded-full text-white mb-8">
              <Heart className="h-10 w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {aboutData.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-text-secondary">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-3 gap-8">
            {aboutData.values.map((value, index) => {
              const icons = [
                <Award className="h-8 w-8" />,
                <Users className="h-8 w-8" />, 
                <Leaf className="h-8 w-8" />
              ];
              return (
                <div key={index} className="card text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-warm rounded-full text-coffee-dark mb-6">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-coffee-dark text-white">
        <div className="container">
          <div className="grid grid-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent-gold">
                  {stat.number}
                </div>
                <div className="text-cream-medium font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-text-secondary">
              The passionate people behind your perfect cup
            </p>
          </div>
          <div className="grid grid-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 bg-accent-warm rounded-full flex items-center justify-center text-coffee-dark font-bold text-xl mx-auto mb-6">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-coffee-medium font-medium mb-2">{member.role}</p>
                <p className="text-text-secondary">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-cream-medium">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Brew Haven Story</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  Founded in 2015 by coffee enthusiasts Maria and James, Brew Haven started as a small roastery 
                  in downtown with a simple mission: to serve the best coffee in the city.
                </p>
                <p>
                  What began as a passion project quickly grew into a beloved community gathering place. 
                  We've expanded our offerings while staying true to our core values of quality, 
                  community, and sustainability.
                </p>
                <p>
                  Today, Brew Haven is more than just a coffee shop – it's a place where friendships 
                  are made, ideas are born, and every cup is crafted with love and expertise.
                </p>
              </div>
            </div>
            <div className="bg-accent-warm rounded-2xl p-8 lg:p-12 text-center">
              <Coffee className="h-20 w-20 text-coffee-dark mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-coffee-dark mb-4">
                From Bean to Cup
              </h3>
              <p className="text-coffee-medium">
                Every step of our process is carefully monitored to ensure you get 
                the perfect cup every time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;