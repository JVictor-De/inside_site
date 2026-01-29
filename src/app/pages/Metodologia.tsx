import { HowWeWork } from "../components/HowWeWork";
import { Footer } from "../components/Footer";
import { StickyBarMobile } from "../components/StickyBarMobile";

export function Metodologia() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section 
        className="py-24 relative"
        style={{
          background: 'linear-gradient(135deg, #0B2A45 0%, #0a1f33 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
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
                Auditoria Contínua
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
              O TRABALHO NÃO TERMINA
              <br />
              <span style={{ color: '#1F7A5A' }}>NA VENDA. É UM CICLO VIVO.</span>
            </h1>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ 
                color: 'rgba(255, 255, 255, 0.85)',
                fontFamily: 'Lato, sans-serif'
              }}
            >
              Enquanto corretores tradicionais entregam cotações e somem, a INSITE opera em auditoria contínua. Monitoramento mensal de sinistralidade, negociação preventiva de reajustes e benchmarking constante de mercado.
            </p>
            <div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
              style={{
                background: 'rgba(255, 68, 68, 0.1)',
                border: '1px solid rgba(255, 68, 68, 0.3)'
              }}
            >
              <svg className="w-5 h-5" style={{ color: '#FF4444' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span 
                className="text-sm font-semibold"
                style={{ color: '#FFFFFF', fontFamily: 'Lato, sans-serif' }}
              >
                Alerta: 72% das PMEs renovam contratos no automático e pagam 28% a mais
              </span>
            </div>
          </div>
        </div>
      </section>

      <HowWeWork />

      {/* Seção: Por Que Isso Funciona */}
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
              POR QUE A METODOLOGIA <span style={{ color: '#1F7A5A' }}>CIRÚRGICA FUNCIONA</span>
            </h2>
            <p 
              className="text-lg max-w-3xl mx-auto"
              style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
            >
              Não é mágica. É dado, processo e relacionamento direto com decisores de operadoras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(31, 122, 90, 0.05)',
                border: '2px solid rgba(31, 122, 90, 0.15)'
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(31, 122, 90, 0.1)' }}
              >
                <svg className="w-8 h-8" style={{ color: '#1F7A5A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
              >
                Dados que Operadoras Escondem
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                Temos acesso a planilhas de sinistralidade detalhadas que seu corretor atual nunca pediu. Isso muda o jogo na hora de negociar.
              </p>
            </div>

            <div 
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(31, 122, 90, 0.05)',
                border: '2px solid rgba(31, 122, 90, 0.15)'
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(31, 122, 90, 0.1)' }}
              >
                <svg className="w-8 h-8" style={{ color: '#1F7A5A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
              >
                Relacionamento Direto com Decisores
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                Não negociamos com vendedores de operadoras. Falamos com subscrição e diretoria comercial. Pulamos 3 níveis de hierarquia.
              </p>
            </div>

            <div 
              className="p-8 rounded-2xl"
              style={{
                background: 'rgba(31, 122, 90, 0.05)',
                border: '2px solid rgba(31, 122, 90, 0.15)'
              }}
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(31, 122, 90, 0.1)' }}
              >
                <svg className="w-8 h-8" style={{ color: '#1F7A5A' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-bold mb-3"
                style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
              >
                Processos Proprietários Testados
              </h3>
              <p 
                className="leading-relaxed"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                12 anos otimizando a mesma metodologia. Cada etapa tem checklist técnico e gatilhos de alerta que previnem surpresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section 
        className="py-24"
        style={{ background: 'linear-gradient(135deg, #0B2A45 0%, #0a1f33 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl font-extrabold mb-6"
            style={{ 
              color: '#FFFFFF',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Quer ver a metodologia aplicada à sua realidade?
          </h2>
          <p 
            className="text-xl mb-8"
            style={{ color: 'rgba(255, 255, 255, 0.85)', fontFamily: 'Lato, sans-serif' }}
          >
            Compartilhe sua apólice atual. Em 48h você tem um diagnóstico cirúrgico gratuito.
          </p>
          <button
            onClick={() => {
              window.location.href = '/diagnostico';
            }}
            className="px-10 py-5 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, #1F7A5A 0%, #14503d 100%)',
              fontFamily: 'Lato, sans-serif'
            }}
          >
            Solicitar Análise Gratuita
          </button>
        </div>
      </section>
      <Footer />
      <StickyBarMobile />
    </div>
  );
}
