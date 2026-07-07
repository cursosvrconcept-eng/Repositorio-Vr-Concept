import React from 'react';
import { Mail, Lock, ShieldCheck, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8">
          
          {/* 1. Brand & Trust Column */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 w-full md:w-auto">
            
            {/* Logo & Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-40 md:w-48 opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 mb-4">
                <img 
                    src="https://viniciusrosa.vrconcept.com.br/img/Logo%20VR%20Concept%20Dourada.png" 
                    alt="VR Concept" 
                    width="192"
                    height="80"
                    className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(201,166,97,0.15)]"
                />
                </div>
                <p className="text-gray-500 text-sm tracking-wide font-light max-w-xs leading-relaxed">
                Elevando el estándar de la estética con protocolos validados.
                </p>
            </div>

            {/* Trust Indicators List */}
            <div className="flex flex-col gap-6 items-start">
                
                {/* Item 1 */}
                <div className="flex items-center gap-4 text-gray-400 group hover:text-white transition-colors duration-300">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center group-hover:border-brand-gold/30 transition-all shadow-lg">
                        <Zap className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="text-base md:text-lg font-light tracking-wide">Acceso inmediato tras el pago</span>
                </div>
                
                {/* Item 2 */}
                <div className="flex items-center gap-4 text-gray-400 group hover:text-white transition-colors duration-300">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center group-hover:border-brand-gold/30 transition-all shadow-lg">
                        <ShieldCheck className="w-5 h-5 text-brand-gold" />
                    </div>
                    <span className="text-base md:text-lg font-light tracking-wide">Garantía incondicional de 7 días</span>
                </div>

                {/* Item 3 - Email */}
                <a href="mailto:contato@vrconcept.com.br" className="flex items-center gap-4 text-gray-400 group hover:text-white transition-colors duration-300">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center group-hover:border-brand-gold/30 transition-all shadow-lg">
                        <Mail className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-base font-light tracking-wide">Soporte vía e-mail:</span>
                        <span className="font-medium text-brand-gold text-lg tracking-wide">contato@vrconcept.com.br</span>
                    </div>
                </a>
            </div>

          </div>

          {/* 2. Security & Legal (Right) */}
          <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto mt-4 md:mt-0 border-t md:border-t-0 border-white/5 pt-8 md:pt-0">
            
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/5 text-gray-300 text-xs uppercase tracking-wider hover:bg-white/10 transition-colors shadow-inner">
                <Lock className="w-4 h-4 text-green-500" />
                <span className="font-semibold">Pago 100% seguro</span>
            </div>

            <div className="text-center md:text-right space-y-2">
                <p className="text-gray-600 text-xs">
                    &copy; {new Date().getFullYear()} VR Concept. Todos los derechos reservados.
                </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;