import React,{useState} from 'react';
import './App.css';
import Formulario from './Formulario';
import Mensaje from './Mensaje';

function App() {
  const [cantidad,actualizarCantidad]=useState(0);
  const [plazo,calcularPlazo]=useState('');
  const complemento = <Mensaje/>;
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
       {complemento}
        
      </div>
     </div>   
   </div>
  );
}

export default App;
