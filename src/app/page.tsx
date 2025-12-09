import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
// import Process from "@/components/Process";
import Scenarios from "@/components/Scenarios";
import WhyChooseUs from "@/components/WhyChooseUs";
// import Leadership from "@/components/Leadership";
import Insights from "@/components/Insights";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Hero />
      <About />
      <Services />
      <Industries />
      {/* <Process /> */}
      <Scenarios />
      <WhyChooseUs />
      {/* <Leadership /> */}
      <Insights limit={3} />
      <CTA />
    </main>
  );
}
