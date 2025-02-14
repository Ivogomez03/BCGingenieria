import { useState } from "react";
import axios from "axios";
import './Estilos/AgregarInfoInversion.css'
import { useLocation } from "react-router-dom";

const CamposInfoInversión = [
    { nombre: "Categoria", tipo: "text", clave: "categoria" },
    { nombre: "Tipo", tipo: "text", clave: "tipo" },
    { nombre: "Inversión inicial", tipo: "number", clave: "inversionInicial" },
    { nombre: "Rentabilidad", tipo: "number", clave: "tir" },
    { nombre: "Año Recupero Inversión", tipo: "number", clave: "anioRecupero" },
    { nombre: "Propiedad", tipo: "text", clave: "propiedad" }
];


export const AgregarInfoInversion = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const location = useLocation();

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


        try {
            console.log(formData)
            console.log(location.state.idProyecto)
            const response = await axios.post("http://localhost:8080/proyecto/agregarInfoInversiones", { ...formData, idProyecto: location.state.idProyecto }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // Incluye el token si es necesario
                }
            });
            setSuccess(`La información se ha registrado con éxito`);
            setFormData({});
        } catch (err) {
            setError(err.response?.data?.message || "Error al agregar la información.");
        }
    };

    return (
        <>
            <div className="agregar-informacion-container">
                <form onSubmit={handleSubmit} className="form-agregar-informacion">
                    <h1>Agregar información de inversión</h1>
                    {CamposInfoInversión.map((campo, index) => (
                        <div key={index} className="campo-agregar-informacion">
                            <label htmlFor={campo.clave}>{campo.nombre}</label>
                            <input
                                type={campo.tipo}
                                name={campo.clave}
                                id={campo.clave}
                                value={formData[campo.clave] || ""}
                                onChange={handleChange}
                                className="input-agregar-informacion"
                                placeholder={campo.nombre}
                                required
                            />
                        </div>
                    ))}
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <button type="submit" className="boton-agregar-informacion">Agregar</button>
                </form>
            </div>
        </>

    );
};
