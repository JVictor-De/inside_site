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
                <img src="/photos/icons/icon-whatsapp.png" alt="" className="w-4 h-4 object-contain opacity-90" />
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