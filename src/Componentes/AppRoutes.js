import React from 'react'
import { Routes, Route} from "react-router-dom"
import DetailsProductos from './DetailsProductos'

const AppRoutes = () => {
  return (
    <Routes>
 
        <Route exact path="/Decoartesanal" element={<Decoartesanal />} />
        <Route exact path="/Decohogar" element={<Decohogar />} />
        <Route exact path="/Mates" element={<Mates />} />
        <Route exact path="/Organizadores" element={<Organizadores />} />
        <Route exact path="/Decoartesanal/:id" element={<DetailsProductos/>} />
        <Route exact path="/Decohogar/:id" element={<DetailsProductos />} />
        <Route exact path="/Mates/:id" element={<DetailsProductos />} />
        <Route exact path="/Organizadores/:id" element={<DetailsProductos />} />
    </Routes>
  )
}

export default AppRoutes
