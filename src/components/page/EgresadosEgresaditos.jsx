import React from "react";
import PedidoCompraList from "../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "./GuiaDeTalles";
import img1EgresadosEgresaditos from "../../assets/img/regresados-egresaditos1.jpg";
import img2EgresadosEgresaditos from "../../assets/img/regresados-egresaditos2.jpg";
import img3EgresadosEgresaditos from "../../assets/img/regresados-egresaditos3.jpg";
import img4EgresadosEgresaditos from "../../assets/img/regresados-egresaditos4.jpg";
import img5EgresadosEgresaditos from "../../assets/img/regresados-egresaditos5.jpeg";
import img6EgresadosEgresaditos from "../../assets/img/regresados-egresaditos6.jpg";

const EgresadosEgresaditos = () => {
  const opciones = [
    "Frisa deportiva",
    "Ketten",
    "Rústico de algodón",
    "Aún no me decido",
  ];

  const informacionProducto = [
    {
      titulo: "EGRESADOS Y EGRESADITOS",
      imagenes: {
        imagen1: img1EgresadosEgresaditos,
        imagen2: img2EgresadosEgresaditos,
        imagen3: img3EgresadosEgresaditos,
        imagen4: img4EgresadosEgresaditos,
        imagen5: img5EgresadosEgresaditos,
        imagen6: img6EgresadosEgresaditos,
      },
      descripcion: [
        {
          type: "p",
          content:
            "Nuestra indumentaria de egresados se confeccionan con telas de alta calidad, brindando originalidad y creatividad para brillar en tu momento más especial.",
        },
        {
          type: "span",
          content: [
            "Disponibles en diveros colores y talles para ajustarse a tus preferencias, estas prendas ofrecen la opción de ",
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
        caruselEnDesktop="si"
      />

      <GuiaDeTalles />
      <div id="pedidoCompraList">
        <PedidoCompraList opciones={opciones} />
      </div>
    </div>
  );
};

export default EgresadosEgresaditos;
