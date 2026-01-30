import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { HowWeWork } from "../components/HowWeWork";
import { Services } from "../components/Services";
import { StatsSection } from "../components/StatsSection";
import { Methodology } from "../components/Methodology";
import { Process } from "../components/Process";
import { ConversionFooter } from "../components/ConversionFooter";
import { Footer } from "../components/Footer";
import { StickyBarMobile } from "../components/StickyBarMobile";

export function Home() {
  return (
   <div className="min-h-screen bg-white">
      {/* A Dor (O Problema) */}
      <Hero />

      {/* A Prova (Que você resolve) */}
      <StatsSection />
      <FeaturesSection />

      {/* O Método (Como você resolve) */}
      <Methodology />
      <Process />

      {/* O Escopo (O que você cobre) */}
      <Services />

      {/* A Autoridade (Quem é você) */}
      {/*<AboutSection />*/}
      <HowWeWork />

      {/* A Ação (O próximo passo) */}
      <ConversionFooter />
      <Footer />
      <StickyBarMobile />
    </div>
  );
}
