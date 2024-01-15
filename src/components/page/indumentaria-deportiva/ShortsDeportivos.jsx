import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1Shorts from "../../../assets/img/shorts1.jpg";
import img2Shorts from "../../../assets/img/shorts2.jpg";
import imagen1 from "../../../assets/img/shorts1-mobile.jpg";
import imagen2 from "../../../assets/img/shorts2-mobile.jpg";

const ShortsDeportivos = () => {
  const opciones = [
    "Jersey deportivo",
    "Rústico de algodón",
    "Lycra",
    /*"Aún no me decido",*/
  ];
  const informacionProducto = [
    {
      titulo: "SHORTS",
      imagenes: {
        imagen1: img1Shorts,
        imagen2: img2Shorts,
      },
      imagenesMobile: {
        imagen1: imagen1,
        imagen2: imagen2,
      },
      descripcion: [
        {
          type: "p",
          content:
            "Nuestros shorts están confeccionados con telas de alta calidad, transpirables y resistentes, ideales para mantenerte cómodo durante la actividad física.",
        },
        {
          type: "span",
          content: [
            "Disponibles en diversos colores y talles para adaptarse a tus preferencias, estas prendas ofrecen la opción de ",
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
  const imagenesMobileArray = Object.values(informacionProducto[0].imagenesMobile);

  return (
    <div>
      <CreadorSecciones
        titulo={informacionProducto[0].titulo}
        imagenes={imagenesArray}
        imagenesMobile={imagenesMobileArray}
        descripcion={informacionProducto[0].descripcion}
        caruselEnDesktop="no"
        caruselMobile= ""
      />

      <GuiaDeTalles />
      <div id="pedidoCompraList">
        <PedidoCompraList titulo= {informacionProducto[0].titulo} opciones={opciones} />
      </div>
    </div>
  );
};

export default ShortsDeportivos;
