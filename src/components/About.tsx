import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Rocket } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left: Narrative */}
                    <div>
                        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/5 rounded-full border border-primary/10">
                            Who We Are
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            More Than Consultants. <br />
                            <span className="text-secondary">We Are Your Execution Partner.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed mix-blend-multiply">
                            <p>
                                Tech Brokers Ltd is a leading digital transformation and technology firm. We don&apos;t just offer advice; we help businesses, governments, and startups navigate the complexities of the digital age with confidence.
                            </p>
                            <p>
                                From launching first Pan-Nigeria credential verification platform <a href="https://www.centralverification.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors underline">&#40;CVP&#41;</a> to digital transformation projects for banks, and tertiary institutions, we are committed to making Africa a digital-first Continent. <br /> Our mission is simple: <strong>Innovate boldly, execute flawlessly.</strong>
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link href="/about" className="group inline-flex items-center font-semibold text-secondary hover:text-primary transition-colors">
                                Learn more about our mission
                                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative h-full">
                        <div className="aspect-[4/3] w-full h-full rounded-2xl overflow-hidden shadow-2xl relative z-10">
                            {/* <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="TechBrokers Team Collaboration"
                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                            /> */}
                            <img
                                src="/images/about.png"
                                alt="TechBrokers Team Collaboration"
                                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Badge - Mission (Bottom Left) */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs animate-float">
                                <div className="flex items-center gap-3 mb-2">
                                    {/* <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div> */}
                                    {/* <span className="text-secondary font-bold text-sm uppercase tracking-wider">Mission</span> */}
                                </div>
                                <p className="text-gray-900 font-bold text-lg leading-tight">
                                    Innovate boldly, execute flawlessly.
                                </p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-0"></div>
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
                        <div className="absolute top-1/2 -right-8 w-16 h-16 bg-dots-pattern opacity-20 hidden lg:block"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
