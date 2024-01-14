import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import img1Delantales from "../../../assets/img/delantales1.jpg";
import img2Delantales from "../../../assets/img/delantales2.jpg";
import img3Delantales from "../../../assets/img/delantales3.jpg";
import imagen1 from "../../../assets/img/delantales1-mobile.jpg";
import imagen2 from "../../../assets/img/delantales2-mobile.jpg";
import imagen3 from "../../../assets/img/delantales3-mobile.jpg";

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
        imagenesMobile: {
          imagen1: imagen1,
          imagen2: imagen2,
          imagen3: imagen3,
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
    const imagenesMobileArray = Object.values(informacionProducto[0].imagenesMobile);
    /* const parrafosArray = Object.values(informacionProducto[0].descripcion); */
  
    return (
      <div>
        <CreadorSecciones
          titulo={informacionProducto[0].titulo}
          imagenes={imagenesArray}
          imagenesMobile={imagenesMobileArray}
          descripcion={informacionProducto[0].descripcion}
          caruselEnDesktop="Delantales"
          caruselMobile= ""
        />
  
        
        <div style={{paddingTop:"32px"}} id="pedidoCompraList">
          <PedidoCompraList titulo= {informacionProducto[0].titulo} opciones={opciones} />
        </div>
      </div>
    );
}

export default Delantales