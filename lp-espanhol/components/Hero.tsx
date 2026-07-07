import React from 'react';
import Button from './Button';
import { ShieldCheck, Zap, Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center pt-36 md:pt-44 pb-20 overflow-hidden bg-black">
      {/* Deep Black Background with subtle gold glow */}
      <div className="absolute inset-0 z-0">
         {/* Base Black */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Central Glow - Very subtle to highlight text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none opacity-40"></div>
        
        {/* Noise Texture - Very low opacity for texture only */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        
        {/* Vignette to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl flex flex-col items-center justify-center h-full">
        
        {/* Pre-headline */}
        <div className="mb-6 animate-fade-in-up opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.2s' }}>
            <span className="text-brand-gold/80 text-[10px] md:text-sm uppercase tracking-[0.25em] font-medium border border-brand-gold/20 px-3 py-1.5 md:px-4 md:py-1.5 rounded-full backdrop-blur-sm">
                PROTOCOLO ORGANICFLOW
            </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 md:mb-8 animate-fade-in-up opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.4s' }}>
          3 Reglas Que Separan <br className="hidden md:block" />
          el Brillo Falso del <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-brand-gold via-brand-goldLight to-brand-gold bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(201,166,97,0.2)] block md:inline mt-2 md:mt-0">
            Brillo Permanente
          </span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up opacity-0 px-2" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.6s' }}>
          Accede al protocolo de pulido que elimina la opacidad y
          las manchas en carillas de resina — <strong className="text-white font-medium">probado en +1500 carillas directas</strong>
        </p>

        {/* List of Deliverables */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-3 md:gap-x-8 md:gap-y-4 mb-10 animate-fade-in-up opacity-0 w-full max-w-4xl" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.7s' }}>
            <div className="flex items-center gap-2 justify-start md:justify-center bg-white/5 md:bg-transparent px-4 py-2 md:p-0 rounded-lg md:rounded-none border border-white/5 md:border-none">
                <div className="bg-brand-gold/20 p-0.5 rounded-full shrink-0"><Check className="w-4 h-4 text-brand-gold" /></div>
                <span className="text-gray-300 text-sm md:text-base font-medium text-left">PDF completo (9 páginas)</span>
            </div>
            <div className="flex items-center gap-2 justify-start md:justify-center bg-white/5 md:bg-transparent px-4 py-2 md:p-0 rounded-lg md:rounded-none border border-white/5 md:border-none">
                <div className="bg-brand-gold/20 p-0.5 rounded-full shrink-0"><Check className="w-4 h-4 text-brand-gold" /></div>
                <span className="text-gray-300 text-sm md:text-base font-medium text-left">Checklist Clínico (imprimible)</span>
            </div>
            <div className="flex items-center gap-2 justify-start md:justify-center bg-white/5 md:bg-transparent px-4 py-2 md:p-0 rounded-lg md:rounded-none border border-white/5 md:border-none">
                <div className="bg-brand-gold/20 p-0.5 rounded-full shrink-0"><Check className="w-4 h-4 text-brand-gold" /></div>
                <span className="text-gray-300 text-sm md:text-base font-medium text-left">Guía de Solución de Problemas</span>
            </div>
            <div className="flex items-center gap-2 justify-start md:justify-center bg-white/5 md:bg-transparent px-4 py-2 md:p-0 rounded-lg md:rounded-none border border-white/5 md:border-none">
                <div className="bg-brand-gold/20 p-0.5 rounded-full shrink-0"><Check className="w-4 h-4 text-brand-gold" /></div>
                <span className="text-gray-300 text-sm md:text-base font-medium text-left">2 Clases de Bono</span>
            </div>
            <div className="flex items-center gap-2 justify-start md:justify-center bg-white/5 md:bg-transparent px-4 py-2 md:p-0 rounded-lg md:rounded-none border border-white/5 md:border-none">
                <div className="bg-brand-gold/20 p-0.5 rounded-full shrink-0"><Check className="w-4 h-4 text-brand-gold" /></div>
                <span className="text-gray-300 text-sm md:text-base font-medium text-left">Guía de Sustitución de Materiales</span>
            </div>
        </div>

        {/* CTA & Trust Badges */}
        <div className="flex flex-col items-center gap-8 mb-8 w-full animate-fade-in-up opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.8s' }}>
          
          <Button 
            variant="primary" 
            fullWidth={false} 
            pulsing 
            className="w-full sm:w-auto px-4 sm:px-8 md:px-14 py-4 md:py-6 text-base sm:text-xl md:text-2xl font-extrabold shadow-[0_0_50px_rgba(201,166,97,0.5)] hover:shadow-[0_0_80px_rgba(201,166,97,0.8)] tracking-wide border border-white/20 hover:scale-105 transition-all duration-300 brightness-110 whitespace-normal h-auto leading-tight"
          >
            <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                <span>QUIERO ACCESO AL PROTOCOLO</span>
                <span className="whitespace-nowrap">$ 9.00</span>
            </span>
          </Button>
          
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6 text-[10px] md:text-xs text-gray-500 font-bold tracking-[0.15em] uppercase px-4">
            <span className="flex items-center gap-2"><Zap className="w-3 h-3 md:w-4 md:h-4 text-brand-gold fill-brand-gold" /> ACCESO INMEDIATO</span>
            <span className="text-brand-charcoal h-4 w-[1px] bg-gray-800 block"></span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-brand-gold" /> 7 DÍAS DE GARANTÍA</span>
          </div>
        </div>
      </div>
      
      {/* Gradient Fade - Taller for smoother blend */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-80 bg-gradient-to-t from-brand-darkGray via-brand-darkGray/60 to-transparent pointer-events-none z-10"></div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;