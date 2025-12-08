import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">See what our partners say about their transformation journey with Tech Brokers.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "Tech Brokers didn't just upgrade our systems; they completely reimagined our digital customer experience. The results were immediate.",
                            author: "Sarah J.",
                            role: "CTO, FutureBank",
                            bg: "bg-white"
                        },
                        {
                            quote: "Their strategic approach to regulatory compliance and digital identity is unmatched in the region. A true partner in every sense.",
                            author: "Michael O.",
                            role: "Director, GovTech Initiative",
                            bg: "bg-white"
                        },
                        {
                            quote: "We scaled from a local startup to a pan-African player in 18 months. Tech Brokers' infrastructure strategy was the backbone of that growth.",
                            author: "David K.",
                            role: "Founder, AgriConnect",
                            bg: "bg-white"
                        }
                    ].map((item, i) => (
                        <div key={i} className={`p-8 rounded-2xl ${item.bg} shadow-sm border border-gray-100 relative hover:shadow-md transition-shadow`}>
                            <Quote className="text-primary/20 w-10 h-10 absolute top-6 right-6" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, starI) => (
                                    <Star key={starI} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 leading-relaxed">"{item.quote}"</p>
                            <div>
                                <div className="font-bold text-gray-900">{item.author}</div>
                                <div className="text-sm text-primary font-medium">{item.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
