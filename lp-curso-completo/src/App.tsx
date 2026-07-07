import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Clock, AlertTriangle } from 'lucide-react';
import { FadeIn, CTAButton } from './components/ui';
import LazyVideoPlayer from './components/LazyVideoPlayer';

const BelowTheFold = lazy(() => import('./components/BelowTheFold'));

function LandingPage() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 15 * 60 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-sans overflow-x-hidden selection:bg-[var(--color-gold-primary)] selection:text-black">
      <div className="bg-[#FF3300] text-white py-2.5 px-4 flex items-center justify-center gap-2 text-center w-full z-50 shadow-[0_4px_20px_rgba(255,51,0,0.3)] sticky top-0">
        <span className="font-medium text-xs md:text-sm tracking-wide uppercase">
          ⚠️ ATENÇÃO: VAGAS ABERTAS COM BÔNUS EXCLUSIVOS ACESSO LIBERADO POR TEMPO LIMITADO.
        </span>
      </div>

      <section className="pt-6 md:pt-12 pb-12 md:pb-16 px-5 relative overflow-hidden flex flex-col justify-center items-center text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-gold-primary)] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center relative z-10">
          <FadeIn>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl mb-3 max-w-4xl leading-[1.15] drop-shadow-lg">
              Lentes em Resina que parecem Porcelana.
            </h1>
            <h2 className="font-display text-xl md:text-3xl text-gold-gradient mb-6 leading-tight drop-shadow-md">
              Do diagnóstico ao polimento — resultado previsível em cada caso.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full max-w-3xl mx-auto mt-2 mb-8 md:mb-10">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="bg-[#FF3300]/10 border border-[#FF3300]/30 text-[#FF3300] py-1.5 px-5 rounded-full flex items-center gap-2 mb-3 animate-pulse">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-[10px] md:text-xs font-bold tracking-wider uppercase tabular-nums">ASSISTA AGORA — VÍDEO DISPONÍVEL POR: {formatTime(timeLeft)}</span>
              </div>
            </div>
            <LazyVideoPlayer 
              id="768fc14f-a965-46a2-b249-3b371b24f615" 
              className="rounded-xl border border-[var(--color-gold-primary)]/30 shadow-[0_15px_50px_rgba(201,168,76,0.15)]"
            />
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-light px-4">
              A maioria dos dentistas domina a técnica, mas ainda entrega resultados que parecem artificiais. O que separa um resultado bom de um resultado extraordinário não é talento — <span className="text-[var(--color-text-primary)] font-medium">é método. Conheça o Método VR OrganicFlow.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.5} className="w-full">
            <CTAButton className="animate-[pulse-soft_3s_infinite] hover:animate-none w-full max-w-md">
              QUERO O FLUXO COMPLETO AGORA
            </CTAButton>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] px-5 relative border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold-primary)]/20 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-8 md:mb-12 leading-tight px-2">
              Você entrega bons resultados. Mas ainda não são<br className="hidden md:block"/>
              <span className="text-[var(--color-text-secondary)]"> extraordinários?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-[#161616] to-[#0a0a0a] p-8 md:p-14 border border-white/[0.08] rounded-[2rem] text-left relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <AlertTriangle className="w-10 h-10 text-[var(--color-gold-primary)] mb-6 opacity-80" />
              <p className="text-lg md:text-xl text-[var(--color-text-primary)] mb-6 leading-relaxed font-light">
                É comum: você aplica a técnica, segue os passos, e o resultado ainda parece... artificial. Sem naturalidade. Sem aquele brilho que encanta o paciente.
              </p>
              <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-6 leading-relaxed font-light">
                O problema não é falta de habilidade. <strong className="text-white font-medium">É falta de um método estruturado.</strong> Sem fluxo, cada caso vira uma aposta.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Suspense fallback={<div className="min-h-screen bg-[var(--color-bg-primary)]"></div>}>
        <BelowTheFold />
      </Suspense>

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

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.PROD ? "/organicflowonline" : "/"}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/curso" element={<Navigate to="https://pay.hub.la/cHnbwQR4X5jlOhhjv544" replace />} />
      </Routes>
    </BrowserRouter>
  );
}