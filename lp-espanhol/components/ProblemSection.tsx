import React from 'react';
import { X } from 'lucide-react';
import Button from './Button';

const ProblemSection: React.FC = () => {
  return (
    <section 
        id="problem-section" 
        className="pt-12 pb-24 bg-brand-darkGray relative border-t border-white/5 scroll-mt-0 z-20"
    >
      {/* Visual Connector Line from Hero */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent z-30 hidden md:block"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
        <div className="space-y-16">
          
          {/* Introdução Narrativa */}
          <div className="space-y-8 text-xl md:text-2xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            <div>
                <p className="font-light">
                Finalizas la carilla. <span className="text-white font-medium">Anatomía perfecta.</span> Estratificación impecable.
                </p>
            </div>
            <div>
                <p className="font-light">
                Pasas las gomas, aplicas pasta... ese brillo espejado aparece.
                </p>
            </div>
          </div>

          {/* Citação em Destaque */}
          <div>
             <div className="relative py-8 text-center">
                 <div className="absolute left-1/2 -translate-x-1/2 top-0 text-6xl text-brand-gold/10 font-serif">"</div>
                 <p className="font-serif italic text-4xl md:text-5xl text-white inline-block relative z-10 px-8">
                    Quedó increíble.
                 </p>
                 <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
             </div>
          </div>

          {/* O Ponto de Virada */}
          <div className="space-y-8 text-center">
            <p className="text-xl md:text-2xl text-gray-400">
              7 días después, el paciente regresa.
            </p>
            <div className="space-y-4">
                <p className="font-serif text-4xl md:text-5xl text-white">
                ¿Y el brillo? <span className="text-red-500 font-bold italic">Desapareció.</span>
                </p>
                <p className="text-red-400 font-medium text-xl md:text-2xl max-w-2xl mx-auto border border-red-900/30 bg-red-950/10 py-3 rounded-lg">
                La carilla está opaca, mate, sin reflejo de luz.
                </p>
            </div>
          </div>
          
          {/* Caixa de Diagnóstico do Problema */}
          <div>
              <div className="bg-[#0f0f0f] p-8 md:p-12 rounded-2xl border border-red-900/30 shadow-[0_0_40px_rgba(153,27,27,0.05)] relative overflow-hidden group hover:border-red-900/50 transition-colors duration-500">
                {/* Efeito de brilho vermelho sutil ao fundo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/5 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-red-600 pl-4">
                        Creaste un <span className="text-red-500">brillo falso</span>.
                    </h3>
                    
                    <div className="space-y-6">
                        <p className="text-xl md:text-2xl text-white font-medium">
                            Y no volverá.
                        </p>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                            Porque no conoces las <span className="text-brand-gold font-bold">3 reglas de oro</span> <br className="hidden md:block" />
                            del pulido permanente.
                        </p>
                    </div>
                </div>
              </div>
          </div>

          {/* Consequências */}
          <div className="pt-6">
            <p className="font-bold text-2xl md:text-3xl text-white mb-8 text-center">Y continuar así significa:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Retrabajo constante",
                "Fotos que no impresionan",
                "Carillas sin vida"
              ].map((item, idx) => (
                <div key={idx} className="bg-brand-black border border-white/5 p-6 rounded-xl text-center hover:border-red-900/30 transition-colors">
                   <div className="bg-red-900/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="w-6 h-6 text-red-500" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bloco Final Agrupado: Conclusão + Mockup + CTA */}
          <div className="space-y-6 md:space-y-8 pt-8">
            
            {/* Conclusão Impactante - Padding reduzido */}
            <div className="bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent border-t border-b border-brand-gold/10 py-6 px-4">
                <p className="text-3xl md:text-5xl font-serif text-center text-brand-goldLight leading-tight">
                El problema no es tu mano. <br/><span className="text-white block mt-2 text-2xl md:text-4xl">Es la falta de protocolo técnico.</span>
                </p>
            </div>

            {/* Mockup do Ebook Moldurado */}
            <div className="flex flex-col items-center justify-center pt-2">
                
                {/* Moldura Premium */}
                <div className="relative group mb-8">
                    {/* Glow de Fundo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-gold/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-brand-gold/20 transition-all duration-500"></div>
                    
                    {/* Container Físico (Moldura) */}
                    <div className="relative bg-[#151515] p-3 md:p-4 rounded-xl border border-brand-gold/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/5 transform transition-transform duration-500 hover:scale-[1.02]">
                        <div className="relative overflow-hidden rounded-lg bg-brand-darkGray">
                            <img 
                                src="https://viniciusrosa.vrconcept.com.br/img/Mockup%20Ebook.png" 
                                alt="Mockup Ebook Protocolo Organic Flow" 
                                className="w-56 md:w-72 h-auto object-contain relative z-10"
                                loading="lazy"
                                width="288"
                                height="400"
                            />
                        </div>
                    </div>
                </div>

                {/* Texto de Suporte */}
                <p className="text-center text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed px-4">
                    Aprende las <strong className="text-brand-gold font-bold">3 REGLAS DE ORO</strong> para un pulido perfecto y haz que tus resinas parezcan cerámicas.
                </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-2">
                <Button variant="outline" className="w-full md:w-auto text-xl px-12 py-5 border-2 hover:shadow-[0_0_20px_rgba(201,166,97,0.3)] hover:scale-105 transition-transform duration-300">
                QUIERO APRENDER LAS 3 REGLAS DE ORO
                </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;