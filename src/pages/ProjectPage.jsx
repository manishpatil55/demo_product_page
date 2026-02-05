/**
 * ============================================================================
 * PROJECT PAGE.JSX - Universal Project Template
 * ============================================================================
 */

import { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, Zap, MapPin, Bell, CreditCard, Clock, MessageSquare, Globe } from 'lucide-react';
import Lenis from 'lenis';
import siteConfig from '../config/siteConfig';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Carousel from '../components/Carousel';

export default function ProjectPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = siteConfig.showcase.projects.find(p => p.slug === slug);

    // Fallback if no specific landing config
    const landing = project?.landingPage || {
        themeColor: '#111',
        hero: {
            title: project?.title || "App Development Solution",
            subtitle: project?.description || "Launch your business with our robust solution.",
            pills: ["Easy Navigation", "Scalable", "Secure", "User Friendly"],
            cta: "Get a Quote",
            image: project?.image
        },
        about: {
            title: `What is ${project?.title || 'This App'}?`,
            description: project?.challenge || "A complete solution for your business needs.",
            image: project?.image
        }
    };

    useEffect(() => {
        // Scroll to top immediately when page loads or slug changes
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [slug]);

    if (!project) return null;

    return (
        <div className="min-h-screen font-sans bg-gray-900 text-gray-900 selection:bg-blue-100 selection:text-blue-900 overscroll-none">
            <Navbar />

            {/* 1. HERO SECTION (Liquid Theme Animation) */}
            <header
                className="relative min-h-screen pt-24 pb-32 px-6 md:px-12 overflow-hidden bg-gray-900 flex flex-col justify-center"
            >


                {/* Dynamic Background Layers */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gray-900" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black opacity-80" />

                    {/* Multiple Pulsing Glow Orbs */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
                        style={{ backgroundColor: landing.themeColor }}
                    />
                    <motion.div
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px]"
                        style={{ backgroundColor: adjustColor(landing.themeColor, -30) }}
                    />
                </div>

                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
                    <div className="text-white space-y-6">
                        <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 text-sm font-medium transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Projects
                        </Link>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1] tracking-tight"
                        >
                            {landing.hero.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-xl"
                        >
                            {landing.hero.subtitle}
                        </motion.p>

                        {/* Enhanced Pills with Hover */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {landing.hero.pills.map((pill, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    whileHover={{ scale: 1.05, borderColor: `${landing.themeColor}80` }}
                                    className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-gray-300 backdrop-blur-sm cursor-default transition-all hover:bg-white/10 hover:text-white"
                                >
                                    {pill}
                                </motion.span>
                            ))}
                        </div>

                        {/* Enhanced Button with Shimmer */}
                        <div className="pt-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative group px-8 py-4 rounded-xl font-bold text-base text-white overflow-hidden transition-all"
                                style={{
                                    backgroundColor: landing.themeColor,
                                    boxShadow: `0 20px 60px -15px ${landing.themeColor}80`
                                }}
                            >
                                {/* Shimmer Effect */}
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <span className="flex items-center gap-3 relative z-10">
                                    {landing.hero.cta} <ArrowRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" />
                                </span>
                            </motion.button>
                        </div>
                    </div>

                    {/* Image Section - Static with Hover Glow */}
                    <div className="relative flex justify-center lg:justify-end h-full items-center group">
                        <div className="relative z-10 w-full max-w-[550px]">
                            {/* Glow on hover */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full blur-[80px] -z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                                style={{ backgroundColor: landing.themeColor }}
                            />
                            <img
                                src={landing.hero.image}
                                alt="Hero"
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* ENHANCED ANIMATED SMOOTH CURVE DIVIDERS */}
                <div className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none overflow-hidden z-20">

                    {/* Glow Effect Layer (blur behind curves) */}
                    <div
                        className="absolute bottom-0 left-0 w-full h-[80px] blur-xl opacity-50"
                        style={{ background: `linear-gradient(to top, ${landing.themeColor}80, transparent)` }}
                    />

                    {/* Layer 1: Darkest (back, moves right) */}
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="absolute bottom-0 left-0 w-[200%] h-[110px]"
                    >
                        <svg className="w-full h-full" viewBox="0 0 2880 110" preserveAspectRatio="none">
                            <path
                                fill={adjustColor(landing.themeColor, -60)}
                                d="M0,110 L0,70 Q360,20 720,70 Q1080,120 1440,70 Q1800,20 2160,70 Q2520,120 2880,70 L2880,110 Z"
                                opacity="0.8"
                            />
                        </svg>
                    </motion.div>

                    {/* Layer 2: Theme color (moves left) */}
                    <motion.div
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        className="absolute bottom-0 left-0 w-[200%] h-[90px]"
                    >
                        <svg className="w-full h-full" viewBox="0 0 2880 90" preserveAspectRatio="none">
                            <path
                                fill={adjustColor(landing.themeColor, -20)}
                                d="M0,90 L0,55 Q360,15 720,55 Q1080,95 1440,55 Q1800,15 2160,55 Q2520,95 2880,55 L2880,90 Z"
                            />
                        </svg>
                    </motion.div>

                    {/* Layer 3: Lighter theme (moves right) */}
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                        className="absolute bottom-0 left-0 w-[200%] h-[70px]"
                    >
                        <svg className="w-full h-full" viewBox="0 0 2880 70" preserveAspectRatio="none">
                            <path
                                fill={landing.themeColor}
                                d="M0,70 L0,45 Q360,10 720,45 Q1080,80 1440,45 Q1800,10 2160,45 Q2520,80 2880,45 L2880,70 Z"
                                opacity="0.9"
                            />
                        </svg>
                    </motion.div>

                    {/* Layer 4: White (front, fastest, moves left) */}
                    <motion.div
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                        className="absolute bottom-0 left-0 w-[200%] h-[55px]"
                    >
                        <svg className="w-full h-full" viewBox="0 0 2880 55" preserveAspectRatio="none">
                            <path
                                fill="#ffffff"
                                d="M0,55 L0,35 Q360,5 720,35 Q1080,65 1440,35 Q1800,5 2160,35 Q2520,65 2880,35 L2880,55 Z"
                            />
                        </svg>
                    </motion.div>
                </div>
            </header>

            {/* 2. TECH STACK MARQUEE */}
            {landing.techStack && (
                <section className="py-16 border-b border-gray-100 bg-white">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-10">Powering Next-Gen Apps</p>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {landing.techStack.map((tech, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -3, boxShadow: `0 10px 30px -10px ${landing.themeColor}40` }}
                                    className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-md border border-gray-100 transition-all cursor-default"
                                >
                                    <div
                                        className="w-2.5 h-2.5 rounded-full"
                                        style={{ backgroundColor: landing.themeColor }}
                                    />
                                    <span className="font-semibold text-gray-800">{tech.name}</span>
                                    <span className="text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-lg font-medium">{tech.type}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 3. PLATFORM MODULES */}
            {landing.modules && (
                <section className="py-24 px-6 bg-white">
                    <div className="max-w-[1300px] mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold">A Complete Ecosystem</h2>
                            <p className="text-gray-500 max-w-2xl mx-auto text-lg">We don't just build an app; we build an entire business operating system for you.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {landing.modules.map((mod, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center group"
                                >
                                    <div className="w-full aspect-[4/3] bg-gray-100 mb-8 rounded-2xl overflow-hidden relative">
                                        <img src={mod.image} alt={mod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                            {mod.badge}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{mod.title}</h3>
                                    <p className="text-gray-500 mb-8 leading-relaxed text-sm px-4">
                                        {mod.description}
                                    </p>
                                    <button
                                        className="mt-auto text-white px-6 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90 w-full"
                                        style={{ backgroundColor: landing.themeColor }}
                                    >
                                        View Demo
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 4. RADIAL FEATURE SHOWCASE */}
            {landing.radialFeatures && (
                <section className="py-32 px-6 overflow-hidden bg-white">
                    <div className="max-w-[1400px] mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Packed with Powerful Features</h2>
                        <p className="text-gray-500">Everything you need to scale your business.</p>
                    </div>

                    <div className="max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-12 items-center">
                        {/* Left Features */}
                        <div className="space-y-12">
                            {landing.radialFeatures.slice(0, 3).map((feat, i) => (
                                <FeatureItem key={i} feature={feat} align="right" />
                            ))}
                        </div>

                        {/* Center Phone */}
                        <div className="relative flex justify-center">
                            <div
                                className="absolute inset-0 blur-[100px] rounded-full opacity-20"
                                style={{ backgroundColor: landing.themeColor }}
                            />
                            <img src={landing.hero.image} alt="Features" className="relative z-10 w-full max-w-[300px] drop-shadow-2xl" />
                        </div>

                        {/* Right Features */}
                        <div className="space-y-12">
                            {landing.radialFeatures.slice(3, 6).map((feat, i) => (
                                <FeatureItem key={i} feature={feat} align="left" />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 5. APP SCREEN CAROUSEL (GLANCE) */}
            {landing.screens && (
                <Carousel
                    items={landing.screens.map((screen, i) => ({
                        // Minimal data needed for screenshot variant
                        image: screen,
                        title: `Screen ${i + 1}`, // Used for alt text
                    }))}
                    label="App Preview"
                    title="Take a Glance"
                    description="Beautifully crafted screens for the best user experience."
                    align="left"
                    themeColor={landing.themeColor}
                    variant="screenshot"
                />
            )}

            {/* 6. CONTACT FORM - Using Site Contact Component */}
            <ContactForm />

            <Footer />
        </div>
    );
}


function FeatureItem({ feature, align }) {
    // Map string icon names to components
    const icons = { MapPin, Bell, CreditCard, Clock, MessageSquare, Globe };
    const Icon = icons[feature.icon] || Zap;

    return (
        <div className={`flex items-center gap-6 ${align === 'right' ? 'lg:flex-row-reverse text-right' : 'flex-row text-left'}`}>
            <div className={`flex-1 ${align === 'right' ? 'lg:text-right' : ''}`}>
                <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
            <div
                className="w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm shrink-0"
                style={{ backgroundColor: `${feature.color || '#3b82f6'}15`, borderColor: `${feature.color || '#3b82f6'}20`, color: feature.color || '#3b82f6' }}
            >
                <Icon className="w-7 h-7" />
            </div>
        </div>
    )
}

function LiquidWave({ color, opacity, duration, direction = 1, height = "100%" }) {
    // Downward-curving wave path (like valleys/scallops)
    // This path starts at Y=0 (top), curves DOWN to form valleys, and ends at Y=0
    // The path is designed so start and end points match for seamless looping
    const wavePath = "M0,0 C180,100 360,100 540,0 C720,-100 900,-100 1080,0 C1260,100 1440,100 1440,0 L1440,320 L0,320 Z";

    return (
        <motion.div
            animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{
                repeat: Infinity,
                duration: duration,
                ease: "linear"
            }}
            className="absolute bottom-0 left-0 flex w-[200%] pointer-events-none"
            style={{ opacity, height }}
        >
            {/* Wave 1 */}
            <svg className="flex-none w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill={color} d={wavePath}></path>
            </svg>
            {/* Wave 2 (Identical for seamless loop) */}
            <svg className="flex-none w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill={color} d={wavePath}></path>
            </svg>
        </motion.div>
    );
}

function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}
