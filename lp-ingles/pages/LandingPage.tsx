import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import ResultsCarousel from '../components/ResultsCarousel';
import SolutionSection from '../components/SolutionSection';
import InstructorSection from '../components/InstructorSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AudienceSection from '../components/AudienceSection';
import OfferSection from '../components/OfferSection';
import GuaranteeSection from '../components/GuaranteeSection';
import FAQSection from '../components/FAQSection';
import LastCallSection from '../components/LastCallSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black overflow-x-hidden selection:bg-brand-gold selection:text-brand-black">
      <Header />
      <main>
        <Hero />
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
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;