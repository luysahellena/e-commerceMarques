import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { useCart } from './CartContext';


const handleCheckout = () => {
  // Redirecionar para o link de checkout da Stripe
  window.location.href = 'https://buy.stripe.com/test_00gdUggiZdhw18YbII'; // substitua pelo link de checkout da Stripe
};
const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h2>Seu carrinho está vazio</h2>
        <Button as="a" href="/catalog" variant="primary">
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

      {/* Botão de compra da Stripe */}
      <Button variant="success" className="mt-3" onClick={handleCheckout}>
        Finalizar Compra
      </Button>
    </Container>
  );
};

export default Cart;
