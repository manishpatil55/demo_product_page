/**
 * ============================================================================
 * FAQ.JSX - Premium Accordion Component
 * ============================================================================
 * 
 * Features:
 * - Smooth accordion animations
 * - Category filtering option
 * - Elegant hover states
 * - Dark mode support
 * - Config-driven
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import siteConfig from '../config/siteConfig';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);
    const { faq } = siteConfig;

    return (
        <section className="py-24 md:py-32 px-4 bg-white dark:bg-gray-950 relative">
            {/* Subtle background accent */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900/50 dark:to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-xs font-bold tracking-[0.3em] text-gray-400 uppercase mb-4">
                        FAQ
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
                        Questions? <span className="text-[#FF3B30]">Answered.</span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                        Everything you need to know about our services
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
                    {faq.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                    ? 'bg-gray-900 dark:bg-white shadow-xl shadow-gray-900/10'
                                    : 'bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800'
                                }`}>

                                {/* Question */}
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left"
                                >
                                    <span className={`font-semibold text-base md:text-lg pr-8 transition-colors ${openIndex === index
                                            ? 'text-white dark:text-gray-900'
                                            : 'text-gray-900 dark:text-white'
                                        }`}>
                                        {item.question}
                                    </span>

                                    {/* Animated icon */}
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 135 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="flex-shrink-0"
                                    >
                                        <svg
                                            className={`w-5 h-5 transition-colors ${openIndex === index
                                                    ? 'text-[#FF3B30]'
                                                    : 'text-gray-400'
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </motion.div>
                                </button>

                                {/* Answer */}
                                <AnimatePresence initial={false}>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        >
                                            <div className="px-6 md:px-8 pb-6 md:pb-8">
                                                <p className="text-gray-300 dark:text-gray-600 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Still have questions?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-[#FF3B30] font-semibold hover:gap-3 transition-all"
                    >
                        Get in touch
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
