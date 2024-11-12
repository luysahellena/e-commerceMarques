// src/components/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Cria o contexto do carrinho
export const CartContext = createContext();

// Hook para acessar o contexto do carrinho
export const useCart = () => useContext(CartContext);

// Provedor do contexto do carrinho
export const CartProvider = ({ children }) => {
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
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
