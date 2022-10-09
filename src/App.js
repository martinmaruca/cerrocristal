import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from "./assets/logo.png";
import slider_01 from "./assets/slider-01.jpg";
import slider_02 from "./assets/slider-02.jpg";
import NavBar from './components/NavBar/NavBar';
import Hero from "./components/Hero/Hero";
import Slider from './components/Slider/Slider';
import Cabañas from './components/Cabañas/Cabañas';
import Servicios from './components/Servicios/Servicios';
import Nosotros from './components/Nosotos/Nosotros';
import Galeria from './components/Galeria/Galeria';
import Contacto from './components/Contacto/Contacto';
import Tarifas from './components/Tarifas/Tarifas';
import Footer from './components/Footer/Footer';
import Up from './components/Up/Up';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar imageSrc={logo} />
        <Routes>
          <Route index element={<>
            <Hero />
            <Slider
              imageSrc={slider_01}
              title={"Escapa de la Rutina!"}
              subtitle={
                `Descansa en Cabañas Cerro Cristal, te invitamos a conocer 
            Un lugar soñado.`
              }
            />
            <Slider
              imageSrc={slider_02}
              title={"Recuerdos para toda la vida!"}
              subtitle={"Las vacaciones soñadas están solo a un click de distancia."}
              flipped={true}
            />
            <Up />
            <Cabañas />
            <Servicios />
            <Nosotros />
            <Tarifas />
            <Galeria />
            <Contacto />
          </>} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </div>
  );
}

export default App;

