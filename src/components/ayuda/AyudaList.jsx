import { Link } from "react-router-dom";
const AyudaList = () => {
  return (
    <div className="ayuda-container">
      <div className="titulo-container">
        <h1>AYUDA</h1>
      </div>
      <div className="info-tienda-hexagonosFila1">
        <div className="hexagon">
          <Link to="/ayuda/preguntas-frecuentes">PREGUNTAS FRECUENTES</Link>
        </div>
        <div className="hexagon">
          <Link to="/ayuda/terminos-condiciones">TÉRMINOS Y CONDICIONES</Link>
        </div>
        <div className="hexagon hexagon-comprar">
          <Link to="/ayuda/como-comprar">¿CÓMO COMPRAR?</Link>
        </div>
      </div>
    </div>
  );
};

export default AyudaList;
