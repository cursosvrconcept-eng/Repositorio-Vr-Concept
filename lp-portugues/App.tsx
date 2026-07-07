import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy loading components below the fold to reduce initial JS payload
const ProblemSection = lazy(() => import('./components/ProblemSection'));
const ResultsCarousel = lazy(() => import('./components/ResultsCarousel'));
const SolutionSection = lazy(() => import('./components/SolutionSection'));
const InstructorSection = lazy(() => import('./components/InstructorSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const AudienceSection = lazy(() => import('./components/AudienceSection'));
const OfferSection = lazy(() => import('./components/OfferSection'));
const GuaranteeSection = lazy(() => import('./components/GuaranteeSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const LastCallSection = lazy(() => import('./components/LastCallSection'));
const Footer = lazy(() => import('./components/Footer'));

// Simple loading placeholder to avoid layout shift during lazy load
const SectionLoader = () => <div className="h-20 bg-brand-black" />;

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black overflow-x-hidden selection:bg-brand-gold selection:text-brand-black">
      <Header />
      <main>
        <Hero />
        
        {/* Suspense handles the loading state of lazy components */}
        <Suspense fallback={<SectionLoader />}>
          <ProblemSection />
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
      
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;