import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones2Titulos from "../../creadorDeSecciones/CreadorSecciones2Titulos";
import GuiaDeTallesLaboral from "../GuiaDeTallesLaboral";
import img1Chaquetas from "../../../assets/img/chaquetas-ambos-guardapolvos1.jpg";
import imagen1 from "../../../assets/img/chaquetas-ambos-guardapolvos1-mobile.jpg";

const ChaquetasAmbosGuardapolvos = () => {
    const opciones = [/* No hay telas */];
    const informacionProducto = [
      {
        titulo: "CHAQUETAS:",
        subtitulo: "AMBOS Y GUARDAPOLVOS",
        imagenes: {
          imagen1: img1Chaquetas,
        },
        imagenesMobile: {
          imagen1: imagen1,
        },
        descripcion: [
          {
            type: "p",
            content:
              "Nuestras chaquetas están confeccionadas con arciel, una tela opaca de fácil lavado y resistencia al uso, proporcionando comodidad y profesionalismo en el ámbito laboral.",
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
    const imagenesMobileArray = Object.values(informacionProducto[0].imagenesMobile);
    /* const parrafosArray = Object.values(informacionProducto[0].descripcion); */
  
    return (
      <div>
        <CreadorSecciones2Titulos
          titulo={informacionProducto[0].titulo}
          subtitulo= {informacionProducto[0].subtitulo}
          imagenes={imagenesArray}
          imagenesMobile={imagenesMobileArray}
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

export default ChaquetasAmbosGuardapolvos