import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/page/Contacto";
import Nosotros from "./components/page/Nosotros";
import Body from "./components/page/Body";
import Home from "./components/page/Home";
import Ayuda from "./components/page/Ayuda";
import PreguntasFrecuentes from "./components/page/PreguntasFrecuentes";
import Terminos from "./components/page/Terminos";
import ComoComprar from "./components/page/ComoComprar";
import FooterList from "./components/footer/FooterList";
import "./style/main.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/Preguntas-Frecuentes" element={<PreguntasFrecuentes />} />
        <Route path="/Términos-y-condiciones" element={<Terminos />} />
        <Route path="/Cómo-comprar" element={<ComoComprar />} />
        <Route path="Contacto" element={<Contacto />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Producto" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>

      <FooterList />
    </>
  );
}

export default App;
