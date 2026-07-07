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
                    className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    width={600}
                    height={750}
                    loading="lazy"
                />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold/20 rounded-2xl -z-10 hidden md:block"></div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h2 className="font-serif text-4xl text-white mb-2">Dr. Vinícius Rosa</h2>
            <p className="text-brand-gold font-medium mb-8 tracking-wide uppercase text-sm">
                Cirurgião-dentista | +10 anos de experiência | +1.500 facetas realizadas
            </p>

            <blockquote className="relative pl-6 border-l-2 border-brand-gold/50 space-y-6 text-gray-300 text-lg leading-relaxed italic mb-10">
                <p>
                    "No começo, eu fazia facetas que perdiam brilho em dias. Culpava a resina, as borrachas, o paciente.
                </p>
                <p>
                    Até entender: o problema era ausência de método.
                </p>
                <p>
                    Quando organizei o protocolo em etapas fixas, tudo mudou. O brilho se sustentou. As fotos melhoraram. Os retornos sumiram.
                </p>
                <p className="font-bold text-white not-italic">
                    Esse é o protocolo exato que uso há anos. Agora em formato aplicável."
                </p>
            </blockquote>

            <Button variant="outline" className="w-full md:w-auto text-sm md:text-base">
                QUERO APRENDER COM QUEM JÁ FEZ +1.500 CASOS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;