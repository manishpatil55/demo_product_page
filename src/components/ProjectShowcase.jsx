/**
 * ============================================================================
 * PROJECT SHOWCASE.JSX - Grid of Featured Projects
 * ============================================================================
 * 
 * Replaces the StickyScroll section. Displays projects in a clean, 
 * responsive grid layout with hover effects.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import siteConfig from '../config/siteConfig';

export default function ProjectShowcase({ initialShowAll = false }) {
    const { showcase } = siteConfig;
    const [showAll, setShowAll] = useState(initialShowAll);

    if (!showcase) return null;

    // Responsive limits: 3 on mobile, 6 on desktop
    const mobileLimit = 3;
    const desktopLimit = 6;

    // We'll use CSS hidden classes for a simple initial render strategy or a window width hook
    // But since this is SSR/SSG friendly we want to be careful. 
    // Let's use a simple heuristic: Always render up to desktopLimit, 
    // but hide 4-6 on mobile via CSS unless showAll is true.

    const displayedProjects = showAll ? showcase.projects : showcase.projects.slice(0, desktopLimit);

    return (
        <section id="projects" className="py-24 px-6 bg-[#FAFAFA]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[0.3em] text-[#FF3B30] uppercase mb-4">
                        {showcase.badge}
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                        {showcase.headline}
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {displayedProjects.map((project, index) => (
                        <Link
                            key={project.title}
                            to={`/project/${project.slug || '#'}`}
                            className={`group block bg-white rounded-2xl p-3 border border-gray-100 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 
                                ${showAll ? 'block' : (index >= 4 ? 'hidden lg:block' : (index >= 3 ? 'hidden sm:block' : 'block'))}
                            `}
                        >
                            {/* Image Container */}
                            <div className="rounded-xl overflow-hidden bg-gray-100 aspect-[16/10] mb-4 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="px-2 pb-1">
                                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button Toggle */}
                <div className="text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 active:scale-95"
                    >
                        {showAll ? (
                            <>Show Less <ChevronUp className="w-4 h-4" /></>
                        ) : (
                            <>View All Projects <ChevronDown className="w-4 h-4" /></>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}
