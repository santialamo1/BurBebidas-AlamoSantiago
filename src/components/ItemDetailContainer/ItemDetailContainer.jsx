import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [bebidaSeleccionada, setBebidaSeleccionada] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../public/bebidas.json");
        console.log(response)
        const data = await response.json();
        console.log(data)
        const bebidaSeleccionada = data.bebidas.find((p)=>p.id == id)
        setBebidaSeleccionada(bebidaSeleccionada);
        console.log(bebidaSeleccionada);
      } catch(error){
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
        <ItemDetail bebida={bebidaSeleccionada} />
    </div>
  );
};

export default ItemDetailContainer;