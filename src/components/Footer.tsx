import Link from "next/link";
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="text-2xl font-bold text-white mb-6 block">
                            Tech<span className="text-primary">Brokers</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Premier digital transformation consultancy building the infrastructure for Africa's future economy.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                                <Github size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Key Industries */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Key Industries</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/industries#financial-services" className="hover:text-primary transition-colors">Financial Services</Link></li>
                            <li><Link href="/industries#government" className="hover:text-primary transition-colors">Government</Link></li>
                            <li><Link href="/industries#logistics" className="hover:text-primary transition-colors">Logistics</Link></li>
                            <li><Link href="/industries#startups" className="hover:text-primary transition-colors">Startups & Tech</Link></li>
                            <li><Link href="/industries#healthcare" className="hover:text-primary transition-colors">Healthcare</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/industries" className="hover:text-primary transition-colors">Industries</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Lagos, Nigeria Headquarters</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>hello@techbrokersglobal.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>+234 (0) 123 456 7890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Tech Brokers Ltd. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
