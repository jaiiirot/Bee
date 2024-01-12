import React from "react";
import ObjetosPedidosCompraList from "../../pedidoCompra/ObjetosPedidosCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import img1Llaveros from "../../../assets/img/llaveros1.jpg";

const Llaveros = () => {
    
    const informacionProducto = [
      {
        titulo: "LLAVEROS",
        imagenes: {
          imagen1: img1Llaveros,
          
        },
        descripcion: [
          {
            type: "p",
            content:
              "Nuestro merchandising personalizado está pensado para resaltar la identidad de tu marca y/o evento especial. Creamos piezas únicas que destacan y comunican tu mensaje de manera distintiva.",
          },
          {
            type: "p",
            content:
              "Disponibles en una variedad de colores, formas y tamaños, te brindamos una amplia gama de opciones de diseño para personalizar tus artículos según tus preferencias.",
          },
        ],
      },
    ];
  
    // Convierte el objeto de imágenes en un array de valores
    const imagenesArray = Object.values(informacionProducto[0].imagenes);
    /* const parrafosArray = Object.values(informacionProducto[0].descripcion); */
  
    return (
      <div>
        <CreadorSecciones
          titulo={informacionProducto[0].titulo}
          imagenes={imagenesArray}
          descripcion={informacionProducto[0].descripcion}
          caruselEnDesktop="no"
          caruselMobile= ""
        />
  
        
        <div className="section-presupuesto-objetos" id="pedidoCompraList">
          <ObjetosPedidosCompraList titulo= {informacionProducto[0].titulo}  />
        </div>
      </div>
    );
}

export default Llaveros