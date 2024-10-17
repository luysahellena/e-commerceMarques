// src/components/ItemDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Spinner } from 'react-bootstrap';

const ItemDetail = ({ addToCart }) => {
  const { id } = useParams(); // Obtemos o ID da URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulação de chamada à API
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          name: 'Whisky Black Label',
          description: 'Um whisky refinado com sabor complexo.',
          price: 199.99,
          image: 'https://via.placeholder.com/300',
        });
      }, 1000);
    });

    fetchProduct.then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Card.Img variant="top" src={product.image} />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>R$ {product.price.toFixed(2)}</Card.Text>
              <button className="btn btn-success" onClick={() => addToCart(product, 1)}>
                Adicionar ao Carrinho
              </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
