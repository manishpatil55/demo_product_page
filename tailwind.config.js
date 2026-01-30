/**
 * ============================================================================
 * TAILWIND.CONFIG.JS - Tailwind CSS Configuration
 * ============================================================================
 * 
 * Customizes Tailwind for this project.
 * 
 * CONTENT PATHS:
 * Tells Tailwind which files to scan for class usage.
 * This enables tree-shaking (removing unused CSS in production).
 * 
 * THEME EXTENSIONS:
 * - Custom colors (bg-primary, accent-primary, etc.)
 * - Custom font family (Inter)
 * - Custom border radius values
 * 
 * PLUGINS:
 * None currently used, but could add:
 * - @tailwindcss/forms (form styling)
 * - @tailwindcss/typography (prose styling)
 */

/** @type {import('tailwindcss').Config} */
export default {
    /**
     * CONTENT PATHS
     * 
     * Tailwind scans these files for class names.
     * Any class not found in these files is removed in production.
     */
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",  // All JS/TS files in src/
    ],

    /**
     * DARK MODE
     * 
     * Uses class-based dark mode (add 'dark' class to html element).
     * Controlled by ThemeToggle component.
     */
    darkMode: 'class',

    /**
     * THEME CONFIGURATION
     * 
     * Extends Tailwind's default theme with custom values.
     * These become available as utilities (e.g., bg-bg-primary).
     */
    theme: {
        extend: {
            /**
             * CUSTOM COLORS
             * 
             * Dark theme palette for optional dark mode.
             * Usage: bg-bg-primary, text-text-primary, etc.
             */
            colors: {
                'bg-primary': '#0f1115',      // Dark background
                'bg-secondary': '#1a1d23',    // Slightly lighter dark
                'bg-card': '#20242c',         // Card backgrounds
                'text-primary': '#f0f0f0',    // Primary text (light)
                'text-secondary': '#a0a0a0',  // Secondary text (gray)
                'text-muted': '#6b7280',      // Muted text (darker gray)
                'accent-primary': '#6366f1',  // Indigo accent
                'accent-secondary': '#818cf8', // Lighter indigo
                'accent-glow': 'rgba(99, 102, 241, 0.4)', // Indigo glow
                'success': '#10b981',         // Green (Emerald)
                'error': '#ef4444',           // Red
            },

            /**
             * FONT FAMILY
             * 
             * Primary font: Inter (imported in index.css)
             * Fallbacks: system-ui, sans-serif
             * Usage: font-sans (automatically applied to body)
             */
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },

            /**
             * BORDER RADIUS
             * 
             * Custom rounded values for consistent UI.
             * Usage: rounded-sm, rounded-md, rounded-lg
             */
            borderRadius: {
                'sm': '8px',   // Small (buttons, inputs)
                'md': '12px',  // Medium (cards)
                'lg': '20px',  // Large (modals, panels)
            },

            /**
             * ANIMATIONS
             * 
             * Custom keyframe animations
             */
            animation: {
                'marquee': 'marquee 20s linear infinite',
                'marquee-slow': 'marquee 40s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },

    /**
     * PLUGINS
     * 
     * Add Tailwind plugins here.
     * Example: require('@tailwindcss/forms')
     */
    plugins: [],
}

