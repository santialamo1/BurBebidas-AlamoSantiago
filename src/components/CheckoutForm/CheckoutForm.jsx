import React, { useState } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp, doc, runTransaction } from 'firebase/firestore';
import { useCart } from '../CartContext/CartContext';
import './CheckoutForm.css'

const CheckoutForm = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    metodoDePago: '',
  });
  
  const totalAmount = cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("cartItems:", cartItems);
    try {
      const db = getFirestore();
      const orderRef = await addDoc(collection(db, 'orders'), {
        nombreCliente: formData.nombre,
        direccionCliente: formData.direccion,
        metodoDePago: formData.metodoDePago,
        productos: cartItems,
        montoTotal: totalAmount,
        fechaCreacion: serverTimestamp(),
      });
      for (const item of cartItems) {
        const productRef = doc(db, 'bebidas', item.id);
        await runTransaction(db, async (transaction) => {
          const productDoc = await transaction.get(productRef);
          if (!productDoc.exists()) {
            throw new Error('Producto no encontrado en la base de datos.');
          }
          const nuevoStock = productDoc.data().stock - item.quantity;
          if (nuevoStock < 0) {
            throw new Error('Stock insuficiente.');
          }
          transaction.update(productRef, { stock: nuevoStock });
        });
      }

      alert('¡Compra finalizada!');
    } catch (error) {
      console.error('Error al completar la compra:', error.message);
      alert('Error al completar la compra. Por favor, inténtalo de nuevo.');
    }
  };


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="checkout-form-container">
      <h2>Rellene el siguiente formulario para finalizar la compra</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" placeholder="Nombre" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" id="direccion" name="direccion" placeholder="Dirección" onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="metodoDePago">Método de pago:</label>
          <input type="text" id="metodoDePago" name="metodoDePago" placeholder="Método de pago" onChange={handleInputChange} />
        </div>
        <button type="submit" className="submit-button">Finalizar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;