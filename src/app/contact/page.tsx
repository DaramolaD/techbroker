"use client";

import { Mail, MapPin, Phone, Send, ArrowRight, MessageSquare, Clock } from "lucide-react";
import { useState } from "react";
import { CustomSelect } from "@/components/ui/CustomSelect";

export default function ContactPage() {
    const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", company: "", serviceInterest: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            alert("Message sent! We will get back to you shortly.");
            setIsSubmitting(false);
            setFormState({ firstName: "", lastName: "", email: "", company: "", serviceInterest: "", message: "" });
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-white font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-secondary">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 inline-block backdrop-blur-md border border-white/20">Get in Touch</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Let's Build Something <br /> Exceptional Together
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Ready to transform your digital capabilities? Get in touch with our team of experts to discuss your project or ideal.
                    </p>
                </div>
            </section>

            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* LEFT COLUMN: Contact Form */}
                        <div>
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                                <p className="text-gray-600">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2 grid">
                                        <label htmlFor="firstName" className="text-sm font-bold text-gray-700">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 placeholder-gray-400"
                                            placeholder="John"
                                            value={formState.firstName}
                                            onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2 grid">
                                        <label htmlFor="lastName" className="text-sm font-bold text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 placeholder-gray-400"
                                            placeholder="Doe"
                                            value={formState.lastName}
                                            onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 grid">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 placeholder-gray-400"
                                        placeholder="john@company.com"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2 grid">
                                    <label htmlFor="company" className="text-sm font-bold text-gray-700">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-gray-900 placeholder-gray-400"
                                        placeholder="Your Company"
                                        value={formState.company}
                                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2 grid">
                                    <label htmlFor="serviceInterest" className="text-sm font-bold text-gray-700">Service Interest</label>
                                    <CustomSelect
                                        id="serviceInterest"
                                        options={[
                                            { label: "Digital Strategy", value: "Digital Strategy" },
                                            { label: "Fintech Solutions", value: "Fintech Solutions" },
                                            { label: "Government Innovation", value: "Government Innovation" },
                                            { label: "General Consulting", value: "Consulting" },
                                        ]}
                                        value={formState.serviceInterest}
                                        onChange={(value) => setFormState({ ...formState, serviceInterest: value })}
                                        placeholder="Select a service"
                                    />
                                </div>

                                <div className="space-y-2 grid">
                                    <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-gray-900 placeholder-gray-400"
                                        placeholder="Tell us about your project and goals..."
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-6 bg-secondary hover:bg-primary text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    {!isSubmitting && <Send className="w-5 h-5" />}
                                </button>
                            </form>
                        </div>

                        {/* RIGHT COLUMN: Contact Information */}
                        <div>
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                                <p className="text-gray-600">
                                    Get in touch with us through any of these channels.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {/* Phone */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Phone</h3>
                                        <p className="text-primary font-bold text-xl my-1">08025272784</p>
                                        <p className="text-gray-500 text-sm">Call us for immediate assistance</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                                        <p className="text-gray-900 font-medium my-1">enquiries@techbrokersglobal.com</p>
                                        <p className="text-gray-500 text-sm">Send us a message anytime</p>
                                    </div>
                                </div>

                                {/* Office */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Office</h3>
                                        <p className="text-gray-900 font-medium my-1">
                                            Plot 18 Yesufu Abiodun Oniru road VI
                                        </p>
                                        <p className="text-gray-500 text-sm">Visit our headquarters</p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">Business Hours</h3>
                                        <p className="text-primary font-bold my-1">Mon - Fri: 8AM - 5PM</p>
                                        <p className="text-gray-500 text-sm">WAT (West African Time)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Immediate Help Box */}
                            <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Need Immediate Help?</h3>
                                <p className="text-gray-500 mb-6 text-sm">
                                    For urgent inquiries, call us directly or schedule a consultation.
                                </p>
                                <div className="flex gap-4">
                                    <button className="px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-colors flex items-center gap-2 text-sm">
                                        <Phone className="w-4 h-4" /> Call Now
                                    </button>
                                    <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                        Schedule Call
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}
