import { motion } from 'framer-motion';
import siteConfig from '../config/siteConfig';

export default function ProductDetails() {
    const { productDetails } = siteConfig;

    return (
        <section className="py-24 px-6 bg-[#FAFAFA] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 space-y-8"
                    >
                        <div>
                            <p className="text-xs font-bold tracking-[0.3em] text-[#FF3B30] uppercase mb-4">
                                About The Product
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1]">
                                {productDetails.title}
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light border-l-4 border-gray-200 pl-6">
                                {productDetails.description}
                            </p>
                            {productDetails.longDescription && (
                                <p className="text-base text-gray-400 leading-relaxed pl-6">
                                    {productDetails.longDescription}
                                </p>
                            )}
                        </div>

                        {/* Stats / Specs Grid */}
                        {productDetails.stats && (
                            <div className="grid grid-cols-3 gap-4 border-y border-gray-100 py-6 my-8">
                                {productDetails.stats.map((stat, idx) => (
                                    <div key={idx} className="text-center">
                                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                        <p className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="space-y-4 pt-4">
                            {productDetails.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#FF3B30] shadow-sm transition-colors group-hover:border-[#FF3B30] group-hover:bg-[#FF3B30] group-hover:text-white">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-gray-900 text-lg font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="flex-1 w-full relative"
                    >
                        {/* Decorative Blur BG */}
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-red-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-10 -translate-y-10" />

                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-white aspect-[4/3] group border border-white/50">
                            <div className="absolute inset-0 bg-gray-100 animate-pulse" /> {/* Placeholder loader */}
                            <img
                                src={productDetails.image}
                                alt="Product Overview"
                                className="object-cover w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Floating Glass Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="absolute bottom-6 left-6 right-6 z-20 bg-white/80 backdrop-blur-xl border border-white/60 p-5 rounded-2xl shadow-lg flex items-center justify-between"
                            >
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1 tracking-wider">Current Version</p>
                                    <p className="font-bold text-gray-900 text-lg">v2.4 Production Ready</p>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-[#FF3B30] flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
