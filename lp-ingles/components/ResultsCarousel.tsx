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
      const scrollAmount = window.innerWidth > 768 ? 600 : 320; 
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    
    // Calcula o centro exato do container visível na tela
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    
    let closestIndex = 0;
    let minDistance = Infinity;
    
    // Encontra qual imagem está mais próxima do centro
    Array.from(container.children).forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(childCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    
    setActiveIndex(closestIndex);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, offsetWidth } = scrollContainerRef.current;
             if (scrollLeft + offsetWidth >= scrollWidth - 20) {
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
            Results you can achieve
            </h2>
            <p className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-medium">
                WITH ORGANIC FLOW VENEERS
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
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory scrollbar-hide pb-8 md:pb-12 px-2 items-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cases.map((imgSrc, index) => (
              <div 
                key={index} 
                className="snap-center relative shrink-0 h-[320px] md:h-[450px] min-w-[280px] rounded-xl overflow-hidden border border-white/10 group/item cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,166,97,0.15)] hover:border-brand-gold/30 bg-[#0a0a0a]"
              >
                <img 
                  src={imgSrc} 
                  alt={`Elite Transformation Case ${index + 1}`} 
                  className="w-auto h-full object-cover transition-transform duration-1000 group-hover/item:scale-105"
                  loading="lazy"
                  decoding="async"
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
                            const child = scrollContainerRef.current.children[i];
                            if (child) {
                                child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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
            All real cases performed by Dr. Vinícius Rosa
        </p>

        <div className="text-center">
            <Button variant="primary" withIcon className="text-base md:text-lg px-8 md:px-10 py-4 shadow-[0_0_30px_rgba(201,166,97,0.25)]">
                I WANT RESULTS LIKE THESE
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsCarousel;