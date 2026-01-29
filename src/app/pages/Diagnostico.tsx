import { Process } from "../components/Process";
import { Footer } from "../components/Footer";
import { StickyBarMobile } from "../components/StickyBarMobile";

export function Diagnostico() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="py-24 relative"
        style={{
          background: 'linear-gradient(135deg, #0B2A45 0%, #0a1f33 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(31, 122, 90, 0.2)',
              border: '1px solid rgba(31, 122, 90, 0.3)',
              backdropFilter: 'blur(10px)'
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
              Sem Risco, Sem Compromisso
            </span>
          </div>
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              color: '#FFFFFF',
              letterSpacing: '-0.02em'
            }}
          >
            DESCUBRA OS 3 VAZAMENTOS
            <br />
            <span style={{ color: '#FF4444' }}>DA SUA APÓLICE ATUAL</span>
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto mb-8"
            style={{ 
              color: 'rgba(255, 255, 255, 0.85)',
              fontFamily: 'Lato, sans-serif'
            }}
          >
            Análise gratuita em 48 horas. Você compartilha a apólice, nós entregamos um relatório executivo com três ações práticas de redução de custo. Sem reunioes de 2 horas. Sem letra miúda.
          </p>

          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: 'rgba(31, 122, 90, 0.15)',
              border: '1px solid rgba(31, 122, 90, 0.3)'
            }}
          >
            <svg className="w-5 h-5" style={{ color: '#1F7A5A' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span 
              className="text-sm font-semibold"
              style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}
            >
              Mais de 50 empresas economizaram entre R$ 42 mil e R$ 280 mil/ano com nosso diagnóstico
            </span>
          </div>
        </div>
      </section>

      {/* Formulário + Benefícios */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Coluna Esquerda: O Que Você Ganha */}
            <div className="flex flex-col justify-between">
              <h2 
                className="text-3xl font-extrabold mb-10"
                style={{ 
                  color: '#0B2A45',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                O QUE VOCÊ GANHA NA REUNIÃO
              </h2>

              <div className="space-y-12">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(31, 122, 90, 0.1)' }}
                  >
                    <svg className="w-7 h-7" style={{ color: '#1F7A5A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold mb-3"
                      style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Auditoria Técnica de Cobertura
                    </h3>
                    <p 
                      className="text-base leading-relaxed"
                      style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
                    >
                      Cruzamos sua apólice com as 12 operadoras parceiras. Identificamos coberturas duplicadas (ex: telemedicina que você já tem no plano) e taxas administrativas ocultas que somam 8-15% do prêmio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(31, 122, 90, 0.1)' }}
                  >
                    <svg className="w-7 h-7" style={{ color: '#1F7A5A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold mb-3"
                      style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Cenário Lado a Lado com Números Reais
                    </h3>
                    <p 
                      className="text-base leading-relaxed"
                      style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
                    >
                      "Situação Atual: R$ 42.800/mês vs. Melhor Opção de Mercado: R$ 29.960/mês". Você vê o impacto exato no caixa antes de decidir qualquer coisa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(31, 122, 90, 0.1)' }}
                  >
                    <svg className="w-7 h-7" style={{ color: '#1F7A5A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold mb-3"
                      style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Relatório Executivo em 48h Úteis
                    </h3>
                    <p 
                      className="text-base leading-relaxed"
                      style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
                    >
                      Sem enrolação. Você compartilha a apólice por e-mail seguro, e em 48h recebe PDF executivo com 3 ações práticas. Se não identificarmos nenhum vazamento, falamos na lâmina.
                    </p>
                  </div>
                </div>
              </div>

              {/* Alternativas de Contato */}
              <div className="mt-16 pt-10 border-t border-gray-200">
                <h3 
                  className="text-xl font-bold mb-6"
                  style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Prefere Falar Direto?
                </h3>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-3 p-5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      border: 'none',
                      boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)'
                    }}
                  >
                    {/* Gradient Overlay com Pulse */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #2ee87b 0%, #15a67d 100%)',
                        animation: 'buttonPulse 2s ease-in-out infinite'
                      }}
                    />
                    
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                      style={{
                        background: 'radial-gradient(circle, rgba(37, 211, 102, 0.6) 0%, transparent 70%)'
                      }}
                    />
                    
                    {/* Shine Effect */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        animation: 'shine 1.5s ease-in-out infinite'
                      }}
                    />
                    
                    <svg className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:rotate-12" style={{ color: 'white' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <div className="relative z-10">
                      <p 
                        className="font-semibold"
                        style={{ color: 'white', fontFamily: 'Lato, sans-serif' }}
                      >
                        WhatsApp Direto
                      </p>
                      <p 
                        className="text-sm"
                        style={{ color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'Lato, sans-serif' }}
                      >
                        Resposta imediata no horário comercial
                      </p>
                    </div>
                  </a>

                  <div 
                    className="flex items-center gap-3 p-5 rounded-xl"
                    style={{
                      background: 'rgba(31, 122, 90, 0.05)',
                      border: '1px solid rgba(31, 122, 90, 0.2)'
                    }}
                  >
                    <svg className="w-6 h-6" style={{ color: '#1F7A5A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p 
                        className="font-semibold"
                        style={{ color: '#0B2A45', fontFamily: 'Lato, sans-serif' }}
                      >
                        contato@insiteconsultoria.com.br
                      </p>
                      <p 
                        className="text-sm"
                        style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
                      >
                        Resposta em até 24h úteis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Formulário */}
            <div className="process-mobile-only overflow-hidden rounded-3xl">
              <style>{`
                .process-mobile-only > div {
                  padding-top: 2rem !important;
                  padding-bottom: 2rem !important;
                  border-radius: 1.5rem !important;
                  overflow: hidden !important;
                }
                .process-mobile-only [class*="grid"] {
                  grid-template-columns: 1fr !important;
                  gap: 1.5rem !important;
                  padding-left: 1.5rem !important;
                  padding-right: 1.5rem !important;
                }
                .process-mobile-only [class*="max-w-7xl"] {
                  max-width: 100% !important;
                  padding-left: 1.5rem !important;
                  padding-right: 1.5rem !important;
                }
                .process-mobile-only [class*="text-4xl"],
                .process-mobile-only [class*="text-5xl"],
                .process-mobile-only [class*="text-6xl"] {
                  font-size: 1.875rem !important;
                  line-height: 2.25rem !important;
                }
                .process-mobile-only [class*="mb-16"] {
                  margin-bottom: 2rem !important;
                }
                .process-mobile-only [class*="md:block"] {
                  display: none !important;
                }
              `}</style>
              <Process />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <StickyBarMobile />
    </div>
  );
}
