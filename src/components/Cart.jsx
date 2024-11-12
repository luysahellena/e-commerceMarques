// src/components/Cart.jsx
import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = async () => {
    try {
      // 1. Salvar os dados da compra no Firestore
      const orderRef = await addDoc(collection(db, 'orders'), {
        items: cart,
        total: getTotalPrice(),
        createdAt: new Date(),
      });

      console.log("Compra armazenada no Firebase com ID:", orderRef.id);

      // 2. Redirecionar para o Payment Link da Stripe
      window.location.href = 'https://buy.stripe.com/test_00gdUggiZdhw18YbII';
    } catch (error) {
      console.error("Erro ao processar a compra:", error);
    }
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
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h3>Total: R$ {getTotalPrice()}</h3>
      <Button variant="success" className="mt-3" onClick={handleCheckout}>
        Finalizar Compra
      </Button>
    </Container>
  );
};

export default Cart;
