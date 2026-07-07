import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/usd" element={<LandingPage />} />
      {/* Puedes añadir más rutas aquí en el futuro */}
    </Routes>
  );
};

export default App;