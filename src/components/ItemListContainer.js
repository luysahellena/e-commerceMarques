import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <h2>{greeting}</h2>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;