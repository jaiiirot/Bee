import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/page/Contacto";
import Nosotros from "./components/page/Nosotros";
import "./style/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacto />} />
        <Route path="/about" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
