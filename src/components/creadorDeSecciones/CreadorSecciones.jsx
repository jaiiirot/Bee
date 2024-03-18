import React from "react";
import { Link } from "react-router-dom";
import CaruselList from "../carusel-imagenes/CaruselList";
import CaruselListRemerasChombasLaboral from "../carusel-imagenes/CaruselListRemerasChombasLaboral";
import CaruselListEgresadosEgresaditos from "../carusel-imagenes/CaruselListEgresadosEgresaditos";
import CaruselListCamisetas from "../carusel-imagenes/CaruselListCamisetas";
import CaruselListDelantales from "../carusel-imagenes/CaruselListDelantales";
import CaruselListGorros from "../carusel-imagenes/CaruselListGorros";
import CaruselListTazas from "../carusel-imagenes/CaruselListTazas";

const CreadorSecciones = ({
  titulo,
  imagenes,
  descripcion,
  caruselEnDesktop,
  caruselMobile,
  imagenesMobile,
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
      <div className="secciones-productos-titulo">
        <h1>{titulo}</h1>
      </div>
      {/* <div>
        {caruselEnDesktop === "si" ? (
          <CaruselList imagenes={imagenes} />
        ) : caruselEnDesktop === "RemerasChombasLaboral" ? (
          <CaruselListRemerasChombasLaboral imagenes={imagenes} />
        ) : caruselEnDesktop === "EgresadosYEgresaditos" ? (
          <CaruselListEgresadosEgresaditos imagenes={imagenes} />
        ) : caruselEnDesktop === "Camisetas" ? (
          <CaruselListCamisetas imagenes={imagenes} />
        ) : caruselEnDesktop === "Delantales" ? (
          <CaruselListDelantales imagenes={imagenes} />
        ) : caruselEnDesktop === "Gorros" ? (
          <CaruselListGorros imagenes={imagenes} />
        ) : caruselEnDesktop === "Tazas" ? (
          <CaruselListTazas imagenes={imagenes} />
        ) : (
          <div className="secciones-productos-imagenes">
            <div className="secciones-productos-imagen">
              <div
                className={
                  imagenes.length > 1 ? "product-cont" : "product-cont-1imagen"
                }
              >
                {imagenes.map((imagen, index) => (
                  <img key={index} src={imagen} alt={imagen} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div> */}

      {/* <div
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
      </div> */}

      <div
        className={
          imagenes.length > 0
            ? "secciones-productos-informacion"
            : "secciones-productos-informacion2"
        }
      >
        <div className="secciones-informacion-descripcion">
          {descripcion.map((item, index) => (
            <div className="secciones-productos-parrafos" key={index}>
              {item.type === "p" && (
                <>
                  <p>{item.content}</p>
                  <br />
                </>
              )}
              {item.type === "span" && (
                <>
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

export default CreadorSecciones;

{
  /* <div className="secciones-productos-imagenes">
          {imagenes.map((imagen, index) => (
            <div className="secciones-productos-imagen" key={index}>
              <img src={imagen} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div> */
}
