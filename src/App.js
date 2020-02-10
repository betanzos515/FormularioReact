import React,{useState} from 'react';
import './App.css';
import Formulario from './Formulario';
import Mensaje from './Mensaje';

function App() {
  const [cantidad,actualizarCantidad]=useState(0);
  const [plazo,calcularPlazo]=useState('');
  const [total, actualizarTotal] = useState(0);
  let complemento = <Mensaje/>;
  if(total > 0){
    complemento = `El resultado es ${total}`;
  }
  
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
          actualizarTotal = {actualizarTotal}
        />
       {complemento}
        
      </div>
     </div>   
   </div>
  );
}

export default App;
