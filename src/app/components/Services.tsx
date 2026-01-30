import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingThumb, setIsDraggingThumb] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    startX: 0,
    scrollLeft: 0,
    velocity: 0,
    lastX: 0,
    lastTime: 0
  });

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
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Clube de\nVantagens',
      img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop'
    }
  ];

  // Duplicar itens para animação contínua
  const duplicatedServices = [...services, ...services];

  // Navegar para ConversionFooter ao clicar no card
  const handleCardClick = (e: React.MouseEvent) => {
    // Não navegar se estiver arrastando
    if (isDragging) {
      e.preventDefault();
      return;
    }
    
    // Scroll suave até o ConversionFooter
    const conversionFooter = document.querySelector('[data-section="conversion-footer"]') || 
                             document.getElementById('contact-section');
    
    if (conversionFooter) {
      conversionFooter.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.warn('ConversionFooter não encontrado');
    }
  };

  // Sincronizar barra com o scroll do carrossel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      if (isDraggingThumb) return; // Não atualizar se estiver arrastando a barra
      
      const scrollLeft = carousel.scrollLeft;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    };

    carousel.addEventListener('scroll', handleScroll);
    handleScroll(); // Chamada inicial

    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [isDraggingThumb]);

  // Arrastar a barra (thumb) para controlar o scroll
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingThumb(true);
    setIsPaused(true);

    const scrollbar = scrollbarRef.current;
    const carousel = carouselRef.current;
    if (!scrollbar || !carousel) return;

    const scrollbarRect = scrollbar.getBoundingClientRect();
    const thumbWidth = 80;
    const maxThumbPosition = 280 - thumbWidth;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const x = moveEvent.clientX - scrollbarRect.left;
      const thumbPosition = Math.max(0, Math.min(x - thumbWidth / 2, maxThumbPosition));
      const progress = thumbPosition / maxThumbPosition;
      
      // Atualizar scroll do carrossel
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      carousel.scrollLeft = progress * maxScroll;
      setScrollProgress(progress);
    };

    const handleMouseUp = () => {
      setIsDraggingThumb(false);
      setIsPaused(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Clicar na track da scrollbar
  const handleScrollbarClick = (e: React.MouseEvent) => {
    if (isDraggingThumb) return;
    
    const scrollbar = scrollbarRef.current;
    const carousel = carouselRef.current;
    if (!scrollbar || !carousel) return;

    const rect = scrollbar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = Math.max(0, Math.min(x / 280, 1));
    
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft = progress * maxScroll;
  };

  // Funções de drag and drop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    
    setIsDragging(true);
    setIsPaused(true);
    
    const carousel = carouselRef.current;
    dragStateRef.current = {
      startX: e.pageX - carousel.offsetLeft,
      scrollLeft: carousel.scrollLeft,
      velocity: 0,
      lastX: e.pageX,
      lastTime: Date.now()
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    
    e.preventDefault();
    const carousel = carouselRef.current;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - dragStateRef.current.startX) * 1.5; // Multiplicador para velocidade
    carousel.scrollLeft = dragStateRef.current.scrollLeft - walk;
    
    // Calcular velocidade para inércia
    const now = Date.now();
    const timeDiff = now - dragStateRef.current.lastTime;
    if (timeDiff > 0) {
      dragStateRef.current.velocity = (e.pageX - dragStateRef.current.lastX) / timeDiff;
    }
    dragStateRef.current.lastX = e.pageX;
    dragStateRef.current.lastTime = now;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    setIsPaused(false);
    
    // Aplicar inércia
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const velocity = dragStateRef.current.velocity;
    let momentum = velocity * 15; // Fator de momentum
    
    const applyMomentum = () => {
      if (Math.abs(momentum) > 0.5 && carousel) {
        carousel.scrollLeft -= momentum;
        momentum *= 0.95; // Desaceleração
        requestAnimationFrame(applyMomentum);
      }
    };
    
    if (Math.abs(velocity) > 0.1) {
      applyMomentum();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setIsPaused(false);
    }
  };

  // Prevenir comportamento padrão de arrastar imagens
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const preventDragHandler = (e: DragEvent) => e.preventDefault();
    const images = carousel.querySelectorAll('img');
    
    images.forEach(img => {
      img.addEventListener('dragstart', preventDragHandler);
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('dragstart', preventDragHandler);
      });
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#F8F8F8' }}>
      {/* CSS Animation for infinite scroll and scrollbar thumb */}
      <style>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes thumbAnimation {
          0% {
            transform: translate(0, -50%);
          }
          50% {
            transform: translate(200px, -50%);
          }
          100% {
            transform: translate(0, -50%);
          }
        }
        
          /* Disable CSS-driven marquee transform to avoid conflict with JS scroll/drag.
            The wrapper was being transformed (moved left) by this animation which
            conflicts with the manual 'scrollLeft' manipulation and drag handlers.
            Keeping the animation disabled allows the JS scroll/drag to move the
            cards as expected.
          */
        .marquee-container {
          animation: infiniteScroll 40s linear infinite;
        }
        .marquee-container.paused {
          animation-play-state: paused;
        }

        .animated-thumb { animation: thumbAnimation 40s linear infinite; }

        .animated-thumb.paused {
          animation-play-state: paused;
        }
        
        .draggable-carousel {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
        
        .draggable-carousel::-webkit-scrollbar {
          display: none;
        }
        
        .draggable-carousel {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
          <p 
            className="max-w-3xl mx-auto text-lg mt-6"
            style={{ color: '#4A5568', fontFamily: 'Lato, sans-serif' }}
          >
            Plano de Saúde Empresarial, Plano Odontológico, Seguro de Vida em Grupo e Seguro Patrimonial. Além de soluções personalizadas com telemedicina e clube de vantagens.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden px-5">
          <div 
            ref={carouselRef}
            className={`flex gap-8 marquee-container draggable-carousel ${isPaused ? 'paused' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              overflow: 'hidden'
            }}
          >
            {duplicatedServices.map((s, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={handleCardClick}
                style={{ cursor: isDragging ? 'grabbing' : 'pointer' }}
              >
                {/* Card Wrapper (mini div) */}
                <div 
                  className="relative transition-all duration-300 overflow-hidden"
                  style={{
                    paddingBottom: '16px',
                    borderRadius: '24px',
                    border: '1px solid rgba(31, 122, 90, 0.1)',
                    background: '#FFFFFF',
                    boxShadow: hoveredIndex === idx 
                      ? '0 8px 24px rgba(0, 0, 0, 0.12)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.04)',
                    transform: hoveredIndex === idx ? 'translateY(-4px)' : 'translateY(0)',
                    willChange: 'transform, box-shadow'
                  }}
                >
                  {/* Card Image Container */}
                  <div 
                    className="relative overflow-hidden transition-all duration-300"
                    style={{
                      width: '260px',
                      height: '320px',
                      borderRadius: '24px 24px 0 0'
                    }}
                  >
                    <img 
                      src={s.img} 
                      alt={s.title.replace('\n', ' ')} 
                      loading="lazy"
                      draggable={false}
                      onError={(e) => { 
                        const target = e.currentTarget as HTMLImageElement;
                        const fallback = '/photos/foto-fundo-main-people.png';
                        if (target.src !== fallback) target.src = fallback;
                      }}
                      className="w-full h-full object-cover transition-transform duration-500"
                      style={{
                        transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)',
                        objectPosition: hoveredIndex === idx ? '60% center' : '55% center',
                        willChange: 'transform, object-position'
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <div 
                      className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300"
                      style={{
                        background: hoveredIndex === idx 
                          ? 'rgba(59, 130, 145, 0.85)' 
                          : 'transparent',
                        opacity: hoveredIndex === idx ? 1 : 0
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

                  {/* Title Below Image inside card */}
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
                    
                    {/* Arrow indicator on hover */}
                    <div 
                      className="transition-all duration-300 flex-shrink-0 ml-2"
                      style={{
                        opacity: hoveredIndex === idx ? 1 : 0,
                        transform: hoveredIndex === idx ? 'translateX(0)' : 'translateX(-8px)'
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
            ))}
          </div>
        </div>

        {/**
          Custom Scrollbar wrapper commented out.
          Original markup for reference:

          <div className="flex justify-center mt-12">
            <div ref={scrollbarRef} className="relative cursor-pointer" style={{ width: '280px', height: '20px' }} onClick={handleScrollbarClick}>
              <div className="absolute top-1/2 left-0 right-0" style={{ height: '2px', background: '#E5E5E5', transform: 'translateY(-50%)' }} />
              <div className="absolute top-1/2 transition-transform duration-100" style={{ width: '80px', height: '4px', background: '#000000', borderRadius: '2px', transform: `translate(${scrollProgress * (280 - 80)}px, -50%)` }} onMouseDown={handleThumbMouseDown} />
            </div>
          </div>
        */}
      </div>
    </section>
  );
}
