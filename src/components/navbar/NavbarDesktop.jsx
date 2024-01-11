import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../image/Logo";
import Whatsapp from "../image/Whatsapp";

export default function NavbarDesktop({ pages }) {
  const [page, setPage] = useState(pages);
  const toWhatsapp = () => {
    window.open("https://wa.me/5492634328998", "_blank");
  };

  return (
    <header className="header">
      <Logo className={"header-logo"} type />
      <nav className="header-nav">
        <ul className="header-options">
          {page.map((p, e) => {
            let url = p;
            p === "Inicio" ? (url = "/") : (url = `/${url.toLowerCase()}`);
            return (
              <li key={e}>
                <NavLink
                  className={({ isActive }) => (isActive ? "linkActive" : "")}
                  to={url}
                >
                  {p.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
          <li onClick={toWhatsapp} className="header-whatsapp">
            <Whatsapp />
          </li>
        </ul>
      </nav>
    </header>
  );
}
