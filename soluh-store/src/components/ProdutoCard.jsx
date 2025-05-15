import React from 'react';
import '../styles/ProdutoCard.css';

function ProdutoCard({ produto }) {
  return (
    <div className="produto-card">
      <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
      <h3 className="produto-nome">{produto.nome}</h3>
      <p className="produto-preco">R$ {produto.preco.toFixed(2)}</p>
      <button className="produto-botao">Ver Detalhes</button>
    </div>
  );
}

export default ProdutoCard;