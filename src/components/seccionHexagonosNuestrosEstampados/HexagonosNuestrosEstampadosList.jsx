import React from "react";
import OverlayAnimation from "../overlayAnimation/OverlayAnimation";
import ModeloHexagono from "../modelo-hexagono/ModeloHexagono";

const HexagonosNuestrosEstampadosList = ({
  dataSublimacionYTermovinilo,
  dataDtf_titulo_TermoImpreso,
  dataSerigrafiaYBordado,
}) => {
  return (
    <div>
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
        <div className="info-tienda-hexagonosFila3">
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
        <div className="info-tienda-hexagonosFila4">
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
    </div>
  );
};

export default HexagonosNuestrosEstampadosList;
