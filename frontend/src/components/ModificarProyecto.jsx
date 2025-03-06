import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import './Estilos/ModificarProyecto.css'



const ModificarProyecto = () => {
    const location = useLocation();
    const [proyecto, setProyecto] = useState({
        nombre: location.state?.nombre || "",
        descripcion: location.state?.descripcion || "",
        precioKW: location.state?.precioKW || "",
        potencia: location.state?.potencia || "",
        huellaCarbonoAhorrada: location.state?.huellaCarbonoAhorrada || "",
        generacionAnual: location.state?.generacionAnual || "",
        urlMasInfoImagen: location.state?.urlMasInfoImagen || "",
        unidadesDisponibles: location.state?.unidadesDisponibles || "",
        inversionHechaHastaAhora: location.state?.inversionHechaHastaAhora || "",
        montoMinimoAinvertir: location.state?.montoMinimoAinvertir || "",
        disponible: location.state?.disponible || true,
    });


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProyecto((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                "http://localhost:8080/proyecto/modificarProyecto",
                { ...proyecto, idProyecto: location.state.idProyecto },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`, // Incluye el token si es necesario
                    },
                }
            );
            alert(`Proyecto modificado: ${response.data}`);
        } catch (error) {
            alert(`Error al modificar proyecto: ${error.response?.data || error.message}`);
        }
    };

    return (
        <>
            <section className="seccion-modificar-proyecto">
                <form onSubmit={handleSubmit} className="form-modificar-proyecto">
                    <h2>Modificar Proyecto</h2>
                    <label>
                        Nombre de Proyecto:
                        <input
                            type="text"
                            name="nombre"
                            value={proyecto.nombre}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Descripción:
                        <input
                            type="text"
                            name="descripcion"
                            value={proyecto.descripcion}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Url Imagen Mas Info:
                        <input
                            type="text"
                            name="urlMasInfoImagen"
                            value={proyecto.urlMasInfoImagen}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Precio KW:
                        <input
                            type="number"
                            name="precioKW"
                            value={proyecto.precioKW}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Potencia:
                        <input
                            type="number"
                            name="potencia"
                            value={proyecto.potencia}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Huella carbono ahorrada:
                        <input
                            type="number"
                            name="huellaCarbonoAhorrada"
                            value={proyecto.huellaCarbonoAhorrada}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Generación anual:
                        <input
                            type="number"
                            name="generacionAnual"
                            value={proyecto.generacionAnual}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Unidades disponibles:
                        <input
                            type="number"
                            name="unidadesDisponibles"
                            value={proyecto.unidadesDisponibles}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Inversion hecha hasta ahora:
                        <input
                            type="number"
                            name="inversionHechaHastaAhora"
                            value={proyecto.inversionHechaHastaAhora}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Monto minimo a invertir:
                        <input
                            type="number"
                            name="montoMinimoAinvertir"
                            value={proyecto.montoMinimoAinvertir}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Disponible:
                        <input
                            type="checkbox"
                            name="disponible"
                            checked={proyecto.disponible}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit" className="boton-modificar-proyecto">Modificar Proyecto</button>
                </form>
            </section>
        </>


    );
};

export default ModificarProyecto;
