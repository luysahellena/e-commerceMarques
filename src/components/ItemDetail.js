// src/components/ItemDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify'; // Importando o toast
import products from '../data/Products.js'; // Importando a lista de produtos

const ItemDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = products.find((item) => item.id === parseInt(id));
        resolve(foundProduct);
      }, 1000);
    });

    fetchProduct.then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success(`${product.name} foi adicionado ao carrinho!`); // Exibe um toast
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" />
      </Container>
    );
  }

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <Card style={{ width: '24rem', margin: 'auto' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>R$ {product.price.toFixed(2)}</Card.Text>
        <Button variant="success" onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
