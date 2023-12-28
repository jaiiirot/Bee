import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import img1RemerasChombas from "../../../assets/img/remeras-y-chombas1.jpeg";
import img2RemerasChombas from "../../../assets/img/remeras-y-chombas2.jpeg";
import GuiaDeTalles from "../GuiaDeTalles";

const RemerasChombas = () => {
 
  const opciones = [
    "Piqué",
    "Jersey de algodón",
    "Piqué sublimable",
    "Jersey deportivo",
    "Spum",
    "Modal",
  ];

  const informacionProducto = [
    {
      titulo: "REMERAS Y CHOMBAS",
      imagenes: {
        imagen1: img1RemerasChombas,
        imagen2: img2RemerasChombas,
      },
      descripcion: [
        {
          type: "p",
          content:
            "Nuestras remeras y chombas de mangas cortas se confeccionan con telas de alta calidad, brindando comodidad y estilo en toda ocasión.",
        },
        {
          type: "span",
          content: [
            "Disponibles en diversos colores y talles para ajustarse a tus preferencias, estas prendas ofrecen la opción de ",
            {
              type: "link",
              to: "/estampados",
              content: "estampados",
            },
            " y diseños que aportan un toque único.",
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
        caruselEnDesktop= "no"
        caruselMobile= ""
      />

      <GuiaDeTalles />
      <div id="pedidoCompraList">
        <PedidoCompraList opciones={opciones} />
      </div>
    </div>
  );
};

export default RemerasChombas;
