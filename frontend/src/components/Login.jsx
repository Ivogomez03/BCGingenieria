import { useNavegacion } from '../hooks/navegacion'
import './Estilos/Login.css'
export const Login = () => {
    const { goToApp } = useNavegacion();
    return (
        <section className="seccion-login">
            <img src="./BCG2.png" alt="" />
            <button className='boton-seccion-login-volver' onClick={goToApp}>Volver</button>
            <div className='seccion-content-login'>

                <h1>Iniciar sesión</h1>
                <form action="" className="formulario-login">
                    <input type="text" placeholder="Nombre de usuario" />
                    <input type="password" placeholder="Contraseña" />
                    <button>Acceder</button>
                </form>
            </div>

        </section>
    )
}