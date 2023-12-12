import React from "react";
import Hexagon from "../hexagon/Hexagon";
import Facebook from "../image/facebook";
import Instagram from "../image/Instagram";
import Formulario from "../formulario/Formulario";
export default function Contacto() {
  return (
    <>
      <Formulario />
      <section className="red">
        <aside className="red-info">
          <h2>SEGUINOS EN LAS REDES</h2>
        </aside>
        <aside className="red-options">
          <Facebook />
          <Instagram />
        </aside>
      </section>

      <section className="hexos">
        <div className="hexos-cont">
          <Hexagon className={"hexo"} localUrl={"horario"}>
            HORARIO
          </Hexagon>
          <Hexagon className={"hexo"} localUrl={"direccion"}>
            DIRECCIÓN
          </Hexagon>
        </div>
        <div className="hexos-cont">
          <Hexagon className={"hexo"} localUrl={"telefono"}>
            TELÉFONO
          </Hexagon>
        </div>
      </section>
    </>
  );
}
