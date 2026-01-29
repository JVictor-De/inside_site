import { useScrollReveal } from '../hooks/useScrollReveal';

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <section 
      className="py-24"
      style={{ 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFB 100%)'
      }}
    >
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p 
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: '#1F7A5A', fontFamily: 'Lato, sans-serif' }}
            >
              Quem Somos
            </p>
            <h2 
              className="text-4xl lg:text-5xl font-extrabold mb-6"
              style={{ 
                color: '#0B2A45',
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '-0.02em'
              }}
            >
              SEU BRAÇO DIREITO
            </h2>

            <p 
              className="text-xl mb-6 font-semibold"
              style={{ color: '#1F7A5A', fontFamily: 'Lato, sans-serif' }}
            >
              Atuamos como o braço direito do seu RH, DP e Financeiro.
            </p>

            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
            >
              Auxiliamos na burocracia e na negociação complexa com seguradoras para que sua empresa foque no que realmente importa: crescer.
            </p>

            <p 
              className="text-lg leading-relaxed"
              style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
            >
              Não somos corretor tradicional. Somos consultoria estratégica que entrega redução real de custos com benefícios corporativos através de auditoria técnica, pesquisa de mercado e gestão contínua.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
              alt="Equipe consultoria"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
