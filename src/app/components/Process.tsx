const steps = [
  {
    number: "01",
    title: "Análise Sem Compromisso",
    description: "Questionário objetivo. Em 48h você recebe um diagnóstico preliminar gratuito com os principais pontos de ineficiência."
  },
  {
    number: "02",
    title: "Proposta Técnica",
    description: "Cenário atual vs. otimizado lado a lado. Números claros de economia e melhorias de cobertura."
  },
  {
    number: "03",
    title: "Implementação Ágil",
    description: "Cuidamos de toda a migração e burocracia. Sua equipe não perde tempo. Você só assina e economiza."
  }
];

export function Process() {
  return (
    <div 
      className="py-24"
      style={{ backgroundColor: '#0B2A45' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-white leading-tight"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            3 PASSOS PARA
            <br />
            <span style={{ color: '#1F7A5A' }}>TRANSFORMAR SUA GESTÃO</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div 
                className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 h-full"
              >
                {/* Number Badge */}
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 font-bold text-2xl"
                  style={{ 
                    backgroundColor: '#1F7A5A',
                    color: 'white',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {step.number}
                </div>
                
                <h3 
                  className="text-2xl font-bold mb-4 text-white"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {step.title}
                </h3>
                
                <p 
                  className="text-white/80 leading-relaxed"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {step.description}
                </p>
              </div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path 
                      d="M8 16H24M24 16L18 10M24 16L18 22" 
                      stroke="#1F7A5A" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
