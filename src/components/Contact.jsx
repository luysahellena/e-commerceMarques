// src/components/Contact.js
import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact mt-5">
      <h2>Contato</h2>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
