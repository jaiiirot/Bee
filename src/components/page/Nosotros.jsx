import HexagonosNuestrosEstampadosListContainer from "../seccionHexagonosNuestrosEstampados/HexagonosNuestrosEstampadosListContainer";
import { infoNosotros } from "./../../data/dicionario";
import Logo from "./../image/Logo";
export default function Nosotros() {
  return (
    <section className="nosotros-page background-hex">
      <section className="options">
        <aside className="options-logo">
          <Logo />
        </aside>
        <aside className="options-welcome">
          <h2 className="font-title">¿QUIÉNES SOMOS?</h2>
        </aside>
      </section>
      <section className="info">
        <aside className="info-welcome">
          <h2 className="font-title">¿QUIÉNES SOMOS?</h2>
        </aside>
        {infoNosotros.map((info, index) => (
          <aside className="cont-text" key={index}>
            <h3 className="cont-text-titulo">{info.titulo}</h3>
            <p className="cont-text-parrafo">{info.texto}</p>
          </aside>
        ))}
      </section>

      <aside className="nosotros-cont-hex">
        <HexagonosNuestrosEstampadosListContainer />
      </aside>

      <section className="info">
        <aside className="cont-text">
          <h3 className="cont-text-titulo">
            Personalización en Cada Punto y Tela
          </h3>
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
          <h3 className="cont-text-titulo">
            ¡Haz que tu ropa cuente tu historia con BEE, donde la creatividad y
            la calidad se encuentran en cada estampado!
          </h3>
        </aside>
      </section>
    </section>
  );
}
