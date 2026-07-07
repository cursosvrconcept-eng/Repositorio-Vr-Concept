import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import Button from './Button';
import { useVariant } from './VariantContext';

const GuaranteeSection: React.FC = () => {
  const { priceDisplay } = useVariant();
  return (
    <section className="py-24 bg-black relative overflow-hidden">
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-brand-charcoal/40 backdrop-blur-md border border-brand-gold/20 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 shadow-2xl">
          
          <div className="shrink-0 relative group">
             <div className="absolute inset-0 bg-brand-gold/20 blur-[40px] rounded-full group-hover:bg-brand-gold/30 transition-all duration-500"></div>
             
             <div className="w-48 h-48 md:w-56 md:h-56 relative flex items-center justify-center">
                 <div className="absolute inset-0 border border-brand-gold/30 rounded-full scale-110"></div>
                 <div className="absolute inset-0 border border-dashed border-brand-gold/20 rounded-full scale-125 animate-[spin_20s_linear_infinite]"></div>

                 <div className="absolute inset-2 bg-gradient-to-br from-brand-goldLight to-brand-goldDark rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center border-4 border-[#4a3b18]">
                    <div className="absolute inset-1 border border-brand-gold/50 rounded-full"></div>
                    <ShieldCheck className="w-20 h-20 md:w-24 md:h-24 text-[#2a2210] drop-shadow-sm" />
                 </div>
                 
                 <div className="absolute -bottom-6 bg-[#1a1a1a] border border-brand-gold text-brand-gold text-sm md:text-base font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                    7 Days
                 </div>
             </div>
          </div>

          <div className="text-center lg:text-left flex-1">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
              7-Day <span className="text-brand-gold block md:inline">Unconditional Guarantee</span>
            </h2>
            
            <div className="space-y-5 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                <p>
                    Access the material. Study the content. <strong className="text-white font-medium">Test it on your next case.</strong>
                </p>
                <p>
                    If it doesn't make sense, send an email. <span className="text-brand-gold font-bold">We'll refund 100% of the value.</span>
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-8 py-2">
                    <span className="flex items-center gap-2 text-white font-medium"><div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-500"/></div> No questions asked.</span>
                    <span className="flex items-center gap-2 text-white font-medium"><div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-500"/></div> No bureaucracy.</span>
                </div>
                
                <div className="bg-white/5 border-l-4 border-brand-gold p-4 md:p-6 rounded-r-lg mt-6">
                    <p className="text-gray-200 italic text-base md:text-lg">
                        "This guarantee exists because the content works. And we want you to have complete confidence in your decision."
                    </p>
                </div>
            </div>
            
            <div className="mt-10">
                <Button variant="primary" className="text-lg md:text-xl px-10 py-5 shadow-[0_0_30px_rgba(201,166,97,0.25)] hover:shadow-[0_0_50px_rgba(201,166,97,0.4)] transition-all duration-300 transform hover:-translate-y-1 h-auto whitespace-normal">
                    <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                        <span>TEST WITHOUT RISK</span>
                        <span className="whitespace-nowrap">{priceDisplay}</span>
                    </span>
                </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;