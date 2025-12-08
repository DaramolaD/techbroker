import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
    {
        title: "The Future of Digital Banking in Africa: 2024 Trends",
        category: "Digital Banking",
        date: "March 15, 2024",
        summary: "From direct connectivity to the consumer wallet, discover how regulatory changes are reshaping the landscape.",
    },
    {
        title: "Government Innovation: Digital Transformation Success Stories",
        category: "Public Sector",
        date: "March 10, 2024",
        summary: "How modern e-governance platforms are successfully implementing digital transformation initiatives.",
    },
    {
        title: "AgriTech: Opportunities and Challenges in Africa",
        category: "Technology",
        date: "March 05, 2024",
        summary: "Exploring how technology is solving food security issues across the African continent.",
    },
];

export default function Insights() {
    return (
        <section id="insights" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-primary uppercase bg-red-50 rounded-full">
                        Latest Insights
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Thought Leadership
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest trends, strategies, and thought leadership in digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="h-48 overflow-hidden relative">
                                {/* Blog Thumb Placeholder */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80')" }}
                                ></div>
                                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {post.summary}
                                </p>
                                <Link href="#" className="inline-flex items-center text-primary font-semibold hover:text-primary-dark">
                                    Read More <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-gray-900 hover:bg-black rounded-full transition-all"
                    >
                        View All Insights
                    </Link>
                </div>
            </div>
        </section>
    );
}
