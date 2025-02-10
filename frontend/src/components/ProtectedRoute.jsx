import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, requiredRole }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" />;
    }

    try {
        // Decodificar el token
        const payload = JSON.parse(atob(token.split(".")[1]));

        // Extraer el rol correctamente
        const userRole = payload.role?.[0]?.authority; // Accede al primer elemento y a "authority"

        if (requiredRole && userRole !== requiredRole) {
            return <Navigate to="/" />;
        }

        return children;
    } catch (error) {
        console.error("Error al decodificar el token:", error);
        return <Navigate to="/login" />;
    }
};