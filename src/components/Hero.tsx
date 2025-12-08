import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Image Placeholder - to be replaced with real image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/hero_background.png')", // Expecting the artifact to be moved here
                    backgroundBlendMode: "overlay"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
                <div className="max-w-6xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm mb-6 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Strategy. Speed. Scale.
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                        Empowering Businesses & Governments to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Build and Scale Digitally</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
                        We are your strategy to execution partner for digital transformation. From intelligent automation to process engineering, we help you win.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-full transition-all shadow-lg shadow-primary/25 hover:scale-105"
                        >
                            Let's Talk
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="#services"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm rounded-full transition-all hover:scale-105"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
