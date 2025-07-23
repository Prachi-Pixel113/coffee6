// Performance monitoring utilities
export class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.observers = new Map();
    this.startTime = performance.now();
    this.initializeObservers();
  }

  // Initialize performance observers
  initializeObservers() {
    // Core Web Vitals monitoring
    this.observeCoreWebVitals();
    
    // Resource timing
    this.observeResourceTiming();
    
    // Navigation timing
    this.observeNavigationTiming();
    
    // Long tasks
    this.observeLongTasks();
  }

  // Core Web Vitals (CLS, FID, LCP)
  observeCoreWebVitals() {
    if (!('PerformanceObserver' in window)) return;

    // Cumulative Layout Shift (CLS)
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      this.metrics.set('CLS', clsValue);
    });

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      this.observers.set('CLS', clsObserver);
    } catch (e) {
      console.warn('CLS observer not supported:', e);
    }

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.metrics.set('FID', entry.processingStart - entry.startTime);
      }
    });

    try {
      fidObserver.observe({ type: 'first-input', buffered: true });
      this.observers.set('FID', fidObserver);
    } catch (e) {
      console.warn('FID observer not supported:', e);
    }

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.set('LCP', lastEntry.startTime);
    });

    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      this.observers.set('LCP', lcpObserver);
    } catch (e) {
      console.warn('LCP observer not supported:', e);
    }
  }

  // Resource timing monitoring
  observeResourceTiming() {
    if (!('PerformanceObserver' in window)) return;

    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.analyzeResourceEntry(entry);
      }
    });

    try {
      resourceObserver.observe({ type: 'resource', buffered: true });
      this.observers.set('resource', resourceObserver);
    } catch (e) {
      console.warn('Resource observer not supported:', e);
    }
  }

  // Navigation timing monitoring
  observeNavigationTiming() {
    if (!('PerformanceObserver' in window)) return;

    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.analyzeNavigationEntry(entry);
      }
    });

    try {
      navigationObserver.observe({ type: 'navigation', buffered: true });
      this.observers.set('navigation', navigationObserver);
    } catch (e) {
      console.warn('Navigation observer not supported:', e);
    }
  }

  // Long tasks monitoring
  observeLongTasks() {
    if (!('PerformanceObserver' in window)) return;

    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.metrics.set('longTask', {
          duration: entry.duration,
          startTime: entry.startTime,
          name: entry.name
        });
      }
    });

    try {
      longTaskObserver.observe({ type: 'longtask', buffered: true });
      this.observers.set('longtask', longTaskObserver);
    } catch (e) {
      console.warn('Long task observer not supported:', e);
    }
  }

  // Analyze resource entry
  analyzeResourceEntry(entry) {
    const resourceType = this.getResourceType(entry.name);
    const loadTime = entry.responseEnd - entry.startTime;
    const transferSize = entry.transferSize || 0;

    const resourceMetrics = this.metrics.get('resources') || {};
    if (!resourceMetrics[resourceType]) {
      resourceMetrics[resourceType] = {
        count: 0,
        totalSize: 0,
        totalTime: 0,
        averageTime: 0
      };
    }

    resourceMetrics[resourceType].count++;
    resourceMetrics[resourceType].totalSize += transferSize;
    resourceMetrics[resourceType].totalTime += loadTime;
    resourceMetrics[resourceType].averageTime = 
      resourceMetrics[resourceType].totalTime / resourceMetrics[resourceType].count;

    this.metrics.set('resources', resourceMetrics);
  }

  // Analyze navigation entry
  analyzeNavigationEntry(entry) {
    const navigationMetrics = {
      domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
      load: entry.loadEventEnd - entry.loadEventStart,
      domInteractive: entry.domInteractive - entry.fetchStart,
      domComplete: entry.domComplete - entry.fetchStart,
      firstPaint: this.getFirstPaint(),
      firstContentfulPaint: this.getFirstContentfulPaint()
    };

    this.metrics.set('navigation', navigationMetrics);
  }

  // Get resource type from URL
  getResourceType(url) {
    if (url.includes('.css')) return 'CSS';
    if (url.includes('.js')) return 'JavaScript';
    if (url.match(/\.(jpg|jpeg|png|gif|svg|webp|avif)$/i)) return 'Image';
    if (url.match(/\.(woff|woff2|ttf|otf)$/i)) return 'Font';
    return 'Other';
  }

  // Get First Paint timing
  getFirstPaint() {
    const fpEntry = performance.getEntriesByName('first-paint')[0];
    return fpEntry ? fpEntry.startTime : null;
  }

  // Get First Contentful Paint timing
  getFirstContentfulPaint() {
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    return fcpEntry ? fcpEntry.startTime : null;
  }

  // Custom timing marks
  mark(name) {
    performance.mark(name);
  }

  // Measure between marks
  measure(name, startMark, endMark) {
    const measurement = performance.measure(name, startMark, endMark);
    this.metrics.set(name, measurement.duration);
    return measurement.duration;
  }

  // Time a function execution
  time(name, fn) {
    const startMark = `${name}-start`;
    const endMark = `${name}-end`;
    
    this.mark(startMark);
    const result = fn();
    this.mark(endMark);
    
    this.measure(name, startMark, endMark);
    
    return result;
  }

  // Time an async function
  async timeAsync(name, fn) {
    const startMark = `${name}-start`;
    const endMark = `${name}-end`;
    
    this.mark(startMark);
    const result = await fn();
    this.mark(endMark);
    
    this.measure(name, startMark, endMark);
    
    return result;
  }

  // Get all metrics
  getMetrics() {
    return Object.fromEntries(this.metrics);
  }

  // Get specific metric
  getMetric(name) {
    return this.metrics.get(name);
  }

  // Generate performance report
  generateReport() {
    const metrics = this.getMetrics();
    const report = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connectionType: this.getConnectionType(),
      deviceMemory: this.getDeviceMemory(),
      metrics: metrics,
      recommendations: this.generateRecommendations(metrics)
    };

    return report;
  }

  // Get connection type
  getConnectionType() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return connection ? connection.effectiveType : 'unknown';
  }

  // Get device memory
  getDeviceMemory() {
    return navigator.deviceMemory || 'unknown';
  }

  // Generate performance recommendations
  generateRecommendations(metrics) {
    const recommendations = [];

    // CLS recommendations
    if (metrics.CLS > 0.1) {
      recommendations.push({
        type: 'CLS',
        severity: 'high',
        message: 'Cumulative Layout Shift is high. Consider adding size attributes to images and reserving space for dynamic content.'
      });
    }

    // FID recommendations
    if (metrics.FID > 100) {
      recommendations.push({
        type: 'FID',
        severity: 'medium',
        message: 'First Input Delay is high. Consider code splitting and reducing JavaScript bundle size.'
      });
    }

    // LCP recommendations
    if (metrics.LCP > 2500) {
      recommendations.push({
        type: 'LCP',
        severity: 'high',
        message: 'Largest Contentful Paint is slow. Consider optimizing images and critical resources.'
      });
    }

    // Resource recommendations
    if (metrics.resources) {
      const { Image, JavaScript, CSS } = metrics.resources;
      
      if (Image && Image.averageTime > 1000) {
        recommendations.push({
          type: 'Images',
          severity: 'medium',
          message: 'Image loading is slow. Consider using WebP format and lazy loading.'
        });
      }

      if (JavaScript && JavaScript.totalSize > 500000) {
        recommendations.push({
          type: 'JavaScript',
          severity: 'medium',
          message: 'JavaScript bundle is large. Consider code splitting and tree shaking.'
        });
      }
    }

    return recommendations;
  }

  // Log performance report to console
  logReport() {
    const report = this.generateReport();
    console.group('🚀 Performance Report');
    console.log('Timestamp:', report.timestamp);
    console.log('URL:', report.url);
    console.log('Connection:', report.connectionType);
    console.log('Device Memory:', report.deviceMemory);
    console.log('Metrics:', report.metrics);
    
    if (report.recommendations.length > 0) {
      console.group('📈 Recommendations');
      report.recommendations.forEach(rec => {
        console.log(`[${rec.severity.toUpperCase()}] ${rec.type}: ${rec.message}`);
      });
      console.groupEnd();
    }
    
    console.groupEnd();
    return report;
  }

  // Send report to analytics
  sendToAnalytics(report) {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      // Send core web vitals
      if (report.metrics.CLS !== undefined) {
        window.gtag('event', 'CLS', {
          event_category: 'Web Vitals',
          value: Math.round(report.metrics.CLS * 1000)
        });
      }

      if (report.metrics.FID !== undefined) {
        window.gtag('event', 'FID', {
          event_category: 'Web Vitals',
          value: Math.round(report.metrics.FID)
        });
      }

      if (report.metrics.LCP !== undefined) {
        window.gtag('event', 'LCP', {
          event_category: 'Web Vitals',
          value: Math.round(report.metrics.LCP)
        });
      }
    }
  }

  // Cleanup observers
  cleanup() {
    this.observers.forEach(observer => {
      try {
        observer.disconnect();
      } catch (e) {
        console.warn('Error disconnecting observer:', e);
      }
    });
    this.observers.clear();
    this.metrics.clear();
  }
}

