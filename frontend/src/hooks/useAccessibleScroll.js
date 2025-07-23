import { useEffect, useState, useCallback } from 'react';

// Accessibility-focused scroll hook
export const useAccessibleScroll = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  // Check user preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');
    
    setPrefersReducedMotion(mediaQuery.matches);
    setHighContrast(contrastQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    const handleContrastChange = (e) => setHighContrast(e.matches);

    mediaQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  // Accessible scroll to element with proper focus management
  const scrollToElementAccessible = useCallback((elementId, options = {}) => {
    const element = document.getElementById(elementId);
    if (!element) {
      console.warn(`Element with id "${elementId}" not found`);
      return;
    }

    const {
      offset = 0,
      duration = prefersReducedMotion ? 0 : 1000,
      announceToScreenReader = true,
      focusTarget = true,
      behavior = prefersReducedMotion ? 'auto' : 'smooth'
    } = options;

    // Calculate scroll position
    const elementRect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetPosition = elementRect.top + scrollTop - offset;

    // Announce to screen readers
    if (announceToScreenReader) {
      const announcement = `Navigating to ${element.textContent?.slice(0, 50) || element.getAttribute('aria-label') || elementId}`;
      announceToScreenReader(announcement);
    }

    // Perform scroll
    if (prefersReducedMotion) {
      window.scrollTo({
        top: targetPosition,
        behavior: 'auto'
      });
    } else {
      window.scrollTo({
        top: targetPosition,
        behavior: behavior
      });
    }

    // Focus management
    if (focusTarget) {
      // Small delay to ensure scroll is complete
      setTimeout(() => {
        // Make element focusable if it isn't already
        const originalTabIndex = element.getAttribute('tabindex');
        if (!element.matches(':focus-visible') && originalTabIndex === null) {
          element.setAttribute('tabindex', '-1');
        }
        
        element.focus({ preventScroll: true });
        
        // Remove temporary tabindex
        if (originalTabIndex === null) {
          element.removeAttribute('tabindex');
        }
      }, prefersReducedMotion ? 0 : duration);
    }
  }, [prefersReducedMotion]);

  // Accessible scroll to top
  const scrollToTopAccessible = useCallback((announceToScreenReader = true) => {
    if (announceToScreenReader) {
      announceToScreenReader('Scrolling to top of page');
    }

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });

    // Focus on main content or skip link
    setTimeout(() => {
      const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
      const skipLink = document.querySelector('.skip-link');
      
      if (skipLink) {
        skipLink.focus();
      } else if (mainContent) {
        mainContent.focus({ preventScroll: true });
      }
    }, prefersReducedMotion ? 0 : 800);
  }, [prefersReducedMotion]);

  return {
    scrollToElementAccessible,
    scrollToTopAccessible,
    prefersReducedMotion,
    highContrast
  };
};

// Screen reader announcements
export const useScreenReaderAnnouncements = () => {
  const [announcer, setAnnouncer] = useState(null);

  useEffect(() => {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.setAttribute('class', 'sr-only');
    liveRegion.style.cssText = `
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    `;
    
    document.body.appendChild(liveRegion);
    setAnnouncer(liveRegion);

    return () => {
      if (liveRegion && liveRegion.parentNode) {
        liveRegion.parentNode.removeChild(liveRegion);
      }
    };
  }, []);

  const announce = useCallback((message, priority = 'polite') => {
    if (!announcer) return;

    announcer.setAttribute('aria-live', priority);
    announcer.textContent = message;

    // Clear after announcement
    setTimeout(() => {
      announcer.textContent = '';
    }, 1000);
  }, [announcer]);

  return { announce };
};

// Skip link functionality
export const useSkipLinks = () => {
  useEffect(() => {
    const skipLinks = document.querySelectorAll('.skip-link');
    
    skipLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          target.focus();
          target.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      });
    });
  }, []);
};

// Keyboard navigation enhancement
export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Home key - scroll to top
      if (e.key === 'Home' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // End key - scroll to bottom
      if (e.key === 'End' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        window.scrollTo({ 
          top: document.body.scrollHeight, 
          behavior: 'smooth' 
        });
      }

      // Page Up/Down for smooth scrolling
      if (e.key === 'PageUp' || e.key === 'PageDown') {
        e.preventDefault();
        const direction = e.key === 'PageUp' ? -1 : 1;
        const scrollAmount = window.innerHeight * 0.8;
        
        window.scrollBy({
          top: direction * scrollAmount,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
};

// Focus management for scroll animations
export const useFocusManagement = () => {
  const [focusedElement, setFocusedElement] = useState(null);

  const saveFocus = useCallback(() => {
    setFocusedElement(document.activeElement);
  }, []);

  const restoreFocus = useCallback(() => {
    if (focusedElement && focusedElement.focus) {
      focusedElement.focus();
    }
  }, [focusedElement]);

  const trapFocus = useCallback((container) => {
    const focusableElements = container.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    container.addEventListener('keydown', handleKeyDown);
    return () => container.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { saveFocus, restoreFocus, trapFocus };
};

export default useAccessibleScroll;