import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1RemerasChombasLaboral from "../../../assets/img/remeras-chombas-laboral1.jpg";
import img2RemerasChombasLaboral from "../../../assets/img/remeras-chombas-laboral2.jpg";
import img3RemerasChombasLaboral from "../../../assets/img/remeras-chombas-laboral3.jpg";
import img4RemerasChombasLaboral from "../../../assets/img/remeras-chombas-laboral4.jpg";
import img5RemerasChombasLaboral from "../../../assets/img/remeras-chombas-laboral5.jpg";

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
  
    return (
      <div>
        <CreadorSecciones
          titulo={informacionProducto[0].titulo}
          imagenes={imagenesArray}
          descripcion={informacionProducto[0].descripcion}
          caruselEnDesktop="RemerasChombasLaboral"
        />
  
        <GuiaDeTalles />
        <div id="pedidoCompraList">
          <PedidoCompraList opciones={opciones} />
        </div>
      </div>
    );
}

export default RemerasChombasLaboral