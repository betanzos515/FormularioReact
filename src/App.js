import React,{useState} from 'react';
import './App.css';
import Formulario from './Formulario';

function App() {
  const [cantidad,actualizarCantidad]=useState(0);
  const [plazo,calcularPlazo]=useState('');
  const [total,calculoTotal] = useState(0);
  let componente = "Aqui irá el componente seleccionado";
  if(total > 0){
    componente = "Mayor";
  }
  else{
    componente = "Menor";
  }


  return (
     <div>
      <h1>Cotizador de Prestamos</h1>
      <div className="container">
        <Formulario 
          cantidad = {cantidad}
          actualizarCantidad = {actualizarCantidad}
          plazo={plazo}
          calcularPlazo = {calcularPlazo}
          calculoTotal = {calculoTotal} 
        />
        {componente}
      </div>
     </div>   
  );
}

export default App;
