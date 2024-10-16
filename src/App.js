// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import Banner from './components/Banner';

const App = () => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (product, quantity) => {
    const newItem = { ...product, quantity };
    setCart((prevCart) => [...prevCart, newItem]);
  };

  return (
    <Router>
      <NavBar cart={cart} />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route 
          path="/catalog" 
          element={<ItemListContainer addToCart={addToCart} />} 
        />
        <Route 
          path="/item/:id" 
          element={<ItemDetail addToCart={addToCart} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;