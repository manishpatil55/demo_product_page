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

// =============================================================================
// 🚀 HELPER: Generate Landing Page Config with Smart Defaults
// =============================================================================
// Usage: Just provide what you want to customize, rest uses defaults!
//
// MINIMAL EXAMPLE (only 3 lines needed!):
// landingPage: createLandingPage({
//     themeColor: '#E11D48',
//     title: 'Gift Shop Platform',
//     subtitle: 'Build beautiful gift experiences'
// })
//
// FULL CUSTOMIZATION (override any field):
// landingPage: createLandingPage({
//     themeColor: '#8B5CF6',
//     title: 'Artist Community',
//     subtitle: 'Connect with art lovers',
//     pills: ['Custom', 'Pills', 'Here'],
//     aboutTitle: 'About This Platform',
//     aboutDescription: 'Custom about text...',
//     techStack: [{ name: 'React', type: 'Frontend', logo: '...' }],
//     modules: [{ title: 'Module', badge: 'Badge', description: '...', image: '...' }],
//     screens: ['/screen1.png', '/screen2.png'],
//     features: [{ title: 'Feature', description: 'Desc', icon: 'Globe' }]
// })
// =============================================================================
function createLandingPage(config = {}) {
    const {
        // REQUIRED: Just set these 3 for a complete landing page!
        themeColor = '#3B82F6',  // Brand color (hex)
        title = 'App Development Solution',
        subtitle = 'Launch your business with a robust solution.',

        // OPTIONAL: Customize if needed
        pills = ['Easy Use', 'Scalable', 'Secure', 'Modern'],
        cta = 'Get a Quote',
        heroImage = '/mobile-app.png',

        // About Section
        aboutTitle = `What is ${title}?`,
        aboutDescription = `A comprehensive ${title.toLowerCase()} designed to streamline operations, enhance user experience, and drive business growth. Built with modern technologies and best practices.`,
        aboutImage = '/web-platform.png',

        // Tech Stack (4 items)
        techStack = [
            { name: 'React', type: 'Frontend', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
            { name: 'Node.js', type: 'Backend', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
            { name: 'MongoDB', type: 'Database', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
            { name: 'AWS', type: 'Cloud', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' }
        ],

        // Modules (3 cards)
        modules = [
            { title: 'Customer App', badge: 'Mobile', description: 'Intuitive mobile experience for end users.', image: '/mobile-app.png' },
            { title: 'Admin Panel', badge: 'Web', description: 'Powerful dashboard to manage everything.', image: '/admin-panel.png' },
            { title: 'Backend API', badge: 'Server', description: 'Secure and scalable API infrastructure.', image: '/vendor-portal.png' }
        ],

        // Screens (5 images for carousel)
        screens = ['/mobile-app.png', '/web-platform.png', '/admin-panel.png', '/vendor-portal.png', '/analytics.png'],

        // Radial Features (6 items)
        features = [
            { title: 'User Friendly', description: 'Clean, intuitive interface.', icon: 'Globe' },
            { title: 'Real-time Updates', description: 'Instant notifications.', icon: 'Bell' },
            { title: 'Secure Payments', description: 'Multiple gateways.', icon: 'CreditCard' },
            { title: 'Fast Performance', description: 'Optimized speed.', icon: 'Clock' },
            { title: 'Support Chat', description: '24/7 assistance.', icon: 'MessageSquare' },
            { title: 'Analytics', description: 'Track everything.', icon: 'MapPin' }
        ]
    } = config;

    return {
        themeColor,
        hero: { title, subtitle, pills, cta, image: heroImage },
        about: { title: aboutTitle, description: aboutDescription, image: aboutImage },
        techStack,
        modules,
        screens,
        radialFeatures: features
    };
}

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
                slug: 'lal-sweets',
                title: 'Lal Sweets Ecom',
                description: 'Modern sweets store with responsive design for smooth shopping.',
                client: 'Lal Sweets',
                role: 'Full Stack Development',
                timeline: '3 Months',
                challenge: 'The client needed to transition from a traditional brick-and-mortar shop to a digital storefront without losing their brand heritage. They required a system that could handle high traffic during festivals and manage perishable inventory.',
                solution: 'We built a headless commerce solution using Next.js and Shopify. This ensured lightning-fast page loads (crucial for conversion) while giving them a powerful backend to manage stock. We integrated a custom delivery slot picker to handle fresh goods logistics.',
                features: [
                    'Headless Commerce Architecture',
                    'Real-time Inventory Sync',
                    'Custom Delivery Slot Scheduler',
                    'Festival Traffic Auto-Scaling'
                ],
                // NEW: Landing Page Specific Config based on User References
                landingPage: {
                    themeColor: '#D12053', // Zomato Red
                    hero: {
                        title: "Zomato Like Food Delivery App Development Solution",
                        subtitle: "Launch a Zomato like food delivery app with a fully customizable, feature-rich solution designed to help you start and scale your online food ordering business.",
                        pills: ["Easy Navigation", "Advanced Search Options", "Geo-Location", "Intuitive Design"],
                        cta: "Get a Quote",
                        image: "/pikachu.png"
                    },
                    about: {
                        title: "What is Zomato like food delivery app?",
                        description: "Zomato like food delivery app is a robust and user-friendly online food ordering and delivery service that enables users to browse nearby restaurants, explore menus, place instant orders, and get their favorite meals delivered right to their doorstep. \n\nMost notably, our custom solution comes with dedicated panels for Partners (Restaurants), Customers, and Delivery Boys, ensuring smooth operations across the platform.",
                        image: "/web-platform.png" // Placeholder for the 'Happy Woman/Pizza' image
                    },
                    techStack: [
                        { name: 'React Native', type: 'Mobile', logo: 'https://cdn.worldvectorlogo.com/logos/react-native-1.svg' },
                        { name: 'Laravel', type: 'Backend', logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg' },
                        { name: 'MySQL', type: 'Database', logo: 'https://cdn.worldvectorlogo.com/logos/mysql-6.svg' },
                        { name: 'DigitalOcean', type: 'Server', logo: 'https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg' }
                    ],
                    modules: [
                        {
                            title: "Customer App",
                            badge: "Front End",
                            description: "Easy ride booking, live tracking, multiple payments, and a smooth experience.",
                            image: "/mobile-app.png"
                        },
                        {
                            title: "Admin Panel",
                            badge: "Control Center",
                            description: "Manage drivers, riders, payments, and trips with ease. Track performance in real-time.",
                            image: "/admin-panel.png"
                        },
                        {
                            title: "Delivery App",
                            badge: "Logistics",
                            description: "Efficient route planning, order management, and earnings tracking for drivers.",
                            image: "/mobile-app.png"
                        }
                    ],
                    screens: [
                        '/mobile-app.png', '/mobile-app.png', '/mobile-app.png', '/mobile-app.png', '/mobile-app.png'
                    ],
                    radialFeatures: [
                        { title: "Real-time Tracking", description: "Track orders live on the map.", icon: "MapPin" },
                        { title: "Push Notifications", description: "Instant updates on order status.", icon: "Bell" },
                        { title: "Secure Payments", description: "Multiple integrated gateways.", icon: "CreditCard" },
                        { title: "Order History", description: "Easy re-ordering from history.", icon: "Clock" },
                        { title: "Chat Support", description: "Connect with support instantly.", icon: "MessageSquare" },
                        { title: "Multi-Language", description: "Support for local languages.", icon: "Globe" }
                    ]
                },
                stats: [
                    { label: 'Sales Incr.', value: '150%' },
                    { label: 'Page Speed', value: '0.8s' },
                    { label: 'Uptime', value: '99.9%' }
                ],
                gallery: [
                    '/web-platform.png',
                    '/mobile-app.png',
                    '/analytics.png'
                ],
                testimonial: {
                    quote: "The headless architecture completely transformed how we handle Diwali rush. Zero downtime, maximum sales.",
                    author: "Rohan Lal",
                    role: "Owner, Lal Sweets"
                },
                image: '/web-platform.png',
                link: '#'
            },
            // ... (keeping other projects same, just adding new ones at the end) ...
            {
                slug: 'kirtilals-luxury',
                title: 'Kirtilals : Luxury',
                description: 'Premium diamond-jewellery store with elegant UX for luxury buyers.',
                client: 'Kirtilals',
                role: 'UI/UX & Frontend',
                timeline: '4 Months',
                challenge: 'Selling high-value diamond jewelry online requires immense trust. The existing site felt outdated and didn\'t reflect the premium nature of the products, leading to high cart abandonment.',
                solution: 'We designed an immersive "Digital Boutique" experience. Using WebGL for 3D product views and high-resolution zooming, clients could inspect diamonds as if they were in the store. We implemented a concierge chat feature for high-ticket assistance.',
                features: [
                    '360° Product View',
                    'Concierge Chat Integration',
                    'Virtual Try-On (AR)',
                    'Secure High-Value Checkout'
                ],
                landingPage: {
                    themeColor: '#C4A43B', // Luxury Gold
                    hero: {
                        title: "Premium Jewelry E-commerce Platform",
                        subtitle: "Create a luxury digital boutique experience with stunning 3D product views, AR try-on, and secure high-value transactions.",
                        pills: ["360° View", "AR Try-On", "Secure Checkout", "Concierge Chat"],
                        cta: "Get a Quote",
                        image: "/charizard.png"
                    },
                    about: {
                        title: "What is a Luxury E-commerce Platform?",
                        description: "A premium jewelry e-commerce solution designed to replicate the in-store buying experience online. Features immersive product visualization, personalized recommendations, and white-glove customer service integration.",
                        image: "/web-platform.png"
                    },
                    techStack: [
                        { name: 'Next.js', type: 'Frontend', logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
                        { name: 'Three.js', type: '3D Engine', logo: 'https://cdn.worldvectorlogo.com/logos/threejs-1.svg' },
                        { name: 'Shopify', type: 'Backend', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
                        { name: 'AWS', type: 'Cloud', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' }
                    ],
                    modules: [
                        {
                            title: "Customer Storefront",
                            badge: "Front End",
                            description: "Immersive shopping experience with 3D product views and virtual try-on.",
                            image: "/web-platform.png"
                        },
                        {
                            title: "Admin Dashboard",
                            badge: "Control Center",
                            description: "Manage inventory, orders, and customer relationships with ease.",
                            image: "/admin-panel.png"
                        },
                        {
                            title: "Concierge Portal",
                            badge: "Premium Support",
                            description: "Dedicated portal for high-touch customer assistance and appointments.",
                            image: "/vendor-portal.png"
                        }
                    ],
                    screens: [
                        '/mobile-app.png', '/web-platform.png', '/admin-panel.png', '/vendor-portal.png', '/analytics.png'
                    ],
                    radialFeatures: [
                        { title: "3D Product View", description: "Rotate and zoom on every angle.", icon: "Globe" },
                        { title: "AR Try-On", description: "See jewelry on yourself live.", icon: "MapPin" },
                        { title: "Secure Payments", description: "PCI-DSS compliant transactions.", icon: "CreditCard" },
                        { title: "Appointment Booking", description: "Schedule virtual consultations.", icon: "Clock" },
                        { title: "Concierge Chat", description: "Real-time expert assistance.", icon: "MessageSquare" },
                        { title: "Wishlist & Registry", description: "Save and share favorites.", icon: "Bell" }
                    ]
                },
                stats: [
                    { label: 'Avg. Order', value: '+40%' },
                    { label: 'Engagement', value: '4m+' },
                    { label: 'Trust Score', value: '98/100' }
                ],
                image: '/mobile-app.png',
                link: '#'
            },
            {
                slug: 'tradescribe',
                title: 'Tradescribe',
                description: 'Built a sleek journaling platform for tracking trades with AI-backed analytics.',
                client: 'FinTech Startup',
                role: 'Product Development',
                timeline: '6 Months',
                challenge: 'Traders needed a way to log emotions and strategies alongside their P&L, but existing tools were clunky spreadsheets. They needed actionable insights, not just data entry.',
                solution: 'We developed an AI-driven dashboard that analyzes trading patterns. By correlating trade outcomes with emotional tags and market conditions, the app gives personalized coaching tips to improve profitability.',
                features: [
                    'AI Performance Analysis',
                    'Interactive Charts',
                    'Journaling & Tagging',
                    'Dark Mode UI'
                ],
                landingPage: {
                    themeColor: '#10B981', // Emerald Green (Finance)
                    hero: {
                        title: "AI-Powered Trading Journal Platform",
                        subtitle: "Track your trades, analyze patterns, and get personalized coaching with our intelligent trading journal solution.",
                        pills: ["AI Analysis", "Pattern Recognition", "Emotional Tracking", "Performance Metrics"],
                        cta: "Get a Quote",
                        image: "/analytics.png"
                    },
                    about: {
                        title: "What is Tradescribe?",
                        description: "Tradescribe is an intelligent trading journal that goes beyond simple logging. It uses AI to analyze your trading patterns, correlate performance with emotional states, and provide actionable coaching tips to improve your profitability.",
                        image: "/analytics.png"
                    },
                    techStack: [
                        { name: 'React', type: 'Frontend', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
                        { name: 'Python', type: 'AI/ML', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
                        { name: 'PostgreSQL', type: 'Database', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
                        { name: 'TensorFlow', type: 'ML Engine', logo: 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg' }
                    ],
                    modules: [
                        {
                            title: "Trading Dashboard",
                            badge: "Analytics",
                            description: "Visualize your trading performance with interactive charts and metrics.",
                            image: "/analytics.png"
                        },
                        {
                            title: "Journal Module",
                            badge: "Tracking",
                            description: "Log trades with emotional tags, notes, and strategy details.",
                            image: "/web-platform.png"
                        },
                        {
                            title: "AI Coach",
                            badge: "Insights",
                            description: "Get personalized recommendations based on your trading patterns.",
                            image: "/admin-panel.png"
                        }
                    ],
                    screens: [
                        '/analytics.png', '/web-platform.png', '/admin-panel.png', '/mobile-app.png', '/vendor-portal.png'
                    ],
                    radialFeatures: [
                        { title: "Pattern Analysis", description: "AI identifies winning patterns.", icon: "Globe" },
                        { title: "Emotion Tracking", description: "Log mood with each trade.", icon: "Bell" },
                        { title: "P&L Dashboard", description: "Real-time profit tracking.", icon: "CreditCard" },
                        { title: "Trade Replay", description: "Review past decisions.", icon: "Clock" },
                        { title: "Smart Alerts", description: "Get notified of patterns.", icon: "MessageSquare" },
                        { title: "Multi-Broker Sync", description: "Connect all accounts.", icon: "MapPin" }
                    ]
                },
                stats: [
                    { label: 'Users', value: '5k+' },
                    { label: 'Data Points', value: '1M+' },
                    { label: 'Retention', value: '85%' }
                ],
                image: '/analytics.png',
                link: '#'
            },
            {
                slug: 'murzban-clothing',
                title: 'Murzban: Luxury',
                description: 'Modern online store for curated men\'s & women\'s designer fashion.',
                client: 'Murzban',
                role: 'E-commerce Theme',
                timeline: '2 Months',
                challenge: 'The brand needed a minimalist, image-first platform that let the clothing speak for itself, while maintaining fast load times for huge lookbook galleries.',
                solution: 'We created a custom Shopify theme focused on "Invisible UI". Navigation and controls fade away to showcase full-screen fashion photography. Advanced lazy-loading ensures the heavy imagery never slows down the experience.',
                features: [
                    'Minimalist "Invisible" UI',
                    'Lookbook Integration',
                    'Instagram Shop Sync',
                    'Size Guide Algorithm'
                ],
                landingPage: {
                    themeColor: '#1F1F1F', // Sleek Black
                    hero: {
                        title: "Luxury Fashion E-commerce Platform",
                        subtitle: "Create a minimalist, image-first shopping experience that lets your designer collections speak for themselves.",
                        pills: ["Minimal UI", "Lookbook Mode", "Instagram Sync", "Fast Loading"],
                        cta: "Get a Quote",
                        image: "/vendor-portal.png"
                    },
                    about: {
                        title: "What is a Fashion E-commerce Platform?",
                        description: "A premium fashion storefront designed to showcase designer collections with full-screen photography, seamless navigation, and social media integration for modern brands.",
                        image: "/vendor-portal.png"
                    },
                    techStack: [
                        { name: 'Shopify', type: 'Platform', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
                        { name: 'Liquid', type: 'Templating', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
                        { name: 'JavaScript', type: 'Frontend', logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
                        { name: 'Cloudflare', type: 'CDN', logo: 'https://cdn.worldvectorlogo.com/logos/cloudflare.svg' }
                    ],
                    modules: [
                        {
                            title: "Customer Storefront",
                            badge: "Shopping",
                            description: "Full-screen fashion photography with invisible UI controls.",
                            image: "/vendor-portal.png"
                        },
                        {
                            title: "Lookbook Gallery",
                            badge: "Showcase",
                            description: "Curated collection displays with seasonal campaigns.",
                            image: "/web-platform.png"
                        },
                        {
                            title: "Admin Panel",
                            badge: "Management",
                            description: "Easy inventory and order management via Shopify.",
                            image: "/admin-panel.png"
                        }
                    ],
                    screens: [
                        '/vendor-portal.png', '/web-platform.png', '/mobile-app.png', '/admin-panel.png', '/analytics.png'
                    ],
                    radialFeatures: [
                        { title: "Invisible UI", description: "Controls fade for immersion.", icon: "Globe" },
                        { title: "Instagram Sync", description: "Shop from social posts.", icon: "Bell" },
                        { title: "Size Algorithm", description: "AI-powered size guide.", icon: "MapPin" },
                        { title: "Lazy Loading", description: "Lightning-fast galleries.", icon: "Clock" },
                        { title: "Mobile First", description: "Optimized for on-the-go.", icon: "CreditCard" },
                        { title: "Wishlist Sync", description: "Save across devices.", icon: "MessageSquare" }
                    ]
                },
                stats: [
                    { label: 'Mobile Sales', value: '70%' },
                    { label: 'Load Time', value: '<1s' },
                    { label: 'ROAS', value: '4x' }
                ],
                image: '/vendor-portal.png',
                link: '#'
            },
            {
                slug: 'greenfeels',
                title: 'Greenfeels',
                description: 'Curated eco-friendly essentials in a clean responsive design.',
                client: 'Greenfeels Co.',
                role: 'Branding & Web',
                timeline: '2.5 Months',
                challenge: 'Communicating the impact of sustainable products without sounding preachy. The goal was to make sustainability look cool and desirable, not just responsible.',
                solution: 'We researched color psychology and used a vibrant, earthy palette paired with modern typography. We built a "Impact Calculator" in the cart that shows how much plastic/water is saved per order.',
                features: [
                    'Impact Calculator',
                    'Subscription Model',
                    'Eco-badges System',
                    'Storytelling Checkout'
                ],
                landingPage: {
                    themeColor: '#22C55E', // Eco Green
                    hero: {
                        title: "Eco-Friendly E-commerce Platform",
                        subtitle: "Build a sustainable shopping experience with impact tracking, subscription models, and storytelling that makes going green desirable.",
                        pills: ["Impact Tracker", "Subscriptions", "Eco Badges", "Story Checkout"],
                        cta: "Get a Quote",
                        image: "/web-platform.png"
                    },
                    about: {
                        title: "What is an Eco-Friendly Platform?",
                        description: "A conscious commerce solution designed to highlight environmental impact. Features real-time sustainability metrics, subscription-based purchasing, and gamified eco-rewards to drive repeat engagement.",
                        image: "/web-platform.png"
                    },
                    techStack: [
                        { name: 'Next.js', type: 'Frontend', logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
                        { name: 'Stripe', type: 'Payments', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
                        { name: 'MongoDB', type: 'Database', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
                        { name: 'Vercel', type: 'Hosting', logo: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' }
                    ],
                    modules: [
                        {
                            title: "Customer Shop",
                            badge: "Storefront",
                            description: "Clean, earthy design showcasing eco-friendly products.",
                            image: "/web-platform.png"
                        },
                        {
                            title: "Impact Dashboard",
                            badge: "Tracking",
                            description: "Real-time metrics on plastic saved and carbon offset.",
                            image: "/analytics.png"
                        },
                        {
                            title: "Admin Panel",
                            badge: "Management",
                            description: "Manage subscriptions, inventory, and eco-badges.",
                            image: "/admin-panel.png"
                        }
                    ],
                    screens: [
                        '/web-platform.png', '/analytics.png', '/mobile-app.png', '/admin-panel.png', '/vendor-portal.png'
                    ],
                    radialFeatures: [
                        { title: "Impact Calculator", description: "Track plastic & water saved.", icon: "Globe" },
                        { title: "Subscription Box", description: "Auto-renew eco essentials.", icon: "Bell" },
                        { title: "Eco Badges", description: "Gamified sustainability.", icon: "MapPin" },
                        { title: "Story Checkout", description: "Learn product origins.", icon: "MessageSquare" },
                        { title: "Carbon Offset", description: "Automated offset purchases.", icon: "CreditCard" },
                        { title: "Community Forum", description: "Connect eco-conscious users.", icon: "Clock" }
                    ]
                },
                stats: [
                    { label: 'Plastic Saved', value: '2T' },
                    { label: 'Subscribers', value: '1.2k' },
                    { label: 'Growth', value: '200%' }
                ],
                image: '/web-platform.png',
                link: '#'
            },
            {
                slug: 'momentz-gifts',
                title: 'Momentz',
                description: 'Curated luxury gifts and premium home décor in a sleek online storefront.',
                client: 'Momentz',
                role: 'Full Revamp',
                timeline: '3 Months',
                challenge: 'Gift-giving is emotional. The old site felt transactional. They needed a way to guide users to the perfect gift based on occasion and relationship.',
                solution: 'We implemented a "Gift Finder Quiz" engine. Users answer 3 simple questions to get curated recommendations. We added high-touch features like video messages with gift cards.',
                features: [
                    'Gift Finder Quiz',
                    'Video Message Cards',
                    'Multi-address Ship',
                    'Corporate Bulk Order'
                ],
                landingPage: {
                    themeColor: '#E11D48', // Rose Red (Gift)
                    hero: {
                        title: "Luxury Gifting E-commerce Platform",
                        subtitle: "Create an emotional shopping experience with personalized gift recommendations, video messages, and seamless multi-address shipping.",
                        pills: ["Gift Finder", "Video Cards", "Multi-Ship", "Corporate Orders"],
                        cta: "Get a Quote",
                        image: "/admin-panel.png"
                    },
                    about: {
                        title: "What is a Gifting Platform?",
                        description: "A curated gifting experience designed to transform transactional shopping into emotional connections. Features AI-powered gift recommendations, personalized video messages, and enterprise-grade bulk ordering.",
                        image: "/admin-panel.png"
                    },
                    techStack: [
                        { name: 'React', type: 'Frontend', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
                        { name: 'Node.js', type: 'Backend', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
                        { name: 'Stripe', type: 'Payments', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
                        { name: 'Redis', type: 'Caching', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg' }
                    ],
                    modules: [
                        {
                            title: "Customer Shop",
                            badge: "Storefront",
                            description: "Beautiful gift browsing with quiz-based recommendations.",
                            image: "/admin-panel.png"
                        },
                        {
                            title: "Video Studio",
                            badge: "Personal Touch",
                            description: "Record and attach video messages to any gift.",
                            image: "/mobile-app.png"
                        },
                        {
                            title: "Corporate Portal",
                            badge: "B2B",
                            description: "Bulk ordering and multi-address management for businesses.",
                            image: "/vendor-portal.png"
                        }
                    ],
                    screens: [
                        '/admin-panel.png', '/mobile-app.png', '/vendor-portal.png', '/web-platform.png', '/analytics.png'
                    ],
                    radialFeatures: [
                        { title: "Gift Finder Quiz", description: "3 questions to perfect gift.", icon: "Globe" },
                        { title: "Video Messages", description: "Personal touch with cards.", icon: "Bell" },
                        { title: "Multi-Address", description: "Ship to multiple locations.", icon: "MapPin" },
                        { title: "Bulk Orders", description: "Corporate gift management.", icon: "CreditCard" },
                        { title: "Gift Registry", description: "Create and share wishlists.", icon: "Clock" },
                        { title: "Personalization", description: "Custom engravings & wrap.", icon: "MessageSquare" }
                    ]
                },
                stats: [
                    { label: 'Conv. Rate', value: '4.5%' },
                    { label: 'AOV', value: '$120' },
                    { label: 'Returns', value: '<1%' }
                ],
                image: '/admin-panel.png',
                link: '#'
            },
            // New Added Projects to test View All
            {
                slug: 'health-hub',
                title: 'HealthHub Portal',
                description: 'Secure patient management system with telemedicine integration.',
                client: 'MediCore',
                role: 'Backend Architecture',
                timeline: '5 Months',
                landingPage: {
                    themeColor: '#0EA5E9', // Medical Blue
                    hero: {
                        title: "Telemedicine & Patient Management Platform",
                        subtitle: "Build a HIPAA-compliant healthcare platform with video consultations, secure patient records, and seamless appointment scheduling.",
                        pills: ["Video Consults", "Patient Records", "Scheduling", "HIPAA Compliant"],
                        cta: "Get a Quote",
                        image: "/mobile-app.png"
                    },
                    about: {
                        title: "What is HealthHub?",
                        description: "A comprehensive telemedicine solution enabling healthcare providers to manage patients, conduct video consultations, and maintain secure medical records—all from one unified platform.",
                        image: "/mobile-app.png"
                    },
                    techStack: [
                        { name: 'React', type: 'Frontend', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
                        { name: 'Node.js', type: 'Backend', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
                        { name: 'PostgreSQL', type: 'Database', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
                        { name: 'AWS', type: 'Cloud', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' }
                    ],
                    modules: [
                        {
                            title: "Patient App",
                            badge: "Mobile",
                            description: "Book appointments, video calls, and view records.",
                            image: "/mobile-app.png"
                        },
                        {
                            title: "Doctor Dashboard",
                            badge: "Web App",
                            description: "Manage patients, schedules, and prescriptions.",
                            image: "/admin-panel.png"
                        },
                        {
                            title: "Admin Portal",
                            badge: "Control",
                            description: "Oversee staff, billing, and compliance.",
                            image: "/vendor-portal.png"
                        }
                    ],
                    screens: [
                        '/mobile-app.png', '/admin-panel.png', '/vendor-portal.png', '/web-platform.png', '/analytics.png'
                    ],
                    radialFeatures: [
                        { title: "Video Consults", description: "HD video with screen share.", icon: "Globe" },
                        { title: "E-Prescriptions", description: "Digital prescriptions.", icon: "Bell" },
                        { title: "Secure Records", description: "HIPAA-compliant storage.", icon: "CreditCard" },
                        { title: "Appointment Sync", description: "Calendar integration.", icon: "Clock" },
                        { title: "Lab Integration", description: "Direct lab result upload.", icon: "MapPin" },
                        { title: "Chat Support", description: "Async patient messaging.", icon: "MessageSquare" }
                    ]
                },
                image: '/mobile-app.png',
                link: '#'
            },
            {
                slug: 'pixel-art-studio',
                title: 'PixelArt Studio',
                description: 'Community platform for digital artists to share and commission work.',
                client: 'PixelArt Inc',
                role: 'Full Stack',
                timeline: '3 Months',
                landingPage: {
                    themeColor: '#8B5CF6', // Creative Purple
                    hero: {
                        title: "Digital Artist Community Platform",
                        subtitle: "Build a vibrant community for digital artists to showcase portfolios, accept commissions, and connect with art enthusiasts.",
                        pills: ["Artist Profiles", "Commissions", "Community", "NFT Ready"],
                        cta: "Get a Quote",
                        image: "/web-platform.png"
                    },
                    about: {
                        title: "What is PixelArt Studio?",
                        description: "A creator-first platform where digital artists can build portfolios, accept commissions, sell prints, and engage with a community of art lovers. Features secure payments and optional NFT minting.",
                        image: "/web-platform.png"
                    },
                    techStack: [
                        { name: 'Next.js', type: 'Frontend', logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' },
                        { name: 'Firebase', type: 'Backend', logo: 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg' },
                        { name: 'Stripe', type: 'Payments', logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg' },
                        { name: 'Cloudinary', type: 'Media', logo: 'https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg' }
                    ],
                    modules: [
                        {
                            title: "Artist Portal",
                            badge: "Creator Tools",
                            description: "Portfolio builder with commission management.",
                            image: "/web-platform.png"
                        },
                        {
                            title: "Community Feed",
                            badge: "Social",
                            description: "Discover, like, and comment on artwork.",
                            image: "/mobile-app.png"
                        },
                        {
                            title: "Admin Panel",
                            badge: "Moderation",
                            description: "Content moderation and user management.",
                            image: "/admin-panel.png"
                        }
                    ],
                    screens: [
                        '/web-platform.png', '/mobile-app.png', '/admin-panel.png', '/analytics.png', '/vendor-portal.png'
                    ],
                    radialFeatures: [
                        { title: "Portfolio Builder", description: "Drag-and-drop galleries.", icon: "Globe" },
                        { title: "Commission System", description: "Request & manage orders.", icon: "CreditCard" },
                        { title: "Community Feed", description: "Social art discovery.", icon: "Bell" },
                        { title: "Print Store", description: "Sell physical prints.", icon: "MapPin" },
                        { title: "NFT Minting", description: "Optional blockchain art.", icon: "Clock" },
                        { title: "Direct Messaging", description: "Client communication.", icon: "MessageSquare" }
                    ]
                },
                image: '/web-platform.png',
                link: '#'
            },
            {
                slug: 'fin-track-pro',
                title: 'FinTrack Pro',
                description: 'Personal finance dashboard with bank sync and spending categorization.',
                client: 'Self-Started',
                role: 'Solo Dev',
                timeline: '2 Months',
                landingPage: {
                    themeColor: '#F59E0B', // Finance Amber
                    hero: {
                        title: "Personal Finance Dashboard Platform",
                        subtitle: "Create a powerful personal finance tool with automatic bank sync, spending categorization, and goal tracking for smarter money management.",
                        pills: ["Bank Sync", "Budgeting", "Goals", "Insights"],
                        cta: "Get a Quote",
                        image: "/analytics.png"
                    },
                    about: {
                        title: "What is FinTrack Pro?",
                        description: "A personal finance management app that connects to bank accounts, automatically categorizes spending, tracks budgets, and provides actionable insights to help users achieve financial goals.",
                        image: "/analytics.png"
                    },
                    techStack: [
                        { name: 'React', type: 'Frontend', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
                        { name: 'Plaid', type: 'Banking API', logo: 'https://cdn.worldvectorlogo.com/logos/plaid-2.svg' },
                        { name: 'Node.js', type: 'Backend', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
                        { name: 'MongoDB', type: 'Database', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' }
                    ],
                    modules: [
                        {
                            title: "Dashboard",
                            badge: "Overview",
                            description: "See all accounts, spending, and goals at a glance.",
                            image: "/analytics.png"
                        },
                        {
                            title: "Budget Planner",
                            badge: "Planning",
                            description: "Set and track monthly budgets by category.",
                            image: "/admin-panel.png"
                        },
                        {
                            title: "Goal Tracker",
                            badge: "Savings",
                            description: "Visualize progress towards financial goals.",
                            image: "/web-platform.png"
                        }
                    ],
                    screens: [
                        '/analytics.png', '/admin-panel.png', '/web-platform.png', '/mobile-app.png', '/vendor-portal.png'
                    ],
                    radialFeatures: [
                        { title: "Bank Sync", description: "Auto-import transactions.", icon: "CreditCard" },
                        { title: "Smart Categories", description: "AI spending labels.", icon: "Globe" },
                        { title: "Budget Alerts", description: "Overspending warnings.", icon: "Bell" },
                        { title: "Goal Tracking", description: "Savings milestones.", icon: "MapPin" },
                        { title: "Expense Reports", description: "Monthly breakdowns.", icon: "Clock" },
                        { title: "Multi-Bank", description: "Connect all accounts.", icon: "MessageSquare" }
                    ]
                },
                image: '/analytics.png',
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
