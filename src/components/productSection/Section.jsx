import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import HexagonImg from "../hexagon/HexagonImg";
import Ambosguardapolvos from "../../assets/img/ambos-y-guardapolvos.jpg";
import Banderas from "../../assets/img/banderas.jpg";
import BuzosCamperas from "../../assets/img/buzos-camperas.jpg";
import BuzosCamperasDeportivo from "../../assets/img/buzos-y-camperas-deportivo.jpg";
import Camisetas from "../../assets/img/camisetas.jpg";
import Delanrales from "../../assets/img/delantales.jpg";
import Deportivo from "../../assets/img/deportivo.jpg";
import EgresadosEgresaditos from "../../assets/img/egresados-egresaditos.jpg";
import Gorros from "../../assets/img/gorros.jpg";
import Laboral from "../../assets/img/laboral.jpg";
import Lapiceras from "../../assets/img/lapiceras.jpg";
import Llaveros from "../../assets/img/llaveros.jpg";
import NuestrosClientes from "../../assets/img/nuestros-clientes.jpg";
import Bordado from "../../assets/img/nuestros-estampados-bordado.jpg";
import DTF from "../../assets/img/nuestros-estampados-dtf.jpg";
import Serigrafia from "../../assets/img/nuestros-estampados-serigrafia.jpg";
import Sublimacion from "../../assets/img/nuestros-estampados-sublimacion.jpg";
import Termovinilo from "../../assets/img/nuestros-estampados-termovinilo.jpg";
import TermoviniloImpreso from "../../assets/img/nuestros-estampados-termovinilo-impreso.jpg";
import OtrosObjetos from "../../assets/img/otros-objetos.jpg";
import Pantalones from "../../assets/img/pantalones.jpg";
import Pins from "../../assets/img/pins.jpg";
import RemerasChombas from "../../assets/img/remeras-chombas.jpg";
import RemerasChombasLaboral from "../../assets/img/remeras-chombas-laboral.jpg";
import Shorts from "../../assets/img/shorts.jpg";
import ShortsDeportivos from "../../assets/img/shorts-deportivos.jpg";
import Tazas from "../../assets/img/tazas.jpg";
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
      { name: "shorts", img: Shorts },
      { name: "pantalones", img: Pantalones },
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
      { name: "conjunto-invierno", img: BuzosCamperasDeportivo },
      { name: "buzos-y-camperas", img: BuzosCamperasDeportivo },
      { name: "shorts", img: ShortsDeportivos },
      { name: "pantalones", img: Pantalones },
    ],
  },
  {
    id: "laboral",
    name: "INDUMENTARIA LABORAL",
    desktop: [4],
    mobile: [2, 1, 1],
    pages: [
      { name: "conjuntos", img: Laboral },
      { name: "remeras-y-chombas", img: RemerasChombasLaboral },
      { name: "chaquetas", img: BuzosCamperas },
      { name: "delantales", img: Delanrales },
    ],
  },
  {
    id: "objetos-personalizados",
    name: "OBJETOS",
    desktop: [4, 3],
    mobile: [2, 1, 2, 1, 1],
    pages: [
      { name: "gorros", img: Gorros },
      { name: "llaveros", img: Llaveros },
      { name: "banderas-y-fly-banners", img: Banderas },
      { name: "pins", img: Pins },
      { name: "tazas", img: Tazas },
      { name: "lapiceras", img: Lapiceras },
      { name: "logos", img: NuestrosClientes },
    ],
  },
];
// /productos/${section}/remeras-chombas/
export default function Section() {
  const { section } = useParams();
  return (
    <>
      <aside className="sectionhex-title">
        <h1>
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
                  <div className={`hexoArbol-rama${a + 1} rama`}>
                    {item.pages.map((page, i, array) => {
                      let prod = array[ite];
                      if (i < count) {
                        ite++;
                        return (
                          <HexagonImg
                            key={prod.name}
                            img={prod.img}
                            url={`/productos/${section}/${prod.name}/`}
                          >
                            {prod.name}
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
              return item.mobile.map((count, a) => {
                let ite = count;
                return (
                  <div className={`hexoArbol-rama${a + 1} rama`}>
                    {item.pages.map((page, i) => {
                      if (i < count) {
                        return (
                          <HexagonImg
                            key={page.name}
                            img={page.img}
                            url={`/productos/${section}/${page.name}/`}
                          >
                            {page.name}
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
    </>
  );
}
