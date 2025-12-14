import './Estilos/PanelProyectos.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InfoIcon from '@mui/icons-material/Info';
import { useNavegacion } from '../hooks/navegacion';



export const PanelProyectos = ({ proyectosRef }) => {
    const { goToProyecto, goToMasInfoMariaTeresa } = useNavegacion();



    return (
        <section className='conteiner-panel-proyectos' ref={proyectosRef}>
            <h1 className='titulo-panel-proyecto'>Proyectos Activos</h1>

            <section className='panel-proyectos'>

                <div className="proyecto-en-panel">
                    <h1>Maria Teresa</h1>
                    <img src='./PanelSolar.jpg' alt="Maria Teresa" />
                    <h2 className='numero-generacion-estimada'>25%</h2>
                    <h3>Generación anual renovable estimada</h3>
                    <p>10 Unidades disponibles</p>
                    <div className='botones-proyecto'>

                        <button className='boton-mas-info' onClick={() => goToMasInfoMariaTeresa()}>Más info <InfoIcon /></button>
                        <button className='boton-invertir' onClick={() => goToProyecto()}>Invertir ahora <TrendingUpIcon /></button>
                    </div>
                </div>

            </section>
        </section>
    );
};
