import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1ConjuntosInvierno from "../../../assets/img/conjuntos-de-invierno1.jpg";

const ConjuntosDeInvierno = () => {
  const opciones = [
    "Frisa deportiva",
    "Deportivo sin frisa",
    "Rústico de algodón",
    /*"Aún no me decido",*/
  ];

  const informacionProducto = [
    {
      titulo: "CONJUNTOS DE INVIERNO",
      imagenes: {
        imagen1: img1ConjuntosInvierno,
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
        caruselEnDesktop="no"
        caruselMobile= ""
      />

      <GuiaDeTalles />
      <div id="pedidoCompraList">
        <PedidoCompraList opciones={opciones} />
      </div>
    </div>
  );
};

export default ConjuntosDeInvierno;
