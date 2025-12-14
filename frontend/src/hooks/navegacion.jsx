import { useNavigate } from "react-router-dom";

export const useNavegacion = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToApp = () => {
        navigate('/comunidadesSolares');
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

    const goToProyecto = () => {
        navigate('/proyecto')
    }

    const goToMasInfoMariaTeresa = () => {
        navigate('/proyecto/MasInfoMariaTeresa')
    }


    return { goToProyecto, goToMasInfoMariaTeresa, goToLogin, goToApp, goToPanelAdmin, goToPanelBCG, goToModificarUsuario, goToBuscarUsuario, goToRegistrarUsuario };
}