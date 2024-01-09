import { Outlet } from "react-router-dom";
import NavbarMobile from "../navbar/NavbarMobile";
import NavbarDesktop from "../navbar/NavbarDesktop";
import FooterList from "../footer/FooterList";
let pages = ["Inicio", "Nosotros", "Productos", "Ayuda", "Contacto"];
export default function Body() {
  return (
    <>
      <NavbarDesktop pages={pages} />
      <NavbarMobile pages={pages} />
      <main style={{ marginTop: "56px" }}>
        <Outlet />
      </main>
      <FooterList />
    </>
  );
}
