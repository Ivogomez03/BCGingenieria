import React, { useState } from "react";
import axios from "axios";
import { useNavegacion } from "../hooks/navegacion";

const BuscarUsuarios = () => {
    const [apellido, setApellido] = useState("");
    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState("");
    const { goToModificarUsuario } = useNavegacion();
    const [haBuscado, setHaBuscado] = useState(false);

    const handleChange = (e) => {
        setApellido(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Limpiar errores previos
        setUsuarios([]); // Limpiar resultados previos
        setHaBuscado(true);

        try {
            const response = await axios.get(
                `http://localhost:8080/admin/buscarUsuarios?apellido=${apellido}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            setUsuarios(response.data);
        } catch (error) {
            if (error.response?.status === 400) {
                setError("Debe proporcionar un apellido válido.");
            } else if (error.response?.status === 403) {
                setError("No tienes permisos para buscar usuarios.");
            } else {
                setError("Ocurrió un error al buscar los usuarios.");
            }
        }
    };

    const handleEliminar = async (nombreUsuario) => {
        try {
            await axios.delete(`http://localhost:8080/admin/eliminarUsuario?nombreUsuario=${nombreUsuario}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            alert("Usuario eliminado con éxito");
            setUsuarios(usuarios.filter((usuario) => usuario.nombreUsuario !== nombreUsuario)); // Actualiza la lista local
        } catch (error) {
            alert(`Error al eliminar el usuario: ${error.response?.data || error.message}`);
        }
    };


    return (
        <div>
            <h2>Buscar Usuarios por Apellido</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Apellido:
                    <input
                        type="text"
                        value={apellido}
                        onChange={handleChange}
                        placeholder="Ingrese el apellido"
                        required
                    />
                </label>
                <button type="submit">Buscar</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {usuarios.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>DNI</th>
                            <th>Localidad</th>
                            <th>Edad</th>
                            <th>¿Es Cliente?</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.dni}</td>
                                <td>{usuario.localidad}</td>
                                <td>{usuario.edad}</td>
                                <td>{usuario.esCliente ? "Sí" : "No"}</td>
                                <td>
                                    <button onClick={() => goToModificarUsuario(usuario)}>Modificar</button>
                                    <button onClick={() => handleEliminar(usuario.nombreUsuario)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {usuarios.length === 0 && !error && haBuscado && (
                <p>No se encontraron usuarios con el apellido {apellido}.</p>
            )}
        </div>
    );
};

export default BuscarUsuarios;
