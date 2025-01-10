import { useState } from "react";

export const useInputOnlyLetters = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const inputValue = e.target.value;

        // Validar si el input solo contiene letras (incluye espacios opcionales)
        if (/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(inputValue)) {
            setValue(inputValue);
            setError(""); // No hay error si cumple la validación
        } else {
            setError("Solo se permiten letras.");
        }
    };

    return { value, onChange: handleChange, error };
};
