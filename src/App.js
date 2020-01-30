import React,{useState} from 'react';
import './App.css';
import Formulario from './Formulario';

function App() {
  const [cantidad,actualizarCantidad]=useState(0);
  const [plazo,calcularPlazo]=useState('');


  return (
   <div>
     <div>
      <h1>Cotizador de Prestamos</h1>
      <div className="container">
        <Formulario 
          cantidad = {cantidad}
          actualizarCantidad = {actualizarCantidad}
          plazo={plazo}
          calcularPlazo = {calcularPlazo}
        />
      </div>
       
     </div>   
   </div>
  );
}

export default App;
