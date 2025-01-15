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
    return { goToLogin, goToApp, goToProyecto };
}