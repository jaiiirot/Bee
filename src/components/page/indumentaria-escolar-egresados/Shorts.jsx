import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";

const Shorts = () => {
  const opciones = [
    /* No hay imagenes en este producto */
  ];
  const informacionProducto = [
    {
      titulo: "SHORTS",
      imagenes: {
        /* No hay imagenes en este producto */
      },
      imagenesMobile: {
        
      },
      descripcion: [
        {
          type: "p",
          content:
            "Nuestros shorts están elaborados con rústico de algodón, una tela suave y abrigada, de grosor fino, transpirable y resistente. Proporcionan comodidad y frescura para cualquier ocasión.",
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

export default Shorts;
