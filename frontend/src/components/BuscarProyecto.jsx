import { useState } from "react";
import axios from "axios";
import { useNavegacion } from "../hooks/navegacion";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './Estilos/BuscarProyecto.css'


const BuscarProyecto = () => {
    const [nombreProyecto, setNombreProyecto] = useState("");
    const [proyectos, setProyectos] = useState([]);
    const [error, setError] = useState("");
    const { goToModificarProyecto } = useNavegacion();
    const [haBuscado, setHaBuscado] = useState(false);

    const handleChange = (e) => {
        setNombreProyecto(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Limpiar errores previos
        setProyectos([]); // Limpiar resultados previos
        setHaBuscado(true);

        try {
            const response = await axios.get(
                `http://localhost:8080/proyecto/buscarProyectoPorNombre?nombreProyecto=${nombreProyecto}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            setProyectos(response.data);
        } catch (error) {
            if (error.response?.status === 400) {
                setError("Debe proporcionar un nombre de proyecto válido.");
            } else if (error.response?.status === 403) {
                setError("No tienes permisos para buscar proyectos.");
            } else {
                setError("Ocurrió un error al buscar los proyectos.");
            }
        }
    };

    const handleEliminar = async (idProyecto) => {
        try {
            await axios.delete(`http://localhost:8080/proyecto/eliminarProyecto?idProyecto=${idProyecto}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            alert("Proyecto eliminado con éxito");
            setProyectos(proyectos.filter((proyecto) => proyecto.idProyecto !== idProyecto)); // Actualiza la lista local
        } catch (error) {
            alert(`Error al eliminar el proyecto: ${error.response?.data || error.message}`);
        }
    };


    return (
        <>
            <div className="seccion-buscar-proyecto">
                <h2>Buscar proyectos por Nombre</h2>
                <form onSubmit={handleSubmit} className="form-buscar-proyecto">
                    <label>
                        Nombre Proyecto:
                        <input
                            type="text"
                            value={nombreProyecto}
                            onChange={handleChange}
                            placeholder="Ingrese el nombre del proyecto"
                            required
                        />
                    </label>
                    <button type="submit">Buscar</button>
                </form>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {proyectos.length > 0 && (
                    <table className="table-buscar-proyecto">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Fecha creacion</th>
                                <th>Precio KW</th>
                                <th>Potencia</th>
                                <th>Huella carbono ahorrada</th>
                                <th>Generacion anual</th>
                                <th>Unidades disponibles</th>
                                <th>Inversion hecha hasta ahora</th>
                                <th>Monto minimo a invertir</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proyectos.map((proyecto) => (
                                <tr key={proyecto.idProyecto}>
                                    <td>{proyecto.nombre}</td>
                                    <td>{proyecto.descripcion}</td>
                                    <td>{proyecto.fechaCreacion}</td>
                                    <td>{proyecto.precioKW}</td>
                                    <td>{proyecto.potencia}</td>
                                    <td>{proyecto.huellaCarbonoAhorrada}</td>
                                    <td>{proyecto.generacionAnual}</td>
                                    <td>{proyecto.unidadesDisponibles}</td>
                                    <td>{proyecto.inversionHechaHastaAhora}</td>
                                    <td>{proyecto.montoMinimoAinvertir}</td>
                                    <td>
                                        <button onClick={() => goToModificarProyecto(proyecto)}><EditIcon /></button>
                                        <button onClick={() => handleEliminar(proyecto.idProyecto)}><DeleteIcon /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {proyectos.length === 0 && !error && haBuscado && (
                    <p>No se encontraron proyectos con el nombre {nombreProyecto}.</p>
                )}
            </div>
        </>

    );
};

export default BuscarProyecto;
