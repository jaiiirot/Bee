import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import img1RemerasChombas from "../../../assets/img/remeras-y-chombas1.jpg";
import img2RemerasChombas from "../../../assets/img/remeras-y-chombas2.jpg";
import img1RemerasChombasMobile from "../../../assets/img/mobile-remeras-y-chombas1.jpg";
import img2RemerasChombasMobile from "../../../assets/img/mobile-remeras-y-chombas2.jpg";
import GuiaDeTalles from "../GuiaDeTalles";

const RemerasChombas = () => {
 
  const opciones = [
    "Piqué",
    "Piqué sublimable",
    "Spum",
    "Modal",
    "Jersey de algodón",
    "Jersey deportivo",
  ];

  const informacionProducto = [
    {
      titulo: "REMERAS Y CHOMBAS",
      imagenes: {
        imagen1: img1RemerasChombas,
        imagen2: img2RemerasChombas,
      },
      imagenesMobile: {
        imagen1: img1RemerasChombasMobile,
        imagen2: img2RemerasChombasMobile,
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
  const imagenesMobileArray = Object.values(informacionProducto[0].imagenesMobile);
  /* const parrafosArray = Object.values(informacionProducto[0].descripcion); */

  return (
    <div>
      <CreadorSecciones
        titulo={informacionProducto[0].titulo}
        imagenes={imagenesArray}
        imagenesMobile={imagenesMobileArray}
        descripcion={informacionProducto[0].descripcion}
        caruselEnDesktop= "no"
        caruselMobile= ""
      />

      <GuiaDeTalles />
      <div id="pedidoCompraList">
        <PedidoCompraList titulo= {informacionProducto[0].titulo} opciones={opciones} />
      </div>
    </div>
  );
};

export default RemerasChombas;
