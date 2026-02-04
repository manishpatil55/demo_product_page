import React from 'react';
import siteConfig from '../config/siteConfig';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const { testimonials } = siteConfig;

    // Duplicate reviews to create seamless loop
    const doubledReviews = [...testimonials.reviews, ...testimonials.reviews];

    return (
        <section id="" className="py-24 bg-[#FAFAFA] relative overflow-hidden text-center">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto px-6 mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        {testimonials.badge}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                        {testimonials.headline}
                    </h2>
                </div>

                {/* Marquee Container */}
                <div className="relative w-full overflow-hidden py-10">
                    {/* Gradient Masks for fade effect at edges */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                    {/* Moving Track */}
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                        {doubledReviews.map((review, index) => (
                            <div
                                key={index}
                                className="w-[350px] md:w-[450px] mx-4 flex-shrink-0"
                            >
                                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 h-full text-left group hover:-translate-y-1">
                                    <div className="mb-6">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Quote className="w-5 h-5 text-blue-500 fill-current" />
                                        </div>
                                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium line-clamp-4">
                                            "{review.quote}"
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50 mt-auto">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                                                <img
                                                    src={review.avatar}
                                                    alt={review.author}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                                                <div className="bg-green-500 rounded-full w-3 h-3 border-2 border-white" />
                                            </div>
                                        </div>
                                        <div className="overflow-hidden">
                                            <h4 className="font-bold text-gray-900 text-sm truncate">{review.author}</h4>
                                            <p className="text-gray-500 text-xs truncate">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
