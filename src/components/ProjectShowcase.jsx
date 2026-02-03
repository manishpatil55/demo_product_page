/**
 * ============================================================================
 * PROJECT SHOWCASE.JSX - Grid of Featured Projects
 * ============================================================================
 * 
 * Replaces the StickyScroll section. Displays projects in a clean, 
 * responsive grid layout with hover effects.
 */

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import siteConfig from '../config/siteConfig';

export default function ProjectShowcase() {
    const { showcase } = siteConfig;

    if (!showcase) return null;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section className="py-24 px-5 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    {showcase.badge && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-gray-500 text-sm font-medium tracking-wide mb-6"
                        >
                            {showcase.badge}
                        </motion.div>
                    )}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                        {showcase.headline}
                    </h2>
                </div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {showcase.projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link || '#'}
                            variants={itemVariants}
                            className="group block bg-white rounded-3xl p-4 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="rounded-2xl overflow-hidden bg-gray-50 aspect-[4/3] mb-6 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="px-2 pb-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* View All Button */}
                <div className="text-center">
                    <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 group">
                        View All
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
