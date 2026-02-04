/**
 * ============================================================================
 * NAVBAR.JSX - Fixed Glassmorphism Navigation
 * ============================================================================
 * 
 * Features:
 * - Fixed position (stays visible while scrolling)
 * - Glassmorphism effect (frosted glass look)
 * - hxp. branding with red dot
 * - Responsive navigation links with red underline hover
 * - Contact CTA button
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import siteConfig from '../config/siteConfig';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { links } = siteConfig;

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        },
        open: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const listVariants = {
        closed: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        closed: {
            opacity: 0,
            y: 50
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const navItems = [
        { name: 'Home', href: links.home, external: true },
        { name: 'Projects', href: links.work, external: false },
        { name: 'Services', href: links.services, external: false },
        { name: 'About Us', href: links.about, external: true }
    ];

    return (
        <>
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl 2xl:max-w-7xl px-4">
                <div className="w-full flex items-center justify-between px-6 md:px-8 py-3 md:py-4 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:bg-white/90 relative z-50">

                    {/* Logo */}
                    <a href={links.home} className="flex items-center group relative z-50">
                        <span className="font-bold text-2xl md:text-3xl tracking-tighter text-black font-sans">
                            hxp<span className="text-[#FF3B30]">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                // Add target blank if external? User didn't specify, but usually "load home page of that site" implies navigation. 
                                // I'll treat them as standard links.
                                className="relative text-sm font-medium text-gray-500 hover:text-black transition-colors group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF3B30] group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="px-6 py-2.5 bg-transparent border border-[#FF3B30] text-[#FF3B30] text-sm font-semibold rounded-full hover:bg-[#FF3B30] hover:text-white transition-all shadow-sm">
                            Contact us
                        </button>
                    </div>

                    {/* Mobile Hamburger Trigger */}
                    <button
                        className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-black block transition-all origin-center"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-4 h-0.5 bg-black block transition-all group-hover:w-6"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6, width: 24 } : { rotate: 0, y: 0, width: 16 }}
                            className="h-0.5 bg-black block transition-all origin-center group-hover:w-6"
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-[#FAFAFA] z-40 flex flex-col justify-center items-center md:hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                        </div>

                        <motion.div
                            variants={listVariants}
                            className="flex flex-col items-center gap-8 relative z-10"
                        >
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    variants={itemVariants}
                                    className="text-4xl font-bold text-gray-900 tracking-tight hover:text-[#FF3B30] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </motion.a>
                            ))}

                            <motion.div variants={itemVariants} className="pt-8">
                                <button onClick={() => { setIsOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-full hover:bg-[#FF3B30] transition-colors shadow-xl">
                                    Contact us
                                </button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="absolute bottom-10 text-sm text-gray-400 font-medium"
                        >
                            © 2026 hxp.
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

