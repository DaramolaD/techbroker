import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { industries } from "@/lib/data";

export default function Industries() {
    return (
        <section id="industries" className="py-24 bg-white relative">
            {/* Background Decoration */}
            <div className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-gray-50 rounded-tr-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Sectors</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Transforming High-Growth <br /><span className="text-primary">Industries</span>
                        </h2>
                    </div>
                    <p className="text-lg text-gray-500 max-w-md">
                        We bring deep sector expertise to solve specific challenges, ensuring our technology fits your unique context.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <Link
                            href="/industries"
                            key={index}
                            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer block"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${industry.image}')` }}
                            ></div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4">
                                        <industry.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {industry.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto overflow-hidden">
                                        {industry.description}
                                    </p>
                                    <div className="flex items-center text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
