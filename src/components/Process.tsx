import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Assessment",
            description: "Deep-dive analysis of current systems, processes, and market positioning."
        },
        {
            number: "02",
            title: "Strategy",
            description: "Crafting a bespoke technology roadmap aligned with business goals."
        },
        {
            number: "03",
            title: "Execution",
            description: "Agile development and integration with minimal operational disruption."
        },
        {
            number: "04",
            title: "Optimization",
            description: "Continuous performance monitoring and data-driven refinement."
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The TechBrokers Blueprint</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        A Proven Framework for <br />
                        <span className="text-primary">Reliable Success.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-light">
                        We don't guess. We follow a rigorous, data-backed methodology to ensure every project delivers tangible ROI.
                    </p>
                </div>

                {/* Desktop Diagrammatic View */}
                <div className="hidden lg:flex justify-between items-start relative">
                    {/* Connecting Line */}
                    <div className="absolute top-8 left-0 w-full h-1 bg-gray-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center w-64 group">
                            <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-100 text-gray-900 font-bold text-xl flex items-center justify-center mb-6 group-hover:border-primary group-hover:text-primary transition-all duration-300 z-10 shadow-sm">
                                {step.number}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed px-4">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Stacked View */}
                <div className="lg:hidden space-y-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-6 items-start">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-50 border border-gray-100 text-primary font-bold flex items-center justify-center">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full border border-gray-100 text-gray-600 text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Agile Methodology</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>ISO Standard Compliant</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        <span>Data-Driven</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
