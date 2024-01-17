import React, { useContext } from "react";
import { ContextoPersonajes } from "../contextos/ProveedorPersonajes.jsx";

const useContextoPersonajes = () => {
  const contexto = useContext(ContextoPersonajes);
  return contexto;
};

export default useContextoPersonajes;
