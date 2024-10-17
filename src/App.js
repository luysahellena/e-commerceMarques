// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Roteamento atualizado
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import ProductsShowcase from './components/ProductsShowcase';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';

const App = () => {
  const [cart, setCart] = useState([]); // Carrinho inicial como array vazio

  const addToCart = (product, quantity) => {
    const newItem = { ...product, quantity };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  return (
    <>
      <NavBar cart={cart} /> {/* Passando o estado do carrinho */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <About />
              <ProductsShowcase />
              <Newsletter />
              <Contact />
            </>
          }
        />
        <Route
          path="/catalog"
          element={<ItemListContainer addToCart={addToCart} />}
        />
        <Route
          path="/item/:id"
          element={<ItemDetail addToCart={addToCart} />}
        />
      </Routes>
    </>
  );
};

export default App;
