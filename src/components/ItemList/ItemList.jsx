import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemList.css'

const ItemList = ({ bebidas }) => {
  return (
    <div className="item-list">
      {bebidas && bebidas.map((bebida) => (
        <ItemDetail key={bebida.id} item={bebida} />
      ))}
    </div>
  );
};

export default ItemList;