import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center bg-secondary overflow-hidden pt-20">
            {/* Abstract Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,85,51,0.15),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(7,21,58,0.8),transparent_50%)]"></div>
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(#D1D1D1 1px, transparent 1px), linear-gradient(90deg, #D1D1D1 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto text-center">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm mb-8 backdrop-blur-sm animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Defining the Future of African Enterprise
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-8 tracking-tight">
                        Strategy That Powers <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                            Digital Transformation
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                        We partner with ambitious governments and enterprises to build, secure, and scale world-class technology solutions that deliver real economic impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:-translate-y-1"
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm hover:-translate-y-1"
                        >
                            Explore Expertise
                        </Link>
                    </div>

                    {/* Trust Signals */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-white/10">
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2 text-white font-semibold text-lg mb-1">
                                <Globe className="w-5 h-5 text-primary" />
                                <span>Pan-African Reach</span>
                            </div>
                            <p className="text-gray-400 text-sm">Operating across key markets</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2 text-white font-semibold text-lg mb-1">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span>Enterprise Grade</span>
                            </div>
                            <p className="text-gray-400 text-sm">Security & Scalability First</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2 text-white font-semibold text-lg mb-1">
                                <span className="text-primary text-xl font-bold">10+</span>
                                <span>Years Experience</span>
                            </div>
                            <p className="text-gray-400 text-sm">Combined Leadership Expertise</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
