import { Button } from "@/app/components/ui/button";
import { Phone } from "lucide-react";

export function Header() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div 
            className="text-xl font-bold"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#0B2A45'
            }}
          >
            SecureGuard
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Button 
              variant="ghost" 
              className="rounded-full px-6"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Início
            </Button>
            <Button 
              variant="ghost" 
              className="rounded-full px-6"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Como Funciona
            </Button>
            <Button 
              variant="ghost" 
              className="rounded-full px-6"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Serviços
            </Button>
            <Button 
              variant="ghost" 
              className="rounded-full px-6"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Análise
            </Button>
          </nav>

          {/* CTA */}
          <Button 
            onClick={scrollToContact}
            className="rounded-full gap-2"
            variant="outline"
            style={{ 
              borderColor: '#0B2A45',
              color: '#0B2A45',
              fontFamily: 'Lato, sans-serif'
            }}
          >
            <Phone className="h-4 w-4" />
            Agendar Consultoria
          </Button>
        </div>
      </div>
    </header>
  );
}
