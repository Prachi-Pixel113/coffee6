import React, { useMemo } from 'react';
import { Coffee } from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutData } from '../mock';
import LazyImage from '../components/LazyImage';
import { performanceMonitor } from '../utils/performanceMonitor';
import { 
  AnimatedSection, 
  fadeInUpVariants, 
  fadeInLeftVariants, 
  fadeInRightVariants,
  staggerContainerVariants,
  staggerItemVariants 
} from '../hooks/useScrollAnimation';

const About = () => {
  // Performance monitoring
  React.useEffect(() => {
    performanceMonitor.mark('about-page-start');
    
    return () => {
      performanceMonitor.mark('about-page-end');
      performanceMonitor.measure('about-page-render', 'about-page-start', 'about-page-end');
    };
  }, []);

  const team = useMemo(() => [
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
  ], []);

  // Memoize coffee journey data to prevent re-renders
  const coffeeJourney = useMemo(() => [
    {
      id: 1,
      title: "Origin & Sustainable Sourcing",
      description: "Our journey begins in the misty highlands of Ethiopia, Colombia, and Guatemala, where we partner directly with small-scale farmers practicing sustainable agriculture.",
      images: [
        "https://images.unsplash.com/photo-1722962883780-8806c3ab546b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtfGVufDB8fHx8MTc1MzIwNTIwNXww&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1567726843492-df0484bb0b05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBmYXJtfGVufDB8fHx8MTc1MzIwNTIwNXww&ixlib=rb-4.1.0&q=85"
      ],
      details: [
        "Altitude: 1,200-2,000 meters above sea level",
        "Fair Trade certified with living wage guarantee",
        "Organic farming methods with zero pesticides",
        "Direct partnerships with 15+ family farms"
      ]
    },
    {
      id: 2,
      title: "Artisanal Roasting Mastery",
      description: "Master Roaster James Wilson applies 12 years of expertise to unlock each bean's unique flavor profile using precise temperature control and timing.",
      images: [
        "https://images.unsplash.com/photo-1607681034540-2c46cc71896d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGluZ3xlbnwwfHx8fDE3NTMyMDUyMTV8MA&ixlib=rb-4.1.0&q=85",
        "https://images.unsplash.com/photo-1611410255266-a1eaa3768021?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjByb2FzdGluZ3xlbnwwfHx8fDE3NTMyMDUyMTV8MA&ixlib=rb-4.1.0&q=85"
      ],
      stats: [
        { label: "Peak Roasting Temperature", value: "205°C" },
        { label: "Roasting Duration", value: "12-15min" }
      ],
      profiles: ["Light Roast - Bright & Fruity", "Medium Roast - Balanced & Sweet", "Dark Roast - Bold & Rich"]
    },
    {
      id: 3,
      title: "Precision Grinding Technology",
      description: "Commercial-grade burr grinders achieve consistent particle size distribution crucial for optimal extraction.",
      images: [
        "https://images.unsplash.com/photo-1588394952119-45f99780af73?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxncmluZGluZyUyMGNvZmZlZXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTMxNzMyOTd8MA&ixlib=rb-4.1.0&q=85"
      ],
      grinds: [
        { type: "Espresso (Fine)", dots: 3 },
        { type: "Pour Over (Medium)", dots: 2 },
        { type: "French Press (Coarse)", dots: 1 }
      ]
    }
  ], []);

  const brewingMethods = useMemo(() => [
    {
      name: "Espresso Perfection",
      description: "Intense, concentrated coffee extracted under 9 bars of pressure in 25-30 seconds.",
      image: "https://images.unsplash.com/photo-1572281451006-34e8940bb5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxicmV3aW5nJTIwZXNwcmVzc298ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzUzMTczMzA3fDA&ixlib=rb-4.1.0&q=85",
      specs: [
        { label: "Water Temperature", value: "93°C" },
        { label: "Extraction Time", value: "25-30s" },
        { label: "Pressure", value: "9 bars" }
      ]
    },
    {
      name: "Pour Over Artistry",
      description: "Manual brewing method that allows precise control over water temperature and pouring technique.",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxicmV3aW5nJTIwcG91ciUyMG92ZXJ8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzUzMTczMzA3fDA&ixlib=rb-4.1.0&q=85",
      specs: [
        { label: "Water Temperature", value: "96°C" },
        { label: "Brew Time", value: "3-4min" },
        { label: "Ratio", value: "1:16" }
      ]
    },
    {
      name: "French Press Classic",
      description: "Full immersion brewing that extracts rich, full-bodied coffee with maximum flavor retention.",
      image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxicmV3aW5nJTIwZnJlbmNoJTIwcHJlc3N8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzUzMTczMzA3fDA&ixlib=rb-4.1.0&q=85",
      specs: [
        { label: "Water Temperature", value: "94°C" },
        { label: "Steep Time", value: "4min" },
        { label: "Ratio", value: "1:15" }
      ]
    }
  ], []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <AnimatedSection 
        className="section bg-gradient-to-r from-cream-dark to-cream-medium"
        variants={fadeInUpVariants}
      >
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={staggerItemVariants}
            >
              {aboutData.title}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-coffee-medium mb-8 font-medium"
              variants={staggerItemVariants}
            >
              {aboutData.subtitle}
            </motion.p>
            <motion.p 
              className="text-lg text-text-secondary leading-relaxed"
              variants={staggerItemVariants}
            >
              {aboutData.description}
            </motion.p>
          </motion.div>
        </div>
      </AnimatedSection>






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

      {/* Enhanced Coffee Journey - Complete Process */}
      <section className="section bg-gradient-to-br from-cream-light to-white">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Coffee Journey</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              From remote mountain farms to your perfect cup, experience the artisanal process and 
              passionate craftsmanship that makes every Brew Haven coffee exceptional. Each step is 
              meticulously crafted to deliver the ultimate coffee experience.
            </p>
          </div>
          
          {/* Enhanced Timeline Flow Chart */}
          <div className="max-w-7xl mx-auto">
            
            {/* Step 1: Origin & Sourcing */}
            <div className="coffee-journey-step mb-16 lg:mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-1">
                  <div className="relative">
                    <div className="step-number absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      01
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="coffee-image-container overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img 
                          src="https://images.unsplash.com/photo-1722962883780-8806c3ab546b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtfGVufDB8fHx8MTc1MzIwNTIwNXww&ixlib=rb-4.1.0&q=85" 
                          alt="Coffee harvesting at source farms"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="coffee-image-container overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img 
                          src="https://images.unsplash.com/photo-1567726843492-df0484bb0b05?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjBmYXJtfGVufDB8fHx8MTc1MzIwNTIwNXww&ixlib=rb-4.1.0&q=85" 
                          alt="Coffee plantation and sustainable farming"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:order-2 space-y-6">
                  <h3 className="text-3xl font-bold text-coffee-dark">Origin & Sustainable Sourcing</h3>
                  <div className="space-y-4">
                    <p className="text-lg text-text-secondary leading-relaxed">
                      Our journey begins in the misty highlands of Ethiopia, Colombia, and Guatemala, where 
                      we partner directly with small-scale farmers practicing sustainable agriculture. Each 
                      bean is hand-picked at peak ripeness, ensuring only the finest cherries make it to your cup.
                    </p>
                    <div className="bg-accent-warm rounded-xl p-6">
                      <h4 className="font-semibold text-coffee-dark mb-3">Our Farm Partnerships:</h4>
                      <ul className="space-y-2 text-sm text-coffee-medium">
                        <li className="flex items-center"><span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>Altitude: 1,200-2,000 meters above sea level</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>Fair Trade certified with living wage guarantee</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>Organic farming methods with zero pesticides</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>Direct partnerships with 15+ family farms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="flex justify-center mt-12">
                <div className="w-1 h-16 bg-gradient-to-b from-accent-gold to-coffee-light"></div>
              </div>
            </div>

            {/* Step 2: Expert Roasting */}
            <div className="coffee-journey-step mb-16 lg:mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="step-number absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-coffee-medium to-coffee-dark rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      02
                    </div>
                    <h3 className="text-3xl font-bold text-coffee-dark">Artisanal Roasting Mastery</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-text-secondary leading-relaxed">
                      In our state-of-the-art roastery, Master Roaster James Wilson applies 12 years of expertise 
                      to unlock each bean's unique flavor profile. Using precise temperature control and timing, 
                      we develop complex flavors while preserving the coffee's natural characteristics.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-coffee-light to-cream-medium rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-coffee-dark">205°C</div>
                        <div className="text-sm text-coffee-medium">Peak Roasting Temperature</div>
                      </div>
                      <div className="bg-gradient-to-br from-coffee-light to-cream-medium rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-coffee-dark">12-15min</div>
                        <div className="text-sm text-coffee-medium">Roasting Duration</div>
                      </div>
                    </div>
                    <div className="bg-coffee-dark rounded-xl p-6 text-white">
                      <h4 className="font-semibold mb-3">Roasting Profiles Available:</h4>
                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div><span className="block font-medium">Light Roast</span>Bright & Fruity</div>
                        <div><span className="block font-medium">Medium Roast</span>Balanced & Sweet</div>
                        <div><span className="block font-medium">Dark Roast</span>Bold & Rich</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="coffee-image-container overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src="https://images.unsplash.com/photo-1607681034540-2c46cc71896d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGluZ3xlbnwwfHx8fDE3NTMyMDUyMTV8MA&ixlib=rb-4.1.0&q=85" 
                        alt="Professional coffee roasting process"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="coffee-image-container overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src="https://images.unsplash.com/photo-1611410255266-a1eaa3768021?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxjb2ZmZWUlMjByb2FzdGluZ3xlbnwwfHx8fDE3NTMyMDUyMTV8MA&ixlib=rb-4.1.0&q=85" 
                        alt="Different coffee roasting levels"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="flex justify-center mt-12">
                <div className="w-1 h-16 bg-gradient-to-b from-coffee-medium to-accent-gold"></div>
              </div>
            </div>

            {/* Step 3: Precision Grinding */}
            <div className="coffee-journey-step mb-16 lg:mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-1">
                  <div className="relative">
                    <div className="step-number absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      03
                    </div>
                    <div className="coffee-image-container overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src="https://images.unsplash.com/photo-1588394952119-45f99780af73?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxncmluZGluZyUyMGNvZmZlZXxlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTMxNzMyOTd8MA&ixlib=rb-4.1.0&q=85" 
                        alt="Professional coffee grinding equipment"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="lg:order-2 space-y-6">
                  <h3 className="text-3xl font-bold text-coffee-dark">Precision Grinding Technology</h3>
                  <div className="space-y-4">
                    <p className="text-lg text-text-secondary leading-relaxed">
                      Using commercial-grade burr grinders, we achieve consistent particle size distribution 
                      crucial for optimal extraction. Each brewing method requires specific grind settings, 
                      and our equipment ensures every cup achieves perfect balance.
                    </p>
                    <div className="space-y-3">
                      <div className="bg-accent-warm rounded-lg p-4 flex justify-between items-center">
                        <span className="font-medium text-coffee-dark">Espresso (Fine)</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-coffee-dark rounded-full"></div>
                          <div className="w-2 h-2 bg-coffee-light rounded-full"></div>
                          <div className="w-2 h-2 bg-cream-dark rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-accent-warm rounded-lg p-4 flex justify-between items-center">
                        <span className="font-medium text-coffee-dark">Pour Over (Medium)</span>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-coffee-dark rounded-full"></div>
                          <div className="w-3 h-3 bg-coffee-light rounded-full"></div>
                          <div className="w-2 h-2 bg-cream-dark rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-accent-warm rounded-lg p-4 flex justify-between items-center">
                        <span className="font-medium text-coffee-dark">French Press (Coarse)</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-4 bg-coffee-dark rounded-full"></div>
                          <div className="w-4 h-4 bg-coffee-light rounded-full"></div>
                          <div className="w-3 h-3 bg-cream-dark rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="flex justify-center mt-12">
                <div className="w-1 h-16 bg-gradient-to-b from-accent-gold to-coffee-medium"></div>
              </div>
            </div>

            {/* Step 4: Multiple Brewing Methods */}
            <div className="coffee-journey-step mb-16 lg:mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-coffee-medium to-coffee-dark rounded-full text-white font-bold text-xl shadow-lg mb-6">
                  04
                </div>
                <h3 className="text-3xl font-bold text-coffee-dark mb-4">Master Brewing Techniques</h3>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Our skilled baristas employ multiple brewing methods, each designed to highlight different 
                  flavor characteristics and provide unique coffee experiences.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Espresso */}
                <div className="brewing-method-card bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="coffee-image-container overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1572281451006-34e8940bb5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxicmV3aW5nJTIwZXNwcmVzc298ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzUzMTczMzA3fDA&ixlib=rb-4.1.0&q=85" 
                      alt="Espresso brewing process"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-coffee-dark mb-3">Espresso Perfection</h4>
                    <p className="text-text-secondary text-sm mb-4">Intense, concentrated coffee extracted under 9 bars of pressure in 25-30 seconds.</p>
                    <div className="space-y-2 text-xs text-coffee-medium">
                      <div className="flex justify-between"><span>Water Temperature:</span><span>93°C</span></div>
                      <div className="flex justify-between"><span>Extraction Time:</span><span>25-30s</span></div>
                      <div className="flex justify-between"><span>Pressure:</span><span>9 bars</span></div>
                    </div>
                  </div>
                </div>

                {/* Pour Over */}
                <div className="brewing-method-card bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="coffee-image-container overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1579987646918-12c9a835809a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwb3VyJTIwb3ZlciUyMGNvZmZlZXxlbnwwfHx8fDE3NTMyMDUyMjJ8MA&ixlib=rb-4.1.0&q=85" 
                      alt="Pour over coffee brewing"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-coffee-dark mb-3">Pour Over Artistry</h4>
                    <p className="text-text-secondary text-sm mb-4">Careful manual brewing that highlights the coffee's origin flavors and aromatics.</p>
                    <div className="space-y-2 text-xs text-coffee-medium">
                      <div className="flex justify-between"><span>Water Temperature:</span><span>96°C</span></div>
                      <div className="flex justify-between"><span>Brew Time:</span><span>3-4 min</span></div>
                      <div className="flex justify-between"><span>Ratio:</span><span>1:16</span></div>
                    </div>
                  </div>
                </div>

                {/* French Press */}
                <div className="brewing-method-card bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="coffee-image-container overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1504469089401-14f795f6ddee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxwb3VyJTIwb3ZlciUyMGNvZmZlZXxlbnwwfHx8fDE3NTMyMDUyMjJ8MA&ixlib=rb-4.1.0&q=85" 
                      alt="French press coffee brewing"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-coffee-dark mb-3">French Press Classic</h4>
                    <p className="text-text-secondary text-sm mb-4">Full immersion brewing that produces rich, full-bodied coffee with natural oils.</p>
                    <div className="space-y-2 text-xs text-coffee-medium">
                      <div className="flex justify-between"><span>Water Temperature:</span><span>93°C</span></div>
                      <div className="flex justify-between"><span>Steep Time:</span><span>4 min</span></div>
                      <div className="flex justify-between"><span>Ratio:</span><span>1:15</span></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Connecting Line */}
              <div className="flex justify-center mt-12">
                <div className="w-1 h-16 bg-gradient-to-b from-coffee-medium to-accent-gold"></div>
              </div>
            </div>

            {/* Step 5: Perfect Serving & Latte Art */}
            <div className="coffee-journey-step mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="step-number absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent-gold to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                      05
                    </div>
                    <h3 className="text-3xl font-bold text-coffee-dark">Perfect Serving & Latte Art</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-text-secondary leading-relaxed">
                      The final touch comes from our talented baristas who combine technical precision with 
                      artistic flair. Each cup is served at the perfect temperature with stunning latte art 
                      that's as beautiful as it is delicious.
                    </p>
                    <div className="bg-gradient-to-br from-accent-warm to-cream-medium rounded-xl p-6">
                      <h4 className="font-semibold text-coffee-dark mb-4">Serving Standards:</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-coffee-dark">65°C</div>
                          <div className="text-coffee-medium">Perfect Serving Temperature</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-coffee-dark">30s</div>
                          <div className="text-coffee-medium">From Brew to Serve</div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-medium text-coffee-dark">Signature Latte Art Designs:</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-coffee-light text-white px-3 py-1 rounded-full text-sm">Rosetta</span>
                        <span className="bg-coffee-light text-white px-3 py-1 rounded-full text-sm">Heart</span>
                        <span className="bg-coffee-light text-white px-3 py-1 rounded-full text-sm">Swan</span>
                        <span className="bg-coffee-light text-white px-3 py-1 rounded-full text-sm">Tulip</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="coffee-image-container overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src="https://images.unsplash.com/photo-1596018589878-217d8603c4c6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3NTMyMDUyMzB8MA&ixlib=rb-4.1.0&q=85" 
                        alt="Barista creating beautiful latte art"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="coffee-image-container overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                      <img 
                        src="https://images.unsplash.com/photo-1563311977-d285756282dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxsYXR0ZSUyMGFydHxlbnwwfHx8fDE3NTMyMDUyMzB8MA&ixlib=rb-4.1.0&q=85" 
                        alt="Perfect cappuccino with latte art"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Quality Promise Section - Enhanced */}
            <div className="mt-20 text-center">
              <div className="max-w-5xl mx-auto bg-gradient-to-br from-coffee-dark to-coffee-medium rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
                  <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white rounded-full"></div>
                </div>
                
                <Coffee className="h-20 w-20 mx-auto mb-8 text-accent-gold" />
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Quality Promise
                </h3>
                <p className="text-xl leading-relaxed mb-12 max-w-3xl mx-auto text-cream-light">
                  Every step of our comprehensive process is monitored by our expert team. 
                  From sustainable sourcing to the final artistic pour, we guarantee exceptional 
                  quality and unforgettable taste in every single cup we serve.
                </p>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">100%</div>
                    <div className="text-cream-light">Premium Beans</div>
                    <div className="text-sm text-cream-medium mt-1">Direct Trade Sourced</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">25s</div>
                    <div className="text-cream-light">Perfect Extraction</div>
                    <div className="text-sm text-cream-medium mt-1">Espresso Standard</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">65°C</div>
                    <div className="text-cream-light">Ideal Temperature</div>
                    <div className="text-sm text-cream-medium mt-1">Perfect Serving Heat</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">15+</div>
                    <div className="text-cream-light">Farm Partners</div>
                    <div className="text-sm text-cream-medium mt-1">Sustainable Sources</div>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="bg-black bg-opacity-20 rounded-2xl p-6 max-w-2xl mx-auto">
                    <h4 className="font-semibold mb-4">From Farm to Cup Journey Time:</h4>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <span className="bg-accent-gold text-coffee-dark px-3 py-1 rounded-full">Farm: 3-6 months</span>
                      <span className="text-cream-light">→</span>
                      <span className="bg-accent-gold text-coffee-dark px-3 py-1 rounded-full">Roasting: 12-15 min</span>
                      <span className="text-cream-light">→</span>
                      <span className="bg-accent-gold text-coffee-dark px-3 py-1 rounded-full">Brewing: 25s-4min</span>
                    </div>
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