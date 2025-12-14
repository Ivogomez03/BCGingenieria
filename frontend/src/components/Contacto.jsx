import { useEffect, useId, useState } from "react"
import './Estilos/Contacto.css'
import emailjs from "@emailjs/browser";
export const Contacto = ({ seOculta }) => {
    const idForNombre = useId();
    const idForApellido = useId();
    const idForDescripcion = useId();
    const idForCorreo = useId();
    const [isVisible, setIsVisible] = useState(true);
    const [errorContacto, setErrorContacto] = useState("");

    useEffect(() => {
        if (seOculta) {
            setIsVisible(false);
        }
    }, [seOculta]);

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        descripcion: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const enviarCorreo = (e) => {
        e.preventDefault();
        if (!formData.nombre || !formData.apellido || !formData.correo || !formData.descripcion) {
            mostrarErrorTemporal("Por favor, completa todos los campos.");
            return;
        }

        const templateParams = {
            nombre: formData.nombre,
            apellido: formData.apellido,
            correo: formData.correo,
            descripcion: formData.descripcion
        };

        emailjs
            .send("service_q6cnl0v", "template_ynxuhbp", templateParams, "ER4UCb0EFvFuLl0cU")
            .then((response) => {
                mostrarErrorTemporal("Correo enviado ✅");
                console.log("Correo enviado con éxito:", response);
            })
            .catch((error) => {
                mostrarErrorTemporal("Error al enviar el correo ❌");
                console.error("Error:", error);
            });
    };

    const mostrarErrorTemporal = (mensaje) => {
        setErrorContacto(mensaje);
        setTimeout(() => {
            setErrorContacto("");
        }, 2000); // Elimina el mensaje después de 2 segundos
    };
    return (

        <div className={`contenedor-contacto ${isVisible ? 'visible' : 'hidden'}`}>
            <section className="seccion-contacto">
                <h1 className="titulo-contacto">Contactate con nosotros</h1>
                <form action="">
                    <div className="contenedor-inputs-contacto">
                        <label htmlFor={idForNombre}>Nombre</label>
                        <input type="text" id={idForNombre}
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contenedor-inputs-contacto">
                        <label htmlFor={idForApellido}>Apellido</label>
                        <input type="text" id={idForApellido}
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contenedor-inputs-contacto">
                        <label htmlFor={idForCorreo}>Correo electrónico</label>
                        <input type="text" id={idForCorreo}
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contenedor-inputs-contacto">
                        <label htmlFor={idForDescripcion}>Descripción del mensaje</label>
                        <input type="text" id={idForDescripcion}
                            name="descripcion"
                            value={formData.descripcion}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="boton-enviar-contacto" type="submit" onClick={enviarCorreo}>Enviar</button>
                    {errorContacto && <p className="error-mensaje">{errorContacto}</p>}
                </form>
            </section>
        </div>



    )

}