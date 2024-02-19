import React from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const Item = ({bebida}) => {
  return (

    <Link to={`/detail/${bebida.id}`}>
      <div className='item'>
          <img src={bebida.imagen} alt={bebida.nombre}></img>
          <h2>Nombre:{bebida.nombre}</h2>
          <h2>Precio:{bebida.precio}</h2>
          <h2>Tipo:{bebida.tipo}</h2>
          <p>Descripcion:{bebida.descripcion}</p>
          <ItemCount initial={1} stock={bebida.stock}/>
      </div>
    
    </Link>


  )
}

export default Item