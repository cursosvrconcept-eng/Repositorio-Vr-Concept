import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent flex flex-col">
      {/* Urgency Bar */}
      <div className="w-full bg-gradient-to-r from-red-900 via-red-600 to-red-900 text-white text-center py-2 px-2 font-bold uppercase tracking-[0.1em] text-[9px] md:text-xs shadow-lg animate-pulse border-b border-red-500/30">
        OFFER VALID FOR THE FIRST 50 STUDENTS
      </div>

      <div className="container mx-auto px-4 md:px-6 py-3 md:py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="w-20 sm:w-28 md:w-48 transition-all duration-300 opacity-90 hover:opacity-100 shrink-0">
          <img 
            src="https://viniciusrosa.vrconcept.com.br/img/Logo%20VR%20Concept%20Dourada.png" 
            alt="VR Concept Signature Logo" 
            className="w-full h-auto object-contain"
            width="192"
            height="80"
            // @ts-ignore
            fetchpriority="high"
            decoding="async"
          />
        </div>
        
        {/* Botão de Ação */}
        <div className="flex-1 flex justify-end">
          <Button 
            variant="outline" 
            className="text-[9px] sm:text-xs md:text-sm px-3 py-2 md:px-6 md:py-2.5 border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-black font-bold tracking-wider uppercase whitespace-nowrap"
          >
            ENSURE ACCESS
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;