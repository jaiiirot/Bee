import React from "react";
import "../../style/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="home-titulos">
          <h2>TITULO1</h2>
        </div>

        <div className="home-titulo-mobile">
          <h1>HACEMOS REALIDAD EL DISEÑO QUE SOÑASTE</h1>
        </div>

        <div className="hero-img-container">
          <div className="hero-titulo">
            <h1>HACEMOS REALIDAD LO QUE SOÑASTE</h1>
          </div>
        </div>

        <div className="logo-whatsapp-container">
          <FontAwesomeIcon className="icono-whatsapp" icon={faWhatsapp} />
        </div>

        <div className="hero-img-container-mobile"></div>
      </section>

      <section className="personalizar-productos-section">
        <div className="home-titulos">
          <h2>PRODUCTOS PERSONALIZADOS</h2>
        </div>
        <div className="personalizar-productos-container">
          <div className="indumentaria-escolar personalizar-productos-container-img">
            <div className="personalizar-productos-vacio"></div>
            <button>INDUMENTARIA ESCOLAR Y EGRESADOS</button>
          </div>
          <div className="indumentaria-deportiva personalizar-productos-container-img">
            <div className="personalizar-productos-vacio"></div>
            <button>INDUMENTARIA DEPORTIVA</button>
          </div>
          <div className="indumentaria-laboral personalizar-productos-container-img">
            <div className="personalizar-productos-vacio"></div>
            <button>INDUMENTARIA LABORAL</button>
          </div>
          <div className="objetos-personalizados personalizar-productos-container-img">
            <div className="personalizar-productos-vacio"></div>
            <button>OBJETOS PERSONALIZADOS</button>
          </div>
        </div>
      </section>

      <section className="formulario-section">
        <div className="home-titulos">
          <h2>ENVIANOS TU CONSULTA</h2>
        </div>

        <form action="" method="post">
          <label htmlFor="nombre"></label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="NOMBRE"
            required
          ></input>

          <label htmlFor="correo"></label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Correo Electrónico"
            required
          ></input>

          <label htmlFor="numero"></label>
          <input
            type="tel"
            id="numero"
            name="numero"
            placeholder="Número de Teléfono"
            required
          ></input>

          <label htmlFor="mensaje"></label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Mensaje"
            rows="4"
            required
          ></textarea>
          <div className="formulario-boton-container">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </section>
      <section className="redes-section">
        <div className="home-titulos">
          <h2>Seguinos en las redes</h2>
        </div>
        <div className="iconos-redes-container">
          <div className="icono-circulo">
            <FontAwesomeIcon icon={faSquareInstagram} />
          </div>
          <div className="icono-circulo">
            <FontAwesomeIcon icon={faSquareFacebook} />
          </div>
        </div>
      </section>
      <section className="info-tienda-container">
        <ul className="iconos-tienda-container">
          <li className="icono-hexagono">
            <i>Direccion</i>
          </li>
          <li className="icono-hexagono">
            <i>Horario</i>
          </li>
          <li className="icono-hexagono">
            <i>Telefono</i>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
