import { useEffect, useState } from "react";

export const useScroll = (ref) => {
    const [mostrarContacto, setMostrarContacto] = useState(false);

    const handleScroll = () => {
        if (ref.current) {
            const posicionComponente = ref.current.getBoundingClientRect().top; // Distancia al viewport
            const alturaParaMostrar = window.innerHeight * 0.6; // 60% del viewport

            if (posicionComponente < alturaParaMostrar) {
                setMostrarContacto(true);
            } else {
                setMostrarContacto(false);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [ref]);

    return { mostrarContacto };
};

export const useDesvanecer = ({ mostrarContacto }) => {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (mostrarContacto) {
            // si mostrarContacto renderizamos
            setShouldRender(true);
        } else {
            // si mostrarContaco es falso espero 0.3s y desvanecemos
            const timer = setTimeout(() => {

                setShouldRender(false);

            }, 300);

            return () => clearTimeout(timer);
        }
    }, [mostrarContacto]); // el efecto sucede cada vez que mostrarContacto cambia de valor


    return { shouldRender }
}