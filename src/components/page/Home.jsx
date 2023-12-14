import React from "react";
import { useRef } from "react";
import IconoInstagram from "../../assets/icon/icono-instagram.svg";
import IconoFacebook from "../../assets/icon/icono-facebook.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import SliderHeroListContainer from "../carousel/SliderHeroListContainer";
import { NavLink, Link } from "react-router-dom";
import Formulario from "../formulario/Formulario";
import ModeloHexagono from "../modelo-hexagono/ModeloHexagono";
import OverlayAnimation from "../overlayAnimation/OverlayAnimation";

const Home = () => {

const dataSublimacion = [
  {
    imgFondo: 'nuestros-estampados-sublimacion.jpg',
    titulo: 'SUBLIMACIÓN',
    claseHexagono: 'hexagono-con-imagen',
    message:
      'Proceso químico de tinta de sublimación en tela con al menos un 70% de poliéster. Ideal para telas blancas o colores claros. En colores más oscuros, se sublima en negro. Muy duradero y resistente a lavados y altas temperaturas. Ofrecemos "Full Print", sublimación en la totalidad o mayor parte de la prenda.',
  }
]

const dataTermovinilo = [
  {
    imgFondo: 'nuestros-estampados-termovinilo.jpg',
    titulo: 'TERMOVINILO',
    claseHexagono: 'hexagono-con-imagen',
    message:
      'Material en planchas por metro lineal, cortado y aplicado con temperatura, tiempo y presión específica. Adecuado para cualquier tipo de tela, especialmente eficaz en algodones. Diseños vectoriales; durabilidad dependiente del cuidado.',
  }

]

const dataDtf = [
  {
    imgFondo: 'nuestros-estampados-dtf.jpg',
    titulo: 'D.T.F.',
    claseHexagono: 'hexagono-con-imagen',
    message:
      'Impresión directa sobre film para un transfer digital más ligero. Adecuado para cualquier tipo de tela; ideal para prendas de poco uso. Menos duradero en comparación con otras técnicas.',
  }

]

const dataTermoviniloImpreso = [
  {
    imgFondo: 'nuestros-estampados-termovinilo-impreso.jpg',
    titulo: 'TERMOVINILO IMPRESO',
    claseHexagono: 'hexagono-con-imagen',
    message:
      'Similar al termovinilo, pero se imprime primero con tinta especial y luego se aplica. Versátil, se puede aplicar en cualquier tipo de tela. Puede decolorarse con el tiempo; durabilidad sujeta al cuidado.',
  }

]

const dataSerigrafia = [
  {
    imgFondo: 'nuestros-estampados-serigrafia.jpg',
    titulo: 'SERIGRAFÍA',
    claseHexagono: 'hexagono-con-imagen',
    message:
      'Técnica realizada en serie mediante matriz y estampado con tinta y presión específica. Apta para todo tipo de telas; mínimo de 5 unidades del mismo diseño. Duradero, con posibles pequeños cuarteos que no afectan el diseño.',
  }

]

const dataBordado = [
  {
    imgFondo: 'nuestros-estampados-bordado.jpg',
    titulo: 'BORDADO',
    claseHexagono: 'hexagono-con-imagen',
    message:
      'Técnica realizada mediante bordadora con matriz digitalizada. Apta para todo tipo de telas; diseño vectorial. Muy duradero; costo basado en cantidad de puntadas y cambios de colores.',
  }

]


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
        {/* <div className="home-titulo-mobile">
          <h1>HACEMOS REALIDAD EL DISEÑO QUE SOÑASTE</h1>
        </div> */}

        <div className="hero-img-container">
          <div className="hero-titulo">
            <h1>HACEMOS REALIDAD EL DISEÑO QUE SOÑASTE</h1>
          </div>
          <div className="hero-boton-contacto">
            <button onClick={() => scrollToSection(sectionRef1)}>
              CONTÁCTANOS
            </button>
          </div>
        </div>
      </section>

      {/* <section className="hero-mobile">
        <div className="hero-carusel-container-mobile">
          <SliderHeroListContainer />
        </div>

        <div className="formulario-boton-container-mobile">
          <button type="submit">CONTÁCTANOS</button>
        </div>
      </section> */}

      <section className="nuestros-estampados-section">
        <div className="info-tienda-hexagonosFila1">

          <OverlayAnimation message='Proceso químico de tinta de sublimación en tela con al menos un 70% de poliéster. Ideal para telas blancas o colores claros. En colores más oscuros, se sublima en negro. Muy duradero y resistente a lavados y altas temperaturas. Ofrecemos "Full Print", sublimación en la totalidad o mayor parte de la prenda.'>
            <div>
              <ModeloHexagono
                imgFondo="nuestros-estampados-sublimacion.jpg"
                titulo="SUBLIMACIÓN"
                claseHexagono="hexagono-con-imagen"
              />
            </div>
          </OverlayAnimation>

          <OverlayAnimation message="Material en planchas por metro lineal, cortado y aplicado con temperatura, tiempo y presión específica. Adecuado para cualquier tipo de tela, especialmente eficaz en algodones. Diseños vectoriales; durabilidad dependiente del cuidado.">
            <div>
              <ModeloHexagono
                imgFondo="nuestros-estampados-termovinilo.jpg"
                titulo="TERMOVINILO"
                claseHexagono="hexagono-con-imagen"
              />
            </div>
          </OverlayAnimation>
          
        </div>
        <div className="info-tienda-hexagonosFila2">

          <OverlayAnimation
          message='Impresión directa sobre film para un transfer digital más ligero. Adecuado para cualquier tipo de tela; ideal para prendas de poco uso. Menos duradero en comparación con otras técnicas.'>
            <div>
              <ModeloHexagono
                imgFondo="nuestros-estampados-dtf.jpg"
                titulo="D.T.F."
                claseHexagono="hexagono-con-imagen"
              />
            </div>
          </OverlayAnimation>

          <div className="home-titulos">
            <ModeloHexagono
              imgFondo=""
              titulo="NUESTROS ESTAMPADOS"
              claseHexagono="hexagono-sin-imagen"
            />
          </div>
          <OverlayAnimation
          message= 'Similar al termovinilo, pero se imprime primero con tinta especial y luego se aplica. Versátil, se puede aplicar en cualquier tipo de tela. Puede decolorarse con el tiempo; durabilidad sujeta al cuidado'>
          <div>
            <ModeloHexagono
              imgFondo="nuestros-estampados-termovinilo-impreso.jpg"
              titulo="TERMOVINILO IMPRESO"
              claseHexagono="hexagono-con-imagen"
            />
          </div>
          </OverlayAnimation>
        </div>
        <div className="info-tienda-hexagonosFila1">
        <OverlayAnimation
        message='Técnica realizada en serie mediante matriz y estampado con tinta y presión específica. Apta para todo tipo de telas; mínimo de 5 unidades del mismo diseño. Duradero, con posibles pequeños cuarteos que no afectan el diseño.'>
          <div>
            <ModeloHexagono
              imgFondo="nuestros-estampados-serigrafia.jpg"
              titulo="SERIGRAFÍA"
              claseHexagono="hexagono-con-imagen"
            />
          </div>
          </OverlayAnimation>

          <OverlayAnimation
          message='Técnica realizada mediante bordadora con matriz digitalizada. Apta para todo tipo de telas; diseño vectorial. Muy duradero; costo basado en cantidad de puntadas y cambios de colores.'>
          <div>
            <ModeloHexagono
              imgFondo="nuestros-estampados-bordado.jpg"
              titulo="BORDADO"
              claseHexagono="hexagono-con-imagen"
            />
          </div>
          </OverlayAnimation>
        </div>
      </section>

      {/* <section className="estampados">
        <div className="hexagono"></div>
      </section> */}

      <section className="nuestros-estampados-section-mobile">
        {/* <div className="home-titulos">
        <ModeloHexagono imgFondo="" titulo="NUESTROS ESTAMPADOS" />
        </div> */}
        <div className="home-titulos">
          <h2>NUESTROS ESTAMPADOS</h2>
        </div>
        <div className="info-tienda-hexagonosFila1">
          <div>
            <ModeloHexagono
              imgFondo="nuestros-estampados-sublimacion.jpg"
              titulo="SUBLIMACIÓN"
              claseHexagono="hexagono-con-imagen"
            />
          </div>
          <div>
            <ModeloHexagono
              imgFondo="nuestros-estampados-termovinilo.jpg"
              titulo="TERMOVINILO"
              claseHexagono="hexagono-con-imagen"
            />
          </div>
        </div>
        <div className="info-tienda-hexagonosFila2">
          <div>
            <ModeloHexagono
              imgFondo="nuestros-estampados-dtf.jpg"
              titulo="D.T.F."
              claseHexagono="hexagono-con-imagen"
            />
          </div>
        </div>
        <div className="info-tienda-hexagonosFila1">
          <div>
            <ModeloHexagono
              imgFondo="nuestros-estampados-serigrafia.jpg"
              titulo="SERIGRAFÍA"
              claseHexagono="hexagono-con-imagen"
            />
          </div>
          <div>
            <ModeloHexagono
              imgFondo="nuestros-estampados-bordado.jpg"
              titulo="BORDADO"
              claseHexagono="hexagono-con-imagen"
            />
          </div>
        </div>
        <div className="info-tienda-hexagonosFila2">
          <div>
            <ModeloHexagono
              imgFondo="nuestros-estampados-termovinilo-impreso.jpg"
              titulo="TERMOVINILO IMPRESO"
              claseHexagono="hexagono-con-imagen"
            />
          </div>
        </div>
      </section>

      <section className="personalizar-productos-section">
        <div className="home-titulos productos-personalizados-titulo">
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

      <section ref={sectionRef1} className="formulario-section">
        {/* <div className="home-titulos">
          <h2>ENVIANOS TU CONSULTA</h2>
        </div> */}
        <Formulario />
      </section>

      {/* <section className="redes-section">
        <div className="home-titulos">
          <h2>Seguinos en las redes</h2>
        </div>
        <div className="iconos-redes-container">
          <img src={IconoFacebook} alt="icono-facebook" />
          <img src={IconoInstagram} alt="icono-instagram" />
        </div>
      </section> */}

      {/* <section className="info-tienda-container">
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
      </section> */}
    </>
  );
};

export default Home;
