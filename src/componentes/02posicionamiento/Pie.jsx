import React from "react";
import "./Pie.css";

// const Pie = function() {
const Pie = () => {
  let anyo = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer>
        <p>Esto es el footer de la página web. {anyo}</p>
      </footer>
    </React.Fragment>
  );
};

export default Pie;
