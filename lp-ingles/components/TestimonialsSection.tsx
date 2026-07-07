import React from 'react';
import Button from './Button';
import { Info } from 'lucide-react';

interface Testimonial {
  author: string;
  videoId: string;
  embedUrl: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    author: "Dr. Ana Carolina",
    videoId: "panda-3a7d3a29-5369-48a6-a414-e0e1b4e54f77",
    embedUrl: "https://player-vz-093b9755-d94.tv.pandavideo.com.br/embed/?v=3a7d3a29-5369-48a6-a414-e0e1b4e54f77",
    quote: "It's a very broad, very comprehensive course, where we have a very well-explained, very detailed theoretical part, and also an incredible practical part."
  },
  {
    author: "Dr. Daniela Souza",
    videoId: "panda-6410530c-bb09-45ab-9c6f-93620270dfeb",
    embedUrl: "https://player-vz-093b9755-d94.tv.pandavideo.com.br/embed/?v=6410530c-bb09-45ab-9c6f-93620270dfeb",
    quote: "I'm sure I'll leave here a different dentist, because it exceeded all my expectations, in every way."
  },
  {
    author: "Dr. Italo Rocha",
    videoId: "panda-f21cdbe3-22bd-49a0-b38e-d7ebe6b83ba3",
    embedUrl: "https://player-vz-093b9755-d94.tv.pandavideo.com.br/embed/?v=f21cdbe3-22bd-49a0-b38e-d7ebe6b83ba3",
    quote: "The course exceeded all my expectations in terms of detail, finishing, and especially polishing, where I had many questions."
  }
];

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => {
  return (
    <div className="flex flex-col h-full bg-[#111111] rounded-xl border border-white/5 overflow-hidden group hover:border-brand-gold/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(201,166,97,0.15)]">
      
      {/* Container do Panda Video com Aspect Ratio 9:16 (Vertical) nativo */}
      <div className="relative w-full bg-[#0a0a0a]" style={{ paddingTop: '177.77777777777777%' }}>
        <iframe 
            id={item.videoId} 
            src={item.embedUrl} 
            style={{ border: 'none', position: 'absolute', top: 0, left: 0 }} 
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture" 
            allowFullScreen={true} 
            width="100%" 
            height="100%" 
            // @ts-ignore
            fetchpriority="high"
        ></iframe>
      </div>

      <div className="p-6 md:p-8 border-t border-white/5 relative z-10 flex-1 flex flex-col">
        <h3 className="text-white font-serif text-xl md:text-2xl font-bold mb-3 drop-shadow-md">
          {item.author}
        </h3>
        
        {/* Linha divisória dourada como no layout */}
        <div className="w-10 h-[2px] bg-brand-gold/70 mb-5"></div>
        
        <p className="text-gray-300 italic text-sm md:text-base leading-relaxed flex-1">
          "{item.quote}"
        </p>

        {/* Badge: VR CONCEPT STUDENT */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(201,166,97,0.6)]"></div>
          <p className="text-brand-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
            VR CONCEPT STUDENT
          </p>
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
          Why do dentists trust the VR method?
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
                             These testimonials are from dentists who completed Dr. Vinicius Rosa's full in-person course.
                          </h3>
                          <div className="w-full h-[1px] bg-white/5 md:hidden"></div>
                          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                             The polishing protocol you will receive in this PDF is <strong className="text-brand-gold font-bold tracking-wide">EXACTLY the same</strong> as the one taught in the in-person course <span className="text-gray-400 text-sm whitespace-nowrap bg-white/5 px-2 py-0.5 rounded-md border border-white/5 inline-block mt-2 md:mt-0">(which costs over $650)</span>.
                          </p>
                      </div>
                 </div>
            </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" className="shadow-[0_0_30px_rgba(201,166,97,0.25)] hover:shadow-[0_0_50px_rgba(201,166,97,0.4)]">
            I WANT TO HAVE THESE RESULTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;