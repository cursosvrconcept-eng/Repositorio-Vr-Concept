import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { VariantProvider } from './components/VariantContext';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Rotas relativas ao basename "/eng" configurado no BrowserRouter */}
      <Route path="/" element={<VariantProvider slug="default"><LandingPage /></VariantProvider>} />
      <Route path="/v1" element={<VariantProvider slug="v1"><LandingPage /></VariantProvider>} />
      {/* Para adicionar novas variantes: crie a entrada em variants.ts e adicione uma Route aqui */}
    </Routes>
  );
};

export default App;