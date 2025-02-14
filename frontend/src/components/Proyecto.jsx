import { useId, useState } from "react";
import { useCalculo } from "../hooks/calculoPaneles";
import './Estilos/Proyecto.css'
import { useNavegacion } from "../hooks/navegacion"
import { useLocation } from "react-router-dom";
const CalculoDePaneles = ({ onSiguiente }) => {

    const consumoInputId = useId();



    const { cantidadPaneles, consumo, handleChangeConsumoInput, handleCalcular } = useCalculo();

    const handleNext = () => {
        if (cantidadPaneles > 0) {
            onSiguiente(cantidadPaneles, 7000); // Pasar cantidad de paneles y valor de KW al siguiente paso
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
            {cantidadPaneles > 0 && <h2>Cantidad de potencia: {cantidadPaneles}KW</h2>}
            <h3>El valor de un KW es de $7000 USD</h3>
            <button className="boton-siguiente" onClick={handleNext}>Siguiente</button>
        </section>
    );
};

const IngresaMonto = ({ panelesNecesarios, onSiguiente, valorKW }) => {
    const selectId = useId();
    const [isTransferenciaEnPesos, setIsTransferenciaEnPesos] = useState(true);
    const [monto, setMonto] = useState("");
    const montoMinimo = valorKW;
    const handleSelectChange = (e) => {
        const newValue = e.target.value;
        setIsTransferenciaEnPesos(newValue === "TRANSFERENCIABANCARIAENPESOS");
    };

    const handleInputChange = (e) => {
        const newValue = e.target.value;

        if (/^\d*\.?\d*$/.test(newValue)) {
            setMonto(newValue);
        }
    };

    const handleNext = () => {
        if (monto >= montoMinimo) {
            onSiguiente(monto, isTransferenciaEnPesos);
        } else {
            alert(`El monto mínimo a invertir es ${montoMinimo}.`);
        }
    };

    return (


        <section className="ingresa-monto-seccion">
            <h2>Tu monto minimo a invertir es de: {montoMinimo}</h2>
            <label htmlFor={selectId}>Selecciona el tipo de transferencia:</label>
            <select name="select" id={selectId} onChange={handleSelectChange} className="select-ingresa-monto">
                <option value="TRANSFERENCIABANCARIAENPESOS">Transferencia Bancaria en Pesos</option>
                <option value="TRANSFERENCIABANCARIAENDOLARES">Transferencia Bancaria en Dólares</option>
            </select>
            <div>
                <span>{isTransferenciaEnPesos ? "ARS" : "USD"}</span>
                <input
                    type="text"
                    placeholder={`Monto mínimo: ${montoMinimo} ${isTransferenciaEnPesos ? "ARS" : "USD"}`}
                    value={monto}
                    onChange={handleInputChange}
                    className="input-secciones-proyecto"
                />
            </div>
            <button className="boton-siguiente" onClick={handleNext}>Siguiente</button>
        </section>


    );
};

const ConfirmarInversion = ({ monto, isTransferenciaEnPesos }) => {
    return (
        <section className="confirmar-inversion-seccion">
            <h1>Confirmación de Inversión</h1>
            <h2>Inversión: {isTransferenciaEnPesos ? "ARS" : "USD"} {monto}</h2>
            <p>Una vez confirmada tu inversión, podrás realizar el pago y ver su estado desde tu cuenta.</p>
            <button className="boton-confirmar-inversion">Confirmar</button>
        </section>
    );
};

export const Proyecto = () => {
    const [etapa, setEtapa] = useState(1);
    const [cantidadPaneles, setCantidadPaneles] = useState(0);
    const [valorKW, setValorKW] = useState(0);
    const [monto, setMonto] = useState(0);
    const [isTransferenciaEnPesos, setIsTransferenciaEnPesos] = useState(true);
    const { goToApp } = useNavegacion();
    const handleSiguiente = () => setEtapa(etapa + 1);
    const handleAtras = () => setEtapa(etapa - 1);
    const location = useLocation();

    const avanzarConPaneles = (paneles) => {
        setCantidadPaneles(paneles);
        setValorKW(location.state.montoMinimoAinvertir);
        handleSiguiente();
    };

    const avanzarConMonto = (monto, isPesos) => {
        setMonto(monto);
        setIsTransferenciaEnPesos(isPesos);
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
                        {location.state.listaDeInfoInversiones.map(info => (
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
                        <button className="boton-cambio-seccion" onClick={() => setEtapa(2)}>2. Ingresa el monto</button>
                        <button className="boton-cambio-seccion" onClick={() => setEtapa(3)}>3. Confirma tu inversión</button>
                    </div>

                    {etapa === 1 && <CalculoDePaneles onSiguiente={avanzarConPaneles} />}
                    {etapa === 2 && (
                        <IngresaMonto
                            panelesNecesarios={cantidadPaneles}
                            valorKW={valorKW}
                            onSiguiente={avanzarConMonto}
                        />
                    )}
                    {etapa === 3 && (
                        <ConfirmarInversion monto={monto} isTransferenciaEnPesos={isTransferenciaEnPesos} />
                    )}

                    {etapa > 1 && <button className="boton-proyecto-atras" onClick={handleAtras}>Atrás</button>}
                </section>
            </main>
        </>

    );
};
