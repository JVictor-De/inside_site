import { useScrollReveal } from '../hooks/useScrollReveal';

export function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();
  
  const differentials = [
    {
      title: 'Atendimento ágil que resolve sinistros',
      desc: 'Seu gestor não fica pendurado no 0800. Resolvemos diretamente com as operadoras.'
    },
    {
      title: 'Não vendemos planos de prateleira',
      desc: 'Desenhamos a solução exata para o perfil do seu time. Cada empresa é única.'
    },
    {
      title: 'Foco na redução de custos e aumento dos benefícios',
      desc: 'Buscamos soluções inovadoras que geram economia real sem comprometer a qualidade.'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #1F7A5A, transparent)' }} />
      
      {/* Subtle background elements */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(31, 122, 90, 0.1) 0%, transparent 50%)`
        }}
      />
      
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal relative z-10 ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              background: 'rgba(31, 122, 90, 0.1)',
              border: '1px solid rgba(31, 122, 90, 0.2)'
            }}
          >
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#1F7A5A' }}
            />
            <span 
              className="text-sm font-medium"
              style={{ color: '#1F7A5A', fontFamily: 'Lato, sans-serif' }}
            >
              Nosso Diferencial
            </span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{ 
              color: '#0B2A45',
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            RESULTADOS TANGÍVEIS
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group relative"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(16px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 8px 32px rgba(31, 122, 90, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.3)'
              }}
            >
              {/* Borda luminosa ciano - efeito de captura de luz no vidro */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(31, 122, 90, 0.4) 0%, transparent 40%, rgba(31, 122, 90, 0.2) 100%)',
                  boxShadow: '0 0 20px rgba(31, 122, 90, 0.3)',
                  border: '1px solid rgba(31, 122, 90, 0.5)'
                }}
              />
              <div 
                className="flex-shrink-0 rounded-full w-14 h-14 flex items-center justify-center mb-6"
                style={{ backgroundColor: 'rgba(31, 122, 90, 0.1)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1F7A5A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 
                className="font-bold text-xl mb-3"
                style={{ 
                  color: '#0B2A45',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                {item.title}
              </h3>
              <p 
                className="leading-relaxed"
                style={{ 
                  color: '#4A5568',
                  fontFamily: 'Lato, sans-serif'
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
