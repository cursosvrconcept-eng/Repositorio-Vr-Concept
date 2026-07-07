import React from 'react';
import Button from './Button';

const InstructorSection: React.FC = () => {
  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          <div className="w-full md:w-1/2 order-1 md:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay z-10"></div>
                <img 
                    src="https://viniciusrosa.vrconcept.com.br/img/Dr%20Vinicius%201.webp" 
                    alt="Dr. Vinícius Rosa - Dental Surgeon" 
                    className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold/20 rounded-2xl -z-10 hidden md:block"></div>
          </div>

          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h2 className="font-serif text-4xl text-white mb-2">Dr. Vinícius Rosa</h2>
            <p className="text-brand-gold font-medium mb-8 tracking-wide uppercase text-sm">
                Dental Surgeon | 10+ Years Experience | +1,500 Direct Veneers Completed
            </p>

            <blockquote className="relative pl-6 border-l-2 border-brand-gold/50 space-y-5 text-gray-300 text-lg leading-relaxed italic mb-10">
                <p>
                    "In the beginning, I made veneers that lost their shine within days. I blamed the resin, the rubbers, the patient.
                </p>
                <p>
                    Until I understood: the problem was the lack of a method.
                </p>
                <p>
                    When I organized the protocol into fixed steps, everything changed. The shine was maintained. The photos improved. The follow-up appointments disappeared.
                </p>
                <p className="font-medium text-white not-italic">
                    This is the exact protocol I've used for years. Now in an applicable format."
                </p>
            </blockquote>

            <Button variant="outline" className="w-full md:w-auto text-sm md:text-base">
                I WANT TO LEARN FROM SOMEONE WHO HAS DONE +1,500 CASES
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstructorSection;