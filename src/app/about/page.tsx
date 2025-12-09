import Leadership from "@/components/Leadership";
import CTA from "@/components/CTA";
import { Lightbulb, Shield, Heart, Target, Eye, Flag, ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-20 overflow-hidden bg-secondary">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold font-bold tracking-wider uppercase mb-6 inline-block backdrop-blur-md border border-white/20 animate-fade-in">About Tech Brokers</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                            We Are The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Execution Partner</span> <br />
                            For Africa's Digital Future.
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                            Strategies fail without execution. We exist to bridge that gap, turning ambitious digital roadmaps into functional and scalable realities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Narrative Story Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                                    alt="Strategic meeting"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-gray-100 rounded-3xl -z-0"></div>
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Why We Are Your Go To <br />
                                <span className="text-secondary">Partner.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    In a landscape saturated with advice, <strong>Tech Brokers</strong> stands apart as the partner for action. We realized that many organizations from government agencies to private businesses struggle not with <strong>ideas</strong>, but with the <strong>execution</strong> of those ideas.
                                </p>
                                <p>
                                    We don't just hand over a PDF strategy document and wish you luck. We stay to design the user journeys, build the product and the infrastructure.
                                </p>
                                <p className="font-semibold text-secondary">
                                    We are architects, builders, and operators rolled into one.
                                </p>
                            </div>
                            <div className="mt-8">
                                <div className="flex items-center gap-4 text-sm font-bold text-gray-900">
                                    <div className="flex -space-x-4">
                                        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=64" alt="User" />
                                        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=64" alt="User" />
                                        <img className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=64" alt="User" />
                                    </div>
                                    <span>Trusted by 20+ Enterprises</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section (Inspired Layout) */}
            <section className="py-32 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">North Star</span>
                        <h2 className="text-4xl font-bold text-gray-900">Our Mission & Vision</h2>
                    </div>

                    <div className="relative max-w-5xl mx-auto min-h-[600px] md:min-h-[500px]">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[50%] left-[20%] right-[20%] h-0.5 bg-gray-200 -z-10 border-t-2 border-dashed border-gray-300"></div>

                        {/* Vision Card */}
                        <div className="md:absolute md:top-0 md:left-0 w-full md:w-[500px] bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 mb-8 md:mb-0 hover:-translate-y-2 group">
                            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To be the most trusted catalyst for digital innovation, driving exceptional business growth and lasting value.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="md:absolute md:bottom-0 md:right-0 w-full md:w-[500px] bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Flag size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To empower diverse industries and organizations by delivering specialized, expertly-executed digital solutions that unlock maximum value and drive immediate efficiency, utilizing best-in-class technology and proven expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section (Inspired Layout) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Culture</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            These principles guide everything we do, from client relationships to innovation strategies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                                <Lightbulb size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Innovation First</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                We push boundaries and embrace cutting-edge technologies to solve complex challenges.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group text-center">
                            <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                                <Shield size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Trust & Integrity</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Building lasting relationships through transparency, reliability, and ethical practices.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group text-center">
                            <div className="w-16 h-16 mx-auto bg-pink-50 rounded-full flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Excellence</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Celebrating and amplifying talent, innovation, and potential in everything we deliver.
                            </p>
                        </div>

                        {/* Value 4 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group text-center">
                            <div className="w-16 h-16 mx-auto bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                                <Target size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Results-Driven</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                We don't just advise — we deliver measurable, transformative outcomes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Leadership /> */}

            <CTA />
        </main>
    );
}
