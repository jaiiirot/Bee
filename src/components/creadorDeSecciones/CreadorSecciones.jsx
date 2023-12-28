import React from "react";
import { Link } from "react-router-dom";
import CaruselList from "../carusel-imagenes/CaruselList";
import CaruselListRemerasChombasLaboral from "../carusel-imagenes/CaruselListRemerasChombasLaboral";

const CreadorSecciones = ({
  titulo,
  imagenes,
  descripcion,
  caruselEnDesktop,
  caruselMobile,
}) => {
  const scrollToPedidoCompraList = () => {
    // Calcula la posición del componente PedidoCompraList
    const pedidoCompraListPosition =
      document.getElementById("pedidoCompraList").offsetTop;

    // Realiza el desplazamiento suave
    window.scrollTo({
      top: pedidoCompraListPosition,
      behavior: "smooth",
    });
  };

  /* Agregué una nueva condicion para que lleve a la seccion de remeras y chombas en laboral a un nuevo componente ya que son muchas imgenes, en el nuevo componente he agregado un left mas largo */

  return (
    <div className="secciones-productos-container">
      <div className="secciones-productos-titulo">
        <h1>{titulo}</h1>
      </div>
      <>
      {caruselEnDesktop === 'si' ? (
        <CaruselList imagenes={imagenes} />
      ) : caruselEnDesktop === 'RemerasChombasLaboral' ? (
        <CaruselListRemerasChombasLaboral imagenes={imagenes} />
      ) : (
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



      <div className={imagenes.length===0 ? ("secciones-productos-imagenes-mobile-oculto"): "secciones-productos-imagenes-mobile"} >
        <div className="secciones-productos-imagen">
          
{caruselMobile==="" ? (<div className= {imagenes.length<=2 ? ("product-cont-mobile"):"product-cont"} >
            {imagenes.map((imagen, index) => (
              <img key={index} src={imagen} alt={imagen} />
            ))}

          </div>) : <div className= "product-cont-mobile-imagenes-grandes" >
            {imagenes.map((imagen, index) => (
              <img key={index} src={imagen} alt={imagen} />
            ))}

          </div>}

          
        </div>
      </div>

      <div className="secciones-productos-informacion">
        <div className="secciones-informacion-descripcion">
          {descripcion.map((item, index) => (
            <div className="secciones-productos-imagen" key={index}>
              {item.type === "p" && <p>{item.content}</p>}
              {item.type === "span" && (
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

{/* <div className="secciones-productos-imagenes">
          {imagenes.map((imagen, index) => (
            <div className="secciones-productos-imagen" key={index}>
              <img src={imagen} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div> */}
