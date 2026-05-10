import { AnimatedBackground } from "./components/AnimatedBackground";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { PrintingSolutions } from "./components/PrintingSolutions";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <AnimatedBackground />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <PrintingSolutions />

      <Pricing />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
