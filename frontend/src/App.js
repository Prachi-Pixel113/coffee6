import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { LazyLoadingErrorBoundary, withPageLazyLoading } from "./components/LazyComponentLoader";
import { performanceMonitor } from "./utils/performanceMonitor";

// Lazy load components
const Header = React.lazy(() => import("./components/Header"));
const Footer = React.lazy(() => import("./components/Footer"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Offers = React.lazy(() => import("./pages/Offers"));
const CoffeeShop = React.lazy(() => import("./pages/CoffeeShop"));
const Contact = React.lazy(() => import("./pages/Contact"));

// Wrap pages with lazy loading HOC
const LazyHome = withPageLazyLoading(Home, "Home");
const LazyAbout = withPageLazyLoading(About, "About");
const LazyOffers = withPageLazyLoading(Offers, "Offers");
const LazyCoffeeShop = withPageLazyLoading(CoffeeShop, "Coffee Shop");
const LazyContact = withPageLazyLoading(Contact, "Contact");

// Loading component for layout components
const LayoutLoading = () => (
  <div className="animate-pulse bg-gray-200 h-16 w-full"></div>
);

function App() {
  // Start performance monitoring
  React.useEffect(() => {
    performanceMonitor.mark('app-start');
    
    return () => {
      performanceMonitor.mark('app-end');
      performanceMonitor.measure('app-lifecycle', 'app-start', 'app-end');
    };
  }, []);

  return (
    <LazyLoadingErrorBoundary>
      <div className="App">
        <CartProvider>
          <BrowserRouter>
            <Suspense fallback={<LayoutLoading />}>
              <Header />
            </Suspense>
            
            <main className="min-h-screen">
              <Routes>
                <Route path="/" element={<LazyHome />} />
                <Route path="/about" element={<LazyAbout />} />
                <Route path="/offers" element={<LazyOffers />} />
                <Route path="/coffee-shop" element={<LazyCoffeeShop />} />
                <Route path="/contact" element={<LazyContact />} />
              </Routes>
            </main>
            
            <Suspense fallback={<LayoutLoading />}>
              <Footer />
            </Suspense>
            
            <Suspense fallback={null}>
              <ScrollToTop />
            </Suspense>
          </BrowserRouter>
        </CartProvider>
      </div>
    </LazyLoadingErrorBoundary>
  );
}

export default App;