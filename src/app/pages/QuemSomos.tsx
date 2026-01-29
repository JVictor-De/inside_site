import { Footer } from "../components/Footer";
import { StickyBarMobile } from "../components/StickyBarMobile";

export function QuemSomos() {
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
                Nossa História
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
              ESPECIALISTAS, NÃO VENDEDORES.
              <br />
              <span style={{ color: '#1F7A5A' }}>DADOS, NÃO PROMESSAS.</span>
            </h1>
            <p 
              className="text-xl mb-8"
              style={{ 
                color: 'rgba(255, 255, 255, 0.85)',
                fontFamily: 'Lato, sans-serif'
              }}
            >
              A INSITE existe porque PMEs de 50-200 vidas pagam 30-40% a mais em benefícios do que deveriam. Não por falta de opções, mas por falta de auditoria técnica. Nós corrigimos essa assimetria.
            </p>
          </div>
        </div>
      </section>

      {/* O Problema Que Vimos */}
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
                O MERCADO PUNE QUEM <span style={{ color: '#FF4444' }}>NÃO TEM ESTRUTURA</span>
              </h2>
              <p 
                className="text-lg mb-6 leading-relaxed"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                Depois de 12 anos negociando diretamente com subscrição de operadoras, identificamos o padrão que sangra PMEs:
              </p>
              <ul className="space-y-4">
                <li 
                  className="flex items-start gap-3"
                  style={{ fontFamily: 'Lato, sans-serif', color: '#4A5568' }}
                >
                  <div 
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: '#FF4444', flexShrink: 0 }}
                  />
                  <span><strong style={{ color: '#0B2A45' }}>Corretores vendem e somem.</strong> Só aparecem no aniversário com reajuste de 28% que você não tem argumento técnico para contestar.</span>
                </li>
                <li 
                  className="flex items-start gap-3"
                  style={{ fontFamily: 'Lato, sans-serif', color: '#4A5568' }}
                >
                  <div 
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: '#FF4444', flexShrink: 0 }}
                  />
                  <span><strong style={{ color: '#0B2A45' }}>Seguradoras exploram a assimetria.</strong> Sabem que você não tem atuário interno nem acesso às mesmas planilhas que elas.</span>
                </li>
                <li 
                  className="flex items-start gap-3"
                  style={{ fontFamily: 'Lato, sans-serif', color: '#4A5568' }}
                >
                  <div 
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: '#FF4444', flexShrink: 0 }}
                  />
                  <span><strong style={{ color: '#0B2A45' }}>Decisões por "confiança", não por dados.</strong> O CFO aprova porque "sempre foi assim". E o sangramento continua.</span>
                </li>
              </ul>
            </div>
            <div 
              className="rounded-2xl p-8"
              style={{
                background: 'linear-gradient(135deg, #F8FAFB 0%, #EDF2F7 100%)',
                border: '2px solid rgba(31, 122, 90, 0.2)'
              }}
            >
              <div 
                className="text-6xl font-black mb-4"
                style={{ 
                  color: '#FF4444',
                  fontFamily: 'Montserrat, sans-serif',
                  textShadow: '0 0 20px rgba(255, 68, 68, 0.3)'
                }}
              >
                R$ 2,8 MI
              </div>
              <p 
                className="text-xl font-semibold mb-2"
                style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
              >
                Desperdiçados por ano
              </p>
              <p 
                className="text-lg"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                Estimativa de quanto empresas brasileiras de 50-200 vidas perdem coletivamente por má gestão de benefícios (fonte: SUSEP, 2024).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section 
        className="py-24"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFB 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-extrabold mb-6"
              style={{ 
                color: '#0B2A45',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              QUEM AUDITA SUA APÓLICE
            </h2>
            <p 
              className="text-lg max-w-3xl mx-auto"
              style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
            >
              Especialistas com historial comprovado em subscrição, auditoria de sinistralidade e negociação institucional com operadoras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Founder 1 */}
            <div className="text-center">
              <div 
                className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
                  border: '3px solid rgba(31, 122, 90, 0.3)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                  alt="Italo Castellano"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
              >
                Italo Castellano
              </h3>
              <p 
                className="text-sm font-semibold mb-4"
                style={{ color: '#1F7A5A', fontFamily: 'Lato, sans-serif' }}
              >
                Founder & CEO
              </p>
              <p 
                className="text-base leading-relaxed"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                12 anos negociando contratos corporativos. Ex-subscritor de grande operadora nacional. Criou a metodologia de auditoria em 48h que identifica taxas ocultas, coberturas duplicadas e calcula com precisão o reajuste justo baseado em sinistralidade real.
              </p>
            </div>

            {/* Founder 2 - Placeholder */}
            <div className="text-center">
              <div 
                className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
                  border: '3px solid rgba(31, 122, 90, 0.3)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                  alt="Especialista"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
              >
                Rafael
              </h3>
              <p 
                className="text-sm font-semibold mb-4"
                style={{ color: '#1F7A5A', fontFamily: 'Lato, sans-serif' }}
              >
                Co-Founder & [Cargo]
              </p>
              <p 
                className="text-base leading-relaxed"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                [Bio do segundo sócio com foco em experiência de mercado, anos de atuação e expertise específica. Exemplo: especialista em negociação com grandes operadoras, background em atuária, etc.]
              </p>
            </div>
            
            {/* Founder 3 - Placeholder */}
            <div className="text-center">
              <div 
                className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1F7A5A 0%, #0B2A45 100%)',
                  border: '3px solid rgba(31, 122, 90, 0.3)'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                  alt="Especialista"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 
                className="text-2xl font-bold mb-2"
                style={{ color: '#0B2A45', fontFamily: 'Montserrat, sans-serif' }}
              >
                Noar
              </h3>
              <p 
                className="text-sm font-semibold mb-4"
                style={{ color: '#1F7A5A', fontFamily: 'Lato, sans-serif' }}
              >
                Co-Founder & [Cargo]
              </p>
              <p 
                className="text-base leading-relaxed"
                style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
                [Bio do segundo sócio com foco em experiência de mercado, anos de atuação e expertise específica. Exemplo: especialista em negociação com grandes operadoras, background em atuária, etc.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Estrutura */}
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
              ESTRUTURA ENXUTA. <span style={{ color: '#1F7A5A' }}>INTELIGÊNCIA CONCENTRADA.</span>
            </h2>
            <p 
              className="text-lg max-w-3xl mx-auto"
              style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
              >
              Nossa vantagem não está em metros quadrados de escritório. Está no acesso direto a decisores de 12 operadoras e em processos proprietários testados em R$ 47 milhões auditados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="p-8 rounded-2xl text-center"
              style={{
                background: 'rgba(31, 122, 90, 0.05)',
                border: '1px solid rgba(31, 122, 90, 0.1)'
              }}
            >
              <div 
                className="text-5xl font-black mb-4"
                style={{ color: '#1F7A5A', fontFamily: 'Montserrat, sans-serif' }}
              >
                12+
              </div>
              <p 
                className="text-lg font-semibold"
                style={{ color: '#0B2A45', fontFamily: 'Lato, sans-serif' }}
              >
                Operadoras Parceiras
              </p>
            </div>

            <div 
              className="p-8 rounded-2xl text-center"
              style={{
                background: 'rgba(31, 122, 90, 0.05)',
                border: '1px solid rgba(31, 122, 90, 0.1)'
              }}
            >
              <div 
                className="text-5xl font-black mb-4"
                style={{ color: '#1F7A5A', fontFamily: 'Montserrat, sans-serif' }}
              >
                48h
              </div>
              <p 
                className="text-lg font-semibold"
                style={{ color: '#0B2A45', fontFamily: 'Lato, sans-serif' }}
              >
                Tempo Médio de Diagnóstico
              </p>
            </div>

            <div 
              className="p-8 rounded-2xl text-center"
              style={{
                background: 'rgba(31, 122, 90, 0.05)',
                border: '1px solid rgba(31, 122, 90, 0.1)'
              }}
            >
              <div 
                className="text-5xl font-black mb-4"
                style={{ color: '#1F7A5A', fontFamily: 'Montserrat, sans-serif' }}
              >
                100%
              </div>
              <p 
                className="text-lg font-semibold"
                style={{ color: '#0B2A45', fontFamily: 'Lato, sans-serif' }}
              >
                Clientes com Economia Comprovada
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <StickyBarMobile />
    </div>
  );
}
