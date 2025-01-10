import { useEffect, useId, useState } from "react"
import './Estilos/Contacto.css'
export const Contacto = ({ seOculta }) => {
    const idForNombre = useId();
    const idForApellido = useId();
    const idForDescripcion = useId();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (seOculta) {
            setIsVisible(false);
        }
    }, [seOculta]);

    return (

        <div className={`contenedor-contacto ${isVisible ? 'visible' : 'hidden'}`}>
            <section className="seccion-contacto">
                <h1 className="titulo-contacto">Contactate con nosotros</h1>
                <form action="">
                    <div className="contenedor-inputs-contacto">
                        <label htmlFor={idForNombre}>Nombre</label>
                        <input type="text" id={idForNombre} />
                    </div>
                    <div className="contenedor-inputs-contacto">
                        <label htmlFor={idForApellido}>Apellido</label>
                        <input type="text" id={idForApellido} />
                    </div>
                    <div className="contenedor-inputs-contacto">
                        <label htmlFor={idForDescripcion}>Descripción del mensaje</label>
                        <input type="text" id={idForDescripcion} />
                    </div>
                    <button className="boton-enviar-contacto">Enviar</button>
                </form>
            </section>
        </div>



    )

}