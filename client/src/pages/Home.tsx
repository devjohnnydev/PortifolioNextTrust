import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Differentials } from "@/components/Differentials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
