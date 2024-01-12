import { useParams } from "react-router-dom";
import { terminosYCondiciones } from "../../data/dicionario";
import { preguntasFrecuentes } from "../../data/dicionario";
import { pasosDeCompra } from "../../data/dicionario";
import { useEffect, useState } from "react";

export default function SeccionesDeAyuda() {
  const { seccionAyuda } = useParams();
  const [seccion, setSeccion] = useState([]);
  useEffect(() => {
    if (seccionAyuda === "preguntas-frecuentes") {
      setSeccion({
        titleseccion: "PREGUNTAS FRECUENTES",
        content: preguntasFrecuentes,
      });
    } else if (seccionAyuda === "terminos-condiciones") {
      setSeccion({
        titleseccion: "TÉRMINOS Y CONDICIONES",
        content: terminosYCondiciones,
      });
    } else if (seccionAyuda === "como-comprar") {
      setSeccion({ titleseccion: "¿COMO COMPRAR?", content: pasosDeCompra });
    }
  }, []);

  return (
    <div className="ayuda-section-container background-hex">
      <div className="titulo-container">
        <h1 className="font-title">{seccion.titleseccion}</h1>
      </div>
      <ul className="contenido-texto-container">
        {seccion?.content?.map((paso) => {
          if (seccionAyuda === "como-comprar" && paso.id === 3) {
            return (
              <li key={paso.id} className="cont-text">
                <h2 className="cont-text-titulo">{paso.titulo}</h2>
                <p className="cont-text-parrafo">{paso.contenido}</p>
                <ul className="cont-text-ul">
                  {paso.subcontenido.map((subPaso, index) => {
                    return (
                      <li key={index} className="cont-text-ul-li">
                        {subPaso.titulo}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          }
          return (
            <li key={paso.id} className="cont-text">
              <h2 className="cont-text-titulo">{paso.titulo}</h2>
              <p className="cont-text-parrafo">{paso.contenido}</p>
            </li>
          );
        })}
        {seccionAyuda === "terminos-condiciones" ? (
          <li className="consultas-adicionales-texto">
            <h2 style={{ fontWeight: "100" }}>
              Para consultas adicionales sobre estos términos y condiciones,
              contáctanos a través de nuestro formulario de contacto.
            </h2>
            <br />
          </li>
        ) : (
          <></>
        )}
        <li className="consultas-adicionales-texto">
          <h2>¡Gracias por elegir Bee Mendoza!</h2>
        </li>
      </ul>
    </div>
  );
}
