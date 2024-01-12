import React, { Fragment } from "react";
import "./App.css";
import DatosContexto from "./contextos/DatosContexto";
import Personajes from "./componentes/UT05/contexto/Personajes.jsx";
import Planetas from "./componentes/UT05/contexto/Planetas.jsx";
import Peliculas from "./componentes/UT05/Soluciones/Peliculas.jsx";

function App() {
  return (
    <Fragment>
      <h1>Contextos con useContext.</h1>
      <Peliculas />
    </Fragment>
  );
}

export default App;
