/**
 * ============================================================================
 * CONTACTFORM.JSX - Ultra-Modern Contact Form
 * ============================================================================
 * 
 * Design Philosophy: Clean, minimal, premium
 * - Underline-style inputs (no borders)
 * - Large typography
 * - Subtle micro-interactions
 * - Split layout on desktop
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import siteConfig from '../config/siteConfig';

export default function ContactForm() {
    const { contact } = siteConfig;
    const [focused, setFocused] = useState(null);
    const [formData, setFormData] = useState(
        contact.formFields.reduce((acc, field) => ({ ...acc, [field.id]: '' }), {})
    );

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#FAFAFA]">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Main Grid */}
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-sm font-bold tracking-[0.3em] text-gray-400 uppercase mb-6">
                            {contact.label}
                        </p>

                        <h2
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-8"
                            dangerouslySetInnerHTML={{ __html: contact.headline }}
                        />

                        <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-10 max-w-lg">
                            {contact.description}
                        </p>

                        {/* Contact Info Pills */}
                        <div className="flex flex-wrap gap-3">
                            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {contact.email}
                            </a>
                            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {contact.phone}
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <form className="space-y-8">
                            {contact.formFields.map((field, index) => (
                                <motion.div
                                    key={field.id}
                                    className="relative"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                >
                                    {/* Floating Label */}
                                    <label
                                        className={`absolute left-0 transition-all duration-300 pointer-events-none ${focused === field.id || formData[field.id]
                                            ? 'text-xs text-[#FF3B30] -top-5'
                                            : 'text-base text-gray-400 top-3'
                                            }`}
                                    >
                                        {field.label}
                                        {field.required && <span className="text-[#FF3B30] ml-1">*</span>}
                                    </label>

                                    {/* Input */}
                                    <input
                                        type={field.type}
                                        required={field.required}
                                        value={formData[field.id]}
                                        onFocus={() => setFocused(field.id)}
                                        onBlur={() => setFocused(null)}
                                        onChange={(e) => handleChange(field.id, e.target.value)}
                                        className="w-full bg-transparent border-b-2 border-gray-200 py-3 text-gray-900 text-lg focus:outline-none transition-colors"
                                    />

                                    {/* Animated Underline */}
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-0.5 bg-[#FF3B30]"
                                        initial={{ width: 0 }}
                                        animate={{ width: focused === field.id ? '100%' : 0 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                    />
                                </motion.div>
                            ))}

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                className="group relative mt-12 w-full md:w-auto px-10 py-4 bg-gray-900 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/20"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Hover Fill */}
                                <span className="absolute inset-0 bg-[#FF3B30] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                                {/* Text */}
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {contact.cta}
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
