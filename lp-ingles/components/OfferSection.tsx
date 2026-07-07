import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import Button from './Button';
import { useVariant } from './VariantContext';

const OfferSection: React.FC = () => {
  const { priceDisplay, priceWhole } = useVariant();
  const benefits = [
    "Complete PDF Guide (step-by-step polishing protocol)",
    "Chairside Checklist (printable)",
    "Materials Table (exact brands and RPMs)",
    "Troubleshooting Guide (problem → solution)",
    "2 Bonus Video Lessons",
    "Material Substitution Guide",
    "Immediate and lifetime access"
  ];

  return (
    <section id="offer" className="py-20 md:py-24 bg-brand-darkGray relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(201,166,97,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
            
            <div className="bg-[#0f0f0f] border border-brand-gold/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(201,166,97,0.15)] relative group transition-all duration-500 hover:border-brand-gold/60">
                
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://viniciusrosa.vrconcept.com.br/img/Background%20-%20Voce%20recebe%20hoje.webp" 
                        alt="Organic Flow Protocol Background" 
                        className="w-full h-full object-cover opacity-100"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>

                <div className="bg-brand-gold text-brand-black font-extrabold text-xs md:text-sm uppercase tracking-[0.2em] py-3 text-center w-full shadow-md relative z-20">
                    YOU RECEIVE TODAY
                </div>

                <div className="p-6 md:p-12 relative z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="text-center mb-8 md:mb-10 relative z-10">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
                            What you receive today:
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full opacity-50"></div>
                    </div>

                    <div className="space-y-3 md:space-y-4 mb-10 md:mb-12 relative z-10">
                        {benefits.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 md:gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                            <div className="bg-brand-gold/10 p-1 rounded-full shrink-0 mt-0.5 border border-brand-gold/20">
                                <Check className="w-3 h-3 md:w-4 md:h-4 text-brand-gold" strokeWidth={3} />
                            </div>
                            <span className="text-gray-200 text-sm md:text-lg font-light leading-snug">{item}</span>
                        </div>
                        ))}
                    </div>

                    <div className="text-center bg-brand-charcoal/30 -mx-6 md:-mx-12 px-6 md:px-12 py-8 md:py-10 border-t border-white/5 border-b border-white/5 backdrop-blur-sm relative">
                        <div className="flex flex-col items-center justify-center gap-1 mb-8">
                            <p className="text-gray-500 text-base md:text-lg line-through font-medium">Value $47.00</p>
                            
                            <div className="flex flex-col items-center">
                                <span className="text-brand-gold font-bold uppercase tracking-wider text-[10px] md:text-sm mb-1">One-Time Access For</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl md:text-3xl text-white font-serif">$</span>
                                    <span className="text-5xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-brand-goldLight to-brand-gold drop-shadow-sm">{priceWhole}</span>
                                    <span className="text-2xl md:text-3xl text-white font-serif">.00</span>
                                </div>
                            </div>
                            
                            <p className="text-gray-400 mt-2 font-medium text-sm md:text-base">Instant Digital Delivery</p>
                        </div>

                        <Button variant="primary" fullWidth pulsing className="text-base md:text-xl py-4 md:py-5 shadow-[0_0_30px_rgba(201,166,97,0.4)] hover:shadow-[0_0_50px_rgba(201,166,97,0.6)] transform hover:-translate-y-1 transition-all duration-300 whitespace-normal h-auto">
                            <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                                <span>SECURE ACCESS FOR</span>
                                <span className="whitespace-nowrap">{priceDisplay}</span>
                            </span>
                        </Button>
                    </div>

                    <div className="mt-8 relative z-10">
                        <div className="bg-brand-charcoal/50 border border-brand-gold/10 rounded-xl p-5 md:p-6 flex gap-4 items-start hover:border-brand-gold/20 transition-colors">
                            <div className="shrink-0 mt-1">
                                <AlertCircle className="w-5 h-5 text-brand-gold/80" />
                            </div>
                            <div>
                                <p className="text-brand-gold font-bold text-sm mb-1 uppercase tracking-wide">Why this price?</p>
                                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                                    We're making this protocol available at this investment to celebrate our digital launch. Lock in your access now before the price returns to normal.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="text-center mt-6 flex items-center justify-center gap-2 opacity-60">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest">100% SECURE PAYMENT • INSTANT ACCESS</p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default OfferSection;