import React, { Fragment } from "react";
import "./App.css";
import logo from "./assets/react_logo.svg";
import Films from "./componentes/05contextos/asincronismo/Films";
import FilmsHook from "./componentes/05contextos/asincronismo/FilmsHook";
import FilmsHookManipular from "./componentes/05contextos/asincronismo/FilmsHookManipular";
import FilmsHookSituacion from "./componentes/05contextos/asincronismo/FilmsHookSituacion";

function App() {
  return (
    <Fragment>
      <img src={logo} alt='Logo de React.' />
      <h2>Introducción a la programación reactiva con React.</h2>
    </Fragment>
  );
}

export default App;
