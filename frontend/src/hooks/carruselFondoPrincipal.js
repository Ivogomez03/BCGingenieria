import { useState, useEffect } from "react";

export const useCarruselFondoPrincipal = ({ index }) => {
    const imagenesFondo = [
        "/fondo_principal_1.jpg",
        "/fondo_principal_2.jpg"

    ];

    const [indiceImagen, setIndiceImagen] = useState(index);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceImagen((prevIndex) => (prevIndex + 1) % imagenesFondo.length);
        }, 5000);

        return () => clearInterval(intervalo);
    }, [imagenesFondo.length]);
    return { indiceImagen, imagenesFondo };
}