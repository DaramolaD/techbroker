import Leadership from "@/components/Leadership";
import CTA from "@/components/CTA";
import { Lightbulb, Shield, Heart, Target, Eye, Flag, ArrowRight, Award, Compass, Users, Zap } from "lucide-react";

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

            {/* Our Story - Main Container with Alternating Sections */}
            <section className="bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Section 1: Who We Are - Image Left, Content Right */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-24 border-b border-gray-100">
                        {/* Image Side */}
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                    alt="Tech Brokers Team Collaboration"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -z-10"></div>
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Foundation</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Who We Are
                            </h2>
                            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Tech Brokers operates in the technology sector as a catalyst for digital transformation and innovation. We partner with businesses, industries, and government entities to help them navigate the complexities of technology adoption and digital integration.
                                </p>
                                <p>
                                    Our purpose is to bridge the digital divide, simplifying complex technological landscapes and turning innovation into measurable impact. We provide solutions that streamline processes, foster agility, and drive efficiency, enabling our clients to stay competitive in an increasingly digital-first world.
                                </p>
                                <p>
                                    At Tech Brokers, we believe transformation goes beyond technology. It&apos;s about empowering organizations to evolve with confidence, unlock new possibilities, and achieve sustainable progress. Our legacy is defined not only by financial results but by the lasting value and growth we help create.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Purpose and Direction - Content Left, Image Right */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-24">
                        {/* Content Side */}
                        <div>
                            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Our Drive</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Purpose and Direction
                            </h2>
                            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    At Tech Brokers, we exist to ignite digital progress and transform ambition into tangible results. We guide organizations through the complexities of technology, turning innovation into actionable solutions that drive efficiency, growth, and lasting impact.
                                </p>
                                <p>
                                    Our focus is on empowering diverse industries with expertise, precision, and best-in-class technology, ensuring every strategy we deliver creates measurable value and positions our clients to thrive in a rapidly evolving digital landscape.
                                </p>
                                <p>
                                    We are the partner that simplifies complexity, translating emerging technologies into practical, scalable solutions. By anticipating challenges and uncovering opportunities, we enable organizations to move confidently into the future. Our work is grounded in trust, insight, and accountability, ensuring that every collaboration strengthens performance and fosters meaningful growth. At Tech Brokers, we don&apos;t just implement technology, we shape transformation, creating impact that lasts well beyond immediate results.
                                </p>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="relative">
                            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-secondary via-primary to-secondary p-1">
                                <div className="w-full h-full bg-white rounded-[22px] p-10 flex flex-col justify-center">
                                    <div className="space-y-8">
                                        {/* Icon Feature 1 */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                <Target size={28} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-2 text-lg">Strategic Focus</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">Delivering measurable value through expert execution</p>
                                            </div>
                                        </div>
                                        {/* Icon Feature 2 */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                                                <Lightbulb size={28} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-2 text-lg">Innovation First</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">Turning complex challenges into practical solutions</p>
                                            </div>
                                        </div>
                                        {/* Icon Feature 3 */}
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                <Zap size={28} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 mb-2 text-lg">Rapid Impact</h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">Agile execution that drives immediate results</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-32 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">North Star</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Vision and Mission</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Tech Brokers, our mission and vision define who we are and the future we strive to create. They capture our belief that technology, when applied with insight and integrity, has the power to transform businesses and shape a smarter, more connected world.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto min-h-[600px] md:min-h-[500px]">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[50%] left-[20%] right-[20%] h-0.5 bg-gray-200 -z-10 border-t-2 border-dashed border-gray-300"></div>

                        {/* Vision Card */}
                        <div className="md:absolute md:top-0 md:left-0 w-full md:w-[500px] bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 mb-8 md:mb-0 hover:-translate-y-2 group">
                            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-4">Vision</h3>
                            <p className="text-gray-900 font-semibold leading-relaxed text-lg mb-4">
                                To be the most trusted catalyst for digital innovation, driving exceptional business growth and lasting value.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base">
                                Our vision is to actively spark and accelerate our clients&apos; digital progress, positioning Tech Brokers as the indispensable, trustworthy expert that translates innovation directly into superior business performance and sustained success.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="md:absolute md:bottom-0 md:right-0 w-full md:w-[500px] bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Flag size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mb-4">Mission</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To empower diverse industries and organizations by delivering specialized, expertly-executed digital solutions that unlock maximum value and drive immediate efficiency, utilizing best-in-class technology and proven expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Our Principles</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Values</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                            At Tech Brokers, our core values guide everything we do. They shape our culture, influence our decisions, and ensure that every action drives meaningful digital transformation. By living these values, we build trust, deliver impact, and empower progress through technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Value 1 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                                <Award size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence and Execution</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Delivering superior results through skilled execution and a forward-thinking approach.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Compass size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Leadership and Foresight</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Leading the way in digital transformation with a proactive, ethical, and growth-oriented approach.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                                <Users size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation and Customer Focus</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Fostering a culture of continuous innovation and unwavering dedication to client success and satisfaction.
                            </p>
                        </div>

                        {/* Value 4 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group md:col-start-1 lg:col-start-auto">
                            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Agility and Value</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Delivering competitive, adaptable solutions that provide tangible value to clients.
                            </p>
                        </div>

                        {/* Value 5 */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
                            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <Shield size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Trust and Integrity</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Building lasting relationships based on honesty, reliability, and a commitment to client success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We Are Your Go To Partner Section */}
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
                                    We don&apos;t just hand over a PDF strategy document and wish you luck. We stay to design the user journeys, build the product and the infrastructure.
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

            {/* <Leadership /> */}

            <CTA />
        </main>
    );
}
