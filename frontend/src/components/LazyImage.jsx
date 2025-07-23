import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { imageOptimizer } from '../utils/imageOptimizer';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  fallback = '/images/placeholder.jpg',
  threshold = 0.1,
  sizes = [400, 800, 1200, 1600],
  quality = 75,
  priority = false,
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
    skip: priority, // Skip lazy loading for priority images
    rootMargin: '50px 0px'
  });

  // Generate optimized image URLs
  const optimizedSrc = imageOptimizer.optimizeImageUrl(src, { 
    width: sizes[2], 
    height: Math.round(sizes[2] * 0.6), 
    quality 
  });
  
  const srcSet = imageOptimizer.generateSrcSet(src, sizes);
  const sizesAttr = imageOptimizer.generateSizes([
    { media: '(max-width: 768px)', size: '100vw' },
    { media: '(max-width: 1024px)', size: '50vw' },
    { media: '(min-width: 1025px)', size: '33vw' }
  ]);

  // Preload priority images
  useEffect(() => {
    if (priority && src) {
      imageOptimizer.preloadImage(optimizedSrc, {
        srcset: srcSet,
        sizes: sizesAttr
      });
      setImageSrc(optimizedSrc);
    }
  }, [priority, src, optimizedSrc, srcSet, sizesAttr]);

  // Load image when in view
  useEffect(() => {
    if ((inView || priority) && !imageSrc && !error) {
      setImageSrc(optimizedSrc);
    }
  }, [inView, priority, optimizedSrc, imageSrc, error]);

  const handleLoad = () => {
    setLoaded(true);
    setImageLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
    setImageSrc(fallback);
  };

  // Calculate aspect ratio for layout shift prevention
  const aspectRatio = imageOptimizer.calculateAspectRatio(sizes[2], Math.round(sizes[2] * 0.6));

  return (
    <div 
      ref={ref} 
      className={`lazy-image-container relative ${className}`} 
      style={{ 
        paddingBottom: `${aspectRatio}%`,
        backgroundColor: '#f5f5f5'
      }}
      {...props}
    >
      {/* Skeleton/Placeholder */}
      {!loaded && (
        <div className="absolute inset-0 lazy-image-skeleton animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 flex items-center justify-center">
          <svg 
            className="w-10 h-10 text-gray-400" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path 
              fillRule="evenodd" 
              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      )}
      
      {/* Actual Image */}
      {imageSrc && (
        <img
          ref={imgRef}
          src={imageSrc}
          srcSet={srcSet}
          sizes={sizesAttr}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`
            absolute inset-0 lazy-image w-full h-full object-cover
            transition-opacity duration-500 ease-in-out
            ${loaded ? 'opacity-100' : 'opacity-0'}
          `}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          style={{
            filter: imageLoaded ? 'none' : 'blur(1px)',
            transition: 'filter 0.3s ease, opacity 0.5s ease'
          }}
        />
      )}
      
      {/* Error state */}
      {error && imageSrc === fallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <div className="text-center">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;

export default LazyImage;