// Bundle analyzer utility
export const bundleAnalyzer = {
  // Analyze loaded resources
  analyzeBundle() {
    const resources = performance.getEntriesByType('resource');
    const analysis = {
      javascript: { count: 0, size: 0 },
      css: { count: 0, size: 0 },
      images: { count: 0, size: 0 },
      fonts: { count: 0, size: 0 },
      other: { count: 0, size: 0 }
    };

    resources.forEach(resource => {
      const type = this.getResourceType(resource.name);
      const size = resource.transferSize || 0;
      
      analysis[type].count++;
      analysis[type].size += size;
    });

    return analysis;
  },

  // Get resource type
  getResourceType(name) {
    if (name.includes('.js')) return 'javascript';
    if (name.includes('.css')) return 'css';
    if (name.match(/\.(jpg|jpeg|png|gif|svg|webp|avif)$/i)) return 'images';
    if (name.match(/\.(woff|woff2|ttf|otf)$/i)) return 'fonts';
    return 'other';
  },

  // Generate bundle report
  generateBundleReport() {
    const analysis = this.analyzeBundle();
    const totalSize = Object.values(analysis).reduce((sum, type) => sum + type.size, 0);
    
    console.group('📦 Bundle Analysis');
    console.log('Total Bundle Size:', this.formatBytes(totalSize));
    
    Object.entries(analysis).forEach(([type, data]) => {
      const percentage = totalSize > 0 ? ((data.size / totalSize) * 100).toFixed(1) : 0;
      console.log(`${type}: ${data.count} files, ${this.formatBytes(data.size)} (${percentage}%)`);
    });
    
    console.groupEnd();
    return analysis;
  },

  // Format bytes to human readable
  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
};

// Create global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

// Auto-report on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const report = performanceMonitor.logReport();
      performanceMonitor.sendToAnalytics(report);
      bundleAnalyzer.generateBundleReport();
    }, 1000);
  });
}

export default PerformanceMonitor;