// src/components/ItemDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Spinner, ListGroup, Badge } from 'react-bootstrap';
import products from '../data/Products.jsx';
import { useCart } from './CartContext'; // Importa o contexto do carrinho

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Obtém addToCart do contexto

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
    alert(`${product.name} foi adicionado ao carrinho!`);
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
    <Container className="mt-5">
      <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: '600px', margin: 'auto' }}>
        <div className="d-flex justify-content-center">
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            style={{ maxWidth: '300px', height: 'auto' }}
            onError={(e) => e.target.src = '/img/products/placeholder.png'}
          />
        </div>
        <Card.Body>
          <Card.Title className="text-center">{product.name}</Card.Title>
          <Card.Text className="text-muted text-center">R$ {product.price.toFixed(2)}</Card.Text>

          <ListGroup variant="flush" className="mb-4">
            <ListGroup.Item><strong>Ano de Produção:</strong> {product.productionYear}</ListGroup.Item>
            <ListGroup.Item>
              <strong>Importado:</strong>
              <Badge bg={product.imported ? "success" : "secondary"} className="ms-2">
                {product.imported ? 'Sim' : 'Não'}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item><strong>Especificações:</strong> {product.specifications}</ListGroup.Item>
          </ListGroup>

          <Button variant="success" className="w-100 mb-3" onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </Button>

          <h5 className="mt-4">Comentários dos Usuários</h5>
          <div className="border p-3 rounded">
            {product.userComments && product.userComments.length > 0 ? (
              product.userComments.map((comment, index) => (
                <p key={index} className="text-muted">{comment}</p>
              ))
            ) : (
              <p className="text-muted">Nenhum comentário disponível no momento.</p>
            )}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetail;
