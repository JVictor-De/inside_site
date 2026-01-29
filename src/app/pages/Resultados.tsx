import { StatsSection } from "../components/StatsSection";
import { Methodology } from "../components/Methodology";
import { Footer } from "../components/Footer";
import { StickyBarMobile } from "../components/StickyBarMobile";

export function Resultados() {
  return (
    <div className="pt-16">
      {/* Hero Section para Resultados */}
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
              Casos Reais
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
            SE OUTROS CFOs CONSEGUIRAM,
            <br />
            <span style={{ color: '#1F7A5A' }}>VOCÊ TAMBÉM CONSEGUE</span>
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ 
              color: 'rgba(255, 255, 255, 0.85)',
              fontFamily: 'Lato, sans-serif'
            }}
          >
            Dados reais de empresas que eliminaram 20-40% de custos com benefícios. Sem promessas de marketing. Só auditoria, negociação e execução.
          </p>
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mt-8"
            style={{
              background: 'rgba(31, 122, 90, 0.2)',
              border: '1px solid rgba(31, 122, 90, 0.3)'
            }}
          >
            <svg className="w-5 h-5" style={{ color: '#1F7A5A' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span 
              className="text-sm font-semibold"
              style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}
            >
              Cases auditados por terceiros independentes
            </span>
          </div>
        </div>
      </section>

      <StatsSection />
      <Methodology />
      
      {/* Seção adicional de cases */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-extrabold mb-6"
              style={{ 
                color: '#0B2A45',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              DIFERENTES PERFIS. <span style={{ color: '#1F7A5A' }}>MESMO RESULTADO.</span>
            </h2>
            <p 
              className="text-lg max-w-3xl mx-auto"
              style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
            >
              De escritórios de advocacia a indústrias. O padrão se repete: quando você audita com dados, a economia aparece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Case 2 */}
            <div 
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #F8FAFB 0%, #EDF2F7 100%)',
                border: '1px solid rgba(31, 122, 90, 0.1)'
              }}
            >
              <div 
                className="inline-flex px-3 py-1 rounded-full mb-4"
                style={{
                  background: 'rgba(31, 122, 90, 0.1)',
                  color: '#1F7A5A',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600
                }}
              >
                Empresa de TI • 80 vidas
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
              >
                40 horas/mês devolvidas ao RH
              </h3>
              <p 
                className="text-lg mb-4"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                <strong style={{ color: '#0B2A45' }}>O Desafio:</strong> Gerente de RH perdia 2 horas/dia gerenciando sinistros, autorizações e dúvidas sobre carteirinha. Turnover aumentando por falta de tempo para recrutamento.
              </p>
              <p 
                className="text-lg"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                <strong style={{ color: '#0B2A45' }}>A Intervenção:</strong> Canal direto colaborador-INSITE via WhatsApp. Movimentação cadastral 100% assumida. RH voltou a fazer RH, não burocracia.
              </p>
              <div 
                className="mt-6 pt-4 border-t"
                style={{ borderColor: 'rgba(31, 122, 90, 0.2)' }}
              >
                <p 
                  className="text-2xl font-black"
                  style={{ color: '#1F7A5A', fontFamily: 'Montserrat, sans-serif' }}
                >
                  40h/mês devolvidas ao RH
                </p>
              </div>
            </div>

            {/* Case 3 */}
            <div 
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #F8FAFB 0%, #EDF2F7 100%)',
                border: '1px solid rgba(31, 122, 90, 0.1)'
              }}
            >
              <div 
                className="inline-flex px-3 py-1 rounded-full mb-4"
                style={{
                  background: 'rgba(31, 122, 90, 0.1)',
                  color: '#1F7A5A',
                  fontFamily: 'Lato, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600
                }}
              >
                Indústria • 120 vidas
              </div>
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
              >
                Blindagem contra reajuste de 35%
              </h3>
              <p 
                className="text-lg mb-4"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                <strong style={{ color: '#0B2A45' }}>O Desafio:</strong> Operadora anunciou reajuste de 35% alegando "sinistralidade elevada". Sem dados transparentes, só um número.
              </p>
              <p 
                className="text-lg"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                <strong style={{ color: '#0B2A45' }}>A Intervenção:</strong> Auditoria técnica provou manipulação nos cálculos. Migração para operadora com reajuste de 12%. Contrato blindado com cláusula de transparência.
              </p>
              <div 
                className="mt-6 pt-4 border-t"
                style={{ borderColor: 'rgba(31, 122, 90, 0.2)' }}
              >
                <p 
                  className="text-2xl font-black"
                  style={{ color: '#1F7A5A', fontFamily: 'Montserrat, sans-serif' }}
                >
                  R$ 84 mil economizados/ano
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <StickyBarMobile />
    </div>
  );
}
