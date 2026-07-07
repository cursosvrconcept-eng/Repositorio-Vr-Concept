import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button';

const cases = [
  "https://viniciusrosa.vrconcept.com.br/img/Caso%201.webp",
  "https://viniciusrosa.vrconcept.com.br/img/Caso%202.webp",
  "https://viniciusrosa.vrconcept.com.br/img/Caso%203.webp",
  "https://viniciusrosa.vrconcept.com.br/img/Caso%204.webp",
  "https://viniciusrosa.vrconcept.com.br/img/Caso%205.webp",
  "https://viniciusrosa.vrconcept.com.br/img/Caso%206.webp",
];

const ResultsCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.offsetWidth * 0.8; 
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Autoplay logic
    const interval = setInterval(() => {
        const { scrollLeft, scrollWidth, offsetWidth } = container;
        if (scrollLeft + offsetWidth >= scrollWidth - 20) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            scroll('right');
        }
    }, 5000);

    // Intersection Observer substitui o pesado "onScroll" para detectar o elemento ativo sem Forced Reflow
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setActiveIndex(index);
        }
      });
    }, {
      root: container,
      threshold: 0.6 // Dispara apenas quando o item estiver 60% visível
    });

    const children = Array.from(container.children);
    children.forEach(child => observer.observe(child));

    return () => {
      clearInterval(interval);
      children.forEach(child => observer.unobserve(child));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-charcoal to-brand-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-gray-200 mb-4">
            Resultados que puedes alcanzar
            </h2>
            <p className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-medium">
                con las carillas Organic Flow
            </p>
        </div>

        <div className="relative group max-w-[1400px] mx-auto">
          {/* Botões de Navegação */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-brand-black/80 hover:bg-brand-gold text-white hover:text-brand-black w-12 h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/10 shadow-xl"
            aria-label="Previous case"
          >
            <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-brand-black/80 hover:bg-brand-gold text-white hover:text-brand-black w-12 h-12 lg:w-14 lg:h-14 items-center justify-center rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/10 shadow-xl"
            aria-label="Next case"
          >
            <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
          </button>

          {/* Carousel Container (Removido onScroll para zero reflows) */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-8 snap-x snap-mandatory scrollbar-hide pb-8 md:pb-12 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cases.map((imgSrc, index) => (
              <div 
                key={index} 
                data-index={index}
                className="flex-shrink-0 snap-center relative h-[320px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10 group/item cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-[0_0_50px_rgba(201,166,97,0.2)] hover:border-brand-gold/40 bg-brand-charcoal/50"
              >
                <img 
                  src={imgSrc} 
                  alt={`Caso Clínico ${index + 1}`}
                  width="400"
                  height="450"
                  className="h-full w-auto object-contain transition-transform duration-1000 group-hover/item:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Sombra interna sutil para profundidade */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Dots Indicator (Otimizado para Transform ScaleX) */}
          <div className="flex justify-center gap-3 mt-4">
             {cases.map((_, i) => (
                 <button 
                    key={i} 
                    onClick={() => {
                        if (scrollContainerRef.current) {
                            const child = scrollContainerRef.current.children[i] as HTMLElement;
                            scrollContainerRef.current.scrollTo({ left: child.offsetLeft - 24, behavior: 'smooth' });
                        }
                    }}
                    className="relative h-1.5 w-10 flex items-center justify-center group" 
                    aria-label={`Go to slide ${i + 1}`}
                 >
                    <div className={`absolute inset-0 rounded-full transition-transform duration-500 origin-center ${i === activeIndex ? 'bg-brand-gold scale-x-100' : 'bg-gray-800 scale-x-[0.2] group-hover:bg-gray-600'}`}></div>
                 </button>
             ))}
          </div>
        </div>

        <p className="text-center text-xs md:text-sm text-gray-500 mt-12 mb-8 md:mb-12 uppercase tracking-widest px-4 font-medium opacity-80">
            Todos los casos: protocolo aplicado por el Dr. Vinicius Rosa
        </p>

        <div className="text-center">
            <Button variant="primary" withIcon className="text-base md:text-lg px-8 md:px-10 py-4 shadow-[0_0_30px_rgba(201,166,97,0.25)] hover:shadow-[0_0_50px_rgba(201,166,97,0.4)]">
                QUIERO RESULTADOS ASÍ
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarousel;