import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { StickyBarMobile } from "../components/StickyBarMobile";

export function Solucoes() {
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
                Inteligência de Benefícios
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
              NÃO VENDEMOS APÓLICES.
              <br />
              <span style={{ color: '#1F7A5A' }}>GERIMOS INTELIGÊNCIA.</span>
            </h1>
            <p 
              className="text-xl mb-8 leading-relaxed"
              style={{ 
                color: 'rgba(255, 255, 255, 0.85)',
                fontFamily: 'Lato, sans-serif'
              }}
            >
              Sua empresa não precisa de mais um corretor que some depois da venda. Precisa de gestão cirúrgica que audita, negocia e blinda contra reajustes abusivos. Mês após mês.
            </p>
          </div>
        </div>
      </section>

      {/* O "Braço Direito" do RH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="text-4xl font-extrabold mb-6"
                style={{ 
                  color: '#0B2A45',
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                ENQUANTO VOCÊ CUIDA DO NEGÓCIO, <span style={{ color: '#1F7A5A' }}>NÓS CUIDAMOS DA BUROCRACIA</span>
              </h2>
              <p 
                className="text-lg mb-6 leading-relaxed"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                O RH não deveria gastar 40 horas por mês resolvendo sinistros, atualizando cadastros ou explicando a diferença entre coparticipação e franquia.
              </p>
            </div>
            <div className="space-y-4">
              <div 
                className="p-6 rounded-xl"
                style={{
                  background: 'rgba(31, 122, 90, 0.05)',
                  border: '1px solid rgba(31, 122, 90, 0.15)'
                }}
              >
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
                >
                  ✓ Movimentação Cadastral 100% Assumida
                </h3>
                <p 
                  className="text-base"
                  style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
                >
                  Admissões, demissões, alterações de dependentes. Você envia a planilha, nós operamos junto à seguradora.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{
                  background: 'rgba(31, 122, 90, 0.05)',
                  border: '1px solid rgba(31, 122, 90, 0.15)'
                }}
              >
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
                >
                  ✓ Suporte Direto aos Colaboradores
                </h3>
                <p 
                  className="text-base"
                  style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
                >
                  Dúvidas sobre rede credenciada, autorizações, reembolsos. Canal direto sem passar pelo seu RH.
                </p>
              </div>

              <div 
                className="p-6 rounded-xl"
                style={{
                  background: 'rgba(31, 122, 90, 0.05)',
                  border: '1px solid rgba(31, 122, 90, 0.15)'
                }}
              >
                <h3 
                  className="text-lg font-bold mb-2"
                  style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
                >
                  ✓ Relatórios de Sinistralidade Mensais
                </h3>
                <p 
                  className="text-base"
                  style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
                >
                  Dashboards executivos com alertas de tendências que podem virar reajuste. Dados que o CFO entende.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* CTA Final */}
      <section 
        className="py-24"
        style={{ background: 'linear-gradient(180deg, #F8FAFB 0%, #FFFFFF 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            className="text-3xl font-extrabold mb-6"
            style={{ 
              color: '#0B2A45',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
            Sua empresa precisa de mais do que uma corretora. <span style={{ color: '#1F7A5A' }}>Precisa de gestão.</span>
          </h2>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-5 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
              fontFamily: 'Lato, sans-serif'
            }}
          >
            Simular Gestão Estratégica
          </button>
        </div>
      </section>
      <Footer />
      <StickyBarMobile />
    </div>
  );
}
