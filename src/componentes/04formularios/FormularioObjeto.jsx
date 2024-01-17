import React, { useState } from "react";
import ValorEstado from "../03hooks/useState/ValorEstado.jsx";

function FormularioObjeto() {
  // Crear un estado inicial (objeto con valores por defecto para evitar errores al dibujar).
  const valoresIniciales = {
    nombre: "",
    apellidos: "",
    correo: "",
  };
  // Estado para los valores del discente.
  const [discente, setDiscente] = useState(valoresIniciales);

  const actualizarDato = (e) => {
    // Obtengo los datos necesarios de evento que lanza esta función: el input.
    const { name, value } = e.target;
    // Se los asigno al estado.
    setDiscente({ ...discente, [name]: value });
  };

  return (
    <React.Fragment>
      <div className='App-header'>
        <h1>Discente con Formularios</h1>
        <form>
          <label htmlFor='nombre'>Nombre:</label>
          <input
            name='nombre'
            className='conEstilo'
            type='text'
            placeholder='Escribe tu nombre.'
            value={discente.nombre}
            onChange={(evento) => {
              actualizarDato(evento);
            }}
          />
          <br />
          <label htmlFor='apellidos'>Apellidos:</label>
          <input
            name='apellidos'
            className='conEstilo'
            type='text'
            placeholder='Escribe tus apellidos.'
            value={discente.apellidos}
            onChange={(evento) => {
              actualizarDato(evento);
            }}
          />
          <br />
          <label htmlFor='modulos'>Correo:</label>
          <input
            name='correo'
            className='conEstilo'
            type='text'
            placeholder='Escribe tu correo electrónico.'
            value={discente.correo}
            onChange={(evento) => {
              actualizarDato(evento);
            }}
          />
        </form>
        <div>
          <p>{`${discente.nombre} ${discente.apellidos}`}</p>
          <p>{`${discente.correo}`}</p>
        </div>
        <br />
        {/* Imprimir el estado con formato JSON (Objeto) para comprobar. */}
        <ValorEstado estadoMostrar={discente} />
      </div>
    </React.Fragment>
  );
}

export default FormularioObjeto;
