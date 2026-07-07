import React from 'react';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

const VisualProof: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="font-serif text-3xl md:text-5xl text-center text-white mb-10 md:mb-16">
          Veja a Diferença Real
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 max-w-6xl mx-auto items-start relative">
          <div className="hidden lg:flex absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-brand-black border border-white/10 rounded-full items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.8)]">
            <ArrowRight className="text-gray-500 w-6 h-6" />
          </div>

          {/* LEFT: Before */}
          <div className="group relative flex flex-col rounded-2xl overflow-hidden border border-red-900/40 shadow-[0_0_40px_rgba(127,29,29,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(127,29,29,0.25)] bg-brand-charcoal">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
               <div className="absolute top-4 left-4 z-20">
                    <span className="flex items-center gap-2 bg-red-600/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg border border-red-400/30">
                        <AlertCircle className="w-4 h-4" />
                        Brilho Falso
                    </span>
                </div>
                <img 
                    src="https://viniciusrosa.vrconcept.com.br/img/Foto%20antes.webp" 
                    alt="Faceta com brilho falso"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    width={400}
                    height={500}
                    loading="lazy"
                />
            </div>
            <div className="p-6 md:p-8 bg-gradient-to-b from-brand-charcoal to-brand-black border-t border-white/5 relative z-10">
                <div className="space-y-4">
                    <div className="flex items-center justify-between text-gray-400 border-b border-white/10 pb-3">
                        <span className="text-xs md:text-sm uppercase tracking-wider font-medium">Imediato</span>
                        <span className="text-white font-serif italic text-sm md:text-base">Espelhada</span>
                    </div>
                    <div className="flex items-center justify-between text-red-300 border-b border-white/10 pb-3">
                        <span className="text-xs md:text-sm uppercase tracking-wider font-medium opacity-80">7 Dias</span>
                        <span className="font-bold text-red-400 text-sm md:text-base">Opaca, sem vida</span>
                    </div>
                    <div className="flex items-center justify-between text-red-300">
                        <span className="text-xs md:text-sm uppercase tracking-wider font-medium opacity-80">30 Dias</span>
                        <span className="font-bold text-red-500 text-sm md:text-base">Manchada</span>
                    </div>
                </div>
            </div>
          </div>

          {/* RIGHT: After */}
          <div className="group relative flex flex-col mt-0 lg:mt-0 rounded-2xl overflow-hidden border border-brand-gold/50 shadow-[0_0_50px_rgba(201,166,97,0.15)] transition-all duration-500 hover:shadow-[0_0_80px_rgba(201,166,97,0.25)] ring-1 ring-white/10 bg-brand-charcoal">
             <div className="relative aspect-[4/5] w-full overflow-hidden">
                <div className="absolute top-4 left-4 z-20">
                    <span className="flex items-center gap-2 bg-emerald-600/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg border border-emerald-400/30">
                        <CheckCircle2 className="w-4 h-4" />
                        Organic Flow
                    </span>
                </div>
                <img 
                    src="https://viniciusrosa.vrconcept.com.br/img/Caso%206.webp" 
                    alt="Faceta com Protocolo OrganicFlow"
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    width={400}
                    height={500}
                    loading="lazy"
                />
            </div>
            <div className="p-6 md:p-8 bg-gradient-to-b from-brand-charcoal to-brand-black border-t border-brand-gold/20 relative z-10">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between text-emerald-100 border-b border-brand-gold/10 pb-3">
                        <span className="text-xs md:text-sm uppercase tracking-wider font-medium">Imediato</span>
                        <span className="text-white font-serif italic text-sm md:text-base">Efeito Vidro</span>
                    </div>
                    <div className="flex items-center justify-between text-brand-gold border-b border-brand-gold/10 pb-3">
                        <span className="text-xs md:text-sm uppercase tracking-wider font-medium text-emerald-100/80">7 Dias</span>
                        <span className="font-bold text-sm md:text-base">Brilho Intacto</span>
                    </div>
                    <div className="flex items-center justify-between text-brand-gold">
                        <span className="text-xs md:text-sm uppercase tracking-wider font-medium text-emerald-100/80">30 Dias</span>
                        <span className="font-bold text-sm md:text-base">Idêntica ao dia 1</span>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-20">
          <p className="inline-block text-xl md:text-3xl font-serif italic text-gray-300 leading-relaxed border-b border-brand-gold/30 pb-4 px-4">
            "A diferença não está na resina. <br className="md:hidden" /> Está na sequência técnica de polimento."
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisualProof;