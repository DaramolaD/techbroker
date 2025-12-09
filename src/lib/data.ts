import { Building2, Landmark, Plane, Laptop2, ShoppingBag, Stethoscope, Briefcase, Globe, ShieldCheck } from "lucide-react";

export const industries = [
    {
        id: "financial-services",
        name: "Financial Services",
        icon: Landmark,
        description: "Digital banking, fintech integration, and fraud prevention systems.",
        longDescription: "We empower financial institutions to thrive in the digital economy. From architecting secure, scalable core banking systems to integrating cutting-edge fintech APIs, our solutions drive operational efficiency and customer engagement. We specialize in navigating the complex regulatory landscape of African markets while delivering world-class digital experiences.",
        features: [
            "Next-Gen Core Banking Migration",
            "Open Banking API Architecture",
            "AI-Driven Fraud Detection",
            "Regulatory Compliance Automation"
        ],
        image: "/images/finance.png"
    },
    {
        id: "government",
        name: "Government",
        icon: Building2,
        description: "E-governance platforms, automated revenue collection, and citizen services.",
        longDescription: "Tech Brokers is a trusted partner for public sector transformation. We build secure e-governance platforms that streamline service delivery, enhance transparency, and optimize revenue collection. Our solutions bridge the gap between citizens and government, fostering trust and efficiency through digital innovation.",
        features: [
            "Integrated Revenue Collection Systems",
            "Secure Citizen Identity Portals",
            "Public Service Digitization",
            "Data-Driven Policy Analytics"
        ],
        image: "/images/government.avif"
        // image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "logistics",
        name: "Logistics",
        icon: Plane,
        description: "Real-time tracking, fleet management, and automated dispatch systems.",
        longDescription: "In a connected world, logistics is the backbone of commerce. We develop intelligent logistics platforms that offer real-time visibility, optimize fleet management, and automate supply chain operations. Our technology reduces costs and improves delivery times, ensuring your goods move as fast as your business.",
        features: [
            "Real-Time Fleet Telematics",
            "Automated Dispatch & Routing",
            "Supply Chain Visibility Dashboards",
            "Last-Mile Delivery Optimization"
        ],
        image: "/images/logistic.avif"
    },
    {
        id: "startups",
        name: "Startups & Tech",
        icon: Laptop2,
        description: "MVP development, scaling architecture, and go-to-market technology.",
        longDescription: "We translate visionary ideas into market-ready products. For startups, we are more than just developers; we are technical co-founders. We build robust MVPs, design scalable architectures for high growth, and implement agile development processes that speed up time-to-market without compromising quality.",
        features: [
            "Rapid MVP Development",
            "Scalable Cloud Architecture",
            "CI/CD Pipeline Implementation",
            "Technical Due Diligence"
        ],
        image: "/images/cost.avif"
    },
    {
        id: "retail",
        name: "Retail & E-commerce",
        icon: ShoppingBag,
        description: "Omnichannel retail solutions, inventory management, and payment gateways.",
        longDescription: "The future of retail is omnichannel. We assist retailers in merging physical and digital experiences seamlessly. Our solutions include unified inventory management, custom e-commerce storefronts, and integrated payment gateways that provide a frictionless shopping experience for your customers.",
        features: [
            "Omnichannel Commerce Platforms",
            "Real-Time Inventory Sync",
            "Custom Payment Gateway Integration",
            "Customer Loyalty Systems"
        ],
        image: "/images/retailecommerce.avif"
    },
    {
        id: "healthcare",
        name: "Healthcare",
        icon: Stethoscope,
        description: "Telemedicine platforms, patient record digitization, and hospital management.",
        longDescription: "We are digitizing healthcare to improve patient outcomes. Our solutions range from telemedicine platforms that expand access to care, to secure electronic health record (EHR) systems that ensure data interoperability. We build technology that supports healthcare providers in delivering efficient, compassionate care.",
        features: [
            "Telemedicine & Virtual Care Platforms",
            "Electronic Health Records (EHR) Systems",
            "Hospital Management Information Systems",
            "Health Data Interoperability"
        ],
        image: "/images/health.avif"
    }
];


