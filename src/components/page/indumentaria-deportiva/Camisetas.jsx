import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1Camisetas from "../../../assets/img/camisetas1.jpg";
import img2Camisetas from "../../../assets/img/camisetas2.jpg";
import img3Camisetas from "../../../assets/img/camisetas3.jpg";
import img4Camisetas from "../../../assets/img/camisetas4.jpg";
import imagen1 from "../../../assets/img/camisetas1-mobile.jpg";
import imagen2 from "../../../assets/img/camisetas2-mobile.jpg";
import imagen3 from "../../../assets/img/camisetas3-mobile.jpg";
import imagen4 from "../../../assets/img/camisetas4-mobile.jpg";

const Camisetas = () => {
  const opciones = [
    
  ];

  const informacionProducto = [
    {
      titulo: "CAMISETAS",
      imagenes: {
        imagen1: img1Camisetas,
        imagen2: img2Camisetas,
        imagen3: img3Camisetas,
        imagen4: img4Camisetas,
        
      },
      imagenesMobile: {
        imagen1: imagen1,
        imagen2: imagen2,
        imagen3: imagen3,
        imagen4: imagen4,
      },
      descripcion: [
        {
          type: "p",
          content:
            "Nuestras camisetas están confeccionadas con jersey deportivo, una tela suave, liviana, transpirable y de secado rápido, ideal para mantenerte cómodo durante la actividad física.",
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
        caruselEnDesktop="Camisetas"
        caruselMobile= ""
      />

      <GuiaDeTalles />
      <div id="pedidoCompraList">
        <PedidoCompraList titulo= {informacionProducto[0].titulo} opciones={opciones} />
      </div>
    </div>
  );
};

export default Camisetas;
