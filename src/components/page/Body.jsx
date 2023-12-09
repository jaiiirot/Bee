import { Outlet, Link } from "react-router-dom";
import Logo from "../image/Logo";
import Whatsapp from "../image/Whatsapp";
import NavbarMobile from "../utils/NavbarMobile";

export default function Body() {
  return (
    <>
      <header className="header">
        <Logo className={"header-logo"} />
        <nav className="header-nav">
          <ul className="header-options">
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <Link to="/nosotros">NOSOTROS</Link>
            </li>
            <li>
              <Link to="/producto">PRODUCTOS</Link>
            </li>
            <li>
              <Link to="/ayuda">AYUDA</Link>
            </li>
            <li>
              <Link to="/contacto">CONTACTO</Link>
            </li>
            <li>
              <Link to="/www.whatsapp.com">
                <Whatsapp />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <NavbarMobile />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Bee® Todos los derechos reservados 2023</p>
      </footer>
    </>
  );
}
