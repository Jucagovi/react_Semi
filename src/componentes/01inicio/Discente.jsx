import React from "react";

const Discente = (props) => {
  // Desestructuración de parámetros.
  // const { nombre = "Ninguno", apellidos = "Ninguno", curso, children } = props;
  return (
    <React.Fragment>
      <div>
        <p>Apellidos, Nombre</p>
        <p>Curso matrícula</p>
        <p>Módulos matrícula</p>
        {/* <p>
          {props.apellidos}, {props.nombre}
        </p>
        <p>{props.curso}</p>
        <p>{props.children}</p> */}
      </div>
    </React.Fragment>
  );
};

export default Discente;
