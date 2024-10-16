import React, { useEffect, useState } from 'react';
import Item from './Item';
import './ProductsShowcase.css';

const ProductsShowcase = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Whisky Black Label', price: 120, image: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Chivas Regal', price: 150, image: 'https://via.placeholder.com/150' },
          { id: 3, name: 'Jack Daniel\'s', price: 200, image: 'https://via.placeholder.com/150' },
        ]);
      }, 2000);
    });

    fetchProducts.then(data => setProducts(data));
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ProductsShowcase;