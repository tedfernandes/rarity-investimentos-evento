import HeroSection from "@/components/HeroSection";
import EventSection from "@/components/EventSection";
import StatsSection from "@/components/StatsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { useScrollReveal, useParallax } from "@/hooks/use-scroll-animations";

const Index = () => {
  useScrollReveal();
  useParallax();

  return (
    <main className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <EventSection />
      <GallerySection />
      <AboutSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
