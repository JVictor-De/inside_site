import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Methodology } from "./components/Methodology";
import { Process } from "./components/Process";
import { ConversionFooter } from "./components/ConversionFooter";
import { StatsSection } from "./components/StatsSection";
import { DetailsSection } from "./components/DetailsSection";
import { LearnSection } from "./components/LearnSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <StatsSection />
      <DetailsSection />
      <LearnSection />
      <FeaturesSection />
      <Methodology />
      <Process />
      <ConversionFooter />
      <Footer />
      <Toaster />
    </div>
  );
}
