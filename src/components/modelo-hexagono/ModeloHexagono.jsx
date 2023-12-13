import React from "react";

const ModeloHexagono = ({imgFondo, titulo}) => {
    console.log(titulo)
  return (
    <div>
      <section className="estampados">
        <div className="hexagone" style={{ backgroundImage: `url("src/assets/img/${imgFondo}")` }}>
          <h2>{titulo} </h2>
        </div>
      </section>
    </div>
  );
};

export default ModeloHexagono;
