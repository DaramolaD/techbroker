import { ArrowRight, FileCheck, Users, Server } from "lucide-react";

const scenarios = [
    {
        title: "Microfinance Fraud Reduction",
        icon: FileCheck,
        problem: "High rates of identity fraud in loan applications.",
        solution: "Implemented biometric onboarding and AI-driven credit scoring.",
        outcome: "85% reduction in fraudulent applications within 6 months."
    },
    {
        title: "Government Service Delivery",
        icon: Users,
        problem: "Slow, paper-based processing of citizen requests.",
        solution: "End-to-end digitization of workflows with a public-facing portal.",
        outcome: "Processing time reduced from weeks to hours."
    },
    {
        title: "E-Commerce Logistics",
        icon: Server,
        problem: "Inability to track last-mile delivery in real-time.",
        solution: "Developed expert dispatch system with geolocation tracking.",
        outcome: "30% increase in daily deliveries per driver."
    }
];

export default function Scenarios() {
    return (
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-white/10 rounded-full border border-white/10">
                        Impact Stories
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Real Problems. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                            Real Solutions.
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 font-light max-w-2xl">
                        See how our strategies translate into measurable business outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {scenarios.map((scenario, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
                            <div className="lg:h-14 lg:w-14 h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                                <scenario.icon className="text-white w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">{scenario.title}</h3>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Challenge</h4>
                                    <p className="text-gray-300 text-sm">{scenario.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Solution</h4>
                                    <p className="text-gray-300 text-sm">{scenario.solution}</p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <div className="flex items-start gap-3">
                                    <div className="text-primary font-bold text-3xl">✔</div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase">Outcome</div>
                                        <div className="text-white font-medium">{scenario.outcome}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
