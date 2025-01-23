import { Contacto } from './components/Contacto';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { BackGroundCircles } from './components/BackGroundCircles';
import { useDesvanecer, useScroll } from './hooks/hooksContacto';
import { Footer } from './components/Footer';
import { PanelProyectos } from './components/PanelProyectos';
import { LeasingSolar } from './components/LeasingSolar';
import { useRef } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Login } from './components/Login'
import { Proyecto } from './components/Proyecto';
import { PanelAdministrador } from './components/PanelAdmin';
import ModificarUsuario from './components/ModificarUsuario';
import BuscarUsuarios from './components/BuscarUsuario';
import { RegistrarUsuario } from './components/RegistrarUsuario';
function App() {
  const contactoRef = useRef(null); // Referencia al componente Contacto

  const { mostrarContacto } = useScroll(contactoRef);
  const { shouldRender } = useDesvanecer({ mostrarContacto });


  console.log(shouldRender)
  return (
    <>
      <BackGroundCircles />
      <PaginaPrincipal />
      <PanelProyectos />
      <LeasingSolar />


      <div style={{ width: '100%', height: '100vh' }} ref={contactoRef}>
        {shouldRender && <Contacto seOculta={!mostrarContacto} />}
      </div>
      <Footer />
    </>
  );
}
const MainApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PaginaPrincipal />} />
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="/panelAdministrador" element={<PanelAdministrador />} />
        <Route path="/admin/modificarUsuario" element={<ModificarUsuario />} />
        <Route path="/admin/buscarUsuario" element={<BuscarUsuarios />} />
        <Route path="/registrar" element={<RegistrarUsuario />} />

      </Routes>
    </Router>
  );
}
export default MainApp;