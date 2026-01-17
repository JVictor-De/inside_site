import { TrendingDown, Shield, Activity } from "lucide-react";

const approaches = [
  {
    icon: TrendingDown,
    title: "Otimização Financeira",
    description: "Análise técnica que elimina coberturas duplicadas e taxas ocultas. O CFO aprova.",
    metric: "22%",
    metricLabel: "economia média"
  },
  {
    icon: Shield,
    title: "Blindagem Operacional",
    description: "Seu RH livre da burocracia diária. Assumimos a carga operacional.",
    metric: "100%",
    metricLabel: "gestão ativa"
  },
  {
    icon: Activity,
    title: "Monitoramento Contínuo",
    description: "Não aparecemos só na renovação. Gestão ativa para evitar reajustes abusivos.",
    metric: "24/7",
    metricLabel: "acompanhamento"
  }
];

export function Methodology() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              color: '#0B2A45',
              letterSpacing: '-0.02em'
            }}
          >
            NÃO VENDEMOS APÓLICES.
            <br />
            <span style={{ color: '#1F7A5A' }}>APLICAMOS INTELIGÊNCIA</span>
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Metodologia baseada em dados para transformar seguros de custo fixo em investimento estratégico
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className="h-14 w-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'rgba(31, 122, 90, 0.1)' }}
                  >
                    <Icon 
                      className="h-7 w-7"
                      style={{ color: '#1F7A5A' }}
                    />
                  </div>
                  <div className="text-right">
                    <div 
                      className="text-3xl font-bold"
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif',
                        color: '#1F7A5A'
                      }}
                    >
                      {approach.metric}
                    </div>
                    <div 
                      className="text-xs text-gray-500 uppercase"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {approach.metricLabel}
                    </div>
                  </div>
                </div>
                
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#0B2A45'
                  }}
                >
                  {approach.title}
                </h3>
                
                <p 
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {approach.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
