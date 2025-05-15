import React from 'react';
import '../styles/ContatoPage.css';

function ContatoPage() {
  return (
    <div className="contato-page">
      <h1>Entre em Contato</h1>
      <p>Estamos sempre prontos para te atender!</p>
      <form className="contato-form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem"></textarea>
        </div>
        <button type="submit" className="contato-botao">Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default ContatoPage;