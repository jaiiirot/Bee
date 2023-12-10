import React from "react";
import Hexagono from "../image/Hexagono";

export default function Productos() {
  return (
    <section className="product">
      <aside className="product-info">
        <h1>PRODUCTOS PERSONALIZADOS</h1>
      </aside>
      <aside className="product-hexos">
        <div>
          <Hexagono className={"hexo"} localUrl={"telefono"}>
            INDUMENTARIA ESCOLAR Y EGRESADOS
          </Hexagono>
          <Hexagono className={"hexo"} localUrl={"telefono"}>
            INDUMENTARIA DEPOTIVA
          </Hexagono>
          <Hexagono className={"hexo"} localUrl={"telefono"}>
            INDUMENTARIA LABORAL
          </Hexagono>
          <Hexagono className={"hexo"} localUrl={"telefono"}>
            OBJETOS PERSONALIZADOS
          </Hexagono>
        </div>
      </aside>
    </section>
  );
}
