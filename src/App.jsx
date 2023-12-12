import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/page/Body";
import Contacto from "./components/page/Contacto";
import Nosotros from "./components/page/Nosotros";
import Home from "./components/page/Home";
import Ayuda from "./components/page/Ayuda";
import PreguntasFrecuentes from "./components/page/PreguntasFrecuentes";
import Terminos from "./components/page/Terminos";
import ComoComprar from "./components/page/ComoComprar";
// import FooterList from "./components/footer/FooterList";
import "./style/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Producto" element={<Productos />} />
          <Route path="/Ayuda" element={<Body />}>
            <Route index element={<Ayuda />} />
            <Route
              path="/PreguntasFrecuentes"
              element={<PreguntasFrecuentes />}
            />
            <Route path="/Terminos" element={<Terminos />} />
            <Route path="/ComoComprar" element={<ComoComprar />} />
          </Route>
          <Route path="/Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
