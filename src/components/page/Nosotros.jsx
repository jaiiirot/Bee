import { Link } from "react-router-dom";
import Logo from "./../image/Logo";

export default function Nosotros() {
  return (
    <>
      <section className="options">
        <aside className="options-logo">
          <Logo />
        </aside>
        <aside className="options-welcome">
          <h2>¿QUIÉNES SOMOS?</h2>
        </aside>
        <aside className="options-option">
          <div>
            <Link to="/nuestros-estampados">
              <img
                src="https://improboutique.com/wp-content/uploads/2020/01/improboutique_serigrafia.jpg"
                alt=""
              />
              <h3>NUESTROS ESTAMPADOS</h3>
            </Link>
          </div>
          <div>
            <Link to="nuestros-clientes">
              <img
                src="https://ae01.alicdn.com/kf/H3a5cb126c4f44ed7a9d1e554ae95fc18M/Sudadera-con-capucha-de-manga-larga-para-mujer-su-ter-de-talla-grande-con-estampado-harajuku.jpg_640x640.jpg"
                alt=""
              />
              <h3>NUESTROS CLIENTES</h3>
            </Link>
          </div>
        </aside>
      </section>
      <section className="info">
        <aside>
          <h3>
            Bienvenidos a BEE: Un Legado Familiar y Empresarial de Creatividad
          </h3>
          <p>
            BEE es una empresa familiar que surgió en 2017 bajo el nombre "Alma
            Libre". Inicialmente, nos destacamos en bordados y costuras en una
            pequeña mercería. Sin embargo, el 2019 nos desafió con la llegada
            del COVID-19, llevándonos a cerrar puertas y reinventarnos. Bajo la
            influencia de la abeja, símbolo de esfuerzo colectivo, renacimos
            como BEE.
          </p>
        </aside>
        <aside>
          <h3>Un Esfuerzo Colectivo, una Marca Renovada </h3>
          <p>
            Frente a la adversidad, nuestra familia se unió aún más. Desde los
            hijos hasta los abuelos, cada miembro contribuyó al esfuerzo
            colectivo. Nos reinventamos con la confección de tapabocas, bordados
            y sublimación, utilizando máquinas de coser, planchas, impresoras y
            demostrando que la colaboración familiar puede resultar en una marca
            sólida y comprometida con la calidad.
          </p>
        </aside>
        <aside>
          <h3>Del Pedido a la Creación: Nuestro Proceso Creativo </h3>
          <p>
            Desde la recepción de un pedido hasta la confección final,
            mantenemos un estándar de excelencia. Cada máquina industrial que
            adquirimos representa nuestro compromiso con la innovación y la
            calidad, proporcionando una base sólida para nuestro crecimiento
            continuo. Creciendo Juntos como BEE Agradecemos a nuestros clientes
            por confiar en nosotros y los invitamos a compartir con nosotros la
            magia de cada creación.
          </p>
        </aside>
        <aside>
          <h3>Creciendo Juntos como BEE</h3>
          <p>
            Agredecemos a nuestros clientes por confiar en nosotros y los
            invitamos a compartir con nosotros la magia de cada creacion.
          </p>
        </aside>
      </section>
    </>
  );
}
