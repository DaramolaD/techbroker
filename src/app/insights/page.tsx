"use client";

import Insights from "@/components/Insights";

export default function InsightsPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute top-20 left-10 w-[200px] h-[200px] bg-amber-500/10 rounded-full blur-2xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 inline-block backdrop-blur-md border border-white/20">
                        Knowledge Hub
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Insights & <br /> <span className="text-primary">Thought Leadership</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Stay ahead of the curve with our latest articles on technology, digital transformation, and industry trends.
                    </p>
                </div>
            </section>

            {/* Insights Content */}
            <Insights showFilter={true} />

            {/* Newsletter CTA Section */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Subscribe to our Newsletter</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Get the latest insights delivering directly to your inbox. No spam, just valuable content.
                    </p>
                    <form className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <button type="submit" className="px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition-all shadow-lg">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
