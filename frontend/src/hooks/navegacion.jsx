import { useNavigate } from "react-router-dom";

export const useNavegacion = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToApp = () => {
        navigate('/');
    }
    const goToProyecto = () => {
        navigate('/proyecto')
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


    return { goToLogin, goToCrearProyecto, goToApp, goToProyecto, goToPanelAdmin, goToPanelBCG, goToModificarUsuario, goToBuscarUsuario, goToRegistrarUsuario };
}