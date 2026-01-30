export function Footer() {
  return (
    <footer 
      className="relative text-white" 
      style={{ 
        backgroundImage: 'url(/photos/fundo-azul-escuro.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20" style={{ background: 'linear-gradient(90deg, transparent, #1F7A5A, transparent)' }} />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Logo and Social Icons Column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-8">
            <img 
              src="/photos/logo-branca-verde.png" 
              alt="INSITE Logo" 
              className="h-36 md:h-44 w-auto object-contain" 
            />
            
            {/* Social Icons - Below logo */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md hover:opacity-70 transition"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="Twitter"
              >
                  <img src="/photos/icons/icon-facebook.png" alt="" className="w-4 h-4 object-contain opacity-90" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md hover:opacity-70 transition"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="Instagram"
              >
                <img src="/photos/icons/icon-instragram.png" alt="" className="w-4 h-4 object-contain opacity-90" />
              </a>
            
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md hover:opacity-70 transition"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="LinkedIn"
              >
                <img src="/photos/icons/icon-linkdin.png" alt="" className="w-4 h-4 object-contain opacity-90" />
              </a>
                 <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md hover:opacity-70 transition"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="WhatsApp"
              >
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20.52 3.48A11.889 11.889 0 0 0 3.48 20.52L2 22l1.5-.4A11.889 11.889 0 0 0 20.52 3.48zM12 19.08a7.877 7.877 0 0 1-4.4-1.28l-.32-.2-2.62.69.68-2.56-.21-.33A7.877 7.877 0 0 1 12 7.08c2.08 0 4.03.81 5.51 2.29A7.877 7.877 0 0 1 19.92 14c0 2.08-.81 4.03-2.29 5.51A7.877 7.877 0 0 1 12 19.08zM16.67 14.16c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13-.18.26-.72.85-.88 1.03-.16.18-.33.2-.6.07-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.55-1.44-1.81-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.18.04-.33-.02-.46-.07-.13-.6-1.44-.82-1.98-.22-.52-.45-.45-.6-.45-.15 0-.33-.02-.5-.02-.17 0-.44.07-.67.33-.24.26-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.18 1.82 2.96 4.41 4.04 1.09.47 1.94.75 2.61.96.42.13.8.11 1.1.07.34-.05 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.26-.18-.55-.31z" />
                  </svg>
              </a>
             </div>
          </div>

          {/* Right Content - Text + Info stacked */}
          <div className="md:col-span-6 flex flex-col md:pl-12">
            {/* Hero Text */}
            <h3 
              className="text-3xl md:text-4xl font-light leading-tight"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: 'white'
              }}
            >
              Transformamos gestão de benefícios
            </h3>
            <p 
              className="text-xl mt-3 mb-10"
              style={{ 
                fontFamily: 'Lato, sans-serif',
                color: 'rgba(255, 255, 255, 0.6)'
              }}
            >
              em vantagem competitiva
            </p>
            
            {/* Info Grid - Same column as text */}
            <div className="grid grid-cols-2 gap-8">
              {/* Company Info */}
              <div>
                <h4 
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}
                >
                  LOCAL
                </h4>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'Lato, sans-serif'
                  }}
                >
                  Rio de Janeiro, RJ<br />
                  Brasil
                </p>
              </div>

              {/* Contact */}
              <div>
                <h4 
                  className="text-xs uppercase tracking-widest mb-4"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}
                >
                  CONTATO
                </h4>
                <a 
                  href="tel:+5521992175903"
                  className="text-sm hover:underline inline-block"
                  style={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontFamily: 'Lato, sans-serif'
                  }}
                >
                  55 21 99217-5903
                </a>
              </div>
            </div>
          </div>

          {/* Empty space */}
          <div className="md:col-span-2"></div>
        </div>
      </div>

      {/* Decorative bottom border */}
      {/*
      <div className="absolute bottom-0 left-0 right-0 h-1 z-20" style={{ background: 'linear-gradient(90deg, transparent, #1F7A5A, transparent)' }} />
      */}
      {/* Bottom Bar */}
      <div 
        className="border-t relative z-10"
        style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p 
              className="text-xs"
              style={{ 
                color: 'rgba(255, 255, 255, 0.5)',
                fontFamily: 'Lato, sans-serif',
                letterSpacing: '0.05em'
              }}
            >
              © 2025 INSITE. ALL RIGHTS RESERVED
            </p>

            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              <a 
                href="/"
                className="text-xs hover:text-white transition"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}
              >
                INÍCIO
              </a>
              <a 
                href="/quem-somos"
                className="text-xs hover:text-white transition"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}
              >
                SOBRE
              </a>
              <a 
                href="/resultados"
                className="text-xs hover:text-white transition"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}
              >
                RESULTADOS
              </a>
              <a 
                href="/diagnostico"
                className="text-xs hover:text-white transition"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}
              >
                CONTATO
              </a>

              {/* Scroll to Top Button */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:opacity-70 transition ml-2"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                aria-label="Voltar ao topo"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}