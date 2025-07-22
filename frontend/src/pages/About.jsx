import React from 'react';
import { Coffee } from 'lucide-react';
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
      image: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzUzNjR8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzUzMTczNDczfDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'James Wilson',
      role: 'Coffee Roaster',
      experience: '12 years experience', 
      image: 'https://images.unsplash.com/photo-1626548013576-65b158f7dd45?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzUzNjR8MHwxfHNlYXJjaHwxfHxiYXJpc3RhJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUzMTczNDQ3fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      name: 'Lisa Chen',
      role: 'Store Manager',
      experience: '6 years experience',
      image: 'https://images.unsplash.com/photo-1735787657870-2395d589e733?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NzUzNjR8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzUzMTczNDczfDA&ixlib=rb-4.1.0&q=85'
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
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-coffee-medium font-medium mb-2">{member.role}</p>
                <p className="text-text-secondary">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Preparation Process Flow Chart */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Coffee Journey</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From carefully selected beans to your perfect cup, discover the artisanal process 
              that makes every Brew Haven coffee exceptional.
            </p>
          </div>
          
          {/* Flow Chart */}
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              
              {/* Step 1: Bean Selection & Roasting */}
              <div className="flow-step text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-accent-gold">
                    <img 
                      src="https://images.unsplash.com/photo-1658521763683-5127f660bc9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTMxNzMyODl8MA&ixlib=rb-4.1.0&q=85" 
                      alt="Premium coffee beans selection and roasting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  {/* Arrow for desktop */}
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-coffee-medium"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-coffee-medium border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                  {/* Arrow for mobile */}
                  <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="h-6 w-0.5 bg-coffee-medium"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-coffee-medium border-l-2 border-r-2 border-l-transparent border-r-transparent"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-coffee-dark">Premium Bean Selection</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  We carefully source and select the finest coffee beans from sustainable farms worldwide, 
                  then expertly roast them to unlock their unique flavor profiles.
                </p>
              </div>

              {/* Step 2: Grinding */}
              <div className="flow-step text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-accent-gold">
                    <img 
                      src="https://images.unsplash.com/photo-1588394952119-45f99780af73?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxncmluZGluZyUyMGNvZmZlZXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTMxNzMyOTd8MA&ixlib=rb-4.1.0&q=85" 
                      alt="Professional coffee grinding process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  {/* Arrow for desktop */}
                  <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-coffee-medium"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-coffee-medium border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                  {/* Arrow for mobile */}
                  <div className="lg:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="h-6 w-0.5 bg-coffee-medium"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t-4 border-t-coffee-medium border-l-2 border-r-2 border-l-transparent border-r-transparent"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-coffee-dark">Precision Grinding</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Using professional-grade grinders, we grind beans to the perfect consistency for each brewing method, 
                  ensuring optimal extraction and flavor.
                </p>
              </div>

              {/* Step 3: Brewing & Serving */}
              <div className="flow-step text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-accent-gold">
                    <img 
                      src="https://images.unsplash.com/photo-1572281451006-34e8940bb5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxicmV3aW5nJTIwZXNwcmVzc298ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzUzMTczMzA3fDA&ixlib=rb-4.1.0&q=85" 
                      alt="Expert coffee brewing and serving"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-gold rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-coffee-dark">Expert Brewing</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Our skilled baristas craft each cup with precision, using the perfect water temperature, 
                  timing, and technique to create your ideal coffee experience.
                </p>
              </div>
            </div>

            {/* Quality Promise */}
            <div className="mt-16 text-center">
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent-warm to-cream-medium rounded-2xl p-8 md:p-12">
                <Coffee className="h-16 w-16 text-coffee-dark mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold text-coffee-dark mb-4">
                  Our Quality Promise
                </h3>
                <p className="text-coffee-medium text-lg leading-relaxed">
                  Every step of our process is carefully monitored by our expert team. 
                  From bean selection to the final pour, we ensure consistent quality and 
                  exceptional taste in every single cup we serve.
                </p>
                <div className="flex justify-center items-center mt-8 space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coffee-dark">100%</div>
                    <div className="text-sm text-coffee-medium">Premium Beans</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coffee-dark">15s</div>
                    <div className="text-sm text-coffee-medium">Perfect Extraction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coffee-dark">65°C</div>
                    <div className="text-sm text-coffee-medium">Ideal Temperature</div>
                  </div>
                </div>
              </div>
            </div>
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