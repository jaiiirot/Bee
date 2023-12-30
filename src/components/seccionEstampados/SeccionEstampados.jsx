import React from "react";
import HexagonosNuestrosEstampadosListContainer from "../seccionHexagonosNuestrosEstampados/HexagonosNuestrosEstampadosListContainer";

const SeccionEstampados = () => {
  return (
    <div style={{paddingTop: "50px"}}>
      <HexagonosNuestrosEstampadosListContainer />

      <div className="nuestros-estampados-informacion">
        <div className="nuestros-estampados-titulo">
          <h2>Personalización en Cada Punto y Tela</h2>
        </div>
        <div className="nuestros-estampados-parrafos">
          <p>
            En BEE, nos especializamos en la creación de productos textiles
            totalmente personalizados. Desde indumentaria laboral y uniformes
            escolares hasta prendas deportivas y de egresados, abarcamos un
            amplio espectro de necesidades. Nuestra versatilidad nos permite
            adaptarnos a las tendencias y temporadas, creando desde
            merchandising hasta sets escolares y conjuntos deportivos.
          </p>
          <p>
            En BEE, cada prenda cuenta una historia única, tejida con la
            dedicación y calidad que nos caracterizan. Descubre la
            personalización en cada detalle.
          </p>
          <span>
            ¡Haz que tu ropa cuente tu historia con BEE, donde la creatividad y
            la calidad se encuentran en cada estampado!
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeccionEstampados;
