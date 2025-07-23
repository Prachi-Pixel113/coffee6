import React from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useOptimizedScrollPosition, useOptimizedSmoothScroll } from '../hooks/useOptimizedScroll';
import { useAccessibleScroll, useScreenReaderAnnouncements } from '../hooks/useAccessibleScroll';

const ScrollToTop = () => {
  const { scrollPosition } = useOptimizedScrollPosition();
  const { scrollToTop } = useOptimizedSmoothScroll();
  const { prefersReducedMotion } = useAccessibleScroll();
  const { announce } = useScreenReaderAnnouncements();
  
  const isVisible = scrollPosition > 400;

  const handleScrollToTop = () => {
    announce('Scrolling to top of page');
    scrollToTop(prefersReducedMotion ? 0 : 800);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.9 }}
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-coffee-medium hover:bg-coffee-dark text-white p-3 rounded-full shadow-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-coffee-light focus:ring-offset-2"
          style={{
            background: 'linear-gradient(135deg, var(--coffee-medium), var(--coffee-dark))',
          }}
          aria-label="Scroll to top of page"
          type="button"
        >
          <ChevronUp className="h-6 w-6 group-hover:transform group-hover:-translate-y-1 transition-transform duration-200" />
          
          {/* Pulse effect - only if motion is not reduced */}
          {!prefersReducedMotion && (
            <div className="absolute inset-0 rounded-full bg-coffee-medium opacity-20 animate-ping"></div>
          )}
          
          {/* Accessible tooltip */}
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            Back to top
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;