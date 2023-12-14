import { Link } from "react-router-dom";
import Logo from "./../image/Logo";
import Texto from "./../texto/Texto";
import nuestrosEstampados from "./../../assets/img/nuestros-estampados-termovinilo.jpg";
import nuestrosClientes from "./../../assets/img/nuestros-clientes.jpg";
const INFO = [
  {
    titulo:
      "Bienvenidos a BEE: Un Legado Familiar y Empresarial de Creatividad",
    texto: `BEE es una empresa familiar que surgió en 2017 bajo el nombre "Alma
Libre". Inicialmente, nos destacamos en bordados y costuras en una
pequeña mercería. Sin embargo, el 2019 nos desafió con la llegada
del COVID-19, llevándonos a cerrar puertas y reinventarnos. Bajo la
influencia de la abeja, símbolo de esfuerzo colectivo, renacimos
como BEE.`,
  },
  {
    titulo: "Un Esfuerzo Colectivo, una Marca Renovada",
    texto: `Frente a la adversidad, nuestra familia se unió aún más. Desde los
hijos hasta los abuelos, cada miembro contribuyó al esfuerzo
colectivo. Nos reinventamos con la confección de tapabocas, bordados
y sublimación, utilizando máquinas de coser, planchas, impresoras y
demostrando que la colaboración familiar puede resultar en una marca
sólida y comprometida con la calidad.`,
  },
  {
    titulo: "Del Pedido a la Creación: Nuestro Proceso Creativo",
    texto: `Desde la recepción de un pedido hasta la confección final,
mantenemos un estándar de excelencia. Cada máquina industrial que
adquirimos representa nuestro compromiso con la innovación y la
calidad, proporcionando una base sólida para nuestro crecimiento
continuo. Creciendo Juntos como BEE Agradecemos a nuestros clientes
por confiar en nosotros y los invitamos a compartir con nosotros la
magia de cada creación.`,
  },
  {
    titulo: "Creciendo Juntos como BEE",
    texto: `Agredecemos a nuestros clientes por confiar en nosotros y los
    invitamos a compartir con nosotros la magia de cada creacion.`,
  },
];

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
          <div className="options-info">
            <Link to="/nuestros-estampados">
              <img src={nuestrosEstampados} alt="" />
              <h3>NUESTROS ESTAMPADOS</h3>
            </Link>
          </div>
          <div className="options-info">
            <Link to="nuestros-clientes">
              <img src={nuestrosClientes} alt="" />
              <h3>NUESTROS CLIENTES</h3>
            </Link>
          </div>
        </aside>
      </section>
      <section className="info">
        <aside className="info-welcome">
          <h2>¿QUIÉNES SOMOS?</h2>
        </aside>
        {INFO.map((info, index) => (
          <Texto key={index} titulo={info.titulo} texto={info.texto} />
        ))}
      </section>
    </>
  );
}
