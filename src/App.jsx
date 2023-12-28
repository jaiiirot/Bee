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
import RemerasChombas from "./components/page/RemerasChombas";
import SeccionEstampados from "./components/seccionEstampados/SeccionEstampados";
import BuzosCamperas from "./components/page/BuzosCamperas";
import EgresadosEgresaditos from "./components/page/EgresadosEgresaditos";
import Shorts from "./components/page/Shorts";
import Pantalones from "./components/page/Pantalones";
import Camisetas from "./components/page/Camisetas";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <ParticlesBackground />
      <BrowserRouter>
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
                <Route path="remeras-y-chombas" element={<RemerasChombas />} />
                <Route path="buzos-y-camperas" element={<BuzosCamperas />} />
                <Route
                  path="egresados-y-egresaditos"
                  element={<EgresadosEgresaditos />}
                />
                <Route path="shorts" element={<Shorts />} />
                <Route path="pantalones" element={<Pantalones />} />
                <Route path="camisetas" element={<Camisetas />} />
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
