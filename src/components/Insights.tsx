"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { insightsData as insights, categories } from "@/lib/insights-data";
import { useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility, if not use standard string concat

interface InsightsProps {
    showFilter?: boolean;
    limit?: number;
}

export default function Insights({ showFilter = false, limit }: InsightsProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter insights based on active category
    const filteredInsights = insights.filter(insight => {
        if (activeCategory === "All") return true;
        return insight.category === activeCategory;
    });

    // Apply limit if specified (and if filter is not active or if we want to limit filtered results?)
    // Usually on home page we limit to 3. On insights page we show all.
    // If showFilter is on, we probably want to show all matching.
    const displayInsights = limit ? filteredInsights.slice(0, limit) : filteredInsights;

    return (
        <section id="insights" className={showFilter ? "py-12" : "py-24 bg-gray-50"}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header - Only different if not showing filter? Or keep consistent? */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Thought Leadership</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            {showFilter ? "Explore Our Insights" : "Latest Insights"}
                        </h2>
                    </div>

                    {!showFilter && (
                        <Link href="/insights" className="hidden md:inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                            View all articles <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    )}
                </div>

                {/* Filter Tabs */}
                {showFilter && (
                    <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === category
                                        ? "bg-primary text-white shadow-lg shadow-primary/25"
                                        : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                {/* Grid */}
                {displayInsights.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayInsights.map((article, index) => (
                            <Link
                                href={`/insights/${article.id}`}
                                key={index}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary uppercase">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-primary" />
                                            {article.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3 text-primary" />
                                            {article.readTime || "5 min read"}
                                            {/* Fallback if readTime not in legacy data types, but updated interface has it */}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <div className="inline-flex items-center text-sm font-semibold text-secondary group-hover:text-primary transition-colors mt-auto">
                                        Read article <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-500 text-lg">No insights found for this category.</p>
                        <button
                            onClick={() => setActiveCategory("All")}
                            className="mt-4 text-primary font-bold hover:underline"
                        >
                            View all articles
                        </button>
                    </div>
                )}

                {!showFilter && (
                    <div className="mt-12 text-center md:hidden">
                        <Link href="/insights" className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors">
                            View all articles <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
