"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        {/* Logo Placeholder - Text based for now */}
                        <Link href="/" className="flex items-center gap-2">
                            <span className="bg-primary text-white p-1 rounded font-bold text-xl">TB</span>
                            <span className="font-bold text-xl tracking-tight text-secondary">Tech Brokers</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-primary font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/20"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
