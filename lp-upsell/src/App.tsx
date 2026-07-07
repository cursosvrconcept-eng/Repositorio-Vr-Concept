import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, PlayCircle, ArrowRight, AlertTriangle } from 'lucide-react';

import caso01Img from './assets/caso-01.webp';
import caso02Img from './assets/caso-02.webp';
import caso03Img from './assets/caso-03.webp';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans overflow-x-hidden selection:bg-[var(--color-gold-primary)] selection:text-black">
      
      {/* Top Alert Banner */}
      <div className="bg-[#FF3300] text-white py-3 px-4 flex items-center justify-center gap-2 text-center w-full z-50 shadow-[0_4px_20px_rgba(255,51,0,0.3)]">
        <AlertTriangle className="w-5 h-5 shrink-0 animate-pulse" />
        <span className="font-medium text-sm md:text-base tracking-wide">
          ESPERE! Seu pedido ainda não está completo. Não feche esta página.
        </span>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center py-20 px-5 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-gold-primary)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto w-full flex flex-col items-center relative z-10">
          <FadeIn>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl leading-tight drop-shadow-lg">
              Parabéns! Você dominou o brilho.<br />
              <span className="text-gold-gradient">Agora vem a parte que muda o resultado.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold-primary)] to-transparent mx-auto mb-10"></div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              O polimento resolve a superfície. O que faz uma lente em resina ter naturalidade de verdade é o que acontece antes - <span className="text-[var(--color-text-primary)] font-medium">camada por camada.</span>
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-sm md:text-base text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-medium mb-4">
              Só para você que já é aluno, criei uma oferta única:
            </p>
            
            <h2 className="font-display text-3xl md:text-5xl text-[var(--color-text-primary)] mb-8 leading-tight drop-shadow-md">
              Método VR - OrganicFlow:<br/>
              <span className="text-gold-gradient">Lentes em Resina – Fluxo Completo</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex flex-col items-center w-full mt-4">
            <div className="mb-3">
              <span className="block text-2xl md:text-3xl text-[var(--color-text-primary)] mb-1 font-light">Por <strong className="font-bold">R$ 497</strong> <span className="text-lg text-[var(--color-text-secondary)]">(12x R$ 47,22)</span></span>
            </div>
            <p className="text-xs md:text-sm text-[var(--color-gold-primary)] uppercase tracking-[0.3em] font-bold mb-10 bg-[var(--color-gold-primary)]/10 py-1.5 px-4 rounded-full border border-[var(--color-gold-primary)]/20">
              Só nesta página
            </p>
            
            <a href="#comprar" className="inline-flex items-center justify-center gap-3 bg-gold-gradient text-black font-bold py-5 px-10 md:px-12 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(201,168,76,0.3)] hover:brightness-110 w-full max-w-lg text-base md:text-lg animate-[pulse-soft_3s_infinite] hover:animate-none ring-1 ring-white/20 ring-offset-2 ring-offset-[var(--color-bg-primary)]">
              SIM, QUERO O FLUXO COMPLETO
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <p className="mt-6 text-sm text-[var(--color-text-secondary)] font-light tracking-wide">
              de 997 por R$ 497 <span className="text-[var(--color-gold-primary)]/50 mx-2">•</span> 12x R$ 47,22 <span className="text-[var(--color-gold-primary)]/50 mx-2">•</span> Acesso imediato
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] px-5 relative border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold-primary)]/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
              Por que a resina fica com brilho,<br/>
              <span className="text-[var(--color-text-secondary)]">mas não parece natural?</span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-lg text-[var(--color-text-secondary)] mb-14 font-light">
              Não é o material. Na maioria das vezes, é o fluxo. Um resultado sem naturalidade quase sempre tem origem em:
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
            {[
              "Acabamento deficiente.",
              "Opacidade excessiva.",
              "Espessuras de camadas incorretas.",
              "Efeitos mal posicionados ou exagerados."
            ].map((text, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)} className="h-full">
                <div className="bg-gradient-to-br from-[#161616] to-black p-8 md:p-10 flex items-start gap-6 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-1 rounded-[2rem] h-full relative overflow-hidden group border border-white/[0.08] hover:border-[var(--color-gold-primary)]/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold-primary)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Stylized Number Indicator */}
                  <div className="bg-black/40 w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 shrink-0 group-hover:border-[var(--color-gold-primary)]/30 transition-all duration-500">
                    <span className="text-[var(--color-gold-primary)] font-display text-xl font-bold opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                  </div>

                  <div className="text-[var(--color-text-secondary)] text-lg md:text-xl relative z-10 group-hover:text-[var(--color-text-primary)] transition-colors duration-300 font-light leading-snug pt-1">{text}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn>
            <p className="text-lg md:text-xl text-[var(--color-text-primary)] mb-10 leading-relaxed font-light">
              É justamente aqui que muitos dentistas travam: conseguem polir, conseguem dar brilho, <strong className="font-medium text-[var(--color-gold-light)] font-normal">mas não conseguem construir naturalidade.</strong>
            </p>
            
            <div className="bg-gradient-to-b from-[var(--color-bg-card)] to-black/60 border border-[rgba(201,168,76,0.2)] rounded-3xl p-10 md:p-12 text-left relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold-primary)]/40 to-transparent"></div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[var(--color-gold-primary)] opacity-[0.03] blur-[60px] rounded-full pointer-events-none"></div>
              
              <p className="text-2xl font-display text-gold-gradient mb-6">
                No curso completo, você aprende o processo inteiro.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed font-light">
                Não é só acabamento. Não é só polimento. É a execução completa da lente em resina, do passo a passo inicial ao resultado final.
              </p>
              <p className="text-lg text-[var(--color-text-primary)] leading-relaxed font-light">
                Tudo é mostrado com clareza e com explicação prática de cada etapa para você entender <strong className="text-[var(--color-gold-light)] font-medium">o que fazer, por que fazer e como reproduzir.</strong>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Included Section */}
      <section className="py-24 px-5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(201,168,76,0.03)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-6 drop-shadow-md">Método VR OrganicFlow<br/><span className="text-[var(--color-text-secondary)] text-2xl md:text-4xl mt-2 block">— Fluxo Completo —</span></h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-20 max-w-3xl mx-auto font-light leading-relaxed">
              O mesmo protocolo que aplico há mais de 10 anos, em mais de 1.500 Lentes, agora em vídeo, para você estudar no seu ritmo e consultar sempre que precisar.
            </p>
          </FadeIn>
          
          <div className="flex flex-col gap-8 mb-20 text-left max-w-3xl mx-auto">
            {[
              {
                num: "Módulo 01",
                title: "Setup",
                items: [
                  "Mapa do fluxo clínico completo",
                  "Grupo VIP WhatsApp com suporte direto"
                ]
              },
              {
                num: "Módulo 02",
                title: "Fluxo OrganicFlow",
                items: [
                  "Guia de silicone — moldagem que orienta toda a estratificação",
                  "Preparo dentário",
                  "Concha palatina — anatomia que sustenta o resultado",
                  "Dentina com efeitos reais de profundidade",
                  "Esmalte de incisivos — centrais e lateral",
                  "Acabamento com transições naturais",
                  "Polimento técnico",
                  "Dente canino — abordagem específica"
                ]
              },
              {
                num: "Módulo 03",
                title: "Dente Escurecido",
                items: [
                  "Fluxo completo para substrato comprometido",
                  "Dentina opaca com efeitos de naturalidade",
                  "Esmalte natural sobre dente escuro",
                  "Acabamento e polimento em duas etapas"
                ]
              }
            ].map((mod, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-gradient-to-br from-[var(--color-bg-card)] to-[#080808] border border-[rgba(201,168,76,0.15)] rounded-3xl p-8 md:p-12 transition-all duration-500 hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:-translate-y-1 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-gold-primary)] opacity-[0.02] blur-[50px] rounded-full group-hover:opacity-[0.06] transition-opacity duration-700"></div>
                  <div className="mb-8 relative z-10 border-b border-white/5 pb-6">
                    <span className="text-sm text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-bold mb-2 block">{mod.num}</span>
                    <h3 className="font-headline text-3xl md:text-4xl text-[var(--color-gold-primary)] group-hover:text-[var(--color-gold-light)] transition-colors duration-300">{mod.title}</h3>
                  </div>
                  <ul className="space-y-4 relative z-10">
                    {mod.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-4 text-base md:text-lg text-[var(--color-text-primary)] font-light">
                        <span className="text-[var(--color-gold-primary)] shrink-0 mt-1 opacity-70 group-hover:opacity-100 transition-opacity">✦</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn>
            <div className="text-lg md:text-xl text-[var(--color-text-primary)] font-light mb-10 bg-[var(--color-bg-card)]/50 inline-block py-3 px-8 rounded-full border border-white/5">
              Acesso por 1 ano <span className="text-[var(--color-gold-primary)] mx-2">+</span> comunidade ativa de alunos.
            </div>
            
            <div className="flex flex-col items-center">
              <a href="#comprar" className="inline-flex items-center justify-center gap-3 bg-gold-gradient text-black font-bold py-5 px-10 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(201,168,76,0.3)] hover:brightness-110 w-full max-md:max-w-md text-base md:text-lg ring-1 ring-white/20 ring-offset-2 ring-offset-[var(--color-bg-primary)]">
                SIM, QUERO O FLUXO COMPLETO
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <p className="mt-5 text-sm text-[var(--color-text-secondary)] font-light tracking-wide">
                de 997 por R$ 497 <span className="text-[var(--color-gold-primary)]/50 mx-2">•</span> 12x R$ 47,22 <span className="text-[var(--color-gold-primary)]/50 mx-2">•</span> Acesso imediato
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)] px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-6">Resultados — Casos Reais</h2>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-16 font-light">Antes e depois — lentes em resina com o <span className="text-[var(--color-text-primary)]">Método VR OrganicFlow.</span></p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center items-start">
            {[
              caso01Img,
              caso02Img,
              caso03Img
            ].map((img, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)} className="h-full">
                <div className="group h-full flex flex-col">
                  <div className="bg-gradient-to-b from-[var(--color-bg-card)] to-[#050505] border border-[var(--color-gold-primary)]/20 rounded-3xl relative overflow-hidden transition-all duration-700 group-hover:border-[var(--color-gold-primary)]/50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:-translate-y-2 flex flex-col h-full">
                    
                    <div className="relative w-full bg-black/50 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
                      <img 
                        src={img} 
                        alt={`Resultado ${i + 1}`} 
                        className="w-full h-auto block transition-transform duration-1000 group-hover:scale-[1.03] opacity-85 group-hover:opacity-100 object-cover"
                      />
                    </div>
                    
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-5 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-16">Quem já fez o curso:<br/><span className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-sans font-light mt-4 block">(depoimentos de alunos)</span></h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 text-left">
            {[
              {
                text: "Minhas facetas ganharam naturalidade que antes eu não conseguia reproduzir com consistência.",
                author: "Dra. Luiza"
              },
              {
                text: "Passei a aceitar casos de dentes escurecidos que antes eu encaminhava. O módulo 3 mudou minha prática.",
                author: "Dr. Rafael"
              },
              {
                text: "O que mudou foi a previsibilidade. Caso após caso, o resultado segue um padrão.",
                author: "Dra. Camila"
              }
            ].map((test, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)} className="h-full">
                <div className="bg-gradient-to-br from-[var(--color-bg-card)] to-black/80 border border-[rgba(201,168,76,0.15)] rounded-3xl p-10 md:p-12 relative overflow-hidden h-full flex flex-col justify-between transition-all duration-500 hover:border-[rgba(201,168,76,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-1 group">
                  <div className="absolute -top-8 -left-4 font-display text-[14rem] text-[var(--color-gold-primary)] opacity-[0.03] leading-none group-hover:opacity-[0.06] transition-opacity duration-700">"</div>
                  <p className="text-lg text-[var(--color-text-primary)] mb-10 relative z-10 leading-relaxed font-light italic">
                    "{test.text}"
                  </p>
                  <div className="relative z-10">
                    <p className="text-base text-[var(--color-gold-light)] font-medium">
                      {test.author}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5">Aluno(a)</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-32 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] px-5 relative overflow-hidden border-t border-white/5" id="comprar">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)] pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-6xl mb-16 drop-shadow-md">Investimento</h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-b from-[#161616] to-[#0a0a0a] border border-[var(--color-gold-primary)]/40 rounded-[2.5rem] p-10 md:p-16 max-w-xl mx-auto mb-10 shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(201,168,76,0.15)] text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold-primary)] to-transparent"></div>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--color-gold-primary)] opacity-[0.08] blur-[60px] rounded-full pointer-events-none"></div>
              
              <p className="text-lg md:text-xl text-[var(--color-text-primary)] mb-4 relative z-10 font-light">
                O curso completo, fora daqui, sai por R$ 997.
              </p>
              <p className="text-xl md:text-2xl text-[var(--color-text-primary)] mb-8 relative z-10 font-light">
                Só nessa página, para quem acabou de garantir o guia: 
                <strong className="text-gold-gradient text-5xl md:text-6xl block mt-4 drop-shadow-[0_0_20px_rgba(201,168,76,0.2)] font-display">R$ 497.</strong>
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] italic mb-10 relative z-10 font-light">
                12x de R$ 47,22 — menos que uma consulta por mês.
              </p>
              
              <div className="flex items-center gap-4 mb-12 relative z-10 bg-black/40 p-5 rounded-2xl border border-white/5">
                <ShieldCheck className="w-8 h-8 text-[var(--color-gold-primary)] shrink-0" />
                <p className="text-sm md:text-base text-[var(--color-text-primary)] font-light">
                  Acesso imediato. Garantia incondicional de 30 dias.
                </p>
              </div>
              
              <div className="text-center relative z-10">
                <a href="#" className="inline-flex items-center justify-center gap-3 bg-gold-gradient text-black font-bold py-5 px-8 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow(0_15px_40px_rgba(201,168,76,0.3)) hover:brightness-110 w-full text-base md:text-lg mb-5 ring-1 ring-white/20 ring-offset-2 ring-offset-black">
                  QUERO O FLUXO COMPLETO
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-sm text-[var(--color-text-secondary)] font-light tracking-wide">
                  R$ 497 <span className="text-[var(--color-gold-primary)]/50 mx-2">•</span> 12x R$ 47,22 <span className="text-[var(--color-gold-primary)]/50 mx-2">•</span> Acesso imediato
                </p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <a href="#" className="inline-block text-sm md:text-base text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors italic font-light border-b border-transparent hover:border-[var(--color-text-secondary)] pb-1">
              Não, obrigado — por enquanto fico só com o guia de polimento
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 px-5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[var(--color-bg-card)] to-black border border-[var(--color-gold-primary)]/20 rounded-full flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(201,168,76,0.15)]">
              <ShieldCheck className="w-12 h-12 text-[var(--color-gold-primary)]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl mb-8 text-[var(--color-text-primary)] drop-shadow-md">Garantia de 30 dias<br/><span className="text-2xl md:text-3xl text-[var(--color-text-secondary)] font-sans font-light mt-2 block">— sem burocracia —</span></h2>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-6 leading-relaxed font-light">
              Aplique em um caso real. Se não perceber diferença concreta no resultado, me manda um e-mail. Devolvo 100% sem perguntas.
            </p>
            <p className="text-2xl font-bold text-gold-gradient mb-14 tracking-wide">
              O risco é inteiramente meu.
            </p>
            <p className="text-xs md:text-sm text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-medium max-w-2xl mx-auto leading-relaxed">
              Essa oferta está disponível somente nessa página. Fora daqui, o curso segue disponível pelo valor cheio.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-gradient-to-b from-[var(--color-bg-secondary)] to-black px-5 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl text-gold-gradient mb-4">Dr. Vinícius Rosa</h2>
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] tracking-[0.3em] uppercase font-light">
              +10 anos <span className="text-[var(--color-gold-primary)]/50 mx-3">•</span> +1.500 Lentes em resina
            </p>
          </FadeIn>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-soft {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(201,168,76,0.4); }
          50% { transform: scale(1.02); box-shadow: 0 0 20px 10px rgba(201,168,76,0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(201,168,76,0); }
        }
      `}} />
    </div>
  );
}