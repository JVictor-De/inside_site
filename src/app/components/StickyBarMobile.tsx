import { Phone, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export function StickyBarMobile() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detecta se passou da primeira dobra (Hero section ~100vh)
      const heroHeight = window.innerHeight * 0.8;
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/diagnostico';
    }
  };

  return (
    <div
      className={`sticky-bar-mobile md:hidden ${isVisible ? 'active' : ''}`}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        padding: '12px 16px',
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        /* GLASSMORPHISM PREMIUM - Interface Nativa */
        background: 'rgba(11, 42, 69, 0.85)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderTop: '1px solid rgba(31, 122, 90, 0.3)',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        /* Safe area para notch de iPhones */
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))'
      }}
    >
      <div className="flex items-center gap-3">
        {/* Indicador visual de economia */}
        <div 
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
            boxShadow: '0 0 20px rgba(31, 122, 90, 0.5)'
          }}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>

        {/* CTA Principal */}
        <button
          onClick={handleClick}
          className="flex-1 h-12 rounded-full font-bold text-white flex items-center justify-center gap-2 active:scale-95 transition-transform"
          style={{
            background: 'linear-gradient(135deg, #1F7A5A 0%, #15614a 100%)',
            boxShadow: '0 4px 16px rgba(31, 122, 90, 0.4)',
            fontFamily: 'Lato, sans-serif',
            fontSize: '15px',
            letterSpacing: '0.3px'
          }}
        >
          <Phone className="w-4 h-4" />
          Falar com Consultor
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Texto de suporte discreto */}
      <p 
        className="text-center text-xs mt-2"
        style={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: 'Lato, sans-serif'
        }}
      >
        Análise gratuita • Resposta em 24h
      </p>
    </div>
  );
}
