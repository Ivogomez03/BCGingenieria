import { useNavigate } from "react-router-dom";

export const useNavegacion = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToApp = () => {
        navigate('/');
    }
    const goToProyecto = (proyecto) => {
        navigate('/proyecto', { state: proyecto })
    }
    const goToPanelAdmin = () => {
        navigate('/panelAdministrador')
    }
    const goToModificarUsuario = (usuario) => {
        navigate('/admin/modificarUsuario', { state: usuario })
    }
    const goToBuscarUsuario = () => {
        navigate('/admin/buscarUsuario')
    }
    const goToRegistrarUsuario = () => {
        navigate('/registrar')
    }
    const goToPanelBCG = () => {
        navigate('/panelBCG')
    }
    const goToCrearProyecto = () => {
        navigate('/crearProyecto')
    }
    const goToBuscarProyecto = () => {
        navigate('/proyecto/buscarProyecto')
    }
    const goToModificarProyecto = (proyecto) => {
        navigate('/proyecto/modificarProyecto', { state: proyecto })
    }


    return { goToLogin, goToCrearProyecto, goToBuscarProyecto, goToApp, goToProyecto, goToModificarProyecto, goToPanelAdmin, goToPanelBCG, goToModificarUsuario, goToBuscarUsuario, goToRegistrarUsuario };
}