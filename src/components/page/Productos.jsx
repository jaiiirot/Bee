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
          <Hexagono className={"hexo"} localUrl={"escolar-y-egresados"}>
            INDUMENTARIA ESCOLAR Y EGRESADOS
          </Hexagono>
          <Hexagono className={"hexo"} localUrl={"deportiva"}>
            INDUMENTARIA DEPORTIVA
          </Hexagono>
          <Hexagono className={"hexo"} localUrl={"laboral"}>
            INDUMENTARIA LABORAL
          </Hexagono>
          <Hexagono className={"hexo"} localUrl={"objetos-  zpersonalizados"}>
            OBJETOS PERSONALIZADOS
          </Hexagono>
        </div>
      </aside>
    </section>
  );
}
