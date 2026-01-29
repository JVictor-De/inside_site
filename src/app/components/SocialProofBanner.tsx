import { ArrowRight, TrendingDown } from "lucide-react";

export function SocialProofBanner() {
  const scrollToCase = () => {
    const caseSection = document.getElementById('case-section');
    caseSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-6 overflow-hidden">
      {/* Glassmorphism Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(31, 122, 90, 0.15) 0%, rgba(11, 42, 69, 0.1) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      />
      
      {/* Animated gradient border */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(31, 122, 90, 0.5), transparent)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(31, 122, 90, 0.5), transparent)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Icon + Text */}
          <div className="flex items-center gap-4">
            <div 
              className="h-14 w-14 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
                boxShadow: '0 0 30px rgba(31, 122, 90, 0.4)'
              }}
            >
              <TrendingDown className="h-7 w-7 text-white" />
            </div>
            
            <div>
              <p 
                className="text-sm uppercase tracking-wider mb-1"
                style={{ 
                  color: '#1F7A5A',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600
                }}
              >
                Case de Sucesso Comprovado
              </p>
              <p 
                className="text-lg md:text-xl"
                style={{ 
                  color: '#0B2A45',
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700
                }}
              >
                Escritório de Advocacia reduziu <span style={{ color: '#1F7A5A' }}>30% dos custos</span> em benefícios
              </p>
            </div>
          </div>

          {/* Right: CTA */}
          <button
            onClick={scrollToCase}
            className="group flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(31, 122, 90, 0.1)',
              border: '1px solid rgba(31, 122, 90, 0.3)',
              color: '#1F7A5A',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 600
            }}
          >
            Ver Resultado Completo
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
