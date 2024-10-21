// src/components/Cart.js
import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h2>Seu carrinho está vazio</h2>
        <Button as={Link} to="/catalog" variant="primary">
          Voltar ao Catálogo
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Seus produtos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço Unitário</th>
            <th>Quantidade</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>R$ {item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Total: R$ {getTotalPrice()}</h3>
      <Button variant="success" className="mt-3">
        Finalizar Compra
      </Button>
    </Container>
  );
};

export default Cart;
