// src/components/ProductsShowcase.js
import React from 'react';
import './ProductsShowcase.css';
import { useCart } from './CartContext'; // Importa o contexto do carrinho

const ProductsShowcase = () => {
  const { addToCart } = useCart(); // Obtém a função addToCart do contexto

  // Função para adicionar um produto ao carrinho
  const handleAddToCart = (product) => {
    addToCart(product, 1); // Adiciona o produto ao carrinho com a quantidade 1
  };

  const products = [
    {
      id: 1,
      name: 'Whisky Black Label',
      price: 199.99,
      image: '/img/products/blacklabel.jpg'
    },
    {
      id: 2,
      name: 'Chivas Regal',
      price: 149.99,
      image: '/img/products/chivas.jpg'
    },
    {
      id: 3,
      name: 'Grey Goose Vodka',
      price: 159.99,
      image: '/img/products/goose.jpg'
    }
  ];

  return (
    <section className="products-showcase">
      <h2>Destaques</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsShowcase;
