import IconoInstagram from "../../assets/icon/icono-instagram.svg";
import IconoFacebook from "../../assets/icon/icono-facebook.svg";
import IconoWhatsapp from "../../assets/icon/whatsapp.svg";
import logo from "../../assets/icon/icon.png";
import { Link } from "react-router-dom";

const NAVEGATION = [
  {
    clase: "footer-menu-inicio",
    title: "INICIO",
    pages: [
      {
        href: "/estampados",
        name: "Nuestros estampados",
      },
      {
        href: "/productos",
        name: "Productos personalizados",
      },
      {
        href: "/contacto",
        name: "Envíanos tu consulta",
      },
    ],
  },
  {
    clase: "footer-menu-nosotros",
    title: "NOSOTROS",
    pages: [
      {
        href: "/nosotros",
        name: "Quienes somos",
      },
      {
        href: "/estampados",
        name: "Nuestros estampados",
      },
    ],
  },
  {
    clase: "footer-menu-productos",
    title: "PRODUCTOS",
    pages: [
      {
        href: "/productos/escolar-egresados",
        name: "Indumetaria escolar y egresados",
      },
      {
        href: "/productos/deportiva",
        name: "Indumentaria deportiva",
      },
      {
        href: "/productos/laboral",
        name: "Indumentaria laboral",
      },
      {
        href: "/productos/objetos-personalizados",
        name: "Objetos personalizados",
      },
    ],
  },
  {
    clase: "footer-menu-ayuda",
    title: "AYUDA",
    pages: [
      {
        href: "/ayuda/preguntas-frecuentes",
        name: "Preguntas frecuentes",
      },
      {
        href: "/ayuda/terminos-condiciones",
        name: "Términos y condiciones",
      },
      {
        href: "/ayuda/como-comprar",
        name: "Cómo comprar",
      },
    ],
  },
];

const FooterList = () => {
  const inInstagram = () => {
    window.open("https://www.instagram.com/_beemendoza/", "_blank");
  };
  const inFacebook = () => {
    window.open("https://www.facebook.com/_beemendoza/", "_blank");
  };
  return (
    <>
      <div className="footer-container">
        <div className="footer-logo-container">
          <img src={logo} alt="Logo" />
        </div>

        <div className="footer-menu-container">
          {NAVEGATION.map((option, index) => {
            if (option.title === "NOSOTROS") {
              return (
                <div className={option.clase} key={index * Math.random()}>
                  <h2>{option.title}</h2>
                  {option.pages.map((page, index) => {
                    return (
                      <Link to={page.href} key={index * Math.random()}>
                        {page.name}
                      </Link>
                    );
                  })}
                  <div className="footer-menu-redes">
                    <img
                      onClick={inFacebook}
                      src={IconoFacebook}
                      alt="icono-facebook"
                    />
                    <img
                      onClick={inInstagram}
                      src={IconoInstagram}
                      alt="icono-instagram"
                    />
                  </div>
                </div>
              );
            }
            return (
              <div className={option.clase} key={index * Math.random() * 110}>
                <h2>{option.title}</h2>
                {option.pages.map((page, index) => {
                  return (
                    <Link to={page.href} key={index + 100 * Math.random()}>
                      {page.name}
                    </Link>
                  );
                })}
              </div>
            );
          })}
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
            <img
              onClick={inInstagram}
              src={IconoInstagram}
              alt="icono-instagram"
            />
            <img
              onClick={inFacebook}
              src={IconoWhatsapp}
              alt="icono-facebook"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterList;
