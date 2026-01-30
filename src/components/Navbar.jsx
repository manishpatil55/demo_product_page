/**
 * ============================================================================
 * NAVBAR.JSX - Fixed Glassmorphism Navigation
 * ============================================================================
 * 
 * Features:
 * - Fixed position (stays visible while scrolling)
 * - Glassmorphism effect (frosted glass look)
 * - hxp. branding with red dot
 * - Responsive navigation links with red underline hover
 * - Contact CTA button
 */

export default function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl 2xl:max-w-7xl px-4">
            <div className="w-full flex items-center justify-between px-8 py-4 bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:bg-white/90">

                {/* Logo */}
                <a href="#" className="flex items-center group">
                    <span className="font-bold text-3xl tracking-tighter text-black font-sans">
                        hxp<span className="text-[#FF3B30]">.</span>
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    {['Home', 'Projects', 'Services', 'About Us'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="relative text-sm font-medium text-gray-500 hover:text-black transition-colors group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF3B30] group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <button className="px-6 py-2.5 bg-transparent border border-[#FF3B30] text-[#FF3B30] text-sm font-semibold rounded-full hover:bg-[#FF3B30] hover:text-white transition-all shadow-sm">
                    Contact us
                </button>
            </div>
        </nav>
    );
}

