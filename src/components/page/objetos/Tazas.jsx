import React from "react";
import ObjetosPedidosCompraList from "../../pedidoCompra/ObjetosPedidosCompraList";
import CreadorSecciones from "../../creadorDeSecciones/CreadorSecciones";
import img1Tazas from "../../../assets/img/tazas1.jpg";
import img2Tazas from "../../../assets/img/tazas2.jpg";
import img3Tazas from "../../../assets/img/tazas3.jpg";
import img4Tazas from "../../../assets/img/tazas4.jpg";
import imagen1 from "../../../assets/img/tazas1-mobile.jpg";
import imagen2 from "../../../assets/img/tazas2-mobile.jpg";
import imagen3 from "../../../assets/img/tazas3-mobile.jpg";
import imagen4 from "../../../assets/img/tazas4-mobile.jpg";

const Tazas = () => {
  const informacionProducto = [
    {
      titulo: "TAZAS",
      imagenes: {
        imagen1: img1Tazas,
        imagen2: img2Tazas,
        imagen3: img3Tazas,
        imagen4: img4Tazas,
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
            "Nuestro merchandising personalizado está pensado para resaltar la identidad de tu marca y/o evento especial. Creamos piezas únicas que destacan y comunican tu mensaje de manera distintiva. ",
        },
        {
          type: "p",
          content:
            "Disponibles en una variedad de colores, formas y tamaños, te brindamos una amplia gama de opciones de diseño para personalizar tus artículos según tus preferencias.",
        },
      ],
    },
  ];

  // Convierte el objeto de imágenes en un array de valores
  const imagenesArray = Object.values(informacionProducto[0].imagenes);
  /* const parrafosArray = Object.values(informacionProducto[0].descripcion); */
  const imagenesMobileArray = Object.values(
    informacionProducto[0].imagenesMobile
  );

  return (
    <div>
      <CreadorSecciones
        titulo={informacionProducto[0].titulo}
        imagenes={imagenesArray}
        imagenesMobile={imagenesMobileArray}
        descripcion={informacionProducto[0].descripcion}
        caruselEnDesktop="Tazas"
        caruselMobile=""
      />

      <div className="section-presupuesto-objetos" id="pedidoCompraList">
        <ObjetosPedidosCompraList titulo={informacionProducto[0].titulo} />
      </div>
    </div>
  );
};

export default Tazas;
