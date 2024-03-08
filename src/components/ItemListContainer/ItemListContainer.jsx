import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'; 
import SearchInput from '../SearchInput/SearchInput';
import './ItemListContainer.css'
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
  const [bebidas, setBebidas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBebidas, setFilteredBebidas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const bebidasCollection = collection(db, "bebidas");
        const bebidasSnapshot = await getDocs(bebidasCollection);
        const bebidasList = bebidasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(bebidasList)
        setBebidas(bebidasList);
        setFilteredBebidas(bebidasList);
      } catch(error){
        console.log(error);
      }
    }
  
    fetchData();
  }, []);

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  useEffect(() => {
    const filteredProducts = bebidas.filter((bebida) =>
      bebida.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBebidas(filteredProducts);
  }, [bebidas, searchTerm]);

  return (
    <div className="item-list-container">
      <h2>Lista de Bebidas</h2>
      
      <SearchInput searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <ItemList bebidas={filteredBebidas} />
    </div>
  );
};

export default ItemListContainer;