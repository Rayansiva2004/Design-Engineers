import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppChat from './components/WhatsAppChat/WhatsAppChat';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const ServicesPage = lazy(() => import('./pages/Services/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/Projects/ProjectsPage'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const ServiceDetailPage = lazy(() => import('./pages/Services/ServiceDetailPage'));

// Loading component
const PageLoader = () => (
  <div style={{
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-heading)',
    color: 'var(--color-primary)'
  }}>
    <div className="bounce">Loading...</div>
  </div >
);

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Suspense fallback={<PageLoader />}><PageTransition><Home /></PageTransition></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<PageLoader />}><PageTransition><About /></PageTransition></Suspense>} />
          <Route path="/services" element={<Suspense fallback={<PageLoader />}><PageTransition><ServicesPage /></PageTransition></Suspense>} />
          <Route path="/services/:serviceId" element={<Suspense fallback={<PageLoader />}><PageTransition><ServiceDetailPage /></PageTransition></Suspense>} />
          <Route path="/projects" element={<Suspense fallback={<PageLoader />}><PageTransition><ProjectsPage /></PageTransition></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<PageLoader />}><PageTransition><Contact /></PageTransition></Suspense>} />
        </Routes>
      </AnimatePresence>
      <WhatsAppChat />
      <Footer />
    </div>
  );
}

export default App;
