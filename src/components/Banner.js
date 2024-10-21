// src/components/Banner.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="overlay">
        <h1 className="banner-title">Beer's and Cheers for everyone! </h1>
        <p className="banner-subtitle">
          Descubra nossas melhores bebidas e aproveite cada momento.
        </p>
        <Link to="/catalog" className="btn btn-primary btn-lg">
          Explore Nosso Catálogo
        </Link>
      </div>
    </section>
  );
};

export default Banner;
