import { useState } from 'react';
import { useNavegacion } from '../hooks/navegacion';
import './Estilos/Login.css';
import { NavBar } from './NavBar';

export const Login = () => {
    const { goToApp, goToPanelAdmin, goToPanelBCG } = useNavegacion(); // Agrega funciones de navegación personalizadas
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevenir comportamiento predeterminado del formulario
        setError(''); // Limpiar errores previos

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombreUsuario, contrasena }),
            });

            if (!response.ok) {
                throw new Error('Usuario o contraseña incorrectos');
            }

            const data = await response.json();
            console.log('Login exitoso:', data);

            // Guardar token en localStorage o estado global
            localStorage.setItem('token', data.token);

            // Redirigir según el rol
            if (data.role === 'ADMIN') {
                goToPanelAdmin(); // Redirige al dashboard del administrador
            } else if (data.role === 'USUARIO_GENERAL') {
                goToApp(); // Redirige al dashboard del usuario general
            } else if (data.role === 'BCG') {
                goToPanelBCG(); // Redirige al dashboard del usuario de bcg
            } else {
                throw new Error('Rol desconocido');
            }
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    return (
        <>
            <NavBar />
            <section className="seccion-login">
                <div className="seccion-content-login">
                    <h1>Iniciar sesión</h1>
                    <form onSubmit={handleLogin} className="formulario-login">
                        <input
                            type="text"
                            placeholder="Nombre de usuario"
                            value={nombreUsuario}
                            onChange={(e) => setNombreUsuario(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            required
                        />
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Acceder</button>
                    </form>
                </div>
            </section>
        </>

    );
};
