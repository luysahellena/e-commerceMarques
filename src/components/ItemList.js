// src/components/ItemList.js
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);

  // Lista de 20 produtos
  const products = [
    { id: 1, name: 'Whisky Black Label', price: 199.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Chivas Regal', price: 149.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Jack Daniel\'s', price: 99.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Jameson Irish Whiskey', price: 129.99, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Johnnie Walker Red Label', price: 89.99, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Bacardi Carta Blanca Rum', price: 79.99, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Hennessy Cognac', price: 249.99, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Martini Rosso Vermouth', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Patrón Silver Tequila', price: 299.99, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Grey Goose Vodka', price: 159.99, image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Tanqueray London Dry Gin', price: 119.99, image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Ciroc Vodka', price: 189.99, image: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Captain Morgan Spiced Rum', price: 69.99, image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Don Julio Añejo Tequila', price: 349.99, image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Moët & Chandon Champagne', price: 499.99, image: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Heineken Lager Beer', price: 12.99, image: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Corona Extra Beer', price: 9.99, image: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Budweiser Lager Beer', price: 8.99, image: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Guinness Draught', price: 14.99, image: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Stella Artois', price: 10.99, image: 'https://via.placeholder.com/150' }
  ];

  // Simulando uma requisição com timeout
  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    fetchProducts.then((data) => setItems(data));
  }); // 

  return (
    <Row>
      {items.map((product) => (
        <Col md={4} key={product.id}>
          <Card className="mb-4">
            <Card.Img variant="top" src={product.image} />
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
