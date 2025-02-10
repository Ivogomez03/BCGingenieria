import { useEffect } from 'react';
import { useNavegacion } from '../hooks/navegacion'
import './Estilos/PanelAdmin.css'
export const PanelAdministrador = () => {
    const { goToBuscarUsuario, goToApp } = useNavegacion();

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
        <div className='conteiner-panel-admin'>
            <nav>
                <img src="./BCG2.png" alt="logo" />
                <button className='cerrar-sesion-admin' onClick={cerrarSesion}>Cerrar sesión</button>
            </nav>
            <section className='seccion-panel-admin'>
                <h1 className='titulo-bienvenido-admin'>
                    Bienvenido, Admin. <br /> ¿Qué deseas hacer?

                </h1>
                <div className="acciones-administrador">
                    <button className='boton-administrador-buscar-usuario' onClick={goToBuscarUsuario}>Buscar Usuario</button>

                </div>
            </section>

        </div>
    )
}