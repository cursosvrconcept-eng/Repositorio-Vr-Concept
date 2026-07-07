import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent flex flex-col">
      {/* Urgency Bar */}
      <div className="w-full bg-gradient-to-r from-red-900 via-red-600 to-red-900 text-white text-center py-2.5 px-4 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-lg animate-pulse border-b border-red-500/30">
        Oferta válida para os primeiros 50 alunos
      </div>

      <div className="container mx-auto px-4 md:px-6 py-4 md:py-6 flex justify-between items-center">
        <div className="w-28 md:w-48 transition-all duration-300 opacity-90 hover:opacity-100">
          <img 
            src="https://viniciusrosa.vrconcept.com.br/img/Logo%20VR%20Concept%20Dourada.png" 
            alt="VR Concept Logo" 
            className="w-full h-auto object-contain"
            fetchPriority="high"
            width="192"
            height="60"
          />
        </div>
        
        {/* O botão CTA permanece para conversão imediata, mas discreto */}
        <div>
          <Button variant="outline" className="text-[10px] md:text-sm px-4 py-2 md:px-7 md:py-2.5 border-brand-gold/50 text-brand-gold hover:bg-brand-gold hover:text-black font-semibold tracking-wider">
            GARANTIR ACESSO
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;