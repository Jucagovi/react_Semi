import React from "react";
// 1 -> Se importa el fichero desde un archivo.
import listadoPeliculas from "../../objetos/peliculas.json";
// -> Otra opción es copiar el código del objeto JSON del fichero Ejericio2.js aquí.

function Peliculas() {
  // 2-> Se comprueba la estructura de lo que se ha importado para saber cómo tratarlo.
  console.log(listadoPeliculas);
  // --> resulta que es un objeto y dentro de él una clave con un JSON (el que se necesita).

  return (
    <React.Fragment>
      {/* 3 -> Ahora que ya se conoce su estructura, se recorre con map. */}
      {listadoPeliculas.peliculas.map((peli, indice, array) => {
        return <p key={peli.id}>{peli.nombre}</p>;
      })}
    </React.Fragment>
  );
}

export default Peliculas;
