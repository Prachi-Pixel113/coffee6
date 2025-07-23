import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

// Loading component with skeleton animation
const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="flex items-center justify-center min-h-screen bg-cream-light">
    <div className="text-center">
      <motion.div
        className="inline-block w-16 h-16 border-4 border-coffee-light border-t-coffee-dark rounded-full mb-4"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-coffee-dark text-lg font-medium">{message}</p>
      <p className="text-text-secondary text-sm mt-2">Brewing your experience...</p>
    </div>
  </div>
);

// Page loading skeleton
const PageLoadingSkeleton = () => (
  <div className="min-h-screen bg-cream-light animate-pulse">
    <div className="container mx-auto px-4 py-20">
      <div className="space-y-8">
        <div className="h-12 bg-gray-300 rounded-lg w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="h-48 bg-gray-300 rounded-lg mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// HOC for lazy loading components
export const withLazyLoading = (LazyComponent, loadingMessage) => {
  return React.forwardRef((props, ref) => (
    <Suspense fallback={<LoadingSpinner message={loadingMessage} />}>
      <LazyComponent {...props} ref={ref} />
    </Suspense>
  ));
};

// HOC for lazy loading pages
export const withPageLazyLoading = (LazyComponent, pageName) => {
  return React.forwardRef((props, ref) => (
    <Suspense fallback={<PageLoadingSkeleton />}>
      <LazyComponent {...props} ref={ref} />
    </Suspense>
  ));
};

// Error boundary for lazy loaded components
export class LazyLoadingErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lazy loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-cream-light">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">☕</div>
            <h2 className="text-2xl font-bold text-coffee-dark mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-text-secondary mb-6">
              We're having trouble loading this page. Please try refreshing.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default LoadingSpinner;