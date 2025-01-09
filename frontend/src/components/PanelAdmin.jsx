import './Estilos/PanelAdmin.css'
export const PanelAdministrador = () => {
    return (
        <div className='conteiner-panel-admin'>
            <nav>
                <h1>BRGing</h1>
                <button className='cerrar-sesion-admin'>Cerrar sesión</button>
            </nav>
            <h1 className='titulo-bienvenido-admin'>
                Bienvenido, Admin. <br /> ¿Qué deseas hacer?

            </h1>
            <div className="acciones-administrador">
                <button className='boton-registrar-usuario'>Registrar Usuario</button>
                <button className='boton-registrar-usuario'>Buscar Usuario</button>

            </div>
        </div>
    )
}