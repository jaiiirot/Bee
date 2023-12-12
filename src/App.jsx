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
import "./main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Ayuda" element={<Ayuda />} />
          <Route
            path="/Ayuda/PreguntasFrecuentes"
            element={<PreguntasFrecuentes />}
          />
          <Route path="/Ayuda/Terminos" element={<Terminos />} />
          <Route path="/Ayuda/ComoComprar" element={<ComoComprar />} />

          <Route path="/Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
