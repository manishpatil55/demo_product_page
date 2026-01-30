/**
 * ============================================================================
 * SITE CONFIG - Universal Product Page Configuration
 * ============================================================================
 * 
 * This single file controls ALL content on the product page.
 * To customize for a different product, simply update this file.
 * 
 * Sections:
 * - brand: Company branding
 * - hero: Hero section content
 * - offerings: Product ecosystem cards
 * - services: Why Choose Us section
 * - pricing: Pricing plans
 * - testimonials: Client reviews
 * - faq: Frequently Asked Questions
 * - stats: Achievement numbers
 * - contact: Contact information
 * - socials: Social media links
 */

const siteConfig = {
    // =========================================================================
    // BRAND SETTINGS
    // =========================================================================
    brand: {
        name: 'hxp',
        tagline: 'Crafting Scalable Digital Solutions',
        logo: null, // Use text logo if null, or path like '/logo.svg'
        colors: {
            primary: '#FF3B30',    // Main accent color
            secondary: '#111111',   // Secondary color
        }
    },

    // =========================================================================
    // HERO SECTION
    // =========================================================================
    hero: {
        // Badge above headline (set to null to hide)
        badge: null,

        // Main headline - supports HTML for styling
        headline: 'Build your <span class="text-gradient">Digital Empire</span>',

        // Subtitle text
        subtitle: 'The complete solution for your business. <strong>Pixel-perfect design</strong>, powerful functionality, and robust performance.',

        // Pricing display (set to null to hide)
        pricing: {
            label: 'Starting at',
            amount: '₹50,000',
            period: 'one-time',
            note: 'Includes 1 Year Free Support & Updates'
        },

        // CTA Button
        cta: {
            text: 'Get Started',
            link: '#contact',
            icon: '→'
        },

        // Device mockup settings
        mockup: {
            type: 'phone', // 'phone', 'laptop', 'tablet', or null
            image: '/apple-iphone-17-pro-max.png',
            // Floating cards around the mockup
            floatingCards: [
                {
                    icon: '🎉',
                    title: 'Order Received!',
                    subtitle: '+$45.00 Revenue',
                    position: 'top-right',
                    color: 'green'
                },
                {
                    icon: '🛵',
                    title: 'Driver Nearby',
                    subtitle: 'Arriving in 2 mins',
                    position: 'bottom-left',
                    color: 'orange'
                }
            ]
        }
    },

    // =========================================================================
    // PRODUCT OFFERINGS (Carousel)
    // =========================================================================
    offerings: [
        {
            id: 1,
            title: 'Web Platform',
            subtitle: 'Responsive Storefront',
            description: 'A lightning-fast progressive web app that works on any device. SEO optimized and conversion focused.',
            icon: '🖥️',
            image: '/web-platform.png',
            color: 'from-amber-100 to-orange-50',
            accent: 'text-orange-600',
        },
        {
            id: 2,
            title: 'User App',
            subtitle: 'Native Experience',
            description: 'Top-tier mobile experience with real-time features, smooth payments, and addictive ease of use.',
            icon: '📱',
            image: '/mobile-app.png',
            color: 'from-green-100 to-emerald-50',
            accent: 'text-emerald-600',
        },
        {
            id: 3,
            title: 'Admin Panel',
            subtitle: 'Mission Control',
            description: 'Complete command center. Manage everything from one powerful, intuitive dashboard.',
            icon: '⚡',
            image: '/admin-panel.png',
            color: 'from-blue-100 to-cyan-50',
            accent: 'text-blue-600',
        },
        {
            id: 4,
            title: 'Vendor Portal',
            subtitle: 'For Partners',
            description: 'Empower your partners with their own dedicated portal to manage operations on the go.',
            icon: '🏪',
            image: '/vendor-portal.png',
            color: 'from-pink-100 to-rose-50',
            accent: 'text-rose-600',
        },
        {
            id: 5,
            title: 'Analytics Suite',
            subtitle: 'Data Insights',
            description: 'Advanced analytics at your fingertips. Track metrics, visualize data, and make informed decisions.',
            icon: '📊',
            image: '/analytics.png',
            color: 'from-purple-100 to-violet-50',
            accent: 'text-violet-600',
        }
    ],

    // =========================================================================
    // PRICING PLANS
    // =========================================================================
    pricing: {
        headline: 'Simple, Transparent Pricing',
        subtitle: 'Choose the plan that fits your needs',
        billingToggle: true, // Show monthly/yearly toggle
        plans: [
            {
                name: 'Starter',
                description: 'Perfect for small businesses',
                monthlyPrice: 29999,
                yearlyPrice: 24999,
                currency: '₹',
                popular: false,
                features: [
                    'Single platform (Web or Mobile)',
                    'Basic admin panel',
                    '3 months support',
                    'Email support only',
                    'Basic analytics'
                ],
                cta: 'Get Started'
            },
            {
                name: 'Professional',
                description: 'Most popular for growing businesses',
                monthlyPrice: 49999,
                yearlyPrice: 39999,
                currency: '₹',
                popular: true,
                features: [
                    'Web + Mobile apps',
                    'Full admin panel',
                    '6 months support',
                    'Priority support',
                    'Advanced analytics',
                    'API access',
                    'Custom branding'
                ],
                cta: 'Get Started'
            },
            {
                name: 'Enterprise',
                description: 'For large scale operations',
                monthlyPrice: null, // Shows "Contact Us"
                yearlyPrice: null,
                currency: '₹',
                popular: false,
                features: [
                    'Everything in Professional',
                    'Unlimited platforms',
                    '12 months support',
                    '24/7 dedicated support',
                    'Custom integrations',
                    'White-label solution',
                    'SLA guarantee',
                    'On-premise option'
                ],
                cta: 'Contact Sales'
            }
        ]
    },

    // =========================================================================
    // TESTIMONIALS
    // =========================================================================
    testimonials: [
        {
            quote: "This solution transformed our business. The quality of work and attention to detail is exceptional.",
            author: 'Rahul Sharma',
            role: 'CEO',
            company: 'TechStart India',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 5
        },
        {
            quote: "Professional team, delivered on time, and the end product exceeded our expectations. Highly recommended!",
            author: 'Priya Patel',
            role: 'Founder',
            company: 'GreenLeaf Organics',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 5
        },
        {
            quote: "The best investment we made for our digital presence. ROI was visible within the first month.",
            author: 'Amit Kumar',
            role: 'Managing Director',
            company: 'FastTrack Logistics',
            avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
            rating: 5
        }
    ],

    // =========================================================================
    // FAQ
    // =========================================================================
    faq: [
        {
            question: 'How long does development take?',
            answer: 'Typical projects take 4-8 weeks depending on complexity. We provide detailed timelines during the consultation phase.',
            category: 'General'
        },
        {
            question: 'What technologies do you use?',
            answer: 'We use modern tech stacks including React, Node.js, Flutter, and cloud platforms like AWS and Firebase for scalable solutions.',
            category: 'Technical'
        },
        {
            question: 'Do you provide post-launch support?',
            answer: 'Yes! All our packages include free support. Extended support plans are available for ongoing maintenance.',
            category: 'Support'
        },
        {
            question: 'Can I request custom features?',
            answer: 'Absolutely. We specialize in custom development and can build any feature you need for your specific use case.',
            category: 'General'
        },
        {
            question: 'What is your payment structure?',
            answer: 'We typically work with 50% upfront and 50% on delivery. Enterprise clients can discuss custom payment terms.',
            category: 'Pricing'
        },
        {
            question: 'Do you offer white-label solutions?',
            answer: 'Yes, our Enterprise plan includes complete white-labeling. Your brand, your product, no trace of us.',
            category: 'Technical'
        }
    ],

    // =========================================================================
    // STATS / ACHIEVEMENTS
    // =========================================================================
    stats: [
        { value: 50, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
        { value: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
        { value: 24, suffix: '/7', label: 'Support Available', icon: '💬' },
        { value: 5, suffix: '+', label: 'Years Experience', icon: '📅' }
    ],

    // =========================================================================
    // CONTACT INFORMATION
    // =========================================================================
    contact: {
        email: 'hello@hxptechnologies.com',
        phone: '+91 98765 43210',
        whatsapp: '919876543210', // Without + or spaces
        address: 'Mumbai, India',
        formFields: ['name', 'phone', 'email', 'brand'], // Fields to show
    },

    // =========================================================================
    // SOCIAL LINKS
    // =========================================================================
    socials: {
        linkedin: 'https://linkedin.com/company/hxp',
        instagram: 'https://instagram.com/hxp',
        behance: 'https://behance.net/hxp',
        twitter: null, // Set to null to hide
        github: null,
    },

    // =========================================================================
    // FOOTER NAVIGATION
    // =========================================================================
    footerNav: [
        { label: 'Our Work', href: '#work' },
        { label: 'Services', href: '#services' },
        { label: 'About Us', href: '#about' },
        { label: 'Contact Us', href: '#contact' },
    ],

    // =========================================================================
    // SITE SETTINGS
    // =========================================================================
    settings: {
        darkMode: true, // Enable dark mode toggle
        smoothScroll: true,
        animations: true,
    }
};

export default siteConfig;
