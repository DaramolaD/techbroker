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
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 skew-x-12 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Comprehensive <br />Digital Solutions.
                    </h2>
                    <p className="text-xl text-gray-500 font-light">
                        We leverage cutting-edge technology to drive efficiency and growth for your organization.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
