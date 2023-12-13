import IconoInstagram from "../../assets/icon/icono-instagram.svg";
import IconoFacebook from "../../assets/icon/icono-facebook.svg";
import IconoWhatsapp from "../../assets/icon/whatsapp.svg"
import logo from "../../assets/icon/icon.png";

const FooterList = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo-container">
          <img src={logo} alt="Logo" />
        </div>

        <div className="footer-menu-container">
          <div className="footer-menu-inicio">
            <h2>INICIO</h2>
            <p>Nuestros estampados</p>
            <p>Productos personalizados</p>
            <p>Envíanos tu consulta</p>
          </div>

          <div className="footer-menu-nosotros">
            <h2>NOSOTROS</h2>
            <p>Quienes somos</p>
            <p>Nuestros estampados</p>
            <p>Nuestros clientes</p>
            <div className="footer-menu-redes">
              <img src={IconoFacebook} alt="icono-facebook" />
              <img src={IconoInstagram} alt="icono-instagram" />
            </div>
          </div>

          <div className="footer-menu-productos">
            <h2>PRODUCTOS</h2>
            <p>Indumetaria escolar y egresados</p>
            <p>Indumentaria deportiva</p>
            <p>Indumentaria laboral</p>
            <p>Objetos personalizados</p>
          </div>

          <div className="footer-menu-ayuda">
            <h2>AYUDA</h2>
            <p>Preguntas frecuentes</p>
            <p>Términos y condiciones</p>
            <p>Cómo comprar</p>
          </div>
        </div>
        <div className="footer-direccion">
          <p>
            Fleming y Necochea. La Colonia, Junin, Mendoza. Teléfonos
            263-432-8998/ 263-4590565. Horario de atención: Lunes a Viernes de 9
            a 17:30, Sábados de 9 a 13.
          </p>
        </div>
      </div>

      <div className="footer-container-mobile">
        <div className="footer-logo-container">
          <img src={logo} alt="Logo" />
        </div>

        <div className="footer-menu-container">
          <h2>Contacto</h2>
          <p>Teléfonos 263-432-8998/ 263-4590565.</p>
          <p>beemendoza10@gmail.com</p>
          <h2>Dirección</h2>
          <p>Fleming y Necochea. La Colonia, Junin. Mendoza</p>
          <h2>Horario de atención</h2>
          <p>Lunes a Viernes de 9 a 17:30hs- Sábados de 9 a 13hs.</p>
          <h2>Social</h2>
          <div className="footer-menu-redes">
            <img src={IconoInstagram} alt="icono-instagram" />
            <img src={IconoWhatsapp} alt="icono-facebook" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterList;
