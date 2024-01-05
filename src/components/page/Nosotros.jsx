import HexagonosNuestrosEstampadosListContainer from "../seccionHexagonosNuestrosEstampados/HexagonosNuestrosEstampadosListContainer";
import Logo from "./../image/Logo";
import Texto from "./../texto/Texto";

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
      </section>
      <section className="info">
        <aside className="info-welcome">
          <h2>¿QUIÉNES SOMOS?</h2>
        </aside>
        {INFO.map((info, index) => (
          <Texto key={index} titulo={info.titulo} texto={info.texto} />
        ))}
      </section>
      {/* <section className="section-hex">
        <section className="nuestros-estampados-section">
          <HexagonosNuestrosEstampadosListContainer />
        </section>

        <section className="mobile-nuestros-estampados-section">
          <HexagonosNuestrosEstampadosListContainer />
        </section>
      </section> */}

      <HexagonosNuestrosEstampadosListContainer />

      <section className="info">
        <aside className="cont-text">
          <h3 className="cont-text-titulo">
            Personalización en Cada Punto y Tela
          </h3>
          <br />
          <p className="cont-text-parrafo">
            En BEE, nos especializamos en la creación de productos textiles
            totalmente personalizados. Desde indumentaria laboral y uniformes
            escolares hasta prendas deportivas y de egresados, abarcamos un
            amplio espectro de necesidades. Nuestra versatilidad nos permite
            adaptarnos a las tendencias y temporadas, creando desde
            merchandising hasta sets escolares y conjuntos deportivos.
            <br />
            En BEE, cada prenda cuenta una historia única, tejida con la
            dedicación y calidad que nos caracterizan. Descubre la
            personalización en cada detalle.
          </p>
          <br />
          <h3 className="cont-text-titulo">
            ¡Haz que tu ropa cuente tu historia con BEE, donde la creatividad y
            la calidad se encuentran en cada estampado!
          </h3>
        </aside>
      </section>
    </>
  );
}
