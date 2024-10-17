// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contato</h2>
      <p>Entre em contato conosco para mais informações.</p>
      <ul>
        <li>Email: contato@louysbeer.com</li>
        <li>Telefone: (11) 1234-5678</li>
        <li>Endereço: Rua das Bebidas, 123 - São Paulo, SP</li>
      </ul>
    </section>
  );
};

export default Contact;
