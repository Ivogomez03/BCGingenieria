import { useState } from "react";
import axios from "axios";
import './Estilos/RegistroUsuario.css'
import { BackGroundCircles } from './BackGroundCircles'
const CamposRegistroUsuario = [
    { nombre: "Nombre", tipo: "text", clave: "nombre" },
    { nombre: "Apellido", tipo: "text", clave: "apellido" },
    { nombre: "DNI", tipo: "number", clave: "dni" },
    { nombre: "Email", tipo: "email", clave: "email" },
    { nombre: "Dirección", tipo: "text", clave: "direccion" },
    { nombre: "Localidad", tipo: "text", clave: "localidad" },
    { nombre: "Edad", tipo: "number", clave: "edad" },
    { nombre: "Nombre de Usuario", tipo: "text", clave: "nombreUsuario" },
    { nombre: "Contraseña", tipo: "password", clave: "contrasena" },
    { nombre: "Confirmar Contraseña", tipo: "password", clave: "confirmarContrasena" },
];

export const RegistrarUsuario = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Validar contraseñas coincidan
        if (formData.contrasena !== formData.confirmarContrasena) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        try {
            console.log(formData)
            const response = await axios.post("http://localhost:8080/auth/registrar", formData, {
                headers: {}
            });
            setSuccess(`Se ha registrado con éxito: ${formData.nombreUsuario}`);
            setFormData({});
        } catch (err) {
            setError(err.response?.data?.message || "Error al registrar usuario.");
        }
    };

    return (
        <>
            <BackGroundCircles />
            <div className="registro-usuario-container">

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <form onSubmit={handleSubmit} className="form-registro-usuario">
                    <h1>Registrar Usuario</h1>
                    {CamposRegistroUsuario.map((campo, index) => (
                        <div key={index} className="campo-registro">
                            <label htmlFor={campo.clave}>{campo.nombre}</label>
                            <input
                                type={campo.tipo}
                                name={campo.clave}
                                id={campo.clave}
                                value={formData[campo.clave] || ""}
                                onChange={handleChange}
                                className="input-registro-usuario"
                                placeholder={campo.nombre}
                                required
                            />
                        </div>
                    ))}
                    <button type="submit" className="boton-registro-usuario">Registrar</button>
                </form>
            </div>
        </>

    );
};
