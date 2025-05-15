import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProdutosPage from './pages/ProdutosPage';
import SobreNosPage from './pages/SobreNosPage';
import ContatoPage from './pages/ContatoPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProdutosPage />} />
        <Route path="/sobre-nos" element={<SobreNosPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;