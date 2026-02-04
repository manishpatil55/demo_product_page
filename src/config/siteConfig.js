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
    // NAVIGATION LINKS (External & Internal)
    // =========================================================================
    links: {
        home: '#', // Visual only
        about: '#', // Visual only
        work: '#', // Visual only
        services: '#', // Visual only
        contact: '#', // Visual only
    },

    // =========================================================================
    // HERO SECTION
    // =========================================================================
    hero: {
        headline: {
            prefix: "Build your",
            highlight: "Food Empire",
            suffix: ""
        },
        subtitle: "The complete multi-vendor food delivery solution.",
        description: "Pixel-perfect apps, powerful admin panel, and robust backend.",
        pricing: {
            label: "One-time License:",
            value: "₹50,000",
            subtext: "Includes 1 Year Free Support & Updates"
        },
        cta: {
            text: "Get Started",
            link: "#contact"
        },
        mockup: {
            notification1: {
                title: "Order Received!",
                subtitle: "+$45.00 Revenue",
                icon: "🎉",
                color: "green"
            },
            notification2: {
                title: "Driver Nearby",
                subtitle: "Arriving in 2 mins",
                icon: "🛵",
                color: "orange"
            }
        }
    },

    // =========================================================================
    // TECH TILES SECTION
    // =========================================================================
    techTiles: {
        title: "Technologies We Work On",
        subtitle: "Our Tech Stack",
        description: "And many more tools to build exceptional products",
        technologies: [
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
        ]
    },

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
    // PRODUCT DETAILS (Simple Exploration)
    // =========================================================================
    productDetails: {
        title: "Your Product Name",
        subtitle: "The Ultimate scalable Solution",
        description: "This is where you describe your product in detail. Highlight the main problem it solves and why your solution is the best on the market. Keep it engaging and focused on value. Explain your core technology, your unique selling proposition, and how you deliver results.",
        longDescription: "Dive deeper into the architecture here. Whether it's microservices, AI integration, or a revolutionary UI/UX, this space allows you to expand on the technical prowess of your offering. This template is designed to handle text-heavy explanations without losing visual appeal.",
        features: [
            "Enterprise-Grade Architecture",
            "Fully Scalable & Secure",
            "Modern Tech Stack (React/Node)",
            "Comprehensive Documentation",
            "24/7 Priority Support"
        ],
        stats: [
            { label: 'Uptime', value: '99.9%' },
            { label: 'Users', value: '10K+' },
            { label: 'Rating', value: '4.9/5' }
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" // Generic tech image
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
            icon: '/web-platform.png',
            image: '/web-platform.png',
            color: 'from-amber-100 to-orange-50',
            accent: 'text-orange-600',
        },
        {
            id: 2,
            title: 'User App',
            subtitle: 'Native Experience',
            description: 'Top-tier mobile experience with real-time features, smooth payments, and addictive ease of use.',
            icon: '/mobile-app.png',
            image: '/mobile-app.png',
            color: 'from-green-100 to-emerald-50',
            accent: 'text-emerald-600',
        },
        {
            id: 3,
            title: 'Admin Panel',
            subtitle: 'Mission Control',
            description: 'Complete command center. Manage everything from one powerful, intuitive dashboard.',
            icon: '/admin-panel.png',
            image: '/admin-panel.png',
            color: 'from-blue-100 to-cyan-50',
            accent: 'text-blue-600',
        },
        {
            id: 4,
            title: 'Vendor Portal',
            subtitle: 'For Partners',
            description: 'Empower your partners with their own dedicated portal to manage operations on the go.',
            icon: '/vendor-portal.png',
            image: '/vendor-portal.png',
            color: 'from-pink-100 to-rose-50',
            accent: 'text-rose-600',
        },
        {
            id: 5,
            title: 'Analytics Suite',
            subtitle: 'Data Insights',
            description: 'Advanced analytics at your fingertips. Track metrics, visualize data, and make informed decisions.',
            icon: '/analytics.png',
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
    // PROJECT SHOWCASE
    // =========================================================================
    showcase: {
        badge: 'Social Presence',
        headline: 'Turning Visions Into Digital Reality',
        projects: [
            {
                title: 'Lal Sweets Ecom Website',
                description: 'Modern sweets store with responsive design for smooth shopping.',
                image: '/web-platform.png',
                link: '#'
            },
            {
                title: 'Kirtilals : Luxury Website',
                description: 'Premium diamond-jewellery store with elegant UX for luxury buyers.',
                image: '/mobile-app.png',
                link: '#'
            },
            {
                title: 'Tradescribe: Trading Platform',
                description: 'Built a sleek journaling platform for tracking trades with AI-backed analytics.',
                image: '/analytics.png',
                link: '#'
            },
            {
                title: 'Murzban: Clothing Luxury',
                description: 'Modern online store for curated men\'s & women\'s designer fashion.',
                image: '/vendor-portal.png',
                link: '#'
            },
            {
                title: 'Greenfeels: Sustainable Ecom',
                description: 'Curated eco-friendly essentials in a clean responsive design for conscious shoppers.',
                image: '/web-platform.png',
                link: '#'
            },
            {
                title: 'Momentz',
                description: 'Curated luxury gifts and premium home décor in a sleek online storefront.',
                image: '/admin-panel.png',
                link: '#'
            },
            {
                title: 'PixelArt Studio',
                description: 'Creative portfolio platform for digital artists and designers.',
                image: '/web-platform.png',
                link: '#'
            },
            {
                title: 'HealthHub',
                description: 'Complete patient management system with telemedicine capabilities.',
                image: '/mobile-app.png',
                link: '#'
            },
            {
                title: 'FinTrack Pro',
                description: 'Personal finance dashboard for tracking investments and expenses.',
                image: '/analytics.png',
                link: '#'
            }
        ]
    },

    // =========================================================================
    // NEW TESTIMONIALS
    // =========================================================================
    testimonials: {
        badge: 'Client Love',
        headline: 'Trusted by Innovative Teams',
        reviews: [
            {
                quote: "The team at hxp transformed our vision into a scalable reality. The attention to detail is unmatched.",
                author: 'Vikram Mehta',
                role: 'CTO, FinTech Solutions',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
            },
            {
                quote: "Incredible design aesthetics backed by solid engineering. Our conversion rates doubled after the launch.",
                author: 'Sarah Jenkins',
                role: 'Founder, StyleLoft',
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
            },
            {
                quote: "They didn't just build a website; they built a comprehensive digital experience for our customers.",
                author: 'Arjun Reddy',
                role: 'Director, UrbanSpace',
                avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
            },
            {
                quote: "Seamless communication and delivery. The post-launch support has been exceptional.",
                author: 'Meera Kapoor',
                role: 'Marketing Head, GreenLife',
                avatar: 'https://randomuser.me/api/portraits/women/28.jpg'
            }
        ]
    },

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
    // MARQUEE (Infinite Scroll)
    // =========================================================================
    marquee: {
        text: "Built with the Best",
        secondaryText: "Launch Faster",
        color: "red"
    },

    // =========================================================================
    // CONTACT INFORMATION
    // =========================================================================
    contact: {
        label: "Contact",
        headline: 'Let\'s build <br /><span class="text-[#FF3B30]">something great</span><br />together.',
        description: "Share your project details and we'll craft a solution tailored just for you.",
        email: 'hello@hxptechnologies.com',
        phone: '+91 98765 43210',
        whatsapp: '919876543210', // Without + or spaces
        address: 'Mumbai, India',
        formFields: [
            { id: 'name', label: 'Full Name', type: 'text', required: true },
            { id: 'phone', label: 'Phone Number', type: 'tel', required: true },
            { id: 'email', label: 'Email Address', type: 'email', required: false },
            { id: 'brand', label: 'Brand / Company', type: 'text', required: false },
        ],
        cta: "Send Message"
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
