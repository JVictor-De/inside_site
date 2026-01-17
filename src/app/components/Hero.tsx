import { Button } from "@/app/components/ui/button";

const categories = [

];

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1683221704109-acdeb0883037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGZvZ3xlbnwxfHx8fDE3Njg0ODQ0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(11, 42, 69, 0.7) 0%, rgba(11, 42, 69, 0.5) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-5xl">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: category.active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.2)',
                  color: category.active ? '#0B2A45' : '#FFFFFF',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: category.active ? 700 : 400
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Main Headline */}
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none mb-8 text-white"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            ELIMINE O DESPERDÍCIO
            <br />
            <span style={{ color: '#1F7A5A' }}>EM SEGUROS</span>
            <br />
            CORPORATIVOS
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Auditoria técnica que identifica ineficiências ocultas e reduz custos sem comprometer a proteção da sua equipe
          </p>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="text-lg px-10 py-7 rounded-full text-white shadow-2xl hover:scale-105 transition-transform"
            style={{ 
              backgroundColor: '#1F7A5A',
              fontFamily: 'Lato, sans-serif',
              fontWeight: 700
            }}
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            SOLICITAR ANÁLISE GRATUITA
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span 
            className="text-sm uppercase tracking-wider"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Role para descobrir
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}