import React from 'react'
import "../../style/ayuda.css";

const AyudaList = () => {
  return (
    <div className='ayuda-container'>
      <div className="titulo-container">
        <h1>AYUDA</h1>
      </div>
      <div className="info-tienda-hexagonosFila1">
        <div className="hexagon">
          <p>PREGUNTAS FRECUENTES</p>
        </div>
        <div className="hexagon">
          <p>TÉRMINOS Y CONDICIONES</p>
        </div>
        <div className="hexagon">
          <p>¿CÓMO COMPRAR?</p>
        </div>
      </div>
    </div>
  )
}

export default AyudaList