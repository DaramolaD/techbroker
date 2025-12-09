import {
    Target,
    Cpu,
    Lightbulb,
    Rocket,
    BarChart,
    Heart,
    ArrowUpRight
} from "lucide-react";

const services = [
    {
        title: "Digital Banking Strategy & Transformation",
        description: "Building the next generation of African financial institutions. From neo-bank setup to core banking replacement.",
        icon: Target,
        className: "md:col-span-2 md:row-span-2",
        bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        dark: true
    },
    {
        title: "Technology Consulting",
        description: "Cloud migration, AI integration, and robust system architecture.",
        icon: Cpu,
        className: "md:col-span-1 md:row-span-1 bg-secondary text-white",
        dark: true
    },
    {
        title: "Product Innovation",
        description: "MVP development and user-centric design that dominates markets.",
        icon: Lightbulb,
        className: "md:col-span-1 md:row-span-1 bg-gray-50 text-gray-900 border border-gray-100",
        dark: false
    },
    {
        title: "Go to Market",
        description: "Expansion strategies that scale startups into unicorns.",
        icon: Rocket,
        className: "md:col-span-2 md:row-span-1",
        bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        dark: true
    },
    {
        title: "Cost Systems Recovery",
        description: "Revenue collection and automated disbursement systems.",
        icon: BarChart,
        className: "md:col-span-2 md:row-span-1",
        bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
        dark: true
    },
    {
        title: "Social Impact",
        description: "Tech for good: EdTech, AgriTech, and Renewable Energy.",
        icon: Heart,
        className: "md:col-span-2 md:row-span-1 bg-gray-900 text-white",
        bgImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        dark: true
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Comprehensive <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Digital Solutions.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-3xl overflow-hidden p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${service.className}`}
                        >
                            {/* Background Image if available */}
                            {service.bgImage && (
                                <>
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${service.bgImage}')` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                </>
                            )}

                            {/* Content */}
                            <div className="relative h-full flex flex-col justify-between z-10 hidden-scrollbar">
                                <div className="flex justify-between items-start">
                                    <div className={`p-3 rounded-xl backdrop-blur-md shadow-lg ${service.bgImage ? 'bg-white/10 text-white' : (service.dark ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary')}`}>
                                        <service.icon size={28} />
                                    </div>
                                    <ArrowUpRight className={`w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${service.dark || service.bgImage ? 'text-white/70' : 'text-gray-400'}`} />
                                </div>

                                <div className="mt-4">
                                    <h3 className={`text-2xl font-bold mb-3 ${service.dark || service.bgImage ? 'text-white' : 'text-gray-900'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed ${service.dark || service.bgImage ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
