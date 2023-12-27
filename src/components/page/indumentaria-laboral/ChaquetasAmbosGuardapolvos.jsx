import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1Chaquetas from "../../../assets/img/chaquetas-ambos-guardapolvos1.jpg";

const ChaquetasAmbosGuardapolvos = () => {
    const opciones = [/* No hay telas */];
    const informacionProducto = [
      {
        titulo: "CHAQUETAS: AMBOS Y GUARDAPOLVOS",
        imagenes: {
          imagen1: img1Chaquetas,
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
    /* const parrafosArray = Object.values(informacionProducto[0].descripcion); */
  
    return (
      <div>
        <CreadorSecciones
          titulo={informacionProducto[0].titulo}
          imagenes={imagenesArray}
          descripcion={informacionProducto[0].descripcion}
          caruselEnDesktop="no"
        />
  
        <GuiaDeTalles />
        <div id="pedidoCompraList">
          <PedidoCompraList opciones={opciones} />
        </div>
      </div>
    );
}

export default ChaquetasAmbosGuardapolvos