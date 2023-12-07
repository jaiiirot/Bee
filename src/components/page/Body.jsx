import { Outlet, Link } from "react-router-dom";
import Logo from "../image/Logo";

export default function Body() {
  return (
    <>
      <header className="header">
        <Logo className={"header__Logo"} />
        <nav className="header__nav">
          <ul className="header__Options">
            <li>
              <Link to="/Nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/Producto">Producto</Link>
            </li>
            <li>
              <Link to="/Ayuda">Ayuda</Link>
            </li>
            <li>
              <Link to="/Contacto">Contacto</Link>
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
