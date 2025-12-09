"use client";

import { industries } from "@/lib/data";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 inline-block backdrop-blur-md border border-white/20">
                        Our Expertise
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Transforming Critical <br /> <span className="text-primary">Industries</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        We bring deep sector expertise to solve complex challenges in Finance, Government, Logistics, and beyond.
                    </p>
                </div>
            </section>

            {/* Detailed Industries Sections */}
            <div className="flex flex-col">
                {industries.map((industry, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <section
                            key={industry.id}
                            id={industry.id}
                            className={`py-24 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                                    {/* Text Content */}
                                    <div className="flex-1">
                                        <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary mb-6">
                                            <industry.icon size={32} />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                            {industry.name}
                                        </h2>
                                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                            {industry.longDescription}
                                        </p>

                                        <ul className="space-y-4 mb-8">
                                            {industry.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                                    <span className="text-gray-700 font-medium">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center text-secondary font-bold hover:text-primary transition-colors"
                                        >
                                            Discuss your {industry.name} project <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </div>

                                    {/* Image */}
                                    <div className="flex-1 w-full">
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                style={{ backgroundImage: `url('${industry.image}')` }}
                                            ></div>
                                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>

                                            {/* Floating Badge (Decorative) */}
                                            <div className={`absolute ${isEven ? 'bottom-8 left-8' : 'bottom-8 right-8'} bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-white/20 max-w-[200px] hidden md:block animate-float`}>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Impact</p>
                                                <p className="text-secondary font-bold text-sm">Transforming the future of {industry.name}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* CTA Section */}
            <section className="py-20 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to innovate in your sector?</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Connect with our industry experts to discuss how we can tailor our solutions to your specific needs.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30">
                        Talk to an Expert
                    </a>
                </div>
            </section>
        </main>
    );
}
