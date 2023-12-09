import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/page/Contacto";
import Nosotros from "./components/page/Nosotros";
import Body from "./components/page/Body";
import Home from "./components/page/Home";
import Ayuda from "./components/page/Ayuda";
import "./style/main.css";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="Contacto" element={<Contacto />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Producto" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/ayuda" element={<Ayuda />} />  
      </Routes>
    
  );
}

export default App;
