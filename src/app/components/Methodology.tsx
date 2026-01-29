import { TrendingDown, Shield, Activity } from "lucide-react";
import { useScrollReveal } from '../hooks/useScrollReveal';

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
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <div 
      className="py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFB 100%)'
      }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #1F7A5A, transparent)' }} />
      
      {/* Background abstrato de dados fluindo */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(31, 122, 90, 0.15) 0%, transparent 70%)',
            animation: 'pulse 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(11, 42, 69, 0.12) 0%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
      </div>
      <div 
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      >
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

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Linha conectiva entre os 3 pilares - scroll-triggered */}
          <svg 
            className="hidden md:block absolute top-20 left-0 w-full h-2 pointer-events-none z-0" 
          >
            <defs>
              <linearGradient id="methodologyFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#1F7A5A', stopOpacity: 0.3 }}>
                  <animate attributeName="stop-opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" style={{ stopColor: '#1F7A5A', stopOpacity: 0.7 }}>
                  <animate attributeName="stop-opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" style={{ stopColor: '#1F7A5A', stopOpacity: 0.3 }}>
                  <animate attributeName="stop-opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
              
              <filter id="methodologyGlow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <line 
              x1="15%" 
              y1="50%" 
              x2="85%" 
              y2="50%" 
              stroke="url(#methodologyFlow)" 
              strokeWidth="2"
              strokeDasharray="10,5"
              filter="url(#methodologyGlow)"
            />
          </svg>
          
          {approaches.map((approach, index) => {
            const Icon = approach.icon;
            return (
              <div 
                key={index} 
                className="group p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative"
                style={{
                  background: 'rgba(255, 255, 255, 0.07)',
                  backdropFilter: 'blur(15px) saturate(160%)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: '0 8px 32px rgba(31, 122, 90, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.35)'
                }}
              >
                {/* Efeito de brilho ao hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(31, 122, 90, 0.25) 0%, transparent 60%)',
                    border: '1px solid rgba(31, 122, 90, 0.4)'
                  }}
                />
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
