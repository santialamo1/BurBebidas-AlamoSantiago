import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
  const { nombre, descripcion, tipo, precio, imagen } = item;

  const handleAddToCart = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} ${nombre}`);
  };

  return (
    <div className="item-detail">
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Tipo: {tipo}</p>
      <p>Precio: ${precio}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;