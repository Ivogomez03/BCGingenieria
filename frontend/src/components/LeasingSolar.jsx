import Data from '../mocks/modelo.json'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './Estilos/LeasingSolar.css'
export const LeasingSolar = () => {
    return (
        <main className='main-leasing-solar'>
            <section className='seccion-leasing-solar'>
                <div className='contenedor-titulo-leasing-solar'>
                    <h1>Leasing Solar </h1><WbSunnyIcon style={{ fontSize: '3rem' }} />
                </div>
                <h2>¿Como funciona?</h2>
                <div className='contenedor-leasing-informacion'>
                    {console.log(Data)}
                    <div>
                        <h2>Duración del contrato:</h2>

                        {Data.ComoFunciona.duracion && Data.ComoFunciona.duracion.map((texto, index) =>
                            (<p key={index}><ArrowForwardIosIcon style={{ fontSize: '1rem' }} />{texto}<br /></p>))}</div>
                    <div>
                        <h2>Propiedad al final del contrato:</h2>

                        {Data.ComoFunciona.propiedad && Data.ComoFunciona.propiedad.map((texto, index) =>
                            (<p key={index}><ArrowForwardIosIcon style={{ fontSize: '1rem' }} />{texto}</p>))}</div>
                    <div>
                        <h2>Pagos periódicos:</h2>

                        {Data.ComoFunciona.pagosPeriodicos && Data.ComoFunciona.pagosPeriodicos.map((texto, index) =>
                            (<p key={index}><ArrowForwardIosIcon style={{ fontSize: '1rem' }} />{texto}</p>))}</div>
                    <div>
                        <h2>Responsabilidades durante el contrato:</h2>

                        {Data.ComoFunciona.responsabilidades && Data.ComoFunciona.responsabilidades.map((texto, index) =>
                            (<p key={index}><ArrowForwardIosIcon style={{ fontSize: '1rem' }} />{texto}</p>))}
                    </div>
                    <div>
                        <h2>Beneficios al cliente:</h2>

                        {Data.ComoFunciona.beneficios && Data.ComoFunciona.beneficios.map((texto, index) =>
                            (<p key={index}><ArrowForwardIosIcon style={{ fontSize: '1rem' }} />{texto}</p>))}
                    </div>
                    <div>
                        <h2>Beneficios para la cooperativa y comuna:</h2>

                        {Data.ComoFunciona.beneficiosCooperativa && Data.ComoFunciona.beneficiosCooperativa.map((texto, index) =>
                            (<p key={index}><ArrowForwardIosIcon style={{ fontSize: '1rem' }} />{texto}</p>))}
                    </div>
                </div>
            </section>
        </main>

    )
}