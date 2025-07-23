// Image optimization utilities
export const imageOptimizer = {
  // Check WebP support
  supportsWebP: () => {
    if (typeof window === 'undefined') return false;
    
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  },

  // Check AVIF support
  supportsAVIF: () => {
    if (typeof window === 'undefined') return false;
    
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  },

  // Get optimal image format
  getOptimalFormat: () => {
    if (imageOptimizer.supportsAVIF()) return 'avif';
    if (imageOptimizer.supportsWebP()) return 'webp';
    return 'jpg';
  },

  // Generate responsive image URLs for Unsplash
  generateResponsiveUrls: (baseUrl, sizes = [400, 800, 1200, 1600]) => {
    const format = imageOptimizer.getOptimalFormat();
    
    return sizes.map(size => ({
      url: `${baseUrl}&w=${size}&h=${Math.round(size * 0.6)}&fm=${format}&q=75`,
      width: size,
      descriptor: `${size}w`
    }));
  },

  // Generate srcset string
  generateSrcSet: (baseUrl, sizes = [400, 800, 1200, 1600]) => {
    const urls = imageOptimizer.generateResponsiveUrls(baseUrl, sizes);
    return urls.map(({ url, descriptor }) => `${url} ${descriptor}`).join(', ');
  },

  // Generate sizes attribute for responsive images
  generateSizes: (breakpoints = [
    { media: '(max-width: 768px)', size: '100vw' },
    { media: '(max-width: 1024px)', size: '50vw' },
    { media: '(min-width: 1025px)', size: '33vw' }
  ]) => {
    return breakpoints
      .map(({ media, size }) => `${media} ${size}`)
      .join(', ');
  },

  // Optimize image URL with compression
  optimizeImageUrl: (url, options = {}) => {
    const {
      width = 800,
      height = 600,
      quality = 75,
      format = 'auto',
      crop = 'entropy'
    } = options;

    // Handle Unsplash URLs
    if (url.includes('unsplash.com')) {
      const baseUrl = url.split('?')[0];
      const optimalFormat = format === 'auto' ? imageOptimizer.getOptimalFormat() : format;
      
      return `${baseUrl}?crop=${crop}&cs=srgb&fm=${optimalFormat}&w=${width}&h=${height}&q=${quality}`;
    }

    // For other URLs, return as-is (could be enhanced for other CDNs)
    return url;
  },

  // Preload critical images
  preloadImage: (src, options = {}) => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      
      if (options.srcset) {
        link.setAttribute('imagesrcset', options.srcset);
      }
      
      if (options.sizes) {
        link.setAttribute('imagesizes', options.sizes);
      }

      link.onload = () => resolve(src);
      link.onerror = reject;
      
      document.head.appendChild(link);
    });
  },

  // Lazy load images with Intersection Observer
  lazyLoadImage: (img, options = {}) => {
    const {
      threshold = 0.1,
      rootMargin = '50px 0px',
      src,
      srcset,
      sizes
    } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target;
            
            // Set the actual source
            if (src) image.src = src;
            if (srcset) image.srcset = srcset;
            if (sizes) image.sizes = sizes;
            
            // Remove loading attribute
            image.removeAttribute('loading');
            
            // Stop observing
            observer.unobserve(image);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(img);
    return observer;
  },

  // Progressive image loading
  loadImageProgressively: (lowQualityUrl, highQualityUrl, element) => {
    return new Promise((resolve) => {
      // Load low quality first
      const lowQualityImage = new Image();
      lowQualityImage.onload = () => {
        element.src = lowQualityUrl;
        element.style.filter = 'blur(2px)';
        
        // Then load high quality
        const highQualityImage = new Image();
        highQualityImage.onload = () => {
          element.src = highQualityUrl;
          element.style.filter = 'none';
          element.style.transition = 'filter 0.3s ease';
          resolve(highQualityUrl);
        };
        
        highQualityImage.src = highQualityUrl;
      };
      
      lowQualityImage.src = lowQualityUrl;
    });
  },

  // Calculate image dimensions for layout shift prevention
  calculateAspectRatio: (width, height) => {
    return (height / width) * 100;
  },

  // Generate placeholder data URL
  generatePlaceholder: (width, height, color = '#f0f0f0') => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    
    return canvas.toDataURL();
  },

  // Convert image to base64 for inline use
  convertToBase64: (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  },

  // Compress image file
  compressImage: (file, quality = 0.8) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        
        ctx.drawImage(img, 0, 0);
        
        canvas.toBlob(resolve, 'image/jpeg', quality);
      };
      
      img.src = URL.createObjectURL(file);
    });
  },

  // Resize image while maintaining aspect ratio
  resizeImage: (file, maxWidth, maxHeight) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        let { width, height } = img;
        
        // Calculate new dimensions
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        ctx.drawImage(img, 0, 0, width, height);
        
        canvas.toBlob(resolve, 'image/jpeg', 0.8);
      };
      
      img.src = URL.createObjectURL(file);
    });
  }
};

// Image loading performance metrics
export const imagePerformanceTracker = {
  // Track image loading time
  trackImageLoad: (src, startTime = performance.now()) => {
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      console.log(`Image loaded in ${loadTime.toFixed(2)}ms:`, src);
      
      // Report to analytics if available
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'image_load', {
          event_category: 'performance',
          event_label: src,
          value: Math.round(loadTime)
        });
      }
    };
    
    img.onerror = () => {
      console.error('Failed to load image:', src);
    };
    
    img.src = src;
  },

  // Monitor cumulative layout shift from images
  observeLayoutShift: () => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.hadRecentInput) continue;
          
          console.log('Layout shift detected:', entry.value);
          
          // Report to analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'layout_shift', {
              event_category: 'performance',
              value: Math.round(entry.value * 1000)
            });
          }
        }
      });
      
      observer.observe({ type: 'layout-shift', buffered: true });
    }
  }
};

export default imageOptimizer;