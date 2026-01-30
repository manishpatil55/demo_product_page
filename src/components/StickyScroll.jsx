/**
 * ============================================================================
 * STICKYSCROLL.JSX - Scroll-based Card Selection
 * ============================================================================
 * 
 * Uses scroll progress within the section to determine active card.
 * No spacers needed - detection is based on scroll position, not viewport.
 */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const services = [
    { id: 'web', title: 'Website Development', subtitle: 'Custom and responsive websites', number: '01' },
    { id: 'app', title: 'Mobile App Development', subtitle: 'iOS and Android mobile apps', number: '02' },
    { id: 'marketing', title: 'SEO & Email Marketing', subtitle: 'Boost reach and engagement', number: '03' },
    { id: 'digital', title: 'Digital Marketing', subtitle: 'Promote through digital channels', number: '04' },
    { id: 'software', title: 'Custom Software Development', subtitle: 'Software tailored for business', number: '05' },
    { id: 'api', title: 'API Development', subtitle: 'Interconnection for systems', number: '06' },
    { id: 'uiux', title: 'UI/UX Design', subtitle: 'Intuitive and modern interfaces', number: '07' },
    { id: 'ecommerce', title: 'E-Commerce Solutions', subtitle: 'Launch and scale your store', number: '08' },
];

const contentData = {
    web: {
        subtitle: 'Custom and responsive websites',
        description: 'Tailored, mobile-friendly, and visually stunning solutions built to meet your business goals and exceed expectations.',
        icons: ['angular', 'javascript', 'react'],
    },
    app: {
        subtitle: 'iOS and Android mobile apps',
        description: 'Native and cross-platform mobile apps. High-performance applications that users love to engage with daily.',
        icons: ['apple', 'android', 'flutter'],
    },
    marketing: {
        subtitle: 'Boost reach and engagement',
        description: 'Data-driven strategies that ensure your brand gets seen by the right audience at the right time.',
        icons: ['googleanalytics', 'mailchimp', 'semrush'],
    },
    digital: {
        subtitle: 'Promote through digital channels',
        description: 'Comprehensive marketing strategies to grow your brand presence and drive conversions across platforms.',
        icons: ['facebook', 'instagram', 'linkedin'],
    },
    software: {
        subtitle: 'Software tailored for business',
        description: 'Bespoke software solutions designed to streamline operations and dramatically increase efficiency.',
        icons: ['python', 'java', 'cplusplus'],
    },
    api: {
        subtitle: 'Interconnection for systems',
        description: 'Robust and secure API development for seamless communication between your software systems.',
        icons: ['postman', 'swagger', 'graphql'],
    },
    uiux: {
        subtitle: 'Intuitive and modern interfaces',
        description: 'Beautiful, user-centered designs that enhance engagement and create memorable experiences.',
        icons: ['figma', 'adobexd', 'sketch'],
    },
    ecommerce: {
        subtitle: 'Launch and scale your store',
        description: 'Secure, scalable, and conversion-driven online stores built to grow with your business.',
        icons: ['woo', 'salesforce', 'react'],
    }
};

