import { ProgressiveForm } from "./ProgressiveForm";
import { Phone, MessageCircle } from "lucide-react";

export function ConversionFooter() {
  return (
    <section 
      id="contact-section"
      data-section="conversion-footer"
      className="pt-4 pb-8 lg:pt-6 lg:pb-10 2xl:pt-10 2xl:pb-16 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, rgba(11, 42, 69, 0.98) 0%, rgba(6, 20, 35, 1) 100%)'
      }}
    >
      {/* Decorative top border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 z-20" 
        style={{ background: 'linear-gradient(90deg, transparent, #1F7A5A, transparent)' }} 
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div 
          className="absolute top-20 right-10 w-80 h-80 rounded-full blur-[100px] animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(31, 122, 90, 0.15) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-[120px] animate-pulse"
          style={{ 
            background: 'radial-gradient(circle, rgba(31, 122, 90, 0.12) 0%, transparent 70%)',
            animationDelay: '1s'
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-12 2xl:mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 lg:mb-6"
            style={{ 
              background: 'rgba(43, 176, 130, 0.15)',
              border: '1px solid rgba(43, 176, 130, 0.3)'
            }}
          >
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: '#2BB082' }}
            />
            <span 
              className="text-sm font-medium"
              style={{ color: '#2BB082', fontFamily: 'Lato, sans-serif' }}
            >
              Análise gratuita e sem compromisso
            </span>
          </div>

          <h2 
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-4 xl:mb-6 text-white leading-tight"
            style={{ 
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.03em'
            }}
          >
            DESCUBRA QUANTO SUA
            <br />
            <span 
              className="relative inline-block"
              style={{ 
                color: '#1F7A5A',
                textShadow: '0 0 40px rgba(31, 122, 90, 0.5)'
              }}
            >
              EMPRESA PODE ECONOMIZAR
            </span>
          </h2>
          
        </div>
          
        {/* Glassmorphism Container */}
        <div 
          className="rounded-3xl p-1 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(31, 122, 90, 0.15), rgba(31, 122, 90, 0.05))',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Animated Glass Reflection */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.15) 50%, transparent 60%)',
              animation: 'glassShine 8s ease-in-out infinite',
              backgroundSize: '200% 100%'
            }}
          />
          
          {/* Inner Glass Container */}
          <div 
            className="rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 2xl:p-16 relative"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 items-center">
          {/* Left Column - Informative Content */}
          <div className="lg:col-span-5 space-y-5 xl:space-y-6 2xl:space-y-8">
            {/* Header */}
            <div>
              <div 
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{ 
                  background: 'rgba(0, 255, 242, 0.15)',
                  border: '1px solid rgba(0, 255, 242, 0.3)'
                }}
              >
                <span 
                  className="text-sm font-semibold"
                    style={{ color: '#FFEE00', fontFamily: 'Lato, sans-serif' }}
                >
                  Vamos acelerar?
                </span>
              </div>
              
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 xl:mb-4 2xl:mb-6"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}
              >
                Dar o próximo <span style={{ color: '#FFEE00' }}>passo</span>
                <br />
                leva apenas um minuto!
              </h3>
            </div>

            {/* Step 1 */}
            <div className="flex gap-4">
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ 
                  background: 'rgba(0, 255, 242, 0.2)',
                  border: '2px solid rgba(0, 255, 242, 0.4)'
                }}
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="#FFEE00" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
              </div>
              
              <div className="flex-1">
                <h4 
                  className="text-lg lg:text-xl font-bold mb-1"
                  style={{ 
                    color: '#FFEE00',
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '0.02em'
                  }}
                >
                  PREENCHA O FORMULÁRIO
                </h4>
                <p 
                  className="text-white/80 leading-relaxed text-sm xl:text-base"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  Envie suas informações de contato. Todos os seus dados estarão seguros, vamos cuidar bem deles.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div 
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ 
                  background: 'rgba(0, 255, 242, 0.2)',
                  border: '2px solid rgba(0, 255, 242, 0.4)'
                }}
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="#FFEE00" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
              </div>
              
              <div className="flex-1">
                <h4 
                  className="text-lg lg:text-xl font-bold mb-1"
                  style={{ 
                    color: '#FFEE00',
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '0.02em'
                  }}
                >
                  RECEBA UMA LIGAÇÃO DE NOSSOS ESPECIALISTAS
                </h4>
                <p 
                  className="text-white/80 leading-relaxed text-sm xl:text-base"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  Um de nossos especialistas fará contato para agendar a reunião mais estratégica do seu ano. Juntos, criaremos um plano completo para estancar seus custos financeiros.
                </p>
              </div>
            </div>
          </div>

              {/* Right Column - Progressive Form Card */}
              <div className="lg:col-span-7 w-full">
                <div 
                  className="rounded-3xl p-1 shadow-2xl w-full max-w-2xl mx-auto lg:max-w-none lg:mx-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(31, 122, 90, 0.5), rgba(31, 122, 90, 0.1))'
                  }}
                >
                  <div 
                    className="rounded-3xl px-4 py-6 sm:px-6 sm:py-6 lg:px-8 lg:py-8 xl:px-10 xl:py-10 2xl:px-14 2xl:py-12 w-full"
                    style={{
                      background: 'rgba(255, 255, 255, 0.97)',
                      backdropFilter: 'blur(20px)'
                    }}
                  >
                    <ProgressiveForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Contact */}
        <div className="mt-8 xl:mt-12 2xl:mt-16 text-center">
          <p 
            className="text-white/60 mb-4 xl:mb-6"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Prefere falar diretamente com um consultor?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
            <a 
              href="tel:+5521992175903"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-6 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg"
              style={{ 
                background: 'rgba(31, 122, 90, 0.15)',
                border: '1px solid rgba(31, 122, 90, 0.4)',
                color: '#25D366',
                fontFamily: 'Lato, sans-serif'
              }}
            >
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span className="whitespace-nowrap">(21) 99217-5903</span>
            </a>
            
            <a 
              href="https://wa.me/5521992175903?text=Seja%20Bem%20Vindo!%0ASou%20o%20Italo%20Castellano%20e%20sou%20especialista%20em%20benef%C3%ADcios%20e%20seguros%20empresariais.%0AO%20que%20posso%20ajuda-lo%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center w-full sm:w-auto gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group"
              style={{ 
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                color: 'white',
                fontFamily: 'Lato, sans-serif',
                fontWeight: 600,
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
              
              <MessageCircle className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
              <span className="relative z-10">WhatsApp Direto</span>
            </a>
          </div>

          {/*<div className="mt-8">
            <p 
              className="text-lg font-semibold text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Italo Castellano
            </p>
            <p 
              className="text-white/60"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Consultor Empresarial
            </p>

          </div>*/}
        </div>
      </div>
    </section>
  );
}
