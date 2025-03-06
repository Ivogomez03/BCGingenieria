import { useEffect, useId, useState } from "react";
import { useCalculo } from "../hooks/calculoPaneles";
import './Estilos/Proyecto.css'
import { useNavegacion } from "../hooks/navegacion"
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
const CalculoDePaneles = ({ onSiguiente, valorKW }) => {

    const consumoInputId = useId();



    const { cantidadPaneles, consumo, handleChangeConsumoInput, handleCalcular } = useCalculo();

    const handleNext = () => {
        if (cantidadPaneles > 0) {
            onSiguiente(cantidadPaneles, valorKW); // Pasar cantidad de paneles y valor de KW al siguiente paso
        } else {
            alert("Por favor, calcula la cantidad de paneles primero.");
        }
    };

    return (
        <section className="calculo-paneles-seccion">
            <h1>Calculo de potencia necesaria</h1>
            <p>Para saber cuanta potencia necesita, ingrese su consumo de los últimos 12 meses de luz.</p>
            <label htmlFor={consumoInputId}>Consumo de los últimos 12 meses:</label>
            <input
                type="text"
                id={consumoInputId}
                className="input-secciones-proyecto"
                onChange={handleChangeConsumoInput}
                placeholder="Ingrese su consumo energético"
                value={consumo}
            />
            <button className="boton-calculo" onClick={handleCalcular}>Calcular</button>
            {cantidadPaneles > 0 && <h2>Cantidad de potencia: {Number(cantidadPaneles.toFixed(2))}KW</h2>}
            <h3>El valor de un KW es de ${valorKW} USD</h3>
            <button className="boton-siguiente" onClick={handleNext}>Siguiente</button>
        </section>
    );
};


const ConfirmarInversion = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
    });
    const [nombreUsuario, setNombreUsuario] = useState('');

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const payload = JSON.parse(atob(token.split(".")[1])); // Decodifica el JWT
                setNombreUsuario(payload.sub || "");
            } catch (error) {
                console.error("Error al decodificar el token:", error);
                setNombreUsuario('');
            }
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const enviarCorreo = () => {
        if (!formData.nombre || !formData.apellido || !formData.email) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const templateParams = {
            nombre: formData.nombre,
            apellido: formData.apellido,
            email: formData.email,
            nombreUsuario: nombreUsuario
        };

        emailjs
            .send("service_q6cnl0v", "template_4e7npop", templateParams, "ER4UCb0EFvFuLl0cU")
            .then((response) => {
                alert("Correo de confirmación enviado ✅");
                console.log("Correo enviado con éxito:", response);
            })
            .catch((error) => {
                alert("Error al enviar el correo ❌");
                console.error("Error:", error);
            });
    };

    return (
        <section className="confirmar-inversion-seccion">
            <h1>Confirmación de Inversión</h1>
            <p>Ingresa tus datos para contactarte con la empresa:</p>

            <input
                className="input-secciones-proyecto"
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
            />
            <input
                className="input-secciones-proyecto"
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleChange}
            />
            <input
                className="input-secciones-proyecto"
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
            />

            <button className="boton-confirmar-inversion" onClick={enviarCorreo}>
                Confirmar
            </button>
        </section>
    );
};

export const Proyecto = () => {
    const [etapa, setEtapa] = useState(1);
    const [cantidadPaneles, setCantidadPaneles] = useState(0);
    const { goToApp } = useNavegacion();
    const handleSiguiente = () => setEtapa(etapa + 1);
    const handleAtras = () => setEtapa(etapa - 1);
    const location = useLocation();

    const avanzarConPaneles = (paneles) => {
        setCantidadPaneles(paneles);
        handleSiguiente();
    };

    return (
        <>
            <main className="main-proyecto">
                <button className="boton-proyecto-atras" onClick={goToApp}>Volver</button>
                <section className="proyecto-seccion">
                    <h1>{location.state.nombre}</h1>
                    <h2>{location.state.descripcion}</h2>
                    <div className="proyecto-info-inversiones-conteiner">
                        {location.state.listaDeInfoInversiones.sort((a, b) => {
                            const ordenPersonalizado = ["Comercio Industria", "Vecinos", "Grandes Clientes"];
                            return ordenPersonalizado.indexOf(a.categoria) - ordenPersonalizado.indexOf(b.categoria);
                        }).map(info => (
                            <div key={info.idInfoInversion} className="proyecto-info-inversiones">
                                <h1>{info.categoria}</h1>
                                <div className="proyecto-info-inversiones-div">
                                    <h2>{info.tipo}</h2>
                                    <ul>
                                        <li>Inversión inicial: {info.inversionInicial}%</li>
                                        <li>TIR(Rentabilidad): {info.tir}%</li>
                                        <li>Años de recupero de inversión: {info.anioRecupero}</li>
                                        <li>Propiedad: {info.propiedad}</li>
                                    </ul>

                                </div>

                            </div>))}
                    </div>

                    <div>
                        <button className="boton-cambio-seccion" onClick={() => setEtapa(1)}>1. Cálculo de potencia</button>
                        <button className="boton-cambio-seccion" onClick={() => setEtapa(2)}>2. Confirma tu inversión</button>
                    </div>

                    {etapa === 1 && <CalculoDePaneles onSiguiente={avanzarConPaneles} valorKW={location.state.montoMinimoAinvertir} />}
                    {etapa === 2 && (
                        <ConfirmarInversion />
                    )}

                    {etapa > 1 && <button className="boton-proyecto-atras" onClick={handleAtras}>Atrás</button>}
                </section>
            </main>
        </>

    );
};
