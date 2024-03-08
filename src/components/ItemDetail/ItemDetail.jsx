import React from 'react';
import './ItemDetail.css'

const ItemDetail = ({ bebida, imagen }) => {
  return (
    <div className='item-detail'>
      {imagen && <img src={imagen} alt={bebida.nombre} />}
      <h2>Nombre: {bebida.nombre}</h2>
      <h2>Precio: {bebida.precio}</h2>
      <h2>Tipo: {bebida.tipo}</h2>
      <p>Descripción: {bebida.descripcion}</p>
    </div>
  );
};

export default ItemDetail;