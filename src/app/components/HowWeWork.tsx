import { Search, TrendingUp, FileText, Rocket, HeadphonesIcon } from "lucide-react";
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, useRef, useEffect } from 'react';

const steps = [
  {
    icon: Search,
    title: "Diagnóstico Detalhado",
    description: "Mapeamento completo dos contratos atuais, identificando coberturas duplicadas, taxas ocultas e oportunidades de economia imediata."
  },
  {
    icon: TrendingUp,
    title: "Pesquisa de Mercado",
    description: "Análise comparativa das melhores operadoras e condições disponíveis para o perfil da sua empresa, garantindo escolhas estratégicas."
  },
  {
    icon: FileText,
    title: "Comparativo Técnico-Financeiro",
    description: "Apresentação clara de cenários: situação atual vs. proposta otimizada, com impacto direto nos custos e qualidade da cobertura."
  },
  {
    icon: Rocket,
    title: "Implantação Assistida",
    description: "Cuidamos de toda a burocracia da migração. Sua equipe não perde tempo. Transição suave e sem interrupção para os colaboradores."
  },
  {
    icon: HeadphonesIcon,
    title: "Gestão Contínua",
    description: "Acompanhamento ativo pós-implantação: monitoramento de sinistralidade, suporte em sinistros e blindagem contra reajustes abusivos."
  }
];

export function HowWeWork() {
  const { ref, isVisible } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth * 0.85; // 85vw per card
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      className="py-24 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #F8FAFB 0%, #EDF2F7 100%)'
      }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ background: 'linear-gradient(90deg, transparent, #1F7A5A, transparent)' }} />
      
      {/* Data Flow Animation - Background abstrato */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {/* Linhas de dados diagonais */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(31, 122, 90, 0.03) 80px, rgba(31, 122, 90, 0.03) 81px),
              repeating-linear-gradient(-45deg, transparent, transparent 80px, rgba(11, 42, 69, 0.02) 80px, rgba(11, 42, 69, 0.02) 81px)
            `
          }}
        />
        {/* Círculos concêntricos sutis */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(31, 122, 90, 0.08) 0%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(11, 42, 69, 0.06) 0%, transparent 70%)',
            animation: 'pulse 10s ease-in-out infinite',
            animationDelay: '2s'
          }}
        />
      </div>
      
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
              Nossa Metodologia
            </span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              color: '#0B2A45',
              letterSpacing: '-0.02em'
            }}
          >
            COMO TRABALHAMOS
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Lato, sans-serif',
              color: '#4A5568'
            }}
          >
            Processo cirúrgico em 5 etapas para transformar seus seguros corporativos de custo fixo em investimento estratégico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative hidden md:grid">
          {/* Linha conectiva energizada - scroll-triggered animation */}
          <svg 
            className="hidden lg:block absolute top-1/2 left-0 w-full h-4 pointer-events-none z-0" 
            style={{ transform: 'translateY(-50%)' }}
          >
            <defs>
              <linearGradient id="lineGradientFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#1F7A5A', stopOpacity: 0.2 }}>
                  <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" style={{ stopColor: '#1F7A5A', stopOpacity: 0.8 }}>
                  <animate attributeName="stop-opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" style={{ stopColor: '#1F7A5A', stopOpacity: 0.2 }}>
                  <animate attributeName="stop-opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
              
              {/* Glow effect para a linha */}
              <filter id="lineGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Linha base com glow */}
            <line 
              x1="8%" 
              y1="50%" 
              x2="92%" 
              y2="50%" 
              stroke="url(#lineGradientFlow)" 
              strokeWidth="2.5"
              strokeDasharray="12,6"
              filter="url(#lineGlow)"
            />
            
            {/* Partículas de energia fluindo */}
            <circle r="3" fill="#1F7A5A" opacity="0.8">
              <animateMotion dur="4s" repeatCount="indefinite" path="M 8,50 L 92,50" />
              <animate attributeName="opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle r="2" fill="#0B2A45" opacity="0.6">
              <animateMotion dur="5s" repeatCount="indefinite" path="M 8,50 L 92,50" begin="1s" />
              <animate attributeName="opacity" values="0;0.6;0" dur="5s" repeatCount="indefinite" begin="1s" />
            </circle>
          </svg>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group relative hover:-translate-y-3"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(14px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(31, 122, 90, 0.12), 0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.4)',
                  position: 'relative'
                }}
              >
                {/* Reflexo interno superior - simula luz atravessando vidro */}
                <div 
                  className="absolute top-0 left-0 right-0 h-24 rounded-t-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%)'
                  }}
                />
                
                {/* Borda luminosa ciano - efeito de captura de luz no vidro */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(31, 122, 90, 0.35) 0%, transparent 50%, rgba(31, 122, 90, 0.2) 100%)',
                    boxShadow: '0 0 24px rgba(31, 122, 90, 0.4), inset 0 0 24px rgba(31, 122, 90, 0.1)',
                    border: '1px solid rgba(31, 122, 90, 0.6)'
                  }}
                />
                {/* Step Number Badge */}
                <div 
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
                    fontFamily: 'Montserrat, sans-serif',
                    boxShadow: '0 4px 15px rgba(31, 122, 90, 0.4)'
                  }}
                >
                  {index + 1}
                </div>

                {/* Icon */}
                <div 
                  className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'rgba(31, 122, 90, 0.1)' }}
                >
                  <Icon 
                    className="h-8 w-8"
                    style={{ color: '#1F7A5A' }}
                  />
                </div>
                
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#0B2A45'
                  }}
                >
                  {step.title}
                </h3>
                
                <p 
                  className="leading-relaxed"
                  style={{ 
                    fontFamily: 'Lato, sans-serif',
                    color: '#4A5568'
                  }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Carousel - Swipeable */}
        <div className="md:hidden relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-8"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="flex-shrink-0 snap-center p-6 rounded-2xl"
                  style={{
                    width: '85vw',
                    background: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid rgba(31, 122, 90, 0.15)',
                    boxShadow: '0 8px 24px rgba(31, 122, 90, 0.08)'
                  }}
                >
                  {/* Step Number Badge */}
                  <div 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold mb-4"
                    style={{ 
                      background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
                      fontFamily: 'Montserrat, sans-serif',
                      boxShadow: '0 4px 12px rgba(31, 122, 90, 0.3)'
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div 
                    className="h-14 w-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(31, 122, 90, 0.1)' }}
                  >
                    <Icon 
                      className="h-7 w-7"
                      style={{ color: '#1F7A5A' }}
                    />
                  </div>
                  
                  <h3 
                    className="text-lg font-bold mb-3"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: '#0B2A45'
                    }}
                  >
                    {step.title}
                  </h3>
                  
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ 
                      fontFamily: 'Lato, sans-serif',
                      color: '#4A5568'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const carousel = carouselRef.current;
                  if (carousel) {
                    const cardWidth = carousel.offsetWidth * 0.85;
                    carousel.scrollTo({
                      left: cardWidth * index,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="transition-all duration-300"
                style={{
                  width: activeIndex === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: activeIndex === index ? '#1F7A5A' : 'rgba(31, 122, 90, 0.3)'
                }}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p 
            className="text-lg mb-6"
            style={{ 
              fontFamily: 'Lato, sans-serif',
              color: '#4A5568'
            }}
          >
            Pronto para otimizar seus benefícios corporativos?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
            style={{ 
              backgroundColor: '#1F7A5A',
              fontFamily: 'Lato, sans-serif'
            }}
          >
            Solicitar Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
}
