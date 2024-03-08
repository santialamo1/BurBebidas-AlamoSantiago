import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ bebida }) => {
  return (
    <div className='item'>
      <Link to={`/detail/${bebida.id}`}>
        <img src={bebida.imagen} alt={bebida.nombre} />
        <h2>Nombre: {bebida.nombre}</h2>
        <h2>Precio: {bebida.precio}</h2>
      </Link>
      <ItemCount className='item-count' initial={1} stock={bebida.stock} product={bebida}/>
    </div>
  );
};

export default Item;