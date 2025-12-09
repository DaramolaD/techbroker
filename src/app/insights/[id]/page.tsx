import { insightsData as insights } from "@/lib/insights-data";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all known insights
export async function generateStaticParams() {
    return insights.map((insight) => ({
        id: insight.id,
    }));
}

export default async function InsightPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Find the insight data
    const insight = insights.find((item) => item.id === id);

    if (!insight) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden bg-secondary">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid gap-1 mb-8">
                        <Link href="/insights" className="inline-flex items-center text-sm font-semibold text-white/60 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                        </Link>

                        <span className="w-fit inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 backdrop-blur-md border border-white/20">
                            {insight.category}
                        </span>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            {insight.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {insight.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {insight.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                5 min read
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section with Overlapping Image */}
            <section className="relative -mt-24 pb-24 z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Cover Image */}
                    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl mb-12 border-4 border-white">
                        <img
                            src={insight.image}
                            alt={insight.title}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Article Content */}
                    <article
                        className="article-content bg-white p-8 md:p-12 rounded-2xl shadow-sm"
                        dangerouslySetInnerHTML={{ __html: insight.content || "" }}
                    />
                </div>
            </section>

            {/* Read Next Section */}
            <section className="bg-gray-50 py-24 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Read Next</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {insights
                            .filter(i => i.id !== insight.id)
                            .slice(0, 3)
                            .map((item, index) => (
                                <Link href={`/insights/${item.id}`} key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block border border-gray-100">
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase">
                                            {item.category}
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2 text-lg">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed mb-6">{item.excerpt}</p>
                                        <span className="text-primary font-bold text-sm inline-flex items-center">
                                            Read article <ArrowLeft className="ml-2 w-4 h-4 rotate-180" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
