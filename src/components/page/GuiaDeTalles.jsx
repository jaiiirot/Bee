import React from "react";
import imgTalles from "../../assets/img/talles-desktop.png";

const GuiaDeTalles = () => {
  return (
    <div className="guia-talles-contenedor">
      <div className="guia-talles-titulo">
        <h2>Guía de talles</h2>
      </div>

      <div className="guia-talles-imagen">
        <img src={imgTalles} alt="" />
      </div>
    </div>
  );
};

export default GuiaDeTalles;
