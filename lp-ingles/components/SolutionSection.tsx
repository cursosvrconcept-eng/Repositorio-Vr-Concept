import React from 'react';
import { Layers, Disc, Settings, AlertTriangle, Sparkles, Check } from 'lucide-react';
import Button from './Button';
import { useVariant } from './VariantContext';

const SolutionSection: React.FC = () => {
  const { priceDisplay } = useVariant();
  const modules = [
    {
      icon: <Layers className="w-6 h-6 text-brand-gold" />,
      title: "The Logical Grit Sequence",
      desc: "You will learn the correct sequence of polishers and the exact location to use each one."
    },
    {
      icon: <Disc className="w-6 h-6 text-brand-gold" />,
      title: "The Proximal Protocol",
      desc: "This is the most critical point in polishing due to the difficulty of accessing the area. You will learn the best way to achieve maximum polishing on proximal surfaces without disrupting the contact point."
    },
    {
      icon: <Settings className="w-6 h-6 text-brand-gold" />,
      title: "Material Setup",
      desc: "You will have access to the complete list of materials I use to achieve a long-lasting mirror polish."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-brand-gold" />,
      title: "Fatal Errors",
      desc: "Find out where you're going wrong, correct it immediately, and see the results in your next case."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
      title: "The 'Glass Effect'",
      desc: "Master the 3 Golden Rules of polishing and elevate your resins to the aesthetic level of ceramics."
    }
  ];

  return (
    <section className="py-20 bg-brand-darkGray relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-3 drop-shadow-lg">
            Complete Guide to Polishing Resin Veneers
          </h2>
          <p className="text-brand-gold uppercase tracking-widest text-sm font-medium">
            Technical PDF | Immediate Application
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full opacity-50 mt-4"></div>
        </div>

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
          
          <div className="bg-gradient-to-br from-brand-charcoal/90 to-brand-black/90 p-8 rounded-xl border border-brand-gold/40 flex flex-col justify-center backdrop-blur-md shadow-2xl">
            <h4 className="text-xl font-bold text-brand-gold mb-6 uppercase tracking-wider">Also Included:</h4>
            <ul className="space-y-4">
                {[
                    "2 Bonus Video Lessons",
                    "Material Substitution Guide",
                    "Chairside checklist (printable)",
                    "Troubleshooting table (problem → solution)",
                    "Immediate and lifetime access"
                ].map((inc, i) => {
                    const isBonus = inc === "2 Bonus Video Lessons";
                    return (
                        <li 
                            key={i} 
                            className={`flex items-center gap-3 font-medium transition-all ${
                                isBonus 
                                ? 'text-brand-gold border border-brand-gold/40 bg-brand-gold/5 p-3 rounded-xl -mx-2 shadow-[0_0_15px_rgba(201,166,97,0.1)]' 
                                : 'text-white'
                            }`}
                        >
                            <div className={`rounded-full p-1 shrink-0 ${isBonus ? 'bg-brand-gold/20' : 'bg-brand-gold/20'}`}>
                                <Check className="w-3 h-3 text-brand-gold" strokeWidth={3} />
                            </div>
                            <span className={isBonus ? 'font-bold' : ''}>{inc}</span>
                        </li>
                    );
                })}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary" className="text-lg md:text-xl px-8 md:px-12 py-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] h-auto whitespace-normal">
            <span className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                <span>I WANT FULL ACCESS</span>
                <span className="whitespace-nowrap">{priceDisplay}</span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;