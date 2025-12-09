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
                            <span className="text-secondary">We Are Builders.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed mix-blend-multiply">
                            <p>
                                Tech Brokers Ltd is a premier digital transformation and technology consultancy. We don’t just offer advice; we help businesses, governments, and startups navigate the complexities of the digital age with confidence.
                            </p>
                            <p>
                                From launching next-gen digital banks in Lagos to modernizing government workflows in Abuja, our mission is simple: <strong>Innovate boldly, execute flawlessly.</strong>
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link href="#contact" className="group inline-flex items-center font-semibold text-secondary hover:text-primary transition-colors">
                                Learn more about our mission
                                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Top Services Highlight */}
                    <div className="relative">
                        {/* Abstract Background Element for List */}
                        <div className="absolute -inset-4 bg-gray-50 rounded-3xl transform rotate-2 z-0"></div>

                        <div className="relative z-10 px-6 py-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Core Capabilities</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                        <Target className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Digital Strategy & Transformation</h4>
                                        <p className="text-sm text-gray-500 mt-1">Systems migration, cloud adoption, and process auditing.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                                        <Lightbulb className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Product Innovation</h4>
                                        <p className="text-sm text-gray-500 mt-1">MVP development, user experience design, and market validation.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Go-To-Market Execution</h4>
                                        <p className="text-sm text-gray-500 mt-1">Launch strategies, partnership development, and growth scaling.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
