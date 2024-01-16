import React, { Fragment } from "react";
import "./App.css";
import logo from "./assets/react_logo.svg";
import Discentes from "./componentes/01inicio/Discentes.jsx";
import PrimerComponente from "./componentes/01inicio/PrimerComponente.jsx";
import Peliculas from "./componentes/01inicio/Peliculas.jsx";
import Contenido from "./componentes/02posicionamiento/Contenido.jsx";
import MasContenido from "./componentes/02posicionamiento/MasContenido.jsx";
import Contenedor from "./componentes/02posicionamiento/Contenedor.jsx";
import Pie from "./componentes/02posicionamiento/Pie.jsx";
import Contador from "./componentes/03hooks/useState/Contador.jsx";
import Mensaje from "./componentes/03hooks/useState/Mensaje.jsx";
import Objetos from "./componentes/03hooks/useState/Objetos.jsx";
import Verduras from "./componentes/03hooks/useState/Verduras.jsx";

function App() {
  return (
    <Fragment>
      <img src={logo} alt='Logo de React.' />
      <h2>Introducción a la programación reactiva con React.</h2>
    </Fragment>
  );
}

export default App;
