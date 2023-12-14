import React from "react";
import HexagonImg from "../hexagon/HexagonImg";
import imgEscolarEgresados from "./../../assets/img/egresados-egresaditos.jpg";
import imgDeportivo from "./../../assets/img/deportivo.jpg";
import imgLaboral from "./../../assets/img/laboral.jpg";
import imgObjetosPersonalizados from "./../../assets/img/objetos-personalizados.jpg";

const OPTIONS = [
  {
    url: "/productos/escolar-egresados",
    children: "INDUMENTARIA ESCOLAR Y EGRESADOS",
    img: imgEscolarEgresados,
  },
  {
    url: "/productos/deportiva",
    children: "INDUMENTARIA DEPORTIVA",
    img: imgDeportivo,
  },
  {
    url: "/productos/laboral",
    children: "INDUMENTARIA LABORAL",
    img: imgLaboral,
  },
  {
    url: "/productos/objetos-personalizados",
    children: "OBJETOS PERSONALIZADOS",
    img: imgObjetosPersonalizados,
  },
];
export default function Productos() {
  return (
    <section className="product">
      <aside className="product-info">
        <h1>PRODUCTOS PERSONALIZADOS</h1>
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
