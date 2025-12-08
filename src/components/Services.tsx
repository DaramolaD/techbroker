import {
    Target,
    Cpu,
    Lightbulb,
    Rocket,
    BarChart,
    Heart
} from "lucide-react";

const services = [
    {
        title: "Digital Banking Strategy & Transformation",
        description: "Neo bank & challenger bank setup, Core banking replacement, Onboarding & ERP support, Super app design & agency banking.",
        icon: Target,
    },
    {
        title: "Technology Consulting & System Integration",
        description: "Legacy to cloud migration, AI, RPA & Intelligent Automation, Biometric & ID document intelligence, Custom solutions.",
        icon: Cpu,
    },
    {
        title: "Product Innovation",
        description: "Product Strategy & Roadmap, User Experience Design, Market Testing & Validation, MVP Development.",
        icon: Lightbulb,
    },
    {
        title: "Go to Market",
        description: "Market expansion strategy, Market Research, Partnership strategy, Growth acceleration & Marketing.",
        icon: Rocket,
    },
    {
        title: "Operational Cost Systems Recovery",
        description: "Cost program & basic credit inspect, CIT payment systems, Gateway integration (Visa, NIBSS, etc), Revenue Collection & Disbursement.",
        icon: BarChart,
    },
    {
        title: "Social Impact",
        description: "EdTech, AgriTech, TransportTech, Renewable Energy solutions.",
        icon: Heart,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-red-50 rounded-full">
                        Services
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                        How We Help You Win
                    </h2>
                    <p className="text-lg text-gray-600">
                        From intelligent automation to process engineering, we provide end-to-end solutions to power your transformation journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
