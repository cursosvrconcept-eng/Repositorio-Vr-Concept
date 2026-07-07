import React from 'react';
import { X } from 'lucide-react';
import Button from './Button';

const ProblemSection: React.FC = () => {
  return (
    <section 
        id="problem-section" 
        className="pt-12 pb-24 bg-brand-darkGray relative border-t border-white/5 scroll-mt-0 z-20"
    >
      <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-[1px] h-32 bg-gradient-to-b from-transparent via-brand-gold/40 to-transparent z-30 hidden md:block"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
        <div className="space-y-16">
          
          {/* Narrative Opening */}
          <div className="space-y-8 text-xl md:text-2xl text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            <p className="font-light">
              You finish the veneer. <span className="text-white font-medium">Perfect anatomy. Impeccable stratification.</span>
            </p>
            <p className="font-light">
              You apply the polishing rubbers, apply the paste... and that mirror-like shine appears.
            </p>
          </div>

          {/* Big Quote */}
          <div>
             <div className="relative py-8 text-center">
                 <div className="absolute left-1/2 -translate-x-1/2 top-0 text-6xl text-brand-gold/10 font-serif">"</div>
                 <p className="font-serif italic text-4xl md:text-5xl text-white inline-block relative z-10 px-8">
                    "It looks amazing."
                 </p>
                 <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
             </div>
          </div>

          {/* The Problem — matching exact PT layout */}
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              7 days later, the patient returns.
            </p>

            {/* Big heading: "And the shine? Gone." */}
            <p className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight">
              And the shine? <span className="text-red-500 italic">Gone.</span>
            </p>

            {/* Red bordered box like PT original */}
            <div className="border border-red-700/60 bg-red-950/10 py-4 px-6 rounded-xl mx-auto max-w-2xl">
              <p className="text-red-400 text-xl md:text-2xl font-medium text-center">
                The veneer is opaque, matte, with no light reflection.
              </p>
            </div>
          </div>

          {/* Dark card: "You created a fake shine" — matches PT dark card */}
          <div className="bg-[#0d0d0d] border border-red-900/40 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white border-l-4 border-red-600 pl-4 leading-tight">
                You created a <span className="text-red-500">fake shine.</span>
              </h3>
              <p className="text-white font-bold text-lg md:text-xl pl-5">
                And it's not coming back.
              </p>
              <p className="text-gray-400 text-base md:text-lg pl-5">
                Because you don't know the <strong className="text-brand-gold font-bold">3 golden rules</strong><br />of permanent polishing.
              </p>
            </div>
          </div>

          {/* Consequences Cards */}
          <div className="pt-2">
            <p className="text-white font-bold text-xl md:text-2xl text-center mb-8">
              The result of not having a technical protocol:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Constant rework",
                "Photos that don't impress",
                "Lifeless veneers"
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

          {/* Closing statement + CTA */}
          <div className="space-y-6 md:space-y-8 pt-8">
            <div className="bg-gradient-to-r from-transparent via-brand-gold/5 to-transparent border-t border-b border-brand-gold/10 py-6 px-4">
                <p className="text-3xl md:text-5xl font-serif text-center text-brand-goldLight leading-tight">
                  The problem isn't your hands. <br/><span className="text-white block mt-2 text-2xl md:text-4xl">It's the lack of a technical protocol.</span>
                </p>
            </div>

            <div className="flex flex-col items-center justify-center pt-2">
                <div className="relative group mb-8">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-gold/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-brand-gold/20 transition-all duration-500"></div>
                    <div className="relative bg-[#151515] p-3 md:p-4 rounded-xl border border-brand-gold/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] ring-1 ring-white/5 transform transition-transform duration-500 hover:scale-[1.02]">
                        <div className="relative overflow-hidden rounded-lg bg-brand-darkGray">
                            <img 
                                src="https://viniciusrosa.vrconcept.com.br/img/Capa%20Ebook%20Ingl%C3%AAs.webp" 
                                alt="Organic Flow Protocol PDF Guide" 
                                className="w-56 md:w-72 h-auto object-contain relative z-10"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed px-4">
                    Learn the <strong className="text-brand-gold font-bold">3 GOLDEN RULES</strong> for perfect polishing and make your resins look like ceramic.
                </p>
            </div>

            <div className="text-center pt-2">
                <Button variant="outline" className="w-full md:w-auto text-xl px-12 py-5 border-2 hover:shadow-[0_0_20px_rgba(201,166,97,0.3)] hover:scale-105 transition-transform duration-300">
                    I WANT TO LEARN THE 3 GOLDEN RULES
                </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;