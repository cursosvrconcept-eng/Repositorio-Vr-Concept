import React from 'react';
import Button from './Button';
import { Info } from 'lucide-react';

interface VideoTestimonial {
  id: string;
  url: string;
  text: string;
  author: string;
}

// Adicionando o parâmetro &color=c9a661 para forçar o dourado da marca no player
const testimonials: VideoTestimonial[] = [
  {
    id: "65e40563-13e8-4721-b90b-33b780ece39d",
    url: "https://player-vz-093b9755-d94.tv.pandavideo.com.br/embed/?v=65e40563-13e8-4721-b90b-33b780ece39d&color=c9a661",
    text: "\"É um curso muito amplo, muito vasto, onde a gente tem uma parte teórica muito bem explicada, muito bem detalhada e também a parte prática de uma forma incrível\"",
    author: "Dra. Ana Carolina",
  },
  {
    id: "b6900282-ba3a-4f56-954f-e6d12160e848",
    url: "https://player-vz-093b9755-d94.tv.pandavideo.com.br/embed/?v=b6900282-ba3a-4f56-954f-e6d12160e848&color=c9a661",
    text: "\"Eu tenho certeza de que vou sair daqui uma dentista diferente, porque superou todas as minhas expectativas, em todo os sentidos\"",
    author: "Dra. Daniela Souza",
  },
  {
    id: "06c7af94-123e-4172-8821-a5edd5d63fde",
    url: "https://player-vz-093b9755-d94.tv.pandavideo.com.br/embed/?v=06c7af94-123e-4172-8821-a5edd5d63fde&color=c9a661",
    text: "\"O curso supriu todas as minhas expectativas, em relação a detalhes, acabamento, e principalmente polimento, onde eu tinha muitas dúvidas\"",
    author: "Dr. Italo Rocha",
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-darkGray relative overflow-hidden">
      {/* Background decoration for section */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <h2 className="font-serif text-3xl md:text-5xl text-center text-white mb-16 max-w-5xl mx-auto leading-tight">
          Por Que Dentistas Confiam no Método VR?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((item, idx) => (
              <div key={idx} className="flex flex-col h-full bg-brand-black rounded-xl border border-white/5 overflow-hidden group hover:border-brand-gold/30 transition-all duration-300">
                
                {/* Video Player Area */}
                <div className="relative aspect-[9/16] bg-black w-full overflow-hidden">
                  <iframe 
                    id={`panda-${item.id}`}
                    src={item.url}
                    style={{ border: 'none', position: 'absolute', top: 0, left: 0 }}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                    allowFullScreen={true}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title={`Depoimento ${item.author}`}
                  ></iframe>
                </div>

                {/* Text Block */}
                <div className="p-6 md:p-8 flex-1 flex flex-col bg-brand-charcoal/20">
                  
                  <div className="mb-4">
                    <p className="font-serif text-2xl text-white font-bold tracking-wide">
                        {item.author}
                    </p>
                    <div className="h-0.5 w-12 bg-brand-gold mt-2 opacity-70 group-hover:w-20 transition-all duration-500"></div>
                  </div>

                  <p className="text-gray-300 italic mb-6 flex-1 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                  
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                    <p className="text-brand-gold font-bold text-xs uppercase tracking-widest">
                      Aluna VR Concept
                    </p>
                  </div>
                </div>
              </div>
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
                            Esses depoimentos são de dentistas que fizeram o curso presencial completo do Dr. Vinicius Rosa.
                         </h3>
                         <div className="w-full h-[1px] bg-white/5 md:hidden"></div>
                         <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            O protocolo de polimento que você vai receber neste PDF é <strong className="text-brand-gold font-bold tracking-wide">EXATAMENTE</strong> o mesmo ensinado no curso presencial <span className="text-gray-400 text-sm whitespace-nowrap bg-white/5 px-2 py-0.5 rounded-md border border-white/5 inline-block mt-2 md:mt-0">(que custa +R$ 3.500)</span>.
                         </p>
                     </div>
                 </div>
            </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" className="shadow-[0_0_30px_rgba(201,166,97,0.25)] hover:shadow-[0_0_50px_rgba(201,166,97,0.4)]">
            QUERO TER ESSES RESULTADOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;