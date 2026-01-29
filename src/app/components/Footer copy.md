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
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Logo and Description */}
        <div className="mb-8">
          <div className="mb-6">
            <img 
              src="/photos/logo-branca-verde.png" 
              alt="INSITE Logo" 
              className="h-20 w-auto object-contain" 
            />
          </div>
          <p 
            className="text-base leading-relaxed mb-8 max-w-xl"
            style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: 'Lato, sans-serif'
            }}
          >
            Consultoria de Seguros e Benefícios. Reduzimos custos e maximizamos resultados através de gestão inteligente e estratégica.
          </p>
          
          {/* Social Icons - Circular Style */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full hover:opacity-80 transition"
              style={{ background: '#1e4a5f' }}
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full hover:opacity-80 transition"
              style={{ background: '#1e4a5f' }}
              aria-label="Instagram"
            >
              <img src="/photos/icons/icon-instragram.png" alt="" className="w-5 h-5 object-contain opacity-90" />
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full hover:opacity-80 transition"
              style={{ background: '#1e4a5f' }}
              aria-label="Dribbble"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm9.31 5.67a10.34 10.34 0 01-2.54 5.57 20.18 20.18 0 00-5.75-2.72 31.75 31.75 0 00-1.26-2.45 10.43 10.43 0 019.55-.4zm-10.77-.4c.39.7.77 1.42 1.13 2.15a25.6 25.6 0 01-6.38.81h-.21c0-.08 0-.16.01-.24a10.39 10.39 0 015.45-2.72zM1.69 12v-.27c.08 0 .16.01.24.01 2.63 0 5.18-.45 7.57-1.32.24.47.47.95.69 1.43-2.84.87-5.29 2.63-7.07 5.05A10.37 10.37 0 011.69 12zm10.31 10.31a10.38 10.38 0 01-6.58-2.35c1.54-2.09 3.64-3.62 6.07-4.42a29.54 29.54 0 011.84 6.45 10.43 10.43 0 01-1.33.32zm2.82-.81a31.14 31.14 0 00-1.73-6.15 18.28 18.28 0 015.02 2.43 10.35 10.35 0 01-3.29 3.72zm3.94-5.19a20.06 20.06 0 00-5.49-2.62c.17-.36.34-.72.49-1.08a22.91 22.91 0 006.36 2.95 10.34 10.34 0 01-1.36.75z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full hover:opacity-80 transition"
              style={{ background: '#1e4a5f' }}
              aria-label="LinkedIn"
            >
              <img src="/photos/icons/icon-linkdin.png" alt="" className="w-5 h-5 object-contain opacity-90" />
            </a>
          </div>
        </div>
      </div>

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
                HOME
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
                ABOUT
              </a>
              <a 
                href="/solucoes"
                className="text-xs hover:text-white transition"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}
              >
                SERVICES
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
                PRICING
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
                CONTACT
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
