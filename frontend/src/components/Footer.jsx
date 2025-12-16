import { getUrlLogo } from "../hooks/getUrlLogo"
import InstagramIcon from '@mui/icons-material/Instagram';
import './Estilos/Footer.css'
export const Footer = () => {
    return (

        <footer className="footer-app">
            <div className="contenedor-footer">
                <div className="secciones-footer">
                    <img src={getUrlLogo()} alt="Logo BCG" />
                </div>
                <div className="secciones-footer">
                    <h2><strong>Accesos</strong></h2>
                    <h3>Home</h3>
                    <h3>Proyectos</h3>
                    <h3>Formas de contrato</h3>



                </div>
                <div className="secciones-footer">
                    <h2><strong>Acerca Nuestro</strong></h2>
                    <h3>Contacto</h3>
                    <h3>Historia</h3>
                </div>
                <div className="secciones-footer">
                    <h2><strong>Redes sociales</strong></h2>
                    <div className="redes-sociales-footer">
                        <InstagramIcon /><a href="https://www.instagram.com/bcgingenieriaok/" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}