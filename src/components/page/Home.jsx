import React from "react";
import "../../style/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import IconoInstagram from "../../iconos/icono-instagram.svg";
import IconoFacebook from "../../iconos/icono-facebook.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderHeroListContainer from "../carousel/SliderHeroListContainer";
import { NavLink, Link } from "react-router-dom";
import Ayuda from "./Ayuda";

const Home = () => {
  return (
    <>
    <NavLink to= "/Ayuda">
      <button>ir a AYUDA</button>
    </NavLink>
    
      <section className="hero-section">
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
      </section>

      <section className="hero-mobile">
        <div className="hero-carusel-container-mobile">
          <SliderHeroListContainer />
        </div>

        <div className="formulario-boton-container-mobile">
          <button type="submit">CONTÁCTANOS</button>
        </div>
      </section>

      <section className="nuestros-estampados-section">
        <div className="info-tienda-hexagonosFila1">
          <div className="hexagon">
            <p>SUBLIMACIÓN</p>
          </div>
          <div className="hexagon">
            <p>TERMOVINILO</p>
          </div>
        </div>
        <div className="info-tienda-hexagonosFila2">
          <div className="hexagon">
            <p>D.T.F</p>
          </div>
          <div className="hexagon home-titulos">
            <h2>NUESTROS ESTAMPADOS</h2>
          </div>
          <div className="hexagon">
            <p>SEFIGRAFÍA</p>
          </div>
        </div>
        <div className="info-tienda-hexagonosFila1">
          <div className="hexagon">
            <p>BORDADO</p>
          </div>
          <div className="hexagon">
            <p>DIRECCIÓN</p>
          </div>
        </div>
      </section>

      <section className="nuestros-estampados-section-mobile">
        <div className="home-titulos">
          <h2>NUESTROS ESTAMPADOS</h2>
        </div>
        <div className="info-tienda-hexagonosFila1">
          <div className="hexagon">
            <p>SUBLIMACIÓN</p>
          </div>
          <div className="hexagon">
            <p>TERMOVINILO</p>
          </div>
        </div>
        <div className="info-tienda-hexagonosFila2">
          <div className="hexagon">
            <p>D.T.F</p>
          </div>
        </div>
        <div className="info-tienda-hexagonosFila1">
          <div className="hexagon">
            <p>SERIGRAFÍA</p>
          </div>
          <div className="hexagon">
            <p>BORDADO</p>
          </div>
        </div>
        <div className="info-tienda-hexagonosFila2">
          <div className="hexagon">
            <p>TERMOVINILO IMPRESO</p>
          </div>
          
        </div>
      </section>

      <section className="personalizar-productos-section">
        <div className="home-titulos">
          <h2>PRODUCTOS PERSONALIZADOS</h2>
        </div>
        <div className="personalizar-productos-container">
          <div className="indumentaria-escolar personalizar-productos-container-img">
            <div className="personalizar-productos-vacio indumentaria-escolar-card"></div>
            <button>INDUMENTARIA ESCOLAR Y EGRESADOS</button>
          </div>
          <div className="indumentaria-deportiva personalizar-productos-container-img">
            <div className="personalizar-productos-vacio indumentaria-deportiva-card"></div>
            <button>INDUMENTARIA DEPORTIVA</button>
          </div>
          <div className="indumentaria-laboral personalizar-productos-container-img">
            <div className="personalizar-productos-vacio indumentaria-laboral-card"></div>
            <button>INDUMENTARIA LABORAL</button>
          </div>
          <div className="objetos-personalizados personalizar-productos-container-img">
            <div className="personalizar-productos-vacio objetos-personalizados-card"></div>
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
            placeholder="Nombre"
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
            <button type="submit">ENVIAR</button>
          </div>
        </form>
      </section>
      <section className="redes-section">
        <div className="home-titulos">
          <h2>Seguinos en las redes</h2>
        </div>
        <div className="iconos-redes-container">
          <img src={IconoFacebook} alt="icono-facebook" />
          <img src={IconoInstagram} alt="icono-instagram" />
        </div>
      </section>
      <section className="info-tienda-container">
        <div className="info-tienda-hexagonosFila1">
          <div className="hexagon">
            <p>HORARIO</p>
          </div>
          <div className="hexagon">
            <p>DIRECCIÓN</p>
          </div>
        </div>
        <div className="info-tienda-hexagonosFila2">
          <div className="hexagon">
            <p>TELÉFONO</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
