import React from 'react'
import { useParams } from 'react-router-dom'

const DetailsProductos = () => {

const id = useParams();
console.log(id)

  return (
    <div>
      <p>Detalle del producto</p>
    </div>
  )
}

export default DetailsProductos
