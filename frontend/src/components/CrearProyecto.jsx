import { useState } from "react";
import axios from "axios";
import './Estilos/CrearProyecto.css'
import { BackGroundCircles } from './BackGroundCircles'
const CamposCrearProyecto = [
    { nombre: "Nombre", tipo: "text", clave: "nombre" },
    { nombre: "Descripcion", tipo: "text", clave: "descripcion" },
    { nombre: "Fecha Creacion", tipo: "date", clave: "fechaCreacion" },
    { nombre: "Precio KW", tipo: "number", clave: "precioKW" },
    { nombre: "Potencia", tipo: "number", clave: "potencia" },
    { nombre: "Huella de carbono ahorrada", tipo: "number", clave: "huellaCarbonoAhorrada" },
    { nombre: "Generacion anual", tipo: "number", clave: "generacionAnual" },
    { nombre: "Unidades disponibles", tipo: "number", clave: "unidadesDisponibles" },
    { nombre: "Inversion hecha hasta ahora", tipo: "number", clave: "inversionHechaHastaAhora" },
    { nombre: "Monto minimo a invertir", tipo: "number", clave: "montoMinimoAinvertir" },
];


export const CrearProyecto = () => {
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


        try {
            console.log(formData)
            const response = await axios.post("http://localhost:8080/proyecto/crear", formData, {
                headers: {}
            });
            setSuccess(`El proyecto se ha registrado con éxito`);
            setFormData({});
        } catch (err) {
            setError(err.response?.data?.message || "Error al registrar el proyecto.");
        }
    };

    return (
        <>
            <BackGroundCircles />
            <div className="registro-proyecto-container">

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <form onSubmit={handleSubmit} className="form-registro-proyecto">
                    <h1>Crear Proyecto</h1>
                    {CamposCrearProyecto.map((campo, index) => (
                        <div key={index} className="campo-registro-proyecto">
                            <label htmlFor={campo.clave}>{campo.nombre}</label>
                            <input
                                type={campo.tipo}
                                name={campo.clave}
                                id={campo.clave}
                                value={formData[campo.clave] || ""}
                                onChange={handleChange}
                                className="input-registro-proyecto"
                                placeholder={campo.nombre}
                                required
                            />
                        </div>
                    ))}
                    <button type="submit" className="boton-registro-proyecto">Crear</button>
                </form>
            </div>
        </>

    );
};
