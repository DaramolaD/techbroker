import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-12 md:p-16 flex flex-col justify-center relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Let's Build Something Exceptional Together
                            </h2>
                            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                                Whether you're a fintech founder, a public sector innovator, or a bank CEO—we're ready to deliver results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-primary hover:bg-primary-dark rounded-full transition-all"
                                >
                                    Book a Call
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                                <Link
                                    href="#services"
                                    className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border border-gray-600 hover:bg-gray-800 rounded-full transition-all"
                                >
                                    See Our Strategy
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-64 lg:h-auto">
                            {/* CTA Image Placeholder */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/cta_collab.png')" }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent lg:bg-gradient-to-t lg:from-gray-900 lg:to-transparent opacity-80 lg:opacity-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
