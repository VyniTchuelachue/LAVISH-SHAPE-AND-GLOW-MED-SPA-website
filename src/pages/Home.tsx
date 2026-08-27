import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { PrimeBanner } from "@/components/sections/PrimeBanner";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <PrimeBanner />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}
