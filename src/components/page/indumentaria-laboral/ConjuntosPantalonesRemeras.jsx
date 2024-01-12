import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones2Titulos from "../../creadorDeSecciones/CreadorSecciones2Titulos";
import GuiaDeTallesLaboral from "../GuiaDeTallesLaboral";
import img1Conjunto from "../../../assets/img/conjuntos-pantalones-remeras1.jpg";
import img2Conjunto from "../../../assets/img/conjuntos-pantalones-remeras2.jpg";

const ConjuntosPantalonesRemeras = () => {
    const opciones = ["Piqué", "Piqué sublimable", "Spum", "Modal", "Jersey de algodón", "Jersey deportivo"];
    const informacionProducto = [
      {
        titulo: "CONJUNTOS:",
        subtitulo: "PANTALONES Y REMERAS",
        imagenes: {
          imagen1: img1Conjunto,
          imagen2: img2Conjunto,
        },
        descripcion: [
          {
            type: "p",
            content:
              "Nuestros pantalones de gabardina elastizada y remeras confeccionadas con telas de alta calidad, brindan una combinación de flexibilidad, comodidad y profesionalismo.",
          },
          {
            type: "span",
            content: [
              "Disponibles en diversos colores y talles, estas prendas ofrecen la opción de ",
              {
                type: "link",
                to: "/estampados",
                content: "estampados",
              },
              " y diseños para adaptarse a las necesidades y preferencias de tu negocio.",
            ],
          },
        ],
      },
    ];
  
    // Convierte el objeto de imágenes en un array de valores
    const imagenesArray = Object.values(informacionProducto[0].imagenes);
    /* const parrafosArray = Object.values(informacionProducto[0].descripcion); */
  
    return (
      <div>
        <CreadorSecciones2Titulos
          titulo={informacionProducto[0].titulo}
          subtitulo= {informacionProducto[0].subtitulo}
          imagenes={imagenesArray}
          descripcion={informacionProducto[0].descripcion}
          caruselEnDesktop="no"
          caruselMobile= ""
        />
  
        <GuiaDeTallesLaboral />
        <div id="pedidoCompraList">
          <PedidoCompraList titulo= {informacionProducto[0].titulo} opciones={opciones} />
        </div>
      </div>
    );
}

export default ConjuntosPantalonesRemeras