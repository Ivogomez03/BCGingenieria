import { Contacto } from './components/Contacto';
import { PaginaPrincipal } from './components/PaginaPrincipal';
import { BackGroundCircles } from './components/BackGroundCircles';
import { useDesvanecer, useScroll } from './hooks/hooksContacto';
import { Footer } from './components/Footer';
import { PanelProyectos } from './components/PanelProyectos';
import { useRef } from 'react';

function App() {
  const contactoRef = useRef(null); // Referencia al componente Contacto
  const proyectosRef = useRef(null);
  const { mostrarContacto } = useScroll(contactoRef);
  const { shouldRender } = useDesvanecer({ mostrarContacto });


  console.log(shouldRender)
  return (
    <>
      <BackGroundCircles />
      <PaginaPrincipal />
      <PanelProyectos />


      <div style={{ width: '100%', height: '100vh' }} ref={contactoRef}>
        {shouldRender && <Contacto seOculta={!mostrarContacto} />}
      </div>
      <Footer />
    </>
  );
}

export default App; 