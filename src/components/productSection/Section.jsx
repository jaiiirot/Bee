import { useParams } from "react-router-dom";
import HexagonImg from "../hexagon/HexagonImg";
import aa from "../../assets/img/11.png";
import ab from "../../assets/img/12.png";
import ac from "../../assets/img/13.png";
import ad from "../../assets/img/14.png";
import ae from "../../assets/img/15.png";
import ba from "../../assets/img/21.png";
import bb from "../../assets/img/22.png";
import bc from "../../assets/img/23.png";
import bd from "../../assets/img/24.png";
import be from "../../assets/img/25.png";
import bf from "../../assets/img/26.png";
import ca from "../../assets/img/31.png";
import cb from "../../assets/img/32.png";
import cc from "../../assets/img/33.png";
import cd from "../../assets/img/34.png";
import da from "../../assets/img/41.png";
import db from "../../assets/img/42.png";
import dc from "../../assets/img/43.png";
import dd from "../../assets/img/44.png";
import de from "../../assets/img/45.png";
import df from "../../assets/img/46.png";
import dg from "../../assets/img/47.png";

const PAGINATION = [
  {
    id: "escolar-egresados",
    name: "INDUMENTARIA ESCOLARES Y EGRESADOS",
    desktop: [3, 2],
    mobile: [2, 1, 2],
    pages: [
      { name: "remeras-y-chombas", img: aa },
      { name: "buzos-y-camperas", img: ab },
      { name: "egresados-y-egresaditos", img: ac },
      { name: "pantalones", img: ad },
      { name: "shorts", img: ae },
    ],
  },
  {
    id: "deportiva",
    name: "INDUMENTARIA DEPORTIVA",
    desktop: [3, 2, 1],
    mobile: [2, 1, 2, 1],
    pages: [
      { name: "Camisetas", img: ba },
      { name: "conjuntos-de-verano", img: bb },
      { name: "conjuntos-de-invierno", img: bc },
      { name: "buzos-y-camperas", img: bd },
      { name: "shorts", img: be },
      { name: "pantalones", img: bf },
    ],
  },
  {
    id: "laboral",
    name: "INDUMENTARIA LABORAL",
    desktop: [4],
    mobile: [2, 1, 2],
    pages: [
      { name: "remeras-y-chombas", img: ca },
      { name: "chaquetas:-ambos-y-guardapolvos", img: cb },
      { name: "delantales", img: cc },
      { name: "conjuntos:-pantalones-y-remeras", img: cd },
      { name: "", img: "" },
    ],
  },
  {
    id: "objetos-personalizados",
    name: "OBJETOS",
    desktop: [4, 3],
    mobile: [2, 1, 2, 1, 2],
    pages: [
      { name: "llaveros", img: da },
      { name: "banderas-y-fly-banners", img: db },
      { name: "gorros", img: dc },
      { name: "pins", img: dd },
      { name: "tazas", img: de },
      { name: "lapiceras", img: df },
      { name: "logos", img: dg },
      { name: "", img: "" },
    ],
  },
];
export default function Section() {
  const { section } = useParams();
  return (
    <section className="secciones-prod">
      <aside className="sectionhex-title">
        <h1 className="font-title-60">
          {PAGINATION.map((title) => {
            if (title.id === section) {
              return title.name;
            }
          })}
        </h1>
      </aside>
      <section className="desktop-sectionhex">
        <aside className="hexoArbol">
          {PAGINATION.map((item) => {
            if (item.id === section) {
              let ite = 0;
              return item.desktop.map((count, a) => {
                return (
                  <div
                    className={`hexoArbol-rama${a + 1} rama`}
                    key={a + Math.random() * 100}
                  >
                    {item.pages.map((page, i, array) => {
                      let prod = array[ite];
                      if (i < count) {
                        ite++;
                        return (
                          <HexagonImg
                            key={a + Math.random() * 1000}
                            img={prod.img}
                            url={`/productos/${section}/${prod.name}/`}
                          >
                            {prod.name.split("-").join(" ").toUpperCase()}
                          </HexagonImg>
                        );
                      }
                    })}
                  </div>
                );
              });
            }
          })}
        </aside>
      </section>
      <section className="mobile-sectionhex">
        <aside className="hexoArbol">
          {PAGINATION.map((item) => {
            if (item.id === section) {
              let ite = 0;
              return item.mobile.map((count, a) => {
                return (
                  <div
                    className={`hexoArbol-rama${a + 1} rama`}
                    key={a + Math.random() * 100}
                  >
                    {item.pages.map((page, i, array) => {
                      let prod = array[ite];
                      if (i < count) {
                        ite++;
                        return (
                          <HexagonImg
                            key={a + Math.random() * 100}
                            img={prod.img}
                            url={`/productos/${section}/${prod.name}/`}
                          >
                            {prod.name.split("-").join(" ").toUpperCase()}
                          </HexagonImg>
                        );
                      }
                    })}
                  </div>
                );
              });
            }
          })}
        </aside>
      </section>
    </section>
  );
}
