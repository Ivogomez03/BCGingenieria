import { useNavegacion } from '../hooks/navegacion'
import './Estilos/PanelAdmin.css'
export const PanelAdministrador = () => {
    const { goToBuscarUsuario } = useNavegacion();
    return (
        <div className='conteiner-panel-admin'>
            <nav>
                <img src="./BCG2.png" alt="logo" />
                <button className='cerrar-sesion-admin'>Cerrar sesión</button>
            </nav>
            <section className='seccion-panel-admin'>
                <h1 className='titulo-bienvenido-admin'>
                    Bienvenido, Admin. <br /> ¿Qué deseas hacer?

                </h1>
                <div className="acciones-administrador">
                    <button className='boton-registrar-usuario' onClick={goToBuscarUsuario}>Buscar Usuario</button>

                </div>
            </section>

        </div>
    )
}