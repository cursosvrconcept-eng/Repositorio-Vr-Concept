import React from 'react';
import Button from './Button';

const LastCallSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden flex items-center justify-center min-h-[80vh] md:min-h-[90vh] bg-black">
       {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black"></div>
        {/* Subtle radial glow to focus attention to center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(circle_at_center,rgba(160,131,74,0.15)_0%,transparent_60%)] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left Column: Copy & Offer */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-none text-center lg:text-left">
                {/* Copy Impactante */}
                <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
                    <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
                        Estudiaste años. Te dedicaste.
                    </p>
                    
                    <h2 className="text-3xl md:text-5xl text-white font-bold leading-tight">
                        No dejes que la falta de un protocolo arruine todo lo demás.
                    </h2>
                    
                    <div className="py-2 md:py-4">
                        <p className="text-2xl md:text-4xl font-serif italic text-brand-gold drop-shadow-[0_0_15px_rgba(201,166,97,0.3)] leading-tight">
                            El "efecto vidrio" no es suerte.<br/>
                            <span className="text-white not-italic font-sans text-xl md:text-3xl mt-3 block">Es técnica. Y la técnica se aprende.</span>
                        </p>
                    </div>
                </div>

                {/* Offer Box - Integrated in Column */}
                <div className="relative w-full group">
                    {/* Glow effect behind box */}
                    <div className="absolute inset-0 bg-brand-gold/10 blur-[60px] rounded-3xl pointer-events-none group-hover:bg-brand-gold/15 transition-all duration-500"></div>
                    
                    <div className="bg-[#0a0a0a] p-6 md:p-10 rounded-3xl border border-brand-gold/50 shadow-[0_0_40px_rgba(201,166,97,0.1)] relative">
                        
                        {/* Badge Flutuante */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-brand-gold text-black font-bold px-6 py-2 rounded-full text-xs uppercase tracking-[0.15em] shadow-[0_4px_20px_rgba(201,166,97,0.4)] whitespace-nowrap z-30">
                            Última Llamada
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
                            {/* Price Block */}
                            <div className="text-center lg:text-left shrink-0">
                                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1 font-bold">Acceso Inmediato</p>
                                <div className="relative inline-block">
                                    <span className="text-6xl md:text-7xl font-serif text-white font-bold tracking-tighter drop-shadow-md relative z-10 block leading-none">
                                        <span className="text-2xl align-top opacity-60 mr-1.5 font-sans font-normal relative top-1">$</span>
                                        9.00
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm mt-2 font-medium">
                                    Pago único
                                </p>
                            </div>

                            {/* Divider (Desktop) */}
                            <div className="hidden md:block w-[1px] h-24 bg-white/10"></div>

                            {/* CTA Block */}
                            <div className="flex-1 w-full">
                                <Button variant="primary" fullWidth pulsing className="text-lg md:text-xl py-5 shadow-[0_0_30px_rgba(201,166,97,0.3)] hover:shadow-[0_0_60px_rgba(201,166,97,0.5)] transition-all duration-300">
                                    GARANTIZAR ACCESO AHORA
                                </Button>
                                <p className="text-center lg:text-left text-gray-500 text-xs mt-3 flex items-center justify-center lg:justify-start gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                    Garantía de 7 días • Riesgo Cero
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Framed Image */}
            <div className="w-full max-w-md lg:max-w-md shrink-0 relative order-first lg:order-last">
                 {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-gold/40 to-brand-goldDark/10 rounded-[2.2rem] blur-sm opacity-60"></div>
                
                {/* The Frame */}
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0f0f0f] group transform transition-transform duration-700 hover:scale-[1.01]">
                    
                    {/* Inner Border */}
                    <div className="absolute inset-0 border border-brand-gold/20 rounded-[2rem] z-20 pointer-events-none"></div>
                    
                    {/* Image */}
                    <div className="relative aspect-[3/4] w-full">
                        <img 
                            src="https://viniciusrosa.vrconcept.com.br/img/Foto%20Dr%20Vinicius%202.webp" 
                            alt="Dr. Vinicius Rosa - Cirurgião Dentista"
                            width="400"
                            height="533"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            loading="lazy"
                        />
                        {/* Gradient Overlay for Text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
                        
                        {/* Floating Text on Image */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-center z-30">
                            <p className="font-serif italic text-white text-xl md:text-2xl mb-2 leading-tight">
                                "Te veo del otro lado."
                            </p>
                            <div className="h-0.5 w-12 bg-brand-gold mx-auto mb-2 opacity-70"></div>
                            <p className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em]">
                                Dr. Vinícius Rosa
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default LastCallSection;