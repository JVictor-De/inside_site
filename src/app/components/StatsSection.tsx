export function StatsSection() {
  return (
    <section
      id="case-section"
      className="py-24 relative"
      style={{
        background: `url('/photos/fundo-azul-petroleo.png') center center/cover no-repeat`,
      }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ background: 'linear-gradient(90deg, transparent, #1F7A5A, transparent)' }} />
      
      {/* Overlay for subtle darkening */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(6, 10, 20, 0.70)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {/* Top gradient fade overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #0a243b, transparent)',
        }}
        aria-hidden="true"
      />

     

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p 
              className="text-sm font-semibold uppercase tracking-wider mb-4"
              style={{ color: '#1F7A5A', fontFamily: 'Lato, sans-serif' }}
            >
              Case de Sucesso
            </p>
            <h3 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                letterSpacing: '-0.02em'
              }}
            >
              ESCRITÓRIO DE ADVOCACIA
            </h3>
            
            {/* 30% como elemento gráfico dominante */}
            <div className="relative inline-block mb-6">
              <div 
                className="text-8xl sm:text-9xl font-black relative z-10"
                style={{ 
                  color: '#1F7A5A',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '-0.05em',
                  textShadow: '0 0 60px rgba(31, 122, 90, 0.6), 0 0 30px rgba(31, 122, 90, 0.4)',
                  lineHeight: '1'
                }}
              >
                30%
              </div>
              {/* Efeito de profundidade/sombra estilizada */}
              <div 
                className="absolute top-2 left-2 text-8xl sm:text-9xl font-black opacity-20 z-0"
                style={{ 
                  color: '#0B2A45',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '-0.05em',
                  lineHeight: '1'
                }}
              >
                30%
              </div>
            </div>
            <p 
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              DE REDUÇÃO IMEDIATA
            </p>
            <p 
              className="text-lg text-gray-100 mb-6 leading-relaxed"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Após auditoria e pesquisa de mercado, organizamos a reestruturação completa dos planos de saúde, obtendo <strong>redução de 30%</strong> para empresa.
            </p>
            <p 
              className="text-lg text-gray-100 mb-8 leading-relaxed"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              <strong>Mantendo o mesmo padrão e cobertura</strong> e melhorando a satisfação dos colaboradores. Esta ação representou uma economia significativa para o cliente.
            </p>
            <a
              href="/#contact-section"
              onClick={(e) => {
                const contactSection = document.getElementById('contact-section');
                if (contactSection) {
                  e.preventDefault();
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-block px-8 py-4 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
              style={{
                backgroundColor: '#1F7A5A',
                color: 'white',
                fontFamily: 'Lato, sans-serif'
              }}
            >
              Quero Resultados Assim
            </a>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
              alt="Case"
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
