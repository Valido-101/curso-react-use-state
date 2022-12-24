import React, {useState} from 'react';

export const MiPrimerEstado = () => {

  /*
  //Problemática
  let nombre = 'Jesús Valido';

  const cambiarNombre = (e) => {
      nombre = "Paquito Fernández";
  }*/

  //Hook useState -> la propiedad nombre se le asigna un valor entre paréntesis y se puede modificar
  //usando el método a la derecha de la coma
  const [nombre, setNombre] = useState("Jesús Valido");

  const cambiarNombre = (e) => {
    setNombre("Pepito");
  }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ cambiarNombre }>Cambiar</button>
    </div>
  )
}
