import { Outlet } from "react-router-dom";
import NavbarMobile from "../Navbar/NavbarMobile";
import NavbarDesktop from "../Navbar/NavbarDesktop";

let pages = ["Inicio", "Nosotros", "Productos", "Ayuda", "Contacto"];
export default function Body() {
  return (
    <>
      <NavbarDesktop pages={pages} />
      <NavbarMobile pages={pages} />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <p>Bee® Todos los derechos reservados 2023</p>
      </footer>
    </>
  );
}
