import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1BuzosCamperas from "../../../assets/img/buzos-camperas1.jpg";
import img2BuzosCamperas from "../../../assets/img/buzos-camperas2.png";

const BuzosCamperas = () => {
  const opciones = [
    "Frisa deportiva",
    "Deportivo sin frisa",
    "Rústico de algodón",
    "Ketten",
    /*"Aún no me decido",*/
  ];

  const informacionProducto = [
    {
      titulo: "BUZOS Y CAMPERAS",
      imagenes: {
        imagen1: img1BuzosCamperas,
        imagen2: img2BuzosCamperas,
      },
      descripcion: [
        {
          type: "p",
          content:
            "Nuestros abrigos se confeccionan con telas de alta calidad, brindando comodidad, resguardo y estilo en toda ocasión.",
        },
        {
          type: "span",
          content: [
            "Disponibles en variados colores y talles para ajustarse a tus preferencias, estas prendas ofrecen la opción de ",
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
      />

      <GuiaDeTalles />
      <div id="pedidoCompraList">
        <PedidoCompraList opciones={opciones} />
      </div>
    </div>
  );
};

export default BuzosCamperas;
