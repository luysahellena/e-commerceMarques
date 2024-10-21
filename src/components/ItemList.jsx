// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../data/Products.jsx'; // Importando a lista de produtos

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => resolve(products), 1000);
    });

    fetchProducts.then((data) => setItems(data));
  }, []);

  return (
    <Row>
      {items.map((product) => (
        <Col md={3} key={product.id}>
          <Card className="mb-3">
            <Card.Img 
              variant="top" 
              src={product.image} 
              alt={product.name} // Alt para acessibilidade
              onError={(e) => e.target.src = '/img/products/placeholder.png'} // Fallback se a imagem falhar
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>R$ {product.price.toFixed(2)}</Card.Text>
              <Button as={Link} to={`/item/${product.id}`} variant="primary">
                Ver Detalhes
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ItemList;
