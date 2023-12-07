import React from "react";
import "../../style/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="home-titulos">
          <h2>TITULO</h2>
        </div>
        <div className="hero-img-container">
          <div className="hero-titulo">
            <h1>HACEMOS REALIDAD LO QUE SOÑASTE</h1>
          </div>
        </div>
        <div className="logo-whatsappa-container">
          <i>logo whatsapp en componente</i>
        </div>
      </section>

      <section className="personalizar-productos-section">
        <div className="home-titulos">
          <h2>TITULO</h2>
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
        <p>Aqui va el componente de formulario</p>
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
        <div className="iconos-tienda-container">
          <i>Direccion</i>
          <i>Horario</i>
          <i>Telefono</i>
        </div>
      </section>
    </>
  );
};

export default Home;
