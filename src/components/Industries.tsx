import { Building2, Landmark, Plane, Laptop2, ShoppingBag, Stethoscope } from "lucide-react";

const industries = [
    {
        name: "Financial Services",
        icon: Landmark,
        description: "Digital banking, fintech integration, and fraud prevention systems."
    },
    {
        name: "Government & Public Sector",
        icon: Building2,
        description: "E-governance platforms, automated revenue collection, and citizen services."
    },
    {
        name: "Logistics & Supply Chain",
        icon: Plane,
        description: "Real-time tracking, fleet management, and automated dispatch systems."
    },
    {
        name: "Startups & Tech",
        icon: Laptop2,
        description: "MVP development, scaling architecture, and go-to-market technology."
    },
    {
        name: "Retail & E-commerce",
        icon: ShoppingBag,
        description: "Omnichannel retail solutions, inventory management, and payment gateways."
    },
    {
        name: "Healthcare",
        icon: Stethoscope,
        description: "Telemedicine platforms, patient record digitization, and hospital management."
    }
];

export default function Industries() {
    return (
        <section id="industries" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Industries We Serve
                    </h2>
                    <p className="text-xl text-gray-500 font-light">
                        We bring deep sector expertise to solve specific challenges in high-growth industries.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
                    {industries.map((industry, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                            <div className="mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-primary/10 transition-colors duration-300">
                                <industry.icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
