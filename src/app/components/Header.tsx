import { Button } from "@/app/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Se estiver no topo, sempre mostrar
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Se rolar para baixo e já passou de 80px, esconder
      else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      }
      // Se rolar para cima, mostrar
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const scrollToContact = () => {
    navigate('/diagnostico');
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-transform duration-300 ease-in-out"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/photos/logo-name.png" alt="INSITE" className="h-12.5 w-auto object-contain" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <Link to="/">
              <Button 
                variant="ghost" 
                className="rounded-full px-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Início
              </Button>
            </Link>
            <Link to="/metodologia">
              <Button 
                variant="ghost" 
                className="rounded-full px-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Metodologia
              </Button>
            </Link>
            <Link to="/resultados">
              <Button 
                variant="ghost" 
                className="rounded-full px-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Resultados
              </Button>
            </Link>
            <Link to="/quem-somos">
              <Button 
                variant="ghost" 
                className="rounded-full px-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Quem Somos
              </Button>
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={scrollToContact}
              className="rounded-full gap-2 relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
                color: '#FFFFFF',
                fontFamily: 'Lato, sans-serif',
                border: 'none',
                boxShadow: '0 4px 20px rgba(31, 122, 90, 0.4)',
                fontWeight: 600
              }}
            >
              {/* Animated gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, #22926b 0%, #0d3250 100%)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              />
              
              {/* Glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle, rgba(31, 122, 90, 0.6) 0%, transparent 70%)',
                  animation: 'glow 2s ease-in-out infinite'
                }}
              />
              
              {/* Shine effect */}
              <div 
                className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  width: '50%'
                }}
              />
              
              <Phone className="h-4 w-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Agendar Consultoria</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" style={{ color: '#0B2A45' }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: '#0B2A45' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Glassmorphism */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-50"
          style={{ top: '64px' }} // Below the header
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0"
            style={{ 
              background: 'rgba(11, 42, 69, 0.7)',
              backdropFilter: 'blur(20px) saturate(150%)',
              WebkitBackdropFilter: 'blur(20px) saturate(150%)'
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div 
            className="relative h-full flex flex-col p-6 gap-4"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3)'
            }}
          >
            <Button 
              variant="ghost" 
              className="justify-start text-lg w-full"
              style={{ 
                fontFamily: 'Lato, sans-serif',
                color: '#FFFFFF'
              }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/');
              }}
            >
              Início
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start text-lg w-full"
              style={{ 
                fontFamily: 'Lato, sans-serif',
                color: '#FFFFFF'
              }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/metodologia');
              }}
            >
              Metodologia
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start text-lg w-full"
              style={{ 
                fontFamily: 'Lato, sans-serif',
                color: '#FFFFFF'
              }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/resultados');
              }}
            >
              Resultados
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start text-lg w-full"
              style={{ 
                fontFamily: 'Lato, sans-serif',
                color: '#FFFFFF'
              }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate('/quem-somos');
              }}
            >
              Quem Somos
            </Button>
            
            <div className="mt-4 pt-4 border-t border-white/20">
              <Button 
                onClick={() => {
                  scrollToContact();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full rounded-full gap-2 py-6"
                style={{ 
                  background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
                  color: '#FFFFFF',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600
                }}
              >
                <Phone className="h-5 w-5" />
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
