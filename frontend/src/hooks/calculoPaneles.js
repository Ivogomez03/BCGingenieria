import { useState } from "react";

export const useCalculo = () => {

    const CalcularPaneles = (consumo12meses) => consumo12meses / 1600;

    const [cantidadPaneles, setCantidadPaneles] = useState(0);

    const [consumo, setConsumo] = useState('');



    const handleChangeConsumoInput = (e) => {
        const consumoUsuario = e.target.value
        setConsumo(consumoUsuario);
    }

    const handleCalcular = () => {
        const consumoNumerico = parseFloat(consumo);
        if (!isNaN(consumoNumerico) && consumoNumerico > 0) {
            const paneles = CalcularPaneles(consumoNumerico);
            setCantidadPaneles(paneles); // Redondear hacia arriba
        } else {
            alert("Por favor, ingrese un valor numérico válido mayor a 0.");
        }
    }
    return { cantidadPaneles, consumo, handleChangeConsumoInput, handleCalcular }
}