/**
 * ============================================================================
 * APP.JSX - Premium Universal Product Page Template
 * ============================================================================
 * 
 * Clean, professional product page with:
 * - Smooth Lenis scrolling
 * - Subtle animated background
 * - Scroll progress indicator
 * - All content configurable via siteConfig.js
 */

import { useEffect } from 'react';
import Lenis from 'lenis';

// UI Enhancements
import ScrollProgress from './components/ScrollProgress';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';

// Section Components
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import StickyScroll from './components/StickyScroll';
import TechTiles from './components/TechTiles';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Marquee from './components/Marquee';
import ContactForm from './components/ContactForm';

function App() {
  /**
   * LENIS SMOOTH SCROLLING
   * Creates premium, buttery smooth scroll experience
   */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      {/* Main Content */}
      <div className="min-h-screen bg-white text-gray-900 font-sans antialiased relative">

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Product Carousel */}
        <Carousel />



        {/* Services / Why Choose Us */}
        <StickyScroll />

        {/* Tech Stack */}
        <TechTiles />

        {/* Testimonials */}
        <Testimonials />



        {/* FAQ */}
        <FAQ />

        {/* Marquee */}
        <Marquee />

        {/* Contact */}
        <ContactForm />

        {/* Floating WhatsApp */}
        <FloatingSocials />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
