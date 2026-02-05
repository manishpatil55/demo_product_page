/**
 * ============================================================================
 * HOME.JSX - Main Landing Page
 * ============================================================================
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

// UI Enhancements
import ScrollProgress from '../components/ScrollProgress';

// Layout Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingSocials from '../components/FloatingSocials';

// Section Components
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Pricing from '../components/Pricing';
import ProjectShowcase from '../components/ProjectShowcase';
import Testimonials from '../components/Testimonials';
import TechTiles from '../components/TechTiles';
import ContactForm from '../components/ContactForm';

export default function Home() {
    const { hash } = useLocation();

    /**
     * LENIS SMOOTH SCROLLING
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

    // Handle Hash Scrolling (e.g. from Project Page -> Home#contact)
    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500); // Slight delay to allow page load
        }
    }, [hash]);

    return (
        <>
            <div className="min-h-screen bg-white text-gray-900 font-sans antialiased relative">
                <ScrollProgress />
                <Navbar />
                <Hero />
                <Carousel />
                <TechTiles />
                <ProjectShowcase />
                <Pricing />
                <Testimonials />
                <div id="contact">
                    <ContactForm />
                </div>
                <FloatingSocials />
                <Footer />
            </div>
        </>
    );
}
