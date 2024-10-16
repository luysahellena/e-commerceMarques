import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductsShowcase.css';

const Item = ({ item }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>R$ {item.price.toFixed(2)}</Card.Text>
        <Button variant="primary">Adicionar ao Carrinho</Button>
      </Card.Body>
    </Card>
  );
};

export default Item;