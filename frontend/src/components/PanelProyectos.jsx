import './Estilos/PanelProyectos.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InfoIcon from '@mui/icons-material/Info';

export const PanelProyectos = () => {

    return (
        <section className={`panel-proyectos`}>
            <div className="proyecto-en-panel">
                <img src="./MariaTeresa.jpg" alt="Maria Teresa" />
                <h2 className='numero-generacion-estimada'>25%</h2>
                <h3>Generación anual renovable estimada</h3>
                <p>3 Unidades disponibles</p>
                <div className='botones-proyecto'>
                    <button className='boton-mas-info'>Mas info <InfoIcon /></button>
                    <button className='boton-invertir'>Invertir ahora <TrendingUpIcon /></button>
                </div>
            </div>
            <div className="proyecto-en-panel">
                <img src="./MariaTeresa.jpg" alt="Maria Teresa" />
                <h2 className='numero-generacion-estimada'>25%</h2>
                <h3>Generación anual renovable estimada</h3>
                <p>6 Unidades disponibles</p>
                <div className='botones-proyecto'>
                    <button className='boton-mas-info'>Mas info <InfoIcon /></button>
                    <button className='boton-invertir'>Invertir ahora <TrendingUpIcon /></button>
                </div>
            </div>
            <div className="proyecto-en-panel">
                <img src="./MariaTeresa.jpg" alt="Maria Teresa" />
                <h2 className='numero-generacion-estimada'>25%</h2>
                <h3>Generación anual renovable estimada</h3>
                <p>1 Unidad disponibles</p>
                <div className='botones-proyecto'>
                    <button className='boton-mas-info'>Mas info <InfoIcon /></button>
                    <button className='boton-invertir'>Invertir ahora <TrendingUpIcon /></button>
                </div>
            </div>
        </section>
    )
}