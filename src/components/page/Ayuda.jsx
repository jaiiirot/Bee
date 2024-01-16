import React from "react";
import { useParams } from "react-router-dom";
import HexagonImg from "../hexagon/HexagonImg";
import hexAyu from "../../assets/img/ayuda-hex.png";
const Ayuda = () => {
  const params = useParams();
  return (
    <div className="ayuda-container">
      <div className="titulo-container">
        <h1 className="font-title-60">AYUDA</h1>
      </div>
      <div className="info-ayuda-desktop">
        <HexagonImg url={"/ayuda/preguntas-frecuentes/"} img={hexAyu}>
          PREGUNTAS FRECUENTES
        </HexagonImg>
        <HexagonImg url={"/ayuda/terminos-condiciones/"} img={hexAyu}>
          TÉRMINOS Y CONDICIONES
        </HexagonImg>
        <HexagonImg url={"/ayuda/como-comprar/"} img={hexAyu}>
          ¿CÓMO COMPRAR?
        </HexagonImg>
      </div>
      <div className="info-ayuda-mobile">
        <div className="info-ayuda-1">
          <HexagonImg url={"/ayuda/preguntas-frecuentes/"} img={hexAyu}>
            PREGUNTAS FRECUENTES
          </HexagonImg>
          <HexagonImg url={"/ayuda/terminos-condiciones/"} img={hexAyu}>
            TÉRMINOS Y CONDICIONES
          </HexagonImg>
        </div>
        <div className="info-ayuda-2">
          <HexagonImg url={"/ayuda/como-comprar/"} img={hexAyu}>
            ¿CÓMO COMPRAR?
          </HexagonImg>
        </div>
      </div>
    </div>
  );
};

export default Ayuda;
