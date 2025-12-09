"use client";

import Services from "@/components/Services";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 inline-block backdrop-blur-md border border-white/20">
                        Our Capabilities
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Comprehensive <br /> <span className="text-primary">Digital Solutions</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        End-to-end technology services designed to help you innovate, scale, and stay ahead of the competition.
                    </p>
                </div>
            </section>

            {/* Services Content */}
            <Services />

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Unsure which service fits your needs?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Schedule a free consultation with our solutions architect to operationalize your vision.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30">
                        Schedule Consultation
                    </a>
                </div>
            </section>
        </main>
    );
}
