import './Estilos/PanelProyectos.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import axios from 'axios'; // Importamos Axios
import InfoIcon from '@mui/icons-material/Info';
import { useNavegacion } from '../hooks/navegacion';
import { useEffect, useState } from 'react';

export const PanelProyectos = ({ proyectosRef }) => {
    const { goToProyecto } = useNavegacion();
    const [proyectos, setProyectos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/proyecto/obtenerTodosLosProyectos') // Reemplaza con tu URL real
            .then(response => {
                setProyectos(response.data);
                setCargando(false);
            })
            .catch(error => {
                console.error('Error al obtener los proyectos:', error);
                setError('Error al cargar proyectos');
                setCargando(false);
            });
    }, []);
    console.log(proyectos)
    if (cargando) return <p style={{ 'color': '#000' }}>Cargando proyectos...</p>;
    if (error) return <p style={{ 'color': '#000' }}>{error}</p>;

    return (
        <section className='conteiner-panel-proyectos' ref={proyectosRef}>

            <h1 className='titulo-panel-proyecto'>
                Proyectos Activos
            </h1>
            <section className={`panel-proyectos`}>
                {proyectos.map((proyecto) => (
                    <div key={proyecto.idProyecto} className="proyecto-en-panel">
                        <h1>{proyecto.nombre}</h1>
                        <img src={proyecto.imagen || './PanelSolar.jpg'} alt={proyecto.nombre} />
                        <h2 className='numero-generacion-estimada'>{proyecto.generacionAnual}%</h2>
                        <h3>Generación anual renovable estimada</h3>
                        <p>{proyecto.unidadesDisponibles} {proyecto.unidadesDisponibles === 1 ? 'Unidad' : 'Unidades'} disponibles</p>
                        <div className='botones-proyecto'>
                            <button className='boton-mas-info'>Más info <InfoIcon /></button>
                            <button className='boton-invertir' onClick={() => goToProyecto(proyecto)}>Invertir ahora <TrendingUpIcon /></button>
                        </div>
                    </div>
                ))}


            </section>
        </section>

    )
}