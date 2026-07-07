import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Button from './Button';
import { useVariant } from './VariantContext';

const faqs = [
  {
    q: "Is it a course or a PDF?",
    a: "A step-by-step PDF manual. You can read it in less than 1 hour and apply it in your very next clinical case."
  },
  {
    q: "Does it work with any composite resin?",
    a: "Yes. The logic of the grit sequence and proximal polishing is universal and brand-agnostic. There's no magic though — better resin quality will yield better results."
  },
  {
    q: "Do I need to buy new equipment?",
    a: "No. If you have a contra-angle and a basic rubber/polisher kit, you can already apply the full protocol."
  },
  {
    q: "When can I apply this in my practice?",
    a: "Immediately after purchase. Access is instant, and you can apply the technique in your very next case."
  },
  {
    q: "Is there a certificate?",
    a: "No. It's a technical guide for clinical application, not a certified course."
  }
];

const FAQSection: React.FC = () => {
  const { priceDisplay } = useVariant();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
       <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
       <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-charcoal/40 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        
        <div className="text-center mb-16">
            <span className="text-brand-gold uppercase tracking-widest text-sm font-bold mb-4 block">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Questions & Answers</h2>
            <p className="text-gray-400 text-lg md:text-xl font-light">Everything you need to know before you start.</p>
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
            <p className="text-gray-500 mb-6 text-sm uppercase tracking-wide">STILL HAVE QUESTIONS?</p>
            <Button variant="primary" className="text-lg px-10 py-4 shadow-[0_0_30px_rgba(201,166,97,0.2)] hover:shadow-[0_0_50px_rgba(201,166,97,0.4)]">
                {`I WANT TO TEST RISK-FREE — ${priceDisplay}`}
            </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;