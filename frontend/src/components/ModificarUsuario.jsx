import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ModificarUsuario = () => {
    const location = useLocation();
    const [usuario, setUsuario] = useState({
        nombreUsuario: location.state?.nombreUsuario || "",
        contrasena: "", // Siempre vacío para que el usuario ingrese una nueva contraseña
        nombre: location.state?.nombre || "",
        apellido: location.state?.apellido || "",
        dni: location.state?.dni || "",
        email: location.state?.email || "",
        direccion: location.state?.direccion || "",
        localidad: location.state?.localidad || "",
        edad: location.state?.edad || "",
        esCliente: location.state?.esCliente || false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUsuario((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                "http://localhost:8080/admin/modificarUsuario",
                usuario,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`, // Incluye el token si es necesario
                    },
                }
            );
            alert(`Usuario modificado: ${response.data}`);
        } catch (error) {
            alert(`Error al modificar usuario: ${error.response?.data || error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Modificar Usuario</h2>
            <label>
                Nombre de Usuario:
                <input
                    type="text"
                    name="nombreUsuario"
                    value={usuario.nombreUsuario}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Contraseña:
                <input
                    type="password"
                    name="contrasena"
                    value={usuario.contrasena}
                    onChange={handleChange}
                />
            </label>
            <label>
                Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Apellido:
                <input
                    type="text"
                    name="apellido"
                    value={usuario.apellido}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                DNI:
                <input
                    type="number"
                    name="dni"
                    value={usuario.dni}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={usuario.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Dirección:
                <input
                    type="text"
                    name="direccion"
                    value={usuario.direccion}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Localidad:
                <input
                    type="text"
                    name="localidad"
                    value={usuario.localidad}
                    onChange={handleChange}
                />
            </label>
            <label>
                Edad:
                <input
                    type="number"
                    name="edad"
                    value={usuario.edad}
                    onChange={handleChange}
                />
            </label>
            <label>
                ¿Es Cliente?
                <input
                    type="checkbox"
                    name="esCliente"
                    checked={usuario.esCliente}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Modificar Usuario</button>
        </form>
    );
};

export default ModificarUsuario;
