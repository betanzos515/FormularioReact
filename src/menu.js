import React,{useState}from 'react';
import './menu.css';

function Menu(props){

    const [accion,actualizarEstado] = useState(0);
    
    const cambiarEstado = ()=>{
        actualizarEstado(55);
    }
    return(
        <div className="menu">
            <li
                onClick={cambiarEstado}
            >{accion}</li>
            <li>Segundo</li>
            <li>Tercero</li>
            <li>Cuarto</li>
        </div>
    );
}

export default Menu;