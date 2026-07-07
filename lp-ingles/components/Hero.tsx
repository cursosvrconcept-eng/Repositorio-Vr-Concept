import React from 'react';
import Button from './Button';
import { ShieldCheck, Zap, Check } from 'lucide-react';
import { useVariant } from './VariantContext';

const Hero: React.FC = () => {
  const { priceDisplay } = useVariant();
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-28 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[60vh] md:w-[90vw] md:h-[80vh] bg-brand-gold/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl flex flex-col items-center">
        {/* Badge - ORGANICFLOW PROTOCOL */}
        <div className="mb-6 md:mb-8 animate-fade-in-up opacity-0" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.2s' }}>
            <span className="text-brand-gold/80 text-[10px] md:text-sm uppercase tracking-[0.2em] font-bold border border-brand-gold/30 px-6 py-2 rounded-full backdrop-blur-sm bg-black/40 shadow-[0_0_15px_rgba(201,166,97,0.1)]">
                ORGANICFLOW PROTOCOL
            </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[2.5rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 md:mb-8 animate-fade-in-up opacity-0 px-1" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.4s' }}>
          3 Rules That Separate <br className="hidden md:block" />
          Fake Shine from <br className="hidden md:block" />
          <span className="text-brand-gold block mt-2 drop-shadow-[0_0_25px_rgba(201,166,97,0.25)]">
            Permanent Brilliance
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-2xl text-gray-400 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up opacity-0 px-2" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.6s' }}>
          Get access to the polishing protocol that eliminates opacity and staining in resin veneers — <strong className="text-white font-bold">tested on +1,500 direct veneers</strong>
        </p>

        {/* Checklist items - Balanced 2-2-1 layout */}
        <div className="flex flex-col items-center gap-2 md:gap-4 mb-10 md:mb-14 animate-fade-in-up opacity-0 w-full" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.7s' }}>
            <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-8 w-full max-w-3xl">
                <div className="flex items-center gap-2 px-4 py-1.5">
                    <Check className="w-4 h-4 text-brand-gold shrink-0" strokeWidth={3} />
                    <span className="text-gray-200 text-sm md:text-base font-medium whitespace-nowrap">Complete PDF (9 pages)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5">
                    <Check className="w-4 h-4 text-brand-gold shrink-0" strokeWidth={3} />
                    <span className="text-gray-200 text-sm md:text-base font-medium whitespace-nowrap">Chairside Checklist (printable)</span>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-8 w-full max-w-3xl">
                <div className="flex items-center gap-2 px-4 py-1.5">
                    <Check className="w-4 h-4 text-brand-gold shrink-0" strokeWidth={3} />
                    <span className="text-gray-200 text-sm md:text-base font-medium whitespace-nowrap">Troubleshooting Guide (problem → solution)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5">
                    <Check className="w-4 h-4 text-brand-gold shrink-0" strokeWidth={3} />
                    <span className="text-gray-200 text-sm md:text-base font-medium whitespace-nowrap">2 Bonus Video Lessons</span>
                </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5">
                <Check className="w-4 h-4 text-brand-gold shrink-0" strokeWidth={3} />
                <span className="text-gray-200 text-sm md:text-base font-medium">Material Substitution Guide</span>
            </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6 w-full animate-fade-in-up opacity-0 px-1" style={{ animation: 'fadeInUp 0.8s ease-out forwards 0.8s' }}>
          <Button 
            variant="primary" 
            fullWidth={false} 
            pulsing 
            className="w-full md:w-auto md:px-16 py-5 md:py-6 text-xl md:text-2xl font-black shadow-[0_0_40px_rgba(201,166,97,0.3)] tracking-wide uppercase bg-gradient-to-b from-brand-goldLight to-brand-goldDark text-brand-black rounded-xl hover:brightness-110 active:scale-[0.98] transition-all"
          >
            I WANT ACCESS TO THE PROTOCOL {priceDisplay}
          </Button>
          
          {/* Bottom Trust Bar */}
          <div className="flex items-center justify-center gap-6 text-[10px] sm:text-xs text-gray-500 font-bold tracking-[0.15em] uppercase mt-2">
                <span className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-brand-gold fill-brand-gold" /> 
                    INSTANT ACCESS
                </span>
                <span className="text-gray-800">|</span>
                <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3 h-3 text-brand-gold" /> 
                    7-DAY GUARANTEE
                </span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
      
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