import React from "react";
import { useParams } from "react-router-dom";
import HexagonVacio from "../hexagon/HexagonVacio";
const Ayuda = () => {
  const params = useParams();
  return (
    <div className="ayuda-container">
      <div className="titulo-container">
        <h1 className="font-title">AYUDA</h1>
      </div>
      <div className="info-tienda-hexagonosFila1">
        <HexagonVacio
          localUrl={"/ayuda/preguntas-frecuentes/"}
          className={"ayuda-hex"}
        >
          PREGUNTAS FRECUENTES
        </HexagonVacio>
        <HexagonVacio
          localUrl={"/ayuda/terminos-condiciones/"}
          className={"ayuda-hex"}
        >
          TERMINOS Y CONDICIONES
        </HexagonVacio>
        <HexagonVacio
          localUrl={"/ayuda/como-comprar/"}
          className={"ayuda-hex"}
          subClass={"active"}
        >
          ¿CÓMO COMPRAR?
        </HexagonVacio>
      </div>
    </div>
  );
};

export default Ayuda;
