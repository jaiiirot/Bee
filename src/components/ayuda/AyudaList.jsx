import { Link } from "react-router-dom";
const AyudaList = () => {
  return (
    <div className="ayuda-container">
      <div className="titulo-container">
        <h1>AYUDA</h1>
      </div>
      <div className="info-tienda-hexagonosFila1">
        <div className="hexagon">
          <Link to="/Preguntas-Frecuentes">PREGUNTAS FRECUENTES</Link>
        </div>
        <div className="hexagon">
          <Link to="/Términos-y-condiciones">TÉRMINOS Y CONDICIONES</Link>
        </div>
        <div className="hexagon hexagon-comprar">
          <Link to="/Cómo-comprar">¿CÓMO COMPRAR?</Link>
        </div>
      </div>
    </div>
  );
};

export default AyudaList;
