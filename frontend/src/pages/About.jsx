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
      description: "The cornerstone of Italian coffee culture. Our master baristas extract the perfect shot using precise pressure and timing to create a rich, velvety crema that locks in the coffee's essential oils and aromatic compounds.",
      image: "https://images.unsplash.com/photo-1572281451006-34e8940bb5f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxicmV3aW5nJTIwZXNwcmVzc298ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzUzMTczMzA3fDA&ixlib=rb-4.1.0&q=85",
      technique: "Pressure Extraction",
      flavor: "Rich & Intense",
      characteristics: [
        "Golden crema layer",
        "Concentrated caffeine",
        "Full-bodied texture",
        "Complex aromatics"
      ],
      specs: [
        { label: "Water Temperature", value: "93°C" },
        { label: "Extraction Time", value: "25-30s" },
        { label: "Pressure", value: "9 bars" },
        { label: "Grind Size", value: "Fine" },
        { label: "Coffee Dose", value: "18-20g" },
        { label: "Yield", value: "36-40ml" }
      ]
    },
    {
      name: "Pour Over Artistry",
      description: "A meditative brewing ritual that showcases our barista's skill and precision. Each pour is carefully timed and controlled, allowing the coffee's unique terroir and flavor notes to bloom and develop fully.",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxicmV3aW5nJTIwcG91ciUyMG92ZXJ8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzUzMTczMzA3fDA&ixlib=rb-4.1.0&q=85",
      technique: "Manual Pour Method",
      flavor: "Clean & Bright",
      characteristics: [
        "Clarity of flavors",
        "Bright acidity",
        "Floral notes",
        "Clean finish"
      ],
      specs: [
        { label: "Water Temperature", value: "96°C" },
        { label: "Total Brew Time", value: "3-4min" },
        { label: "Coffee to Water", value: "1:16" },
        { label: "Grind Size", value: "Medium" },
        { label: "Coffee Dose", value: "25g" },
        { label: "Water Volume", value: "400ml" }
      ]
    },
    {
      name: "French Press Classic",
      description: "The traditional method that extracts maximum body and flavor through full immersion brewing. Our coarse-ground beans steep leisurely, creating a robust cup that captures the coffee's natural oils and sediments for ultimate richness.",
      image: "https://images.unsplash.com/photo-1569387813408-72b66e687493?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwcmVzc3xlbnwwfHx8YmxhY2tfYW5kX3doaXRlfDE3NTMyNDg5OTl8MA&ixlib=rb-4.1.0&q=85",
      technique: "Full Immersion",
      flavor: "Bold & Full-Bodied",
      characteristics: [
        "Heavy body",
        "Rich texture",
        "Natural oils",
        "Deep flavors"
      ],
      specs: [
        { label: "Water Temperature", value: "94°C" },
        { label: "Steep Time", value: "4min" },
        { label: "Coffee to Water", value: "1:15" },
        { label: "Grind Size", value: "Coarse" },
        { label: "Coffee Dose", value: "30g" },
        { label: "Water Volume", value: "450ml" }
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
      <AnimatedSection 
        className="section bg-white"
        variants={fadeInUpVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-text-secondary">
              The passionate people behind your perfect cup
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="card text-center"
                variants={staggerItemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <LazyImage 
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover"
                    priority={index === 0}
                    sizes={[200, 250, 300]}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-coffee-medium font-medium mb-2">{member.role}</p>
                <p className="text-text-secondary">{member.experience}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Coffee Journey Section */}
      <AnimatedSection 
        className="section bg-gradient-to-br from-cream-light to-white"
        variants={fadeInUpVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Coffee Journey</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              From remote mountain farms to your perfect cup, experience the artisanal process and 
              passionate craftsmanship that makes every Brew Haven coffee exceptional.
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto space-y-20">
            {coffeeJourney.map((step, index) => (
              <motion.div 
                key={step.id} 
                className="coffee-journey-step"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative">
                      {step.images.length > 1 ? (
                        <div className="grid grid-cols-2 gap-4">
                          {step.images.map((image, imgIndex) => (
                            <div key={imgIndex} className="coffee-image-container overflow-hidden rounded-2xl shadow-xl">
                              <LazyImage 
                                src={image}
                                alt={`${step.title} - Image ${imgIndex + 1}`}
                                className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
                                sizes={[400, 600, 800]}
                                quality={85}
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="coffee-image-container overflow-hidden rounded-2xl shadow-xl">
                          <LazyImage 
                            src={step.images[0]}
                            alt={step.title}
                            className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                            sizes={[600, 800, 1200]}
                            quality={85}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                    <h3 className="text-3xl font-bold text-coffee-dark">{step.title}</h3>
                    <p className="text-lg text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                    
                    {step.details && (
                      <div className="bg-accent-warm rounded-xl p-6">
                        <h4 className="font-semibold text-coffee-dark mb-3">Key Features:</h4>
                        <ul className="space-y-2 text-sm text-coffee-medium">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center">
                              <span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {step.stats && (
                      <div className="grid grid-cols-2 gap-4">
                        {step.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="bg-gradient-to-br from-coffee-light to-cream-medium rounded-xl p-4 text-center">
                            <div className="text-2xl font-bold text-coffee-dark">{stat.value}</div>
                            <div className="text-sm text-coffee-medium">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {step.profiles && (
                      <div className="bg-coffee-dark rounded-xl p-6 text-white">
                        <h4 className="font-semibold mb-3">Roasting Profiles Available:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
                          {step.profiles.map((profile, profileIndex) => (
                            <div key={profileIndex}>
                              <span className="block font-medium">{profile.split(' - ')[0]}</span>
                              {profile.split(' - ')[1]}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {step.grinds && (
                      <div className="space-y-3">
                        {step.grinds.map((grind, grindIndex) => (
                          <div key={grindIndex} className="bg-accent-warm rounded-lg p-4 flex justify-between items-center">
                            <span className="font-medium text-coffee-dark">{grind.type}</span>
                            <div className="flex space-x-1">
                              {Array.from({ length: grind.dots }).map((_, dotIndex) => (
                                <div 
                                  key={dotIndex} 
                                  className={`bg-coffee-dark rounded-full ${grind.dots === 3 ? 'w-2 h-2' : grind.dots === 2 ? 'w-3 h-3' : 'w-4 h-4'}`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Brewing Methods Section */}
      <AnimatedSection 
        className="section bg-white"
        variants={fadeInUpVariants}
      >
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-coffee-dark mb-4">Master Brewing Techniques</h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Our skilled baristas employ multiple brewing methods, each designed to highlight different 
              flavor characteristics and provide unique coffee experiences.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 items-stretch"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {brewingMethods.map((method, index) => (
              <motion.div 
                key={index} 
                className="brewing-method-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 h-full flex flex-col"
                variants={staggerItemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="overflow-hidden">
                  <LazyImage 
                    src={method.image}
                    alt={method.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    sizes={[400, 600, 800]}
                    quality={85}
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold text-coffee-dark mb-3">{method.name}</h4>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-accent-gold text-white text-xs font-medium rounded-full">
                        {method.technique}
                      </span>
                      <span className="px-3 py-1 bg-coffee-light text-coffee-dark text-xs font-medium rounded-full">
                        {method.flavor}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  
                  {/* Characteristics Section */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-coffee-dark text-center mb-2 text-sm">
                      Key Characteristics
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {method.characteristics.map((characteristic, charIndex) => (
                        <div key={charIndex} className="flex items-center text-xs text-coffee-medium">
                          <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 flex-shrink-0"></span>
                          {characteristic}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Brewing Specifications */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-coffee-dark text-center mb-3 text-sm">
                      Brewing Specifications
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {method.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="text-center">
                          <div className="text-xs text-coffee-medium mb-1">{spec.label}</div>
                          <div className="font-bold text-coffee-dark text-xs">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Quality Promise Section */}
      <AnimatedSection 
        className="section bg-gradient-to-r from-coffee-medium to-coffee-dark text-white"
        variants={fadeInUpVariants}
      >
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Quality Promise</h2>
            <p className="text-xl mb-8 text-cream-medium max-w-3xl mx-auto">
              Every cup represents our commitment to excellence, sustainability, and the perfect coffee experience.
            </p>
            
            <motion.div 
              className="grid md:grid-cols-4 gap-6 mt-12"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { value: "100%", label: "Premium Beans" },
                { value: "25s", label: "Perfect Extraction" },
                { value: "65°C", label: "Ideal Temperature" },
                { value: "15+", label: "Farm Partners" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={staggerItemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl font-bold text-accent-gold mb-2">{stat.value}</div>
                  <div className="text-cream-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

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