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
    <>
      <section className="hero-section">
        <div className="hero-img-container">
          <div className="hero-titulo">
            <h1>HACEMOS REALIDAD EL DISEÑO QUE SOÑASTE</h1>
          </div>
          <div className="hero-lema">
            <p>
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

      <section className="nuestros-estampados-section">
        <HexagonosNuestrosEstampadosListContainer />
      </section>

      <section className="mobile-nuestros-estampados-section">
        <HexagonosNuestrosEstampadosListContainer />
      </section>

      <section className="personalizar-productos-section">
        <div className="home-titulos productos-personalizados-titulo">
          <h2>PRODUCTOS PERSONALIZADOS</h2>
        </div>
        <div className="personalizar-productos-container">
          <div className="indumentaria-escolar personalizar-productos-container-img">
            <div className="personalizar-productos-vacio indumentaria-escolar-card"></div>
            <button >
              <Link to="productos/escolar-egresados" >INDUMENTARIA ESCOLAR Y EGRESADOS</Link>
            </button>
          </div>
          <div className="indumentaria-deportiva personalizar-productos-container-img">
            <div className="personalizar-productos-vacio indumentaria-deportiva-card"></div>
            <button>
              <Link to="productos/deportiva">INDUMENTARIA DEPORTIVA</Link>
            </button>
          </div>
          <div className="indumentaria-laboral personalizar-productos-container-img">
            <div className="personalizar-productos-vacio indumentaria-laboral-card"></div>
            <button>
              <Link to="productos/laboral">INDUMENTARIA LABORAL</Link>
            </button>
          </div>
          <div className="objetos-personalizados personalizar-productos-container-img">
            <div className="personalizar-productos-vacio objetos-personalizados-card"></div>
            <button>
              <Link to="productos/objetos-personalizados">OBJETOS PERSONALIZADOS</Link>
            </button>
          </div>
        </div>
      </section>

      <section ref={sectionRef1} className="formulario-section">
        <Formulario />
      </section>
    </>
  );
};

export default Home;
