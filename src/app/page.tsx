import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Insights from "@/components/Insights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <div className="pt-12 md:pt-20"> {/* Responsive spacing */}
        <About />
      </div>
      <Process />
      <Services />
      <Testimonials />
      <CTA />
      <Insights />
      <Footer />
    </main>
  );
}
