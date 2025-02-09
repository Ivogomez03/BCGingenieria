import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Estilos/NavBar.css'
import { useNavegacion } from '../hooks/navegacion';

export const NavBar = ({ proyectosRef, contactoRef }) => {

    const { goToLogin, goToRegistrarUsuario, goToApp } = useNavegacion();
    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav>

            <img src="/BCG2.png" className="imagen-logo" alt="Logo BCG ingenieria" onClick={goToApp} />

            <div className='nav-links'>
                <button onClick={() => scrollToSection(proyectosRef)}>
                    Proyectos
                    <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                </button>
                <button>
                    Servicios <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                </button>
                <button>
                    Formas de contrato  <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                </button>
                <button onClick={() => scrollToSection(contactoRef)}>
                    Contacto <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                </button>
                <button>
                    Historia <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                </button>
            </div>

            <div className='auth-links'>

                <button className='registrarse' onClick={goToRegistrarUsuario}>Registrarse</button>

                <button className='iniciar-sesion' onClick={goToLogin}> Iniciar sesión</button>

            </div>

        </nav>
    )
}