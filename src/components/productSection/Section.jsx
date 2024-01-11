import { useParams } from "react-router-dom";
import HexagonImg from "../hexagon/HexagonImg";
import Banderas from "../../assets/img/banderas.jpg";
import BuzosCamperas from "../../assets/img/buzos-camperas.jpg";
import BuzosCamperasDeportivo from "../../assets/img/buzos-y-camperas-deportivo.jpg";
import Camisetas from "../../assets/img/camisetas.jpg";
import Delantales from "../../assets/img/delantales.jpg";
import Deportivo from "../../assets/img/deportivo.jpg";
import EgresadosEgresaditos from "../../assets/img/egresados-egresaditos.jpg";
import Gorros from "../../assets/img/gorros.jpg";
import Laboral from "../../assets/img/laboral.jpg";
import Lapiceras from "../../assets/img/lapiceras.jpg";
import Llaveros from "../../assets/img/llaveros.jpg";
import Pantalones from "../../assets/img/pantalones.jpg";
import Pins from "../../assets/img/pins.jpg";
import RemerasChombas from "../../assets/img/remeras-chombas.jpg";
import RemerasChombasLaboral from "../../assets/img/remeras-chombas-laboral.jpg";
import Shorts from "../../assets/img/shorts.jpg";
import ShortsDeportivos from "../../assets/img/shorts-deportivos.jpg";
import Tazas from "../../assets/img/tazas.jpg";
import otrosObjetos from "../../assets/img/otros-objetos.jpg";
const PAGINATION = [
  {
    id: "escolar-egresados",
    name: "INDUMENTARIA ESCOLARES Y EGRESADOS",
    desktop: [3, 2],
    mobile: [2, 1, 2],
    pages: [
      { name: "remeras-y-chombas", img: RemerasChombas },
      { name: "buzos-y-camperas", img: BuzosCamperas },
      { name: "egresados-y-egresaditos", img: EgresadosEgresaditos },
      { name: "pantalones", img: Pantalones },
      { name: "shorts", img: Shorts },
    ],
  },
  {
    id: "deportiva",
    name: "INDUMENTARIA DEPORTIVA",
    desktop: [3, 2, 1],
    mobile: [2, 1, 2, 1],
    pages: [
      { name: "Camisetas", img: Camisetas },
      { name: "conjuntos-de-verano", img: Deportivo },
      { name: "conjuntos-de-invierno", img: BuzosCamperasDeportivo },
      { name: "buzos-y-camperas-deportivas", img: BuzosCamperasDeportivo },
      { name: "shorts-deportivos", img: ShortsDeportivos },
      { name: "pantalones-deportivos", img: Pantalones },
    ],
  },
  {
    id: "laboral",
    name: "INDUMENTARIA LABORAL",
    desktop: [4],
    mobile: [2, 1, 2],
    pages: [
      { name: "remeras-y-chombas", img: RemerasChombasLaboral },
      { name: "chaquetas-ambos-y-guardapolvos", img: BuzosCamperas },
      { name: "delantales", img: Delantales },
      { name: "conjuntos-pantalones-y-remeras", img: Laboral },
      { name: "", img: "" },
    ],
  },
  {
    id: "objetos-personalizados",
    name: "OBJETOS",
    desktop: [4, 3],
    mobile: [2, 1, 2, 1, 2],
    pages: [
      { name: "llaveros", img: Llaveros },
      { name: "banderas-y-fly-banners", img: Banderas },
      { name: "gorros", img: Gorros },
      { name: "pins", img: Pins },
      { name: "tazas", img: Tazas },
      { name: "lapiceras", img: Lapiceras },
      { name: "logos", img: otrosObjetos },
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
