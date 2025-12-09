import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                    Ready to build something <br />
                    <span className="text-secondary">exceptional?</span>
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Whether you need to modernize legacy systems, launch a new digital product, or secure your infrastructure, we are ready to execute.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
                    >
                        Schedule a Consultation
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                    <Link
                        href="#work"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                        View Our Work
                    </Link>
                </div>
            </div>
        </section>
    );
}
