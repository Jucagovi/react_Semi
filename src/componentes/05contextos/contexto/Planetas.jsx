import React, { Fragment, useContext } from "react";
import { ContextoPersonajes } from "../../../contextos/ProveedorPersonajes.jsx";
import useContextoDatos from "../../../hooks/useContextoPersonajes.js";
import Planeta from "./Planeta.jsx";

const Planetas = () => {
  /** Se importan los elementos del contexto (sólo los necesarios). */
  const { planetas, obtenerPlanetas } = useContext(ContextoPersonajes);
  /** También es posible utilizar un hook para estas tareas (más "profesional"). */
  //const { planetas, obtenerPlanetas } = useContextoDatos();
  return (
    <Fragment>
      <div id='planetas'>
        <h2>Planetas de la saga Star Wars.</h2>
        <button
          onClick={() => {
            obtenerPlanetas();
          }}
        >
          Buscar planetas
        </button>
        {planetas.length ? (
          planetas.map((valor, indice, array) => {
            return (
              <Planeta
                key={indice}
                nombre={valor.name}
                periodo_orbital={valor.orbital_period}
              />
            );
          })
        ) : (
          <p>No se han buscado planetas en la galaxia.</p>
        )}
      </div>
    </Fragment>
  );
};

export default Planetas;
