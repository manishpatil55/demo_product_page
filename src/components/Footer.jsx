/**
 * ============================================================================
 * FOOTER.JSX - Premium Product Page Footer Template
 * ============================================================================
 * 
 * A professional footer component designed as a reusable template.
 * Features:
 * - Company logo/branding with hover effect
 * - Social media links (LinkedIn, Instagram, Behance)
 * - Navigation links with underline animation
 * - Copyright notice
 * - Curved card design with subtle shadows
 * 
 * NOTE: This is a TEMPLATE. Replace placeholder content with actual data
 * when deploying for a specific product.
 */

import { motion } from 'framer-motion';

// =============================================================================
// CONFIGURATION - Edit these for different products/deployments
// =============================================================================
const footerConfig = {
    // Company Branding
    logo: {
        text: 'hxp',
        dot: '.',
        dotColor: '#FF3B30'
    },

    // Copyright Text
    copyright: {
        year: 2026,
        company: 'HxP Technologies LLP',
        text: 'All rights reserved.'
    },

    // Social Media Links
    socials: [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com/company/hxp',
            icon: 'linkedin',
            hoverBg: 'hover:bg-blue-500',
            hoverBorder: 'hover:border-blue-500'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/hxp',
            icon: 'instagram',
            hoverBg: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600',
            hoverBorder: 'hover:border-pink-500'
        },
        {
            name: 'Behance',
            url: 'https://behance.net/hxp',
            icon: 'behance',
            hoverBg: 'hover:bg-blue-600',
            hoverBorder: 'hover:border-blue-600'
        },
    ],

    // Navigation Links
    navLinks: [
        { label: 'Our Work', href: '#work' },
        { label: 'Services', href: '#services' },
        { label: 'About Us', href: '#about' },
        { label: 'Contact Us', href: '#contact' },
    ]
};

// =============================================================================
// SOCIAL ICON COMPONENTS (SVG Icons)
// =============================================================================
const SocialIcons = {
    linkedin: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    instagram: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    ),
    behance: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
        </svg>
    )
};

export default function Footer() {
    return (
        <footer className="relative px-4 md:px-6">
            {/* Footer Card with Curved Top Corners */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 border-b-0 rounded-t-[2rem] md:rounded-t-[2.5rem] shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">

                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-10">

                    {/* Top Row: Logo + Social Icons */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

                        {/* Logo */}
                        <motion.a
                            href="/"
                            className="flex items-center gap-0 text-3xl md:text-4xl font-bold tracking-tight group"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className="text-gray-900 group-hover:text-black transition-colors">{footerConfig.logo.text}</span>
                            <motion.span
                                className="text-[#FF3B30]"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                {footerConfig.logo.dot}
                            </motion.span>
                        </motion.a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2 md:gap-3">
                            {footerConfig.socials.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-500 transition-all duration-300 ${social.hoverBorder} hover:text-white hover:shadow-lg`}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={social.name}
                                    style={{
                                        background: undefined
                                    }}
                                    onMouseEnter={(e) => {
                                        if (social.icon === 'linkedin') e.currentTarget.style.background = '#0A66C2';
                                        if (social.icon === 'instagram') e.currentTarget.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)';
                                        if (social.icon === 'behance') e.currentTarget.style.background = '#1769FF';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'white';
                                    }}
                                >
                                    {SocialIcons[social.icon]}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Divider with gradient */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8" />

                    {/* Bottom Row: Copyright + Nav Links */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        {/* Copyright */}
                        <p className="text-xs md:text-sm text-gray-500 order-2 md:order-1 text-center md:text-left">
                            © {footerConfig.copyright.year} <span className="font-medium text-gray-600">{footerConfig.copyright.company}</span>. {footerConfig.copyright.text}
                        </p>

                        {/* Navigation Links */}
                        <nav className="flex items-center gap-4 md:gap-6 order-1 md:order-2 flex-wrap justify-center">
                            {footerConfig.navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="relative text-xs md:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors group py-1"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF3B30] group-hover:w-full transition-all duration-300 rounded-full" />
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
