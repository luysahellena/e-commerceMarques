// src/components/CheckoutForm.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Form, Spinner } from 'react-bootstrap';

const CheckoutForm = ({ handleOrder }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    
    // Obter o método de pagamento do Stripe
    const { error } = await stripe.createPaymentMethod({

      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error("Erro no pagamento:", error);
      alert("Erro ao processar o pagamento.");
      setLoading(false);
      return;
    }

    // Aqui você pode associar o ID do pagamento com o pedido criado no Firestore
    await handleOrder();

    alert("Pagamento realizado com sucesso!");
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <CardElement className="p-2 border rounded" />
      <Button
        type="submit"
        variant="success"
        className="mt-3"
        disabled={!stripe || loading}
      >
        {loading ? <Spinner animation="border" size="sm" /> : "Pagar"}
      </Button>
    </Form>
  );
};

export default CheckoutForm;
