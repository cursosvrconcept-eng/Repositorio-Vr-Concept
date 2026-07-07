import React from 'react';
import Button from './Button';

const InstructorSection: React.FC = () => {
  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
          
          {/* Image */}
          <div className="w-full md:w-1/2 order-1 md:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay z-10"></div>
                <img 
                    src="https://viniciusrosa.vrconcept.com.br/img/Dr%20Vinicius%201.webp" 
                    alt="Dr. Vinícius Rosa" 
                    width="600"
                    height="600"
                    className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold/20 rounded-2xl -z-10 hidden md:block"></div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h2 className="font-serif text-4xl text-white mb-2">Dr. Vinícius Rosa</h2>
            <p className="text-brand-gold font-medium mb-8 tracking-wide uppercase text-sm">
                Cirujano dentista | +10 años de experiencia | +1.500 carillas realizadas
            </p>

            <blockquote className="relative pl-6 border-l-2 border-brand-gold/50 space-y-6 text-gray-300 text-lg leading-relaxed italic mb-10">
                <p>
                    "Al principio, hacía carillas que perdían brillo en días. Culpaba a la resina, las gomas, al paciente.
                </p>
                <p>
                    Hasta entender: el problema era la ausencia de método.
                </p>
                <p>
                    Cuando organicé el protocolo en etapas fijas, todo cambió. El brillo se sostuvo. Las fotos mejoraron. Los retornos desaparecieron.
                </p>
                <p className="font-bold text-white not-italic">
                    Este es el protocolo exacto que uso hace años. Ahora en formato aplicable."
                </p>
            </blockquote>

            <Button variant="outline" className="w-full md:w-auto text-sm md:text-base">
                QUIERO APRENDER CON QUIEN YA HIZO +1.500 CASOS
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstructorSection;