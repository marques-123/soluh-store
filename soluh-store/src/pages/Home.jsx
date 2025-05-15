import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vindos à Soluh Store</h1>
          <p>Sua loja de moda com as cores vibrantes que você ama: verde e rosa!</p>
          <button className="hero-button">Ver Coleção</button>
        </div>
      </section>

      <section className="destaques">
        <h2>Nossos Destaques</h2>
        <div className="destaques-grid">
          {/* Aqui você pode adicionar alguns produtos em destaque */}
          <div className="destaque-item">Produto 1</div>
          <div className="destaque-item">Produto 2</div>
          <div className="destaque-item">Produto 3</div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;