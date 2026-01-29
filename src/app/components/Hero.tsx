import { Button } from "@/app/components/ui/button";
import { ArrowRight, TrendingDown } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Futuristic Background with Data Grid */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient (comentado) */}
        {/*
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0B2A45 0%, #0a1f33 50%, #071a2b 100%)'
          }}
        />
        */}
        {/* Background image - usando foto existente em public/photos */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/photos/foto-fundo-main-people.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // Mantemos blend para preservar o tom escuro do layout
            backgroundBlendMode: 'multiply'
          }}
        />
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(31, 122, 90, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(31, 122, 90, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Glowing orbs */}
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(31, 122, 90, 0.15)' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'rgba(11, 42, 69, 0.3)' }}
        />
        
        {/* Diagonal lines */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(31, 122, 90, 0.1) 100px, rgba(31, 122, 90, 0.1) 101px)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-5xl">
          {/* Pre-headline badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(31, 122, 90, 0.2)',
              border: '1px solid rgba(31, 122, 90, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <TrendingDown className="h-4 w-4" style={{ color: '#1F7A5A' }} />
            <span 
              className="text-sm font-medium"
              style={{ color: '#1F7A5A', fontFamily: 'Lato, sans-serif' }}
            >
              Consultoria Estratégica em Benefícios
            </span>
          </div>

          {/* Main Headline - Dramatic Typography */}
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.03em'
            }}
          >
            <span className="text-white">O 2º MAIOR CUSTO</span>
            <br />
            <span className="text-white">DA SUA FOLHA ESTÁ</span>
            <br />
            <span 
              className="relative inline-block"
              style={{ 
                color: '#FF4444',
                textShadow: '0 0 40px rgba(255, 68, 68, 0.5)'
              }}
            >
              SANGRANDO
              {/* Underline glow effect */}
              <div 
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                style={{ 
                  background: 'linear-gradient(90deg, #FF4444, transparent)',
                  boxShadow: '0 0 20px rgba(255, 68, 68, 0.5)'
                }}
              />
            </span>
            <span className="text-white"> O CAIXA?</span>
          </h1>

          {/* Subtitle - High Contrast */}
          <p 
            className="text-xl sm:text-2xl lg:text-3xl text-white mb-4 max-w-3xl font-bold"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Reduza Custos. Maximize Benefícios.
          </p>
          
          <p 
            className="text-lg sm:text-xl mb-12 max-w-3xl leading-relaxed"
            style={{ 
              fontFamily: 'Lato, sans-serif',
              color: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            Auditoria estratégica que identifica desperdícios ocultos e transforma seus benefícios corporativos em vantagem competitiva.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="text-lg px-10 py-7 rounded-full text-white shadow-2xl hover:scale-105 transition-all duration-300 group"
              style={{ 
                background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                boxShadow: '0 0 40px rgba(31, 122, 90, 0.4)'
              }}
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ESTANCAR O SANGRAMENTO
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 rounded-full hover:scale-105 transition-all duration-300"
              style={{ 
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 600,
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)'
              }}
              onClick={() => {
                const caseSection = document.getElementById('case-section');
                caseSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Case de 30% de Economia
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p 
              className="text-sm mb-4"
              style={{ color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Lato, sans-serif' }}
            >
              Resultados comprovados com empresas como:
            </p>
            <div className="flex flex-wrap items-center gap-8">
              {['Escritórios de Advocacia', 'Empresas de Tecnologia', 'Indústrias', 'Comércio'].map((item, i) => (
                <span 
                  key={i}
                  className="text-white/40 text-sm font-medium"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {item}
                </span>
              ))}
            </div>
            
            {/* PROOF BANNER - Dentro do Hero para máxima visibilidade */}
            <div 
              className="mt-8 p-6 rounded-2xl border-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(31, 122, 90, 0.15), rgba(11, 42, 69, 0.1))',
                backdropFilter: 'blur(20px)',
                borderColor: 'rgba(31, 122, 90, 0.4)',
                boxShadow: '0 0 40px rgba(31, 122, 90, 0.3)'
              }}
              onClick={() => {
                const caseSection = document.getElementById('case-section');
                caseSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div 
                    className="h-16 w-16 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
                      boxShadow: '0 0 30px rgba(31, 122, 90, 0.5)'
                    }}
                  >
                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p 
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: '#1F7A5A', fontFamily: 'Lato, sans-serif', fontWeight: 700 }}
                    >
                      CASE COMPROVADO
                    </p>
                    <p 
                      className="text-2xl font-black"
                      style={{ color: '#1F7A5A', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      30% DE REDUÇÃO
                    </p>
                    <p 
                      className="text-sm text-white/80"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      Escritório de Advocacia • Mantendo mesma cobertura
                    </p>
                  </div>
                </div>
                <svg className="h-6 w-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span 
            className="text-sm uppercase tracking-wider"
            style={{ fontFamily: 'Lato, sans-serif', color: 'rgba(255, 255, 255, 0.5)' }}
          >
            Descubra como
          </span>
          <div 
            className="w-6 h-10 border-2 rounded-full flex justify-center p-2"
            style={{ borderColor: 'rgba(31, 122, 90, 0.5)' }}
          >
            <div 
              className="w-1.5 h-3 rounded-full animate-bounce"
              style={{ background: '#1F7A5A' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}