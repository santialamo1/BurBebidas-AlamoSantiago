import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'; 
import './ItemListContainer.css'


const ItemListContainer = () => {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./bebidas.json");
        const data = await response.json();
        setBebidas(data.bebidas);
        console.log(data);
      } catch(error){
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="item-list-container">
      <h2>Lista de Bebidas</h2>
      <ItemList bebidas={bebidas} />
    </div>
  );
};

export default ItemListContainer;