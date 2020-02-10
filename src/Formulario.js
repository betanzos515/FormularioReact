import React,{Fragment, useState} from 'react';
import {calcularTotal} from './handlers';

    const Formulario = ({cantidad,actualizarCantidad,plazo, calcularPlazo, actualizarTotal})=>{
        
    const [error,guardarError] = useState(false);
    
    const calcularPrestamo = (e)=>{
        e.preventDefault();
        
        //validamos el formulario
        if(cantidad === 0 || plazo === '' ){
            guardarError(true);
            return;
        } 

        guardarError(false);
        actualizarTotal(calcularTotal(cantidad,plazo));
        
    }
    return(
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                    <div className="row">
                        <div>
                            <label>Cantidad Prestamo</label>
                            <input 
                                className="u-full-width" 
                                type="number" 
                                placeholder="Ejemplo: 3000" 
                                onChange = {e => actualizarCantidad(parseInt(e.target.value))}
                            />
                        </div>
                        <div>
                            <label>Plazo para Pagar</label>
                            <select 
                                className="u-full-width"
                                onChange={e => calcularPlazo(parseInt(e.target.value))}
                            >
                                <option value="">Seleccionar</option>
                                <option value="3">3 meses</option>
                                <option value="6">6 meses</option>
                                <option value="12">12 meses</option>
                                <option value="24">24 meses</option>
                            </select>
                        </div>
                        <div>
                            <input 
                                type="submit" 
                                value="Calcular" 
                                className="button-primary u-full-width" 
                            />
                        </div>
                    </div>
            </form>
        {error  ? <p className='error'>No pueden existir campos vacios</p> : null}
        </Fragment>
        
    );
}

export default Formulario;