import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({bebida}) => {
  return (
    <div className='item-detail'>
    <img src={bebida.imagen} alt={bebida.nombre}></img>
    <h2>Nombre:{bebida.nombre}</h2>
    <h2>Precio:{bebida.precio}</h2>
    <h2>Tipo:{bebida.tipo}</h2>
    <p>Descripcion:{bebida.descripcion}</p>
</div>
  )
}

export default ItemDetail