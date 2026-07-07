import React, { Suspense, lazy } from 'react';

// COMPONENTES CRÍTICOS DA PRIMEIRA DOBRA (Síncronos para evitar Tela Branca)
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';

// CODE SPLITTING: Componentes abaixo da dobra são divididos em arquivos JS separados.
// Reduz a execução inicial do JS (Unused JS) e fragmenta a hidratação do React (elimina Long Tasks).
const ResultsCarousel = lazy(() => import('../components/ResultsCarousel'));
const SolutionSection = lazy(() => import('../components/SolutionSection'));
const InstructorSection = lazy(() => import('../components/InstructorSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));
const AudienceSection = lazy(() => import('../components/AudienceSection'));
const OfferSection = lazy(() => import('../components/OfferSection'));
const GuaranteeSection = lazy(() => import('../components/GuaranteeSection'));
const FAQSection = lazy(() => import('../components/FAQSection'));
const LastCallSection = lazy(() => import('../components/LastCallSection'));
const Footer = lazy(() => import('../components/Footer'));

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black overflow-x-hidden selection:bg-brand-gold selection:text-brand-black">
      <Header />
      <main>
        {/* Renderização imediata da primeira dobra */}
        <Hero />
        <ProblemSection />
        
        {/* Carregamento "preguiçoso" particionado do restante do conteúdo */}
        <Suspense fallback={<div className="min-h-[50vh] bg-brand-black flex justify-center items-center"></div>}>
          <ResultsCarousel />
          <SolutionSection />
          <InstructorSection />
          <TestimonialsSection />
          <AudienceSection />
          <OfferSection />
          <GuaranteeSection />
          <FAQSection />
          <LastCallSection />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default LandingPage;