export default function StickyScroll() {
    const [activeCard, setActiveCard] = useState(0);
    const containerRef = useRef(null);
    const cardsContainerRef = useRef(null);

    const activeService = services[activeCard] || services[0];
    const activeContent = contentData[activeService.id];

    // Track scroll progress within the cards container
    const { scrollYProgress } = useScroll({
        target: cardsContainerRef,
        offset: ["start center", "end center"]
    });

    // Update active card based on scroll progress
    useMotionValueEvent(scrollYProgress, "change", (progress) => {
        // Map progress (0-1) to card index (0-7)
        const cardIndex = Math.min(
            Math.floor(progress * services.length),
            services.length - 1
        );
        if (cardIndex >= 0 && cardIndex !== activeCard) {
            setActiveCard(cardIndex);
        }
    });

    return (
        <section ref={containerRef} className="relative py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* CENTERED HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
                        Our Services
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
                        Why Choose <span className="text-[#FF3B30]">Us?</span>
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Unleashing the full spectrum of digital magic.
                    </p>
                </motion.div>

                {/* Desktop Layout */}
                <div className="hidden lg:flex gap-10">

                    {/* LEFT: Scrolling Cards - NO spacers */}
                    <div className="w-[400px] flex-shrink-0">
                        <div ref={cardsContainerRef} className="space-y-2">
                            {services.map((service, index) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    index={index}
                                    setActive={setActiveCard}
                                    isActive={activeCard === index}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Sticky Content Panel */}
                    <div className="flex-1">
                        <div
                            className="sticky top-32 bg-gray-50 rounded-3xl p-10 border border-gray-100 shadow-sm"
                            style={{ minHeight: '420px' }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCard}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative"
                                >
                                    {/* Large number watermark */}
                                    <span className="absolute top-0 right-0 text-[120px] font-bold text-gray-200/50 leading-none select-none pointer-events-none">
                                        {activeService.number}
                                    </span>

                                    <div className="relative z-10">
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-md">
                                            {activeContent.subtitle}
                                        </h3>

                                        <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                                            {activeContent.description}
                                        </p>

                                        <div className="flex gap-6 mb-8">
                                            {activeContent.icons.map((slug, i) => (
                                                <motion.img
                                                    key={slug}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`}
                                                    alt={slug}
                                                    className="w-12 h-12 hover:scale-110 transition-transform"
                                                />
                                            ))}
                                        </div>

                                        <a
                                            href="#contact"
                                            className="inline-flex items-center gap-2 text-[#FF3B30] font-semibold hover:gap-3 transition-all"
                                        >
                                            Learn more
                                            <span>→</span>
                                        </a>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    <div className="space-y-2">
                        {services.map((service, index) => (
                            <MobileCard
                                key={service.id}
                                service={service}
                                content={contentData[service.id]}
                                index={index}
                                isActive={activeCard === index}
                                setActive={setActiveCard}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

// Service Card - click to select
function ServiceCard({ service, index, setActive, isActive }) {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            onClick={() => {
                setActive(index);
                ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className={`flex items-center justify-between p-5 rounded-xl cursor-pointer transition-all duration-300
                ${isActive
                    ? 'bg-gray-900 shadow-lg shadow-gray-900/10'
                    : 'bg-gray-50 hover:bg-gray-100'
                }
            `}
        >
            <div className="flex items-center gap-4">
                <div className={`w-2 h-2 rounded-full transition-colors ${isActive ? 'bg-[#FF3B30]' : 'bg-transparent'}`} />
                <span className={`text-sm font-medium transition-colors ${isActive ? 'text-gray-500' : 'text-gray-300'}`}>
                    {service.number}
                </span>
                <div>
                    <h4 className={`font-semibold transition-colors ${isActive ? 'text-white' : 'text-gray-900'}`}>
                        {service.title}
                    </h4>
                    <p className={`text-sm transition-colors ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                        {service.subtitle}
                    </p>
                </div>
            </div>

            <motion.div
                animate={{ rotate: isActive ? 45 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <svg
                    className={`w-5 h-5 transition-colors ${isActive ? 'text-[#FF3B30]' : 'text-gray-400'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            </motion.div>
        </motion.div>
    );
}

// Mobile Card
function MobileCard({ service, content, index, isActive, setActive }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            onClick={() => setActive(isActive ? null : index)}
            className={`p-5 rounded-xl cursor-pointer transition-all ${isActive ? 'bg-gray-900 shadow-lg' : 'bg-gray-50'}`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className={`text-xs font-medium ${isActive ? 'text-gray-500' : 'text-gray-300'}`}>
                        {service.number}
                    </span>
                    <h4 className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                        {service.title}
                    </h4>
                </div>
                <motion.div animate={{ rotate: isActive ? 45 : 0 }}>
                    <svg className={`w-4 h-4 ${isActive ? 'text-[#FF3B30]' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </motion.div>
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 mt-4 border-t border-gray-700">
                            <p className="text-sm text-gray-300 mb-4">{content.description}</p>
                            <div className="flex gap-4">
                                {content.icons.map((slug) => (
                                    <img key={slug} src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`} alt={slug} className="w-8 h-8 invert opacity-60" />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
