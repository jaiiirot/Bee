import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTallesLaboral from "../GuiaDeTallesLaboral";
import img1RemerasChombasLaboral from "../../../assets/img/remeras-chombas-laboral1.jpg";
import img2RemerasChombasLaboral from "../../../assets/img/remeras-chombas-laboral2.jpg";
import img3RemerasChombasLaboral from "../../../assets/img/remeras-chombas-laboral3.jpg";
import img4RemerasChombasLaboral from "../../../assets/img/remeras-chombas-laboral4.jpg";
import img5RemerasChombasLaboral from "../../../assets/img/remeras-chombas-laboral5.jpg";
import imagen1 from "../../../assets/img/remeras-chombas-laboral1-mobile.jpg";
import imagen2 from "../../../assets/img/remeras-chombas-laboral2-mobile.jpg";
import imagen3 from "../../../assets/img/remeras-chombas-laboral3-mobile.jpg";
import imagen4 from "../../../assets/img/remeras-chombas-laboral4-mobile.jpg";
import imagen5 from "../../../assets/img/remeras-chombas-laboral5-mobile.jpg";

const RemerasChombasLaboral = () => {
    const opciones = ["Piqué", "Piqué sublimable", "Spum", "Modal", "Jersey de algodón", "Jersey deportivo"];
    const informacionProducto = [
      {
        titulo: "REMERAS Y CHOMBAS",
        imagenes: {
          imagen1: img1RemerasChombasLaboral,
          imagen2: img2RemerasChombasLaboral,
          imagen3: img3RemerasChombasLaboral,
          imagen4: img4RemerasChombasLaboral,
          imagen5: img5RemerasChombasLaboral,
        },
        imagenesMobile: {
          imagen1: imagen1,
          imagen2: imagen2,
          imagen3: imagen3,
          imagen4: imagen4,
          imagen5: imagen5,
        },
        descripcion: [
          {
            type: "p",
            content:
              "Nuestras remeras y chombas de mangas cortas se confeccionan con telas de alta calidad, garantizando comodidad y profesionalismo en el ámbito laboral.",
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
    const imagenesMobileArray = Object.values(informacionProducto[0].imagenesMobile);

    return (
      <div>
        <CreadorSecciones
          titulo={informacionProducto[0].titulo}
          imagenes={imagenesArray}
          imagenesMobile={imagenesMobileArray}
          descripcion={informacionProducto[0].descripcion}
          caruselEnDesktop="RemerasChombasLaboral"
          caruselMobile= ""
        />
  
        <GuiaDeTallesLaboral />
        <div id="pedidoCompraList">
          <PedidoCompraList titulo= {informacionProducto[0].titulo} opciones={opciones} />
        </div>
      </div>
    );
}

export default RemerasChombasLaboral