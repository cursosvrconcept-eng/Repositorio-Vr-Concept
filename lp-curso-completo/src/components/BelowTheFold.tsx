import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Star
} from 'lucide-react';

import { FadeIn, CTAButton } from './ui';
import LazyVideoPlayer from './LazyVideoPlayer';
import ResultsCarousel from './ResultsCarousel';
import drViniciusImg from '../assets/dr-vinicius.webp';

export default function BelowTheFold() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* SEÇÃO 5 — SOBRE O TREINAMENTO */}
      <section className="py-16 md:py-24 px-5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl text-gold-gradient mb-4">
              Treinamento 100% Clínico, Direto ao Ponto.
            </h2>
            <h3 className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-headline italic mb-8 md:mb-10">
              Nada de enrolação, nada de teoria vazia.
            </h3>
            <p className="text-lg md:text-xl text-[var(--color-text-primary)] max-w-3xl mx-auto leading-relaxed font-light bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
              Aqui você aprende passo a passo como dominar a técnica OrganicFlow — do planejamento ao polimento — com foco total em resultados estéticos previsíveis, naturais e que competem com porcelanas em brilho e acabamento.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 6 — MÓDULOS DO CURSO */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#080808] to-[#111111] px-5 relative border-y border-white/5">
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-12 md:mb-16 text-center drop-shadow-md px-2">O Que Você Vai Aprender no Fluxo Completo</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
            {[
              { num: "Módulo 1", title: "Método VR", desc: "O raciocínio por trás da técnica que estrutura cada etapa do atendimento estético." },
              { num: "Módulo 2", title: "Layout Virtual", desc: "Aprenda a aplicar o layout virtual mesmo sem softwares caros e encante o paciente." },
              { num: "Módulo 3", title: "Técnica OrganicFlow", desc: "Entenda exatamente como fazer a concha palatina e aplicar resinas com lógica visual." },
              { num: "Módulo 4", title: "Dentes Escurecidos", desc: "Saiba como resolver casos com discromia severa e estratificação precisa." },
              { num: "Módulo 5", title: "Prevenindo Erros", desc: "Domine os erros mais comuns e evite retrabalho com decisões clínicas seguras." },
              { num: "Módulo 6", title: "Casos Reais", desc: "Veja o raciocínio por trás de cada decisão com documentação de ponta e aplicação prática." }
            ].map((mod, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-gradient-to-br from-[var(--color-bg-card)] to-[#080808] border border-[rgba(201,168,76,0.15)] rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-[rgba(201,168,76,0.4)] group h-full">
                  <span className="text-xs text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-bold mb-2 block">{mod.num}</span>
                  <h3 className="font-headline text-2xl text-[var(--color-gold-primary)] group-hover:text-[var(--color-gold-light)] mb-3">{mod.title}</h3>
                  <p className="text-[var(--color-text-secondary)] font-light leading-relaxed text-sm md:text-base">{mod.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="bg-gradient-to-r from-[var(--color-bg-card)] to-black border border-[var(--color-gold-primary)]/30 rounded-2xl p-6 md:p-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div>
                <h3 className="font-headline text-2xl text-[var(--color-text-primary)] mb-2 flex items-center gap-3 justify-center md:justify-start">
                  <Star className="w-6 h-6 text-[var(--color-gold-primary)] fill-[var(--color-gold-primary)]" />
                  E MAIS...
                </h3>
                <ul className="text-[var(--color-text-secondary)] font-light space-y-2 mt-4 text-left text-sm md:text-base">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[var(--color-gold-primary)] shrink-0" /> Gravação de um caso ao vivo completo</li>
                </ul>
              </div>
              <CTAButton className="shrink-0 w-full md:w-auto">QUERO ACESSAR AGORA</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 7 — PARA QUEM É ESTE CURSO */}
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-4 px-2">Este Curso É Para Você Se…</h2>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-12 md:mb-16 font-light">Veja se você se encaixa no perfil que transformamos:</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left">
            {[
              { title: "INSATISFAÇÃO", text: "Você sente que entrega um bom resultado, mas ele ainda parece artificial." },
              { title: "INICIANTE", text: "Quer aprender certo, desde o início, com base clínica sólida e sem técnicas genéricas." },
              { title: "RESULTADOS", text: "Quer entregar lentes que fazem o paciente se enxergar no espelho e dizer: ficou perfeito." },
              { title: "ORGANIZAÇÃO", text: "Prefere um método claro, direto e com lógica — que economiza tempo." }
            ].map((item, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8 h-full flex flex-col hover:border-[var(--color-gold-primary)]/30 transition-all duration-300">
                  <CheckCircle2 className="w-7 h-7 text-[var(--color-gold-primary)] mb-5 opacity-80" />
                  <h3 className="font-sans font-bold tracking-wider text-xs md:text-sm text-[var(--color-gold-light)] mb-3">{item.title}</h3>
                  <p className="text-[var(--color-text-secondary)] font-light leading-relaxed text-sm">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 — RESULTADOS */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[var(--color-bg-primary)] to-[#0a0a0a] px-5 border-y border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-2xl md:text-4xl mb-4">Veja os resultados que você pode alcançar</h2>
            <p className="text-xl md:text-2xl text-gold-gradient font-semibold mb-12 md:mb-16 px-4">
              Técnica OrganicFlow
            </p>
          </FadeIn>
          
          <ResultsCarousel />
        </div>
      </section>

      {/* SEÇÃO 9 — DEPOIMENTOS EM VÍDEO */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] px-5 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-12 md:mb-16">O que os nossos alunos dizem:</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-10 text-left">
            {[
              { id: "557b3436-0905-4051-a95e-ca5129b43074", author: "Dra Bruna Dias" },
              { id: "2772594e-b0ee-4444-8c8c-9c2a9503cc8d", author: "Dra Juliana Pascoal" },
              { id: "c3cef778-d695-462d-a992-cac3e2f0986c", author: "Dr Paulo Egídio" }
            ].map((test, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <div className="flex flex-col gap-4">
                  <LazyVideoPlayer 
                    id={test.id} 
                    vertical={true} 
                    className="rounded-2xl border border-[var(--color-gold-primary)]/20 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                  />
                  <div className="px-2">
                    <p className="text-base md:text-lg text-[var(--color-gold-light)] font-medium">{test.author}</p>
                    <p className="text-[10px] md:text-xs text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5">Aluno(a) Método VR</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 10 — SOBRE O DR. VINICIUS ROSA */}
      <section className="py-16 md:py-24 px-5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <FadeIn className="w-full md:w-1/2">
            <div className="aspect-[4/5] bg-gradient-to-tr from-[#161616] to-[#0a0a0a] rounded-2xl border border-[var(--color-gold-primary)]/20 relative overflow-hidden group">
               <img 
                 src={drViniciusImg} 
                 alt="Dr. Vinicius Rosa" 
                 className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                 loading="lazy"
                 decoding="async"
                 width="500"
                 height="625"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-gold-primary)] uppercase bg-[var(--color-gold-primary)]/10 py-1 px-4 rounded-full border border-[var(--color-gold-primary)]/20 mb-6 inline-block">Sobre Mim</span>
            <h2 className="font-display text-3xl md:text-5xl mb-6">Olá, eu sou o<br/><span className="text-gold-gradient">Dr. Vinicius Rosa</span></h2>
            <div className="text-base md:text-lg text-[var(--color-text-secondary)] font-light leading-relaxed space-y-6 mb-8 md:mb-10">
              <p>Sou dentista especializado em Odontologia Estética e Implante, com 10 anos de prática focada em lentes em resina.</p>
              <p>Sou o criador do Método VR e da técnica OrganicFlow, e já ajudei centenas de dentistas a transformarem seus resultados clínicos.</p>
            </div>
            <CTAButton>GARANTIR MEU ACESSO AGORA</CTAButton>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 11 — INVESTIMENTO */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] px-5 relative overflow-hidden border-t border-white/5" id="investimento">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-12 md:mb-16 drop-shadow-md">Investimento</h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-b from-[#161616] to-[#0a0a0a] border border-[var(--color-gold-primary)]/40 rounded-[2rem] p-8 md:p-16 max-w-xl mx-auto mb-10 text-center relative overflow-hidden">
              <div className="mb-6">
                <span className="bg-[#FF3300] text-white font-bold text-xs tracking-wider px-3 py-1 rounded-full uppercase inline-block mb-3 animate-pulse">79% OFF</span>
                <p className="text-lg text-[var(--color-text-muted)] line-through font-light decoration-red-500/50">De R$ 1.414</p>
              </div>
              <p className="text-[var(--color-text-secondary)] font-light mb-1 text-sm md:text-base">Por apenas:</p>
              <div className="flex flex-col items-center justify-center mb-6">
                <span className="text-lg md:text-xl font-light text-[var(--color-text-primary)]">12x</span>
                <span className="text-gold-gradient text-5xl md:text-7xl font-display font-bold my-2">R$ 101,30</span>
                <span className="text-[var(--color-text-secondary)] text-base md:text-lg">ou à vista por R$ 997</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed max-w-sm mx-auto mb-8 border-t border-white/10 pt-6">
                <strong className="text-white font-medium">Acesso completo ao Método VR OrganicFlow</strong> + certificado + 7 dias de garantia.
              </p>
              <CTAButton className="w-full mb-6">QUERO O FLUXO COMPLETO</CTAButton>
              <div className="flex items-center justify-center gap-2 text-[var(--color-text-muted)] text-[10px] md:text-xs">
                <ShieldCheck className="w-3.5 h-3.5" /> Pagamento 100% Seguro
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 12 — GARANTIA */}
      <section className="py-16 md:py-24 px-5 relative bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeIn>
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--color-bg-card)] to-black border border-[var(--color-gold-primary)]/20 rounded-full flex items-center justify-center mb-8">
              <ShieldCheck className="w-10 h-10 text-[var(--color-gold-primary)]" />
            </div>
            <h2 className="font-display text-2xl md:text-4xl mb-6 text-[var(--color-text-primary)]">Garantia de 7 Dias Incondicional</h2>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] mb-6 leading-relaxed font-light px-4">
              Não gostou? Achou que não valeu a pena? Você tem 7 dias para pedir reembolso total sem justificativa. Risco zero para você.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SEÇÃO 13 — FAQ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] px-5 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-12 md:mb-16 text-center">Perguntas Frequentes</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { q: "Quanto tempo terei acesso?", a: "Você terá acesso ao curso por 1 ano, podendo assistir quantas vezes quiser." },
              { q: "Preciso de experiência prévia?", a: "Não! O curso atende tanto iniciantes quanto profissionais experientes." },
              { q: "O curso oferece certificação?", a: "Sim! Ao concluir todas as aulas, você receberá um certificado de conclusão." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <div className="border border-white/10 rounded-xl overflow-hidden bg-[#161616]">
                  <button onClick={() => toggleFaq(i)} className="w-full text-left p-5 md:p-6 flex justify-between items-center">
                    <span className="font-headline text-lg md:text-2xl text-[var(--color-gold-primary)] pr-6">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5 text-[var(--color-text-secondary)]" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <div className="p-6 pt-0 text-[var(--color-text-secondary)] text-sm md:text-lg font-light leading-relaxed">
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 14 — URGÊNCIA FINAL */}
      <section className="py-16 md:py-24 px-5 relative border-t border-[var(--color-gold-primary)]/20">
        <div className="max-w-4xl mx-auto text-center bg-[#161616] border border-[var(--color-gold-primary)]/30 rounded-2xl p-8 md:p-16 relative overflow-hidden">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl text-[#FF3300] mb-4">⚠️ ALERTA!</h2>
            <h3 className="text-lg md:text-2xl text-[var(--color-text-primary)] font-headline italic mb-8">As vagas são limitadas por tempo reduzido.</h3>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed font-light mb-10 max-w-2xl mx-auto px-2">Se você quer dominar as facetas em resina com resultado previsível e natural — clique no botão abaixo agora.</p>
            <CTAButton className="w-full max-w-md mx-auto">GARANTIR MINHA VAGA</CTAButton>
          </FadeIn>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-10 bg-[#050505] border-t border-white/5 text-center px-5">
        <div className="max-w-6xl mx-auto text-[10px] md:text-xs text-[var(--color-text-muted)] tracking-wider">
          <h2 className="font-display text-xl md:text-2xl text-[var(--color-gold-dark)] mb-4 tracking-widest">VR CONCEPT</h2>
          <p>© {new Date().getFullYear()} - TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </footer>
    </>
  );
}