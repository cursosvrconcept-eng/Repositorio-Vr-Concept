import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import caso01Img from '../assets/caso-01.webp';
import caso02Img from '../assets/caso-02.webp';
import caso03Img from '../assets/caso-03.webp';
import caso04Img from '../assets/caso-04.webp';
import caso05Img from '../assets/caso-05.webp';
import caso06Img from '../assets/caso-06.webp';
import caso07Img from '../assets/caso-07.webp';

const cases = [
  { img: caso01Img, label: "Alinhamentos perfeitos", category: "ALINHAMENTO" },
  { img: caso02Img, label: "Brilho que Encanta", category: "TRANSLUCIDEZ" },
  { img: caso03Img, label: "Contorno de excelência", category: "CONTORNO" },
  { img: caso04Img, label: "Naturalidade Extrema", category: "ESTÉTICA" },
  { img: caso05Img, label: "Transformação Completa", category: "REABILITAÇÃO" },
  { img: caso06Img, label: "Detalhes Precisos", category: "ACABAMENTO" },
  { img: caso07Img, label: "Textura Natural", category: "TEXTURA" }
];

export default function ResultsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const itemWidth = 352; // 320px width + 32px gap
      const maxScroll = current.scrollWidth - current.clientWidth;
      
      let nextScroll = current.scrollLeft + (direction === 'left' ? -itemWidth : itemWidth);
      
      // Loop infinito lógico
      if (direction === 'right' && current.scrollLeft >= maxScroll - 10) {
        nextScroll = 0;
      } else if (direction === 'left' && current.scrollLeft <= 0) {
        nextScroll = maxScroll;
      }
      
      current.scrollTo({ left: nextScroll, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto flex items-center justify-center gap-4">
      {/* Setas posicionadas fora da área das fotos */}
      <button 
        onClick={() => scroll('left')} 
        className="hidden md:flex shrink-0 bg-white/5 hover:bg-[var(--color-gold-primary)] text-white p-3 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-12 snap-x scrollbar-hide scroll-smooth w-full max-w-[1000px]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {[...cases, ...cases].map((caso, i) => (
          <motion.div 
            key={i} 
            className="flex-none w-[280px] md:w-[320px] snap-center group"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-[var(--color-gold-primary)]/50">
              <img 
                src={caso.img} 
                alt={caso.label} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
            
            <div className="mt-6 text-center">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[var(--color-gold-primary)] mb-2 block">
                {caso.category}
              </span>
              <h3 className="font-display text-xl text-[var(--color-text-primary)]">
                {caso.label}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <button 
        onClick={() => scroll('right')} 
        className="hidden md:flex shrink-0 bg-white/5 hover:bg-[var(--color-gold-primary)] text-white p-3 rounded-full border border-white/10 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}