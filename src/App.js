import logo from './logo.svg';
import './App.css';
import NavBar from './Componentes/NavBar';
import CartWidget from './Componentes/CartWidget';
import Landing from './Componentes/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bazar from './Componentes/Bazar';
import Decoartesanal from './Componentes/Decoartesanal';
import Decohogar from './Componentes/Decohogar';
import Mates from './Componentes/Mates';
import Organizadores from './Componentes/Organizadores';
import ArrayProductos from './Componentes/ArrayProductos';




function App() {

  return (
  <>
  <BrowserRouter>
  
    <CartWidget />
    <NavBar />
    <Landing />
    <Decoartesanal />
    <Decohogar />
    <Mates />
    <Organizadores />
    <ArrayProductos />    
    
  </BrowserRouter>
  </>
  );
}

export default App;
