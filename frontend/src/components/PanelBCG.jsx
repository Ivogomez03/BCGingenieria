import { useEffect } from 'react';
import { useNavegacion } from '../hooks/navegacion'
import './Estilos/PanelBCG.css'
export const PanelBCG = () => {
    const { goToCrearProyecto, goToBuscarProyecto, goToApp } = useNavegacion();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            goToApp(); // Redirige al login si no hay token
        }
    }, [goToApp]);


    const cerrarSesion = () => {
        localStorage.removeItem('token'); // O sessionStorage.removeItem('token')
        goToApp(); // Redirigir a la pantalla de inicio de sesión
    };
    return (
        <div className='conteiner-panel-bcg'>
            <nav>
                <img src="./BCG2.png" alt="logo" />
                <button className='cerrar-sesion-bcg' onClick={cerrarSesion}>Cerrar sesión</button>
            </nav>
            <section className='seccion-panel-bcg'>
                <h1 className='titulo-bienvenido-bcg'>
                    Bienvenido, BCG. <br /> ¿Qué deseas hacer?

                </h1>
                <div className="acciones-bcg">
                    <button className='boton-bcg-buscar-proyectos' onClick={goToBuscarProyecto}>Buscar Proyectos</button>
                    <button className='boton-bcg-crear-proyectos' onClick={goToCrearProyecto}>Crear Proyectos</button>

                </div>
            </section>

        </div>
    )
}