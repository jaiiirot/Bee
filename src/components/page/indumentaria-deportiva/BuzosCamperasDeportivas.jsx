import React from "react";
import PedidoCompraList from "../../pedidoCompra/PedidoCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import GuiaDeTalles from "../GuiaDeTalles";
import img1BuzosCamperas from "../../../assets/img/buzos-camperas-deportiva1.jpg";


const BuzosCamperasDeportivas = () => {
    const opciones = [
        "Frisa deportiva",
        "Deportivo sin frisa",
        "Rústico de algodón",
        "Ketten",
        /*"Aún no me decido",*/
      ];
    
      const informacionProducto = [
        {
          titulo: "BUZOS Y CAMPERAS",
          imagenes: {
            imagen1: img1BuzosCamperas,
          },
          descripcion: [
            {
              type: "p",
              content:
                "Nuestros abrigos están confeccionados con telas de alta calidad, transpirables y resistentes, ideales para mantenerte cómodo durante la actividad física.",
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
    
      return (
        <div>
          <CreadorSecciones
            titulo={informacionProducto[0].titulo}
            imagenes={imagenesArray}
            descripcion={informacionProducto[0].descripcion}
            caruselEnDesktop= "no"
            caruselMobile= ""
          />
    
          <GuiaDeTalles />
          <div id="pedidoCompraList">
            <PedidoCompraList opciones={opciones} />
          </div>
        </div>
      );
}

export default BuzosCamperasDeportivas