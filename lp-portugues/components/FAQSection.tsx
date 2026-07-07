import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Button from './Button';

const faqs = [
  {
    q: "É curso ou PDF?",
    a: "Manual em PDF com passo a passo. Você lê em menos de 1 hora e já aplica."
  },
  {
    q: "Funciona para qualquer resina?",
    a: "Sim, mas não existe mágica: quanto melhor a qualidade da resina melhor será o resultado."
  },
  {
    q: "Preciso comprar um equipamento novo?",
    a: "Não. Se você tem contra-ângulo e kit básico de borrachas, já dá pra aplicar."
  },
  {
    q: "Em quanto tempo consigo aplicar no meu consultório?",
    a: "A aplicação é imediata e já vai conseguir usar no seu próximo caso"
  },
  {
    q: "Tem certificado?",
    a: "Não. É um guia técnico para aplicação clínica, não curso certificado."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-charcoal/40 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
            <span className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-4 block">Dúvidas Frequentes</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Perguntas & Respostas</h2>
            <p className="text-gray-400 text-lg md:text-xl font-light">Tudo que você precisa saber antes de começar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
             const isOpen = openIndex === index;
             return (
                <div 
                    key={index} 
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-brand-charcoal border-brand-gold/40 shadow-[0_0_30px_rgba(201,166,97,0.1)]' : 'bg-brand-charcoal/40 border-white/5 hover:border-white/10'}`}
                >
                <button
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group select-none"
                    onClick={() => toggle(index)}
                >
                    <span className={`font-medium text-lg md:text-xl pr-8 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {faq.q}
                    </span>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-brand-gold text-black border-brand-gold rotate-180' : 'bg-white/5 text-gray-400 border-white/10 group-hover:border-brand-gold/50 group-hover:text-brand-gold'}`}>
                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                </button>
                <div
                    className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                >
                    <div className="p-6 md:p-8 pt-0 text-gray-400 text-base md:text-lg leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                    </div>
                </div>
                </div>
            )})}
        </div>

        <div className="text-center mt-16">
            <p className="text-gray-500 mb-6 text-sm uppercase tracking-wide">Ainda tem alguma dúvida?</p>
            <Button variant="primary" className="text-lg px-10 py-4 shadow-[0_0_30px_rgba(201,166,97,0.2)] hover:shadow-[0_0_50px_rgba(201,166,97,0.4)]">
                QUERO TIRAR DÚVIDAS TESTANDO
            </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;