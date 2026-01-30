/**
 * ============================================================================
 * TESTIMONIALS.JSX - Premium Client Reviews (Light Theme)
 * ============================================================================
 * 
 * Features:
 * - Auto-rotating testimonials
 * - Avatar with glow effect
 * - Star ratings
 * - Elegant quotes
 * - Config-driven
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import siteConfig from '../config/siteConfig';

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const { testimonials } = siteConfig;

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="py-24 md:py-32 px-4 bg-white relative overflow-hidden">
            {/* Decorative quotes */}
            <div className="absolute top-20 left-10 text-[200px] font-serif text-gray-100 opacity-50 select-none pointer-events-none">
                "
            </div>
            <div className="absolute bottom-20 right-10 text-[200px] font-serif text-gray-100 opacity-50 select-none pointer-events-none rotate-180">
                "
            </div>

            <div className="max-w-5xl mx-auto relative">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
                        Testimonials
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Loved by <span className="text-[#FF3B30]">clients</span>
                    </h2>
                </motion.div>

                {/* Main Testimonial */}
                <div className="relative min-h-[350px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            {/* Stars */}
                            <motion.div
                                className="flex justify-center gap-1.5 mb-8"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {[...Array(testimonials[current].rating)].map((_, i) => (
                                    <motion.svg
                                        key={i}
                                        className="w-6 h-6 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </motion.svg>
                                ))}
                            </motion.div>

                            {/* Quote */}
                            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-relaxed mb-12">
                                "{testimonials[current].quote}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex flex-col items-center gap-4">
                                {/* Avatar with glow */}
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FF3B30] to-orange-400 rounded-full blur-sm opacity-60" />
                                    <img
                                        src={testimonials[current].avatar}
                                        alt={testimonials[current].author}
                                        className="relative w-16 h-16 rounded-full object-cover border-2 border-white"
                                    />
                                </div>

                                <div className="text-center">
                                    <p className="font-bold text-lg text-gray-900">
                                        {testimonials[current].author}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {testimonials[current].role}, {testimonials[current].company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className="group relative p-2"
                        >
                            <motion.div
                                className={`w-2.5 h-2.5 rounded-full transition-all ${current === i
                                    ? 'bg-[#FF3B30]'
                                    : 'bg-gray-300 group-hover:bg-gray-400'
                                    }`}
                                animate={current === i ? { scale: [1, 1.2, 1] } : {}}
                                transition={{ duration: 0.5 }}
                            />
                            {current === i && (
                                <motion.div
                                    layoutId="testimonialDot"
                                    className="absolute inset-0 rounded-full border-2 border-[#FF3B30]"
                                    initial={false}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
