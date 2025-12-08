import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-red-50 rounded-full">
                            Who We Are
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Your Execution Partner
                        </h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Tech Brokers Ltd is a digital transformation and technology consulting firm based in Lagos, Nigeria, helping businesses, heavy industries, universities, startups, and governments innovate boldly and execute flawlessly.
                            </p>
                            <p>
                                Led by industry veterans, we specialize in launching digital banks, modernizing government services, and automating fast-paced global supply chains across all sectors of the economy.
                            </p>
                            <p className="font-medium text-gray-900 border-l-4 border-primary pl-4 italic">
                                We don't just advise—we build, scale, and deliver reports where it counts.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder for generated image */}
                            <img
                                src="/about_team.png"
                                alt="Tech Brokers Team"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
