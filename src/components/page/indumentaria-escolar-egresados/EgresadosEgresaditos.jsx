import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1EgresadosEgresaditos from "../../../assets/img/regresados-egresaditos1.jpg";
import img2EgresadosEgresaditos from "../../../assets/img/regresados-egresaditos2.jpg";
import img3EgresadosEgresaditos from "../../../assets/img/regresados-egresaditos3.jpg";
import img4EgresadosEgresaditos from "../../../assets/img/regresados-egresaditos4.jpg";
import img5EgresadosEgresaditos from "../../../assets/img/regresados-egresaditos5.jpg";
import img6EgresadosEgresaditos from "../../../assets/img/regresados-egresaditos6.jpg";
import imagen1 from "../../../assets/img/egresados-egresaditos1-mobile.jpg";
import imagen2 from "../../../assets/img/egresados-egresaditos2-mobile.jpg";
import imagen3 from "../../../assets/img/egresados-egresaditos3-mobile.jpg";
import imagen4 from "../../../assets/img/egresados-egresaditos4-mobile.jpg";
import imagen5 from "../../../assets/img/egresados-egresaditos5-mobile.jpg";
import imagen6 from "../../../assets/img/egresados-egresaditos6-mobile.jpg";

const EgresadosEgresaditos = () => {
  const opciones = [
    "Frisa deportiva",
    "Ketten",
    "Rústico de algodón",
    /*"Aún no me decido",*/
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
      imagenesMobile: {
        imagen1: imagen1,
        imagen2: imagen2,
        imagen3: imagen3,
        imagen4: imagen4,
        imagen5: imagen5,
        imagen6: imagen6,
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
  const imagenesMobileArray = Object.values(informacionProducto[0].imagenesMobile);

  return (
    <div>
      <CreadorSecciones
        titulo={informacionProducto[0].titulo}
        imagenes={imagenesArray}
        imagenesMobile={imagenesMobileArray}
        descripcion={informacionProducto[0].descripcion}
        caruselEnDesktop="EgresadosYEgresaditos"
        caruselMobile= ""
      />

      <GuiaDeTalles />
      <div id="pedidoCompraList">
        <PedidoCompraList titulo= {informacionProducto[0].titulo} opciones={opciones} />
      </div>
    </div>
  );
};

export default EgresadosEgresaditos;
