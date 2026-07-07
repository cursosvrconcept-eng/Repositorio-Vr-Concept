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

  // Using IntersectionObserver instead of measuring layout on scroll to prevent Forced Reflow
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // Trigger when 60% of the item is visible
      }
    );

    Array.from(container.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth / (window.innerWidth > 768 ? 2 : 1); 
      
      current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };
  
  // Auto-play using requestAnimationFrame logic for smoother transitions if needed
  useEffect(() => {
    const interval = setInterval(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
             if (scrollLeft + clientWidth >= scrollWidth - 10) {
                 scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
             } else {
                 scroll('right');
             }
        }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-charcoal to-brand-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-gray-200 mb-4">
            Resultados que você pode alcançar
            </h2>
            <p className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-medium">
                com as facetas Organic Flow
            </p>
        </div>

        <div className="relative group max-w-[1400px] mx-auto">
          <button 
            onClick={() => scroll('left')}
            className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 z-20 bg-brand-black/50 hover:bg-brand-gold text-white hover:text-brand-black p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/10"
            aria-label="Previous case"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 z-20 bg-brand-black/50 hover:bg-brand-gold text-white hover:text-brand-black p-4 rounded-full transition-all opacity-0 group-hover:opacity-100 backdrop-blur-md border border-white/10"
            aria-label="Next case"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex relative overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory scrollbar-hide pb-8 md:pb-12 px-2 items-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cases.map((imgSrc, index) => (
              <div 
                key={index} 
                data-index={index}
                className="shrink-0 snap-center relative h-[250px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden border border-white/10 group/item shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,166,97,0.15)] hover:border-brand-gold/30"
              >
                <img 
                  src={imgSrc} 
                  alt={`Caso Clínico ${index + 1}`} 
                  className="h-full w-auto max-w-none object-cover transition-transform duration-1000 group-hover/item:scale-105"
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={450}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-2">
             {cases.map((_, i) => (
                 <button 
                    key={i} 
                    onClick={() => {
                        if (scrollContainerRef.current) {
                            const container = scrollContainerRef.current;
                            const child = container.children[i] as HTMLElement;
                            if (child) {
                                const scrollPos = child.offsetLeft - (container.clientWidth / 2) + (child.offsetWidth / 2);
                                container.scrollTo({ left: scrollPos, behavior: 'smooth' });
                            }
                        }
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-12 bg-brand-gold' : 'w-2 bg-gray-700 hover:bg-gray-500'}`} 
                    aria-label={`Go to slide ${i + 1}`}
                 />
             ))}
          </div>
        </div>

        <p className="text-center text-xs md:text-sm text-gray-500 mt-8 md:mt-12 mb-8 md:mb-12 uppercase tracking-widest px-4">
            Todos os casos: protocolo aplicado pelo Dr. Vinicius Rosa
        </p>

        <div className="text-center">
            <Button variant="primary" withIcon className="text-base md:text-lg px-8 md:px-10 py-4 shadow-[0_0_30px_rgba(201,166,97,0.25)]">
                QUERO RESULTADOS ASSIM
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarousel;