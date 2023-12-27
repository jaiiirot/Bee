import React from "react";
import PedidoCompraList from "../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "./GuiaDeTalles";
import img1Camisetas from "../../assets/img/camisetas1.jpg";
import img2Camisetas from "../../assets/img/camisetas2.jpg";
import img3Camisetas from "../../assets/img/camisetas3.jpg";
import img4Camisetas from "../../assets/img/camisetas4.jpg";

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
      descripcion: [
        {
          type: "p",
          content:
            "Nuestras camisetas están confeccionadas con jersey deportivo, una tela suave, liviana, transpirable y de secado rápido, ideal para mantenerte cómodo durante la actividad física.",
        },
        {
          type: "span",
          content: [
            "Disponibles en diversos colores y talles para adaptarse a tus preferencias, estas prendas ofrecen la opción de",
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

export default Camisetas;
