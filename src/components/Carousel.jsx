/**
 * ============================================================================
 * CAROUSEL.JSX - 3D Infinite Product Carousel with Screenshots
 * ============================================================================
 * 
 * Features:
 * - Infinite scrolling (no start/end)
 * - Product screenshots displayed prominently
 * - 3D depth effect with scale and rotation
 * - Auto-play with pause on hover
 * - Spring physics for smooth animations
 * - Click any card to center it
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import siteConfig from '../config/siteConfig';

// Get offerings from config with fallback defaults
const offerings = siteConfig.offerings.map((item, index) => ({
    ...item,
    borderColor: item.borderColor || `border-gray-200`,
    ringColor: item.ringColor || `ring-gray-100`,
    bg: item.bg || 'bg-gray-50',
}));

export default function Carousel() {
    const [index, setIndex] = useState(20000);
    const [isPaused, setIsPaused] = useState(false);
    const autoPlay = true;
    const interval = 4000;

    const getEffectiveIndex = (i) => {
        const len = offerings.length;
        return ((i % len) + len) % len;
    };

    const nextSlide = useCallback(() => setIndex(prev => prev + 1), []);
    const prevSlide = useCallback(() => setIndex(prev => prev - 1), []);

    const setSlide = (targetIndex) => {
        const currentEffective = getEffectiveIndex(index);
        const diff = targetIndex - currentEffective;
        setIndex(index + diff);
    };

    useEffect(() => {
        if (!autoPlay || isPaused) return;
        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [autoPlay, isPaused, interval, nextSlide]);

    const offsetRange = [-2, -1, 0, 1, 2];

    return (
        <section className="py-24 px-5 bg-white overflow-hidden select-none">
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-sm font-bold tracking-wide mb-6 uppercase border border-orange-100"
                >
                    Ecosystem
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                    Everything you need.
                </h2>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    A complete suite of applications to run your business on autopilot.
                </p>
            </div>

            <div
                className="flex flex-col items-center gap-12"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Carousel Stage */}
                <div className="relative w-full h-[600px] max-w-[1400px] 2xl:max-w-[1600px] flex items-center justify-center perspective-1000">

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-10 z-30 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 text-gray-700 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-10 z-30 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 text-gray-700 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                    {/* Cards Container */}
                    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                        <AnimatePresence initial={false}>
                            {offsetRange.map((offset) => {
                                const itemIndex = index + offset;
                                const effectiveIndex = getEffectiveIndex(itemIndex);
                                const item = offerings[effectiveIndex];
                                const isCenter = offset === 0;

                                const xOffset = offset * 360;
                                const scale = isCenter ? 1 : 0.85;
                                const opacity = isCenter ? 1 : Math.max(0.3, 0.8 - Math.abs(offset) * 0.2);
                                const zIndex = 10 - Math.abs(offset);
                                const rotateY = offset * -5;

                                return (
                                    <motion.div
                                        key={itemIndex}
                                        className="absolute top-1/2 left-1/2 cursor-pointer will-change-transform pointer-events-auto"
                                        initial={{
                                            x: (offset + (offset > 0 ? 1 : -1)) * 360,
                                            scale: 0.8,
                                            opacity: 0
                                        }}
                                        animate={{
                                            x: xOffset,
                                            scale,
                                            opacity,
                                            zIndex,
                                            rotateY,
                                        }}
                                        exit={{
                                            x: (offset + (offset > 0 ? 1 : -1)) * 360,
                                            opacity: 0,
                                            scale: 0.8
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 180,
                                            damping: 24,
                                            mass: 1
                                        }}
                                        onClick={() => {
                                            if (!isCenter) setIndex(itemIndex);
                                        }}
                                        style={{
                                            width: '360px',
                                            height: '520px',
                                            marginLeft: '-180px',
                                            marginTop: '-260px',
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        {/* Card */}
                                        <div className={`w-full h-full rounded-[32px] p-5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] bg-white border overflow-hidden relative transition-all duration-300 group ${isCenter ? 'border-gray-200 ring-2 ring-gray-100' : 'border-gray-100'}`}>

                                            {/* Gradient Background */}
                                            <div className={`absolute inset-0 opacity-30 bg-gradient-to-br ${item.color} pointer-events-none`} />

                                            <div className="relative h-full flex flex-col z-10">
                                                {/* Header: Icon + Badge */}
                                                <div className="flex justify-between items-start mb-3">
                                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/80 backdrop-blur-md shadow-sm border border-white/50 overflow-hidden p-1">
                                                        {typeof item.icon === 'string' && item.icon.includes('/') ? (
                                                            <img
                                                                src={item.icon}
                                                                alt={`${item.title} icon`}
                                                                className="w-full h-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <span className="text-2xl">{item.icon}</span>
                                                        )}
                                                    </div>
                                                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/70 backdrop-blur-md border border-white/50 ${item.accent}`}>
                                                        {item.subtitle}
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-gray-900 mb-1 tracking-tight">
                                                    {item.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-gray-500 text-xs font-medium leading-relaxed mb-3 line-clamp-2">
                                                    {item.description}
                                                </p>

                                                {/* PRODUCT SCREENSHOT */}
                                                {item.image && (
                                                    <div className="flex-1 relative rounded-xl overflow-hidden bg-gray-100 border border-gray-200/50 shadow-sm">
                                                        <img
                                                            src={item.image}
                                                            alt={`${item.title} screenshot`}
                                                            className={`w-full h-full object-cover object-top transition-transform duration-700 ${isCenter ? 'scale-100 group-hover:scale-105' : 'scale-95'}`}
                                                        />
                                                        {/* Hover Overlay */}
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                                            <span className="text-white text-sm font-semibold px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
                                                                View Details →
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Pagination Dashes */}
                <div className="flex items-center gap-3 z-20">
                    {offerings.map((_, i) => {
                        const isActive = getEffectiveIndex(index) === i;
                        return (
                            <div
                                key={i}
                                className="relative h-1.5 rounded-full bg-gray-200 overflow-hidden w-12 cursor-pointer"
                                onClick={() => setSlide(i)}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeDash"
                                        className="absolute inset-0 bg-gray-900"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
