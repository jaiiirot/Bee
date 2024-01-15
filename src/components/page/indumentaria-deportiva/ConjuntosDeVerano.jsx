import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1ConjuntosVerano from "../../../assets/img/conjuntos-de-verano1.jpg";
import img2ConjuntosVerano from "../../../assets/img/conjuntos-de-verano2.jpg";
import imagen1 from "../../../assets/img/conjuntos-de-verano1-mobile.jpg";
import imagen2 from "../../../assets/img/conjuntos-de-verano2-mobile.jpg";

const ConjuntosDeVerano = () => {
    
  const opciones = [
    "Jersey deportivo",
    "Rústico de algodón",
    "Lycra",
    /*"Aún no me decido",*/
  ];

  const informacionProducto = [
    {
      titulo: "CONJUNTOS DE VERANO",
      imagenes: {
        imagen1: img1ConjuntosVerano,
        imagen2: img2ConjuntosVerano,
      },
      imagenesMobile: {
        imagen1: imagen1,
        imagen2: imagen2,

      },
      descripcion: [
        {
          type: "p",
          content:
            "Nuestros conjuntos de camisetas de jersey deportivo y shorts confeccionados con telas de alta calidad transpirables y resistente, son ideales para mantenerte cómodo durante la actividad física.",
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

export default ConjuntosDeVerano;
