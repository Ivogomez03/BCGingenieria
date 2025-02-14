import { Contacto } from './components/Contacto';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { useDesvanecer, useScroll } from './hooks/hooksContacto';
import { Footer } from './components/Footer';
import { PanelProyectos } from './components/PanelProyectos';
import { LeasingSolar } from './components/LeasingSolar';
import { useRef } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/Login'
import { Proyecto } from './components/Proyecto';
import { PanelAdministrador } from './components/PanelAdmin';
import ModificarUsuario from './components/ModificarUsuario';
import BuscarUsuarios from './components/BuscarUsuario';
import { RegistrarUsuario } from './components/RegistrarUsuario';
import { PanelBCG } from './components/PanelBCG';
import { CrearProyecto } from './components/CrearProyecto';
import BuscarProyecto from './components/BuscarProyecto';
import ModificarProyecto from './components/ModificarProyecto';
import { NavBar } from './components/NavBar';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AgregarInfoInversion } from './components/AgregarInfoInversion';
function App() {
  const contactoRef = useRef(null); // Referencia al componente Contacto
  const proyectosRef = useRef(null);

  const { mostrarContacto } = useScroll(contactoRef);
  const { shouldRender } = useDesvanecer({ mostrarContacto });


  console.log(shouldRender)
  return (
    <>
      <NavBar proyectosRef={proyectosRef} contactoRef={contactoRef} />
      <PaginaPrincipal />
      <PanelProyectos proyectosRef={proyectosRef} />
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
        <Route path="/proyecto" element={<ProtectedRoute requiredRole={"USUARIO_GENERAL"}><Proyecto /></ProtectedRoute>} />
        <Route path="/panelAdministrador" element={<ProtectedRoute requiredRole="ADMIN"><PanelAdministrador /></ProtectedRoute>} />
        <Route path="/admin/modificarUsuario" element={<ProtectedRoute requiredRole="ADMIN"><ModificarUsuario /></ProtectedRoute>} />
        <Route path="/admin/buscarUsuario" element={<ProtectedRoute requiredRole="ADMIN"><BuscarUsuarios /></ProtectedRoute>} />
        <Route path="/registrar" element={<RegistrarUsuario />} />
        <Route path="/panelBCG" element={<ProtectedRoute requiredRole="BCG"><PanelBCG /></ProtectedRoute>} />
        <Route path="/crearProyecto" element={<ProtectedRoute requiredRole="BCG"><CrearProyecto /></ProtectedRoute>} />
        <Route path="/proyecto/buscarProyecto" element={<ProtectedRoute requiredRole="BCG"><BuscarProyecto /></ProtectedRoute>} />
        <Route path="/proyecto/modificarProyecto" element={<ProtectedRoute requiredRole="BCG"><ModificarProyecto /></ProtectedRoute>} />
        <Route path="/proyecto/agregarInfoInversionProyecto" element={<ProtectedRoute requiredRole="BCG"><AgregarInfoInversion /></ProtectedRoute>} />

      </Routes>
    </Router>
  );
}
export default MainApp;