import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { cartItems, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const totalAmount = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);

  return (
    <div className="cart-widget">
      <img src="/shopping-cart.svg" alt="Cart Icon" className="cart-icon" onClick={handleCartClick} />
      <p>{cartItems.length}</p>
      {isCartOpen && (
        <div className="cart-content">
          <h3>Carrito</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.nombre} - Cantidad: {item.quantity}
                <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h4>Total: ${totalAmount.toFixed(2)}</h4>
          
          <Link to="/checkout">Finalizar compra</Link>
        </div>
      )}
    </div>
  );
};

export default CartWidget;