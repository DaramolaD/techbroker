import { Zap, Shield, Map, LayoutTemplate } from "lucide-react";

const reasons = [
    {
        title: "African Market Mastery",
        description: "We navigate the unique regulatory, cultural, and infrastructural landscapes of the African continent with ease.",
        icon: Map
    },
    {
        title: "Rapid Deployment",
        description: "Our 'Foundation First' approach allows us to launch MVPs 40% faster than traditional consultancies.",
        icon: Zap
    },
    {
        title: "Enterprise Security",
        description: "We build with banking-grade security protocols from day one, ensuring data sovereignty and compliance.",
        icon: Shield
    },
    {
        title: "Battle-Tested Frameworks",
        description: "We don't reinvent the wheel. We deploy proven architectural patterns that scale effortlessly.",
        icon: LayoutTemplate
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Why Global Leaders <br />
                            <span className="text-primary">Choose TechBrokers.</span>
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            In a market defined by complexity, we offer clarity. We bridge the gap between ambitious vision and technical reality.
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <p className="text-4xl font-bold text-white">98%</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Retention</p>
                            </div>
                            <div className="w-px bg-white/20 h-12"></div>
                            <div className="text-center">
                                <p className="text-4xl font-bold text-white">$50M+</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Value Created</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                <reason.icon className="w-8 h-8 text-primary mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
