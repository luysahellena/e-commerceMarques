import React from 'react';
import './Banner.css'; // Arquivo de estilos para o Banner
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <div className="overlay">
        <h1>Enjoy Time with Friends & Scotch Me!</h1>
        <p>Descubra nossas melhores bebidas e aproveite cada momento.</p>
        <Link to="/catalog" className="btn btn-light mt-3">
          Explore Nosso Catálogo
        </Link>
      </div>
    </div>
  );
};

export default Banner;