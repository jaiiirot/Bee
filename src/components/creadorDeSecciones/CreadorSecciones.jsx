import React from "react";
import { Link } from "react-router-dom";

const CreadorSecciones = ({ titulo, imagenes, descripcion }) => {
  const scrollToPedidoCompraList = () => {
    // Calcula la posición del componente PedidoCompraList
    const pedidoCompraListPosition = document.getElementById("pedidoCompraList")
      .offsetTop;

    // Realiza el desplazamiento suave
    window.scrollTo({
      top: pedidoCompraListPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="secciones-productos-container">
      <div className="secciones-productos-titulo">
        <h1>{titulo}</h1>
      </div>
      <div className="secciones-productos-imagenes">
        {imagenes.map((imagen, index) => (
          <div className="secciones-productos-imagen" key={index}>
            <img src={imagen} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
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
