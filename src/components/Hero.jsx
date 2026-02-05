import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import siteConfig from '../config/siteConfig';

export default function Hero() {
    const containerRef = useRef(null);
    const { hero } = siteConfig;
    const { scrollY } = useScroll();

    // Parallax Effects (Vertical Only)
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Mouse tracking for localized effects (Glare/Spotlight) ONLY, NOT Tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Moved useTransform to top level to fix React Hook violation
    const glareOpacity = useTransform(mouseX, [-0.5, 0.5], [0, 0.3]);

    function handleMouseMove({ clientX, clientY, currentTarget }) {
        const { width, height, left, top } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-start pt-28 pb-0 overflow-hidden bg-gradient-to-b from-[#FAFAFA] to-white"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Premium Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Ambient Glows (Dynamic Lighting) */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-purple-200/40 via-blue-100/30 to-transparent blur-[120px] rounded-full pointer-events-none"
            />

            <div className="relative z-10 container mx-auto px-4 text-center">


                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-6 mt-8"
                >
                    {hero.headline.prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">{hero.headline.highlight}</span> {hero.headline.suffix}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    {hero.subtitle}
                    <br />
                    <strong className="font-semibold text-gray-900">{hero.description}</strong>
                </motion.p>

                {/* CTA & Pricing */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center gap-6 relative z-20 mb-12"
                >
                    <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-2xl border border-gray-100/50">
                        <span className="text-lg text-gray-900">{hero.pricing.label}</span>
                        <span className="text-4xl font-bold tracking-tight text-gray-900">{hero.pricing.value}</span>
                    </div>

                    <button
                        onClick={() => document.getElementById(hero.cta.link.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/20 active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {hero.cta.text}
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <p className="text-sm text-gray-400">{hero.pricing.subtext}</p>
                </motion.div>
            </div>

            {/* REALISTIC IPHONE 17 PRO MAX MOCKUP (Static, No Tilt) */}
            <motion.div
                style={{ y: y1 }}
                className="relative z-30 w-[340px] md:w-[380px] aspect-[9/19.5]"
            >
                {/* FLOATING 3D ELEMENTS (Notifications) */}
                <motion.div
                    style={{ y: y2, x: 20 }}
                    className="absolute top-[80px] -right-[60px] md:-right-[80px] bg-white/90 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-float hover:scale-105 transition-transform cursor-pointer z-[100]"
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-${hero.mockup.notification1.color}-50 rounded-2xl flex items-center justify-center text-xl shadow-sm border border-${hero.mockup.notification1.color}-100`}>{hero.mockup.notification1.icon}</div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Notification</p>
                            <p className="text-sm font-bold text-gray-900 leading-tight">{hero.mockup.notification1.title}</p>
                            <p className={`text-[10px] text-${hero.mockup.notification1.color}-600 font-semibold`}>{hero.mockup.notification1.subtitle}</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    style={{ y: y1, x: -20 }}
                    className="absolute top-[55%] -left-[60px] md:-left-[80px] bg-white/90 backdrop-blur-xl border border-white/60 p-4 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] animate-float animation-delay-1500 hover:scale-105 transition-transform cursor-pointer z-[100]"
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-${hero.mockup.notification2.color}-50 rounded-2xl flex items-center justify-center text-xl shadow-sm border border-${hero.mockup.notification2.color}-100`}>{hero.mockup.notification2.icon}</div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Live Status</p>
                            <p className="text-sm font-bold text-gray-900 leading-tight">{hero.mockup.notification2.title}</p>
                            <p className={`text-[10px] text-${hero.mockup.notification2.color}-600 font-semibold`}>{hero.mockup.notification2.subtitle}</p>
                        </div>
                    </div>
                </motion.div>

                {/* DEVICE CONTAINER with FADE MASK at BOTTOM */}
                <div
                    className="relative w-full h-full"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                    }}
                >
                    {/* The FRAME */}
                    <img
                        src="/apple-iphone-17-pro-max.png"
                        alt="iPhone 17 Pro Max Frame"
                        className="absolute inset-0 w-full h-full z-50 pointer-events-none drop-shadow-2xl"
                    />

                    {/* Screen Glare (Reflection) - Subtle */}
                    <motion.div
                        style={{ opacity: glareOpacity }}
                        className="absolute inset-[3px] rounded-[50px] z-[60] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"
                    />

                    {/* THE APP SCREEN */}
                    <div className="absolute top-[1.4%] left-[2.8%] right-[2.8%] bottom-[1.4%] bg-white rounded-[44px] overflow-hidden z-10 shadow-inner">

                        {/* Status Bar - High Fidelity */}
                        <div className="h-14 w-full bg-white flex justify-between items-center px-6 pt-5 z-20 relative">
                            {/* Time */}
                            <span className="text-[15px] font-semibold tracking-normal ml-3 font-sans text-gray-900">9:41</span>

                            {/* Dynamic Island Area (Invisible here, handled by frame) */}

                            {/* Icons (Signal, Wifi, Battery) */}
                            <div className="flex gap-1.5 items-center mr-3 scale-95">
                                {/* Signal */}
                                <svg className="w-[18px] h-[18px] text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C12 1.44772 12.4477 1 13 1C13.5523 1 14 1.44772 14 2V22C14 22.5523 13.5523 23 13 23C12.4477 23 12 22.5523 12 22V2Z" />
                                    <path d="M16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6V22C18 22.5523 17.5523 23 17 23C16.4477 23 16 22.5523 16 22V6Z" />
                                    <path d="M8 11C8 10.4477 8.44772 10 9 10C9.55228 10 10 10.4477 10 11V22C10 22.5523 9.55228 23 9 23C8.44772 23 8 22.5523 8 22V11Z" />
                                    <path d="M4 16C4 15.4477 4.44772 15 5 15C5.55228 15 6 15.4477 6 16V22C6 22.5523 5.55228 23 5 23C4.44772 23 4 22.5523 4 22V16Z" />
                                </svg>
                                {/* Wifi */}
                                <svg className="w-[18px] h-[18px] text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 4C15.8078 4 19.3406 5.34007 22.1528 7.59016C22.6105 7.95633 22.6848 8.62423 22.3186 9.08197C21.9525 9.53971 21.2846 9.61395 20.8268 9.24778C18.3374 7.25624 15.2589 6.11111 12 6.11111C8.74106 6.11111 5.66258 7.25624 3.17316 9.24778C2.71542 9.61395 2.04752 9.53971 1.68135 9.08197C1.31518 8.62423 1.38942 7.95633 1.84716 7.59016C4.65939 5.34007 8.19219 4 12 4ZM12 9.55556C14.7394 9.55556 17.29 10.4851 19.3364 12.046C19.7824 12.3862 19.8732 13.0285 19.533 13.4745C19.1928 13.9205 18.5505 14.0113 18.1045 13.6711C16.3664 12.3453 14.2514 11.6667 12 11.6667C9.74864 11.6667 7.63359 12.3453 5.89547 13.6711C5.44949 14.0113 4.80718 13.9205 4.467 13.4745C4.12682 13.0285 4.21763 12.3862 4.66358 12.046C6.70997 10.4851 9.26063 9.55556 12 9.55556ZM12 15.1111C13.6661 15.1111 15.228 15.6565 16.4802 16.5862C16.9454 16.9316 17.0493 17.5905 16.7039 18.0558C16.3585 18.5209 15.6997 18.6249 15.2344 18.2795C14.3013 17.5866 13.176 17.2222 12 17.2222C10.824 17.2222 9.69875 17.5866 8.76562 18.2795C8.30036 18.6249 7.6415 18.5209 7.29611 18.0558C6.95071 17.5905 7.05462 16.9316 7.51984 16.5862C8.77196 15.6565 10.3339 15.1111 12 15.1111Z" />
                                </svg>
                                {/* Battery */}
                                <svg className="w-[22px] h-[22px] text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 8C19.5523 8 20 8.44772 20 9V15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H19ZM22 10.5C22.8284 10.5 23.5 11.1716 23.5 12C23.5 12.8284 22.8284 13.5 22 13.5V10.5ZM5 6C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H19C20.6569 18 22 16.6569 22 15V9C22 7.34315 20.6569 6 19 6H5Z" />
                                    <rect x="5" y="9" width="12" height="6" rx="1" fill="currentColor" />
                                </svg>
                            </div>
                        </div>

                        {/* Content Scroll */}
                        <motion.div
                            animate={{ y: [-20, -1000] }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: "linear",
                                repeatType: "loop"
                            }}
                            className="w-full"
                        >
                            {/* Replicating a Real Food App UI */}
                            <div className="px-5 space-y-6 pb-32 pt-4">
                                {/* Header */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-orange-500 font-bold uppercase tracking-wider">Top Rated</p>
                                        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Discover</h2>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                                    </div>
                                </div>

                                {/* Search */}
                                <div className="w-full h-12 bg-gray-50 rounded-2xl flex items-center px-4 gap-3 text-gray-400 border border-gray-100/80 shadow-sm transition-colors hover:bg-white hover:border-gray-200">
                                    🔍 <span className="text-sm font-medium">Find your craving...</span>
                                </div>

                                {/* Categories */}
                                <div className="flex gap-3 overflow-hidden mask-linear-fade">
                                    {['🍔 Burger', '🍕 Pizza', '🥗 Healthy', '🍣 Sushi', '🍰 Dessert'].map((cat, i) => (
                                        <div key={i} className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap shadow-sm transition-transform hover:scale-105 ${i === 0 ? 'bg-black text-white' : 'bg-white border border-gray-100 text-gray-600'}`}>
                                            {cat}
                                        </div>
                                    ))}
                                </div>

                                {/* Featured Item */}
                                <div className="w-full h-72 bg-[#FFF5EB] rounded-[36px] relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                                    <div className="absolute top-5 left-5 z-10">
                                        <span className="px-3 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-[10px] font-bold shadow-sm uppercase tracking-wide text-orange-600">Free Delivery</span>
                                    </div>
                                    <div className="absolute bottom-6 left-6 z-10">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1 leading-tight">Double<br />Cheesy</h3>
                                        <p className="text-xs text-gray-500 font-bold bg-white/50 px-2 py-1 rounded-lg inline-block">The Burger Joint • 20m</p>
                                    </div>
                                    <div className="w-full h-full flex items-center justify-center text-[140px] transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-xl filter saturate-125">
                                        🍔
                                    </div>
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>

                                {/* Popular List */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end px-1">
                                        <h3 className="text-lg font-bold">Popular</h3>
                                        <span className="text-orange-600 text-xs font-bold cursor-pointer hover:underline bg-orange-50 px-2 py-1 rounded-md">See all</span>
                                    </div>

                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <div key={item} className="flex gap-4 p-3 bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-lg hover:border-orange-100 transition-all cursor-pointer group hover:-translate-y-1">
                                            <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                                                {['🍕', '🍣', '🌮', '🍜', '🍩'][item - 1]}
                                            </div>
                                            <div className="flex-1 py-1 flex flex-col justify-center">
                                                <h4 className="font-bold text-gray-900 text-sm">Premium Dish {item}</h4>
                                                <p className="text-xs text-gray-500 mt-1 mb-2 font-medium">Italian • $$ • 4.5 ⭐</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-bold text-gray-900 text-sm">$12.99</span>
                                                    <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-orange-500 shadow-lg translate-x-4 group-hover:translate-x-0">+</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Duplicate for Scroll */}
                                <div className="w-full h-64 bg-[#EBFBF0] rounded-[36px] relative overflow-hidden group shadow-sm mt-8">
                                    <div className="absolute top-5 left-5 z-10">
                                        <span className="px-3 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-[10px] font-bold shadow-sm uppercase tracking-wide text-green-600">Fresh</span>
                                    </div>
                                    <div className="absolute bottom-6 left-6 z-10">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">Super Poke</h3>
                                        <p className="text-xs text-gray-500 font-bold bg-white/50 px-2 py-1 rounded-lg">Healthy Life • 15m</p>
                                    </div>
                                    <div className="w-full h-full flex items-center justify-center text-[120px] transition-transform duration-700 ease-out group-hover:scale-110 drop-shadow-xl filter saturate-125">
                                        🥗
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom Nav */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-8 px-8 py-4 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] z-40 transform hover:scale-105 transition-transform duration-300">
                            <span className="text-orange-500 cursor-pointer text-xl drop-shadow-sm">🏠</span>
                            <span className="text-gray-400 hover:text-gray-800 transition-colors cursor-pointer text-xl">🔍</span>
                            <span className="text-gray-400 hover:text-gray-800 transition-colors cursor-pointer text-xl relative">
                                🛍️
                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white" />
                            </span>
                            <span className="text-gray-400 hover:text-gray-800 transition-colors cursor-pointer text-xl">👤</span>
                        </div>
                    </div>
                </div >

                {/* NO REFLECTION (REMOVED AS REQUESTED) */}

            </motion.div >
        </section >
    );
}
