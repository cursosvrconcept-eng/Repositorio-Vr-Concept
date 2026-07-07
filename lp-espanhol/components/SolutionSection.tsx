import React from 'react';
import { Layers, Disc, Settings, AlertTriangle, Sparkles, Check } from 'lucide-react';
import Button from './Button';

const SolutionSection: React.FC = () => {
  const modules = [
    {
      icon: <Layers className="w-6 h-6 text-brand-gold" />,
      title: "La Secuencia Lógica de Granulación",
      desc: "Aprenderás cuál es la secuencia correcta de gomas y el lugar exacto para usar cada una de ellas."
    },
    {
      icon: <Disc className="w-6 h-6 text-brand-gold" />,
      title: "El Protocolo Proximal",
      desc: "Es el punto más crítico del pulido por la dificultad de acceso. Aprenderás la mejor manera de lograr el máximo pulido en las proximales sin romper el punto de contacto."
    },
    {
      icon: <Settings className="w-6 h-6 text-brand-gold" />,
      title: "Setup de Materiales",
      desc: "Tendrás acceso a la lista completa de materiales que uso para lograr el pulido espejado duradero."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-gold" />,
      title: "Errores Fatales",
      desc: "Descubre dónde estás fallando, corrígelo inmediatamente y ve el resultado en tu próximo caso."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
      title: "El \"Efecto Vidrio\"",
      desc: "Domina las 3 Reglas de Oro del pulido y eleva tus resinas al nivel estético de las cerámicas."
    }
  ];

  const includedItems = [
    { text: "Checklist clínico imprimible", highlight: false },
    { text: "Tabla de solución de problemas", highlight: false },
    { text: "Guía de sustitución de materiales", highlight: false },
    { text: "2 Clases de Bono", highlight: true },
    { text: "Acceso inmediato y de por vida", highlight: false }
  ];

  return (
    <section className="py-20 bg-brand-darkGray relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 drop-shadow-lg">
            Guía Completa de Pulido de Carillas de Resina
          </h2>
          <p className="text-brand-gold text-lg md:text-xl font-medium tracking-wide drop-shadow-md">
            PDF técnico | Aplicación inmediata
          </p>
        </div>

        <h3 className="text-2xl text-white mb-8 text-center font-serif drop-shadow-md">Lo que dominarás:</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {modules.map((item, idx) => (
            <div key={idx} className="bg-brand-black/80 p-8 rounded-xl border border-white/10 hover:border-brand-gold/30 transition-all duration-300 group hover:-translate-y-1 backdrop-blur-md shadow-2xl">
              <div className="bg-brand-black/60 w-12 h-12 rounded-lg flex items-center justify-center mb-6 border border-brand-gold/20 group-hover:bg-brand-gold/10 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
          
          {/* INCLUDED CARD */}
          <div className="bg-gradient-to-br from-brand-charcoal/90 to-brand-black/90 p-8 rounded-xl border border-brand-gold/40 flex flex-col justify-center backdrop-blur-md shadow-2xl">
            <h4 className="text-xl font-bold text-brand-gold mb-6 uppercase tracking-wider">Incluido:</h4>
            <ul className="space-y-4">
                {includedItems.map((inc, i) => (
                    <li key={i} className={`flex items-center gap-3 font-medium transition-all duration-300 ${inc.highlight ? 'text-brand-gold scale-105 origin-left' : 'text-white'}`}>
                         <div className={`rounded-full p-1 ${inc.highlight ? 'bg-brand-gold text-black shadow-[0_0_10px_rgba(201,166,97,0.4)]' : 'bg-brand-gold/20 text-brand-gold'}`}>
                            <Check className="w-3 h-3" />
                         </div>
                         <div className="flex items-center gap-2">
                            <span>{inc.text}</span>
                            {inc.highlight && (
                                <span className="bg-brand-gold text-black text-[10px] font-black px-1.5 py-0.5 rounded leading-none uppercase tracking-tighter">
                                    Bono
                                </span>
                            )}
                         </div>
                    </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary" className="text-lg md:text-xl px-8 md:px-12 py-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] h-auto whitespace-normal">
            <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                <span>QUIERO ACCESO COMPLETO</span>
                <span className="whitespace-nowrap">$ 9.00</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;