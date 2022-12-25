import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const EjercicioUnoComponente = ({anioActual}) => {

  const [anioActualHook, setAnio] = useState(anioActual);

  return (
    <div className='cuerpo'>
        <div className='ejercicio-uno'>
            <h1>
                {anioActualHook}
            </h1>
            <button className='btn1' onClick={e => {setAnio(anioActualHook+1)}}>Añade un año</button>
            <button className='btn2' onClick={e => {setAnio(anioActualHook-1)}}>Resta un año</button>
        </div>
        <label>Cambia el año dinámicamente: </label>
        <input type="number" onChange={e => {setAnio(e.target.value)}} placeholder='Cambia el año'></input>
    </div>
  )
}

EjercicioUnoComponente.propTypes = {
    anioActual: PropTypes.number.isRequired
}
