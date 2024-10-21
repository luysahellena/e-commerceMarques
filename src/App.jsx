// src/App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Não use Router aqui
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import Banner from './components/Banner';
import About from './components/About';
import ProductsShowcase from './components/ProductsShowcase';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify'; // Importando ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importando CSS do Toastify


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>

      
      <NavBar cart={cart} />
      <ToastContainer />
      
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
        <Route path="/catalog" element={<ItemList />} />
        <Route
          path="/item/:id"
          element={<ItemDetail addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
