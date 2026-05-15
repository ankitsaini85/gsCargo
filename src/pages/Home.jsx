import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] text-white overflow-x-hidden">
      <Navbar />

      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}