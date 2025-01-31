import './Estilos/PanelBCG.css'
export const PanelBCG = () => {
    return (
        <div className='conteiner-panel-bcg'>
            <nav>
                <img src="./BCG2.png" alt="logo" />
                <button className='cerrar-sesion-bcg'>Cerrar sesión</button>
            </nav>
            <section className='seccion-panel-bcg'>
                <h1 className='titulo-bienvenido-bcg'>
                    Bienvenido, BCG. <br /> ¿Qué deseas hacer?

                </h1>
                <div className="acciones-administrador">
                    <button className='boton-bcg-buscar-proyectos'>Buscar Proyectos</button>
                    <button className='boton-bcg-crear-proyectos'>Crear Proyectos</button>

                </div>
            </section>

        </div>
    )
}