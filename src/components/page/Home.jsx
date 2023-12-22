import React from "react";
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "../formulario/Formulario";
import ModeloHexagono from "../modelo-hexagono/ModeloHexagono";
import OverlayAnimation from "../overlayAnimation/OverlayAnimation";
import PedidoCompraList from "../pedidoCompra/PedidoCompraList";

const Home = () => {
  const dataSublimacionYTermovinilo = [
    {
      imgFondo: "nuestros-estampados-sublimacion.jpg",
      titulo: "SUBLIMACIÓN",
      claseHexagono: "hexagono-con-imagen",
      message:
        'Proceso químico de tinta de sublimación en tela con al menos un 70% de poliéster. \n Ideal para telas blancas o colores claros. En colores más oscuros, se sublima en negro.\n Muy duradero y resistente a lavados y altas temperaturas.\n Ofrecemos "Full Print", sublimación en la totalidad o mayor parte de la prenda.',
    },
    {
      imgFondo: "nuestros-estampados-termovinilo.jpg",
      titulo: "TERMOVINILO",
      claseHexagono: "hexagono-con-imagen",
      message:
        "Material en planchas por metro lineal, cortado y aplicado con temperatura, tiempo y presión específica.\n Adecuado para cualquier tipo de tela, especialmente eficaz en algodones.\n Diseños vectoriales; durabilidad dependiente del cuidado.",
    },
  ];

  const dataDtf_titulo_TermoImpreso = [
    {
      imgFondo: "nuestros-estampados-dtf.jpg",
      titulo: "D.T.F.",
      claseHexagono: "hexagono-con-imagen",
      shouldAnimate: true,
      message:
        "Impresión directa sobre film para un transfer digital más ligero.\n Adecuado para cualquier tipo de tela; ideal para prendas de poco uso.\n Menos duradero en comparación con otras técnicas.",
    },
    {
      imgFondo: "",
      titulo: "NUESTROS ESTAMPADOS",
      claseHexagono: "hexagono-sin-imagen",
      message: "",
      shouldAnimate: false,
    },
    {
      imgFondo: "nuestros-estampados-termovinilo-impreso.jpg",
      titulo: "TERMOVINILO IMPRESO",
      claseHexagono: "hexagono-con-imagen",
      shouldAnimate: true,
      message:
        "Similar al termovinilo, pero se imprime primero con tinta especial y luego se aplica.\n Versátil, se puede aplicar en cualquier tipo de tela.\n Puede decolorarse con el tiempo; durabilidad sujeta al cuidado.",
    },
  ];

  const dataSerigrafiaYBordado = [
    {
      imgFondo: "nuestros-estampados-serigrafia.jpg",
      titulo: "SERIGRAFÍA",
      claseHexagono: "hexagono-con-imagen",
      message:
        "Técnica realizada en serie mediante matriz y estampado con tinta y presión específica. \n Apta para todo tipo de telas; mínimo de 5 unidades del mismo diseño. \n Duradero, con posibles pequeños cuarteos que no afectan el diseño.",
    },
    {
      imgFondo: "nuestros-estampados-bordado.jpg",
      titulo: "BORDADO",
      claseHexagono: "hexagono-con-imagen",
      message:
        "Técnica realizada mediante bordadora con matriz digitalizada. \n Apta para todo tipo de telas; diseño vectorial. \n Muy duradero; costo basado en cantidad de puntadas y cambios de colores.",
    },
  ];

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
            <p>Realizamos la personalización de objetos e Indumentaria colegial, laboral y deportiva</p>
          </div>
          <div className="hero-boton-contacto">
            <button onClick={() => scrollToSection(sectionRef1)}>
              CONTÁCTANOS
            </button>
          </div>
        </div>
      </section>

      <section className="nuestros-estampados-section">
        <div className="info-tienda-hexagonosFila1">
          {dataSublimacionYTermovinilo.map((data, index) => (
            <OverlayAnimation key={index} message={data.message}>
              <div key={data.titulo}>
                <ModeloHexagono
                  imgFondo={data.imgFondo}
                  titulo={data.titulo}
                  claseHexagono={data.claseHexagono}
                />
              </div>
            </OverlayAnimation>
          ))}
        </div>

        <div className="info-tienda-hexagonosFila2">
          {dataDtf_titulo_TermoImpreso.map((data, index) => (
            <div key={index}>
              {data.shouldAnimate ? (
                <OverlayAnimation key={index} message={data.message}>
                  <div>
                    <ModeloHexagono
                      imgFondo={data.imgFondo}
                      titulo={data.titulo}
                      claseHexagono={data.claseHexagono}
                    />
                  </div>
                </OverlayAnimation>
              ) : (
                <ModeloHexagono
                  key={index}
                  imgFondo={data.imgFondo}
                  titulo={data.titulo}
                  claseHexagono={data.claseHexagono}
                />
              )}
            </div>
          ))}
        </div>

        <div className="info-tienda-hexagonosFila1">
          {dataSerigrafiaYBordado.map((data, index) => (
            <OverlayAnimation key={index} message={data.message}>
              <div key={data.titulo}>
                <ModeloHexagono
                  imgFondo={data.imgFondo}
                  titulo={data.titulo}
                  claseHexagono={data.claseHexagono}
                />
              </div>
            </OverlayAnimation>
          ))}
        </div>
      </section>

      <section className="nuestros-estampados-section-mobile">
        <div className="home-titulos">
          <h2>NUESTROS ESTAMPADOS</h2>
        </div>
        <div className="info-tienda-hexagonosFila1">
          {dataSublimacionYTermovinilo.map((data, index) => (
            <OverlayAnimation key={index} message={data.message}>
              <div key={data.titulo}>
                <ModeloHexagono
                  imgFondo={data.imgFondo}
                  titulo={data.titulo}
                  claseHexagono={data.claseHexagono}
                />
              </div>
            </OverlayAnimation>
          ))}
        </div>
        <div className="info-tienda-hexagonosFila2">
          {dataDtf_titulo_TermoImpreso.slice(0, 1).map((data, index) => (
            <OverlayAnimation key={index} message={data.message}>
              <div key={data.titulo}>
                <ModeloHexagono
                  imgFondo={data.imgFondo}
                  titulo={data.titulo}
                  claseHexagono={data.claseHexagono}
                />
              </div>
            </OverlayAnimation>
          ))}
        </div>
        <div className="info-tienda-hexagonosFila1">
          {dataSerigrafiaYBordado.map((data, index) => (
            <OverlayAnimation key={index} message={data.message}>
              <div key={data.titulo}>
                <ModeloHexagono
                  imgFondo={data.imgFondo}
                  titulo={data.titulo}
                  claseHexagono={data.claseHexagono}
                />
              </div>
            </OverlayAnimation>
          ))}
        </div>
        <div className="info-tienda-hexagonosFila2">
          {dataDtf_titulo_TermoImpreso.slice(2, 3).map((data, index) => (
            <div key={index}>
              {data.shouldAnimate ? (
                <OverlayAnimation key={index} message={data.message}>
                  <div>
                    <ModeloHexagono
                      imgFondo={data.imgFondo}
                      titulo={data.titulo}
                      claseHexagono={data.claseHexagono}
                    />
                  </div>
                </OverlayAnimation>
              ) : (
                <ModeloHexagono
                  key={index}
                  imgFondo={data.imgFondo}
                  titulo={data.titulo}
                  claseHexagono={data.claseHexagono}
                />
              )}
            </div>
          ))}
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
        <Formulario />
      </section>

      
    </>
  );
};

export default Home;
