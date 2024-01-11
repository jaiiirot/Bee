import React from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "../formulario/Formulario";
import HexagonosNuestrosEstampadosListContainer from "../seccionHexagonosNuestrosEstampados/HexagonosNuestrosEstampadosListContainer";
import { Link } from "react-router-dom";

const Home = () => {
  const sectionRef1 = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="section-home background-hex">
      <section className="hero-section">
        <div className="hero-img-container">
          <div className="hero-titulo">
            <h1 className="font-title">
              HACEMOS REALIDAD EL DISEÑO QUE SOÑASTE
            </h1>
          </div>
          <div className="hero-lema">
            <p className="font-p">
              Realizamos la personalización de objetos e Indumentaria colegial,
              laboral y deportiva
            </p>
          </div>
          <div className="hero-boton-contacto">
            <button onClick={() => scrollToSection(sectionRef1)}>
              CONTÁCTANOS
            </button>
          </div>
        </div>
      </section>

      <section className="home-nuestros-estampados-section">
        <HexagonosNuestrosEstampadosListContainer />
      </section>

      <section className="personalizar-productos-section">
        <div className="home-titulos productos-personalizados-titulo">
          <h2 className="font-title">PRODUCTOS PERSONALIZADOS</h2>
        </div>
        <div className="personalizar-productos-container">
          <div className="indumentaria-escolar personalizar-productos-container-img">
            <Link
              to="productos/escolar-egresados"
              className="personalizar-productos-vacio indumentaria-escolar-card"
            >
              <button>INDUMENTARIA ESCOLAR Y EGRESADOS</button>
            </Link>
          </div>

          <div className="indumentaria-deportiva personalizar-productos-container-img">
            <Link
              to="productos/deportiva"
              className="personalizar-productos-vacio indumentaria-deportiva-card"
            >
              <button>INDUMENTARIA DEPORTIVA</button>
            </Link>
          </div>
          <div className="indumentaria-laboral personalizar-productos-container-img">
            <Link
              to="productos/laboral"
              className="personalizar-productos-vacio indumentaria-laboral-card"
            >
              <button>INDUMENTARIA LABORAL</button>
            </Link>
          </div>
          <div className="objetos-personalizados personalizar-productos-container-img">
            <Link
              to="productos/objetos-personalizados"
              className="personalizar-productos-vacio objetos-personalizados-card"
            >
              <button>OBJETOS</button>
            </Link>
          </div>
        </div>
      </section>

      <section ref={sectionRef1} className="formulario-section">
        <Formulario />
      </section>
    </div>
  );
};

export default Home;
