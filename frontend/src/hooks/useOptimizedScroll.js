import { useEffect, useState, useCallback, useRef } from 'react';

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimized smooth scroll hook with requestAnimationFrame
export const useOptimizedSmoothScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const animationFrameRef = useRef(null);

  // Optimized scroll to element with requestAnimationFrame
  const scrollToElement = useCallback((elementId, offset = 0, duration = 1000) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + startPosition - offset;
    const distance = targetPosition - startPosition;
    const reducedMotion = prefersReducedMotion();

    // If reduced motion is preferred, scroll instantly
    if (reducedMotion) {
      window.scrollTo(0, targetPosition);
      return;
    }

    setIsScrolling(true);
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
        // Announce completion to screen readers
        if (element.getAttribute('tabindex') === null) {
          element.setAttribute('tabindex', '-1');
        }
        element.focus({ preventScroll: true });
        element.removeAttribute('tabindex');
      }
    };

    // Cancel any existing animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(animateScroll);
  }, []);

  // Optimized scroll to top
  const scrollToTop = useCallback((duration = 800) => {
    const startPosition = window.pageYOffset;
    const reducedMotion = prefersReducedMotion();

    if (reducedMotion || startPosition === 0) {
      window.scrollTo(0, 0);
      return;
    }

    setIsScrolling(true);
    let startTime = null;

    const easeOutCubic = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animateScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress);

      window.scrollTo(0, startPosition - startPosition * ease);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        setIsScrolling(false);
      }
    };

    // Cancel any existing animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(animateScroll);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return { scrollToElement, scrollToTop, isScrolling };
};

// Optimized scroll position hook with throttling
export const useOptimizedScrollPosition = (throttleMs = 16) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollYRef = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollPosition = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollYRef.current ? 'down' : 'up';
      const isUp = scrollY < lastScrollYRef.current;

      setScrollPosition(scrollY);
      setScrollDirection(direction);
      setIsScrollingUp(isUp);
      lastScrollYRef.current = scrollY;
      ticking.current = false;
    };

    const requestTick = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateScrollPosition);
        ticking.current = true;
      }
    };

    const handleScroll = () => {
      requestTick();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { 
    scrollPosition, 
    scrollDirection, 
    isScrollingUp,
    isAtTop: scrollPosition === 0,
    isNearTop: scrollPosition < 100
  };
};

// Hook for intersection observer with performance optimizations
export const useOptimizedIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef(null);
  const observerRef = useRef(null);

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
    ...options
  };

  useEffect(() => {
    const currentTarget = targetRef.current;
    if (!currentTarget) return;

    // Create observer with optimized settings
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsIntersecting(isIntersecting);
        
        if (isIntersecting && !hasIntersected) {
          setHasIntersected(true);
          
          // Unobserve if triggerOnce is true
          if (defaultOptions.triggerOnce) {
            observerRef.current?.unobserve(currentTarget);
          }
        }
      },
      {
        ...defaultOptions,
        // Use device pixel ratio for better performance
        threshold: Array.isArray(defaultOptions.threshold) 
          ? defaultOptions.threshold 
          : [defaultOptions.threshold]
      }
    );

    observerRef.current.observe(currentTarget);

    return () => {
      if (observerRef.current && currentTarget) {
        observerRef.current.unobserve(currentTarget);
      }
    };
  }, [hasIntersected, defaultOptions.triggerOnce]);

  return { 
    ref: targetRef, 
    isIntersecting: hasIntersected || isIntersecting,
    hasIntersected
  };
};

// Scroll lock utility for modals and overlays
export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }, []);

  useEffect(() => {
    return () => {
      unlockScroll();
    };
  }, [unlockScroll]);

  return { lockScroll, unlockScroll };
};

export default useOptimizedSmoothScroll;