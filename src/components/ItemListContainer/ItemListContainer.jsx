import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import data from '../bebidas.json'; 
import './ItemListContainer.css'


const ItemListContainer = () => {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    const bebidasData = data.bebidas;
    setBebidas(bebidasData);
  }, []);

  return (
    <div className="item-list-container">
      <h2>Lista de Bebidas</h2>
      <ItemList bebidas={bebidas} />
    </div>
  );
};

export default ItemListContainer;