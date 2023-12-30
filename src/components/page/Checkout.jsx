import React, { useContext } from "react";
import { ContextCheckoutInformacion } from "../context/ContextCheckout";
import Logo from "../image/Logo";
import Whatsapp from "../image/Whatsapp";
export default function Checkout() {
  const { informacion } = useContext(ContextCheckoutInformacion);
  console.log(informacion);
  return (
    <>
      <section className="checkout">
        <div className="checkout-info">
          <h4>¡Gracias por contactarte con Bee Mendoza!</h4>
          <p>
            Hemos recibido tu solicitud de presupuesto, y nuestro equipo está
            revisando los detalles de tu pedido. Por favor, aguarda, te
            responderemos a la mayor brevedad posible. Si tienes más preguntas o
            necesitas información adicional, no dudes en ponerte en contacto.
            Estamos aquí para ayudarte en cada paso.
          </p>
          <h3>Atentamente: El Equipo de Bee Mendoza.</h3>
          <div className="checkout-envio">
            <p>
              !Si el mensaje no se envio,tenga comunicacion directa con nosotros
              <br />
              asiendo clieck al logo de Whatsapp.¡
            </p>
            <span>
              <a
                href={`https://wa.me/5492634328998?text=nombre%3A%20${informacion.nombre}%0Acorreo%3A%20${informacion.correo}%0Atelefono%3A%20${informacion.telefono}%0Amensaje%3A%20%22${informacion.mensaje}%22`}
                target="_blank"
              >
                <Whatsapp />
              </a>
            </span>
          </div>
        </div>
        <div className="checkout-logo">
          <Logo />
          <h2>¡SOLUCITUD DE PRESUPUESTO ENVIADA!</h2>
        </div>
      </section>
    </>
  );
}
