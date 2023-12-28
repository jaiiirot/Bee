import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Whatsapp from "../image/Whatsapp";
import Logo from "../image/Logo";

export default function NavbarMobile({ pages }) {
  const [page, setPage] = useState(pages);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toWhatsapp = () => {
    window.open("https://wa.me/5492634328998", "_blank");
  };
  return (
    <header className="header-movil">
      <nav className="header-movil-nav">
        <Button variant="black" onClick={handleShow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </Button>
        <Logo />
        <span onClick={toWhatsapp}>
          <Whatsapp />
        </span>
      </nav>

      <Offcanvas
        show={show}
        placement="end"
        onHide={handleClose}
        style={{ height: "300px", width: "200px" }}
        className="header-movil-cont"
      >
        <Offcanvas.Header closeButton style={{ padding: " .2rem 0.5rem" }}>
          <Offcanvas.Title>
            <ul className="header-movil-logo">
              <Logo />
            </ul>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="header-movil-options">
            {page.map((p, e) => {
              let url = p;
              p === "Inicio" ? (url = "/") : (url = `/${url.toLowerCase()}`);
              return (
                <li key={e}>
                  <Link to={url}>{p}</Link>
                </li>
              );
            })}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
