import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import Button from './Button';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Decor */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
                ¿Para quién es este protocolo?
            </h2>
             <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                Validamos este método con más de 1.500 casos. Descubre si encaja en tu momento profesional.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">
          
          {/* Image Column (Left - 5 cols) - Visual Anchor */}
          <div className="lg:col-span-5 relative group flex flex-col">
            <div className="relative flex-1 min-h-[500px] rounded-3xl overflow-hidden border border-brand-gold/20 shadow-2xl bg-brand-charcoal">
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                 {/* Image - Object Cover to fill height nicely */}
                 <img 
                    src="https://viniciusrosa.vrconcept.com.br/img/Foto%20Dr%20Vinicius%203.webp" 
                    alt="Dr. Vinicius Rosa aplicando o protocolo" 
                    width="600"
                    height="800"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                 />
                 
                 {/* Floating Content over image */}
                 <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                     <div className="bg-brand-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg">
                        <p className="text-white font-serif italic text-xl mb-6 leading-relaxed">
                            "Técnica aplicable en el próximo caso, no solo teoría."
                        </p>
                        <Button variant="primary" fullWidth className="shadow-[0_0_30px_rgba(201,166,97,0.4)] text-lg py-4">
                            SÍ, ESTO ES PARA MÍ
                        </Button>
                     </div>
                 </div>
            </div>
          </div>

          {/* Text Columns (Right - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-center">
            
            {/* CARD: É PRA VOCÊ */}
            <div className="bg-[#0f1110] rounded-3xl p-8 md:p-12 border border-emerald-900/30 relative overflow-hidden group/card hover:border-emerald-500/30 transition-colors duration-300">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] rounded-full pointer-events-none"></div>

                <h3 className="font-serif text-2xl md:text-3xl text-white mb-8 flex items-start md:items-center gap-4">
                    <div className="bg-emerald-500/10 p-3 rounded-full border border-emerald-500/20 shrink-0 mt-1 md:mt-0">
                        <CheckCircle2 className="text-emerald-500 w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <span className="block pt-1 md:pt-0">
                        Este protocolo es para ti si:
                    </span>
                </h3>
                <ul className="space-y-6">
                {[
                    "Ya haces carillas, pero el pulido no está al nivel de la porcelana",
                    "Pacientes ya regresaron reclamando la pérdida de brillo de las carillas",
                    "Tus fotos no tienen ese reflejo de luz",
                    "Quieres técnica aplicable en el próximo caso, no teoría"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-200 text-lg md:text-xl">
                    <div className="bg-emerald-500/10 p-1 rounded-full mt-1.5 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
            </div>

            {/* CARD: NÃO É PRA VOCÊ */}
            <div className="bg-[#0f1110] rounded-3xl p-8 md:p-12 border border-red-900/20 relative overflow-hidden group/card hover:border-red-500/20 transition-colors duration-300 opacity-90 hover:opacity-100">
                 {/* Glow */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full pointer-events-none"></div>

                <h3 className="font-serif text-2xl md:text-3xl text-gray-300 mb-8 flex items-start md:items-center gap-4">
                     <div className="bg-red-500/10 p-3 rounded-full border border-red-500/20 shrink-0 mt-1 md:mt-0">
                        <XCircle className="text-red-500 w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <span className="block pt-1 md:pt-0">
                        Este protocolo <span className="text-red-500 font-bold underline decoration-red-900 underline-offset-4 mx-1">NO</span> es para ti si:
                    </span>
                </h3>
                <ul className="space-y-6">
                {[
                    "Crees que el pulido salva un diente mal esculpido (no lo salva)",
                    "Buscas atajos o productos mágicos",
                    "No quieres invertir en tu propia carrera",
                    "No te importa entregar trabajos mediocres"
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-400 text-lg md:text-xl">
                    <div className="bg-red-500/10 p-1 rounded-full mt-1.5 shrink-0">
                        <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <span>{item}</span>
                    </li>
                ))}
                </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AudienceSection;