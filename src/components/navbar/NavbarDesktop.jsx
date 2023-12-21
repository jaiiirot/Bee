import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../image/Logo";
import Whatsapp from "../image/Whatsapp";

export default function NavbarDesktop({ pages }) {
  const [page, setPage] = useState(pages);
  return (
    <header className="header">
      <Logo className={"header-logo"} />
      <nav className="header-nav">
        <ul className="header-options">
          {page.map((p, e) => {
            let url = p;
            p === "Inicio" ? (url = "/") : (url = `/${url.toLowerCase()}`);
            return (
              <li key={e}>
                <Link to={url}>{p}</Link>
              </li>
            );
          })}
          <li>
            <Link to="/www.whatsapp.com">
              <Whatsapp />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
