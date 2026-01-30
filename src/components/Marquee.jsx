/**
 * ============================================================================
 * MARQUEE.JSX - Infinite Scrolling Ticker (Light Theme)
 * ============================================================================
 */

export default function Marquee() {
    return (
        <div className="w-full bg-white py-6 overflow-hidden border-y border-gray-100">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-default">
                        <span className="text-gray-400 text-lg font-medium tracking-wide group-hover:text-gray-900 transition-colors">
                            Built with the Best
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors" />
                        <span className="text-gray-400 text-lg font-medium tracking-wide group-hover:text-gray-900 transition-colors">
                            Launch Faster
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-red-500 transition-colors" />
                    </div>
                ))}
            </div>
        </div>
    );
}
