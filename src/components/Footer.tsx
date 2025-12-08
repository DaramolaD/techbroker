import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <span className="bg-primary text-white p-1 rounded font-bold text-xl">TB</span>
                            <span className="font-bold text-xl tracking-tight text-white">Tech Brokers</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Your strategic partner for digital transformation, helping businesses and governments innovative and scale.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Digital Strategy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">System Integration</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Product Innovation</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Go To Market</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#about" className="text-gray-400 hover:text-primary transition-colors">Who We Are</Link></li>
                            <li><Link href="#insights" className="text-gray-400 hover:text-primary transition-colors">Insights</Link></li>
                            <li><Link href="#careers" className="text-gray-400 hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact CTA */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
                        <p className="text-gray-400 mb-4">Subscribe to our insights newsletter.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full"
                            />
                            <button type="submit" className="bg-primary hover:bg-primary-dark p-2 rounded-lg transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Tech Brokers Ltd. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
