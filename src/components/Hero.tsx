import Link from "next/link";
import { ArrowRight, Globe, Play, ShieldCheck } from "lucide-react";
import Stats from "./Stats";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden py-20 pb-26">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Placeholder for corporate meeting/handshake image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-16 lg:pt-20 lg:pb-0">
                <div className="max-w-4xl mx-auto text-center lg:text-left lg:mx-0 lg:max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8">
                        Strategy That <br className="hidden sm:block" />
                        Powers Your Next <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Level of Growth</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                        We partner with ambitious leaders to build and scale digital solutions that transform industries.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 sm:mb-0 z-10">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25"
                        >
                            Get Started
                        </Link>
                        {/* <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                            <Play className="w-5 h-5 mr-2 fill-current" />
                            Watch Video
                        </button> */}
                    </div>
                </div>
                {/* <Stats /> */}

            </div>

            {/* Bottom Fade - extended height for better blend */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-secondary via-secondary/50 to-transparent z-10 pointer-events-none"></div>
        </section>
    );
}
