import React from 'react';
import ProdutoCard from '../components/ProdutoCard';
import '../styles/ProdutosPage.css';

const produtos = [
  { id: 1, nome: 'Blusa Rosa Floral', preco: 79.90, imagem: 'url_da_imagem_1.jpg' },
  { id: 2, nome: 'Calça Verde Musgo', preco: 129.50, imagem: 'url_da_imagem_2.jpg' },
  { id: 3, nome: 'Vestido Rosa Bebê', preco: 99.00, imagem: 'url_da_imagem_3.jpg' },
  // Adicione mais produtos aqui
];

function ProdutosPage() {
  return (
    <div className="produtos-page">
      <h1>Nossos Produtos</h1>
      <div className="produtos-grid">
        {produtos.map(produto => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default ProdutosPage;