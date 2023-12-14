import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import HexagonImg from "../hexagon/HexagonImg";
import imgRemerasChombas from "../../assets/img/remeras-chombas.jpg";

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
            <HexagonImg url={"remeras-chombas"} img={imgRemerasChombas}>
              REMERAS Y CHOMBAS
            </HexagonImg>
            <HexagonImg url={"buzos-camperas"} img={imgRemerasChombas}>
              BUZOS Y CAMPERAS
            </HexagonImg>
          </span>
          <HexagonImg url={"egresados-egresaditos"} img={imgRemerasChombas}>
            EGRESADOS Y EGRESADITOS
          </HexagonImg>
        </div>
        <div className="hexoArbol-rama2 rama">
          <HexagonImg url={"shorts"} img={imgRemerasChombas}>
            SHORTS
          </HexagonImg>
          <HexagonImg url={"pantalones"} img={imgRemerasChombas}>
            PANTALONES
          </HexagonImg>
        </div>
      </aside>
    </section>
  );
}
