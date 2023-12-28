import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1Pantalones from "../../../assets/img/pantalones1.jpg";
import img2Pantalones from "../../../assets/img/pantalones2.jpg";
import img3Pantalones from "../../../assets/img/pantalones3.jpg";

const Pantalones = () => {
  const opciones = ["Frisa deportiva", "Deportivo sin frisa"];
  const informacionProducto = [
    {
      titulo: "PANTALONES",
      imagenes: {
        imagen1: img1Pantalones,
        imagen2: img2Pantalones,
        imagen3: img3Pantalones,
      },
      descripcion: [
        {
          type: "p",
          content:
            "Nuestros pantalones largos se confeccionan con telas de alta calidad, brindando comodidad y estilo en toda ocasión.",
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

export default Pantalones;
