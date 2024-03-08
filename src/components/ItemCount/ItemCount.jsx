import React, { useState } from 'react';
import { useCart } from '../CartContext/CartContext';
import './ItemCount.css'

const ItemCount = ({ stock, initial, product }) => {
  const { addToCart } = useCart();
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

  const handleAddToCart = () => {
    addToCart(product, count);
  };

  return (
    <div className="item-count">
      <button onClick={Decrement}>-</button>
      <span>{count}</span>
      <button onClick={Increment}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;