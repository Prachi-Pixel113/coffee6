import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  fallback = '/images/placeholder.jpg',
  threshold = 0.1,
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  // Load image when in view
  React.useEffect(() => {
    if (inView && !imageSrc && !error) {
      setImageSrc(src);
    }
  }, [inView, src, imageSrc, error]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  return (
    <div ref={ref} className={`lazy-image-container ${className}`} {...props}>
      {/* Skeleton/Placeholder */}
      {!loaded && (
        <div className="lazy-image-skeleton animate-pulse bg-gray-200 w-full h-full flex items-center justify-center">
          <svg 
            className="w-10 h-10 text-gray-400" 
            fill="currentColor" 
            viewBox="0 0 20 20"
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
          src={error ? fallback : imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`
            lazy-image transition-opacity duration-500 w-full h-full object-cover
            ${loaded ? 'opacity-100' : 'opacity-0'}
            ${!loaded ? 'absolute inset-0' : ''}
          `}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;