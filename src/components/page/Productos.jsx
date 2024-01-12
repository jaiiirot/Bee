import React from "react";
import HexagonImg from "../hexagon/HexagonImg";
import a from "../../assets/img/1a.png";
import b from "../../assets/img/1b.png";
import c from "../../assets/img/1c.png";
import d from "../../assets/img/1d.png";

const OPTIONS = [
  {
    url: "/productos/escolar-egresados",
    children: "INDUMENTARIA ESCOLAR Y EGRESADOS",
    img: a,
  },
  {
    url: "/productos/deportiva",
    children: "INDUMENTARIA DEPORTIVA",
    img: b,
  },
  {
    url: "/productos/laboral",
    children: "INDUMENTARIA LABORAL",
    img: c,
  },
  {
    url: "/productos/objetos-personalizados",
    children: "OBJETOS",
    img: d,
  },
];
export default function Productos() {
  return (
    <section className="product">
      <aside className="product-info">
        <h1 className="font-title-60">PRODUCTOS PERSONALIZADOS</h1>
      </aside>
      <aside className="product-cont">
        <div className="product-hexos">
          {OPTIONS.map((option, index) => (
            <HexagonImg key={index} url={option.url} img={option.img}>
              {option.children}
            </HexagonImg>
          ))}
        </div>
      </aside>
    </section>
  );
}
