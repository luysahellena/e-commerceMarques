// src/components/Newsletter.js
import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2>Assine Nossa Newsletter</h2>
      <p>Receba ofertas e novidades diretamente no seu e-mail.</p>
      <form>
        <input type="email" placeholder="Seu e-mail" />
        <button type="submit" className="btn btn-success">Assinar</button>
      </form>
    </section>
  );
};

export default Newsletter;
