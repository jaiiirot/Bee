import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1Delantales from "../../../assets/img/delantales1.jpg";
import img2Delantales from "../../../assets/img/delantales2.jpg";
import img3Delantales from "../../../assets/img/delantales3.jpg";

const Delantales = () => {
    const opciones = ["Sarga", "Trópical", "Gabardina", "Jean"];
    const informacionProducto = [
      {
        titulo: "DELANTALES",
        imagenes: {
          imagen1: img1Delantales,
          imagen2: img2Delantales,
          imagen3: img3Delantales,
        },
        descripcion: [
          {
            type: "p",
            content:
              "Nuestros delantales están confeccionados con telas de alta calidad, garantizando comodidad y profesionalismo en el ámbito laboral.",
          },
          {
            type: "span",
            content: [
              "Disponibles en diversos colores y talles, estas prendas ofrecen la opción de ",
              {
                type: "link",
                to: "/estampados",
                content: "estampados",
              },
              " y diseños para adaptarse a las necesidades y preferencias de tu negocio.",
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
          caruselMobile= ""
        />
  
        <GuiaDeTalles />
        <div id="pedidoCompraList">
          <PedidoCompraList opciones={opciones} />
        </div>
      </div>
    );
}

export default Delantales