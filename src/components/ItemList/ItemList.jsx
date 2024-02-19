import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ bebidas }) => {
  return (
    <div className="item-list">
      {Array.isArray(bebidas) ? bebidas.map((bebida) => (
        <Item key={bebida.id} bebida={bebida} />
      )) : (
        <p>No hay bebidas disponibles</p>
      )}
    </div>
  );
};

export default ItemList;