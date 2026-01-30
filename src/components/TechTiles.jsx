/**
 * ============================================================================
 * TECHTILES.JSX - Bidirectional Infinite Scroll with Physics
 * ============================================================================
 */

import { motion, useMotionValue, useTransform, animate, useVelocity } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const technologies = [
    { name: 'React', slug: 'react', desc: 'UI Library', color: 'from-blue-500/20' },
    { name: 'Next.js', slug: 'nextdotjs', desc: 'React Framework', color: 'from-black/20' },
    { name: 'Node.js', slug: 'nodedotjs', desc: 'Runtime', color: 'from-green-500/20' },
    { name: 'Python', slug: 'python', desc: 'Backend', color: 'from-yellow-500/20' },
    { name: 'TypeScript', slug: 'typescript', desc: 'Typed JS', color: 'from-blue-600/20' },
    { name: 'Flutter', slug: 'flutter', desc: 'Mobile', color: 'from-sky-400/20' },
    { name: 'Figma', slug: 'figma', desc: 'Design Tool', color: 'from-purple-500/20' },
    { name: 'MongoDB', slug: 'mongodb', desc: 'Database', color: 'from-green-600/20' },
    { name: 'PostgreSQL', slug: 'postgresql', desc: 'Database', color: 'from-blue-700/20' },
    { name: 'AWS', slug: 'amazonwebservices', desc: 'Cloud', color: 'from-orange-400/20' },
    { name: 'Docker', slug: 'docker', desc: 'Container', color: 'from-cyan-500/20' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', desc: 'CSS Framework', color: 'from-teal-400/20' },
];

export default function TechTiles() {
    return (
        <section className="py-16 px-6 bg-white">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-3">
                        Technologies We Work On
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                        Our Tech Stack
                    </h2>
                </motion.div>

                {/* Mobile: Bidirectional Infinite Scroll */}
                <div className="md:hidden">
                    <BidirectionalInfiniteScroll />
                </div>

                {/* Desktop: Grid Layout */}
                <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.03,
                                duration: 0.4
                            }}
                            whileHover={{
                                y: -4,
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="group"
                        >
                            <div className="bg-white border border-gray-100 rounded-xl p-4 cursor-pointer transition-all duration-300 hover:border-gray-300 hover:shadow-lg h-full">
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="w-12 h-12 flex items-center justify-center">
                                        <img
                                            src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tech.slug}.svg`}
                                            alt={tech.name}
                                            loading="lazy"
                                            className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight">
                                            {tech.name}
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                            {tech.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center hidden md:block"
                >
                    <p className="text-gray-400 text-sm">
                        And many more tools to build exceptional products
                    </p>
                </motion.div>

            </div>
        </section>
    );
}

// Bidirectional Infinite Scroll Component
function BidirectionalInfiniteScroll() {
    const x = useMotionValue(0);
    const velocity = useVelocity(x);
    const [isDragging, setIsDragging] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('neutral');

    // 5x repetition for true bidirectional infinite scroll
    const repeatedData = [...technologies, ...technologies, ...technologies, ...technologies, ...technologies];
    const cardWidth = 140 + 12; // card + gap
    const singleSetWidth = technologies.length * cardWidth;
    const totalWidth = repeatedData.length * cardWidth;

    // Start in the middle (2nd set)
    useEffect(() => {
        x.set(-singleSetWidth * 2);
    }, []);

    // Monitor velocity for direction
    useEffect(() => {
        const unsubscribe = velocity.onChange((v) => {
            if (Math.abs(v) > 10) {
                setScrollDirection(v > 0 ? 'right' : 'left');
            } else if (Math.abs(v) < 2) {
                setScrollDirection('neutral');
            }
        });
        return unsubscribe;
    }, [velocity]);

    // Auto-scroll when not dragging
    useEffect(() => {
        if (!isDragging) {
            const controls = animate(x, -totalWidth + singleSetWidth, {
                duration: 60,
                ease: "linear",
                repeat: Infinity,
                onUpdate: (latest) => {
                    // Reset for infinite loop (when passing the 4th copy)
                    if (latest <= -singleSetWidth * 4) {
                        x.set(-singleSetWidth * 2);
                    }
                    // Reset when going too far right
                    if (latest >= -singleSetWidth) {
                        x.set(-singleSetWidth * 3);
                    }
                }
            });

            return () => controls.stop();
        }
    }, [isDragging, x, singleSetWidth, totalWidth]);

    // Transform velocity to blur (faster = more blur)
    const velocityBlur = useTransform(velocity, [-1000, 0, 1000], [3, 0, 3]);

    return (
        <div className="relative">
            {/* Dynamic gradient overlays */}
            <motion.div
                className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none"
                animate={{ opacity: scrollDirection === 'left' ? 0.5 : 1 }}
            />
            <motion.div
                className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none"
                animate={{ opacity: scrollDirection === 'right' ? 0.5 : 1 }}
            />

            {/* Draggable container */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing py-6">
                <motion.div
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -singleSetWidth * 4, right: -singleSetWidth }}
                    dragElastic={0.05}
                    dragTransition={{
                        power: 0.3,
                        timeConstant: 200,
                        bounceDamping: 40,
                        bounceStiffness: 400
                    }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={(e, info) => {
                        setIsDragging(false);

                        // Smart reset for seamless infinite scroll
                        const currentX = x.get();
                        if (currentX <= -singleSetWidth * 3.5) {
                            x.set(currentX + singleSetWidth * 2);
                        } else if (currentX >= -singleSetWidth * 1.5) {
                            x.set(currentX - singleSetWidth * 2);
                        }
                    }}
                    className="flex gap-3"
                    whileTap={{ cursor: 'grabbing' }}
                >
                    {repeatedData.map((tech, index) => {
                        // Calculate distance from center for effects
                        const cardX = useTransform(
                            x,
                            (latest) => {
                                const cardPosition = -(index * cardWidth);
                                const viewportCenter = window.innerWidth / 2;
                                const cardCenter = latest + cardPosition + 70; // 70 = half card width
                                const distanceFromCenter = Math.abs(viewportCenter - cardCenter);
                                return distanceFromCenter;
                            }
                        );

                        const scale = useTransform(cardX, [0, 200, 400], [1.1, 1, 0.95]);
                        const opacity = useTransform(cardX, [0, 300, 600], [1, 0.9, 0.7]);

                        return (
                            <motion.div
                                key={`${tech.slug}-${index}`}
                                className="flex-shrink-0 relative"
                                style={{
                                    width: '140px',
                                    scale,
                                    opacity
                                }}
                            >
                                <div className="bg-white border border-gray-100 rounded-xl p-3 h-full shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 relative overflow-hidden">
                                    {/* Subtle color accent */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                    <div className="flex flex-col items-center text-center gap-2 relative z-10">
                                        <div className="w-10 h-10 flex items-center justify-center">
                                            <motion.img
                                                src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${tech.slug}.svg`}
                                                alt={tech.name}
                                                loading="lazy"
                                                className="w-8 h-8 pointer-events-none"
                                                draggable="false"
                                                style={{ filter: `blur(${velocityBlur}px)` }}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <h3 className="text-xs font-bold text-gray-900 mb-0.5 leading-tight">
                                                {tech.name}
                                            </h3>
                                            <p className="text-[10px] text-gray-400">
                                                {tech.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
