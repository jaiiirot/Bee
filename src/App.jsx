import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/page/Body";
import Contacto from "./components/page/Contacto";
import Nosotros from "./components/page/Nosotros";
import Home from "./components/page/Home";
import Ayuda from "./components/page/Ayuda";
import PreguntasFrecuentes from "./components/page/PreguntasFrecuentes";
import Terminos from "./components/page/Terminos";
import ComoComprar from "./components/page/ComoComprar";
import Productos from "./components/page/Productos";
import ParticlesBackground from "./components/config/ParticlesBackground";
import "./main.css";
import Section from "./components/productSection/Section";
import SectionElement from "./components/productSection/SectionElement";
import RemerasChombas from "./components/page/indumentaria-escolar-egresados/RemerasChombas";
import SeccionEstampados from "./components/seccionEstampados/SeccionEstampados";
import BuzosCamperas from "./components/page/indumentaria-escolar-egresados/BuzosCamperas";
import EgresadosEgresaditos from "./components/page/indumentaria-escolar-egresados/EgresadosEgresaditos";
import Shorts from "./components/page/indumentaria-escolar-egresados/Shorts";
import Pantalones from "./components/page/indumentaria-escolar-egresados/Pantalones";
import Camisetas from "./components/page/indumentaria-deportiva/Camisetas";
import ConjuntosDeVerano from "./components/page/indumentaria-deportiva/ConjuntosDeVerano";
import ConjuntosDeInvierno from "./components/page/indumentaria-deportiva/ConjuntosDeInvierno";
import ShortsDeportivos from "./components/page/indumentaria-deportiva/ShortsDeportivos";
import BuzosCamperasDeportivas from "./components/page/indumentaria-deportiva/BuzosCamperasDeportivas";
import PantalonesDeportivos from "./components/page/indumentaria-deportiva/PantalonesDeportivos";
import ConjuntosPantalonesRemeras from "./components/page/indumentaria-laboral/ConjuntosPantalonesRemeras";
import RemerasChombasLaboral from "./components/page/indumentaria-laboral/RemerasChombasLaboral";
import ChaquetasAmbosGuardapolvos from "./components/page/indumentaria-laboral/ChaquetasAmbosGuardapolvos";
import Delantales from "./components/page/indumentaria-laboral/Delantales";
import Llaveros from "./components/page/objetos/Llaveros";
import BanderasFlyBanners from "./components/page/objetos/BanderasFlyBanners";
import Gorros from "./components/page/objetos/Gorros";
import Pins from "./components/page/objetos/Pins";
import Tazas from "./components/page/objetos/Tazas";
import Lapiceras from "./components/page/objetos/Lapiceras";
import Logos from "./components/page/objetos/Logos";
import Checkout from "./components/page/Checkout";
import ContextCheckout from "./components/context/ContextCheckout";

function App() {
  return (
    <>
      <ParticlesBackground />
      <BrowserRouter>
        <ContextCheckout>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<Home />} />
              <Route path="/estampados" element={<SeccionEstampados />} />
              <Route path="nosotros/" element={<Nosotros />} />
              <Route path="productos/">
                <Route index element={<Productos />} />
                <Route path=":section/">
                  <Route index element={<Section />} />
                  <Route path=":element/" element={<SectionElement />} />
                  <Route
                    path="remeras-y-chombas"
                    element={<RemerasChombas />}
                  />
                  <Route path="buzos-y-camperas" element={<BuzosCamperas />} />
                  <Route
                    path="egresados-y-egresaditos"
                    element={<EgresadosEgresaditos />}
                  />
                  <Route path="shorts" element={<Shorts />} />
                  <Route path="pantalones" element={<Pantalones />} />
                  <Route path="camisetas" element={<Camisetas />} />
                  <Route
                    path="conjuntos-de-verano"
                    element={<ConjuntosDeVerano />}
                  />
                  <Route
                    path="conjuntos-de-invierno"
                    element={<ConjuntosDeInvierno />}
                  />
                  <Route
                    path="shorts-deportivos"
                    element={<ShortsDeportivos />}
                  />
                  <Route
                    path="buzos-y-camperas-deportivas"
                    element={<BuzosCamperasDeportivas />}
                  />
                  <Route
                    path="pantalones-deportivos"
                    element={<PantalonesDeportivos />}
                  />
                  <Route
                    path="conjuntos-pantalones-y-remeras"
                    element={<ConjuntosPantalonesRemeras />}
                  />
                  <Route
                    path="laboral-remeras-y-chombas"
                    element={<RemerasChombasLaboral />}
                  />
                  <Route
                    path="chaquetas-ambos-y-guardapolvos"
                    element={<ChaquetasAmbosGuardapolvos />}
                  />
                  <Route path="delantales" element={<Delantales />} />
                  <Route path="llaveros" element={<Llaveros />} />
                  <Route
                    path="banderas-y-fly-banners"
                    element={<BanderasFlyBanners />}
                  />
                  <Route path="gorros" element={<Gorros />} />
                  <Route path="pins" element={<Pins />} />
                  <Route path="tazas" element={<Tazas />} />
                  <Route path="lapiceras" element={<Lapiceras />} />
                  <Route path="logos" element={<Logos />} />
                </Route>
              </Route>
              <Route path="ayuda/">
                <Route index element={<Ayuda />} />
                <Route
                  path="preguntas-frecuentes/"
                  element={<PreguntasFrecuentes />}
                />
                <Route path="terminos-condiciones/" element={<Terminos />} />
                <Route path="como-comprar/" element={<ComoComprar />} />
              </Route>
              <Route path="contacto/" element={<Contacto />} />
              <Route path="checkout/" element={<Checkout />} />
              <Route path="*" element={<h1>404</h1>} />
            </Route>
          </Routes>
        </ContextCheckout>
      </BrowserRouter>
    </>
  );
}

export default App;
