import React from "react";
import HexagonosNuestrosEstampadosList from "./HexagonosNuestrosEstampadosList";

const HexagonosNuestrosEstampadosListContainer = () => {
  const dataSublimacionYTermovinilo = [
    {
      imgFondo: "nuestros-estampados-sublimacion.jpg",
      titulo: "SUBLIMACIÓN",
      claseHexagono: "hexagono-con-imagen",
      message:
        'Proceso químico de tinta de sublimación en tela con al menos un 70% de poliéster. \n Ideal para telas blancas o colores claros. En colores más oscuros, se sublima en negro.\n Muy duradero y resistente a lavados y altas temperaturas.\n Ofrecemos "Full Print", sublimación en la totalidad o mayor parte de la prenda.',
    },
    {
      imgFondo: "nuestros-estampados-termovinilo.jpg",
      titulo: "TERMOVINILO",
      claseHexagono: "hexagono-con-imagen",
      message:
        "Material en planchas por metro lineal, cortado y aplicado con temperatura, tiempo y presión específica.\n Adecuado para cualquier tipo de tela, especialmente eficaz en algodones.\n Diseños vectoriales; durabilidad dependiente del cuidado.",
    },
  ];

  const dataDtf_titulo_TermoImpreso = [
    {
      imgFondo: "nuestros-estampados-dtf.jpg",
      titulo: "D.T.F.",
      claseHexagono: "hexagono-con-imagen",
      shouldAnimate: true,
      message:
        "Impresión directa sobre film para un transfer digital más ligero.\n Adecuado para cualquier tipo de tela; ideal para prendas de poco uso.\n Menos duradero en comparación con otras técnicas.",
    },
    {
      imgFondo: "",
      titulo: "NUESTROS ESTAMPADOS",
      claseHexagono: "hexagono-sin-imagen",
      message: "",
      shouldAnimate: false,
    },
    {
      imgFondo: "nuestros-estampados-termovinilo-impreso.jpg",
      titulo: "TERMOVINILO IMPRESO",
      claseHexagono: "hexagono-con-imagen",
      shouldAnimate: true,
      message:
        "Similar al termovinilo, pero se imprime primero con tinta especial y luego se aplica.\n Versátil, se puede aplicar en cualquier tipo de tela.\n Puede decolorarse con el tiempo; durabilidad sujeta al cuidado.",
    },
  ];

  const dataSerigrafiaYBordado = [
    {
      imgFondo: "nuestros-estampados-serigrafia.jpg",
      titulo: "SERIGRAFÍA",
      claseHexagono: "hexagono-con-imagen",
      message:
        "Técnica realizada en serie mediante matriz y estampado con tinta y presión específica. \n Apta para todo tipo de telas; mínimo de 5 unidades del mismo diseño. \n Duradero, con posibles pequeños cuarteos que no afectan el diseño.",
    },
    {
      imgFondo: "nuestros-estampados-bordado.jpg",
      titulo: "BORDADO",
      claseHexagono: "hexagono-con-imagen",
      message:
        "Técnica realizada mediante bordadora con matriz digitalizada. \n Apta para todo tipo de telas; diseño vectorial. \n Muy duradero; costo basado en cantidad de puntadas y cambios de colores.",
    },
  ];

  return (
    <HexagonosNuestrosEstampadosList
      dataSublimacionYTermovinilo={dataSublimacionYTermovinilo}
      dataDtf_titulo_TermoImpreso={dataDtf_titulo_TermoImpreso}
      dataSerigrafiaYBordado={dataSerigrafiaYBordado}
    />
  );
};

export default HexagonosNuestrosEstampadosListContainer;
