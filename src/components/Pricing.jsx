import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import siteConfig from '../config/siteConfig';

export default function Pricing() {
    const { pricing } = siteConfig;
    const [isYearly, setIsYearly] = useState(true);

    return (
        <section className="py-24 px-6 bg-[#FAFAFA] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                        {pricing.headline}
                    </h2>
                    <p className="text-xl text-gray-500">
                        {pricing.subtitle}
                    </p>

                    {/* Toggle Switch */}
                    {pricing.billingToggle && (
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <span className={`text-sm font-semibold transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
                                Monthly
                            </span>
                            <button
                                onClick={() => setIsYearly(!isYearly)}
                                className="relative w-14 h-8 rounded-full bg-gray-200 p-1 transition-colors hover:bg-gray-300 focus:outline-none"
                            >
                                <motion.div
                                    animate={{ x: isYearly ? 24 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    className="w-6 h-6 rounded-full bg-white shadow-sm"
                                />
                            </button>
                            <span className={`text-sm font-semibold transition-colors ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>
                                Yearly <span className="text-[#FF3B30] text-xs ml-1">(Save 20%)</span>
                            </span>
                        </div>
                    )}
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricing.plans.map((plan, index) => (
                        <PricingCard
                            key={plan.name}
                            plan={plan}
                            isYearly={isYearly}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

function PricingCard({ plan, isYearly, index }) {
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
    const isContact = price === null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`
                relative p-8 rounded-[2rem] border transition-all duration-300 flex flex-col h-full
                ${plan.popular
                    ? 'bg-white border-[#FF3B30] shadow-xl scale-105 z-10'
                    : 'bg-white/50 border-gray-100 hover:border-gray-200 hover:shadow-lg'
                }
            `}
        >
            {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF3B30] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
            </div>

            <div className="mb-8">
                {isContact ? (
                    <span className="text-4xl font-bold text-gray-900">Contact Us</span>
                ) : (
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gray-900">
                            {plan.currency}{price?.toLocaleString()}
                        </span>
                        <span className="text-gray-500 font-medium">/{isYearly ? 'year' : 'month'}</span>
                    </div>
                )}
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-[#FF3B30] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            <button
                className={`
                    w-full py-4 rounded-xl font-bold transition-all duration-300
                    ${plan.popular
                        ? 'bg-[#FF3B30] text-white hover:bg-red-600 shadow-lg hover:shadow-red-500/25'
                        : 'bg-gray-900 text-white hover:bg-black'
                    }
                `}
            >
                {plan.cta}
            </button>
        </motion.div>
    );
}
