import { Outlet, Link } from "react-router-dom";
import Logo from "../image/Logo";
import Whatsapp from "../image/Whatsapp";

export default function Body() {
  return (
    <>
      <header className="header">
        <Logo className={"header__Logo"} />
        <nav className="header__nav">
          <ul className="header__Options">
            <li>
              <Link to="/">INICIO</Link>
            </li>
            <li>
              <Link to="/Nosotros">NOSOTROS</Link>
            </li>
            <li>
              <Link to="/Producto">PRODUCTOS</Link>
            </li>
            <li>
              <Link to="/Ayuda">AYUDA</Link>
            </li>
            <li>
              <Link to="/Contacto">CONTACTO</Link>
            </li>
            <li>
              <Link to="/www.whatsapp.com">
                <Whatsapp />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Bee® Todos los derechos reservados 2023</p>
      </footer>
    </>
  );
}
