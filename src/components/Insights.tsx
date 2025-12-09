import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const articles = [
    {
        title: "The Paperless Government: A Blueprint for 2026",
        excerpt: "How emerging markets are bypassing legacy infrastructure to build fully digital public services.",
        category: "Government",
        date: "Oct 24, 2025",
        author: "Daramola A.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Security in the Age of Open Banking",
        excerpt: "As APIs connect more financial institutions, the attack surface grows. Here is how we secure it.",
        category: "Fintech",
        date: "Nov 02, 2025",
        author: "TechBrokers Team",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Scaling Beyond the MVP",
        excerpt: "Why 70% of startups fail to scale their technology stack after the seed round, and how to fix it.",
        category: "Startups",
        date: "Nov 15, 2025",
        author: "Sarah J.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
];

export default function Insights() {
    return (
        <section id="insights" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Thought Leadership</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Latest Insights
                        </h2>
                    </div>
                    <Link href="#" className="hidden md:inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                        View all articles <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <article key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase tracking-wider">
                                    {article.category}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {article.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {article.author}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    <Link href="#">{article.title}</Link>
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                    {article.excerpt}
                                </p>
                                <Link href="#" className="inline-flex items-center text-sm font-semibold text-secondary group-hover:text-primary transition-colors">
                                    Read article <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="#" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                        View all articles <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
