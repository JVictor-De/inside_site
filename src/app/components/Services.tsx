import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      title: 'Plano\nOdontológico',
      img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Plano de\nSaúde',
      img: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Seguro\nde Vida',
      img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Seguro\nPatrimonial',
      img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Tele-\nmedicina',
      img: '/photos/foto-fundo-main-people.png'
    },
    {
      title: 'Clube de\nVantagens',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop'
    }
    ,
    {
      title: 'NR1\nSegurança',
      img: '/photos/NR1.png'
    },
    {
      title: 'Assistência\nFuneral',
      img: 'https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Tíquete Alimentação e\nRefeição',
      img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'CCT - Acordos\nSindicais',
      img: '/photos/AcordoSidicais.png'
    }
  ];

  // Navegar para ConversionFooter ao clicar no card
  const handleCardClick = () => {
    const conversionFooter = document.querySelector('[data-section="conversion-footer"]') || 
                             document.getElementById('contact-section');
    
    if (conversionFooter) {
      conversionFooter.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/diagnostico';
    }
  };

  // Card component para reutilização
  const ServiceCard = ({ s, globalIdx }: { s: typeof services[0], globalIdx: number }) => (
    <div 
      className="flex-shrink-0"
      onMouseEnter={() => setHoveredIndex(globalIdx)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div 
        className="relative transition-all duration-300 overflow-hidden"
        style={{
          paddingBottom: '16px',
          borderRadius: '24px',
          border: '1px solid rgba(31, 122, 90, 0.1)',
          background: '#FFFFFF',
          boxShadow: hoveredIndex === globalIdx 
            ? '0 8px 24px rgba(0, 0, 0, 0.12)' 
            : '0 2px 8px rgba(0, 0, 0, 0.04)',
          transform: hoveredIndex === globalIdx ? 'translateY(-4px)' : 'translateY(0)'
        }}
      >
        <div 
          className="relative overflow-hidden transition-all duration-300 card-image-size"
        >
          <img 
            src={s.img} 
            alt={s.title.replace('\n', ' ')} 
            loading="lazy"
            draggable={false}
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              const fallback = '/photos/foto-fundo-main-people.png';
              if (t.src !== fallback) t.src = fallback;
            }}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: hoveredIndex === globalIdx ? 'scale(1.05)' : 'scale(1)',
              objectPosition: s.title.includes('Tele') ? 'right center' : 'center'
            }}
          />
          
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300"
            style={{
              background: hoveredIndex === globalIdx 
                ? 'rgba(59, 130, 145, 0.85)' 
                : 'transparent',
              opacity: hoveredIndex === globalIdx ? 1 : 0
            }}
          >
            <span 
              className="text-white text-xl text-center"
              style={{ 
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 400
              }}
            >
              Solicitar<br />Cotação
            </span>
          </div>
        </div>

        <div className="mt-4 px-4 flex items-center justify-between">
          <h3 
            className="text-base font-semibold leading-tight whitespace-pre-line"
            style={{ 
              color: '#0B2A45',
              fontFamily: 'Lato, sans-serif'
            }}
          >
            {s.title}
          </h3>
          
          <div 
            className="transition-all duration-300 flex-shrink-0 ml-2"
            style={{
              opacity: hoveredIndex === globalIdx ? 1 : 0,
              transform: hoveredIndex === globalIdx ? 'translateX(0)' : 'translateX(-8px)'
            }}
          >
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: '#1F7A5A' }}
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#F8F8F8' }}>
      <style>{`
        /* Card image responsive sizes */
        .card-image-size {
          width: 260px;
          height: 320px;
          border-radius: 24px 24px 0 0;
        }
        
        @media (max-width: 768px) {
          .card-image-size {
            width: 200px;
            height: 260px;
          }
        }
        
        /* Infinite marquee animation */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        
        .marquee-track:hover,
        .marquee-track.paused {
          animation-play-state: paused;
        }
        
        .marquee-group {
          display: flex;
          gap: 2rem;
          padding-right: 2rem;
          flex-shrink: 0;
        }
        
        @media (max-width: 768px) {
          .marquee-group {
            gap: 1rem;
            padding-right: 1rem;
          }
          .marquee-track {
            animation-duration: 25s;
          }
        }
      `}</style>
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, transparent, #1F7A5A, transparent)' }} />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ 
              background: 'rgba(31, 122, 90, 0.1)',
              border: '1px solid rgba(31, 122, 90, 0.2)'
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
              O Que Fazemos
            </span>
          </div>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{ 
              color: '#0B2A45',
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '-0.02em'
            }}
          >
            SOLUÇÕES INTELIGENTES
            <br />
            <span style={{ color: '#1F7A5A' }}>PARA SUA EMPRESA</span>
          </h2>
        </div>

        {/* Infinite Marquee Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className={`marquee-track ${isPaused ? 'paused' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* First group */}
            <div className="marquee-group">
              {services.map((s, idx) => (
                <ServiceCard key={`a-${idx}`} s={s} globalIdx={idx} />
              ))}
            </div>
            
            {/* Duplicate group for seamless loop */}
            <div className="marquee-group">
              {services.map((s, idx) => (
                <ServiceCard key={`b-${idx}`} s={s} globalIdx={idx + services.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
