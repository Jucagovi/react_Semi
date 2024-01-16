import React, { Fragment } from "react";
import "./App.css";
import logo from "./assets/react_logo.svg";

function App() {
  return (
    <Fragment>
      <img src={logo} alt='Logo de React.' />
      <h2>Introducción a la programación reactiva con React.</h2>
    </Fragment>
  );
}

export default App;
