import './Estilos/PaginaPrincipal.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const PaginaPrincipal = () => {
    return (<>
        <div className="background-circles">
            <div className="circle center"></div>
            <div className="circle top-left"></div>
            <div className="circle top-right"></div>
            <div className="circle bottom-left"></div>
            <div className="circle bottom-right"></div>
        </div>
        <div className="container">
            <nav>
                <h1 className='bcg-icon'>BCGing</h1>
                <div className='nav-links'>
                    <button>
                        Proyectos
                        <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                    </button>
                    <button>
                        Servicios <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                    </button>
                    <button>
                        Formas de contrato  <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                    </button>
                    <button>
                        Contacto <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                    </button>
                    <button>
                        Historia <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                    </button>
                </div>
                <div className='auth-links'>
                    <button className='registrarse'>Registrarse</button>
                    <button className='iniciar-sesion'> Iniciar sesión</button>
                </div>
            </nav>
            <section className='seccion-medio'>
                <h1>El futuro de la energía<br />está en tus manos</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptas doloribus vel quaerat minus saepe iure facere laborum! Illo, quod laborum earum sapiente minima mollitia. Quidem provident dicta maiores explicabo!</p>
                <div className='botones'>
                    <button className='iniciate'>Iniciate</button>
                    <button className='explorar'>Explorar plataforma</button>
                </div>

            </section>

        </div>
    </>
    )
}