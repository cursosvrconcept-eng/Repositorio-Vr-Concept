import React from 'react';
import { Layers, Disc, Settings, AlertTriangle, Sparkles, Check } from 'lucide-react';
import Button from './Button';

const SolutionSection: React.FC = () => {
  const modules = [
    {
      icon: <Layers className="w-6 h-6 text-brand-gold" />,
      title: "A Sequência Lógica de Granulação",
      desc: "Você vai aprender qual a sequência correta de borrachas e o local exato para usar cada uma delas."
    },
    {
      icon: <Disc className="w-6 h-6 text-brand-gold" />,
      title: "O Protocolo Proximal",
      desc: "É o ponto mais crítico do polimento pela dificuldade de acesso à região. Você vai aprender a melhor maneira de atingir o máximo de polimento nas proximais sem romper o ponto de contato."
    },
    {
      icon: <Settings className="w-6 h-6 text-brand-gold" />,
      title: "Setup de Materiais",
      desc: "Você terá acesso a lista completa de materiais que uso para atingir o polimento espelhado duradouro."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-gold" />,
      title: "Erros Fatais",
      desc: "Descubra onde está errando, corrija imediatamente e veja o resultado já no seu próximo caso."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
      title: "O \"Efeito Vidro\"",
      desc: "Domine as 3 Regras de Ouro do polimento e eleve suas resinas ao nível estético das cerâmicas."
    }
  ];

  return (
    <section className="py-20 bg-brand-darkGray relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 drop-shadow-lg">
            Guia Completo de Polimento de Facetas em Resina
          </h2>
          <p className="text-brand-gold text-lg md:text-xl font-medium tracking-wide drop-shadow-md">
            PDF técnico | Aplicação imediata
          </p>
        </div>

        <h3 className="text-2xl text-white mb-8 text-center font-serif drop-shadow-md">O que você vai dominar:</h3>

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
          <div className="bg-gradient-to-br from-brand-charcoal/90 to-brand-black/90 p-8 rounded-xl border border-brand-gold/40 flex flex-col justify-center backdrop-blur-md shadow-2xl relative overflow-hidden">
            <h4 className="text-xl font-bold text-brand-gold mb-6 uppercase tracking-wider">Incluso:</h4>
            <ul className="space-y-4">
                {/* DESTAQUE ESPECIAL: 2 AULAS BÔNUS */}
                <li className="bg-brand-gold/10 border border-brand-gold/30 p-3 rounded-lg flex items-center gap-3 text-brand-gold font-bold text-lg md:text-xl shadow-[0_0_20px_rgba(201,166,97,0.1)] group">
                     <div className="bg-brand-gold text-black rounded-full p-1 shadow-[0_0_10px_rgba(201,166,97,0.4)]">
                        <Check className="w-4 h-4" strokeWidth={4} />
                     </div>
                     <span className="bg-gradient-to-r from-brand-gold to-brand-goldLight bg-clip-text text-transparent">
                        2 Aulas Bônus
                     </span>
                </li>

                <li className="flex items-center gap-3 text-white font-medium pl-1">
                     <div className="bg-brand-gold/20 rounded-full p-1">
                        <Check className="w-3 h-3 text-brand-gold" />
                     </div>
                     Guia de Substituição de Materiais
                </li>
                <li className="flex items-center gap-3 text-white font-medium pl-1">
                     <div className="bg-brand-gold/20 rounded-full p-1">
                        <Check className="w-3 h-3 text-brand-gold" />
                     </div>
                     Checklist imprimível para cadeira
                </li>
                <li className="flex items-center gap-3 text-white font-medium pl-1">
                     <div className="bg-brand-gold/20 rounded-full p-1">
                        <Check className="w-3 h-3 text-brand-gold" />
                     </div>
                     Tabela de troubleshooting
                </li>
                <li className="flex items-center gap-3 text-white font-medium pl-1">
                     <div className="bg-brand-gold/20 rounded-full p-1">
                        <Check className="w-3 h-3 text-brand-gold" />
                     </div>
                     Acesso imediato e vitalício
                </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary" className="text-lg md:text-xl px-8 md:px-12 py-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] h-auto whitespace-normal">
            <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                <span>QUERO ACESSO COMPLETO</span>
                <span className="whitespace-nowrap">R$ 47,00</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;