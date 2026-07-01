import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustLogos from "@/components/TrustLogos";
import Services from "@/components/Services";
import Countries from "@/components/Countries";
import LoanCalculator from "@/components/LoanCalculator";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <Hero />
      <TrustLogos />
      <Services />
      <Countries />
      <LoanCalculator />
      <Process />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
