import { Quote } from "lucide-react";

export default function Leadership() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">

                    {/* Decorative Quote Icon behind */}
                    <Quote className="absolute top-8 left-8 text-secondary/5 w-32 h-32 rotate-180" />

                    <div className="relative z-10 grid md:grid-cols-[1fr_2fr] gap-12 items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                                {/* Placeholder for founder image */}
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-secondary mb-6 leading-relaxed">
                                "Technology is not just about code. It’s about creating systems that allow businesses and nations to thrive. At TechBrokers, we are obsessed with the ‘how’—the execution gap that separates success from failure."
                            </h2>
                            <div>
                                <h3 className="text-lg font-bold text-primary">Daramola Dan</h3>
                                <p className="text-gray-500 text-sm">Founder & Principal Consultant</p>
                            </div>

                            <div className="mt-8 flex gap-4 flex-wrap">
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600">ex-Goldman Sachs</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600">Fintech Veteran</span>
                                <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600">Solutions Architect</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
