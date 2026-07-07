import React from 'react';
import Button from './Button';
import { Info } from 'lucide-react';

interface Testimonial {
  author: string;
  quote: string;
  iframeId: string;
  iframeSrc: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Dra. Ana Carolina",
    quote: "Es un curso muy amplio y completo, con una parte teórica muy bien explicada y detallada, y también una parte práctica increíble.",
    iframeId: "panda-d5b118f5-9b80-4132-9535-e439505a91a5",
    iframeSrc: "https://player-vz-093b9755-d94.tv.pandavideo.com.br/embed/?v=d5b118f5-9b80-4132-9535-e439505a91a5"
  },
  {
    author: "Dra. Daniela Souza",
    quote: "Estoy segura de que me iré de aquí con un dentista diferente, porque superó todas mis expectativas en todos los sentidos.s",
    iframeId: "panda-d0735373-f4e6-46fb-8470-54112c2ad1ba",
    iframeSrc: "https://player-vz-093b9755-d94.tv.pandavideo.com.br/embed/?v=d0735373-f4e6-46fb-8470-54112c2ad1ba"
  },
  {
    author: "Dr. Italo Rocha",
    quote: "El curso superó todas mis expectativas en cuanto a detalles, acabados y, sobre todo, pulido, aspectos en los que tenía muchas dudas.",
    iframeId: "panda-8f603f1f-4b58-4149-8cac-27754ce6ca60",
    iframeSrc: "https://player-vz-093b9755-d94.tv.pandavideo.com.br/embed/?v=8f603f1f-4b58-4149-8cac-27754ce6ca60"
  }
];

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  const isMale = item.author.startsWith('Dr.') && !item.author.startsWith('Dra.');

  return (
    <div className="flex flex-col h-full bg-[#111111] rounded-xl border border-white/5 overflow-hidden group hover:border-brand-gold/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(201,166,97,0.15)]">
      
      {/* Video Area */}
      <div className="relative w-full bg-[#0a0a0a]" style={{ paddingTop: '177.77777777777777%' }}>
        <iframe 
            id={item.iframeId} 
            src={item.iframeSrc} 
            style={{ border: 'none', position: 'absolute', top: 0, left: 0 }} 
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
            allowFullScreen={true} 
            width="100%" 
            height="100%" 
            fetchPriority="high"
        ></iframe>
      </div>

      {/* Footer Info - Design conforme o Print */}
      <div className="p-8 flex flex-col items-start text-left flex-grow">
        <h3 className="text-white font-serif text-2xl font-bold">
          {item.author}
        </h3>
        
        {/* Sublinhado dourado curto */}
        <div className="w-10 h-[2px] bg-brand-gold mt-2 mb-6"></div>
        
        {/* Depoimento em Texto */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed italic font-light">
          "{item.quote}"
        </p>

        {/* Rodapé do card com linha divisória */}
        <div className="mt-auto pt-8 w-full">
            <div className="border-t border-white/10 mb-6"></div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <p className="text-brand-gold font-bold text-xs uppercase tracking-[0.2em]">
                    ALUMN{isMale ? 'O' : 'A'} VR CONCEPT
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-darkGray relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <h2 className="font-serif text-3xl md:text-5xl text-center text-white mb-16 max-w-5xl mx-auto leading-tight">
          ¿Por Qué los Dentistas Confían en el Método VR?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} item={item} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12 md:mt-16">
            <div className="bg-[#0f1110] border border-brand-gold/20 rounded-2xl p-6 md:p-8 relative overflow-hidden hover:border-brand-gold/40 transition-colors duration-300">
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 blur-[50px] rounded-full pointer-events-none"></div>
                 <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                     <div className="shrink-0 bg-brand-charcoal p-3 rounded-full border border-brand-gold/30 shadow-[0_0_15px_rgba(201,166,97,0.1)] hidden md:flex">
                         <Info className="w-6 h-6 text-brand-gold" />
                     </div>
                     <div className="space-y-4 text-center md:text-left">
                         <h3 className="text-white font-bold text-lg md:text-xl">
                            Estos testimonios son de dentistas que hicieron el curso presencial completo del Dr. Vinicius Rosa.
                         </h3>
                         <div className="w-full h-[1px] bg-white/5 md:hidden"></div>
                         <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            El protocolo de pulido que receberás en este PDF es <strong className="text-brand-gold font-bold tracking-wide">EXACTAMENTE</strong> el mismo enseñado en el curso presencial <span className="text-gray-400 text-sm whitespace-nowrap bg-white/5 px-2 py-0.5 rounded-md border border-white/5 inline-block mt-2 md:mt-0">(que cuesta + $ 700.00)</span>.
                         </p>
                     </div>
                 </div>
            </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" className="shadow-[0_0_30px_rgba(201,166,97,0.25)] hover:shadow-[0_0_50px_rgba(201,166,97,0.4)]">
            QUIERO TENER ESTOS RESULTADOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;