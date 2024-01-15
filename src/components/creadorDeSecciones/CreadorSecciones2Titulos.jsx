import React from "react";
import { Link } from "react-router-dom";
import CaruselList from "../carusel-imagenes/CaruselList";

const CreadorSecciones2Titulos = ({
  titulo,
  subtitulo,
  imagenes,
  descripcion,
  caruselEnDesktop,
  caruselMobile,
  imagenesMobile
}) => {
  const scrollToPedidoCompraList = () => {
    // Calcula la posición del componente PedidoCompraList
    const pedidoCompraListElement = document.getElementById("pedidoCompraList");
  
    if (pedidoCompraListElement) {
      const pedidoCompraListPosition = pedidoCompraListElement.offsetTop;
  
      // Resta 10px al valor de top para desplazarte 10px más arriba
      const scrollToPosition = pedidoCompraListPosition - 100;
  
      // Realiza el desplazamiento suave
      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  /* Agregué una nueva condicion para que lleve a la seccion de remeras y chombas en laboral a un nuevo componente ya que son muchas imgenes, en el nuevo componente he agregado un left mas largo */

  return (
    <div className="secciones-productos-container">
      <div className="secciones-productos-titulo-2lineas">
        <h1>{titulo}</h1>
        <h2>{subtitulo} </h2>
      </div>
      <>
        {caruselEnDesktop === "si" ? (
          <CaruselList imagenes={imagenes} />
        ) :(
          <div className="secciones-productos-imagenes">
            <div className="secciones-productos-imagen">
              <div className="product-cont">
                {imagenes.map((imagen, index) => (
                  <img key={index} src={imagen} alt={imagen} />
                ))}
              </div>
            </div>
          </div>
        )}
      </>

      <div
        className={
          imagenes.length === 0
            ? "secciones-productos-imagenes-mobile-oculto"
            : "secciones-productos-imagenes-mobile"
        }
      >
        <div className="secciones-productos-imagen">
          {caruselMobile === "" ? (
            <div
            className={
              imagenesMobile.length === 1
                ? "product-cont-1imagen"
                : imagenesMobile.length <= 2
                ? "product-cont-mobile"
                : "product-cont"
            }
            >
              {imagenesMobile.map((imagen, index) => (
                <img key={index} src={imagen} alt={imagen} />
              ))}
            </div>
          ) : (
            <div className="product-cont-mobile-imagenes-grandes">
              {imagenes.map((imagen, index) => (
                <img key={index} src={imagen} alt={imagen} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className= {imagenes.length>0 ? "secciones-productos-informacion" : "secciones-productos-informacion2"}>
        <div className=  "secciones-informacion-descripcion">

          {descripcion.map((item, index) => (
            <div className="secciones-productos-parrafos" key={index}>
              {item.type === "p" && <p>{item.content}</p>}
              {item.type === "span" && (
                <>
                  <br />
                  <span key={index}>
                    {item.content.map((element, i) =>
                      element.type === "link" ? (
                        <Link key={i} to={element.to}>
                          {element.content}
                        </Link>
                      ) : (
                        element
                      )
                    )}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="secciones-informacion-boton">
          <Link to="#" onClick={scrollToPedidoCompraList}>
            <button>Solicitar Presupuesto</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreadorSecciones2Titulos;

