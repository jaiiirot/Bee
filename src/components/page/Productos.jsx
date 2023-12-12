import React from "react";
import Hexagon from "../hexagon/Hexagon";

export default function Productos() {
  return (
    <section className="product">
      <aside className="product-info">
        <h1>PRODUCTOS PERSONALIZADOS</h1>
      </aside>
      <aside className="product-hexos">
        <Hexagon className={"hexo"} localUrl={"escolar-y-egresados"}>
          INDUMENTARIA ESCOLAR Y EGRESADOS
        </Hexagon>
        <Hexagon className={"hexo"} localUrl={"deportiva"}>
          INDUMENTARIA DEPORTIVA
        </Hexagon>
        <Hexagon className={"hexo"} localUrl={"laboral"}>
          INDUMENTARIA LABORAL
        </Hexagon>
        <Hexagon className={"hexo"} localUrl={"objetos-personalizados"}>
          OBJETOS PERSONALIZADOS
        </Hexagon>
      </aside>
    </section>
  );
}
