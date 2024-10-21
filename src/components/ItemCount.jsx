
import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="mt-3">
      <ButtonGroup>
        <Button variant="outline-secondary" onClick={decrement}>
          -
        </Button>
        <span className="mx-2">{count}</span>
        <Button variant="outline-secondary" onClick={increment}>
          +
        </Button>
      </ButtonGroup>
      <Button className="mt-2" onClick={() => onAdd(count)} variant="success">
        Adicionar ao Carrinho
      </Button>
    </div>
  );
};

export default ItemCount;