import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Estilos/NavBar.css";
import { useNavegacion } from "../hooks/navegacion";

export const NavBar = ({ proyectosRef, contactoRef, sobreNosotrosRef }) => {
    const { goToLogin, goToRegistrarUsuario, goToApp } = useNavegacion();
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split(".")[1])); // Decodifica el JWT
                setUsuario({
                    nombre: payload.sub, // El nombre de usuario está en "sub"
                    rol: payload.role?.[0]?.authority, // Extrae el rol
                });
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                setUsuario(null);
            }
        }
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem("token");
        setUsuario(null);
        goToLogin();
    };

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav>

            <img src="/logo32.png" className="imagen-logo" alt="Logo BCG Ingeniería" onClick={goToApp} />

            <div className="nav-links">
                <button onClick={() => scrollToSection(proyectosRef)}>
                    Proyectos <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                </button>
                <button onClick={() => scrollToSection(contactoRef)}>
                    Contacto <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                </button>
                <button onClick={() => scrollToSection(sobreNosotrosRef)}>
                    Sobre Nosotros <KeyboardArrowDownIcon className="iconos-flecha-abajo" />
                </button>
            </div>

            <div className="auth-links">
                {usuario ? (
                    <div className="account-navbar">
                        <span className="usuario-nombre" style={{ color: 'white' }}>{usuario.nombre}</span>
                        <AccountCircleIcon className="iconos-flecha-abajo" style={{ color: 'white' }} />
                        <button className="iniciar-sesion" onClick={cerrarSesion}>Cerrar sesión</button>
                    </div>
                ) : (
                    <>
                        <button className="registrarse" onClick={goToRegistrarUsuario}>Registrarse</button>
                        <button className="iniciar-sesion" onClick={goToLogin}>Iniciar sesión</button>
                    </>
                )}
            </div>
        </nav>
    );
};
