import { useState, useEffect, useCallback } from "react";

export const useCarruselNuestrosProyectos = ({ index }) => {
    const imagenesProyectos = [
        {
            ubicacion: "Ceres, Santa Fe",
            urlImg: "/lazzaroni.jpg",
            potenciaInstalada: 20,
            nombreProyecto: "Empresa Lazzaroni"
        },
        {
            ubicacion: "Maria Teresa, Santa Fe",
            urlImg: "/fondo_principal_2.jpg",
            potenciaInstalada: 100,
            nombreProyecto: "Comunidad Solar (ETAPA II)"
        },
        {
            ubicacion: "Rafaela, Santa Fe",
            urlImg: "/rafaela.jpeg",
            potenciaInstalada: 7,
            nombreProyecto: "Sistema Colaborativo"
        },
        {
            ubicacion: "Monte Vera, Santa Fe",
            urlImg: "/monte_vera.jpg",
            potenciaInstalada: null,
            nombreProyecto: " Planta Tratamiento de Agua Potable"
        },
        {
            ubicacion: "Santa Clara de Saguier, Santa Fe",
            urlImg: "/fondo_principal_1.jpg",
            potenciaInstalada: null,
            nombreProyecto: "Red de distribución agua potable y optimización de planta de tratamiento"
        },
        {
            ubicacion: "Gálvez, Santa Fe",
            urlImg: "/galvez.jpg",
            potenciaInstalada: null,
            nombreProyecto: "Planta de cloración PLC ASSA"
        },
        {
            ubicacion: "Colonia San José, Santa Fe",
            urlImg: "/san_jose.jpeg",
            potenciaInstalada: null,
            nombreProyecto: "Red de agua potable"
        },
        {
            ubicacion: "Barrio Jesuitas, Santa Fe",
            urlImg: "/jesuitas.jpeg",
            potenciaInstalada: null,
            nombreProyecto: "Extensión de la red de agua potable"
        }
    ];

    const [indiceProyecto, setIndiceProyecto] = useState(index);

    const siguienteProyecto = useCallback(() => {
        setIndiceProyecto((prev) => (prev + 1) % imagenesProyectos.length);
    }, [imagenesProyectos.length]);

    const anteriorProyecto = useCallback(() => {
        setIndiceProyecto((prev) => (prev - 1 + imagenesProyectos.length) % imagenesProyectos.length);
    }, [imagenesProyectos.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            siguienteProyecto();
        }, 5000);

        return () => clearInterval(interval);
    }, [indiceProyecto, siguienteProyecto]);
    return { indiceProyecto, imagenesProyectos, siguienteProyecto, anteriorProyecto };
}