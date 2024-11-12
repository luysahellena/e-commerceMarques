// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart';
import Banner from './components/Banner';
import About from './components/About';
import ProductsShowcase from './components/ProductsShowcase';
import Newsletter from './components/Newsletter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './components/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('YOUR_PUBLIC_STRIPE_KEY');

const App = () => {
  return (
    <CartProvider>
      <ToastContainer />
      <NavBar />
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/" element={<><Banner /><About /><ProductsShowcase /><Newsletter /></>} />
          <Route path="/catalog" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Elements>
    </CartProvider>
  );
};

export default App;
