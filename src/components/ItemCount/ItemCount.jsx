import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const Increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const Decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const AddToCart = () => {
    onAdd(count);
  };

  return (
    <div className="item-count">
      <button onClick={Decrement}>-</button>
      <span>{count}</span>
      <button onClick={Increment}>+</button>
      <button onClick={AddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;