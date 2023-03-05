import React, { useState } from 'react'
import Tupper from '../imagenes/Bazar (5).jpeg'
import Taza from '../imagenes/Bazar.jpeg'
import CascadaDeHumo from '../imagenes/Deco artesanal.jpeg'
import Sahumerios from '../imagenes/Deco hogar (4).jpeg'
import Ratan from '../imagenes/Organizadores (3).jpeg'
import MatePampa from '../imagenes/Mates (2).jpeg'
import Vela from '../imagenes/Deco artesanal (1).jpeg'
import DecoracionHome from '../imagenes/Deco hogar (3).jpeg'
import { Link } from 'react-router-dom'


const ArrayProductos = () => {
    const [productos, setProductos] = useState([
  { id: 1, nombre: "Tupper", descripcion: "Tupper de plástico super resistente", precio: "600", imagen: {Tupper} ,},  
  { id: 2, nombre: "Taza", descripcion: "Taza cerámica con detalle de dibujo", precio: "1000", imagen: {Taza},},  
  { id: 3, nombre: "Cascada de humo", descripcion: "Cascada de humo con quemador de incienso", precio: "1200",imagen: {CascadaDeHumo},},  
  { id: 4, nombre: "Sahumerios", descripcion: "Sahumerios de distintos aromas", precio: "200", imagen: {Sahumerios},},
  { id: 5, nombre: "Ratan", descripcion: "Ratan grande de plástico", precio: "800",imagen: {Ratan},},
  { id: 6, nombre: "Mate pampa", descripcion: "Mate pampa ecológico, 100% material reciclado", precio: "4000",imagen: {MatePampa},},
  { id: 7, nombre: "Vela", descripcion: "Vela con base de madera", precio: "500",imagen: {Vela},},
  { id: 8, nombre: "Decoracion home", descripcion: "Decoración home de madera", precio: "900",imagen: {DecoracionHome},},
    ]);
  
    const [nuevoProducto, setNuevoProducto] = useState({});

    const handleInputChange = e => {
      setNuevoProducto({
        ...nuevoProducto,
        [e.target.name]: e.target.value
      });
    };

    const handleAddProduct = () => {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto({});
    };

    return(
    <div>
      <h1>Lista de productos</h1>
      <ul>
        {productos.map(producto => (
          
          <div className='cuadroimg'>
            <Link to={"/DetailsProductos"}>
            <p key={producto.id}>
              <img className="img" src={producto.imagen}></img>
              <p>{producto.nombre}</p>
              <p>Precio: ${producto.precio}</p>
              <p>Descripción: {producto.descripcion}</p>
            </p>
            </Link>
          </div>
          
        ))}
      </ul>
      <form>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={nuevoProducto.nombre || ""}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Precio:
          <input
            type="number"
            name="precio"
            value={nuevoProducto.precio || ""}
            onChange={handleInputChange}
          />
        </label>
        <br />
      </form>
    </div>)
  
  }

export default ArrayProductos