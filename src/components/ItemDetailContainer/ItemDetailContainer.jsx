import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { addToCart } = useCart();
  const [bebidaSeleccionada, setBebidaSeleccionada] = useState({});
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const docRef = doc(db,"bebidas", id);
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          console.log("Document ID: ", docSnap.id); 
          setBebidaSeleccionada({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [id]);

  return (
    <div className='item-detail-container'>
      <ItemDetail bebida={bebidaSeleccionada} imagen={bebidaSeleccionada.imagen} />
      <ItemCount stock={bebidaSeleccionada.stock} initial={1} product={bebidaSeleccionada} />
    </div>
  );
};

export default ItemDetailContainer;