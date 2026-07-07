import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import Button from './Button';

const OfferSection: React.FC = () => {
  const benefits = [
    "Guia Completo em PDF (protocolo passo a passo)",
    "Checklist de Cadeira (imprimível)",
    "Tabela de Materiais (marcas e rotações exatas)",
    "Troubleshooting Guide (problema → solução)",
    "2 Aulas Bônus",
    "Guia de Substituição de Materiais",
    "Acesso imediato e vitalício"
  ];

  return (
    <section id="offer" className="py-20 md:py-24 bg-brand-darkGray relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(201,166,97,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
            <div className="bg-[#0f0f0f] border border-brand-gold/30 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(201,166,97,0.1)] relative group">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://viniciusrosa.vrconcept.com.br/img/Background%20-%20Voce%20recebe%20hoje.webp" 
                        alt="" 
                        className="w-full h-full object-cover"
                        width={800}
                        height={600}
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/40 to-black/95"></div>
                </div>

                <div className="p-6 md:p-12 pb-0 relative z-10 flex flex-col items-center">
                    <div className="text-center mb-10">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3 drop-shadow-md">
                            Você recebe hoje:
                        </h2>
                        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto opacity-60 shadow-[0_0_15px_rgba(201,166,97,0.8)]"></div>
                    </div>

                    <div className="space-y-5 mb-12 w-full max-w-lg">
                        {benefits.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group/item">
                            <div className="shrink-0 w-6 h-6 rounded-full border border-brand-gold/40 flex items-center justify-center bg-brand-gold/5 text-brand-gold shadow-[0_0_10px_rgba(201,166,97,0.1)]">
                                <Check className="w-3.5 h-3.5" strokeWidth={3} />
                            </div>
                            <span className="text-gray-200 text-base md:text-lg font-light leading-snug drop-shadow-sm">{item}</span>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 px-6 md:px-12 py-10 bg-gradient-to-b from-white/5 to-black/80 border-t border-white/5 backdrop-blur-md">
                    <div className="text-center space-y-1 mb-8">
                        <p className="text-gray-400 text-sm md:text-base line-through font-medium opacity-60">De R$ 197,00</p>
                        <p className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em] pt-1 shadow-black drop-shadow-sm">
                            POR APENAS
                        </p>
                        <div className="flex items-baseline justify-center gap-1 text-white drop-shadow-xl py-1">
                            <span className="text-2xl font-serif font-light text-brand-goldLight">$</span>
                            <span className="text-6xl md:text-7xl font-serif font-medium text-white">47</span>
                            <span className="text-2xl font-serif font-light text-brand-goldLight">,00</span>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base font-light tracking-wide">Acesso vitalício</p>
                    </div>

                    <Button 
                        variant="primary" 
                        fullWidth 
                        className="!bg-none !bg-[#8c7335] hover:!bg-[#9e8b58] text-black font-bold uppercase tracking-widest text-sm md:text-base py-4 md:py-5 border-none shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_40px_rgba(140,115,53,0.3)] transition-all duration-300"
                    >
                        GARANTIR ACESSO POR R$ 47,00
                    </Button>

                    <div className="mt-8 bg-black/40 border border-white/5 rounded-xl p-5 flex gap-4 items-start">
                            <div className="shrink-0 mt-0.5">
                            <AlertCircle className="w-5 h-5 text-brand-gold opacity-70" />
                        </div>
                        <div>
                            <p className="text-brand-gold text-xs font-bold mb-1 uppercase tracking-wide opacity-90">Por que esse preço?</p>
                            <p className="text-xs text-gray-500 leading-relaxed font-light">
                                Este é um MVP. Estou validando se dentistas querem conteúdo técnico direto. Se funcionar, o preço sobe. Mas quem entra agora, garante acesso vitalício por este valor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 flex items-center justify-center gap-2 opacity-40 hover:opacity-60 transition-opacity">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Pagamento Seguro</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;