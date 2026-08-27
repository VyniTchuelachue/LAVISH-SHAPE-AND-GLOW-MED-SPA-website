import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { PrimeBanner } from "@/components/sections/PrimeBanner";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsappButton } from "@/components/WhatsappButton";

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Testimonials />
      <PrimeBanner />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsappButton />
    </div>
  );
}

export default App;
