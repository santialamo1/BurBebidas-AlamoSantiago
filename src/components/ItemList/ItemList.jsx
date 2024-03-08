import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ bebidas }) => {
  return (
    <div className="item-list">
      {Array.isArray(bebidas) ? bebidas.map((bebida, index) => (
        <Item key={index} bebida={bebida} />
      )) : (
        <p>No hay bebidas disponibles</p>
      )}
    </div>
  );
};

export default ItemList;