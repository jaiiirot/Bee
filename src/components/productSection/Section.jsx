import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import HexagonImg from "../hexagon/HexagonImg";
import imgRemerasChombas from "../../assets/img/remeras-chombas.jpg";
import imgBuzosCamperas from "../../assets/img/buzos-camperas.jpg";
import imgEgresadosEgresaditos from "../../assets/img/egresados-egresaditos.jpg";
import imgShort from "../../assets/img/shorts.jpg";
import imgPantalon from "../../assets/img/pantalones.jpg";
const PAGINATION = [
  {
    id: "escolar-egresados",
    name: "INDUMENTARIA ESCOLARES Y EGRESADOS",
    pages: [
      "remeras-y-chombas",
      "buzos-y-camperas",
      "egresados-y-egresaditos",
      "shorts",
      "pantalones",
    ],
  },
  {
    id: "deportiva",
    name: "INDUMENTARIA DEPORTIVA",
    pages: [
      "camisetas",
      "conjuntos-de-verano",
      "conjunto-invierno",
      "buzos-y-camperas",
      "shorts",
      "pantalones",
    ],
  },
  {
    id: "laboral",
    name: "INDUMENTARIA LABORAL",
    pages: ["conjuntos", "remeras-y-chombas", "chaquetas", "delantales"],
  },
  {
    id: "objetos-personalizados",
    name: "OBJETOS",
    pages: [
      "llaveros",
      "banderas-y-fly-banners",
      "gorras",
      "pins",
      "tazas",
      "lapiceras",
      "logos  ",
    ],
  },
];
export default function Section() {
  const { section } = useParams();
  const nombreTitle = useRef(section);
  return (
    <section className="section-cont">
      <aside className="section-cont-title">
        <h1>
          {nombreTitle.current.toLocaleUpperCase().split("-").join(" Y ")}
        </h1>
      </aside>
      <aside className="hexoArbol">
        <div className="hexoArbol-rama1 rama">
          <span className="rama-hoja">
            <HexagonImg
              url={`/productos/${section}/remeras-chombas/`}
              img={imgRemerasChombas}
            >
              REMERAS Y CHOMBAS
            </HexagonImg>
            <HexagonImg
              url={`/productos/${section}/buzos-camperas/`}
              img={imgBuzosCamperas}
            >
              BUZOS Y CAMPERAS
            </HexagonImg>
          </span>
          <HexagonImg
            url={`/productos/${section}/egresados-egresaditos/`}
            img={imgEgresadosEgresaditos}
          >
            EGRESADOS Y EGRESADITOS
          </HexagonImg>
        </div>
        <div className="hexoArbol-rama2 rama">
          <HexagonImg url={`/productos/${section}/shorts/`} img={imgShort}>
            SHORTS
          </HexagonImg>
          <HexagonImg
            url={`/productos/${section}/pantalones/`}
            img={imgPantalon}
          >
            PANTALONES
          </HexagonImg>
        </div>
      </aside>
    </section>
  );
}
