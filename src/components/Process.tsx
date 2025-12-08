import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Assessment",
            description: "We deep-dive into your current systems, processes, and market position to identify gaps and high-leverage opportunities."
        },
        {
            number: "02",
            title: "Strategy",
            description: "We craft a bespoke roadmap tailored to your goals, selecting the right technology stack and operational frameworks."
        },
        {
            number: "03",
            title: "Execution",
            description: "Our expert teams build, integrate, and deploy your solution with precision, ensuring minimal downtime and maximum impact."
        },
        {
            number: "04",
            title: "Optimization",
            description: "Post-launch, we continuously refine performance, using data-driven insights to scale growth and efficiency."
        }
    ];

    return (
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-white uppercase bg-white/10 rounded-full border border-white/10">
                            Our Process
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            From Concept to <br />
                            <span className="text-primary">Market Dominance.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We don't just write reports. We follow a proven, rigorous framework to deliver tangible results that change the trajectory of your business.
                        </p>

                        <div className="space-y-4">
                            {["Industry-Standard Best Practices", "Agile & Adaptive Methodology", "Data-Backed Decision Making"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary h-5 w-5" />
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800"></div>
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="relative flex gap-8 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-700 group-hover:border-primary group-hover:bg-primary transition-all duration-300 z-10 flex items-center justify-center text-xs font-bold">
                                        {index + 1}
                                    </div>
                                    <div className="-mt-1">
                                        <div className="text-sm font-mono text-primary mb-1">{step.number}</div>
                                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
