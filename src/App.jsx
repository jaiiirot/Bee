import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/page/Contacto";
import Nosotros from "./components/page/Nosotros";
import Body from "./components/page/Body";
import Home from "./components/page/Home";
import "./style/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Contacto />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Producto" element={<Nosotros />} />
          <Route path="/Ayuda" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
