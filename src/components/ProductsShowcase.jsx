// src/components/ProductsShowcase.js
import React from 'react';
import './ProductsShowcase.css';

const ProductsShowcase = () => {
  return (
    <section className="products-showcase">
      <h2>Destaques</h2>
      <div className="product-grid">
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Produto 1" />
          <h3>Whisky Black Label</h3>
          <p>R$ 199.99</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Produto 2" />
          <h3>Chivas Regal</h3>
          <p>R$ 149.99</p>
        </div>
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Produto 3" />
          <h3>Grey Goose Vodka</h3>
          <p>R$ 159.99</p>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
