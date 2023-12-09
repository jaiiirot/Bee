import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/page/Contacto";
import Nosotros from "./components/page/Nosotros";
import Body from "./components/page/Body";
import "./main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/producto" element={<Nosotros />} />
          <Route path="/ayuda" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
