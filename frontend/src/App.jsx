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
import { PanelAdministrador } from './components/Admin/PanelAdmin';
import ModificarUsuario from './components/Usuario/ModificarUsuario';
import BuscarUsuarios from './components/Usuario/BuscarUsuario';
import { RegistrarUsuario } from './components/Usuario/RegistrarUsuario';
import { PanelBCG } from './components/PanelBCG';
import { NavBar } from './components/NavBar';
import { ProtectedRoute } from './components/ProtectedRoute';
import { MainPage } from './components/Institucional/MainPage';
import { SobreNosotros } from './components/SobreNosotros';
import { MasInfoMariaTeresa } from './components/MasInfoMariaTeresa';

function ComunidadesSolares() {
  const contactoRef = useRef(null);
  const proyectosRef = useRef(null);
  const sobreNosotrosRef = useRef(null);
  const { mostrarContacto } = useScroll(contactoRef);
  const { shouldRender } = useDesvanecer({ mostrarContacto });

  return (
    <>
      <NavBar proyectosRef={proyectosRef} contactoRef={contactoRef} sobreNosotrosRef={sobreNosotrosRef} />
      <PaginaPrincipal />
      <PanelProyectos proyectosRef={proyectosRef} />
      <LeasingSolar />
      <SobreNosotros sobreNosotrosRef={sobreNosotrosRef} />

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
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PaginaPrincipal />} />
        <Route path="/comunidadesSolares" element={<ComunidadesSolares />} />
        <Route path="/proyecto" element={<ProtectedRoute requiredRole={"USUARIO_GENERAL"}><Proyecto /></ProtectedRoute>} />
        <Route path="/panelAdministrador" element={<ProtectedRoute requiredRole="ADMIN"><PanelAdministrador /></ProtectedRoute>} />
        <Route path="/admin/modificarUsuario" element={<ProtectedRoute requiredRole="ADMIN"><ModificarUsuario /></ProtectedRoute>} />
        <Route path="/admin/buscarUsuario" element={<ProtectedRoute requiredRole="ADMIN"><BuscarUsuarios /></ProtectedRoute>} />
        <Route path="/registrar" element={<RegistrarUsuario />} />
        <Route path="/panelBCG" element={<ProtectedRoute requiredRole="BCG"><PanelBCG /></ProtectedRoute>} />
        <Route path="/proyecto/MasInfoMariaTeresa" element={<ProtectedRoute requiredRole="USUARIO_GENERAL"><MasInfoMariaTeresa /></ProtectedRoute>} />

      </Routes>
    </Router>
  );
}
export default MainApp;