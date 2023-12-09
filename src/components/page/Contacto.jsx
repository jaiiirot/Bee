import React from "react";
import Hexagono from "../image/Hexagono";
import Facebook from "../image/facebook";
import Instagram from "../image/Instagram";
import { Link } from "react-router-dom";
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
          <h2>SEGUINOS EN NUESTRAS REDES SOCIALES</h2>
        </aside>
        <aside className="red-options">
          <Facebook />
          <Instagram />
        </aside>
      </section>
      <section className="hexos">
        <ul className="hexos-cont">
          <Hexagono className={"hexo"} localUrl={"horario"}>
            HORARIO
          </Hexagono>
          <Hexagono className={"hexo"} localUrl={"direccion"}>
            DIRECCIÓN
          </Hexagono>
          <Hexagono className={"hexo"} localUrl={"telefono"}>
            TELÉFONO
          </Hexagono>
        </ul>
      </section>
    </>
  );
}
