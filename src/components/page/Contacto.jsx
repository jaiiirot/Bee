import React from "react";
import Hexagon from "../Hexagono/Hexagon";
import Facebook from "../image/facebook";
import Instagram from "../image/Instagram";
export default function Contacto() {
  return (
    <>
      <section className="welcome">
        <h1>ENVIANOS TU CONSULTA</h1>
      </section>
      <section className="form">
        <form className="form-cont">
          <input type="text" id="nombre" name="nombre" placeholder="NOMBRE" />
          <input type="email" id="correo" name="correo" placeholder="CORREO" />
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="TELEFONO"
          />
          <textarea
            name="mensaje"
            id="mensaje"
            placeholder="MENSAJE"
          ></textarea>
          <button type="submit">ENVIAR</button>
        </form>
      </section>
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
